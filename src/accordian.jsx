import { useState } from 'react';

const SECTIONS = [
  {
    id: 1,    
    title: 'HTML',
    content: 'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.',
  },
  {
    id: 2,
    title: 'CSS',
    content: 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.',
  },
  {
    id: 3,
    title: 'JavaScript',
    content: 'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.',
  },
];

export default function Accordion() {
  // Use a Set to keep track of indices of expanded sections
  const [expandedSections, setExpandedSections] = useState(new Set());

  const toggleSection = (index) => {
    const nextExpanded = new Set(expandedSections);
    if (nextExpanded.has(index)) {
      nextExpanded.delete(index); // Collapse if already open
    } else {
      nextExpanded.add(index); // Expand if closed
    }
    setExpandedSections(nextExpanded);
  };

  return (
    <main className="accordion-page">
      <div className="accordion-wrap">
        <header className="accordion-heading">
          <p className="accordion-kicker">A quick reference</p>
          <h1>Web fundamentals</h1>
          <p className="accordion-intro">
            The building blocks behind every page on the internet.
          </p>
        </header>
        <div className="accordion-list">
          {SECTIONS.map((section, index) => {
            const isExpanded = expandedSections.has(index);
            const panelId = `section-content-${section.id}`;
            const triggerId = `section-trigger-${section.id}`;

            return (
              <section key={section.id} className="accordion-section">
                <button
                  id={triggerId}
                  className="accordion-trigger"
                  type="button"
                  onClick={() => toggleSection(index)}
                  aria-expanded={isExpanded}
                  aria-controls={panelId}
                >
                  <span className="accordion-index">0{section.id}</span>
                  <span className="accordion-title">{section.title}</span>
                  <span
                    aria-hidden="true"
                    className={`accordion-icon ${isExpanded ? 'accordion-icon--rotated' : ''}`}
                  />
                </button>
                <div
                  id={panelId}
                  className="accordion-panel"
                  role="region"
                  aria-labelledby={triggerId}
                  hidden={!isExpanded}
                >
                  <p>{section.content}</p>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </main>
  );
}