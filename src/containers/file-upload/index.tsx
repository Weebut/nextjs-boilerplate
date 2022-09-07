import { Layout } from '@components/layouts/layout.component';
import { Strip } from '@components/strips/strip.component';
import { Box, Button } from '@mui/material';
import axios from 'axios';
import { BaseSyntheticEvent } from 'react';

export function FileUploadContainer() {
  return (
    <Layout>
      <Strip>
        <Box className="flex flex-col items-center justify-center py-32">
          File upload
          <form
            onSubmit={(event: BaseSyntheticEvent) => {
              event.preventDefault();
              const file = event.target.file?.files[0];

              if (!file) {
                alert('Please select a file');
                return;
              }

              const formData = new FormData();
              formData.append('file', file);

              axios
                .post('/api/file-upload', formData)
                .then(() => {
                  alert('Uploaded');
                })
                .catch((error) => {
                  alert(error);
                });
            }}
          >
            <input id="file" type="file" required />
            <Button type="submit">Upload</Button>
          </form>
        </Box>
      </Strip>
    </Layout>
  );
}
