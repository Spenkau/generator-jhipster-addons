/**
 * Removes server files that where generated in previous JHipster versions and therefore
 * need to be removed.
 */
export default function cleanupOldServerFilesTask({ application }) {
  if (this.isJhipsterVersionLessThan('6.0.0')) {
    this.removeFile(`${application.javaPackageSrcDir}config/OAuth2Configuration.java`);
    this.removeFile(`${application.javaPackageSrcDir}security/OAuth2AuthenticationSuccessHandler.java`);
  }
  if (this.isJhipsterVersionLessThan('7.6.1')) {
    if (!application.databaseTypeNo) {
      this.removeFile(`${application.javaPackageSrcDir}web/rest/UserResource.java`);
    }
  }
}
