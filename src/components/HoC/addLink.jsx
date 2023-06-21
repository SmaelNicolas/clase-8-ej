import { openInNewTab } from "../../helpers/openInNewTab";

export const addLink = (WrappedComponent) => {
	const AddLink = (props) => {
		return (
			<div onClick={() => openInNewTab(props.link)}>
				<WrappedComponent {...props} text={"Div Con Link modificado"} />
			</div>
		);
	};
	return AddLink;
};
