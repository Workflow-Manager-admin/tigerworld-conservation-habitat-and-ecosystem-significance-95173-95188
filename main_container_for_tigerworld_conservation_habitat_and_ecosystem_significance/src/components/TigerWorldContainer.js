import React from 'react';
import './TigerWorldContainer.css';
import '../assets/tigerPatterns.css';

/**
 * Main Container for TigerWorld: Conservation, Habitat, and Ecosystem Significance
 * A comprehensive resource exploring the world of tigers, their subspecies, habitat, 
 * conservation, behavior, cultural significance, and ecosystem impact.
 */
function TigerWorldContainer() {
  return (
    <div className="tiger-world-container">
      {/* Hero Section */}
      <section className="tiger-hero" style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
                    url('https://images.unsplash.com/photo-1549480017-d76466a4b7e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="tiger-hero-content">
          <h1>TigerWorld: Conservation, Habitat, and Ecosystem Significance</h1>
          <p className="tiger-subtitle">
            Discovering the magnificent world of tigers - their history, behavior, habitats, and the urgent need for conservation
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="tiger-section">
        <h2>Introduction to Tigers</h2>
        <div className="tiger-stripe-divider"></div>
        <div className="tiger-content">
          <div className="tiger-text-content">
            <p>
              Tigers (<em>Panthera tigris</em>) are one of the most iconic and recognizable big cats in the world. 
              Known for their distinctive orange coat with black stripes, powerful build, and solitary nature, 
              tigers have captivated human imagination for centuries.
            </p>
            <p>
              As apex predators, tigers play a critical role in maintaining the health and balance of the 
              ecosystems they inhabit. However, their populations have faced dramatic declines due to habitat 
              loss, poaching, and human-wildlife conflict.
            </p>
            <p>
              The tiger is the largest extant cat species and a member of the genus Panthera. Its most recognizable feature is a pattern of dark vertical stripes on orange-brown fur with a lighter underside. It is an apex predator, primarily preying on ungulates such as deer and wild boar. It is territorial and generally a solitary but social predator, requiring large contiguous areas of habitat to support its requirements for prey and rearing of its offspring.
            </p>
            <p>
              Cubs stay with their mother for about two years, then become independent and leave their mother's home range to establish their own. The tiger once ranged widely from Eastern Anatolia and the Caucasus to Central, East and South Asia, but has been extirpated in some parts of this range and now inhabits just 7% of its historical territory.
            </p>
          </div>
          <div className="tiger-image">
            <img src="https://images.unsplash.com/photo-1615963244664-5b845b2025ee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Bengal Tiger in forest habitat" />
            <div className="tiger-image-caption">Bengal Tiger in its natural forest habitat</div>
          </div>
        </div>
        
        <div className="tiger-fact-card">
          <h4>Did You Know?</h4>
          <p>A tiger's roar can be heard as far as 3 kilometers away. Their distinctive striped coat helps them blend into tall grass, making them nearly invisible to prey. Additionally, each tiger's stripe pattern is unique, like human fingerprints!</p>
        </div>
      </section>

      {/* Tiger Subspecies Section */}
      <section className="tiger-section">
        <h2>Tiger Subspecies</h2>
        <div className="tiger-stripe-divider"></div>
        <div className="tiger-content">
          <div className="tiger-text-content">
            <p>
              Historically, there were nine subspecies of tigers. Today, only six remain, with three having gone extinct during the 20th century. Each subspecies has adapted to its local environment, developing unique characteristics in size, coloration, and behavior.
            </p>
          </div>
        </div>
        
        <div className="tiger-subspecies-grid">
          <div className="tiger-subspecies-card">
            <div className="tiger-subspecies-image">
              <img src="https://images.unsplash.com/photo-1561731216-c3a4d99437d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Bengal Tiger" />
            </div>
            <div className="tiger-subspecies-content">
              <h4>Bengal Tiger <span className="status status-endangered">Endangered</span></h4>
              <p><strong>Scientific name:</strong> <em>Panthera tigris tigris</em></p>
              <p><strong>Population:</strong> ~2,500 in the wild</p>
              <p><strong>Range:</strong> India, Bangladesh, Nepal, Bhutan</p>
              <p>The most numerous tiger subspecies, accounting for about half of all wild tigers. They inhabit tropical and subtropical moist broadleaf forests, tropical dry forests, and mangrove forests.</p>
            </div>
          </div>
          
          <div className="tiger-subspecies-card">
            <div className="tiger-subspecies-image">
              <img src="https://images.unsplash.com/photo-1507461476191-0ed4f9f18533?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Siberian Tiger" />
            </div>
            <div className="tiger-subspecies-content">
              <h4>Siberian Tiger <span className="status status-endangered">Endangered</span></h4>
              <p><strong>Scientific name:</strong> <em>Panthera tigris altaica</em></p>
              <p><strong>Population:</strong> ~500 in the wild</p>
              <p><strong>Range:</strong> Russian Far East, Northeast China</p>
              <p>The largest of all tiger subspecies, with a thick coat adapted for cold climates. They primarily inhabit the birch forests of eastern Russia and can survive in temperatures as low as -40°C.</p>
            </div>
          </div>
          
          <div className="tiger-subspecies-card">
            <div className="tiger-subspecies-image">
              <img src="https://images.pexels.com/photos/46251/sumatran-tiger-tiger-big-cat-stripes-46251.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Sumatran Tiger" />
            </div>
            <div className="tiger-subspecies-content">
              <h4>Sumatran Tiger <span className="status status-critical">Critically Endangered</span></h4>
              <p><strong>Scientific name:</strong> <em>Panthera tigris sumatrae</em></p>
              <p><strong>Population:</strong> ~400 in the wild</p>
              <p><strong>Range:</strong> Indonesian island of Sumatra</p>
              <p>The smallest surviving tiger subspecies, with darker and more closely spaced stripes. They live exclusively in the remaining patches of forests on the island of Sumatra.</p>
            </div>
          </div>
          
          <div className="tiger-subspecies-card">
            <div className="tiger-subspecies-image">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Walking_tiger_in_Ranthambhore.jpg" alt="Indochinese Tiger" />
            </div>
            <div className="tiger-subspecies-content">
              <h4>Indochinese Tiger <span className="status status-endangered">Endangered</span></h4>
              <p><strong>Scientific name:</strong> <em>Panthera tigris corbetti</em></p>
              <p><strong>Population:</strong> ~350 in the wild</p>
              <p><strong>Range:</strong> Thailand, Myanmar, Vietnam, Laos, Cambodia</p>
              <p>Inhabiting the mountainous and tropical forests of mainland Southeast Asia, this subspecies has seen dramatic population declines in recent decades.</p>
            </div>
          </div>
          
          <div className="tiger-subspecies-card">
            <div className="tiger-subspecies-image">
              <img src="https://upload.wikimedia.org/wikipedia/commons/d/da/Malayan_tiger_%28Panthera_tigris_jacksoni%29.jpg" alt="Malayan Tiger" />
            </div>
            <div className="tiger-subspecies-content">
              <h4>Malayan Tiger <span className="status status-critical">Critically Endangered</span></h4>
              <p><strong>Scientific name:</strong> <em>Panthera tigris jacksoni</em></p>
              <p><strong>Population:</strong> ~200 in the wild</p>
              <p><strong>Range:</strong> Malay Peninsula</p>
              <p>Only recognized as a distinct subspecies in 2004, the Malayan tiger faces severe threats from poaching and habitat destruction, with numbers dropping below 200 individuals.</p>
            </div>
          </div>
          
          <div className="tiger-subspecies-card">
            <div className="tiger-subspecies-image">
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/South_China_Tiger_3.jpg" alt="South China Tiger" />
            </div>
            <div className="tiger-subspecies-content">
              <h4>South China Tiger <span className="status status-critical">Critically Endangered</span></h4>
              <p><strong>Scientific name:</strong> <em>Panthera tigris amoyensis</em></p>
              <p><strong>Population:</strong> Likely extinct in the wild</p>
              <p><strong>Range:</strong> Historically central and eastern China</p>
              <p>Considered functionally extinct in the wild, with no confirmed sightings in over 25 years. A small number exist in captivity as part of breeding programs aimed at possible future reintroduction.</p>
            </div>
          </div>
          
          <div className="tiger-subspecies-card" style={{backgroundColor: "rgba(26, 26, 26, 0.9)"}}>
            <div className="tiger-subspecies-image" style={{opacity: "0.7"}}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Caspian_Tiger.jpg" alt="Caspian Tiger - Extinct" />
            </div>
            <div className="tiger-subspecies-content">
              <h4>Caspian Tiger <span className="status status-extinct">Extinct</span></h4>
              <p><strong>Scientific name:</strong> <em>Panthera tigris virgata</em></p>
              <p><strong>Last seen:</strong> 1970s</p>
              <p><strong>Former range:</strong> Turkey, Iran, Iraq, Afghanistan, Central Asia</p>
              <p>Once roamed throughout the Caspian Sea region and Central Asia. They were driven to extinction by hunting, habitat loss, and decline of their prey species.</p>
            </div>
          </div>
          
          <div className="tiger-subspecies-card" style={{backgroundColor: "rgba(26, 26, 26, 0.9)"}}>
            <div className="tiger-subspecies-image" style={{opacity: "0.7"}}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Panthera_tigris_balica.jpg" alt="Bali Tiger - Extinct" />
            </div>
            <div className="tiger-subspecies-content">
              <h4>Bali Tiger <span className="status status-extinct">Extinct</span></h4>
              <p><strong>Scientific name:</strong> <em>Panthera tigris balica</em></p>
              <p><strong>Last seen:</strong> 1937</p>
              <p><strong>Former range:</strong> Bali, Indonesia</p>
              <p>The smallest of all tiger subspecies, they were hunted to extinction as the human population of Bali grew rapidly during the early 20th century.</p>
            </div>
          </div>
          
          <div className="tiger-subspecies-card" style={{backgroundColor: "rgba(26, 26, 26, 0.9)"}}>
            <div className="tiger-subspecies-image" style={{opacity: "0.7"}}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/37/Javan_tiger.jpg" alt="Javan Tiger - Extinct" />
            </div>
            <div className="tiger-subspecies-content">
              <h4>Javan Tiger <span className="status status-extinct">Extinct</span></h4>
              <p><strong>Scientific name:</strong> <em>Panthera tigris sondaica</em></p>
              <p><strong>Last seen:</strong> 1976</p>
              <p><strong>Former range:</strong> Java, Indonesia</p>
              <p>Declared extinct in the 1980s after the last confirmed sighting in 1976. Their extinction was due to habitat loss from the clearing of forests for agriculture and human settlements on the densely populated island.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Tiger Geographic Range Section */}
      <section className="tiger-section">
        <h2>Geographic Range</h2>
        <div className="tiger-stripe-divider"></div>
        <div className="tiger-content">
          <div className="tiger-text-content">
            <h3>Historical Range</h3>
            <p>
              Tigers once roamed across vast swaths of Asia, from Eastern Turkey and the Caucasus mountains through most of South and Southeast Asia to parts of Siberia and the Korean Peninsula. Their historical range covered over 21 countries and spanned multiple climate zones, from tropical forests to temperate woodlands and taiga.
            </p>
            
            <h3>Current Range</h3>
            <p>
              Today, tigers occupy just 7% of their historical range. They have been extirpated from approximately 93% of their former habitat and are now restricted to isolated populations across 13 countries: Bangladesh, Bhutan, Cambodia, China, India, Indonesia, Laos, Malaysia, Myanmar, Nepal, Russia, Thailand, and Vietnam.
            </p>
            <p>
              The largest remaining populations are found in India, which is home to approximately 70% of the world's wild tigers. Other significant populations exist in Russia, Indonesia, and Nepal.
            </p>
          </div>
          <div className="tiger-image">
            <img src="https://images.unsplash.com/photo-1590418606746-018840f9cd0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Tiger walking through grassland" />
            <div className="tiger-image-caption">Tiger patrolling its territory in Ranthambore National Park, India</div>
          </div>
        </div>
        
        <div className="tiger-fact-card">
          <h4>Range Reduction</h4>
          <p>
            In just the past century, tigers have lost more than 95% of their historical range. The most dramatic losses occurred in Central and Western Asia, where entire tiger subspecies (such as the Caspian tiger) have disappeared completely. Ongoing habitat fragmentation continues to isolate remaining populations, making genetic exchange increasingly difficult.
          </p>
        </div>
      </section>

      {/* Tiger Behavior Section */}
      <section className="tiger-section">
        <h2>Hunting, Feeding, and Social Behavior</h2>
        <div className="tiger-stripe-divider"></div>
        <div className="tiger-content">
          <div className="tiger-text-content">
            <h3>Hunting Techniques</h3>
            <p>
              Tigers are ambush predators who rely on stealth and strength rather than speed or endurance. They stalk their prey, using vegetation as cover, before launching a powerful attack designed to quickly bring down their target. With their excellent night vision, sensitive hearing, and camouflaged coats, they can approach within 20 meters of prey without being detected.
            </p>
            
            <h3>Diet and Feeding Habits</h3>
            <p>
              As obligate carnivores, tigers feed exclusively on meat. Their preferred prey consists of large ungulates such as sambar deer, wild boar, and water buffalo, though they will also hunt smaller animals when necessary. An adult tiger can consume up to 40 kg (88 lb) of meat in a single meal and may not need to hunt again for several days.
            </p>
            <p>
              Tigers typically make a kill once every 8-10 days and drag the carcass to a secluded area to feed over several days. They start feeding at the hindquarters, and will often cover their kill with leaves and soil to hide it from scavengers when not feeding.
            </p>
            
            <div className="tiger-image-grid">
              <div className="tiger-image">
                <img src="https://images.unsplash.com/photo-1504173010664-32509aeebb62?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Tiger swimming" />
                <div className="tiger-image-caption">Tigers are excellent swimmers and often cool off in lakes and streams</div>
              </div>
              <div className="tiger-image">
                <img src="https://images.pexels.com/photos/162203/panthera-tigris-altaica-tiger-siberian-amurtiger-162203.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Tiger resting" />
                <div className="tiger-image-caption">Tigers can spend up to 18 hours a day resting and sleeping</div>
              </div>
            </div>
            
            <h3>Social Structure</h3>
            <p>
              Unlike lions, tigers are primarily solitary animals. Adult males and females only come together briefly to mate, after which the male plays no role in raising cubs. A mother will care for her cubs for about 2-3 years before they become independent.
            </p>
            <p>
              Tigers are highly territorial, with adult males holding territories that may overlap with those of several females but exclude other males. They mark their territories with urine, feces, and by scratching marks on trees. A male's territory can cover 60-100 km² (23-39 sq mi), while female territories are smaller, typically 20-40 km² (8-15 sq mi).
            </p>
          </div>
        </div>
      </section>

      {/* Reproduction and Lifespan Section */}
      <section className="tiger-section">
        <h2>Reproduction and Lifespan</h2>
        <div className="tiger-stripe-divider"></div>
        <div className="tiger-content">
          <div className="tiger-text-content">
            <h3>Mating and Reproduction</h3>
            <p>
              Tigers have no fixed breeding season and can mate year-round, though births tend to be more common in certain months depending on the region. A female tiger is receptive for 3-7 days within a 21-day cycle and advertises her readiness to mate through vocalizations and scent markings.
            </p>
            <p>
              After mating, the gestation period is about 103-105 days. A female typically gives birth to 2-4 cubs in a secluded den, often in a cave, among dense vegetation, or in a hollow tree. The cubs are born blind and helpless, weighing just 780-1,600 g (1.7-3.5 lb).
            </p>
            
            <h3>Cub Development</h3>
            <p>
              Tiger cubs open their eyes at 6-14 days old and begin to take solid food at 8 weeks, though they continue to nurse for 5-6 months. They start accompanying their mother on hunts at about 6 months and begin to participate in hunting at about 11 months. The mother teaches them essential hunting skills through observation and practice.
            </p>
            <p>
              Mortality is high among tiger cubs, with approximately 50% dying before they reach independence. The main causes of death include starvation, accidents, abandonment by the mother, and infanticide by adult males.
            </p>
            
            <h3>Lifespan</h3>
            <p>
              In the wild, tigers typically live 10-15 years, though some individuals have been known to live up to 20 years. In captivity, where they receive regular food and veterinary care, tigers can live 16-20 years on average, with some reaching 25 years or more.
            </p>
            <p>
              The primary causes of natural mortality among adult tigers include injuries sustained during hunting or territorial disputes, diseases, and starvation due to loss of teeth or physical capabilities with age.
            </p>
          </div>
          <div className="tiger-image">
            <img src="https://images.unsplash.com/photo-1559967536-53b77de6c56d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Tiger mother with cubs" />
            <div className="tiger-image-caption">A tigress with her cubs - she will raise them alone for 2-3 years</div>
          </div>
        </div>
      </section>

      {/* Cultural Significance Section */}
      <section className="tiger-section">
        <h2>Role in Culture and Mythology</h2>
        <div className="tiger-stripe-divider"></div>
        <div className="tiger-content">
          <div className="tiger-text-content">
            <h3>Ancient Symbolism</h3>
            <p>
              For thousands of years, tigers have featured prominently in the art, literature, mythology, and folklore of many Asian cultures. In Chinese culture, the tiger is one of the 12 animals of the zodiac and symbolizes power, courage, and protection. It is considered the king of all beasts and a symbol of the god of wealth.
            </p>
            <p>
              In Hindu mythology, the goddess Durga rides a tiger as her mount, symbolizing her power and control over wild nature. The tiger is also associated with Shiva, one of the principal deities of Hinduism.
            </p>
            
            <h3>Tigers in Modern Culture</h3>
            <p>
              Tigers continue to hold a prominent place in contemporary culture. They are popular mascots for sports teams, feature in numerous children's books and films, and serve as national animals for several countries including India, Malaysia, and South Korea.
            </p>
            <p>
              The tiger's distinctive appearance and reputation for strength and beauty have made it an enduring symbol in global marketing and branding, from breakfast cereals to gasoline companies.
            </p>
          </div>
        </div>
        
        <div className="tiger-fact-card">
          <h4>Famous Tigers</h4>
          <p>
            Throughout history, certain individual tigers have gained fame or notoriety. The "Champawat Tiger" was a female Bengal tiger responsible for an estimated 436 deaths in Nepal and India before being shot in 1907. In literature, Shere Khan from Rudyard Kipling's "The Jungle Book" remains one of the most famous fictional tigers. In the realm of conservation, "Machli" (T-16) was perhaps the world's most photographed tiger, living in Ranthambore National Park in India until her death in 2016 at the age of 20.
          </p>
        </div>
        
        <div className="tiger-image-grid">
          <div className="tiger-image">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/94/Chinese_painting_of_tiger.jpg" alt="Traditional Chinese tiger painting" />
            <div className="tiger-image-caption">Traditional Chinese painting depicting a tiger</div>
          </div>
          <div className="tiger-image">
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/12/India_-_Durga_-_Tiger_-_09312-210-154.jpg" alt="Hindu goddess Durga riding a tiger" />
            <div className="tiger-image-caption">Hindu goddess Durga riding her tiger mount</div>
          </div>
        </div>
      </section>
      
      {/* Conservation Section */}
      <section className="tiger-section">
        <h2>Tiger Conservation Efforts</h2>
        <div className="tiger-stripe-divider"></div>
        <div className="tiger-content">
          <div className="tiger-text-content">
            <h3>Current Conservation Status</h3>
            <p>
              Tigers are classified as <strong>endangered</strong> on the IUCN Red List, with fewer than 4,500 individuals 
              estimated to remain in the wild. Of the nine subspecies of tiger that existed in the early 1900s, 
              only six remain today, with three having gone extinct in the last century.
            </p>
            
            <h3>Major Conservation Initiatives</h3>
            <ul className="tiger-list">
              <li>
                <strong>Global Tiger Recovery Program:</strong> An international initiative launched in 2010 
                with the goal of doubling wild tiger populations by 2022.
              </li>
              <li>
                <strong>Protected Area Management:</strong> Establishing and strengthening protected areas in 
                tiger range countries to secure critical habitat.
              </li>
              <li>
                <strong>Anti-Poaching Efforts:</strong> Increasing law enforcement and anti-poaching measures 
                to combat illegal wildlife trade.
              </li>
              <li>
                <strong>Human-Tiger Conflict Mitigation:</strong> Implementing strategies to reduce conflict 
                between tigers and local communities.
              </li>
            </ul>
          </div>
          <div className="tiger-image-placeholder">
            <div className="placeholder-text">Conservation Image</div>
          </div>
        </div>
      </section>

      {/* Habitat Section */}
      <section className="tiger-section">
        <h2>Tiger Habitats Around the World</h2>
        <div className="tiger-stripe-divider"></div>
        <div className="tiger-content">
          <div className="tiger-text-content">
            <p>
              Tigers once roamed across vast swaths of Asia, from Turkey in the west to eastern Russia and 
              from Siberia in the north to the Indonesian islands in the south. Today, their range has been 
              reduced by about 93%, confining them to fragmented pockets of habitat.
            </p>
            
            <h3>Key Tiger Habitats</h3>
            <div className="tiger-habitat-grid">
              <div className="tiger-habitat-card">
                <h4>Tropical Forests</h4>
                <p>
                  Dense forests in India, Southeast Asia, and Indonesia provide critical cover for hunting 
                  and raising cubs.
                </p>
              </div>
              <div className="tiger-habitat-card">
                <h4>Mangrove Swamps</h4>
                <p>
                  The Sundarbans in India and Bangladesh form the world's largest mangrove forest and support 
                  a unique population of tigers adapted to semi-aquatic life.
                </p>
              </div>
              <div className="tiger-habitat-card">
                <h4>Taiga Ecosystems</h4>
                <p>
                  Siberian tigers survive in the harsh, snowy forests of the Russian Far East and Northeast China.
                </p>
              </div>
              <div className="tiger-habitat-card">
                <h4>Grasslands and Savannas</h4>
                <p>
                  Open grasslands interspersed with forests provide ideal hunting grounds in parts of India and Nepal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Significance Section */}
      <section className="tiger-section">
        <h2>Ecological Significance</h2>
        <div className="tiger-stripe-divider"></div>
        <div className="tiger-content">
          <div className="tiger-text-content">
            <h3>Tigers as Ecosystem Engineers</h3>
            <p>
              As apex predators, tigers help regulate prey populations, which in turn influences vegetation 
              patterns and overall ecosystem health. Their presence indicates a healthy, functioning ecosystem 
              with intact food webs.
            </p>
            
            <h3>The Umbrella Effect</h3>
            <p>
              Protecting tigers and their habitats indirectly protects countless other species that share 
              the same ecosystems. A single tiger reserve may be home to thousands of plant and animal species.
            </p>
            
            <h3>Economic Value</h3>
            <p>
              Tiger conservation can drive economic benefits through ecotourism, providing sustainable 
              livelihoods for local communities while preserving natural resources.
            </p>

            <h3>Cultural Significance</h3>
            <p>
              Tigers hold immense cultural value across Asia, appearing prominently in art, literature, 
              mythology, and national identities. This cultural connection can be leveraged to promote 
              conservation efforts.
            </p>
          </div>
          <div className="tiger-image-placeholder">
            <div className="placeholder-text">Ecosystem Image</div>
          </div>
        </div>
      </section>

      {/* Threats Section */}
      <section className="tiger-section">
        <h2>Threats to Tiger Populations</h2>
        <div className="tiger-stripe-divider"></div>
        <div className="tiger-content">
          <div className="tiger-text-content">
            <div className="tiger-threats-container">
              <div className="tiger-threat-item">
                <h4>Habitat Loss and Fragmentation</h4>
                <p>
                  Deforestation, agricultural expansion, and infrastructure development have destroyed and 
                  fragmented tiger habitats, isolating populations and reducing prey availability.
                </p>
              </div>
              <div className="tiger-threat-item">
                <h4>Poaching and Illegal Trade</h4>
                <p>
                  Tigers are hunted for their body parts, which are used in traditional medicines, decorative 
                  items, and luxury goods, driving a lucrative illegal wildlife trade.
                </p>
              </div>
              <div className="tiger-threat-item">
                <h4>Human-Wildlife Conflict</h4>
                <p>
                  As human settlements expand into tiger territories, conflicts arise, often resulting in 
                  retaliatory killings when tigers prey on livestock or threaten human safety.
                </p>
              </div>
              <div className="tiger-threat-item">
                <h4>Climate Change</h4>
                <p>
                  Changing weather patterns affect tiger habitats, particularly in coastal areas like the 
                  Sundarbans, where rising sea levels threaten to submerge crucial tiger habitat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future of Tiger Conservation Section */}
      <section className="tiger-section">
        <h2>The Future of Tiger Conservation</h2>
        <div className="tiger-stripe-divider"></div>
        <div className="tiger-content">
          <div className="tiger-text-content">
            <p>
              Despite the numerous challenges facing tiger conservation, there are reasons for optimism. 
              Several tiger range countries have reported increases in tiger populations in recent years, 
              demonstrating that concerted conservation efforts can succeed.
            </p>
            <p>
              Future conservation strategies must focus on:
            </p>
            <ul className="tiger-list">
              <li>Securing and connecting remaining tiger habitats</li>
              <li>Engaging local communities as partners in conservation</li>
              <li>Reducing demand for tiger parts and products</li>
              <li>Leveraging advanced technologies for monitoring and protection</li>
              <li>Addressing climate change impacts on tiger habitats</li>
            </ul>
            <p>
              By taking a holistic approach to tiger conservation—one that addresses ecological, economic, 
              and social factors—we can ensure that these magnificent animals continue to roam the wild 
              for generations to come.
            </p>
          </div>
          <div className="tiger-image-placeholder">
            <div className="placeholder-text">Future Conservation Image</div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="tiger-section tiger-cta-section">
        <h2>How You Can Help</h2>
        <div className="tiger-stripe-divider"></div>
        <div className="tiger-content tiger-cta-content">
          <p>
            Tiger conservation requires global effort and individual action. Here are ways you can contribute 
            to protecting these magnificent creatures:
          </p>
          <div className="tiger-cta-buttons">
            <button className="tiger-btn">Support Conservation</button>
            <button className="tiger-btn">Learn More</button>
            <button className="tiger-btn">Spread Awareness</button>
          </div>
        </div>
      </section>

      {/* References Section */}
      <section className="tiger-section tiger-references">
        <h2>References & Further Reading</h2>
        <div className="tiger-stripe-divider"></div>
        <div className="tiger-content">
          <ul className="tiger-reference-list">
            <li>World Wildlife Fund (WWF) - Tiger Conservation</li>
            <li>International Union for Conservation of Nature (IUCN) - Tiger Status Report</li>
            <li>Global Tiger Forum</li>
            <li>Panthera - Tigers Forever Program</li>
            <li>Wildlife Conservation Society - Tiger Protection</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default TigerWorldContainer;
