const HelloAction = (newText) => {
    console.log('From HelloAction.js')
    return {
        type: 'CHANGE_TEXT',
        text: newText
    }
}

export default HelloAction