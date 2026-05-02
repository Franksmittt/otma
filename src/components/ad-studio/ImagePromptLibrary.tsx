"use client";

import { useCallback, useMemo, useState } from "react";
import {
  AD_STUDIO_PROMPT_BUNDLES,
  AD_STUDIO_PROMPT_METHODOLOGY,
} from "@/lib/ad-studio-prompts";

function stringifyData(data: unknown) {
  return typeof data === "string" ? data : JSON.stringify(data, null, 2);
}

export function ImagePromptLibrary() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyText = useCallback(async (id: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      window.setTimeout(() => setCopiedId((c) => (c === id ? null : c)), 2000);
    } catch {
      window.alert("Copy failed. Select the text manually.");
    }
  }, []);

  const methodologyText = useMemo(() => AD_STUDIO_PROMPT_METHODOLOGY, []);

  return (
    <section className="prompt-library" aria-labelledby="prompt-library-heading">
      <h2 id="prompt-library-heading">Image prompt backup library</h2>
      <p className="prompt-library-lede">
        JSON blocks for OTMA-style documentary movers (three-part structure). Copy into your image tool. This page is
        unindexed; data lives in the repo under <code>src/lib/ad-studio-prompts/</code>.
      </p>

      <details className="prompt-library-details" open>
        <summary>How these prompts are built (methodology)</summary>
        <p className="prompt-library-hint">
          Aesthetic anchors, character design, tape/physics rules, lighting, and faux camera metadata — same system for
          every batch.
        </p>
        <pre className="prompt-library-pre" tabIndex={0}>
          {methodologyText}
        </pre>
        <button
          type="button"
          className="prompt-library-copy"
          onClick={() => void copyText("methodology", methodologyText)}
        >
          {copiedId === "methodology" ? "Copied" : "Copy methodology"}
        </button>
      </details>

      {AD_STUDIO_PROMPT_BUNDLES.map((bundle) => {
        const raw = stringifyData(bundle.data);
        return (
          <details key={bundle.id} className="prompt-library-details">
            <summary>{bundle.title}</summary>
            <p className="prompt-library-hint">{bundle.description}</p>
            <textarea readOnly className="prompt-library-textarea" rows={14} value={raw} spellCheck={false} />
            <button type="button" className="prompt-library-copy" onClick={() => void copyText(bundle.id, raw)}>
              {copiedId === bundle.id ? "Copied" : "Copy JSON"}
            </button>
          </details>
        );
      })}
    </section>
  );
}
