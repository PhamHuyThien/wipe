import { borderRadius } from "@mui/system";

function Attachments({ attachments }) {
    return attachments.map((attachment, i) => {
        return <Attachment attachment={attachment} key={i}></Attachment>;
    });

    function ShowImage({ url }) {
        return (
            <div style={{ paddingBottom: "5px" }}>
                <img src={url} style={{ width: "200px", borderRadius: "10px" }}></img>
            </div>
        );
    }

    function ShowFile({ url, name, type }) {
        return (
            <div style={{ paddingBottom: "5px" }}>
                <a href={url} style={{ width: "200px", borderRadius: "10px", }}><u>{name + "." + type}</u></a>
            </div>
        );
    }
    function Attachment({ attachment }) {
        return (
            <div style={{ padding: "10px", margin: "5px 0", border: "solid 1px #e3e1e1", borderRadius: "10px"}}>
                {["png", "jpg", "jpeg", "gif"].includes(attachment.type) ? <ShowImage url={attachment.url}></ShowImage> : <ShowFile url={attachment.url} name={attachment.name} type={attachment.type}></ShowFile>}
                <div className="attachment">
                    <a className="material-icons" style={{ marginRight: "10px", fontSize: "20px", color: "#2196f3" }} href={attachment.url}>file_download</a>
                    <div className="file">
                        <span>{attachment.size + " KB " + attachment.type + " file"}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Attachments;