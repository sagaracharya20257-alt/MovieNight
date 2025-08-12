import Section from "./Section";

export default function PlanForm({ plan, onPlanChange }) {
  return (
    <form>
      <Section title="Movie Details">
        <div className="mb-3">
          <label className="form-label">Movie Title</label>
          <input
            type="text"
            maxLength={30}
            className="form-control"
            value={plan.title}
            onChange={(e) => onPlanChange("title", e.target.value)}
          />
          <div className="form-text">
            {plan.title.length} / 30 characters
          </div>
        </div>
      </Section>

      <Section title="Date & Location">
        <div className="mb-3">
          <label className="form-label">Date</label>
          <input
            type="date"
            className="form-control"
            value={plan.date}
            onChange={(e) => onPlanChange("date", e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Location</label>
          <input
            type="text"
            className="form-control"
            value={plan.location}
            onChange={(e) => onPlanChange("location", e.target.value)}
          />
        </div>
      </Section>
    </form>
  );
}
