import Section from "./Section";

export default function PlanForm({ plan, onPlanChange }) {
  return (
    <form>
      <Section title="Movie Details">
        <div className="form-field">
          <label>Movie Title</label>
          <input
            type="text"
            maxLength={30}
            value={plan.title}
            onChange={(e) => onPlanChange("title", e.target.value)}
          />
          <span className="char-count">
            {plan.title.length} / 30
          </span>
        </div>
      </Section>

      <Section title="Date & Location">
        <div className="form-field">
          <label>Date</label>
          <input
            type="date"
            value={plan.date}
            onChange={(e) => onPlanChange("date", e.target.value)}
          />
        </div>
        <div className="form-field">
          <label>Location</label>
          <input
            type="text"
            value={plan.location}
            onChange={(e) => onPlanChange("location", e.target.value)}
          />
        </div>
      </Section>
    </form>
  );
}
