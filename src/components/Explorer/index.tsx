import { Cpu, FileJson, Joystick, MoreHorizontal } from "lucide-react";
import { FC } from "react";

import { File } from "../explorer-file";
import { Folder } from "../explorer-folder";

export const Explorer: FC = () => {
  return (
    <div className="py-2 px-4 text-[#8F8CA8]">
      <strong className="font-medium text-xs pl-2 flex items-center justify-between">
        EXPLORER
        <MoreHorizontal size={16} strokeWidth={1.5} />
      </strong>

      <nav className="mt-4 flex flex-col">
        <Folder defaultOpen title="Visual Studio Code">
          <File href="/vscode/settings">
            <FileJson size={16} />
            settings.json
          </File>
          <File href="/vscode/extensions">
            <FileJson size={16} />
            extensions.json
          </File>
        </Folder>

        <Folder title="Others">
          <File href="/others/dev-setup">
            <Cpu size={16} />
            dev.setup
          </File>
        </Folder>
      </nav>
    </div>
  );
};
