import { Card, CardContent, Typography } from "@material-ui/core";
import "./InfoBox.css";

function InfoBox({ title, cases, total }) {
  return (
    <Card className="card">
      <CardContent>
        {/* Card Title */}
        <Typography className="infobox__title" color="textSecondary">
          {title}
        </Typography>

        {/* Number of Daily Cases */}
        <h2 className="infobox__cases">{cases}</h2>

        {/* Total Cases */}
        <Typography className="infobox__total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
