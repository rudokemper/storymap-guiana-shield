var config = {
    style: 'mapbox://styles/rkemper/ck2mldtnk0ipa1cqenbut5kp0',
    accessToken: 'pk.eyJ1IjoicmtlbXBlciIsImEiOiJjaWp0Y3kydnIwMWdwdTdtODcwM2c5MTA0In0.JbjaRlNOjaTrk5kyOicMfg',
    showMarkers: false,
    theme: 'dark',
    use3dTerrain: false,
    title: 'Rainforest Conservation and Indigenous Territory in the Guiana Shield',
    logo: 'images/act-logo.png',
    bookmarks: '<strong>Bookmarks</strong>:  <a href="#page3">Eastern Guiana Shield</a> | <a href="#page8">Kanashen (Guyana)</a> | <a href="#page10">Kwamalasamutu (Suriname)</a> | <a href="#page12">Camopi (French Guiana)</a> | <a href="#page14">Tumucumaque (Brazil)</a> | <a href="#page16">ACT\'s strategy</a>',
	footer: 'Storytelling map by the Amazon Conservation Team, 2020. <a href="https://amazonteam.org/storytelling-maps/" target="_blank">More ACT storytelling maps</a> »<br><strong>Data sources:</strong> RAISG (Amazon watershed, protected areas, indigenous territories, mining concessions), GMD (mining concessions in Suriname), WWF (hydrology).<br><a href="https://amazonteam.org" class="fas fa-link" target="_blank"></a>&nbsp;<a href="https://amazonteam.org/storytelling-maps/" class="fas fa-map" target="_blank"></a>&nbsp;<a href="https://www.instagram.com/amazonconservationteam/?hl=en" class="fab fa-instagram" target="_blank"></a>&nbsp;<a href="http://twitter.com/AmazonTeamOrg" class="fab fa-twitter" target="_blank"></a>&nbsp;<a href="https://www.facebook.com/AmazonTeamOrg/" class="fab fa-facebook-f" target="_blank"></a>&nbsp;<a href="https://www.linkedin.com/company/amazon-conservation-team/" class="fab fa-linkedin" target="_blank"></a>&nbsp;<a href="https://www.youtube.com/channel/UCN7P8Z0eBlZrecVsAiNNj6w?view_as=subscriber" class="fab fa-youtube" target="_blank"></a>',
    chapters: [
        {
            id: 'page1',
            alignment: "left",
            hidden: false,
            title: 'What is the Guiana Shield?',
            image: 'images/colombia-mesa.jpg',
            description: 'The Guiana Shield is a 1.7 billion-year-old geological formation home to lowland and submontane forests and high flat-topped peak mountains known as tepuis, located along the northern coast of South America. As a whole, the Guiana Shield covers 270 million hectares and encompasses French Guiana, Suriname, Guyana, Venezuela, and parts of Colombia and Brazil. The Guiana Shield comprises 26% of Amazonia in total (overlap with the Amazon river watershed shown here in <span style="font-weight: bold; color: #004ca8; ">blue</span>). Home to both significant biological and cultural diversity, it is described by the United Nations Development Programme (UNDP) as being of “regional and global significance.”',
            location: {
                center: [-73, -2.5], 
				zoom: 4,
				pitch: 10.00,
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
                }				
			],
            onChapterExit: [			
            ]
        },
        {
            id: 'page2',
            alignment: "left",
            hidden: false,            
            title: 'South America\'s Guiana Shield: the \"Greenhouse of the World\"',
            image: 'images/roraima.jpg',
            description: 'Representing one of the most pristine rainforest landscapes in the world, the Guiana Shield stores roughly 18 percent of the world’s tropical forest carbon and 20 percent of the world’s fresh water. There are at three major water basins that flow through the Guiana Shield: the Orinoco basin (<span style="font-weight: bold; color: #6d2077; ">in purple</span>), the Amazon basin (<span style="font-weight: bold; color: #2b7777; ">in teal</span>), and a series of watersheds that flow into the Atlantic directly (<span style="font-weight: bold; color: #e56a54; ">in tangerine</span>).<br><br> A recent research paper has indicated that deforesting less than a third of the Guiana Shield would have catastrophic hydro-climactic impacts, resulting in substantial changes in the water cycle across the whole continent with negative impacts on biodiversity and ecosystem services (Bovolo et al. 2018). The Shield also comprises a biodiversity hotspot, home to thriving keystone species of biodiversity with an estimated 4,000 vertebrate species and 20,000 plant species known to science, 40% of which are endemic.',
            location: {
                center: [-67, 1], 
				zoom: 4.5,
				pitch: 10.00,
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
                center: [-58, 2.5],
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
            description: 'The intact forest landscape of the Eastern Guiana Shield has long been the ancestral home of several indigenous communities, namely the Wai-Wai, Tarëno (or Trio), Wayana, and Wayampi. These communities have inhabited the region since before the arrival of Europeans who colonized the coastlines and established the present-day nation states with defined (if contested) sovereign borders. However, in the depths of the rainforest the indigenous communities travel across their traditional territory as they always have, and the state lines are largely fictional.',
            location: {
                center: [-58, 2.5],
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
                center: [-58, 2.5],
				zoom: 6,
				pitch: 0
            },
            onChapterEnter: [           
                {
                    layer: 'mining-09ihmd',
                    opacity: 1
                },
                {
                    layer: 'roads-65by1c',
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
                    layer: 'mining-09ihmd',
                    opacity: 0
                },
                {
                    layer: 'roads-65by1c',
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
            description: 'In Guyana and Suriname, discoveries of major offshore oil deposits in the past year are expected to grow the national economies substantially (the IMF is predicting an unprecedented 86% increase for Guyana in 2020) and further entrench the extractivist political economic model, and could spell disastrous corruption that opens the door for inland exploration and concessions, as shown by recent turmoil in Guyana following its national elections (with Suriname’s elections on the horizon, slated to happen in May of this year). Meanwhile, in Brazil, the Bolsonaro administration has revived discussions of major infrastructure and mining projects that would penetrate deep into the eastern Guiana Shield, with both the expansion of the BR-163 highway leading into southern Suriname and the opening of a 4.6-million-hectare mining area called RENCA as possible outcomes of changes in the mining law slated for this year.',
            location: {
                center: [-58, 2.5],
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
                    layer: 'mining-09ihmd',
                    opacity: 0.6
                },
                {
                    layer: 'roads-65by1c',
                    opacity: 0.6
                },
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
                    layer: 'mining-09ihmd',
                    opacity: 0
                },
                {
                    layer: 'roads-65by1c',
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
                center: [-58, 2.5],
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
            id: 'page8',
            alignment: "left",
            hidden: false,
            title: 'Guyana: Kanashen 1',
            image: 'images/kanashen-1.jpg',
            description: 'Lorem ipsum.',
            location: {
                center: [-58.63977, 1.62527],
				zoom: 16,
				pitch: 0
            },
            mapAnimation: "flyTo",
            rotateAnimation: false,
            callback: "",
            onChapterEnter: [           			
			],
            onChapterExit: [
			]
        },	      
        {
            id: 'page9',
            alignment: "left",
            hidden: false,
            title: 'Guyana: Kanashen 2',
            image: 'images/kanashen-2.jpg',
            description: 'Lorem ipsum.',
            location: {
                center: [-58.63977, 1.62527],
				zoom: 10,
				pitch: 0
            },
            mapAnimation: "flyTo",
            rotateAnimation: false,
            callback: "",
            onChapterEnter: [           			
			],
            onChapterExit: [
			]
        },
        {
            id: 'page10',
            alignment: "left",
            hidden: false,
            title: 'Suriname: Kwamalasamutu 1',
            image: 'images/kwamala.jpg',
            description: 'Lorem ipsum.',
            location: {
                center: [-56.79493, 2.35534],
				zoom: 15.5,
				pitch: 0
            },
            mapAnimation: "flyTo",
            rotateAnimation: false,
            callback: "",
            onChapterEnter: [           			
			],
            onChapterExit: [
			]
        },	
        {
            id: 'page11',
            alignment: "left",
            hidden: false,
            title: 'Suriname: Kwamalasamutu 2',
            image: 'images/kwamala.jpg',
            description: 'Lorem ipsum.',
            location: {
                center: [-56.79493, 2.35534],
				zoom: 13.5,
				pitch: 0
            },
            mapAnimation: "flyTo",
            rotateAnimation: false,
            callback: "",
            onChapterEnter: [           			
			],
            onChapterExit: [
			]
        },
        {
            id: 'page12',
            alignment: "left",
            hidden: false,
            title: 'French Guiana: Camopi 1',
            image: 'images/kwamala.jpg',
            description: 'Lorem ipsum.',
            location: {
                center: [-53.13738, 3.01586],
				zoom: 8.5,
				pitch: 0
            },
            mapAnimation: "flyTo",
            rotateAnimation: false,
            callback: "",
            onChapterEnter: [           			
			],
            onChapterExit: [
			]
        },
        {
            id: 'page13',
            alignment: "left",
            hidden: false,
            title: 'French Guiana: Camopi 2',
            image: 'images/kwamala.jpg',
            description: 'Lorem ipsum.',
            location: {
                center: [-52.34075, 3.16772],
				zoom: 15,
				pitch: 0
            },
            mapAnimation: "flyTo",
            rotateAnimation: false,
            callback: "",
            onChapterEnter: [           			
			],
            onChapterExit: [
			]
        },	 
        {
            id: 'page14',
            alignment: "left",
            hidden: false,
            title: 'Brazil: Tumucumaque 1',
            image: 'images/tumucumaque-1.jpg',
            description: 'Lorem ipsum.',
            location: {
                center: [-56.04746, 0.67785],
				zoom: 7.25,
				pitch: 0
            },
            mapAnimation: "flyTo",
            rotateAnimation: false,
            callback: "",
            onChapterEnter: [           			
			],
            onChapterExit: [
			]
        },	      
        {
            id: 'page15',
            alignment: "left",
            hidden: false,
            title: 'Brazil: Tumucumaque 2',
            image: 'images/tumucumaque-2.jpg',
            description: 'Lorem ipsum.',
            location: {
                center: [-56.55246, 1.04850],
				zoom: 7.85,
				pitch: 0
            },
            mapAnimation: "flyTo",
            rotateAnimation: false,
            callback: "",
            onChapterEnter: [           			
			],
            onChapterExit: [
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
                center: [-58, 2.5],
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
