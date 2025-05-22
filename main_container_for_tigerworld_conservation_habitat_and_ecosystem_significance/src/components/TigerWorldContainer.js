import React from 'react';
import './TigerWorldContainer.css';

/**
 * Main Container for TigerWorld: Conservation, Habitat, and Ecosystem Significance
 * A comprehensive blog post exploring the world of tigers, their habitat, conservation, 
 * and significance in the ecosystem.
 */
function TigerWorldContainer() {
  return (
    <div className="tiger-world-container">
      {/* Hero Section */}
      <section className="tiger-hero">
        <div className="tiger-hero-content">
          <h1>TigerWorld: Conservation, Habitat, and Ecosystem Significance</h1>
          <p className="tiger-subtitle">
            Exploring the majestic world of tigers and their crucial role in maintaining balanced ecosystems
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="tiger-section">
        <h2>Introduction to Tigers</h2>
        <div className="tiger-content">
          <div className="tiger-text-content">
            <p>
              Tigers (Panthera tigris) are one of the most iconic and recognizable big cats in the world. 
              Known for their distinctive orange coat with black stripes, powerful build, and solitary nature, 
              tigers have captivated human imagination for centuries.
            </p>
            <p>
              As apex predators, tigers play a critical role in maintaining the health and balance of the 
              ecosystems they inhabit. However, their populations have faced dramatic declines due to habitat 
              loss, poaching, and human-wildlife conflict.
            </p>
          </div>
          <div className="tiger-image-placeholder">
            <div className="placeholder-text">Tiger Image Placeholder</div>
          </div>
        </div>
      </section>

      {/* Conservation Section */}
      <section className="tiger-section">
        <h2>Tiger Conservation Efforts</h2>
        <div className="tiger-content">
          <div className="tiger-text-content">
            <h3>Current Conservation Status</h3>
            <p>
              Tigers are classified as endangered on the IUCN Red List, with fewer than 4,500 individuals 
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
            <div className="placeholder-text">Conservation Image Placeholder</div>
          </div>
        </div>
      </section>

      {/* Habitat Section */}
      <section className="tiger-section">
        <h2>Tiger Habitats Around the World</h2>
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
            <div className="placeholder-text">Ecosystem Image Placeholder</div>
          </div>
        </div>
      </section>

      {/* Threats Section */}
      <section className="tiger-section">
        <h2>Threats to Tiger Populations</h2>
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
            <div className="placeholder-text">Future Conservation Image Placeholder</div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="tiger-section tiger-cta-section">
        <h2>How You Can Help</h2>
        <div className="tiger-content tiger-cta-content">
          <p>
            Tiger conservation requires global effort and individual action. Here are ways you can contribute 
            to protecting these magnificent creatures:
          </p>
          <div className="tiger-cta-buttons">
            <button className="tiger-btn">Support Conservation Organizations</button>
            <button className="tiger-btn">Learn More About Tigers</button>
            <button className="tiger-btn">Spread Awareness</button>
          </div>
        </div>
      </section>

      {/* References Section */}
      <section className="tiger-section tiger-references">
        <h2>References & Further Reading</h2>
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
