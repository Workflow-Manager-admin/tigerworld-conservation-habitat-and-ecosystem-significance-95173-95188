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
            <p>
              At the beginning of the 20th century, the global tiger population was estimated at 100,000. By 2010, that number had plummeted to just 3,200, marking a devastating 97% decline in a century. Thanks to concerted conservation efforts, the population has since increased to approximately 4,500 as of the latest global assessments.
            </p>
            
            <h3>Major Conservation Initiatives</h3>
            <ul className="tiger-list">
              <li>
                <strong>Global Tiger Recovery Program:</strong> An international initiative launched in 2010 at the St. Petersburg Tiger Summit with the ambitious goal of doubling wild tiger populations by 2022 (TX2). This program brought together all 13 tiger range countries in an unprecedented collaborative effort.
              </li>
              <li>
                <strong>Protected Area Management:</strong> Establishing and strengthening protected areas in tiger range countries to secure critical habitat. Currently, there are approximately 110 designated tiger reserves across Asia.
              </li>
              <li>
                <strong>Anti-Poaching Efforts:</strong> Increasing law enforcement and anti-poaching measures to combat illegal wildlife trade, including the use of advanced technologies like camera traps, drones, and DNA analysis.
              </li>
              <li>
                <strong>Human-Tiger Conflict Mitigation:</strong> Implementing strategies to reduce conflict between tigers and local communities, such as compensation schemes for livestock loss, tiger-proof livestock enclosures, and community-based monitoring programs.
              </li>
              <li>
                <strong>Corridor Conservation:</strong> Creating and protecting wildlife corridors that connect isolated tiger populations, allowing for genetic exchange and range expansion.
              </li>
              <li>
                <strong>CITES Protection:</strong> Tigers are listed on Appendix I of CITES (Convention on International Trade in Endangered Species of Wild Fauna and Flora), which prohibits international commercial trade in tigers and their parts.
              </li>
            </ul>
            
            <h3>Major Organizations Dedicated to Tiger Protection</h3>
            <p>Several international and local organizations work tirelessly on tiger conservation:</p>
            <ul className="tiger-list">
              <li>
                <strong>WWF (World Wildlife Fund):</strong> A leading organization in tiger conservation through their Tigers Alive Initiative, working in all 13 tiger range countries.
              </li>
              <li>
                <strong>Panthera:</strong> Their Tigers Forever program aims to increase tiger numbers by at least 50% in key sites over a 10-year period.
              </li>
              <li>
                <strong>Wildlife Conservation Society (WCS):</strong> Works on scientific research, anti-poaching efforts, and community engagement across tiger habitats.
              </li>
              <li>
                <strong>Global Tiger Forum (GTF):</strong> The only intergovernmental organization dedicated exclusively to tiger conservation.
              </li>
              <li>
                <strong>National Tiger Conservation Authority (India):</strong> A statutory body that oversees the Project Tiger initiative in India, home to 70% of the world's wild tigers.
              </li>
            </ul>
          </div>
          <div className="tiger-image">
            <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Tiger Conservation Rangers" />
            <div className="tiger-image-caption">Anti-poaching rangers patrolling a tiger reserve</div>
          </div>
        </div>
        
        <h3>Conservation Timeline</h3>
        <div className="tiger-timeline">
          <div className="tiger-timeline-item">
            <span className="tiger-timeline-date">1973</span>
            <p>India launches Project Tiger, one of the world's most successful conservation initiatives, establishing 9 tiger reserves.</p>
          </div>
          <div className="tiger-timeline-item">
            <span className="tiger-timeline-date">1993</span>
            <p>China bans domestic trade in tiger bone for use in traditional Chinese medicine.</p>
          </div>
          <div className="tiger-timeline-item">
            <span className="tiger-timeline-date">2010</span>
            <p>The St. Petersburg Tiger Summit brings together tiger range countries to commit to doubling wild tiger populations by 2022 (TX2).</p>
          </div>
          <div className="tiger-timeline-item">
            <span className="tiger-timeline-date">2016</span>
            <p>WWF announces that global wild tiger numbers increase for the first time in a century, from 3,200 to 3,890.</p>
          </div>
          <div className="tiger-timeline-item">
            <span className="tiger-timeline-date">2022</span>
            <p>The International Tiger Day celebration marks progress towards the TX2 goal, with several countries including India, Nepal, and Russia reporting significant increases in their tiger populations.</p>
          </div>
        </div>
        
        <div className="tiger-fact-card">
          <h4>Conservation Success Stories</h4>
          <p>
            Nepal became the first country to almost double its tiger population ahead of the 2022 target, growing from 121 tigers in 2009 to 235 in 2018. In India, the tiger population increased from 1,411 in 2006 to 2,967 in 2018, marking a substantial recovery. These successes demonstrate that with political will, community involvement, and proper resource allocation, tiger populations can recover.
          </p>
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
            
            <p>
              Tigers are incredibly adaptable and can inhabit a wide range of environments, from the snowy taiga of Siberia to the tropical rainforests of Indonesia. The key requirements for tiger habitat are adequate cover, access to water, and sufficient prey.
            </p>
            
            <h3>Key Tiger Habitats</h3>
            <div className="tiger-habitat-grid">
              <div className="tiger-habitat-card">
                <h4>Tropical Forests</h4>
                <p>
                  Dense forests in India, Southeast Asia, and Indonesia provide critical cover for hunting 
                  and raising cubs. These include moist and dry deciduous forests, tropical and subtropical moist broadleaf forests, and evergreen forests.
                </p>
              </div>
              <div className="tiger-habitat-card">
                <h4>Mangrove Swamps</h4>
                <p>
                  The Sundarbans in India and Bangladesh form the world's largest mangrove forest and support 
                  a unique population of tigers adapted to semi-aquatic life. These tigers are excellent swimmers who can cross rivers up to 8km wide and have adapted to drinking saline water.
                </p>
              </div>
              <div className="tiger-habitat-card">
                <h4>Taiga Ecosystems</h4>
                <p>
                  Siberian tigers survive in the harsh, snowy forests of the Russian Far East and Northeast China, where winter temperatures can drop to -40°C. They have thicker fur, more fat deposits, and larger territories than their tropical cousins due to lower prey density.
                </p>
              </div>
              <div className="tiger-habitat-card">
                <h4>Grasslands and Savannas</h4>
                <p>
                  Open grasslands interspersed with forests provide ideal hunting grounds in parts of India and Nepal. Tall grass habitats like those found in Terai regions offer excellent camouflage for tigers while stalking prey.
                </p>
              </div>
              <div className="tiger-habitat-card">
                <h4>Mountainous Regions</h4>
                <p>
                  Tigers can also inhabit mountainous areas, with some populations found at elevations up to 3,000 meters (9,800 ft) in the Himalayas. These mountain tigers often follow their prey species up and down the slopes with seasonal migrations.
                </p>
              </div>
              <div className="tiger-habitat-card">
                <h4>Riparian Corridors</h4>
                <p>
                  Areas along rivers and streams are particularly important for tigers, providing water, prey concentration, and travel corridors between fragmented habitats. Many protected areas follow these natural corridors.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="tiger-gallery">
          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1477764250597-dffe9f601ae8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Tiger in grassland" />
          </div>
          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1605092676920-8ac5ae40c7c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Tiger in water" />
          </div>
          <div className="gallery-item">
            <img src="https://images.pexels.com/photos/44527/tiger-siberian-tiger-amurtiger-big-cat-44527.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Siberian tiger in snow" />
          </div>
          <div className="gallery-item">
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/17/Tiger_in_Ranthambhore.jpg" alt="Bengal tiger in deciduous forest" />
          </div>
        </div>
        
        <h3>Protected Tiger Habitats</h3>
        <p>
          Protected areas form the cornerstone of tiger conservation. Some of the most important tiger reserves and national parks include:
        </p>
        <ul className="tiger-list">
          <li>
            <strong>Jim Corbett National Park, India:</strong> India's oldest national park and home to one of the highest tiger densities in the country.
          </li>
          <li>
            <strong>Sundarbans National Park, India/Bangladesh:</strong> The largest mangrove forest in the world and UNESCO World Heritage site.
          </li>
          <li>
            <strong>Sikhote-Alin Biosphere Reserve, Russia:</strong> Critical protected area for Siberian tigers.
          </li>
          <li>
            <strong>Chitwan National Park, Nepal:</strong> A conservation success story where tiger numbers have doubled in recent years.
          </li>
          <li>
            <strong>Way Kambas National Park, Indonesia:</strong> Important protected area for the critically endangered Sumatran tiger.
          </li>
        </ul>
      </section>

      {/* Ecosystem Significance Section */}
      <section className="tiger-section">
        <h2>Ecological Significance</h2>
        <div className="tiger-stripe-divider"></div>
        <div className="tiger-content">
          <div className="tiger-text-content">
            <h3>Tigers as Apex Predators</h3>
            <p>
              As apex predators, tigers sit at the top of the food chain, playing a critical role in regulating prey populations and maintaining ecological balance. Their presence or absence has cascading effects throughout the ecosystem, influencing everything from prey behavior to vegetation patterns.
            </p>
            <p>
              When tigers are removed from an ecosystem, prey populations—particularly herbivores like deer and wild boar—can increase dramatically, leading to overgrazing and habitat degradation. This phenomenon, known as a "trophic cascade," demonstrates the far-reaching impact of apex predators on ecosystems.
            </p>
            
            <h3>The Umbrella Effect</h3>
            <p>
              Tigers are considered an "umbrella species"—protecting them requires conserving vast swaths of habitat that benefit countless other species. A single tiger reserve may be home to thousands of plant species, hundreds of bird species, and dozens of other mammals, reptiles, and amphibians.
            </p>
            <p>
              For example, India's tiger reserves protect not only tigers but also other endangered species such as Asian elephants, one-horned rhinoceros, gaur, and various deer species. By conserving tigers, we inadvertently protect entire ecosystems.
            </p>
            
            <h3>Ecosystem Services</h3>
            <p>
              Tiger habitats provide essential ecosystem services that benefit human populations. These include:
            </p>
            <ul className="tiger-list">
              <li>
                <strong>Watershed Protection:</strong> Forested tiger habitats help regulate water flow, prevent soil erosion, and ensure clean water supplies for countless communities.
              </li>
              <li>
                <strong>Carbon Sequestration:</strong> The forests that tigers inhabit store vast amounts of carbon, helping mitigate climate change.
              </li>
              <li>
                <strong>Flood and Disaster Mitigation:</strong> Intact tiger habitats, particularly mangrove forests like the Sundarbans, provide natural barriers against storms, flooding, and coastal erosion.
              </li>
              <li>
                <strong>Pollination and Seed Dispersal:</strong> Diverse tiger habitats support pollinator species and complex seed dispersal networks essential for forest regeneration.
              </li>
            </ul>
            
            <h3>Economic Value</h3>
            <p>
              Tiger conservation can drive significant economic benefits through ecotourism, providing sustainable 
              livelihoods for local communities while preserving natural resources. In India alone, tiger tourism generates hundreds of millions of dollars annually and supports thousands of jobs.
            </p>
            <p>
              Beyond tourism, studies have estimated the economic value of ecosystem services provided by tiger habitats to be worth billions of dollars annually. This includes the value of carbon storage, water purification, flood control, and non-timber forest products.
            </p>
          </div>
          <div className="tiger-image">
            <img src="https://images.unsplash.com/photo-1543286386-2e659306cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Tiger in natural ecosystem" />
            <div className="tiger-image-caption">Tiger in its natural ecosystem - maintaining balance as an apex predator</div>
          </div>
        </div>
        
        <div className="tiger-fact-card">
          <h4>Indicator Species</h4>
          <p>
            Tigers are considered an indicator species, meaning their presence suggests a healthy, functioning ecosystem. To support a viable tiger population, an area must have sufficient prey, which in turn requires intact vegetation. The absence of tigers often signals broader ecological problems. This is why tiger monitoring programs are so valuable - they provide insights into overall ecosystem health.
          </p>
        </div>
      </section>

      {/* Threats Section */}
      <section className="tiger-section">
        <h2>Threats to Tiger Populations</h2>
        <div className="tiger-stripe-divider"></div>
        <div className="tiger-content">
          <div className="tiger-text-content">
            <h3>Global Population Trends and Statistics</h3>
            <p>
              The dramatic decline in tiger populations over the past century represents one of the most severe population crashes of any large predator in recorded history. In 1900, an estimated 100,000 tigers roamed across Asia. By 2010, that number had plummeted to just 3,200—a 97% decline.
            </p>
            <p>
              Recent conservation efforts have helped tiger numbers increase to approximately 4,500 as of the latest global assessment. However, this recovery is uneven: while countries like India, Nepal, and Russia have seen increases, tigers continue to decline in parts of Southeast Asia.
            </p>
            
            <div className="tiger-stats-table">
              <table>
                <thead>
                  <tr>
                    <th>Country</th>
                    <th>Estimated Tiger Population</th>
                    <th>Trend</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>India</td>
                    <td>~3,000</td>
                    <td>Increasing</td>
                  </tr>
                  <tr>
                    <td>Russia</td>
                    <td>~550</td>
                    <td>Stable/Increasing</td>
                  </tr>
                  <tr>
                    <td>Indonesia</td>
                    <td>~400</td>
                    <td>Decreasing</td>
                  </tr>
                  <tr>
                    <td>Nepal</td>
                    <td>~235</td>
                    <td>Increasing</td>
                  </tr>
                  <tr>
                    <td>Bangladesh</td>
                    <td>~114</td>
                    <td>Stable</td>
                  </tr>
                  <tr>
                    <td>Bhutan</td>
                    <td>~90</td>
                    <td>Stable</td>
                  </tr>
                  <tr>
                    <td>Thailand</td>
                    <td>~160</td>
                    <td>Stable</td>
                  </tr>
                  <tr>
                    <td>Malaysia</td>
                    <td>~150</td>
                    <td>Decreasing</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h3>Major Threats</h3>
            <div className="tiger-threats-container">
              <div className="tiger-threat-item">
                <h4>Habitat Loss and Fragmentation</h4>
                <p>
                  Deforestation, agricultural expansion, and infrastructure development have destroyed and 
                  fragmented tiger habitats, isolating populations and reducing prey availability. An estimated 95% of tiger habitat has been lost in the past 150 years.
                </p>
                <p>
                  Linear infrastructure like roads, railways, and canals cut through tiger habitats, creating barriers to movement and increasing human access to previously remote areas. At least 35% of current tiger habitat is at risk from infrastructure development.
                </p>
              </div>
              <div className="tiger-threat-item">
                <h4>Poaching and Illegal Trade</h4>
                <p>
                  Tigers are hunted for their body parts, which are used in traditional medicines, decorative 
                  items, and luxury goods, driving a lucrative illegal wildlife trade. A single tiger can fetch tens of thousands of dollars on the black market.
                </p>
                <p>
                  Between 2000 and 2018, parts from at least 2,359 individual tigers were seized in illegal wildlife trade, representing only a fraction of the actual trade. Despite international bans, demand for tiger parts persists in several countries.
                </p>
              </div>
              <div className="tiger-threat-item">
                <h4>Human-Wildlife Conflict</h4>
                <p>
                  As human settlements expand into tiger territories, conflicts arise, often resulting in 
                  retaliatory killings when tigers prey on livestock or threaten human safety. In some areas, tigers kill dozens of people annually.
                </p>
                <p>
                  Tigers that lose access to natural prey due to habitat degradation and poaching may target livestock, creating conflicts with local communities who depend on these animals for their livelihoods. In response, villagers may poison or trap tigers.
                </p>
              </div>
              <div className="tiger-threat-item">
                <h4>Climate Change</h4>
                <p>
                  Changing weather patterns affect tiger habitats, particularly in coastal areas like the 
                  Sundarbans, where rising sea levels threaten to submerge crucial tiger habitat. Models predict the Sundarbans could lose up to 96% of habitat suitable for tigers by 2070.
                </p>
                <p>
                  Climate change also alters prey distribution, water availability, and vegetation patterns, potentially forcing tigers to shift their ranges or adapt to new conditions. Extreme weather events like floods and droughts can directly impact tiger populations.
                </p>
              </div>
              <div className="tiger-threat-item">
                <h4>Prey Depletion</h4>
                <p>
                  Hunting of tiger prey species for human consumption reduces food availability for tigers. A tiger needs to consume approximately 50 large ungulates annually to survive and reproduce.
                </p>
                <p>
                  In many areas, prey populations have been severely depleted, forcing tigers to expand their territories, come into conflict with humans, or simply starve. Even well-protected tiger habitats cannot support tigers if prey is absent.
                </p>
              </div>
              <div className="tiger-threat-item">
                <h4>Disease</h4>
                <p>
                  Emerging infectious diseases pose an increasing threat to small, isolated tiger populations with limited genetic diversity. The canine distemper virus (CDV) has killed tigers in the wild and could devastate vulnerable populations.
                </p>
                <p>
                  Disease transmission from domestic animals to wild tigers is a growing concern as human settlements encroach on tiger habitat. Outbreaks in small populations could potentially wipe out entire subspecies.
                </p>
              </div>
            </div>
            
            <div className="tiger-image-grid">
              <div className="tiger-image">
                <img src="https://images.unsplash.com/photo-1614531341773-3bff8b7cb3fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Deforestation threatening tiger habitat" />
                <div className="tiger-image-caption">Deforestation destroying critical tiger habitat</div>
              </div>
              <div className="tiger-image">
                <img src="https://images.unsplash.com/photo-1615874694520-474822394e73?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Tiger skin from illegal poaching" />
                <div className="tiger-image-caption">Confiscated tiger products from illegal wildlife trade</div>
              </div>
            </div>
            
            <h3>Local Community Involvement</h3>
            <p>
              Conservation efforts have increasingly recognized that local communities must be partners in tiger conservation rather than adversaries. When local people benefit from tiger conservation, they are more likely to support it.
            </p>
            <p>
              Successful community engagement strategies include:
            </p>
            <ul className="tiger-list">
              <li>
                <strong>Alternative Livelihoods:</strong> Developing sustainable income sources that don't deplete forest resources, such as ecotourism, handicraft production, and sustainable agriculture.
              </li>
              <li>
                <strong>Compensation Programs:</strong> Providing financial compensation for livestock losses due to tiger predation.
              </li>
              <li>
                <strong>Community-Based Monitoring:</strong> Employing local people as forest guards and wildlife monitors, creating a sense of ownership and providing employment.
              </li>
              <li>
                <strong>Benefit Sharing:</strong> Ensuring that a portion of revenue from tiger tourism and other conservation-related activities flows back to local communities.
              </li>
              <li>
                <strong>Education and Awareness:</strong> Building understanding and pride in local wildlife, particularly among young people who represent the future of conservation.
              </li>
            </ul>
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
