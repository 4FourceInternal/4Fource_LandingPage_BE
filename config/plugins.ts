export default () => ({
  upload: {
    config: {
      sizeLimit: 200 * 1024 * 1024, // 200MB in bytes
      breakpoints: {
        xlarge: 1920,
        large: 1000,
        medium: 750,
        small: 500,
        xsmall: 64
      },
      // Add response timeout for uploads
      responseTimeout: 60000, // 5 minutes
      // Enable multipart uploads
      multipart: true,
      // Use local provider explicitly
      provider: 'local',
      providerOptions: {
        // Remove sizeLimit from providerOptions to fix warning
      },
    },
  },
});
