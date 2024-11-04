---
jour: 2024-11-04 17:00:00
---

```datacorejsx
return function view() {
    let date = dc.useCurrentFile().$frontmatter.jour.value;
	let filepath = dc.useCurrentFile().$path;
	
	const onClick = (file) => {
	    app.fileManager.processFrontMatter(file, frontmatter => {  
	        frontmatter["jour"] = moment().format("YYYY-MM-DD HH:mm:ss");
	    });	
	}
	
	const articles = dc.useQuery('@list-item and childof(@page and $name =  "Flux RSS")')
	    .filter(p => {
	        // Extraire la date
	        const articleDate = moment(p.$text.slice(2, 12), "DD-MM-YYYY");
	
	        // Extraire l'heure entre parenthèses
	        const timeMatch = p.$text.match(/\((\d{2}:\d{2}:\d{2})\)/);
	        let articleTime = moment(); // Valeur par défaut au cas où l'heure ne serait pas trouvée
	
	        if (timeMatch) {
	            // Créer un moment avec l'heure extraite
	            const time = timeMatch[1]; // Ex. "07:56:24"
	            articleTime = moment(time, "HH:mm:ss");
	        }
	
	        // Combiner la date et l'heure pour comparer avec la date actuelle
	        const articleDateTime = articleDate.set({
	            hour: articleTime.hour(),
	            minute: articleTime.minute(),
	            second: articleTime.second() // On ajoute les secondes si nécessaire
	        });
	
	        // Comparer avec la date actuelle
	        console.log(moment(date.toString("DD-MM-YYYY HH:mm:ss")))
	        return moment(date.toString("DD-MM-YYYY HH:mm:ss")).isBefore(articleDateTime);
	    });



    return (
        <div>
            <span>{articles.length} Articles à lire</span>
            <ul>
                {articles.map(item => (
                    <li key={item.$id}>
                        {item.$text.slice(2, 12) + " "} 
                        <a href={item.$text.slice(17).match(/(https?:\/\/[^\)]+)\)/)[1]}>
                            {item.$text.slice(17).match(/\[([^\]]+)\]/)[1]}
                        </a>
                    </li>
                ))}
            </ul>
            <button onClick={() => onClick(app.vault.getFileByPath(filepath))}>Tout lu</button>
            <button onClick={() => window.open('obsidian://adv-uri?commandid=quickadd%3Achoice%3A61ce138d-435a-4bf4-9c43-db4b3caf758b')}>Tout recharger</button>
        </div>
    );
}
```

# cerveau-numerique.fr

