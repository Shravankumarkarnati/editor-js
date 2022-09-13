import EditorJS, { EditorConfig } from "@editorjs/editorjs";
// @ts-ignore
import { EDITOR_JS_TOOLS } from "./Tools";
import once from "lodash/once";

const tools = EDITOR_JS_TOOLS as EditorConfig["tools"];

export const editorFactory = once(
  (config: EditorConfig): EditorJS => new EditorJS({ ...config, tools })
);
