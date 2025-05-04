import { Metadata } from "next";
import {
  Users,
  Activity,
  HeartPulse,
  Apple,
  Camera,
  BarChart,
  Target,
  BookOpen,
  Database,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Vita Health | Blitzbuild Products",
  description:
    "Learn about Vita Health, an AI-powered mobile app for managing chronic health conditions through nutrition and lifestyle.",
};

export default function VitaHealthPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 md:px-6">
      {/* Header Section */}
      <div className="mb-10 border-b pb-6">
        <h1 className="mb-2 text-4xl font-bold tracking-tight text-primary">
          Vita Health
        </h1>
        <p className="text-xl text-muted-foreground">
          Personalized Nutrition & Lifestyle Management for Chronic Conditions
        </p>
      </div>

      {/* Product Overview Section */}
      <section className="mb-12 space-y-4">
        <h2 className="mb-4 text-2xl font-semibold">Product Overview</h2>
        <p className="text-lg leading-relaxed text-muted-foreground">
          <strong>Vita Health</strong> is a mobile app designed specifically for
          users managing chronic health conditions—such as diabetes and
          ulcerative colitis—to make informed dietary choices and adopt
          healthier lifestyles. The application provides personalized
          nutritional insights, risk assessments, and practical guidance tailored
          to each user's unique health profile.
        </p>
        <p className="text-lg leading-relaxed text-muted-foreground">
          Initially, <strong>Vita Health</strong> will focus on nutrition
          management by analyzing users' dietary intake through photo uploads and
          manual entry, generating detailed nutritional breakdowns, identifying
          potential health risks, and suggesting healthier alternatives. Users
          receive real-time insights and actionable recommendations, helping them
          understand the direct impact of their diet on their health condition.
        </p>
        <p className="text-lg leading-relaxed text-muted-foreground">
          In subsequent development phases, Vita Health will expand to
          incorporate additional health data—such as sleep patterns and physical
          activity—through integration with platforms like{" "}
          <strong className="inline-flex items-center">
            <Apple className="mr-1 inline size-4" /> Apple HealthKit
          </strong>{" "}
          and <strong>Garmin Connect</strong>. Leveraging comprehensive health
          analytics, the app will provide deeper, personalized health
          recommendations, encouraging users toward a holistic, sustainable
          approach to health management.
        </p>
        <p className="text-lg leading-relaxed text-muted-foreground">
          Long-term plans also include collaboration with healthcare providers to
          enhance health outcomes through data-driven care coordination and
          clinical insights.
        </p>
      </section>

      {/* Target Users Section */}
      <section className="mb-12 space-y-4">
        <h2 className="mb-4 text-2xl font-semibold">Target Users</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-6">
            <h3 className="mb-3 text-xl font-medium">Core Users</h3>
            <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
              <li>
                Individuals diagnosed with chronic health conditions (diabetes,
                ulcerative colitis, hypertension, hyperlipidemia, etc.) needing
                dietary management.
              </li>
              <li>
                People with minor health anomalies (elevated cholesterol,
                borderline blood sugar/pressure) seeking proactive lifestyle
                improvements.
              </li>
            </ul>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <h3 className="mb-3 text-xl font-medium">Secondary Users</h3>
            <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
              <li>
                Individuals pursuing specific health/wellness goals:
                <ul className="list-circle mt-1 space-y-1 pl-5">
                  <li>Weight loss or body fat reduction.</li>
                  <li>Muscle gain or physique enhancement.</li>
                  <li>Improved general health through better nutrition.</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Core Features (MVP) Section */}
      <section className="mb-12 space-y-6">
        <h2 className="mb-4 text-2xl font-semibold">Core Features (MVP)</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Feature 1 */}
          <div className="rounded-lg border bg-card p-4">
            <Users className="mb-2 size-7 text-primary" />
            <h4 className="mb-1 font-medium">User Health Profile & Personalization</h4>
            <p className="text-sm text-muted-foreground">
              Health onboarding and personalized dietary guidance based on conditions/goals.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="rounded-lg border bg-card p-4">
            <Camera className="mb-2 size-7 text-primary" />
            <h4 className="mb-1 font-medium">Nutrition Tracking & Analysis</h4>
            <p className="text-sm text-muted-foreground">
              AI photo logging, detailed nutritional breakdown, and health risk alerts.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="rounded-lg border bg-card p-4">
            <Zap className="mb-2 size-7 text-primary" />
            <h4 className="mb-1 font-medium">Actionable Dietary Suggestions</h4>
            <p className="text-sm text-muted-foreground">
              Healthier food alternatives and daily/weekly meal pattern insights.
            </p>
          </div>
          {/* Feature 4 */}
          <div className="rounded-lg border bg-card p-4">
            <BarChart className="mb-2 size-7 text-primary" />
            <h4 className="mb-1 font-medium">Progress Tracking & Visualization</h4>
            <p className="text-sm text-muted-foreground">
              Health dashboard showing trends in nutrition, weight, and condition-specific metrics.
            </p>
          </div>
          {/* Feature 5 */}
          <div className="rounded-lg border bg-card p-4">
            <BookOpen className="mb-2 size-7 text-primary" />
            <h4 className="mb-1 font-medium">Educational Content & Guidance</h4>
            <p className="text-sm text-muted-foreground">
              Tailored, bite-sized health tips and guided learning modules.
            </p>
          </div>
          {/* Feature 6 */}
          <div className="rounded-lg border bg-card p-4">
            <Database className="mb-2 size-7 text-primary" />
            <h4 className="mb-1 font-medium">Basic Integration & Data Sync</h4>
            <p className="text-sm text-muted-foreground">
              Manual entry for weight, glucose, BP, etc., for initial tracking.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 