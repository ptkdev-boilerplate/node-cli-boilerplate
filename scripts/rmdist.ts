/**
 * Delete dist folder
 * =====================
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *                Alì Shadman [@AliShadman95] (https://github.com/AliShadman95)
 *
 * @license: MIT License
 *
 */
import shell from "shelljs";
import path from "path";

const __dirname = path.resolve();

const path_dist = `${__dirname}/../dist`;

shell.rm("-Rf", path_dist);
