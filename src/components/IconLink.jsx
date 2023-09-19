import { Link } from "react-router-dom";

const IconLink = (props) => {

    return <Link to={props.page} className="flex flex-col items-center group/item">{props.icon}<p className="sm:scale-0 group-hover/item:scale-100 scale-75 sm:text-sm transition-all text-sm text-white">{props.label}</p></Link>
}

export default IconLink;