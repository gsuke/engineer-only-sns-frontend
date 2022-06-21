import { FaPencilAlt } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';

export default function PostForm() {
  return (
    <>
      {/* Button */}
      <label
        htmlFor="post-modal"
        className="btn btn-circle btn-lg btn-primary fixed right-3 bottom-3"
      >
        <FaPencilAlt size={32} />
      </label>
      <input type="checkbox" id="post-modal" className="modal-toggle" />
      {/* Modal */}
      <label htmlFor="post-modal" className="modal cursor-pointer">
        <label className="modal-box" htmlFor="">
          <div className="flex justify-between items-center mb-3">
            <label htmlFor="post-modal" className="btn btn-sm btn-circle">
              <MdClose />
            </label>
            <button type="button" className="btn btn-primary btn-sm">
              <FaPencilAlt className="mr-1" />
              投稿
            </button>
          </div>
          <textarea
            className="textarea textarea-bordered w-full h-32 resize-none"
            placeholder="文章を入力"
          />
        </label>
      </label>
    </>
  );
}
