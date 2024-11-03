# Rss_feed_to_obsidian

I wanted to be able to retrieve articles from my RSS feeds from Obsidian. I didn't necessarily need to read them in Obsidian since I read them in a browser, so I can highlight them and import them if necessary with Obsidian Web Clipper.
Furthermore, I had tried a few plugins, but either they imported all the articles into separate notes directly (which cluttered up my notes too much since most of them I only read them but don't keep them), or they were too old and no longer maintained.

I came across the python script on GitHub [RSS2Obsidian](https://github.com/clampro/rss2obsidian) by [Clampro](https://github.com/clampro), which is practical, but is not very integrated into obsidian in my case since I have to launch it elsewhere, etc.

So I had the idea of ​​adapting it into a javascript script that I can run with quickadd. We can also launch it automatically at startup via quickadd.

This script therefore creates a note with the links to the latest articles (configurable number) from the chosen RSS feeds, and their publication date.

The publication date is put in the form of a link which allows us to either query with dataview the new articles of the day in our daily notes. Or to just be able to see them in the backlinks in our daily note.

It requires a API key on [RSS2json](https://rss2json.com/#rss_url=http%3A%2F%2Ffeeds.twit.tv%2Fbrickhouse.xml) (free if you use less than 25 rss feeds).

You must first create a note (basic List of RSS feeds.md but configurable) in which you can place links to RSS feeds, one per line. For example :
```md
https://cerveau-numerique.fr/feed/
https://siecledigital.fr/technologie/feed/
https://obsidian.md/feed.xml
https://obsidian.md/changelog.xml
https://forum.obsidian.md/c/share-showcase/9.rss
```

Then, we create the empty note, where the basic RSS articles will be added under the name RSS feed.md, also configurable.

Then, we import [this js file](https://github.com/MelodyDuplaix/Rss_feed_to_obsidian/blob/main/rss_feed.js) into the quickadd script folder.

Finally, we create a macro in quickadd, under the name we want, and we add the previously added script in user scripts.

We can then click on the little wheel: (I personally left a delay before the script launched to give time for obsidian and the plugins to finish launching, but I don't think this is obligatory)

![3c21fc6805e07da52f289cd07810783d8ac729a3_2_702x562](https://github.com/user-attachments/assets/6510b23b-20ad-4444-a50c-4fcc9aa7f390)


Which allows us to configure the script according to preferences. It is especially necessary to put your [RSS2json Api Key](https://rss2json.com/#rss_url=http%3A%2F%2Ffeeds.twit.tv%2Fbrickhouse.xml) there. The Date format is the format in which the publication date of the articles will be put, in the form of a link, so I advise you to put the date format of your daily notes there.

![78d339c1b7888e2f1ffad49db33c2d277088d279](https://github.com/user-attachments/assets/a0f61a8f-37e7-4b3f-ae1c-c40edb15ce0f)


If you want to start the script at startup, you must go to manager macros in the quickadd options and activate the run on plugin load.

When the script is launched, we obtain the articles in the chosen note in this format:

![1f462767da3caadcef10d9b5b658306c51cad680_2_774x516](https://github.com/user-attachments/assets/7736caaa-72d9-4bd7-baef-1679574bd742)
