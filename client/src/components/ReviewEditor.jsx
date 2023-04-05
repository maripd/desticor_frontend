import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const Editor = () => {
  return (
    <div>
      <h2>Notes</h2>
      <CKEditor
        editor={ClassicEditor}
        data="<p>My destination notes</p>"
        onReady={(editor) => {
          console.log("CKEditor5 React Component is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
        }}
      />
    </div>
  );
};
export default Editor;
