const { Success } = require('../core/success.response')
const CheckoutService = require('../services/checkout')
const { callbackMomo } = require('../services/checkout/momo')
const { callbackVnPay } = require('../services/checkout/vnpay')

class CheckoutController {
    async applyDiscount(req, res) {
        new Success({
            message: 'Apply discount code to cart successfully',
            metadata: await CheckoutService.applyDiscount(req.body)
        }).send(res)
    }
    async cancelCheckout(req, res) {
        new Success({
            message: 'Remove discount cart successfully',
            metadata: await CheckoutService.cancelCheckout({
                userId: req.user.userId,
                cartId: req.params.cartId
            })
        }).send(res)
    }
    async checkout(req, res) {
        new Success({
            message: 'Checkout cart successfully',
            metadata: await CheckoutService.checkout({
                userId: req.user.userId,
                ...req.body
            })
        }).send(res)
    }
    async callbackVnPay(req, res) {
        new Success({
            message: 'Checkout cart successfully',
            metadata: await callbackVnPay(req.query)
        }).send(res)
    }
    async callbackMomo(req, res) {
        new Success({
            message: 'Checkout cart successfully',
            metadata: await callbackMomo(req.query)
        }).send(res)
    }
}

module.exports = new CheckoutController()