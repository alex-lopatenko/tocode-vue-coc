module.exports = {
    // ...
    rules: {
      // override/add rules settings here, such as:
      'vue/no-unused-vars': proccess.env.NODE_ENV === 'production' ? 'error' : 'warn'
    }
  }