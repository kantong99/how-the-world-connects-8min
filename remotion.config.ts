import { Config } from '@remotion/cli/config';

// Pengaturan aman untuk disk 11 GB: satu worker, frame JPEG, CRF 23.
Config.setVideoImageFormat('jpeg');
Config.setJpegQuality(80);
Config.setCrf(23);
Config.setConcurrency(1);
Config.setCodec('h264');
Config.setOverwriteOutput(true);
