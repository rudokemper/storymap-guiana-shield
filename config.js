var config = {
    style: 'mapbox://styles/rkemper/ck2mldtnk0ipa1cqenbut5kp0',
    accessToken: 'pk.eyJ1IjoicmtlbXBlciIsImEiOiJjaWp0Y3kydnIwMWdwdTdtODcwM2c5MTA0In0.JbjaRlNOjaTrk5kyOicMfg',
    showMarkers: false,
    theme: 'dark',
    use3dTerrain: false,
    title: 'The Guiana Shield: One of the Last Wild Places on Earth',
    logo: 'images/act-logo.png',
    bookmarks: '<strong>Bookmarks</strong>: <a href="#page1">Guiana Shield overview</a> | <a href="#page3">Eastern Guiana Shield</a> | <a href="#page8">Kanashen (Guyana)</a> | <a href="#page10">Kwamalasamutu (Suriname)</a> | <a href="#page12">Camopi (French Guiana)</a> | <a href="#page14">Tumucumaque (Brazil)</a> | <a href="#page16">ACT\'s strategy</a><div id="rotate-mobile"><em>For optimal viewing of this storytelling map on mobile, rotate your device to a horizontal orientation.</em><br><br><img src="images/device.png">',
	footer: '<strong>Bookmarks</strong>: <a href="#page1">Guiana Shield overview</a> | <a href="#page3">Eastern Guiana Shield</a> | <a href="#page8">Kanashen (Guyana)</a> | <a href="#page10">Kwamalasamutu (Suriname)</a> | <a href="#page12">Camopi (French Guiana)</a> | <a href="#page14">Tumucumaque (Brazil)</a> | <a href="#page16">ACT\'s strategy</a><br><br>Storytelling map by the Amazon Conservation Team, 2021. <a href="https://amazonteam.org/storytelling-maps/" target="_blank">More ACT storytelling maps</a> »<br><br><strong>Data sources:</strong> RAISG (Amazon watershed, protected areas, indigenous territories, mining concessions), GMD (mining concessions in Suriname), WWF (hydrology).<br><br><a href="https://amazonteam.org" class="fas fa-link" target="_blank"></a>&nbsp;<a href="https://amazonteam.org/storytelling-maps/" class="fas fa-map" target="_blank"></a>&nbsp;<a href="https://www.instagram.com/amazonconservationteam/?hl=en" class="fab fa-instagram" target="_blank"></a>&nbsp;<a href="http://twitter.com/AmazonTeamOrg" class="fab fa-twitter" target="_blank"></a>&nbsp;<a href="https://www.facebook.com/AmazonTeamOrg/" class="fab fa-facebook-f" target="_blank"></a>&nbsp;<a href="https://www.linkedin.com/company/amazon-conservation-team/" class="fab fa-linkedin" target="_blank"></a>&nbsp;<a href="https://www.youtube.com/channel/UCN7P8Z0eBlZrecVsAiNNj6w?view_as=subscriber" class="fab fa-youtube" target="_blank"></a>',
    chapters: [
        {
            id: 'page1',
            alignment: "left",
            hidden: false,
            title: 'What is the Guiana Shield?',
            image: 'images/colombia-mesa.jpg',
            description: 'The Guiana Shield is a 1.7 billion-year-old geological formation home to lowland and submontane forests and high flat-topped peak mountains known as tepuis, located along the northern coast of South America. As a whole, the Guiana Shield covers 270 million hectares and encompasses French Guiana, Suriname, Guyana, Venezuela, and parts of Colombia and Brazil. The Guiana Shield comprises 26% of Amazonia in total (overlap with the Amazon river watershed shown here in <span style="font-weight: bold; color: #004ca8; ">blue</span>). Home to both significant biological and cultural diversity, it is described by the United Nations Development Programme (UNDP) as being of “regional and global significance.',
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
                    layer: 'capitals',
                    opacity: 0
                },
                {
                    layer: 'mapbox-terrain-rgb',
                    opacity: 0
                },	
			],
            onChapterExit: [			
            ]
        },
        {
            id: 'page2',
            alignment: "left",
            hidden: false,            
            title: 'South America\'s Guiana Shield',
            image: 'images/roraima.jpg',
            description: 'Representing one of the most pristine rainforest landscapes in the world, the Guiana Shield stores roughly 18 percent of the world’s tropical forest carbon and 20 percent of the world’s fresh water. There are at three major water basins that flow through the Guiana Shield: the Orinoco basin (<span style="font-weight: bold; color: #6d2077; ">in purple</span>), the Amazon basin (<span style="font-weight: bold; color: #2b7777; ">in teal</span>), and a series of watersheds that flow into the Atlantic directly (<span style="font-weight: bold; color: #e56a54; ">in tangerine</span>).<br><br> A recent research paper has indicated that deforesting less than a third of the Guiana Shield would have catastrophic hydro-climactic impacts, resulting in substantial changes in the water cycle across the whole continent with negative impacts on biodiversity and ecosystem services (Bovolo et al. 2018). The Shield also comprises a biodiversity hotspot, home to thriving keystone species of biodiversity with an estimated 4,000 vertebrate species and 20,000 plant species known to science, 40% of which are endemic.',
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
                },
                {
                    layer: 'capitals',
                    opacity: 0
                }				
			],
            onChapterExit: [			
            ]
        },		
        {
            id: 'page3',
            alignment: "left",
            hidden: false,
            title: 'The Eastern Guiana Shield',
            image: 'images/kasikasima.jpg',
            description: 'Along the eastern area of the Shield, there thrives a region of more than 30 million hectares of intact rainforest landscape, its ecosystems largely untouched and its vibrant indigenous cultures still active. Described as the eastern Guiana Shield, its boundaries encompass the southern reaches of Guyana, Suriname, and French Guiana, crossing into northern Brazil. This region has one of the highest rates of forest cover in the globe (with French Guiana at 95% and Suriname at 93% among the highest in the world), houses a substantial quantity of carbon sequestration, and contains half of all of the freshwater in the entire Shield.',
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
                    layer: 'countries',
                    opacity: 1
                },
                {
                    layer: 'capitals',
                    opacity: 1
                }
			],
            onChapterExit: [			
            ]
        },
        {
            id: 'page4',
            alignment: "left",
            hidden: false,
            title: 'Indigenous Communities in the Guianas',
            image: 'images/indigenous.jpg',
            description: 'The intact forest landscape of the Eastern Guiana Shield has long been the ancestral home of several indigenous communities, namely the Wai-Wai, Tarëno (or Trio), Wayana, and Wayampi. These communities have inhabited the region since before the arrival of Europeans who colonized the coastlines and established the present-day nation states with defined (if contested) sovereign borders. However, indigenous communities still occupy their traditional territories on either side of the national boundaries.',
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
                },
                {
                    layer: 'countries',
                    opacity: 1
                },
                {
                    layer: 'capitals',
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
            id: 'page5',
            alignment: "left",
            hidden: false,
            title: 'Threats Facing the Guiana Shield',
            image: 'images/gold.jpg',
            description: 'Today, the eastern Guiana Shield is one of the few remaining unspoiled wild places on earth. As of tomorrow, however, the outlook is uncertain and rife with risk. Private interests in extractive industries are encroaching inwards. Main threats are mining, logging, infrastructure projects like roads and dams that invariably lead to more extractive activities, and the loss of indigenous culture and self-esteem to economic and cultural pressures. Governments, international development banks, and foreign companies are the primary actors, but even some members of indigenous communities are participating. In small-scale gold mining, miners obliterate riverbanks and forests and poison the water, air, soil, and consequently the people with mercury, leaving toxic pools of sludge in their wake. Mercury poisoning causes irreversible nerve damage, brain damage, and birth defects. If mining activity continues to scale, it could unleash an unprecedented public health crisis. ',
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
                }					
			]
        },		
        {
            id: 'page6',
            alignment: "left",
            hidden: false,
            title: 'The Coming Decade: Emerging Threats in the 2020s',
            image: 'images/emerging.jpg',
            description: 'The economic crisis that many countries are currently experiencing is expressed in the deepening of an extractive economic model, focused on mining and forest logging, to which is added the construction of roads. Meanwhile, in Brazil, the Bolsonaro administration has revived discussions of major infrastructure and mining projects that would penetrate deep into the eastern Guiana Shield, with both the expansion of the BR-163 highway leading into southern Suriname and the opening of a 4.6-million-hectare mining area called RENCA.',
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
                }					
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
                }					
			]
        },
        {
            id: 'page7',
            alignment: "left",
            hidden: false,
            title: 'Protected Areas and Indigenous Territories',
            image: 'images/kwamala.jpg',
            description: 'In the eastern Guiana Shield, a significant opportunity exists to create a transnational corridor of protected areas and indigenous territories to help keep the tropical forest landscapes there intact and thriving. Along the northern border of Brazil, large areas like the Tumucumaque Indigenous Park, the Tumucumaque Mountains National Park, and the Trombetas-Mapuera Indigenous Territory are met by adjacent protected areas in neighboring French Guiana (Parc Amazonien de Guyane) and Guyana (Konashen COCA). However, Suriname has neither designated indigenous reserves nor instituted headwater protections in the south, and will not do so until new protected areas legislation is ratified by law.',
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
            id: 'page7b',
            alignment: "left",
            hidden: false,
            title: 'Case studies: Guyana, Suriname, French Guiana, and Brazil',
            image: 'images/kwamala.jpg',
            description: 'Now let\'s look at four case studies of communities and how they are taking action in the region.',
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
            title: 'Guyana: Kanashen 1',
            image: 'images/kanashen-1.jpg',
            description: 'Kanashen has relatively intact forests located in the deep southern parts of the Rupununi region, Guyana. It contains the headwaters of the Essequibo River and is rich in biodiversity and ecosystem services. This area is owned by the community of less than 300 inhabitants mainly of Wai-Wai ancestry. In Kanashen, the people are almost fully dependent on the resources in the area for their sustenance and livelihood due to the remoteness of where they live. They still practice aspects of their unique culture, though after contact with Christian Missionaries.<br><br>Changes are taking place rapidly about their land, including increased mining activity in the vicinity of Erepoimo (Parabara), and urban expansion and infrastructure development in Region Nine (e.g. the Guyana-Brazil bridge across the Takatu River). these developments are considered as threats to their culture and biodiversity, especially since they were without legal title to the lands post 2004.',
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
            title: 'Guyana: Kanashen 2',
            image: 'images/kanashen-2.jpg',
            description: 'To secure their future at Kanashen, an application was made for Absolute Title to the entire Kanashen Indigenous District, an area of 648,567.2 hectares just about 3% of the country’s landmass, which was granted in 2004. In 2007, They made a decision to manage the lands, resources and culture for conservation and socio-economic development and declared their lands as the Kanashen Community Owned Conservation Area (KCOCA) under the Amerindian Act of 2006.<br><br>Managing and securing their natural resources for development was always a priority of the Wai-Wai at Kanashen. The presence of intact forests and abundance of wildlife in the area is an indication that they have been promoting and practicing very good environmental management.<br><br>In 2017, after many setbacks the KCOCA was added to the NPAS becoming the Largest protected area in the country and the only protected area owned legally by Indigenous people. This strengthened Formal protection of their lands and resources. The physical, ecological and cultural features offer great values and many opportunities for the Village, the Region, Guyana and the World at large. These values and opportunities include the provision of ecosystem goods and services, research, income generation and national security.',
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
			]
        },
        {
            id: 'page10',
            alignment: "left",
            hidden: false,
            title: 'Suriname: Kwamalasamutu 1',
            image: 'images/kwamala.jpg',
            description: 'The Trio (or Tarëno or Tïrïyo) are a small indigenous tribe who live in the border area of Suriname and Brazil. In Brazil the group is generally known as Tïrïyo. In Suriname they call themselves as Tarëno. The Trio group in Suriname consists of a conglomeration of analogous subgroups and distinct Amerindian groups. Up to 12- 15 subtribes can be found at a given time in Kwamalasamutu.<br><br>Kwamalasamutu holds a distinct political and social position in the region as the home of the Paramount Chief of the Trios – Granman Asongo Alalaparu – and as the village with the largest population (600-800 people). To date, the Granman chose his grandson as the next in the line of succession that has been endorsed by all the trio authorities. The governance elements in common across the villages include besides the regional Granman, every village is led by a captain and then basjas (sub-captains). The political and socio-cultural life of villages is dominated by Evangelical (Baptist) churches composed entirely of local people (the missionaries are no longer present).',
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
            title: 'Suriname: Kwamalasamutu 2',
            image: 'images/kwamala.jpg',
            description: 'As the center of Trio leadership, Kwamalasamutu has great opportunities but also great challenges, common to the entire Trio territory. Today, the process of recognition of collective rights, absent in Surinamese legislation and within which is the right to land, is firmly advancing, but this implies that communities must be prepared for the exercise of these rights, that is, to carry out an autonomous and sustainable management of the territory, to develop community management and planning instruments and to continue developing territorial control exercises, based on community monitoring initiatives, sustainable production, indigenous medicine and self-government, which have been developed with support of strategic partners, including ACT.',
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
			]
        },
        {
            id: 'page12',
            alignment: "left",
            hidden: false,
            title: 'French Guiana: Camopi 1',
            image: 'images/kwamala.jpg',
            description: 'French Guiana is the largest French department, and the most forested with 96% of the territory covered by mostly primary rainforest. This department has a very low population density (4/sq km), and half of its +/- 300.000 inhabitants live along the coastline, or along the majestic rivers of the interior. This is also where reside the six tribes of indigenous people. They count around 10.000 persons, of which a 1000 are Wayana, and a 500 are Wayampi.<br><br>The French Guiana Amazonian Park, created in February 2007, covers 3.4 million hectares in Central and Southern French Guiana of intact moist tropical forest in the wider Amazon basin and Guyana shield. It is made up of a core zone (regulated area dedicated to environmental protection) of 2 million hectares, and a buffer zone (local development adapted to and respectful of local livelihoods) of 1,4 million ha. The French Guiana Amazonian Park is home to five municipalities (elected local authorities) and more than 20,000 inhabitants in its buffer zone: Amerindian communities (Wayana, Wayampi, Teko), Maroons (Aluku) and Creoles. It is adjacent to the Brazilian National Park of the Tumucumaque Mountains. Recognized as a major institution of French Guiana, the Amazonian Park maintains close ties with local and customary authorities.',
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
			]
        },
        {
            id: 'page13',
            alignment: "left",
            hidden: false,
            title: 'French Guiana: Camopi 2',
            image: 'images/kwamala.jpg',
            description: 'In this landscape, the commune of Camopi is a good example of the challenges and strengths of this region: founded in 1969, the population of Camopi mostly belongs to the Wayãpi and Teko indigenous groups, made up of approximately 1800 inhabitants and 250 households. In 2007, Camopi was included within the PAG, based on the principle of co-management between the park and local communities. The juxtaposition between indigenous territories and a protected area has served to face one of the most important threats present in this territory: illegal gold mining. Since the 1980s, when gold was discovered in the Camopi River, illegal miners arrived in the area and the villages of Vila Brasil and Ilha Bela were established, in front of the Camopi village, on the other side of the Oyapock River. Since then, cross-border dynamics has been a challenge for the protection and management of the territory, so that actions of control and territorial monitoring coordinated between the communities and the governments, hand in hand with opportunities for the development of sustainable productive alternatives, must continue. and get stronger.',
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
            title: 'Brazil: Tumucumaque 1',
            image: 'images/tumucumaque-1.jpg',
            description: 'In Brazil, the Guiana Shield covers a large territory in the north of the country, and comprehend four key large Indigenous Territories (ITs). From east to west, the IT Wajãpi, which is inhabited by the Indigenous People (IPs) with the same name, has a long history of contact, conflicts and resistance. The threats brought by its connectiveness to the road system are fought back by a strong Environmental and Territorial Management Plan (PGTA in the Portuguese acronym) and a consultation protocol (similar to a FPIC). The Tumucumaque and Paru D\'Este ITs, forms a complex of two contiguous ITs that are home to many different IPs, which can be superficially divided in the West Tumucumaque, in which the Trios are the majority, and East Tumucumaque + Paru D\'Este, where the Wayanas and Apalais are the major groups. Each of these "sides" are represented by a different IP organization (IPO), Moving forward to the West, the Wai Wais are distributed along three different ITs, the Nhamundá-Mapuera, Trombetas-Mapuera, and the Wai Wai IT.<br><br><em>Photo credit: Evandro Benardi</em>',
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
			]
        },	      
        {
            id: 'page15',
            alignment: "left",
            hidden: false,
            title: 'Brazil: Tumucumaque 2',
            image: 'images/tumucumaque-2.jpg',
            description: 'The Trio (also known as Tiriyós in Portuguese) and Wayana people, officially occupy the Tumucumaque & Paru D’Este ITs, two contiguous territories that totalizes more than 4 million ha. Each of these people have their own IPOs, APITIKATXI (Association of the Tiriyós, Katxuyana and Txikyana IPs) and APIWA (Association of the Waianas and Apalai IPs). These associations represent IP distributed along two major river basins that cut through the ITs, with APITIKATXI representing communities of the villages along the “Rio Paru D’Oeste” (West Paru river) and its major tributary “Rio Marapi” river, and APIWA representing the communities of the villages along the “Rio Paru D’Este” (East Paru river).<br><br><em>Photo credit: Evandro Benardi</em>',
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
            description: 'ACT knows that a more just and verdant future is possible. 25 years ago, ACT was built on the conviction that tropical forests and the local communities that dwell within them are interdependent parts of one whole, and research has repeatedly shown reas where indigenous peoples have control over their lands have some of the lowest deforestation rates in the Amazon. If the indigenous groups of the eastern Guiana Shield have land management rights and the internal governance, cultural values, livelihood options, and monitoring capacities required to protect these lands as guardians of the rainforest, we can keep this region pristine, and help the indigenous cultures become even stronger, far into the future<br><br>ACT will undertake to create a 30-million-hectare biocultural corridor across the eastern Guiana Shield. This corridor will be managed sustainably by the indigenous peoples—the Trio, Wayana, Wayampi, and Wai-wai—as guardians of the rainforest and formally recognized and supported by governments to ensure that it is protected in perpetuity based on successful and proven methodologies pioneered by ACT.',
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
                }	
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
                }					
			]
        }		
    ]
};
