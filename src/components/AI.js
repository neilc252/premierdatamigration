import React from 'react'
import './AI.css'

const AI = () => {
  return (
    <div className='ai-page-container'>
      <header className='ai-page-header'>
        <h1>AI Solutions for Data Migration and Automation</h1>
        <p className='intro-text'>
          At [Your Company Name], we're not just about moving and managing data—we're about empowering your business with intelligent, forward-thinking solutions. By integrating Artificial Intelligence, we help you unlock new levels of efficiency, accuracy, and insight in your data migration and automation projects.
        </p>
      </header>

      <section className='why-ai-section'>
        <h2>Why AI for Data Migration and Automation?</h2>
        <p>
          AI goes beyond simple scripting and rules-based systems. It learns, adapts, and predicts, making it the perfect partner for complex data challenges. Here's how we leverage AI:
        </p>
        <ul className='ai-benefits-list'>
          <li>
            <strong>Intelligent Data Mapping:</strong> AI algorithms can analyze source and target schemas to suggest and automate complex data mappings, significantly reducing manual effort and the risk of errors.
          </li>
          <li>
            <strong>Predictive Error Detection:</strong> Our AI models can identify patterns that lead to data corruption or migration failures before they happen, allowing for proactive intervention.
          </li>
          <li>
            <strong>Automated Data Cleansing:</strong> AI can automatically identify and correct inconsistencies, duplicates, and missing values in your datasets, ensuring clean and reliable data is migrated.
          </li>
          <li>
            <strong>Optimized Automation Workflows:</strong> We use AI to analyze your day-to-day tasks and suggest improvements, creating smarter, more efficient automation pipelines that adapt to your business needs.
          </li>
          <li>
            <strong>Enhanced Security & Compliance:</strong> AI can continuously monitor data flows for anomalies, unauthorized access, or compliance violations, providing an extra layer of security during migration.
          </li>
        </ul>
      </section>

      <section className='how-we-help-section'>
        <h2>Our AI-Powered Services</h2>
        <div className='service-grid'>
          <div className='service-card'>
            <h3>AI-Assisted Data Migration</h3>
            <p>
              We combine our expert migration services with AI-driven tools to ensure a faster, more accurate, and lower-risk transition. From schema matching to validation, AI is at the core of our modern approach.
            </p>
          </div>
          <div className='service-card'>
            <h3>Intelligent Business Process Automation (iBPA)</h3>
            <p>
              Move beyond simple RPA. Our iBPA solutions use machine learning to understand and automate complex, decision-based tasks, freeing up your team to focus on strategic initiatives.
            </p>
          </div>
          <div className='service-card'>
            <h3>AI for Day-to-Day Tasks</h3>
            <p>
              We help you identify and implement AI solutions for your daily operations, from intelligent document processing to customer service automation, ensuring your business runs as efficiently as possible.
            </p>
          </div>
        </div>
      </section>

      <section className='cta-section'>
        <h2>Ready to Innovate with AI?</h2>
        <p>
          Artificial Intelligence is the future of business efficiency. Let us show you how to leverage its power to solve your toughest data challenges and streamline your operations.
        </p>
        <button className='contact-button' onClick={() => (window.location.href = '/contact')}>
          Talk to an AI Expert
        </button>
      </section>
    </div>
  )
}

export default AI
