import { useState } from 'react';

const SECTIONS = [
  {
    title: 'HTML',
    content: 'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.',
  },
  {
    title: 'CSS',
    content: 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.',
  },
  {
    title: 'JavaScript',
    content: 'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.',
  },
];

export default function Accordion() {
  // Use a Set to keep track of indices of expanded sections
  const [expandedSections, setExpandedSections] = useState<Set<number>>(new Set());

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
    <div>
      {SECTIONS.map((section, index) => {
        const isExpanded = expandedSections.has(index);
        return (
          <div key={section.title}>
            <div onClick={() => toggleSection(index)} style={{ cursor: 'pointer' }}>
              {section.title}
              <span
                aria-hidden={true}
                className={`accordion-icon ${isExpanded ? 'accordion-icon--rotated' : ''}`}
              />
            </div>
            {isExpanded && <div>{section.content}</div>}
          </div>
        );
      })}
    </div>
  );
}