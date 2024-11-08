export function Sf(){
    return(
    <div>
    <button onClick={}>OP</button>
    <div class="backdrop is-hidden">
    <div class="modal-event">
        <button class="close" data-action="close-modal"><img alt="" src="./images/close.svg"></button>
        <button>add aim</button>
        <h2>Aims</h2>
        <ul>{localStorage.getItem().map(aim=>aim)}</ul>
    </div>
    </div>
    </div>
    )
}