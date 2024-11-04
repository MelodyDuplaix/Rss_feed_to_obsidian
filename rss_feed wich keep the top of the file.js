module.exports = {
    entry: start,
    settings: {
      name: "RSS Feed",
      author: "Melody Duplaix",
      options: {
        "RSS2json API key": {
          type: "text",
          defaultValue: "",
          placeholder: "RSS2json API key",
        },
        "Date format": {
          type: "text",
          defaultValue: "DD-MM-YYYY dd",
          placeholder: "DD-MM-YYYY dd",
        },
        "Path to save articles": {
          type: "text",
          defaultValue: "RSS feed.md",
          placeholder: "Path/to/file",
        },
        "Path to the list of RSS feeds": {
          type: "text",
          defaultValue: "List of RSS feeds.md",
          placeholder: "Path/to/file",
        },
        "Number of articles to retrieve": {
          type: "text",
          defaultValue: 40,
          placeholder: 40,
        },
      },
    },
};

let QuickAdd, Settings;

async function start(params, settings) {
    QuickAdd = params;
    Settings = settings;

    // Configuration JSON
    const config = {
        rssListPath: Settings["Path to the list of RSS feeds"],
        outputFilePath: Settings["Path to save articles"],
        numberOfPosts: Settings["Number of articles to retrieve"],
        apiKey: Settings["RSS2json API key"],
        dateFormat: Settings["Date format"],
    };
    const {quickAddApi: {inputPrompt}} = params;

    // Read the RSS URLs from a text file
    async function fetchRssUrls(filePath) {
        const file = app.vault.getFileByPath(filePath);
        const text = await app.vault.read(file);
        return text.split('\n').map(line => line.trim()).filter(line => line);
    }

    // Fetch and parse the RSS feeds using RSS2JSON
    async function fetchFeeds(rssList) {
        const feeds = [];

        for (const url of rssList) {
            try {
                const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(url)}&api_key=${config.apiKey}&count=${config.numberOfPosts}`);
                const json = await response.json();
                if (json.status === "ok") {
                    feeds.push({
                        title: json.feed.title,
                        items: json.items.map(item => ({
                            title: item.title,
                            link: item.link,
                            pubDate: item.pubDate
                        }))
                    });
                } else {
                    console.error(`Error fetching feed ${url}: ${json.message}`);
                }
            } catch (error) {
                console.error(`Error loading feed ${url} : ${error}`);
            }
        }
        return feeds;
    }

    // Generate the output content
    function generateOutput(feeds, numberOfPosts) {
        const output = [];

        feeds.forEach(feed => {
            output.push(`# ${feed.title.replace(/&amp;/g, "&")}\n\n`);
            
            feed.items.slice(0, numberOfPosts).forEach(post => {
                const formattedDate = formatDate(post.pubDate);
                output.push(`- ${formattedDate} [${post.title}](${post.link}) (${moment(post.pubDate).format("HH:mm:ss")})\n`);
            });
            
            output.push('\n');
        });

        output.push('\n---\n');
        output.push(`RSS File Generated: ${moment().format("YYYY-MM-DD HH:mm:ss")}`);
        return output.join("");
    }

    // Format the date with the day of the week in French
    function formatDate(dateString) {
        if (!dateString) return "[Unknown date]";
        
        const date = moment(dateString).format(config.dateFormat);
        
        return `[[${date}]] `;
    }

    // Main function
    // Save the generated content to a file
    try {
        const rssList = await fetchRssUrls(config.rssListPath);
        const feeds = await fetchFeeds(rssList);
        const newOutput = generateOutput(feeds, config.numberOfPosts);

        const file = app.vault.getFileByPath(config.outputFilePath);
        const oldContent = await app.vault.read(file);
        
        const oldLines = oldContent.split('\n');
        
        const indexOfBackticks = oldLines.findIndex(line => line.trim() === "```");
        
        let preservedLines;
        if (indexOfBackticks !== -1) {
            preservedLines = oldLines.slice(0, indexOfBackticks + 2).join('\n'); 
        } else {
            preservedLines = oldContent; 
        }

        const finalOutput = `${preservedLines}\n${newOutput}`;

        await app.vault.modify(file, finalOutput);
        new Notice("RSS feed updated successfully");
    }
    catch (error) {
        new Notice("Error updating RSS feed: " + error);
        console.error(error);    
    }
}
