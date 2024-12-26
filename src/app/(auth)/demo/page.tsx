import Sidebar from './demosidebar';
import DemoActionCardApp from './DemoActionCardApp'
import HeaderSidebarLayout from '../HeaderSideBarApp/page';


export default function DemoPage() {
  return (
    <div className="flex h-screen">
      <div className="flex-1 p-6 flex justify-center items-start bg-gray-50">
        <div className="w-full max-w-lg p-6 bg-white shadow-md rounded-lg">
          <DemoActionCardApp/>
        </div>
      </div>
    </div>
  );
}
