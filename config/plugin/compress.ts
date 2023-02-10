/**
 * 用于打包和输出gzip文件。请注意，这在Vite中不能正常工作，具体原因仍在调查中
 * gzip压缩
 * https://github.com/anncwb/vite-plugin-compression
 */
import type { Plugin } from 'vite';
import compressPlugin from 'vite-plugin-compression';

export default function configCompressPlugin(
  compress: 'gzip' | 'brotli',
  deleteOriginFile = false
): Plugin | Plugin[] {
  const plugins: Plugin[] = [];

  if (compress === 'gzip') {
    plugins.push(
      compressPlugin({
        ext: '.gz',
        deleteOriginFile,
      })
    );
  }

  if (compress === 'brotli') {
    plugins.push(
      compressPlugin({
        ext: '.br',
        algorithm: 'brotliCompress',
        deleteOriginFile,
      })
    );
  }
  return plugins;
}
