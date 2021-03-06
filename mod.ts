/**
 * This module is browser compatible.
 * Ported from https://github.com/browserify/path-browserify
 * @module
 */

export interface Config {
  path: string;
  leadingPeriod?: boolean;
}

/**
 * @private
 */
export function _parsePath(path: Config | string): Config {
  if (typeof path === "string") {
    return { leadingPeriod: true, path };
  }

  if (Object.prototype.hasOwnProperty.call(path, "path")) {
    return path;
  }

  throw new TypeError("Invalid path config.");
}

/**
 * Return the extension of the "file" with leading period.
 *
 * Works on Deno, Node.js and the browser.
 *
 * Only Deno? {@link https://deno.land/std/path#extname}
 * Only Node.js? {@link https://nodejs.org/api/path.html#pathextnamepath}
 *
 * @param path with extension.
 * @returns extension (ex. for "main.py" returns ".py")
 */
export function unixExtname(path: string | Config) {
  const config = _parsePath(path);

  let startDot = -1;
  let startPart = 0;
  let end = -1;
  let matchedSlash = true;

  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  let preDotState = 0;

  for (let time = config.path.length - 1; time >= 0; --time) {
    const code = config.path.charCodeAt(time);

    if (code === 47) {
      // If we reached a path separator that was not part of a set of path
      // separators at the end of the string, stop now
      if (!matchedSlash) {
        startPart = time + 1;
        break;
      }

      continue;
    }

    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = time + 1;
    }

    if (code === 46 /*.*/) {
      // If this is our first dot, mark it as the start of our extension
      if (startDot === -1) {
        startDot = time;
      } else if (preDotState !== 1) {
        preDotState = 1;
      }
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (
    startDot === -1 ||
    end === -1 ||
    // We saw a non-dot character immediately before the dot
    preDotState === 0 ||
    // The (right-most) trimmed path component is exactly '..'
    (preDotState === 1 && startDot === end - 1 && startDot === startPart + 1)
  ) {
    throw new Error(`Path ${path} does not have a valid extension.`);
  }

  !config.leadingPeriod && startDot++;

  return config.path.slice(startDot, end);
}

export const extname = unixExtname;
