
function Attachments({ attachments }) {
    return attachments.map((element, i) => {
        return <Attachment {...element} key={i}></Attachment>
    });

    function Attachment({
        fileAddress, fileName, fileSize, fileType
    }) {
        return (
            <div className="attachment">
                <button className="btn attach"><i className="material-icons md-18">insert_drive_file</i></button>
                <div className="file">
                    <h5><a href={fileAddress}>{fileName}</a></h5>
                    <span>{fileSize + " " + fileType}</span>
                </div>
            </div>
        );
    }
}

export default Attachments;