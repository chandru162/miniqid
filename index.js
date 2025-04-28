class UniqueIdGenerator {
  constructor(options = {}) {
    this.prefix = options.prefix || "";
    this.length = options.length || 24;
    this.OnlyLetters = options.OnlyLetters || false;
    this.OnlyUppercase = options.OnlyUppercase || false;
    this.OnlyLowercase = options.OnlyLowercase || false;
    this.OnlyNumbers = options.OnlyNumbers || false;
    this.unique = options.unique !== false; 

    this._lastTimeMs = 0;
    this._sequence = 0;
    this._processIdHash = this._generateRandomChars(4); 
  }

  _getCharSet() {
    if (this.OnlyNumbers) return "0123456789";
    if (this.OnlyUppercase) return "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (this.OnlyLowercase) return "abcdefghijklmnopqrstuvwxyz";
    if (this.OnlyLetters) return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  }

  _generateRandomChars(length) {
    const chars = this._getCharSet();
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  generateUniqueId() {
    let baseId = "";

    if (this.unique) {
        const now = Date.now();

        if (now === this._lastTimeMs) {
            this._sequence++;
        } else {
            this._sequence = 0;
            this._lastTimeMs = now;
        }

        const timePart = now.toString(36);
        const seqPart = this._sequence.toString(36).padStart(2, "0");

        baseId = `${this._processIdHash}${timePart}${seqPart}`;
    }

    const maxRandomLength = Math.max(this.length - this.prefix.length, 0);
    const remainingLength = Math.max(maxRandomLength - baseId.length, 0);

    const randomPart = this._generateRandomChars(remainingLength);

    const trimmedBaseId = baseId.slice(0, maxRandomLength);

    return `${this.prefix}${trimmedBaseId}${randomPart}`.slice(0, this.length);
}


}

module.exports = UniqueIdGenerator;