- [[29-03-2024 ve]] [Comment Synchroniser Obsidian avec Obsidian Sync – Guide Complet](https://cerveau-numerique.fr/obsidian/obsidian-sync-guide/)
- [[26-01-2024 ve]] [01-2024 Vos retours sont des pépites ! 📩](https://cerveau-numerique.fr/pkm/vos-retours-sont-des-pepites-janvier-2024/)
- [[19-01-2024 ve]] [Dictionnaire de Gestion de Connaissances Personnelles (PKM) : Le Guide Complet des Définitions](https://cerveau-numerique.fr/pkm/dictionnaire-de-gestion-de-connaissances-personnelles-pkm-le-guide-complet-des-definitions/)
- [[28-12-2023 je]] [Newsletter 📫CN – 78🧠 Les plugins du mois de Novembre](https://cerveau-numerique.fr/newsletter/selection-plugins-obsidian-novembre-2023/)
- [[15-12-2023 ve]] [Newsletter 📫CN – 73🧠 Ce jeu d’écolier·e va t’aider à explorer ta créativité](https://cerveau-numerique.fr/newsletter/notes-creatives-stimuler-creativite/)
- [[07-12-2023 je]] [Newsletter 📫CN – 72🧠 7 principes indispensables pour gérer tes projets](https://cerveau-numerique.fr/newsletter/gerer-projets-7-principes-obsidian/)
- [[06-12-2023 me]] [Newsletter 📫CN-71🧠 Cette rupture aurait pu mal tourner…](https://cerveau-numerique.fr/newsletter/alternative-kanban-organisation-projets-taches/)
- [[17-10-2023 ma]] [Newsletter 📫CN 70🧠 Les plugins du mois d’Octobre !](https://cerveau-numerique.fr/newsletter/newsletter-%F0%9F%93%ABcn70%F0%9F%A7%A0-les-plugins-du-mois-doctobre/)
- [[17-10-2023 ma]] [Newsletter 📫CN 69🧠 – 📖 60 minutes pour organiser tes livres avec Obsidian](https://cerveau-numerique.fr/newsletter/newsletter-%F0%9F%93%ABcn-69-%F0%9F%93%96-60-minutes-pour-organiser-tes-livres-avec-obsidian/)
- [[29-09-2023 ve]] [Newsletter 📫CN 67🧠 – 11 enseignements tirés du livre « How to take smart notes »](https://cerveau-numerique.fr/newsletter/notes-efficaces-livre-how-to-take-smart-notes/)

# Actualité des technologies — Siècle Digital

- [[30-10-2024 me]] [Google améliore la gestion des performances de Chrome avec de nouvelles fonctionnalités pour contrôler l’utilisation mémoire des onglets](https://siecledigital.fr/2024/10/30/google-ameliore-la-gestion-des-performances-de-chrome-avec-de-nouvelles-fonctionnalites-pour-controler-lutilisation-memoire-des-onglets/)
- [[29-10-2024 ma]] [Annonces attendues cette semaine chez Apple : les nouveautés Mac à venir](https://siecledigital.fr/2024/10/29/annonces-attendues-cette-semaine-chez-apple-les-nouveautes-mac-a-venir/)
- [[24-10-2024 je]] [Participez au Tech Show Paris 2024 : l’événement incontournable pour les professionnels de la tech](https://siecledigital.fr/2024/10/24/participez-au-tech-show-paris-2024-levenement-incontournable-pour-les-professionnels-de-la-tech/)
- [[24-10-2024 je]] [Ledger sanctionnée par la CNIL : une amende de 750 000 euros pour des manquements à la protection des données](https://siecledigital.fr/2024/10/24/ledger-sanctionnee-par-la-cnil-une-amende-de-750-000-euros-pour-des-manquements-a-la-protection-des-donnees/)
- [[24-10-2024 je]] [Digital InPulse Lille 2024 : Click &amp; Live et Wakatoon, 2 start-ups lauréates qui réinventent le secteur culturel](https://siecledigital.fr/2024/10/24/digital-inpulse-lille-2024-click-live-et-wakatoon-2-start-ups-laureates-qui-reinventent-le-secteur-culturel/)
- [[23-10-2024 me]] [Les tendances technologiques stratégiques pour 2025 selon Gartner : Intelligence artificielle, cryptographie post-quantique et plus encore](https://siecledigital.fr/2024/10/23/les-tendances-technologiques-strategiques-pour-2025-selon-gartner-intelligence-artificielle-cryptographie-post-quantique-et-plus-encore/)
- [[21-10-2024 lu]] [Apple introduit la certification des appels et emails pour les entreprises avec Business Connect](https://siecledigital.fr/2024/10/21/apple-introduit-la-certification-des-appels-et-emails-pour-les-entreprises-avec-business-connect/)
- [[15-10-2024 ma]] [Etude YouTube : quels sont les éléments clés qui attirent et retiennent l’attention des utilisateurs ?](https://siecledigital.fr/2024/10/15/etude-youtube-quels-sont-les-elements-cles-qui-attirent-et-retiennent-lattention-des-utilisateurs/)
- [[15-10-2024 ma]] [Apple promet des innovations révolutionnaires pour les années à venir malgré le revers du Vision Pro](https://siecledigital.fr/2024/10/15/apple-promet-des-innovations-revolutionnaires-pour-les-annees-a-venir-malgre-le-revers-du-vision-pro/)
- [[14-10-2024 lu]] [iOS 18 : La nouvelle gestion des appels indésirables divise les utilisateurs d’iPhone](https://siecledigital.fr/2024/10/14/ios-18-la-nouvelle-gestion-des-appels-indesirables-divise-les-utilisateurs-diphone/)
- [[14-10-2024 lu]] [IA : Google affronte une concurrence inédite dans le secteur des moteurs de recherche](https://siecledigital.fr/2024/10/14/ia-google-affronte-une-concurrence-inedite-dans-le-secteur-des-moteurs-de-recherche/)
- [[11-10-2024 ve]] [Les sanctions de la CNIL frappent deux entreprises de voyance en ligne pour manquements graves à la protection des données](https://siecledigital.fr/2024/10/11/les-sanctions-de-la-cnil-frappent-deux-entreprises-de-voyance-en-ligne-pour-manquements-graves-a-la-protection-des-donnees/)
- [[11-10-2024 ve]] [Grèce et Italie : une répression sans précédent contre l’IPTV illégale](https://siecledigital.fr/2024/10/11/grece-et-italie-une-repression-sans-precedent-contre-liptv-illegale/)
- [[10-10-2024 je]] [Les États-Unis envisagent un démantèlement historique de Google pour abus de position dominante](https://siecledigital.fr/2024/10/10/les-etats-unis-envisagent-un-demantelement-historique-de-google-pour-abus-de-position-dominante/)
- [[27-11-2019 me]] [Freshdesk : une solution complète de service client pour doper votre support](https://siecledigital.fr/2019/11/27/freshdesk-solution-service-client-support/)
- [[08-12-2020 ma]] [Digital Adoption Platform : les solutions Saas qui accélèrent la transformation digitale des entreprises](https://siecledigital.fr/2020/12/08/digital-adoption-platform-les-solutions-saas-qui-accelerent-la-transformation-digitale-des-entreprises/)
- [[30-06-2014 lu]] [Salesforce1 prône l’évolution de la relation client](https://siecledigital.fr/2014/06/30/salesforce1-prone-levolution-relation-client/)
- [[25-06-2020 je]] [Comment les organismes de formation peuvent-ils augmenter leur productivité avec une solution CRM dédiée ?](https://siecledigital.fr/2020/06/25/comment-les-organismes-de-formation-peuvent-ils-augmenter-leur-productivite-avec-une-solution-crm-dediee/)
- [[11-04-2019 je]] [Saas Advisor : un service de recommandation logiciel pour trouver les meilleurs outils marketing pour votre organisation](https://siecledigital.fr/2019/04/11/saas-advisor-un-service-de-recommandation-logiciel-pour-trouver-les-meilleurs-outils-marketing-pour-votre-organisation/)
- [[10-07-2024 me]] [5 astuces de productivité essentielles pour les PME](https://siecledigital.fr/2024/07/10/5-astuces-de-productivite-essentielles-pour-les-pme/)

# Obsidian Blog

- [[01-10-2024 ma]] [Obsidian October 2024](https://obsidian.md/blog/2024-obsidian-october/)
- [[20-03-2024 me]] [Obsidian Sync now starts at $4 per month with the new Standard plan](https://obsidian.md/blog/standard-plan/)
- [[11-03-2024 lu]] [Announcing JSON Canvas: an open file format for infinite canvas data](https://obsidian.md/blog/json-canvas/)
- [[24-01-2024 me]] [2023 Gems of the year winners](https://obsidian.md/blog/2023-goty-winners/)
- [[10-01-2024 me]] [New security page and independent audit completed by Cure53](https://obsidian.md/blog/cure53-security-audit/)
- [[22-12-2023 ve]] [2023 Gems of the year nominations](https://obsidian.md/blog/2023-goty-nominations/)
- [[21-11-2023 ma]] [New Obsidian Sync plans: bigger, better, faster, smoother](https://obsidian.md/blog/new-sync-plans/)
- [[02-11-2023 je]] [Goodbye legacy editor](https://obsidian.md/blog/goodbye-legacy-editor/)
- [[19-10-2023 je]] [Obsidian Importer now converts Apple Notes to portable, durable files](https://obsidian.md/blog/apple-notes-export/)
- [[26-09-2023 ma]] [Obsidian October 2023](https://obsidian.md/blog/2023-obsidian-october/)
- [[12-07-2023 me]] [Free your notes](https://obsidian.md/blog/free-your-notes/)
- [[05-06-2023 lu]] [How to verify Obsidian Sync's end-to-end encryption](https://obsidian.md/blog/verify-obsidian-sync-encryption/)
- [[01-06-2023 je]] [The new Obsidian icon](https://obsidian.md/blog/new-obsidian-icon/)
- [[27-04-2023 je]] [New developer documentation site](https://obsidian.md/blog/new-documentation-site/)
- [[18-04-2023 ma]] [Obsidian Publish now offers more for less: a lower price, with new features, improved SEO and accessibility](https://obsidian.md/blog/obsidian-publish-now-offers-more-for-less/)
- [[21-02-2023 ma]] [2022 Gems of the year winners](https://obsidian.md/blog/2022-goty-winners/)
- [[06-02-2023 lu]] [I’m joining Obsidian full-time as CEO](https://obsidian.md/blog/kepano-ceo/)
- [[23-01-2023 lu]] [New Code of Conduct for our community](https://obsidian.md/blog/new-code-of-conduct/)
- [[30-12-2022 ve]] [2022 Gems of the year nominations](https://obsidian.md/blog/2022-goty-nominations/)
- [[07-12-2022 me]] [Obsidian October 2022 winners](https://obsidian.md/blog/2022-obsidian-october-winners/)
- [[23-09-2022 ve]] [Obsidian October 2022 &quot;Back to School&quot;: make plugins, content, and learn together](https://obsidian.md/blog/2022-obsidian-october-announcement/)
- [[29-08-2022 lu]] [1.0 Theme migration guide](https://obsidian.md/blog/1-0-theme-migration-guide/)
- [[12-07-2022 ma]] [How to update your plugin to support pop-out windows](https://obsidian.md/blog/how-to-update-plugins-to-support-pop-out-windows/)
- [[14-06-2022 ma]] [Plugin developers: CodeMirror 6 migration guide for v6.0](https://obsidian.md/blog/codemirror-6-migration-guide/)
- [[25-01-2022 ma]] [2021 Gems of the year winners](https://obsidian.md/blog/2021-goty-winners/)
- [[15-12-2021 me]] [Live Preview update](https://obsidian.md/blog/live-preview-update/)
- [[08-12-2021 me]] [2021 Gems of the year nominations](https://obsidian.md/blog/2021-goty-nominations/)
- [[01-12-2021 me]] [Obsidian October 2021 winners](https://obsidian.md/blog/2021-obsidian-october-winners/)
- [[21-09-2021 ma]] [Obsidian October 2021: make plugins and themes together and win awards!](https://obsidian.md/blog/2021-obsidian-october-announcement/)
- [[01-07-2021 je]] [Last chance to get early bird discount for Sync and Publish](https://obsidian.md/blog/last-chance-to-get-early-bird/)
- [[09-01-2021 sa]] [2020 Gems of the year winners](https://obsidian.md/blog/2020-goty-winners/)
- [[01-12-2020 ma]] [2020 Gems of the year nominations](https://obsidian.md/blog/2020-goty-nominations/)

# Obsidian Changelog

- [[16-10-2024 me]] [Obsidian 1.7 Mobile (Public)](https://obsidian.md/changelog/2024-10-16-mobile-v1.7.4/)
- [[16-10-2024 me]] [Obsidian 1.7 Desktop (Public)](https://obsidian.md/changelog/2024-10-16-desktop-v1.7.4/)
- [[08-10-2024 ma]] [Obsidian 1.7.4 Mobile (Early access)](https://obsidian.md/changelog/2024-10-08-mobile-v1.7.4/)
- [[08-10-2024 ma]] [Obsidian 1.7.4 Desktop (Early access)](https://obsidian.md/changelog/2024-10-08-desktop-v1.7.4/)
- [[24-09-2024 ma]] [Obsidian 1.7.3 Mobile (Early access)](https://obsidian.md/changelog/2024-09-24-mobile-v1.7.3/)
- [[24-09-2024 ma]] [Obsidian 1.7.3 Desktop (Early access)](https://obsidian.md/changelog/2024-09-24-desktop-v1.7.3/)
- [[19-09-2024 je]] [Obsidian 1.7.2 Mobile (Early access)](https://obsidian.md/changelog/2024-09-19-mobile-v1.7.2/)
- [[19-09-2024 je]] [Obsidian 1.7.2 Desktop (Early access)](https://obsidian.md/changelog/2024-09-19-desktop-v1.7.2/)
- [[27-08-2024 ma]] [Obsidian 1.7.1 Mobile (Early access)](https://obsidian.md/changelog/2024-08-27-mobile-v1.7.1/)
- [[27-08-2024 ma]] [Obsidian 1.7.1 Desktop (Early access)](https://obsidian.md/changelog/2024-08-27-desktop-v1.7.1/)
- [[08-08-2024 je]] [Obsidian 1.7.0 Mobile (Early access)](https://obsidian.md/changelog/2024-08-08-mobile-v1.7.0/)
- [[08-08-2024 je]] [Obsidian 1.7.0 Desktop (Early access)](https://obsidian.md/changelog/2024-08-08-desktop-v1.7.0/)
- [[18-07-2024 je]] [Obsidian 1.6.7 Mobile (Public)](https://obsidian.md/changelog/2024-07-18-mobile-v1.6.7/)
- [[18-07-2024 je]] [Obsidian 1.6.7 Desktop (Public)](https://obsidian.md/changelog/2024-07-18-desktop-v1.6.7/)
- [[11-07-2024 je]] [Obsidian 1.6.7 Mobile (Early access)](https://obsidian.md/changelog/2024-07-11-mobile-v1.6.7/)
- [[11-07-2024 je]] [Obsidian 1.6.7 Desktop (Early access)](https://obsidian.md/changelog/2024-07-11-desktop-v1.6.7/)
- [[09-07-2024 ma]] [Obsidian 1.6.6 Mobile (Early access)](https://obsidian.md/changelog/2024-07-09-mobile-v1.6.6/)
- [[09-07-2024 ma]] [Obsidian 1.6.6 Desktop (Early access)](https://obsidian.md/changelog/2024-07-09-desktop-v1.6.6/)
- [[25-06-2024 ma]] [Obsidian 1.6.5 Mobile (Public)](https://obsidian.md/changelog/2024-06-25-mobile-v1.6.5/)
- [[25-06-2024 ma]] [Obsidian 1.6.5 Desktop (Public)](https://obsidian.md/changelog/2024-06-25-desktop-v1.6.5/)
- [[20-06-2024 je]] [Obsidian 1.6.4 Mobile (Early access)](https://obsidian.md/changelog/2024-06-20-mobile-v1.6.4/)
- [[20-06-2024 je]] [Obsidian 1.6.4 Desktop (Early access)](https://obsidian.md/changelog/2024-06-20-desktop-v1.6.4/)
- [[08-06-2024 sa]] [Obsidian 1.6.3 Mobile (Public)](https://obsidian.md/changelog/2024-06-08-mobile-v1.6.3/)
- [[08-06-2024 sa]] [Obsidian 1.6.3 Desktop (Public)](https://obsidian.md/changelog/2024-06-08-desktop-v1.6.3/)
- [[07-06-2024 ve]] [Obsidian 1.6 Mobile (Public)](https://obsidian.md/changelog/2024-06-07-mobile-v1.6.2/)
- [[07-06-2024 ve]] [Obsidian 1.6 Desktop (Public)](https://obsidian.md/changelog/2024-06-07-desktop-v1.6.2/)
- [[04-06-2024 ma]] [Obsidian 1.6.2 Mobile (Early access)](https://obsidian.md/changelog/2024-06-04-mobile-v1.6.2/)
- [[04-06-2024 ma]] [Obsidian 1.6.2 Desktop (Early access)](https://obsidian.md/changelog/2024-06-04-desktop-v1.6.2/)
- [[22-05-2024 me]] [Obsidian 1.6.1 Mobile (Early access)](https://obsidian.md/changelog/2024-05-22-mobile-v1.6.1/)
- [[22-05-2024 me]] [Obsidian 1.6.1 Desktop (Early access)](https://obsidian.md/changelog/2024-05-22-desktop-v1.6.1/)
- [[09-05-2024 je]] [Obsidian 1.6.0 Desktop (Early access)](https://obsidian.md/changelog/2024-05-09-desktop-v1.6.0/)
- [[31-03-2024 di]] [Obsidian 1.5.12 Mobile (Public)](https://obsidian.md/changelog/2024-03-31-mobile-v1.5.12/)
- [[31-03-2024 di]] [Obsidian 1.5.12 Desktop (Public)](https://obsidian.md/changelog/2024-03-31-desktop-v1.5.12/)
- [[19-03-2024 ma]] [Obsidian 1.5.11 Mobile (Public)](https://obsidian.md/changelog/2024-03-19-mobile-v1.5.11/)
- [[19-03-2024 ma]] [Obsidian 1.5.11 Desktop (Public)](https://obsidian.md/changelog/2024-03-19-desktop-v1.5.11/)
- [[13-03-2024 me]] [Obsidian 1.5.11 Mobile (Early access)](https://obsidian.md/changelog/2024-03-13-mobile-v1.5.11/)
- [[13-03-2024 me]] [Obsidian 1.5.11 Desktop (Early access)](https://obsidian.md/changelog/2024-03-13-desktop-v1.5.11/)
- [[05-03-2024 ma]] [Obsidian 2024.03.05 Publish (Public)](https://obsidian.md/changelog/2024-03-05-publish/)
- [[04-03-2024 lu]] [Obsidian 1.5.10 Desktop (Early access)](https://obsidian.md/changelog/2024-03-04-desktop-v1.5.10/)
- [[04-03-2024 lu]] [Obsidian 1.5.9 Mobile (Early access)](https://obsidian.md/changelog/2024-03-04-mobile-v1.5.9/)

# Share & showcase - Obsidian Forum

- [[03-11-2024 di]] [QuickAdd script for Import RSS Feed](https://forum.obsidian.md/t/quickadd-script-for-import-rss-feed/90952)
- [[03-11-2024 di]] [New plugin: Tabzoom! Adjust the zoom level for individual tabs, make a minimap for any note](https://forum.obsidian.md/t/new-plugin-tabzoom-adjust-the-zoom-level-for-individual-tabs-make-a-minimap-for-any-note/90949)
- [[03-11-2024 di]] [Introducing Luminex: A New Obsidian Theme Focused on Clean Aesthetics and Usability](https://forum.obsidian.md/t/introducing-luminex-a-new-obsidian-theme-focused-on-clean-aesthetics-and-usability/90921)
- [[03-11-2024 di]] [[Plug-in] Clipboard Tools: Optimize clipboard images in WEBP/AVIF format, leverage AI models convert them to Markdown/LaTeX](https://forum.obsidian.md/t/plug-in-clipboard-tools-optimize-clipboard-images-in-webp-avif-format-leverage-ai-models-convert-them-to-markdown-latex/90904)
- [[01-11-2024 ve]] [Task Board : Another GTD methodology | Similar to GitHub Projects Planning](https://forum.obsidian.md/t/task-board-another-gtd-methodology-similar-to-github-projects-planning/90849)
- [[31-10-2024 je]] [Transform a Obsidian markdown table into an Anki-card format using the plug-in Obsidian_to_Anki](https://forum.obsidian.md/t/transform-a-obsidian-markdown-table-into-an-anki-card-format-using-the-plug-in-obsidian-to-anki/90780)
- [[31-10-2024 je]] [Callout Toggles: easily add/change/remove callouts in your notes](https://forum.obsidian.md/t/callout-toggles-easily-add-change-remove-callouts-in-your-notes/90754)
- [[31-10-2024 je]] [A change of heart - No more Wikilinks usage for me!](https://forum.obsidian.md/t/a-change-of-heart-no-more-wikilinks-usage-for-me/90750)
- [[30-10-2024 me]] [Running code from codeblock inside shell](https://forum.obsidian.md/t/running-code-from-codeblock-inside-shell/90740)
- [[29-10-2024 ma]] [Get colors with obsidian charts dataviewjs query](https://forum.obsidian.md/t/get-colors-with-obsidian-charts-dataviewjs-query/90693)
- [[29-10-2024 ma]] [[Style] Grid Background And Dotted Background](https://forum.obsidian.md/t/style-grid-background-and-dotted-background/90681)
- [[29-10-2024 ma]] [Get Today's Daily Note With Dataview](https://forum.obsidian.md/t/get-todays-daily-note-with-dataview/90680)
- [[29-10-2024 ma]] [This is Ridian: R in Obsidian.](https://forum.obsidian.md/t/this-is-ridian-r-in-obsidian/90669)
- [[28-10-2024 lu]] [Make Obsidian Look &amp; Function Like Apple Notes](https://forum.obsidian.md/t/make-obsidian-look-function-like-apple-notes/90610)
- [[27-10-2024 di]] [Open your Obsidian vault using an https link](https://forum.obsidian.md/t/open-your-obsidian-vault-using-an-https-link/90591)
- [[26-10-2024 sa]] [Making Clickable Navigation Maps with dataviewJS](https://forum.obsidian.md/t/making-clickable-navigation-maps-with-dataviewjs/90546)
- [[26-10-2024 sa]] [Property date with variable in template](https://forum.obsidian.md/t/property-date-with-variable-in-template/90538)
- [[26-10-2024 sa]] [Blog post with my template and some scripts](https://forum.obsidian.md/t/blog-post-with-my-template-and-some-scripts/90536)
- [[24-10-2024 je]] [[Snippet] Obsidian Seasonal Header Palette](https://forum.obsidian.md/t/snippet-obsidian-seasonal-header-palette/90401)
- [[22-10-2024 ma]] [Migrate your Notion workspace to Obsidian with ease :tada:](https://forum.obsidian.md/t/migrate-your-notion-workspace-to-obsidian-with-ease/90297)
- [[20-10-2024 di]] [New Plguin: Obsidian Modal Opener](https://forum.obsidian.md/t/new-plguin-obsidian-modal-opener/90179)
- [[19-10-2024 sa]] [Small utility I made to pipe content into Obsidian with frontmatter and tags](https://forum.obsidian.md/t/small-utility-i-made-to-pipe-content-into-obsidian-with-frontmatter-and-tags/90136)
- [[18-10-2024 ve]] [Compact and clean file explorer css](https://forum.obsidian.md/t/compact-and-clean-file-explorer-css/90085)
- [[17-10-2024 je]] [New Plugin: Obsidian Smart Composer - Cursor AI-like editing](https://forum.obsidian.md/t/new-plugin-obsidian-smart-composer-cursor-ai-like-editing/90016)
- [[17-10-2024 je]] [Minimal Floating Centered Status Bar](https://forum.obsidian.md/t/minimal-floating-centered-status-bar/89998)

---
RSS File Generated: 2024-11-04 15:19:58
