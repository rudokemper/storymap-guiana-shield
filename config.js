var config = {
    style: 'mapbox://styles/rkemper/ck2mldtnk0ipa1cqenbut5kp0',
    accessToken: 'pk.eyJ1IjoicmtlbXBlciIsImEiOiJjaWp0Y3kydnIwMWdwdTdtODcwM2c5MTA0In0.JbjaRlNOjaTrk5kyOicMfg',
    showMarkers: false,
    theme: 'dark',
    use3dTerrain: false,
    title: 'The Guiana Shield: One of the Last Wild Places on Earth',
    logo: 'images/act-logo.png',
    bookmarks: '<strong>Bookmarks</strong>: <a href="#page1">Guiana Shield overview</a> | <a href="#page3">Eastern Guiana Shield</a> | <a href="#page8">Kanashen (Guyana)</a> | <a href="#page10">Kwamalasamutu (Suriname)</a> | <a href="#page12">Camopi (French Guiana)</a> | <a href="#page14">Tumucumaque (Brazil)</a> | <a href="#page16">ACT\'s strategy</a><div id="rotate-mobile"><em>For optimal viewing of this storytelling map on mobile, rotate your device to a horizontal orientation.</em><br><br><img src="images/device.png">',
	footer: '<strong>Bookmarks</strong>: <a href="#page1">Guiana Shield overview</a> | <a href="#page3">Eastern Guiana Shield</a> | <a href="#page8">Kanashen (Guyana)</a> | <a href="#page10">Kwamalasamutu (Suriname)</a> | <a href="#page12">Camopi (French Guiana)</a> | <a href="#page14">Tumucumaque (Brazil)</a> | <a href="#page16">ACT\'s strategy</a><br><br><strong>Data sources:</strong> RAISG (Amazon watershed, protected areas, indigenous territories, mining concessions), GMD (mining concessions in Suriname), WWF (hydrology), Zarin/WHRC (tree biomass density).<br><br>Storytelling map by the Amazon Conservation Team, 2021. <a href="https://amazonteam.org/storytelling-maps/" target="_blank">More ACT storytelling maps</a> »<br><br>Built with support from:<br><a href="https://www.dobecology.nl/" target="_blank"><img src="images/dob-ecology.png" style="margin-top: 5px;"></a><br><br><a href="https://amazonteam.org" class="fas fa-link" target="_blank"></a>&nbsp;<a href="https://amazonteam.org/storytelling-maps/" class="fas fa-map" target="_blank"></a>&nbsp;<a href="https://www.instagram.com/amazonconservationteam/?hl=en" class="fab fa-instagram" target="_blank"></a>&nbsp;<a href="http://twitter.com/AmazonTeamOrg" class="fab fa-twitter" target="_blank"></a>&nbsp;<a href="https://www.facebook.com/AmazonTeamOrg/" class="fab fa-facebook-f" target="_blank"></a>&nbsp;<a href="https://www.linkedin.com/company/amazon-conservation-team/" class="fab fa-linkedin" target="_blank"></a>&nbsp;<a href="https://www.youtube.com/channel/UCN7P8Z0eBlZrecVsAiNNj6w?view_as=subscriber" class="fab fa-youtube" target="_blank"></a>',
    chapters: [
        {
            id: 'page1',
            alignment: "left",
            hidden: false,
            title: 'What is the Guiana Shield?',
            image: 'images/colombia-mesa.jpg',
            description: 'Located along the northern coast of South America, the Guiana Shield is a 1.7-billion-year-old geological formation that is home to lowland and submontane forests and high flat-topped peak mountains known as tepuis. As a whole, the Shield covers 270 million hectares and encompasses French Guiana, Suriname, Guyana, Venezuela, and parts of Colombia and Brazil. In total, the Shield embraces 26% of Amazonia (overlap with the Amazon River watershed shown here <span style="font-weight: bold; color: #004ca8;">in blue</span>). Home to both significant biological and cultural diversity, it is described by the United Nations Development Programme (UNDP) as being of “regional and global significance.”',
            location: {
                center: [-68, -1], 
				zoom: 4,
				pitch: 0.00,
				bearing: 0.00,
            },
            mapAnimation: "flyTo",
            rotateAnimation: false,
            callback: "",
            onChapterEnter: [
                {
                    layer: 'watersheds2-26pedv',
                    opacity: 0.2
				},              	
                {
                    layer: 'boundaries-1w7tpp',
                    opacity: 0.4
                },
                {
                    layer: 'boundaries-1w7tpp copy',
                    opacity: 0.4
                },	
                {
                    layer: 'majorrivers-dcf386',
                    opacity: 0
                },		
                {
                    layer: 'majorrivers-dcf386 copy',
                    opacity: 0.2
                },				
                {
                    layer: 'watersheds-amazon',
                    opacity: 1
                },
                {
                    layer: 'watersheds2-26pedv copy 2',
                    opacity: 0
                },
                {
                    layer: 'watersheds2-26pedv copy 1',
                    opacity: 0
                },				
                {
                    layer: 'countries',
                    opacity: 1
                },
                {
                    layer: 'mapbox-terrain-rgb',
                    opacity: 0
                },
                {
                    layer: 'biomass',
                    opacity: 0
                }
			],
            onChapterExit: [
                {
                    layer: 'biomass',
                    opacity: 0
                }
            ]
        },
        {
            id: 'page2',
            alignment: "left",
            hidden: false,            
            title: 'South America\'s Guiana Shield',
            image: 'images/roraima.jpg',
            description: 'Representing one of the world’s most pristine rainforest landscapes, the Guiana Shield stores roughly 18 percent of the world’s tropical forest carbon and 20 percent of the world’s fresh water. There are at three major water basins that flow through the Shield: the Orinoco basin (<span style="font-weight: bold; color: #6d2077;">in purple</span>), the Amazon basin (<span style="font-weight: bold; color: #2b7777;">in teal</span>), and a series of watersheds that flow into the Atlantic directly (<span style="font-weight: bold; color: #e56a54;">in tangerine</span>).<br><br>A recent research paper has indicated that deforesting less than a third of the Guiana Shield would have catastrophic hydro-climactic impacts, resulting in substantial changes in the water cycle across the whole continent with negative impacts on biodiversity and ecosystem services (Bovolo et al. 2018). The Shield also comprises a biodiversity hotspot, home to thriving keystone species of biodiversity with an estimated 4,000 vertebrate species and 20,000 plant species known to science, 40% of which are endemic. ',
            location: {
                center: [-62, 2], 
				zoom: 5,
				pitch: 0.00,
				bearing: 0.00,
            },
            mapAnimation: "flyTo",
            rotateAnimation: false,
            callback: "",
            onChapterEnter: [
                {
                    layer: 'watersheds2-26pedv',
                    opacity: 0.2
				},              	
                {
                    layer: 'boundaries-1w7tpp',
                    opacity: 0.4
                },
                {
                    layer: 'boundaries-1w7tpp copy',
                    opacity: 0.4
                },	
                {
                    layer: 'majorrivers-dcf386 copy',
                    opacity: 0.0
                },				
                {
                    layer: 'majorrivers-dcf386',
                    opacity: 0.2
                },	
                {
                    layer: 'watersheds-amazon',
                    opacity: 0
                },
                {
                    layer: 'watersheds2-26pedv copy 1',
                    opacity: 1
                },					
                {
                    layer: 'watersheds2-26pedv copy 2',
                    opacity: 0.5
                },					
                {
                    layer: 'countries',
                    opacity: 0
                }		
			],
            onChapterExit: [	
                {
                    layer: 'watersheds2-26pedv',
                    opacity: 0
                },
                {
                    layer: 'watersheds-amazon',
                    opacity: 0
                },
                {
                    layer: 'watersheds2-26pedv copy 1',
                    opacity: 0
                },					
                {
                    layer: 'watersheds2-26pedv copy 2',
                    opacity: 0
                },		
            ]
        },		
        {
            id: 'page3',
            alignment: "left",
            hidden: false,
            title: 'The Eastern Guiana Shield',
            image: 'images/ebbatop.jpg',
            description: 'Along the eastern area of the Guiana Shield, there thrives a region of more than 30 million hectares of intact rainforest landscape, its ecosystems largely untouched and its vibrant indigenous cultures still active. Described as the eastern Guiana Shield, its boundaries encompass the southern reaches of Guyana, Suriname, and French Guiana, crossing into northern Brazil. This region has one of the highest rates of forest cover in the globe (with French Guiana at 95% and Suriname at 93% being among the highest in the world), houses a substantial quantity of carbon sequestration, and contains half of all of the fresh water in the entire Shield. Here, the map is showing tree biomass density <span style="font-weight: bold; color: #070CCA;">in blue</span>.',
            location: {
                center: [-57, 2.5],
				zoom: 6,
				pitch: 0,
            },
            mapAnimation: "flyTo",
            rotateAnimation: false,
            callback: "",
            onChapterEnter: [
                {
                    layer: 'watersheds2-26pedv',
                    opacity: 0.3
                },
                {
                    layer: 'watersheds-amazon',
                    opacity: 0
                },
                {
                    layer: 'watersheds2-26pedv copy 1',
                    opacity: 0
                },					
                {
                    layer: 'watersheds2-26pedv copy 2',
                    opacity: 0
                },	
                {
                    layer: 'boundaries-1w7tpp',
                    opacity: 0.75
                },
                {
                    layer: 'boundaries-1w7tpp copy',
                    opacity: 0.75
                },				
                {
                    layer: 'majorrivers-dcf386 copy',
                    opacity: 0.6
                },
                {
                    layer: 'majorrivers-dcf386',
                    opacity: 0.6
                },
                {
                    layer: 'biomass',
                    opacity: 0.8
                }
			],
            onChapterExit: [
                {
                    layer: 'biomass',
                    opacity: 0
                }			
            ]
        },
        {
            id: 'page4',
            alignment: "left",
            hidden: false,
            title: 'Indigenous Communities in the Guianas',
            image: 'images/indigenous.jpg',
            description: 'The intact forest landscape of the eastern Guiana Shield has long been the ancestral home of several indigenous communities, namely the Wai-Wai, Tarëno (or Trio), Wayana, and Wayampi. These communities have inhabited the region since before the arrival of Europeans who colonized the coastlines and established the present-day nation states with defined (if contested) sovereign borders. However, indigenous communities still occupy their traditional territories on either side of the national boundaries.',
            location: {
                center: [-57, 2.5],
				zoom: 6,
				pitch: 0				
			},
            mapAnimation: "flyTo",
            rotateAnimation: false,
            callback: "",
            onChapterEnter: [           
				{
                    layer: 'indigenous-label',
                    opacity: 1
                },                
				{
                    layer: 'indigenouscommunities-0eagv0',
                    opacity: 1
                }
			],
            onChapterExit: [
				{
                    layer: 'indigenous-label',
                    opacity: 0
                },                 
				{
                    layer: 'indigenouscommunities-0eagv0',
                    opacity: 0
                }		
			]
        },
        {
            id: 'page7',
            alignment: "left",
            hidden: false,
            title: 'Protected Areas and Indigenous Territories',
            image: 'images/kwamala.jpg',
            description: 'In the eastern Guiana Shield, a significant opportunity exists to create a transnational corridor of protected areas (<span style="font-weight: bold; color: #a5ff75;">in green</span>) and indigenous territories (<span style="font-weight: bold; color: #ffaa00;">in orange</span>) to help keep the tropical forest landscapes there intact and thriving. Along the northern border of Brazil, large areas like the Tumucumaque Indigenous Park, the Tumucumaque Mountains National Park, and the Trombetas-Mapuera Indigenous Territory are met by adjacent protected areas in neighboring French Guiana (Parc Amazonien de Guyane) and Guyana (Kanashen COCA). However, Suriname has neither designated indigenous reserves nor instituted headwater protections in the south, and will not do so until new protected areas legislation is ratified by law.',
            location: {
                center: [-57, 2.5],
				zoom: 6,
				pitch: 0
            },
            mapAnimation: "flyTo",
            rotateAnimation: false,
            callback: "",
            onChapterEnter: [           
				{
                    layer: 'ti-label',
                    opacity: 1
                },   				
				{
                    layer: 'prot-label',
                    opacity: 1
                },                 
				{
                    layer: 'guianas-protectedareas-74v0na',
                    opacity: 1
                },
                {
                    layer: 'indigenousterritories-2yjnwi',
                    opacity: 1
                },
                {
                    layer: 'countries',
                    opacity: 1
                },
                {
                    layer: 'capitals',
                    opacity: 0
                },
                {
                    layer: 'majorrivers-dcf386',
                    opacity: 0.6
                },				
			],
            onChapterExit: [
				{
                    layer: 'ti-label',
                    opacity: 0
                },  				
				{
                    layer: 'prot-label',
                    opacity: 0
                },                
				{
                    layer: 'guianas-protectedareas-74v0na',
                    opacity: 0
                },
                {
                    layer: 'indigenousterritories-2yjnwi',
                    opacity: 0
                }					
			]
        },
        {
            id: 'page5',
            alignment: "left",
            hidden: false,
            title: 'Threats Facing the Guiana Shield',
            image: 'images/gold.jpg',
            description: 'Today, the eastern Guiana Shield is one of the few remaining unspoiled wild places on earth. Going forward, however, the outlook is uncertain and rife with risk. Private interests in extractive industries are encroaching inwards. The main threats are mining, logging, infrastructure projects like roads and dams that invariably lead to more extractive activities, and the loss of indigenous culture and self-esteem to economic and cultural pressures. Governments, international development banks, and foreign companies are the primary actors, but even some members of indigenous communities are participating. In small-scale gold mining, miners obliterate riverbanks and forests and poison the water, air, soil, and consequently the people with mercury, leaving toxic pools of sludge in their wake. Mercury poisoning causes irreversible nerve damage, brain damage, and birth defects. If mining activity continues to scale, it could unleash an unprecedented public health crisis. (The map shows mining concessions and forest cover loss: exploration concessions are <span style="font-weight: bold; color: #ffff73;">in yellow</span>, exploitation concessions are <span style="font-weight: bold; color: #ffaa00;">in orange</span>, and unsolicited concessions are <span style="font-weight: bold; color: #d9d9d9;">in gray</span>. Forest cover loss is <span style="font-weight: bold; color: #FF0351;">in red</span>.)',
            location: {
                center: [-57, 2.5],
				zoom: 6,
				pitch: 0
            },
            onChapterEnter: [           
                {
                    layer: 'mining-5jgazy',
                    opacity: 1
                },
                {
                    layer: 'roads',
                    opacity: 1
                },
                {
                    layer: 'countries',
                    opacity: 0
                },
                {
                    layer: 'capitals',
                    opacity: 0
                },
                {
                    layer: 'forest-cover-loss',
                    opacity: 1
                }			
			],
            onChapterExit: [
                {
                    layer: 'mining-5jgazy',
                    opacity: 0
                },
                {
                    layer: 'roads',
                    opacity: 0
                },
                {
                    layer: 'forest-cover-loss',
                    opacity: 0
                },				
			]
        },		
        {
            id: 'page6',
            alignment: "left",
            hidden: false,
            title: 'The Coming Decade: Emerging Threats in the 2020s',
            image: 'images/emerging.jpg',
            description: 'The economic crisis that many countries are currently experiencing is expressed in the deepening of an extractive economic model, focused on mining and forest logging, to which is added the construction of roads (on the map, planned roads are indicated with dashed lines <span style="font-weight: bold; color: #FF4747;">in red</span>). Meanwhile, in Brazil, the Bolsonaro administration has revived discussions of major infrastructure and mining projects that would penetrate deep into the eastern Guiana Shield, with both the expansion of the BR-163 highway leading into southern Suriname and the opening of a 4.6-million-hectare mining area called RENCA.',
            location: {
                center: [-57, 2.5],
				zoom: 6,
				pitch: 0				
            },
            mapAnimation: "flyTo",
            rotateAnimation: false,
            callback: "",
            onChapterEnter: [           
				{
                    layer: 'renca-label',
                    opacity: 1
                },
				{
                    layer: 'plannedroads-label',
                    opacity: 1
                },
                {
                    layer: 'plannedroads-cikotf',
                    opacity: 1
                },
                {
                    layer: 'special-renca-border',
                    opacity: 1
                },				
                {
                    layer: 'special-renca',
                    opacity: 0.7
                },
                {
                    layer: 'mining-5jgazy',
                    opacity: 0.6
                },
                {
                    layer: 'roads',
                    opacity: 0.6
                },		
                {
                    layer: 'countries',
                    opacity: 0
                },
                {
                    layer: 'capitals',
                    opacity: 0
                },
                {
                    layer: 'forest-cover-loss',
                    opacity: 1
                },				
			],
            onChapterExit: [
				{
                    layer: 'renca-label',
                    opacity: 0
                }, 
				{
                    layer: 'plannedroads-label',
                    opacity: 0
                },				
				{
                    layer: 'mining-5jgazy',
                    opacity: 0
                },
                {
                    layer: 'roads',
                    opacity: 0
                },
                {
                    layer: 'plannedroads-cikotf',
                    opacity: 0
                },
                {
                    layer: 'special-renca-border',
                    opacity: 0
                },                
				{
                    layer: 'special-renca',
                    opacity: 0
                },
                {
                    layer: 'forest-cover-loss',
                    opacity: 0
                },				
			]
        },
        {
            id: 'page7b',
            alignment: "left",
            hidden: false,
            title: 'Case studies: Guyana, Suriname, French Guiana, and Brazil',
            image: 'images/kwamala.jpg',
            description: 'Now let\'s look at four case studies of communities of the Guiana Shield and how they are taking action to improve the management and protection of regional ecosystems and ensure the continuity of their cultures.',
            location: {
                center: [-57, 2.5],
				zoom: 6,
				pitch: 0
            },
            mapAnimation: "flyTo",
            rotateAnimation: false,
            callback: "",
            onChapterEnter: [                        
				{
                    layer: 'guianas-protectedareas-74v0na',
                    opacity: 0.4
                },
                {
                    layer: 'indigenousterritories-2yjnwi',
                    opacity: 0.4
                },
                {
                    layer: 'countries',
                    opacity: 1
                },
                {
                    layer: 'capitals',
                    opacity: 0
                },
                {
                    layer: 'majorrivers-dcf386',
                    opacity: 0.6
                },
                {
                    layer: 'case-studies',
                    opacity: 1
                },
                {
                    layer: 'case-studies copy',
                    opacity: 1
                },		
			],
            onChapterExit: [            
				{
                    layer: 'guianas-protectedareas-74v0na',
                    opacity: 0
                },
                {
                    layer: 'indigenousterritories-2yjnwi',
                    opacity: 0
                },
                {
                    layer: 'case-studies',
                    opacity: 0
                },
                {
                    layer: 'case-studies copy',
                    opacity: 0
                },						
			]
        },        
        {
            id: 'page8',
            alignment: "left",
            hidden: false,
            title: 'Guyana / Kanashen: Strengthened Protection of an Indigenous Community-Owned Area',
            image: 'images/kanashen-1.jpg',
            description: 'The Kanashen community-owned conservation area, located in the deep southern parts of Guyana’s Rupununi region, has relatively intact forests. It contains the headwaters of the Essequibo River and is rich in biodiversity and ecosystem services. The physical and ecological features of Kanashen provide a wealth of ecosystem goods and services.<br><br>This area is owned by the community of less than 300 inhabitants, mainly of Wai-Wai ancestry. In Kanashen, the people are almost fully dependent on area resources for their sustenance and livelihood due to the remoteness of their location. They still practice aspects of their unique culture, though after contact with Christian missionaries.<br><br>Changes are taking place rapidly in their surroundings, including increased mining activity in the vicinity of Erepoimo (Parabara) and urban expansion and infrastructure development in Region Nine (e.g., the Guyana-Brazil bridge across the Takatu River). These developments are considered threats to their culture and biodiversity.',
            location: {
                center: [-58.63777, 1.62627],
				zoom: 16,
				pitch: 0
            },
            mapAnimation: "flyTo",
            rotateAnimation: false,
            callback: "",
            onChapterEnter: [     
                {
                    layer: 'majorrivers-dcf386',
                    opacity: 0.0
                },   
                {
                    layer: 'creek-labels',
                    opacity: 1
                },        
                {
                    layer: 'kanashen-label2',
                    opacity: 1
                },     		 	
			],
            onChapterExit: [
                {
                    layer: 'creek-labels',
                    opacity: 0
                },      
                {
                    layer: 'kanashen-label2',
                    opacity: 0
                },    
            ]
            
            
        },	      
        {
            id: 'page9',
            alignment: "left",
            hidden: false,
            title: 'Guyana / Kanashen: Strengthened Protection of an Indigenous Community-Owned Area',
            image: 'images/mike-charles.jpg',
            description: 'To secure their future at Kanashen, the local indigenous population submitted an application for absolute title to the entire Kanashen Indigenous District, an area of 648,567 hectares constituting some 3% of the country’s landmass; this title was granted in 2004. In 2007, they decided to manage their lands, resources and culture for the purpose of conservation and socio-economic development, subsequently declaring their lands the Kanashen Community-Owned Conservation Area (KCOCA) under Guyana’s Amerindian Act of 2006.<br><br>In 2017, after many setbacks, the KCOCA was added to the nation’s protected areas system, becoming the largest protected area in the country and the only one legally possessed by indigenous people. This strengthened formal protection of the indigenous population’s lands and resources.<br><br><em>Photo credit: Mike Charles</em>',
            location: {
                center: [-58.96259, 1.70747],
				zoom: 9,
				pitch: 0
            },
            mapAnimation: "flyTo",
            rotateAnimation: false,
            callback: "",
            onChapterEnter: [     
                {
                    layer: 'majorrivers-dcf386',
                    opacity: 0.2
                },    
                {
                    layer: 'kanashen',
                    opacity: 1
                }, 
                {
                    layer: 'kanashen-label',
                    opacity: 1
                },   	
                {
                    layer: 'kanashen-label2',
                    opacity: 1
                },   
                {
                    layer: 'kanashen-label2 copy',
                    opacity: 1
                },   		
                {
                    layer: 'forest-cover-loss',
                    opacity: 1
                },
			],
            onChapterExit: [
                {
                    layer: 'kanashen',
                    opacity: 0
                }, 
                {
                    layer: 'kanashen-label',
                    opacity: 0
                },  
                {
                    layer: 'kanashen-label2',
                    opacity: 0
                },   
                {
                    layer: 'kanashen-label2 copy',
                    opacity: 0
                },   	
                {
                    layer: 'forest-cover-loss',
                    opacity: 0
                },
			]
        },
        {
            id: 'page10',
            alignment: "left",
            hidden: false,
            title: 'Suriname / Kwamalasamutu: The Trio People Towards Autonomous and Sustainable Management of Territory',
            image: 'images/kwamala.jpg',
            description: 'The Trio (or Tarëno in Suriname, and Tïrïyo in Brazil) are a small indigenous group living in the border area of Suriname and Brazil.  The Trio group in Suriname consists of a conglomeration of analogous subgroups and distinct Amerindian groups. Up to 12-15 subtribes can be found at a given time in and around the village of Kwamalasamutu.<br>Kwamalasamutu holds a distinct political and social position in the region as the home of the paramount chief of the Trios – Granman Asongo Alalaparu – and as the village with the largest population (600-800 people). In addition to the regional Granman, the governance elements in common across the villages include a captain and basjas (sub-captains).  ',
            location: {
                center: [-56.78993, 2.35534],
				zoom: 15.5,
				pitch: 0
            },
            mapAnimation: "flyTo",
            rotateAnimation: false,
            callback: "",
            onChapterEnter: [   
                {
                    layer: 'majorrivers-dcf386',
                    opacity: 0.0
                },   	  
                {
                    layer: 'creek-labels',
                    opacity: 1
                },                   
                {
                    layer: 'kwamalasamutu-label',
                    opacity: 1
                },          			
			],
            onChapterExit: [
                {
                    layer: 'creek-labels',
                    opacity: 0
                },      
                {
                    layer: 'kwamalasamutu-label',
                    opacity: 0
                }, 
			]
        },	
        {
            id: 'page11',
            alignment: "left",
            hidden: false,
            title: 'Suriname / Kwamalasamutu: The Trio People Towards Autonomous and Sustainable Management of Territory',
            image: 'images/kwamala.jpg',
            description: 'As the center of Trio leadership, Kwamalasamutu has great opportunities but also great challenges, common to the entire Trio territory and all of southern Suriname as a whole (as shown on the map <span style="font-weight: bold; color: #041377;">in blue</span> as the headwaters of the Marowijne and Corantijn watersheds). Today, the process of recognition of collective rights, absent in Surinamese legislation and within which is the right to land, is firmly advancing, but this implies that communities must be prepared for the exercise of these rights – that is, to carry out autonomous and sustainable management of the territory, to develop community management and planning instruments, and to continue developing territorial control exercises, based on community monitoring initiatives, sustainable production, indigenous healthcare, and self-governance.',
            location: {
                center: [-55.86266, 2.81007],
				zoom: 7.82,
				pitch: 0
            },
            mapAnimation: "flyTo",
            rotateAnimation: false,
            callback: "",
            onChapterEnter: [   
                {
                    layer: 'suriname-villages',
                    opacity: 1
                },  
                {
                    layer: 'kwamalasamutu-label',
                    opacity: 1
                },     		
                {
                    layer: 'suriname-villages-label',
                    opacity: 1
                },  
                {
                    layer: 'majorrivers-dcf386 copy',
                    opacity: 0.6
                },
                {
                    layer: 'majorrivers-dcf386',
                    opacity: 0.6
                },	
                {
                    layer: 'watersheds-suriname',
                    opacity: 0.5
                },	
                {
                    layer: 'forest-cover-loss',
                    opacity: 1
                },
			],
            onChapterExit: [
                {
                    layer: 'suriname-villages',
                    opacity: 0
                },
                {
                    layer: 'kwamalasamutu-label',
                    opacity: 0
                },  
                {
                    layer: 'suriname-villages-label',
                    opacity: 0
                },  
                {
                    layer: 'majorrivers-dcf386 copy',
                    opacity: 0
                },
                {
                    layer: 'majorrivers-dcf386',
                    opacity: 0
                },
                {
                    layer: 'watersheds-suriname',
                    opacity: 0
                },
                {
                    layer: 'forest-cover-loss',
                    opacity: 0
                },
			]
        },
        {
            id: 'page12',
            alignment: "left",
            hidden: false,
            title: 'French Guiana / Camopi: A Massive Protected Area Confronts Threats, Hand in Hand with Local Communities',
            image: 'images/french-guiana1.jpg',
            description: 'French Guiana is the largest French department, and the most forested with 96% of the territory covered by mostly primary rainforest. The department has a very low population density (4/sq km), and half of its +/- 300,000 inhabitants live along the coastline or along the majestic rivers of the interior. This is also where the department’s six indigenous groups reside. Together, they number around 10,000 persons, of which 1,000 are Wayana and 500 are Wayampi.<br><br>The Parc Amazonien de Guyane, created in February 2007 in central and southern French Guiana, covers 3.4 million hectares of intact moist tropical forest in the wider Amazon basin and Guiana Shield. It is made up of a core zone (a regulated area dedicated to environmental protection) of two million hectares, and a buffer zone (a local development area adapted to and respectful of local livelihoods) of 1.4 million hectares. The park is home to five municipalities with elected local authorities and more than 20,000 inhabitants in its buffer zone, embracing Amerindian communities (Wayana, Wayampi, Teko), Maroons (Aluku) and Creoles. It is adjacent to the Brazilian Tumucumaque Mountains National Park. Recognized as a major institution of French Guiana, the park maintains close ties with local and customary authorities.<br><br><em>Photo credit: C. Berthier / Parc Amazonien de Guyane</em>',
            location: {
                center: [-53.43738, 3.3],
				zoom: 7,
				pitch: 0
            },
            mapAnimation: "flyTo",
            rotateAnimation: false,
            callback: "",
            onChapterEnter: [    
                {
                    layer: 'parc-amazonien-label',
                    opacity: 1
                },  
                {
                    layer: 'parc-amazonien',
                    opacity: 1
                },  
                {
                    layer: 'parc-amazonien-TI',
                    opacity: 1
                },                  
                {
                    layer: 'majorrivers-dcf386 copy',
                    opacity: 0.6
                },
                {
                    layer: 'majorrivers-dcf386',
                    opacity: 0.6
                },		
                {
                    layer: 'forest-cover-loss',
                    opacity: 1
                },
			],
            onChapterExit: [
                {
                    layer: 'parc-amazonien-label',
                    opacity: 0
                },                  
                {
                    layer: 'parc-amazonien',
                    opacity: 0
                },  
                {
                    layer: 'parc-amazonien-TI',
                    opacity: 0
                }, 
                {
                    layer: 'majorrivers-dcf386 copy',
                    opacity: 0
                },
                {
                    layer: 'majorrivers-dcf386',
                    opacity: 0
                },
                {
                    layer: 'forest-cover-loss',
                    opacity: 0
                },
			]
        },
        {
            id: 'page13',
            alignment: "left",
            hidden: false,
            title: 'French Guiana / Camopi: A Massive Protected Area Confronts Threats, Hand in Hand with Local Communities',
            image: 'images/french-guiana2.jpg',
            description: 'In this landscape, the commune of Camopi, founded in 1969, is a good example of the region’s challenges and strengths. The population of Camopi mostly belongs to the Wayãpi and Teko indigenous groups, made up of approximately 1,800 inhabitants and 250 households. In 2007, Camopi was included within the Parc Amazonien de Guyane, based on the principle of co-management between the park and local communities.<br><br>The juxtaposition between indigenous territories and a protected area has served to confront one of the most significant threats present in this territory: illegal gold mining. In the 1980s, gold was discovered on the Camopi River. Illegal miners arrived in the area and the villages of Vila Brasil and Ilha Bela were established, facing the Camopi village on the other side of the Oyapock River. Since then, cross-border dynamics have been a challenge for the protection and management of the territory, such that ongoing control and territorial monitoring activities coordinated between the communities and the governments, hand-in-hand with opportunities for the development of sustainable productive alternatives, must continue and be strengthened.<br><br><em>Photo credit: A. Eber / Parc Amazonien de Guyane</em>',
            location: {
                center: [-52.33275, 3.16772],
				zoom: 15.5,
				pitch: 0
            },
            mapAnimation: "flyTo",
            rotateAnimation: false,
            callback: "",
            onChapterEnter: [     
                {
                    layer: 'camopi',
                    opacity: 1
                },    
                {
                    layer: 'majorrivers-dcf386',
                    opacity: 0
                },    
                {
                    layer: 'majorrivers-dcf386 copy',
                    opacity: 0
                },  
                {
                    layer: 'capitals',
                    opacity: 1
                },		
                {
                    layer: 'creek-labels',
                    opacity: 1
                }, 
                {
                    layer: 'creek-labels copy',
                    opacity: 1
                },      	
			],
            onChapterExit: [
                {
                    layer: 'camopi',
                    opacity: 0
                },       
                {
                    layer: 'creek-labels',
                    opacity: 0
                },
                {
                    layer: 'creek-labels copy',
                    opacity: 0
                },                 
			]
        },	 
        {
            id: 'page14',
            alignment: "left",
            hidden: false,
            title: 'Brazil / Tumucumaque: Multi-Ethnic Efforts to Protect a Common Territory',
            image: 'images/tumucumaque-1.jpg',
            description: 'In Brazil, the Guiana Shield covers a large territory in the north of the country, and embraces four key large Indigenous Territories (ITs). From east to west, the Wajãpi IT, which is inhabited by the indigenous people with the same name, has a long history of contact, conflict, and resistance. The threats brought about by its connectiveness to the road system are combatted by a strong Environmental & Territorial Management Plan (PGTA in the Portuguese acronym) and a consultation protocol (similar to a FPIC).<br><br>The contiguous Tumucumaque and Paru D\'Este ITs form a complex that is home to many indigenous peoples.  This can be superficially divided into the West Tumucumaque, in which the Trios are the majority, and the East Tumucumaque + Paru D\'Este, where the Wayanas and Apalais are the major groups. Each of these "sides" are represented by a different association. Moving to the west, the Wai-Wais are distributed among three different indigenous territories: the Nhamundá-Mapuera, Trombetas-Mapuera, and Wai Wai ITs.<br><br><em>Photo credit: Evandro Benardi</em>',
            location: {
                center: [-58.34746, 0.67785],
				zoom: 6.4,
				pitch: 0
            },
            mapAnimation: "flyTo",
            rotateAnimation: false,
            callback: "",
            onChapterEnter: [
                {
                    layer: 'majorrivers-dcf386',
                    opacity: 0.6
                },        
                {
                    layer: 'majorrivers-dcf386 copy',
                    opacity: 0.6
                },  
                {
                    layer: 'brasil-ti',
                    opacity: 1
                },
                {
                    layer: 'brasil-ti-label',
                    opacity: 1
                },       
                {
                    layer: 'capitals',
                    opacity: 0
                },       
                {
                    layer: 'forest-cover-loss',
                    opacity: 1
                },     			
			],
            onChapterExit: [
                {
                    layer: 'brasil-ti',
                    opacity: 0
                },
                {
                    layer: 'brasil-ti-label',
                    opacity: 0
                },
                {
                    layer: 'forest-cover-loss',
                    opacity: 0
                },
			]
        },	      
        {
            id: 'page15',
            alignment: "left",
            hidden: false,
            title: 'Brazil / Tumucumaque: Multi-Ethnic Efforts to Protect a Common Territory',
            image: 'images/tumucumaque-2.jpg',
            description: 'The Trio (known as the Tiriyó in Portuguese) and Wayana people officially occupy the contiguous Tumucumaque and Paru D’Este Indigenous Territories, which together embrace more than four million hectares. Each of these peoples has its own umbrella association: APITIKATXI (an association of the Tiriyó, Katxuyana and Txikyana) and APIWA (an association of the Wayana/Waiana and Apalai). These associations represent indigenous peoples distributed along two major river basins that cut through the territories, with APITIKATXI representing the communities of the villages along the Rio Paru D’Oeste (West Paru River) and its major tributary, the Rio Marapi, and APIWA representing the communities of the villages along the Rio Paru D’Este (East Paru River).<br><br>With the objective of supporting indigenous peoples in their efforts to secure and exercise their rights, ACT-Brasil has been working with these two grassroots organizations, providing legal advice with respect to their rights to health, education and territorial safeguards by the state. Additionally, ACT-Brasil is supporting the process of strengthening indigenous traditional health practices in this region, involving both communities and traditional health indigenous specialists. To this end, ACT-Brasil promotes an intercultural dialogue between indigenous healers and the official health agencies, seeking greater integration of indigenous health knowledge within the western healthcare systems responsible for delivering healthcare to indigenous peoples in the Tumucumaque region.<br><br><em>Photo credit: Evandro Benardi</em>',
            location: {
                center: [-55.85246, 1.34850],
				zoom: 7.85,
				pitch: 0
            },
            mapAnimation: "flyTo",
            rotateAnimation: false,
            callback: "",
            onChapterEnter: [    
                {
                    layer: 'brasil-ti',
                    opacity: 1
                },
                {
                    layer: 'brasil-ti-label',
                    opacity: 1
                }, 
                {
                    layer: 'brazil-rivers',
                    opacity: 1
                },   
                {
                    layer: 'brazil-rivers-label',
                    opacity: 1
                },   
                {
                    layer: 'brazil-villages',
                    opacity: 1
                },    
                {         
                    layer: 'brazil-villages copy',
                    opacity: 1
                },  
                {
                    layer: 'brazil-villages-stroke',
                    opacity: 1
                },    
                {         
                    layer: 'brazil-villages-stroke copy',
                    opacity: 1
                },                        	
                {
                    layer: 'brazil-villages-label',
                    opacity: 1
                },      	
	
			],
            onChapterExit: [
                {
                    layer: 'brasil-ti',
                    opacity: 0
                },
                {
                    layer: 'brasil-ti-label',
                    opacity: 0
                }, 
                {
                    layer: 'brazil-rivers',
                    opacity: 0
                },   
                {
                    layer: 'brazil-rivers-label',
                    opacity: 0
                },  
                {
                    layer: 'brazil-villages',
                    opacity: 0
                },    
                {         
                    layer: 'brazil-villages copy',
                    opacity: 0
                }, 
                {
                    layer: 'brazil-villages-stroke',
                    opacity: 0
                },    
                {         
                    layer: 'brazil-villages-stroke copy',
                    opacity: 0
                },        	
                {
                    layer: 'brazil-villages-label',
                    opacity: 0
                },  

			]
        },             	      	            	        		
        {
            id: 'page16',
            alignment: "left",
            hidden: false,
            title: 'ACT\'s Guiana Shield Conservation Strategy: A 30-Million-Hectare Transnational Protected Areas and Indigenous Territory Corridor',
            image: 'images/tepu.jpg',
            description: 'ACT knows that a more just and verdant future is possible. 25 years ago, ACT was built on the conviction that tropical forests and the local communities that dwell within them are interdependent parts of one whole, and research has repeatedly shown areas where indigenous peoples have control over their lands have some of the lowest deforestation rates in the Amazon. If the indigenous groups of the eastern Guiana Shield have land management rights and the internal governance, cultural values, livelihood options, and monitoring capacities required to protect these lands as guardians of the rainforest, we can keep this region pristine, and help the indigenous cultures become even stronger, far into the future.<br><br>ACT will undertake to create a 30-million-hectare biocultural corridor across the eastern Guiana Shield (shown <span style="font-weight: bold; color: #a75ca0;">in purple</span>). This corridor will be managed sustainably by the indigenous peoples—the Trio, Wayana, Wayampi, and Wai-wai—as guardians of the rainforest and formally recognized and supported by governments to ensure that it is protected in perpetuity based on successful and proven methodologies pioneered by ACT.',
            location: {
                center: [-57, 2.5],
				zoom: 6,
				pitch: 0
            },
            mapAnimation: "flyTo",
            rotateAnimation: false,
            callback: "",
            onChapterEnter: [           
				{
                    layer: 'ti-label',
                    opacity: 1
                },   				
				{
                    layer: 'prot-label',
                    opacity: 1
                }, 				
				{
                    layer: 'twtis-label',
                    opacity: 1
                },
                {
                    layer: 'act-work-areas',
                    opacity: 1
                },
                {
                    layer: 'special-twtis-border',
                    opacity: 1
                },
                {
                    layer: 'special-twtis',
                    opacity: 1
                },
                {
                    layer: 'guianas-protectedareas-74v0na',
                    opacity: 1
                },
                {
                    layer: 'indigenousterritories-2yjnwi',
                    opacity: 1
                },
                {
                    layer: 'countries',
                    opacity: 1
                },
				{
                    layer: 'capitals',
                    opacity: 1
                },
                {
                    layer: 'forest-cover-loss',
                    opacity: 1
                },
			],
            onChapterExit: [
				{
                    layer: 'ti-label',
                    opacity: 0
                },   				
				{
                    layer: 'prot-label',
                    opacity: 0
                }, 
				{
                    layer: 'twtis-label',
                    opacity: 0
                },
                {
                    layer: 'act-work-areas',
                    opacity: 0
                },
                {
                    layer: 'special-twtis-border',
                    opacity: 0
                },
                {
                    layer: 'special-twtis',
                    opacity: 0
                },
                {
                    layer: 'guianas-protectedareas-74v0na',
                    opacity: 0
                },
                {
                    layer: 'indigenousterritories-2yjnwi',
                    opacity: 0
                },
                {
                    layer: 'forest-cover-loss',
                    opacity: 1
                },		
			]
        }		
    ]
};
