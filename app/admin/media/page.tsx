import MediaUploader from './MediaUploader';

export const dynamic = 'force-dynamic';

export default function MediaPage() {
  const configured = !!(
    process.env.CLOUDINARY_CLOUD_NAME &&
    process.env.CLOUDINARY_API_KEY &&
    process.env.CLOUDINARY_API_SECRET
  );
  return (
    <>
      <h1 className="page-title">Media</h1>
      <p className="page-sub">
        Upload a photo, then copy its link to paste into an image field.
      </p>
      {!configured && (
        <div className="a-alert err">
          Image upload isn’t configured yet. Add CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY and
          CLOUDINARY_API_SECRET to your environment.
        </div>
      )}
      <MediaUploader />
    </>
  );
}
