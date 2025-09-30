mkdir -p src/pages
tee src/pages/AI.jsx >/dev/null <<'EOF'
import React from "react";
export default function AI() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">AI Solutions</h1>
      <p className="mb-4">
        We help organizations apply AI where it delivers real value—safer, faster migrations and practical automation.
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li><strong>AI-assisted migration</strong>: schema mapping, normalization, error detection</li>
        <li><strong>Automation copilots</strong>: ETL, file processing, reports, QA</li>
        <li><strong>Document intelligence</strong>: extract/classify/route PDFs & forms</li>
        <li><strong>Legacy modernization</strong>: translate & clean data for modern platforms</li>
        <li><strong>Ops optimization</strong>: forecast usage, detect anomalies, trim costs</li>
      </ul>
      <a className="inline-block mt-6 px-5 py-3 rounded-full font-semibold"
         style={{background:"#1976d2",color:"#fff"}} href="/contact?service=AI">
        Talk to us about AI
      </a>
    </div>
  );
}
EOF
