import { useNavigate, useParams } from "react-router-dom";
import StopMap from "../components/StopMap";
import { infoRoutes } from "../components/infoRoutes";
import NewHeader from "../components/NewHeader";
import NewFooter from "../components/NewFooter";
import ScrollToTop from "../components/ScrollToTop";
import "./RouteDetail.css";

export default function RouteDetail() {
  let { id } = useParams();

  const showRoute = (r) => {
    return (
      <div className="route-detail-container">
        <div className="route-detail-id" style={{ backgroundColor: r.color }}>{r.id}</div>
        <div className="route-detail-name-and-description">
          <div className="route-detail-name">{r.name}</div>
          <div className="route-detail-description">{r.description}</div>
          {
            infoRoutes[id].stops.map(showStop)
          }
        </div>
      </div>
    );
  }

  const showStop = (stop, index) => {
    return (
      <div key={index} className="route-detail-stops">
        <span>Parada {stop.idStop}:</span> {stop.name}
      </div>       
    );
  }

  return (
    <>
      <ScrollToTop />
      <NewHeader />
      <div className="route-detail-outer-container">
        {
          showRoute(infoRoutes[id])
        }
        <div className="route-detail-stop-map">
          <StopMap location={infoRoutes[id].stops[0].location} />
        </div>
      </div>
      <NewFooter />
    </>
  );
}