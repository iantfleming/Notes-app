(function() {
    var notebook;
    function testCreateNewNotebookHasEntriesProperty() {
        notebook = new Notebook();
        if(notebook.entries.length !== 0 ) {
            throw new Error("entries should be equal to []");
        } else {
            console.log("Test passed. It creates a new notebook")
        }
    };
testCreateNewNotebookHasEntriesProperty();
})();

(function(){
  var notebook;
  var note;
  function testAddNewNoteToNotebook() {
    notebook = new Notebook();
    note = new Note();
    notebook.addEntry(note)
    if(!notebook.entries.includes(note) ) {
      throw new Error(`Entry should include ${note}`);
    } else {
      console.log("Test passed. Entry added to notebook")
    }
  }
  testAddNewNoteToNotebook();
})();