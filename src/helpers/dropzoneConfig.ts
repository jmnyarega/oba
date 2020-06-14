const dropzoneConfig = {
  componentConfig: {
    iconFiletypes: [".csv"],
    showFiletypeIcon: true,
    postUrl: "/uploadHandler",
  },
  djsConfig: {
    addRemoveLinks: true,
    acceptedFiles: "text/csv",
    autoProcessQueue: false,
    maxFilesize: 1000000, // disallow > 1 GB files
    maxFiles: 1,
    createImageThumbnails: false,
    dictRemoveFile: "Add new document",
  },
  eventHandlers: {
    addedfile: (file: any) => console.log(file),
  },
};

export default dropzoneConfig;
