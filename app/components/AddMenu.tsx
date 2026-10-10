type AddMenuProps = {
    onCancel: () => void;
}

export default function AddMenu({ onCancel }: AddMenuProps){
    return(
        <div className = "add-menu">
            <h2>Add New Node</h2>

            <form>
                <label htmlFor="node-name">Course Name:</label>
                <input id="node-name" type="text" placeholder="Ex: Calculus 1"/>
                <label htmlFor="node-code">Course Code:</label>
                <input id="node-code" type="text" placeholder="Ex: MATH 1190"/>
                <label htmlFor="node-prereq">Prerequisites:</label>
                <input id="node-prereq" type="text" placeholder="Ex: MATH 1113"/>
                <button className = "create-node-btn">Create Node</button>
                <button className = "cancel-add-menu" onClick={onCancel}>Cancel</button>
            </form>
        </div>
    )
}