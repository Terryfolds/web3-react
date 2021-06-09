(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[4],{

/***/ "./node_modules/aes-js/index.js":
/*!**************************************!*\
  !*** ./node_modules/aes-js/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*! MIT License. Copyright 2015-2018 Richard Moore <me@ricmoo.com>. See LICENSE.txt. */
(function(root) {
    "use strict";

    function checkInt(value) {
        return (parseInt(value) === value);
    }

    function checkInts(arrayish) {
        if (!checkInt(arrayish.length)) { return false; }

        for (var i = 0; i < arrayish.length; i++) {
            if (!checkInt(arrayish[i]) || arrayish[i] < 0 || arrayish[i] > 255) {
                return false;
            }
        }

        return true;
    }

    function coerceArray(arg, copy) {

        // ArrayBuffer view
        if (arg.buffer && arg.name === 'Uint8Array') {

            if (copy) {
                if (arg.slice) {
                    arg = arg.slice();
                } else {
                    arg = Array.prototype.slice.call(arg);
                }
            }

            return arg;
        }

        // It's an array; check it is a valid representation of a byte
        if (Array.isArray(arg)) {
            if (!checkInts(arg)) {
                throw new Error('Array contains invalid value: ' + arg);
            }

            return new Uint8Array(arg);
        }

        // Something else, but behaves like an array (maybe a Buffer? Arguments?)
        if (checkInt(arg.length) && checkInts(arg)) {
            return new Uint8Array(arg);
        }

        throw new Error('unsupported array-like object');
    }

    function createArray(length) {
        return new Uint8Array(length);
    }

    function copyArray(sourceArray, targetArray, targetStart, sourceStart, sourceEnd) {
        if (sourceStart != null || sourceEnd != null) {
            if (sourceArray.slice) {
                sourceArray = sourceArray.slice(sourceStart, sourceEnd);
            } else {
                sourceArray = Array.prototype.slice.call(sourceArray, sourceStart, sourceEnd);
            }
        }
        targetArray.set(sourceArray, targetStart);
    }



    var convertUtf8 = (function() {
        function toBytes(text) {
            var result = [], i = 0;
            text = encodeURI(text);
            while (i < text.length) {
                var c = text.charCodeAt(i++);

                // if it is a % sign, encode the following 2 bytes as a hex value
                if (c === 37) {
                    result.push(parseInt(text.substr(i, 2), 16))
                    i += 2;

                // otherwise, just the actual byte
                } else {
                    result.push(c)
                }
            }

            return coerceArray(result);
        }

        function fromBytes(bytes) {
            var result = [], i = 0;

            while (i < bytes.length) {
                var c = bytes[i];

                if (c < 128) {
                    result.push(String.fromCharCode(c));
                    i++;
                } else if (c > 191 && c < 224) {
                    result.push(String.fromCharCode(((c & 0x1f) << 6) | (bytes[i + 1] & 0x3f)));
                    i += 2;
                } else {
                    result.push(String.fromCharCode(((c & 0x0f) << 12) | ((bytes[i + 1] & 0x3f) << 6) | (bytes[i + 2] & 0x3f)));
                    i += 3;
                }
            }

            return result.join('');
        }

        return {
            toBytes: toBytes,
            fromBytes: fromBytes,
        }
    })();

    var convertHex = (function() {
        function toBytes(text) {
            var result = [];
            for (var i = 0; i < text.length; i += 2) {
                result.push(parseInt(text.substr(i, 2), 16));
            }

            return result;
        }

        // http://ixti.net/development/javascript/2011/11/11/base64-encodedecode-of-utf8-in-browser-with-js.html
        var Hex = '0123456789abcdef';

        function fromBytes(bytes) {
                var result = [];
                for (var i = 0; i < bytes.length; i++) {
                    var v = bytes[i];
                    result.push(Hex[(v & 0xf0) >> 4] + Hex[v & 0x0f]);
                }
                return result.join('');
        }

        return {
            toBytes: toBytes,
            fromBytes: fromBytes,
        }
    })();


    // Number of rounds by keysize
    var numberOfRounds = {16: 10, 24: 12, 32: 14}

    // Round constant words
    var rcon = [0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36, 0x6c, 0xd8, 0xab, 0x4d, 0x9a, 0x2f, 0x5e, 0xbc, 0x63, 0xc6, 0x97, 0x35, 0x6a, 0xd4, 0xb3, 0x7d, 0xfa, 0xef, 0xc5, 0x91];

    // S-box and Inverse S-box (S is for Substitution)
    var S = [0x63, 0x7c, 0x77, 0x7b, 0xf2, 0x6b, 0x6f, 0xc5, 0x30, 0x01, 0x67, 0x2b, 0xfe, 0xd7, 0xab, 0x76, 0xca, 0x82, 0xc9, 0x7d, 0xfa, 0x59, 0x47, 0xf0, 0xad, 0xd4, 0xa2, 0xaf, 0x9c, 0xa4, 0x72, 0xc0, 0xb7, 0xfd, 0x93, 0x26, 0x36, 0x3f, 0xf7, 0xcc, 0x34, 0xa5, 0xe5, 0xf1, 0x71, 0xd8, 0x31, 0x15, 0x04, 0xc7, 0x23, 0xc3, 0x18, 0x96, 0x05, 0x9a, 0x07, 0x12, 0x80, 0xe2, 0xeb, 0x27, 0xb2, 0x75, 0x09, 0x83, 0x2c, 0x1a, 0x1b, 0x6e, 0x5a, 0xa0, 0x52, 0x3b, 0xd6, 0xb3, 0x29, 0xe3, 0x2f, 0x84, 0x53, 0xd1, 0x00, 0xed, 0x20, 0xfc, 0xb1, 0x5b, 0x6a, 0xcb, 0xbe, 0x39, 0x4a, 0x4c, 0x58, 0xcf, 0xd0, 0xef, 0xaa, 0xfb, 0x43, 0x4d, 0x33, 0x85, 0x45, 0xf9, 0x02, 0x7f, 0x50, 0x3c, 0x9f, 0xa8, 0x51, 0xa3, 0x40, 0x8f, 0x92, 0x9d, 0x38, 0xf5, 0xbc, 0xb6, 0xda, 0x21, 0x10, 0xff, 0xf3, 0xd2, 0xcd, 0x0c, 0x13, 0xec, 0x5f, 0x97, 0x44, 0x17, 0xc4, 0xa7, 0x7e, 0x3d, 0x64, 0x5d, 0x19, 0x73, 0x60, 0x81, 0x4f, 0xdc, 0x22, 0x2a, 0x90, 0x88, 0x46, 0xee, 0xb8, 0x14, 0xde, 0x5e, 0x0b, 0xdb, 0xe0, 0x32, 0x3a, 0x0a, 0x49, 0x06, 0x24, 0x5c, 0xc2, 0xd3, 0xac, 0x62, 0x91, 0x95, 0xe4, 0x79, 0xe7, 0xc8, 0x37, 0x6d, 0x8d, 0xd5, 0x4e, 0xa9, 0x6c, 0x56, 0xf4, 0xea, 0x65, 0x7a, 0xae, 0x08, 0xba, 0x78, 0x25, 0x2e, 0x1c, 0xa6, 0xb4, 0xc6, 0xe8, 0xdd, 0x74, 0x1f, 0x4b, 0xbd, 0x8b, 0x8a, 0x70, 0x3e, 0xb5, 0x66, 0x48, 0x03, 0xf6, 0x0e, 0x61, 0x35, 0x57, 0xb9, 0x86, 0xc1, 0x1d, 0x9e, 0xe1, 0xf8, 0x98, 0x11, 0x69, 0xd9, 0x8e, 0x94, 0x9b, 0x1e, 0x87, 0xe9, 0xce, 0x55, 0x28, 0xdf, 0x8c, 0xa1, 0x89, 0x0d, 0xbf, 0xe6, 0x42, 0x68, 0x41, 0x99, 0x2d, 0x0f, 0xb0, 0x54, 0xbb, 0x16];
    var Si =[0x52, 0x09, 0x6a, 0xd5, 0x30, 0x36, 0xa5, 0x38, 0xbf, 0x40, 0xa3, 0x9e, 0x81, 0xf3, 0xd7, 0xfb, 0x7c, 0xe3, 0x39, 0x82, 0x9b, 0x2f, 0xff, 0x87, 0x34, 0x8e, 0x43, 0x44, 0xc4, 0xde, 0xe9, 0xcb, 0x54, 0x7b, 0x94, 0x32, 0xa6, 0xc2, 0x23, 0x3d, 0xee, 0x4c, 0x95, 0x0b, 0x42, 0xfa, 0xc3, 0x4e, 0x08, 0x2e, 0xa1, 0x66, 0x28, 0xd9, 0x24, 0xb2, 0x76, 0x5b, 0xa2, 0x49, 0x6d, 0x8b, 0xd1, 0x25, 0x72, 0xf8, 0xf6, 0x64, 0x86, 0x68, 0x98, 0x16, 0xd4, 0xa4, 0x5c, 0xcc, 0x5d, 0x65, 0xb6, 0x92, 0x6c, 0x70, 0x48, 0x50, 0xfd, 0xed, 0xb9, 0xda, 0x5e, 0x15, 0x46, 0x57, 0xa7, 0x8d, 0x9d, 0x84, 0x90, 0xd8, 0xab, 0x00, 0x8c, 0xbc, 0xd3, 0x0a, 0xf7, 0xe4, 0x58, 0x05, 0xb8, 0xb3, 0x45, 0x06, 0xd0, 0x2c, 0x1e, 0x8f, 0xca, 0x3f, 0x0f, 0x02, 0xc1, 0xaf, 0xbd, 0x03, 0x01, 0x13, 0x8a, 0x6b, 0x3a, 0x91, 0x11, 0x41, 0x4f, 0x67, 0xdc, 0xea, 0x97, 0xf2, 0xcf, 0xce, 0xf0, 0xb4, 0xe6, 0x73, 0x96, 0xac, 0x74, 0x22, 0xe7, 0xad, 0x35, 0x85, 0xe2, 0xf9, 0x37, 0xe8, 0x1c, 0x75, 0xdf, 0x6e, 0x47, 0xf1, 0x1a, 0x71, 0x1d, 0x29, 0xc5, 0x89, 0x6f, 0xb7, 0x62, 0x0e, 0xaa, 0x18, 0xbe, 0x1b, 0xfc, 0x56, 0x3e, 0x4b, 0xc6, 0xd2, 0x79, 0x20, 0x9a, 0xdb, 0xc0, 0xfe, 0x78, 0xcd, 0x5a, 0xf4, 0x1f, 0xdd, 0xa8, 0x33, 0x88, 0x07, 0xc7, 0x31, 0xb1, 0x12, 0x10, 0x59, 0x27, 0x80, 0xec, 0x5f, 0x60, 0x51, 0x7f, 0xa9, 0x19, 0xb5, 0x4a, 0x0d, 0x2d, 0xe5, 0x7a, 0x9f, 0x93, 0xc9, 0x9c, 0xef, 0xa0, 0xe0, 0x3b, 0x4d, 0xae, 0x2a, 0xf5, 0xb0, 0xc8, 0xeb, 0xbb, 0x3c, 0x83, 0x53, 0x99, 0x61, 0x17, 0x2b, 0x04, 0x7e, 0xba, 0x77, 0xd6, 0x26, 0xe1, 0x69, 0x14, 0x63, 0x55, 0x21, 0x0c, 0x7d];

    // Transformations for encryption
    var T1 = [0xc66363a5, 0xf87c7c84, 0xee777799, 0xf67b7b8d, 0xfff2f20d, 0xd66b6bbd, 0xde6f6fb1, 0x91c5c554, 0x60303050, 0x02010103, 0xce6767a9, 0x562b2b7d, 0xe7fefe19, 0xb5d7d762, 0x4dababe6, 0xec76769a, 0x8fcaca45, 0x1f82829d, 0x89c9c940, 0xfa7d7d87, 0xeffafa15, 0xb25959eb, 0x8e4747c9, 0xfbf0f00b, 0x41adadec, 0xb3d4d467, 0x5fa2a2fd, 0x45afafea, 0x239c9cbf, 0x53a4a4f7, 0xe4727296, 0x9bc0c05b, 0x75b7b7c2, 0xe1fdfd1c, 0x3d9393ae, 0x4c26266a, 0x6c36365a, 0x7e3f3f41, 0xf5f7f702, 0x83cccc4f, 0x6834345c, 0x51a5a5f4, 0xd1e5e534, 0xf9f1f108, 0xe2717193, 0xabd8d873, 0x62313153, 0x2a15153f, 0x0804040c, 0x95c7c752, 0x46232365, 0x9dc3c35e, 0x30181828, 0x379696a1, 0x0a05050f, 0x2f9a9ab5, 0x0e070709, 0x24121236, 0x1b80809b, 0xdfe2e23d, 0xcdebeb26, 0x4e272769, 0x7fb2b2cd, 0xea75759f, 0x1209091b, 0x1d83839e, 0x582c2c74, 0x341a1a2e, 0x361b1b2d, 0xdc6e6eb2, 0xb45a5aee, 0x5ba0a0fb, 0xa45252f6, 0x763b3b4d, 0xb7d6d661, 0x7db3b3ce, 0x5229297b, 0xdde3e33e, 0x5e2f2f71, 0x13848497, 0xa65353f5, 0xb9d1d168, 0x00000000, 0xc1eded2c, 0x40202060, 0xe3fcfc1f, 0x79b1b1c8, 0xb65b5bed, 0xd46a6abe, 0x8dcbcb46, 0x67bebed9, 0x7239394b, 0x944a4ade, 0x984c4cd4, 0xb05858e8, 0x85cfcf4a, 0xbbd0d06b, 0xc5efef2a, 0x4faaaae5, 0xedfbfb16, 0x864343c5, 0x9a4d4dd7, 0x66333355, 0x11858594, 0x8a4545cf, 0xe9f9f910, 0x04020206, 0xfe7f7f81, 0xa05050f0, 0x783c3c44, 0x259f9fba, 0x4ba8a8e3, 0xa25151f3, 0x5da3a3fe, 0x804040c0, 0x058f8f8a, 0x3f9292ad, 0x219d9dbc, 0x70383848, 0xf1f5f504, 0x63bcbcdf, 0x77b6b6c1, 0xafdada75, 0x42212163, 0x20101030, 0xe5ffff1a, 0xfdf3f30e, 0xbfd2d26d, 0x81cdcd4c, 0x180c0c14, 0x26131335, 0xc3ecec2f, 0xbe5f5fe1, 0x359797a2, 0x884444cc, 0x2e171739, 0x93c4c457, 0x55a7a7f2, 0xfc7e7e82, 0x7a3d3d47, 0xc86464ac, 0xba5d5de7, 0x3219192b, 0xe6737395, 0xc06060a0, 0x19818198, 0x9e4f4fd1, 0xa3dcdc7f, 0x44222266, 0x542a2a7e, 0x3b9090ab, 0x0b888883, 0x8c4646ca, 0xc7eeee29, 0x6bb8b8d3, 0x2814143c, 0xa7dede79, 0xbc5e5ee2, 0x160b0b1d, 0xaddbdb76, 0xdbe0e03b, 0x64323256, 0x743a3a4e, 0x140a0a1e, 0x924949db, 0x0c06060a, 0x4824246c, 0xb85c5ce4, 0x9fc2c25d, 0xbdd3d36e, 0x43acacef, 0xc46262a6, 0x399191a8, 0x319595a4, 0xd3e4e437, 0xf279798b, 0xd5e7e732, 0x8bc8c843, 0x6e373759, 0xda6d6db7, 0x018d8d8c, 0xb1d5d564, 0x9c4e4ed2, 0x49a9a9e0, 0xd86c6cb4, 0xac5656fa, 0xf3f4f407, 0xcfeaea25, 0xca6565af, 0xf47a7a8e, 0x47aeaee9, 0x10080818, 0x6fbabad5, 0xf0787888, 0x4a25256f, 0x5c2e2e72, 0x381c1c24, 0x57a6a6f1, 0x73b4b4c7, 0x97c6c651, 0xcbe8e823, 0xa1dddd7c, 0xe874749c, 0x3e1f1f21, 0x964b4bdd, 0x61bdbddc, 0x0d8b8b86, 0x0f8a8a85, 0xe0707090, 0x7c3e3e42, 0x71b5b5c4, 0xcc6666aa, 0x904848d8, 0x06030305, 0xf7f6f601, 0x1c0e0e12, 0xc26161a3, 0x6a35355f, 0xae5757f9, 0x69b9b9d0, 0x17868691, 0x99c1c158, 0x3a1d1d27, 0x279e9eb9, 0xd9e1e138, 0xebf8f813, 0x2b9898b3, 0x22111133, 0xd26969bb, 0xa9d9d970, 0x078e8e89, 0x339494a7, 0x2d9b9bb6, 0x3c1e1e22, 0x15878792, 0xc9e9e920, 0x87cece49, 0xaa5555ff, 0x50282878, 0xa5dfdf7a, 0x038c8c8f, 0x59a1a1f8, 0x09898980, 0x1a0d0d17, 0x65bfbfda, 0xd7e6e631, 0x844242c6, 0xd06868b8, 0x824141c3, 0x299999b0, 0x5a2d2d77, 0x1e0f0f11, 0x7bb0b0cb, 0xa85454fc, 0x6dbbbbd6, 0x2c16163a];
    var T2 = [0xa5c66363, 0x84f87c7c, 0x99ee7777, 0x8df67b7b, 0x0dfff2f2, 0xbdd66b6b, 0xb1de6f6f, 0x5491c5c5, 0x50603030, 0x03020101, 0xa9ce6767, 0x7d562b2b, 0x19e7fefe, 0x62b5d7d7, 0xe64dabab, 0x9aec7676, 0x458fcaca, 0x9d1f8282, 0x4089c9c9, 0x87fa7d7d, 0x15effafa, 0xebb25959, 0xc98e4747, 0x0bfbf0f0, 0xec41adad, 0x67b3d4d4, 0xfd5fa2a2, 0xea45afaf, 0xbf239c9c, 0xf753a4a4, 0x96e47272, 0x5b9bc0c0, 0xc275b7b7, 0x1ce1fdfd, 0xae3d9393, 0x6a4c2626, 0x5a6c3636, 0x417e3f3f, 0x02f5f7f7, 0x4f83cccc, 0x5c683434, 0xf451a5a5, 0x34d1e5e5, 0x08f9f1f1, 0x93e27171, 0x73abd8d8, 0x53623131, 0x3f2a1515, 0x0c080404, 0x5295c7c7, 0x65462323, 0x5e9dc3c3, 0x28301818, 0xa1379696, 0x0f0a0505, 0xb52f9a9a, 0x090e0707, 0x36241212, 0x9b1b8080, 0x3ddfe2e2, 0x26cdebeb, 0x694e2727, 0xcd7fb2b2, 0x9fea7575, 0x1b120909, 0x9e1d8383, 0x74582c2c, 0x2e341a1a, 0x2d361b1b, 0xb2dc6e6e, 0xeeb45a5a, 0xfb5ba0a0, 0xf6a45252, 0x4d763b3b, 0x61b7d6d6, 0xce7db3b3, 0x7b522929, 0x3edde3e3, 0x715e2f2f, 0x97138484, 0xf5a65353, 0x68b9d1d1, 0x00000000, 0x2cc1eded, 0x60402020, 0x1fe3fcfc, 0xc879b1b1, 0xedb65b5b, 0xbed46a6a, 0x468dcbcb, 0xd967bebe, 0x4b723939, 0xde944a4a, 0xd4984c4c, 0xe8b05858, 0x4a85cfcf, 0x6bbbd0d0, 0x2ac5efef, 0xe54faaaa, 0x16edfbfb, 0xc5864343, 0xd79a4d4d, 0x55663333, 0x94118585, 0xcf8a4545, 0x10e9f9f9, 0x06040202, 0x81fe7f7f, 0xf0a05050, 0x44783c3c, 0xba259f9f, 0xe34ba8a8, 0xf3a25151, 0xfe5da3a3, 0xc0804040, 0x8a058f8f, 0xad3f9292, 0xbc219d9d, 0x48703838, 0x04f1f5f5, 0xdf63bcbc, 0xc177b6b6, 0x75afdada, 0x63422121, 0x30201010, 0x1ae5ffff, 0x0efdf3f3, 0x6dbfd2d2, 0x4c81cdcd, 0x14180c0c, 0x35261313, 0x2fc3ecec, 0xe1be5f5f, 0xa2359797, 0xcc884444, 0x392e1717, 0x5793c4c4, 0xf255a7a7, 0x82fc7e7e, 0x477a3d3d, 0xacc86464, 0xe7ba5d5d, 0x2b321919, 0x95e67373, 0xa0c06060, 0x98198181, 0xd19e4f4f, 0x7fa3dcdc, 0x66442222, 0x7e542a2a, 0xab3b9090, 0x830b8888, 0xca8c4646, 0x29c7eeee, 0xd36bb8b8, 0x3c281414, 0x79a7dede, 0xe2bc5e5e, 0x1d160b0b, 0x76addbdb, 0x3bdbe0e0, 0x56643232, 0x4e743a3a, 0x1e140a0a, 0xdb924949, 0x0a0c0606, 0x6c482424, 0xe4b85c5c, 0x5d9fc2c2, 0x6ebdd3d3, 0xef43acac, 0xa6c46262, 0xa8399191, 0xa4319595, 0x37d3e4e4, 0x8bf27979, 0x32d5e7e7, 0x438bc8c8, 0x596e3737, 0xb7da6d6d, 0x8c018d8d, 0x64b1d5d5, 0xd29c4e4e, 0xe049a9a9, 0xb4d86c6c, 0xfaac5656, 0x07f3f4f4, 0x25cfeaea, 0xafca6565, 0x8ef47a7a, 0xe947aeae, 0x18100808, 0xd56fbaba, 0x88f07878, 0x6f4a2525, 0x725c2e2e, 0x24381c1c, 0xf157a6a6, 0xc773b4b4, 0x5197c6c6, 0x23cbe8e8, 0x7ca1dddd, 0x9ce87474, 0x213e1f1f, 0xdd964b4b, 0xdc61bdbd, 0x860d8b8b, 0x850f8a8a, 0x90e07070, 0x427c3e3e, 0xc471b5b5, 0xaacc6666, 0xd8904848, 0x05060303, 0x01f7f6f6, 0x121c0e0e, 0xa3c26161, 0x5f6a3535, 0xf9ae5757, 0xd069b9b9, 0x91178686, 0x5899c1c1, 0x273a1d1d, 0xb9279e9e, 0x38d9e1e1, 0x13ebf8f8, 0xb32b9898, 0x33221111, 0xbbd26969, 0x70a9d9d9, 0x89078e8e, 0xa7339494, 0xb62d9b9b, 0x223c1e1e, 0x92158787, 0x20c9e9e9, 0x4987cece, 0xffaa5555, 0x78502828, 0x7aa5dfdf, 0x8f038c8c, 0xf859a1a1, 0x80098989, 0x171a0d0d, 0xda65bfbf, 0x31d7e6e6, 0xc6844242, 0xb8d06868, 0xc3824141, 0xb0299999, 0x775a2d2d, 0x111e0f0f, 0xcb7bb0b0, 0xfca85454, 0xd66dbbbb, 0x3a2c1616];
    var T3 = [0x63a5c663, 0x7c84f87c, 0x7799ee77, 0x7b8df67b, 0xf20dfff2, 0x6bbdd66b, 0x6fb1de6f, 0xc55491c5, 0x30506030, 0x01030201, 0x67a9ce67, 0x2b7d562b, 0xfe19e7fe, 0xd762b5d7, 0xabe64dab, 0x769aec76, 0xca458fca, 0x829d1f82, 0xc94089c9, 0x7d87fa7d, 0xfa15effa, 0x59ebb259, 0x47c98e47, 0xf00bfbf0, 0xadec41ad, 0xd467b3d4, 0xa2fd5fa2, 0xafea45af, 0x9cbf239c, 0xa4f753a4, 0x7296e472, 0xc05b9bc0, 0xb7c275b7, 0xfd1ce1fd, 0x93ae3d93, 0x266a4c26, 0x365a6c36, 0x3f417e3f, 0xf702f5f7, 0xcc4f83cc, 0x345c6834, 0xa5f451a5, 0xe534d1e5, 0xf108f9f1, 0x7193e271, 0xd873abd8, 0x31536231, 0x153f2a15, 0x040c0804, 0xc75295c7, 0x23654623, 0xc35e9dc3, 0x18283018, 0x96a13796, 0x050f0a05, 0x9ab52f9a, 0x07090e07, 0x12362412, 0x809b1b80, 0xe23ddfe2, 0xeb26cdeb, 0x27694e27, 0xb2cd7fb2, 0x759fea75, 0x091b1209, 0x839e1d83, 0x2c74582c, 0x1a2e341a, 0x1b2d361b, 0x6eb2dc6e, 0x5aeeb45a, 0xa0fb5ba0, 0x52f6a452, 0x3b4d763b, 0xd661b7d6, 0xb3ce7db3, 0x297b5229, 0xe33edde3, 0x2f715e2f, 0x84971384, 0x53f5a653, 0xd168b9d1, 0x00000000, 0xed2cc1ed, 0x20604020, 0xfc1fe3fc, 0xb1c879b1, 0x5bedb65b, 0x6abed46a, 0xcb468dcb, 0xbed967be, 0x394b7239, 0x4ade944a, 0x4cd4984c, 0x58e8b058, 0xcf4a85cf, 0xd06bbbd0, 0xef2ac5ef, 0xaae54faa, 0xfb16edfb, 0x43c58643, 0x4dd79a4d, 0x33556633, 0x85941185, 0x45cf8a45, 0xf910e9f9, 0x02060402, 0x7f81fe7f, 0x50f0a050, 0x3c44783c, 0x9fba259f, 0xa8e34ba8, 0x51f3a251, 0xa3fe5da3, 0x40c08040, 0x8f8a058f, 0x92ad3f92, 0x9dbc219d, 0x38487038, 0xf504f1f5, 0xbcdf63bc, 0xb6c177b6, 0xda75afda, 0x21634221, 0x10302010, 0xff1ae5ff, 0xf30efdf3, 0xd26dbfd2, 0xcd4c81cd, 0x0c14180c, 0x13352613, 0xec2fc3ec, 0x5fe1be5f, 0x97a23597, 0x44cc8844, 0x17392e17, 0xc45793c4, 0xa7f255a7, 0x7e82fc7e, 0x3d477a3d, 0x64acc864, 0x5de7ba5d, 0x192b3219, 0x7395e673, 0x60a0c060, 0x81981981, 0x4fd19e4f, 0xdc7fa3dc, 0x22664422, 0x2a7e542a, 0x90ab3b90, 0x88830b88, 0x46ca8c46, 0xee29c7ee, 0xb8d36bb8, 0x143c2814, 0xde79a7de, 0x5ee2bc5e, 0x0b1d160b, 0xdb76addb, 0xe03bdbe0, 0x32566432, 0x3a4e743a, 0x0a1e140a, 0x49db9249, 0x060a0c06, 0x246c4824, 0x5ce4b85c, 0xc25d9fc2, 0xd36ebdd3, 0xacef43ac, 0x62a6c462, 0x91a83991, 0x95a43195, 0xe437d3e4, 0x798bf279, 0xe732d5e7, 0xc8438bc8, 0x37596e37, 0x6db7da6d, 0x8d8c018d, 0xd564b1d5, 0x4ed29c4e, 0xa9e049a9, 0x6cb4d86c, 0x56faac56, 0xf407f3f4, 0xea25cfea, 0x65afca65, 0x7a8ef47a, 0xaee947ae, 0x08181008, 0xbad56fba, 0x7888f078, 0x256f4a25, 0x2e725c2e, 0x1c24381c, 0xa6f157a6, 0xb4c773b4, 0xc65197c6, 0xe823cbe8, 0xdd7ca1dd, 0x749ce874, 0x1f213e1f, 0x4bdd964b, 0xbddc61bd, 0x8b860d8b, 0x8a850f8a, 0x7090e070, 0x3e427c3e, 0xb5c471b5, 0x66aacc66, 0x48d89048, 0x03050603, 0xf601f7f6, 0x0e121c0e, 0x61a3c261, 0x355f6a35, 0x57f9ae57, 0xb9d069b9, 0x86911786, 0xc15899c1, 0x1d273a1d, 0x9eb9279e, 0xe138d9e1, 0xf813ebf8, 0x98b32b98, 0x11332211, 0x69bbd269, 0xd970a9d9, 0x8e89078e, 0x94a73394, 0x9bb62d9b, 0x1e223c1e, 0x87921587, 0xe920c9e9, 0xce4987ce, 0x55ffaa55, 0x28785028, 0xdf7aa5df, 0x8c8f038c, 0xa1f859a1, 0x89800989, 0x0d171a0d, 0xbfda65bf, 0xe631d7e6, 0x42c68442, 0x68b8d068, 0x41c38241, 0x99b02999, 0x2d775a2d, 0x0f111e0f, 0xb0cb7bb0, 0x54fca854, 0xbbd66dbb, 0x163a2c16];
    var T4 = [0x6363a5c6, 0x7c7c84f8, 0x777799ee, 0x7b7b8df6, 0xf2f20dff, 0x6b6bbdd6, 0x6f6fb1de, 0xc5c55491, 0x30305060, 0x01010302, 0x6767a9ce, 0x2b2b7d56, 0xfefe19e7, 0xd7d762b5, 0xababe64d, 0x76769aec, 0xcaca458f, 0x82829d1f, 0xc9c94089, 0x7d7d87fa, 0xfafa15ef, 0x5959ebb2, 0x4747c98e, 0xf0f00bfb, 0xadadec41, 0xd4d467b3, 0xa2a2fd5f, 0xafafea45, 0x9c9cbf23, 0xa4a4f753, 0x727296e4, 0xc0c05b9b, 0xb7b7c275, 0xfdfd1ce1, 0x9393ae3d, 0x26266a4c, 0x36365a6c, 0x3f3f417e, 0xf7f702f5, 0xcccc4f83, 0x34345c68, 0xa5a5f451, 0xe5e534d1, 0xf1f108f9, 0x717193e2, 0xd8d873ab, 0x31315362, 0x15153f2a, 0x04040c08, 0xc7c75295, 0x23236546, 0xc3c35e9d, 0x18182830, 0x9696a137, 0x05050f0a, 0x9a9ab52f, 0x0707090e, 0x12123624, 0x80809b1b, 0xe2e23ddf, 0xebeb26cd, 0x2727694e, 0xb2b2cd7f, 0x75759fea, 0x09091b12, 0x83839e1d, 0x2c2c7458, 0x1a1a2e34, 0x1b1b2d36, 0x6e6eb2dc, 0x5a5aeeb4, 0xa0a0fb5b, 0x5252f6a4, 0x3b3b4d76, 0xd6d661b7, 0xb3b3ce7d, 0x29297b52, 0xe3e33edd, 0x2f2f715e, 0x84849713, 0x5353f5a6, 0xd1d168b9, 0x00000000, 0xeded2cc1, 0x20206040, 0xfcfc1fe3, 0xb1b1c879, 0x5b5bedb6, 0x6a6abed4, 0xcbcb468d, 0xbebed967, 0x39394b72, 0x4a4ade94, 0x4c4cd498, 0x5858e8b0, 0xcfcf4a85, 0xd0d06bbb, 0xefef2ac5, 0xaaaae54f, 0xfbfb16ed, 0x4343c586, 0x4d4dd79a, 0x33335566, 0x85859411, 0x4545cf8a, 0xf9f910e9, 0x02020604, 0x7f7f81fe, 0x5050f0a0, 0x3c3c4478, 0x9f9fba25, 0xa8a8e34b, 0x5151f3a2, 0xa3a3fe5d, 0x4040c080, 0x8f8f8a05, 0x9292ad3f, 0x9d9dbc21, 0x38384870, 0xf5f504f1, 0xbcbcdf63, 0xb6b6c177, 0xdada75af, 0x21216342, 0x10103020, 0xffff1ae5, 0xf3f30efd, 0xd2d26dbf, 0xcdcd4c81, 0x0c0c1418, 0x13133526, 0xecec2fc3, 0x5f5fe1be, 0x9797a235, 0x4444cc88, 0x1717392e, 0xc4c45793, 0xa7a7f255, 0x7e7e82fc, 0x3d3d477a, 0x6464acc8, 0x5d5de7ba, 0x19192b32, 0x737395e6, 0x6060a0c0, 0x81819819, 0x4f4fd19e, 0xdcdc7fa3, 0x22226644, 0x2a2a7e54, 0x9090ab3b, 0x8888830b, 0x4646ca8c, 0xeeee29c7, 0xb8b8d36b, 0x14143c28, 0xdede79a7, 0x5e5ee2bc, 0x0b0b1d16, 0xdbdb76ad, 0xe0e03bdb, 0x32325664, 0x3a3a4e74, 0x0a0a1e14, 0x4949db92, 0x06060a0c, 0x24246c48, 0x5c5ce4b8, 0xc2c25d9f, 0xd3d36ebd, 0xacacef43, 0x6262a6c4, 0x9191a839, 0x9595a431, 0xe4e437d3, 0x79798bf2, 0xe7e732d5, 0xc8c8438b, 0x3737596e, 0x6d6db7da, 0x8d8d8c01, 0xd5d564b1, 0x4e4ed29c, 0xa9a9e049, 0x6c6cb4d8, 0x5656faac, 0xf4f407f3, 0xeaea25cf, 0x6565afca, 0x7a7a8ef4, 0xaeaee947, 0x08081810, 0xbabad56f, 0x787888f0, 0x25256f4a, 0x2e2e725c, 0x1c1c2438, 0xa6a6f157, 0xb4b4c773, 0xc6c65197, 0xe8e823cb, 0xdddd7ca1, 0x74749ce8, 0x1f1f213e, 0x4b4bdd96, 0xbdbddc61, 0x8b8b860d, 0x8a8a850f, 0x707090e0, 0x3e3e427c, 0xb5b5c471, 0x6666aacc, 0x4848d890, 0x03030506, 0xf6f601f7, 0x0e0e121c, 0x6161a3c2, 0x35355f6a, 0x5757f9ae, 0xb9b9d069, 0x86869117, 0xc1c15899, 0x1d1d273a, 0x9e9eb927, 0xe1e138d9, 0xf8f813eb, 0x9898b32b, 0x11113322, 0x6969bbd2, 0xd9d970a9, 0x8e8e8907, 0x9494a733, 0x9b9bb62d, 0x1e1e223c, 0x87879215, 0xe9e920c9, 0xcece4987, 0x5555ffaa, 0x28287850, 0xdfdf7aa5, 0x8c8c8f03, 0xa1a1f859, 0x89898009, 0x0d0d171a, 0xbfbfda65, 0xe6e631d7, 0x4242c684, 0x6868b8d0, 0x4141c382, 0x9999b029, 0x2d2d775a, 0x0f0f111e, 0xb0b0cb7b, 0x5454fca8, 0xbbbbd66d, 0x16163a2c];

    // Transformations for decryption
    var T5 = [0x51f4a750, 0x7e416553, 0x1a17a4c3, 0x3a275e96, 0x3bab6bcb, 0x1f9d45f1, 0xacfa58ab, 0x4be30393, 0x2030fa55, 0xad766df6, 0x88cc7691, 0xf5024c25, 0x4fe5d7fc, 0xc52acbd7, 0x26354480, 0xb562a38f, 0xdeb15a49, 0x25ba1b67, 0x45ea0e98, 0x5dfec0e1, 0xc32f7502, 0x814cf012, 0x8d4697a3, 0x6bd3f9c6, 0x038f5fe7, 0x15929c95, 0xbf6d7aeb, 0x955259da, 0xd4be832d, 0x587421d3, 0x49e06929, 0x8ec9c844, 0x75c2896a, 0xf48e7978, 0x99583e6b, 0x27b971dd, 0xbee14fb6, 0xf088ad17, 0xc920ac66, 0x7dce3ab4, 0x63df4a18, 0xe51a3182, 0x97513360, 0x62537f45, 0xb16477e0, 0xbb6bae84, 0xfe81a01c, 0xf9082b94, 0x70486858, 0x8f45fd19, 0x94de6c87, 0x527bf8b7, 0xab73d323, 0x724b02e2, 0xe31f8f57, 0x6655ab2a, 0xb2eb2807, 0x2fb5c203, 0x86c57b9a, 0xd33708a5, 0x302887f2, 0x23bfa5b2, 0x02036aba, 0xed16825c, 0x8acf1c2b, 0xa779b492, 0xf307f2f0, 0x4e69e2a1, 0x65daf4cd, 0x0605bed5, 0xd134621f, 0xc4a6fe8a, 0x342e539d, 0xa2f355a0, 0x058ae132, 0xa4f6eb75, 0x0b83ec39, 0x4060efaa, 0x5e719f06, 0xbd6e1051, 0x3e218af9, 0x96dd063d, 0xdd3e05ae, 0x4de6bd46, 0x91548db5, 0x71c45d05, 0x0406d46f, 0x605015ff, 0x1998fb24, 0xd6bde997, 0x894043cc, 0x67d99e77, 0xb0e842bd, 0x07898b88, 0xe7195b38, 0x79c8eedb, 0xa17c0a47, 0x7c420fe9, 0xf8841ec9, 0x00000000, 0x09808683, 0x322bed48, 0x1e1170ac, 0x6c5a724e, 0xfd0efffb, 0x0f853856, 0x3daed51e, 0x362d3927, 0x0a0fd964, 0x685ca621, 0x9b5b54d1, 0x24362e3a, 0x0c0a67b1, 0x9357e70f, 0xb4ee96d2, 0x1b9b919e, 0x80c0c54f, 0x61dc20a2, 0x5a774b69, 0x1c121a16, 0xe293ba0a, 0xc0a02ae5, 0x3c22e043, 0x121b171d, 0x0e090d0b, 0xf28bc7ad, 0x2db6a8b9, 0x141ea9c8, 0x57f11985, 0xaf75074c, 0xee99ddbb, 0xa37f60fd, 0xf701269f, 0x5c72f5bc, 0x44663bc5, 0x5bfb7e34, 0x8b432976, 0xcb23c6dc, 0xb6edfc68, 0xb8e4f163, 0xd731dcca, 0x42638510, 0x13972240, 0x84c61120, 0x854a247d, 0xd2bb3df8, 0xaef93211, 0xc729a16d, 0x1d9e2f4b, 0xdcb230f3, 0x0d8652ec, 0x77c1e3d0, 0x2bb3166c, 0xa970b999, 0x119448fa, 0x47e96422, 0xa8fc8cc4, 0xa0f03f1a, 0x567d2cd8, 0x223390ef, 0x87494ec7, 0xd938d1c1, 0x8ccaa2fe, 0x98d40b36, 0xa6f581cf, 0xa57ade28, 0xdab78e26, 0x3fadbfa4, 0x2c3a9de4, 0x5078920d, 0x6a5fcc9b, 0x547e4662, 0xf68d13c2, 0x90d8b8e8, 0x2e39f75e, 0x82c3aff5, 0x9f5d80be, 0x69d0937c, 0x6fd52da9, 0xcf2512b3, 0xc8ac993b, 0x10187da7, 0xe89c636e, 0xdb3bbb7b, 0xcd267809, 0x6e5918f4, 0xec9ab701, 0x834f9aa8, 0xe6956e65, 0xaaffe67e, 0x21bccf08, 0xef15e8e6, 0xbae79bd9, 0x4a6f36ce, 0xea9f09d4, 0x29b07cd6, 0x31a4b2af, 0x2a3f2331, 0xc6a59430, 0x35a266c0, 0x744ebc37, 0xfc82caa6, 0xe090d0b0, 0x33a7d815, 0xf104984a, 0x41ecdaf7, 0x7fcd500e, 0x1791f62f, 0x764dd68d, 0x43efb04d, 0xccaa4d54, 0xe49604df, 0x9ed1b5e3, 0x4c6a881b, 0xc12c1fb8, 0x4665517f, 0x9d5eea04, 0x018c355d, 0xfa877473, 0xfb0b412e, 0xb3671d5a, 0x92dbd252, 0xe9105633, 0x6dd64713, 0x9ad7618c, 0x37a10c7a, 0x59f8148e, 0xeb133c89, 0xcea927ee, 0xb761c935, 0xe11ce5ed, 0x7a47b13c, 0x9cd2df59, 0x55f2733f, 0x1814ce79, 0x73c737bf, 0x53f7cdea, 0x5ffdaa5b, 0xdf3d6f14, 0x7844db86, 0xcaaff381, 0xb968c43e, 0x3824342c, 0xc2a3405f, 0x161dc372, 0xbce2250c, 0x283c498b, 0xff0d9541, 0x39a80171, 0x080cb3de, 0xd8b4e49c, 0x6456c190, 0x7bcb8461, 0xd532b670, 0x486c5c74, 0xd0b85742];
    var T6 = [0x5051f4a7, 0x537e4165, 0xc31a17a4, 0x963a275e, 0xcb3bab6b, 0xf11f9d45, 0xabacfa58, 0x934be303, 0x552030fa, 0xf6ad766d, 0x9188cc76, 0x25f5024c, 0xfc4fe5d7, 0xd7c52acb, 0x80263544, 0x8fb562a3, 0x49deb15a, 0x6725ba1b, 0x9845ea0e, 0xe15dfec0, 0x02c32f75, 0x12814cf0, 0xa38d4697, 0xc66bd3f9, 0xe7038f5f, 0x9515929c, 0xebbf6d7a, 0xda955259, 0x2dd4be83, 0xd3587421, 0x2949e069, 0x448ec9c8, 0x6a75c289, 0x78f48e79, 0x6b99583e, 0xdd27b971, 0xb6bee14f, 0x17f088ad, 0x66c920ac, 0xb47dce3a, 0x1863df4a, 0x82e51a31, 0x60975133, 0x4562537f, 0xe0b16477, 0x84bb6bae, 0x1cfe81a0, 0x94f9082b, 0x58704868, 0x198f45fd, 0x8794de6c, 0xb7527bf8, 0x23ab73d3, 0xe2724b02, 0x57e31f8f, 0x2a6655ab, 0x07b2eb28, 0x032fb5c2, 0x9a86c57b, 0xa5d33708, 0xf2302887, 0xb223bfa5, 0xba02036a, 0x5ced1682, 0x2b8acf1c, 0x92a779b4, 0xf0f307f2, 0xa14e69e2, 0xcd65daf4, 0xd50605be, 0x1fd13462, 0x8ac4a6fe, 0x9d342e53, 0xa0a2f355, 0x32058ae1, 0x75a4f6eb, 0x390b83ec, 0xaa4060ef, 0x065e719f, 0x51bd6e10, 0xf93e218a, 0x3d96dd06, 0xaedd3e05, 0x464de6bd, 0xb591548d, 0x0571c45d, 0x6f0406d4, 0xff605015, 0x241998fb, 0x97d6bde9, 0xcc894043, 0x7767d99e, 0xbdb0e842, 0x8807898b, 0x38e7195b, 0xdb79c8ee, 0x47a17c0a, 0xe97c420f, 0xc9f8841e, 0x00000000, 0x83098086, 0x48322bed, 0xac1e1170, 0x4e6c5a72, 0xfbfd0eff, 0x560f8538, 0x1e3daed5, 0x27362d39, 0x640a0fd9, 0x21685ca6, 0xd19b5b54, 0x3a24362e, 0xb10c0a67, 0x0f9357e7, 0xd2b4ee96, 0x9e1b9b91, 0x4f80c0c5, 0xa261dc20, 0x695a774b, 0x161c121a, 0x0ae293ba, 0xe5c0a02a, 0x433c22e0, 0x1d121b17, 0x0b0e090d, 0xadf28bc7, 0xb92db6a8, 0xc8141ea9, 0x8557f119, 0x4caf7507, 0xbbee99dd, 0xfda37f60, 0x9ff70126, 0xbc5c72f5, 0xc544663b, 0x345bfb7e, 0x768b4329, 0xdccb23c6, 0x68b6edfc, 0x63b8e4f1, 0xcad731dc, 0x10426385, 0x40139722, 0x2084c611, 0x7d854a24, 0xf8d2bb3d, 0x11aef932, 0x6dc729a1, 0x4b1d9e2f, 0xf3dcb230, 0xec0d8652, 0xd077c1e3, 0x6c2bb316, 0x99a970b9, 0xfa119448, 0x2247e964, 0xc4a8fc8c, 0x1aa0f03f, 0xd8567d2c, 0xef223390, 0xc787494e, 0xc1d938d1, 0xfe8ccaa2, 0x3698d40b, 0xcfa6f581, 0x28a57ade, 0x26dab78e, 0xa43fadbf, 0xe42c3a9d, 0x0d507892, 0x9b6a5fcc, 0x62547e46, 0xc2f68d13, 0xe890d8b8, 0x5e2e39f7, 0xf582c3af, 0xbe9f5d80, 0x7c69d093, 0xa96fd52d, 0xb3cf2512, 0x3bc8ac99, 0xa710187d, 0x6ee89c63, 0x7bdb3bbb, 0x09cd2678, 0xf46e5918, 0x01ec9ab7, 0xa8834f9a, 0x65e6956e, 0x7eaaffe6, 0x0821bccf, 0xe6ef15e8, 0xd9bae79b, 0xce4a6f36, 0xd4ea9f09, 0xd629b07c, 0xaf31a4b2, 0x312a3f23, 0x30c6a594, 0xc035a266, 0x37744ebc, 0xa6fc82ca, 0xb0e090d0, 0x1533a7d8, 0x4af10498, 0xf741ecda, 0x0e7fcd50, 0x2f1791f6, 0x8d764dd6, 0x4d43efb0, 0x54ccaa4d, 0xdfe49604, 0xe39ed1b5, 0x1b4c6a88, 0xb8c12c1f, 0x7f466551, 0x049d5eea, 0x5d018c35, 0x73fa8774, 0x2efb0b41, 0x5ab3671d, 0x5292dbd2, 0x33e91056, 0x136dd647, 0x8c9ad761, 0x7a37a10c, 0x8e59f814, 0x89eb133c, 0xeecea927, 0x35b761c9, 0xede11ce5, 0x3c7a47b1, 0x599cd2df, 0x3f55f273, 0x791814ce, 0xbf73c737, 0xea53f7cd, 0x5b5ffdaa, 0x14df3d6f, 0x867844db, 0x81caaff3, 0x3eb968c4, 0x2c382434, 0x5fc2a340, 0x72161dc3, 0x0cbce225, 0x8b283c49, 0x41ff0d95, 0x7139a801, 0xde080cb3, 0x9cd8b4e4, 0x906456c1, 0x617bcb84, 0x70d532b6, 0x74486c5c, 0x42d0b857];
    var T7 = [0xa75051f4, 0x65537e41, 0xa4c31a17, 0x5e963a27, 0x6bcb3bab, 0x45f11f9d, 0x58abacfa, 0x03934be3, 0xfa552030, 0x6df6ad76, 0x769188cc, 0x4c25f502, 0xd7fc4fe5, 0xcbd7c52a, 0x44802635, 0xa38fb562, 0x5a49deb1, 0x1b6725ba, 0x0e9845ea, 0xc0e15dfe, 0x7502c32f, 0xf012814c, 0x97a38d46, 0xf9c66bd3, 0x5fe7038f, 0x9c951592, 0x7aebbf6d, 0x59da9552, 0x832dd4be, 0x21d35874, 0x692949e0, 0xc8448ec9, 0x896a75c2, 0x7978f48e, 0x3e6b9958, 0x71dd27b9, 0x4fb6bee1, 0xad17f088, 0xac66c920, 0x3ab47dce, 0x4a1863df, 0x3182e51a, 0x33609751, 0x7f456253, 0x77e0b164, 0xae84bb6b, 0xa01cfe81, 0x2b94f908, 0x68587048, 0xfd198f45, 0x6c8794de, 0xf8b7527b, 0xd323ab73, 0x02e2724b, 0x8f57e31f, 0xab2a6655, 0x2807b2eb, 0xc2032fb5, 0x7b9a86c5, 0x08a5d337, 0x87f23028, 0xa5b223bf, 0x6aba0203, 0x825ced16, 0x1c2b8acf, 0xb492a779, 0xf2f0f307, 0xe2a14e69, 0xf4cd65da, 0xbed50605, 0x621fd134, 0xfe8ac4a6, 0x539d342e, 0x55a0a2f3, 0xe132058a, 0xeb75a4f6, 0xec390b83, 0xefaa4060, 0x9f065e71, 0x1051bd6e, 0x8af93e21, 0x063d96dd, 0x05aedd3e, 0xbd464de6, 0x8db59154, 0x5d0571c4, 0xd46f0406, 0x15ff6050, 0xfb241998, 0xe997d6bd, 0x43cc8940, 0x9e7767d9, 0x42bdb0e8, 0x8b880789, 0x5b38e719, 0xeedb79c8, 0x0a47a17c, 0x0fe97c42, 0x1ec9f884, 0x00000000, 0x86830980, 0xed48322b, 0x70ac1e11, 0x724e6c5a, 0xfffbfd0e, 0x38560f85, 0xd51e3dae, 0x3927362d, 0xd9640a0f, 0xa621685c, 0x54d19b5b, 0x2e3a2436, 0x67b10c0a, 0xe70f9357, 0x96d2b4ee, 0x919e1b9b, 0xc54f80c0, 0x20a261dc, 0x4b695a77, 0x1a161c12, 0xba0ae293, 0x2ae5c0a0, 0xe0433c22, 0x171d121b, 0x0d0b0e09, 0xc7adf28b, 0xa8b92db6, 0xa9c8141e, 0x198557f1, 0x074caf75, 0xddbbee99, 0x60fda37f, 0x269ff701, 0xf5bc5c72, 0x3bc54466, 0x7e345bfb, 0x29768b43, 0xc6dccb23, 0xfc68b6ed, 0xf163b8e4, 0xdccad731, 0x85104263, 0x22401397, 0x112084c6, 0x247d854a, 0x3df8d2bb, 0x3211aef9, 0xa16dc729, 0x2f4b1d9e, 0x30f3dcb2, 0x52ec0d86, 0xe3d077c1, 0x166c2bb3, 0xb999a970, 0x48fa1194, 0x642247e9, 0x8cc4a8fc, 0x3f1aa0f0, 0x2cd8567d, 0x90ef2233, 0x4ec78749, 0xd1c1d938, 0xa2fe8cca, 0x0b3698d4, 0x81cfa6f5, 0xde28a57a, 0x8e26dab7, 0xbfa43fad, 0x9de42c3a, 0x920d5078, 0xcc9b6a5f, 0x4662547e, 0x13c2f68d, 0xb8e890d8, 0xf75e2e39, 0xaff582c3, 0x80be9f5d, 0x937c69d0, 0x2da96fd5, 0x12b3cf25, 0x993bc8ac, 0x7da71018, 0x636ee89c, 0xbb7bdb3b, 0x7809cd26, 0x18f46e59, 0xb701ec9a, 0x9aa8834f, 0x6e65e695, 0xe67eaaff, 0xcf0821bc, 0xe8e6ef15, 0x9bd9bae7, 0x36ce4a6f, 0x09d4ea9f, 0x7cd629b0, 0xb2af31a4, 0x23312a3f, 0x9430c6a5, 0x66c035a2, 0xbc37744e, 0xcaa6fc82, 0xd0b0e090, 0xd81533a7, 0x984af104, 0xdaf741ec, 0x500e7fcd, 0xf62f1791, 0xd68d764d, 0xb04d43ef, 0x4d54ccaa, 0x04dfe496, 0xb5e39ed1, 0x881b4c6a, 0x1fb8c12c, 0x517f4665, 0xea049d5e, 0x355d018c, 0x7473fa87, 0x412efb0b, 0x1d5ab367, 0xd25292db, 0x5633e910, 0x47136dd6, 0x618c9ad7, 0x0c7a37a1, 0x148e59f8, 0x3c89eb13, 0x27eecea9, 0xc935b761, 0xe5ede11c, 0xb13c7a47, 0xdf599cd2, 0x733f55f2, 0xce791814, 0x37bf73c7, 0xcdea53f7, 0xaa5b5ffd, 0x6f14df3d, 0xdb867844, 0xf381caaf, 0xc43eb968, 0x342c3824, 0x405fc2a3, 0xc372161d, 0x250cbce2, 0x498b283c, 0x9541ff0d, 0x017139a8, 0xb3de080c, 0xe49cd8b4, 0xc1906456, 0x84617bcb, 0xb670d532, 0x5c74486c, 0x5742d0b8];
    var T8 = [0xf4a75051, 0x4165537e, 0x17a4c31a, 0x275e963a, 0xab6bcb3b, 0x9d45f11f, 0xfa58abac, 0xe303934b, 0x30fa5520, 0x766df6ad, 0xcc769188, 0x024c25f5, 0xe5d7fc4f, 0x2acbd7c5, 0x35448026, 0x62a38fb5, 0xb15a49de, 0xba1b6725, 0xea0e9845, 0xfec0e15d, 0x2f7502c3, 0x4cf01281, 0x4697a38d, 0xd3f9c66b, 0x8f5fe703, 0x929c9515, 0x6d7aebbf, 0x5259da95, 0xbe832dd4, 0x7421d358, 0xe0692949, 0xc9c8448e, 0xc2896a75, 0x8e7978f4, 0x583e6b99, 0xb971dd27, 0xe14fb6be, 0x88ad17f0, 0x20ac66c9, 0xce3ab47d, 0xdf4a1863, 0x1a3182e5, 0x51336097, 0x537f4562, 0x6477e0b1, 0x6bae84bb, 0x81a01cfe, 0x082b94f9, 0x48685870, 0x45fd198f, 0xde6c8794, 0x7bf8b752, 0x73d323ab, 0x4b02e272, 0x1f8f57e3, 0x55ab2a66, 0xeb2807b2, 0xb5c2032f, 0xc57b9a86, 0x3708a5d3, 0x2887f230, 0xbfa5b223, 0x036aba02, 0x16825ced, 0xcf1c2b8a, 0x79b492a7, 0x07f2f0f3, 0x69e2a14e, 0xdaf4cd65, 0x05bed506, 0x34621fd1, 0xa6fe8ac4, 0x2e539d34, 0xf355a0a2, 0x8ae13205, 0xf6eb75a4, 0x83ec390b, 0x60efaa40, 0x719f065e, 0x6e1051bd, 0x218af93e, 0xdd063d96, 0x3e05aedd, 0xe6bd464d, 0x548db591, 0xc45d0571, 0x06d46f04, 0x5015ff60, 0x98fb2419, 0xbde997d6, 0x4043cc89, 0xd99e7767, 0xe842bdb0, 0x898b8807, 0x195b38e7, 0xc8eedb79, 0x7c0a47a1, 0x420fe97c, 0x841ec9f8, 0x00000000, 0x80868309, 0x2bed4832, 0x1170ac1e, 0x5a724e6c, 0x0efffbfd, 0x8538560f, 0xaed51e3d, 0x2d392736, 0x0fd9640a, 0x5ca62168, 0x5b54d19b, 0x362e3a24, 0x0a67b10c, 0x57e70f93, 0xee96d2b4, 0x9b919e1b, 0xc0c54f80, 0xdc20a261, 0x774b695a, 0x121a161c, 0x93ba0ae2, 0xa02ae5c0, 0x22e0433c, 0x1b171d12, 0x090d0b0e, 0x8bc7adf2, 0xb6a8b92d, 0x1ea9c814, 0xf1198557, 0x75074caf, 0x99ddbbee, 0x7f60fda3, 0x01269ff7, 0x72f5bc5c, 0x663bc544, 0xfb7e345b, 0x4329768b, 0x23c6dccb, 0xedfc68b6, 0xe4f163b8, 0x31dccad7, 0x63851042, 0x97224013, 0xc6112084, 0x4a247d85, 0xbb3df8d2, 0xf93211ae, 0x29a16dc7, 0x9e2f4b1d, 0xb230f3dc, 0x8652ec0d, 0xc1e3d077, 0xb3166c2b, 0x70b999a9, 0x9448fa11, 0xe9642247, 0xfc8cc4a8, 0xf03f1aa0, 0x7d2cd856, 0x3390ef22, 0x494ec787, 0x38d1c1d9, 0xcaa2fe8c, 0xd40b3698, 0xf581cfa6, 0x7ade28a5, 0xb78e26da, 0xadbfa43f, 0x3a9de42c, 0x78920d50, 0x5fcc9b6a, 0x7e466254, 0x8d13c2f6, 0xd8b8e890, 0x39f75e2e, 0xc3aff582, 0x5d80be9f, 0xd0937c69, 0xd52da96f, 0x2512b3cf, 0xac993bc8, 0x187da710, 0x9c636ee8, 0x3bbb7bdb, 0x267809cd, 0x5918f46e, 0x9ab701ec, 0x4f9aa883, 0x956e65e6, 0xffe67eaa, 0xbccf0821, 0x15e8e6ef, 0xe79bd9ba, 0x6f36ce4a, 0x9f09d4ea, 0xb07cd629, 0xa4b2af31, 0x3f23312a, 0xa59430c6, 0xa266c035, 0x4ebc3774, 0x82caa6fc, 0x90d0b0e0, 0xa7d81533, 0x04984af1, 0xecdaf741, 0xcd500e7f, 0x91f62f17, 0x4dd68d76, 0xefb04d43, 0xaa4d54cc, 0x9604dfe4, 0xd1b5e39e, 0x6a881b4c, 0x2c1fb8c1, 0x65517f46, 0x5eea049d, 0x8c355d01, 0x877473fa, 0x0b412efb, 0x671d5ab3, 0xdbd25292, 0x105633e9, 0xd647136d, 0xd7618c9a, 0xa10c7a37, 0xf8148e59, 0x133c89eb, 0xa927eece, 0x61c935b7, 0x1ce5ede1, 0x47b13c7a, 0xd2df599c, 0xf2733f55, 0x14ce7918, 0xc737bf73, 0xf7cdea53, 0xfdaa5b5f, 0x3d6f14df, 0x44db8678, 0xaff381ca, 0x68c43eb9, 0x24342c38, 0xa3405fc2, 0x1dc37216, 0xe2250cbc, 0x3c498b28, 0x0d9541ff, 0xa8017139, 0x0cb3de08, 0xb4e49cd8, 0x56c19064, 0xcb84617b, 0x32b670d5, 0x6c5c7448, 0xb85742d0];

    // Transformations for decryption key expansion
    var U1 = [0x00000000, 0x0e090d0b, 0x1c121a16, 0x121b171d, 0x3824342c, 0x362d3927, 0x24362e3a, 0x2a3f2331, 0x70486858, 0x7e416553, 0x6c5a724e, 0x62537f45, 0x486c5c74, 0x4665517f, 0x547e4662, 0x5a774b69, 0xe090d0b0, 0xee99ddbb, 0xfc82caa6, 0xf28bc7ad, 0xd8b4e49c, 0xd6bde997, 0xc4a6fe8a, 0xcaaff381, 0x90d8b8e8, 0x9ed1b5e3, 0x8ccaa2fe, 0x82c3aff5, 0xa8fc8cc4, 0xa6f581cf, 0xb4ee96d2, 0xbae79bd9, 0xdb3bbb7b, 0xd532b670, 0xc729a16d, 0xc920ac66, 0xe31f8f57, 0xed16825c, 0xff0d9541, 0xf104984a, 0xab73d323, 0xa57ade28, 0xb761c935, 0xb968c43e, 0x9357e70f, 0x9d5eea04, 0x8f45fd19, 0x814cf012, 0x3bab6bcb, 0x35a266c0, 0x27b971dd, 0x29b07cd6, 0x038f5fe7, 0x0d8652ec, 0x1f9d45f1, 0x119448fa, 0x4be30393, 0x45ea0e98, 0x57f11985, 0x59f8148e, 0x73c737bf, 0x7dce3ab4, 0x6fd52da9, 0x61dc20a2, 0xad766df6, 0xa37f60fd, 0xb16477e0, 0xbf6d7aeb, 0x955259da, 0x9b5b54d1, 0x894043cc, 0x87494ec7, 0xdd3e05ae, 0xd33708a5, 0xc12c1fb8, 0xcf2512b3, 0xe51a3182, 0xeb133c89, 0xf9082b94, 0xf701269f, 0x4de6bd46, 0x43efb04d, 0x51f4a750, 0x5ffdaa5b, 0x75c2896a, 0x7bcb8461, 0x69d0937c, 0x67d99e77, 0x3daed51e, 0x33a7d815, 0x21bccf08, 0x2fb5c203, 0x058ae132, 0x0b83ec39, 0x1998fb24, 0x1791f62f, 0x764dd68d, 0x7844db86, 0x6a5fcc9b, 0x6456c190, 0x4e69e2a1, 0x4060efaa, 0x527bf8b7, 0x5c72f5bc, 0x0605bed5, 0x080cb3de, 0x1a17a4c3, 0x141ea9c8, 0x3e218af9, 0x302887f2, 0x223390ef, 0x2c3a9de4, 0x96dd063d, 0x98d40b36, 0x8acf1c2b, 0x84c61120, 0xaef93211, 0xa0f03f1a, 0xb2eb2807, 0xbce2250c, 0xe6956e65, 0xe89c636e, 0xfa877473, 0xf48e7978, 0xdeb15a49, 0xd0b85742, 0xc2a3405f, 0xccaa4d54, 0x41ecdaf7, 0x4fe5d7fc, 0x5dfec0e1, 0x53f7cdea, 0x79c8eedb, 0x77c1e3d0, 0x65daf4cd, 0x6bd3f9c6, 0x31a4b2af, 0x3fadbfa4, 0x2db6a8b9, 0x23bfa5b2, 0x09808683, 0x07898b88, 0x15929c95, 0x1b9b919e, 0xa17c0a47, 0xaf75074c, 0xbd6e1051, 0xb3671d5a, 0x99583e6b, 0x97513360, 0x854a247d, 0x8b432976, 0xd134621f, 0xdf3d6f14, 0xcd267809, 0xc32f7502, 0xe9105633, 0xe7195b38, 0xf5024c25, 0xfb0b412e, 0x9ad7618c, 0x94de6c87, 0x86c57b9a, 0x88cc7691, 0xa2f355a0, 0xacfa58ab, 0xbee14fb6, 0xb0e842bd, 0xea9f09d4, 0xe49604df, 0xf68d13c2, 0xf8841ec9, 0xd2bb3df8, 0xdcb230f3, 0xcea927ee, 0xc0a02ae5, 0x7a47b13c, 0x744ebc37, 0x6655ab2a, 0x685ca621, 0x42638510, 0x4c6a881b, 0x5e719f06, 0x5078920d, 0x0a0fd964, 0x0406d46f, 0x161dc372, 0x1814ce79, 0x322bed48, 0x3c22e043, 0x2e39f75e, 0x2030fa55, 0xec9ab701, 0xe293ba0a, 0xf088ad17, 0xfe81a01c, 0xd4be832d, 0xdab78e26, 0xc8ac993b, 0xc6a59430, 0x9cd2df59, 0x92dbd252, 0x80c0c54f, 0x8ec9c844, 0xa4f6eb75, 0xaaffe67e, 0xb8e4f163, 0xb6edfc68, 0x0c0a67b1, 0x02036aba, 0x10187da7, 0x1e1170ac, 0x342e539d, 0x3a275e96, 0x283c498b, 0x26354480, 0x7c420fe9, 0x724b02e2, 0x605015ff, 0x6e5918f4, 0x44663bc5, 0x4a6f36ce, 0x587421d3, 0x567d2cd8, 0x37a10c7a, 0x39a80171, 0x2bb3166c, 0x25ba1b67, 0x0f853856, 0x018c355d, 0x13972240, 0x1d9e2f4b, 0x47e96422, 0x49e06929, 0x5bfb7e34, 0x55f2733f, 0x7fcd500e, 0x71c45d05, 0x63df4a18, 0x6dd64713, 0xd731dcca, 0xd938d1c1, 0xcb23c6dc, 0xc52acbd7, 0xef15e8e6, 0xe11ce5ed, 0xf307f2f0, 0xfd0efffb, 0xa779b492, 0xa970b999, 0xbb6bae84, 0xb562a38f, 0x9f5d80be, 0x91548db5, 0x834f9aa8, 0x8d4697a3];
    var U2 = [0x00000000, 0x0b0e090d, 0x161c121a, 0x1d121b17, 0x2c382434, 0x27362d39, 0x3a24362e, 0x312a3f23, 0x58704868, 0x537e4165, 0x4e6c5a72, 0x4562537f, 0x74486c5c, 0x7f466551, 0x62547e46, 0x695a774b, 0xb0e090d0, 0xbbee99dd, 0xa6fc82ca, 0xadf28bc7, 0x9cd8b4e4, 0x97d6bde9, 0x8ac4a6fe, 0x81caaff3, 0xe890d8b8, 0xe39ed1b5, 0xfe8ccaa2, 0xf582c3af, 0xc4a8fc8c, 0xcfa6f581, 0xd2b4ee96, 0xd9bae79b, 0x7bdb3bbb, 0x70d532b6, 0x6dc729a1, 0x66c920ac, 0x57e31f8f, 0x5ced1682, 0x41ff0d95, 0x4af10498, 0x23ab73d3, 0x28a57ade, 0x35b761c9, 0x3eb968c4, 0x0f9357e7, 0x049d5eea, 0x198f45fd, 0x12814cf0, 0xcb3bab6b, 0xc035a266, 0xdd27b971, 0xd629b07c, 0xe7038f5f, 0xec0d8652, 0xf11f9d45, 0xfa119448, 0x934be303, 0x9845ea0e, 0x8557f119, 0x8e59f814, 0xbf73c737, 0xb47dce3a, 0xa96fd52d, 0xa261dc20, 0xf6ad766d, 0xfda37f60, 0xe0b16477, 0xebbf6d7a, 0xda955259, 0xd19b5b54, 0xcc894043, 0xc787494e, 0xaedd3e05, 0xa5d33708, 0xb8c12c1f, 0xb3cf2512, 0x82e51a31, 0x89eb133c, 0x94f9082b, 0x9ff70126, 0x464de6bd, 0x4d43efb0, 0x5051f4a7, 0x5b5ffdaa, 0x6a75c289, 0x617bcb84, 0x7c69d093, 0x7767d99e, 0x1e3daed5, 0x1533a7d8, 0x0821bccf, 0x032fb5c2, 0x32058ae1, 0x390b83ec, 0x241998fb, 0x2f1791f6, 0x8d764dd6, 0x867844db, 0x9b6a5fcc, 0x906456c1, 0xa14e69e2, 0xaa4060ef, 0xb7527bf8, 0xbc5c72f5, 0xd50605be, 0xde080cb3, 0xc31a17a4, 0xc8141ea9, 0xf93e218a, 0xf2302887, 0xef223390, 0xe42c3a9d, 0x3d96dd06, 0x3698d40b, 0x2b8acf1c, 0x2084c611, 0x11aef932, 0x1aa0f03f, 0x07b2eb28, 0x0cbce225, 0x65e6956e, 0x6ee89c63, 0x73fa8774, 0x78f48e79, 0x49deb15a, 0x42d0b857, 0x5fc2a340, 0x54ccaa4d, 0xf741ecda, 0xfc4fe5d7, 0xe15dfec0, 0xea53f7cd, 0xdb79c8ee, 0xd077c1e3, 0xcd65daf4, 0xc66bd3f9, 0xaf31a4b2, 0xa43fadbf, 0xb92db6a8, 0xb223bfa5, 0x83098086, 0x8807898b, 0x9515929c, 0x9e1b9b91, 0x47a17c0a, 0x4caf7507, 0x51bd6e10, 0x5ab3671d, 0x6b99583e, 0x60975133, 0x7d854a24, 0x768b4329, 0x1fd13462, 0x14df3d6f, 0x09cd2678, 0x02c32f75, 0x33e91056, 0x38e7195b, 0x25f5024c, 0x2efb0b41, 0x8c9ad761, 0x8794de6c, 0x9a86c57b, 0x9188cc76, 0xa0a2f355, 0xabacfa58, 0xb6bee14f, 0xbdb0e842, 0xd4ea9f09, 0xdfe49604, 0xc2f68d13, 0xc9f8841e, 0xf8d2bb3d, 0xf3dcb230, 0xeecea927, 0xe5c0a02a, 0x3c7a47b1, 0x37744ebc, 0x2a6655ab, 0x21685ca6, 0x10426385, 0x1b4c6a88, 0x065e719f, 0x0d507892, 0x640a0fd9, 0x6f0406d4, 0x72161dc3, 0x791814ce, 0x48322bed, 0x433c22e0, 0x5e2e39f7, 0x552030fa, 0x01ec9ab7, 0x0ae293ba, 0x17f088ad, 0x1cfe81a0, 0x2dd4be83, 0x26dab78e, 0x3bc8ac99, 0x30c6a594, 0x599cd2df, 0x5292dbd2, 0x4f80c0c5, 0x448ec9c8, 0x75a4f6eb, 0x7eaaffe6, 0x63b8e4f1, 0x68b6edfc, 0xb10c0a67, 0xba02036a, 0xa710187d, 0xac1e1170, 0x9d342e53, 0x963a275e, 0x8b283c49, 0x80263544, 0xe97c420f, 0xe2724b02, 0xff605015, 0xf46e5918, 0xc544663b, 0xce4a6f36, 0xd3587421, 0xd8567d2c, 0x7a37a10c, 0x7139a801, 0x6c2bb316, 0x6725ba1b, 0x560f8538, 0x5d018c35, 0x40139722, 0x4b1d9e2f, 0x2247e964, 0x2949e069, 0x345bfb7e, 0x3f55f273, 0x0e7fcd50, 0x0571c45d, 0x1863df4a, 0x136dd647, 0xcad731dc, 0xc1d938d1, 0xdccb23c6, 0xd7c52acb, 0xe6ef15e8, 0xede11ce5, 0xf0f307f2, 0xfbfd0eff, 0x92a779b4, 0x99a970b9, 0x84bb6bae, 0x8fb562a3, 0xbe9f5d80, 0xb591548d, 0xa8834f9a, 0xa38d4697];
    var U3 = [0x00000000, 0x0d0b0e09, 0x1a161c12, 0x171d121b, 0x342c3824, 0x3927362d, 0x2e3a2436, 0x23312a3f, 0x68587048, 0x65537e41, 0x724e6c5a, 0x7f456253, 0x5c74486c, 0x517f4665, 0x4662547e, 0x4b695a77, 0xd0b0e090, 0xddbbee99, 0xcaa6fc82, 0xc7adf28b, 0xe49cd8b4, 0xe997d6bd, 0xfe8ac4a6, 0xf381caaf, 0xb8e890d8, 0xb5e39ed1, 0xa2fe8cca, 0xaff582c3, 0x8cc4a8fc, 0x81cfa6f5, 0x96d2b4ee, 0x9bd9bae7, 0xbb7bdb3b, 0xb670d532, 0xa16dc729, 0xac66c920, 0x8f57e31f, 0x825ced16, 0x9541ff0d, 0x984af104, 0xd323ab73, 0xde28a57a, 0xc935b761, 0xc43eb968, 0xe70f9357, 0xea049d5e, 0xfd198f45, 0xf012814c, 0x6bcb3bab, 0x66c035a2, 0x71dd27b9, 0x7cd629b0, 0x5fe7038f, 0x52ec0d86, 0x45f11f9d, 0x48fa1194, 0x03934be3, 0x0e9845ea, 0x198557f1, 0x148e59f8, 0x37bf73c7, 0x3ab47dce, 0x2da96fd5, 0x20a261dc, 0x6df6ad76, 0x60fda37f, 0x77e0b164, 0x7aebbf6d, 0x59da9552, 0x54d19b5b, 0x43cc8940, 0x4ec78749, 0x05aedd3e, 0x08a5d337, 0x1fb8c12c, 0x12b3cf25, 0x3182e51a, 0x3c89eb13, 0x2b94f908, 0x269ff701, 0xbd464de6, 0xb04d43ef, 0xa75051f4, 0xaa5b5ffd, 0x896a75c2, 0x84617bcb, 0x937c69d0, 0x9e7767d9, 0xd51e3dae, 0xd81533a7, 0xcf0821bc, 0xc2032fb5, 0xe132058a, 0xec390b83, 0xfb241998, 0xf62f1791, 0xd68d764d, 0xdb867844, 0xcc9b6a5f, 0xc1906456, 0xe2a14e69, 0xefaa4060, 0xf8b7527b, 0xf5bc5c72, 0xbed50605, 0xb3de080c, 0xa4c31a17, 0xa9c8141e, 0x8af93e21, 0x87f23028, 0x90ef2233, 0x9de42c3a, 0x063d96dd, 0x0b3698d4, 0x1c2b8acf, 0x112084c6, 0x3211aef9, 0x3f1aa0f0, 0x2807b2eb, 0x250cbce2, 0x6e65e695, 0x636ee89c, 0x7473fa87, 0x7978f48e, 0x5a49deb1, 0x5742d0b8, 0x405fc2a3, 0x4d54ccaa, 0xdaf741ec, 0xd7fc4fe5, 0xc0e15dfe, 0xcdea53f7, 0xeedb79c8, 0xe3d077c1, 0xf4cd65da, 0xf9c66bd3, 0xb2af31a4, 0xbfa43fad, 0xa8b92db6, 0xa5b223bf, 0x86830980, 0x8b880789, 0x9c951592, 0x919e1b9b, 0x0a47a17c, 0x074caf75, 0x1051bd6e, 0x1d5ab367, 0x3e6b9958, 0x33609751, 0x247d854a, 0x29768b43, 0x621fd134, 0x6f14df3d, 0x7809cd26, 0x7502c32f, 0x5633e910, 0x5b38e719, 0x4c25f502, 0x412efb0b, 0x618c9ad7, 0x6c8794de, 0x7b9a86c5, 0x769188cc, 0x55a0a2f3, 0x58abacfa, 0x4fb6bee1, 0x42bdb0e8, 0x09d4ea9f, 0x04dfe496, 0x13c2f68d, 0x1ec9f884, 0x3df8d2bb, 0x30f3dcb2, 0x27eecea9, 0x2ae5c0a0, 0xb13c7a47, 0xbc37744e, 0xab2a6655, 0xa621685c, 0x85104263, 0x881b4c6a, 0x9f065e71, 0x920d5078, 0xd9640a0f, 0xd46f0406, 0xc372161d, 0xce791814, 0xed48322b, 0xe0433c22, 0xf75e2e39, 0xfa552030, 0xb701ec9a, 0xba0ae293, 0xad17f088, 0xa01cfe81, 0x832dd4be, 0x8e26dab7, 0x993bc8ac, 0x9430c6a5, 0xdf599cd2, 0xd25292db, 0xc54f80c0, 0xc8448ec9, 0xeb75a4f6, 0xe67eaaff, 0xf163b8e4, 0xfc68b6ed, 0x67b10c0a, 0x6aba0203, 0x7da71018, 0x70ac1e11, 0x539d342e, 0x5e963a27, 0x498b283c, 0x44802635, 0x0fe97c42, 0x02e2724b, 0x15ff6050, 0x18f46e59, 0x3bc54466, 0x36ce4a6f, 0x21d35874, 0x2cd8567d, 0x0c7a37a1, 0x017139a8, 0x166c2bb3, 0x1b6725ba, 0x38560f85, 0x355d018c, 0x22401397, 0x2f4b1d9e, 0x642247e9, 0x692949e0, 0x7e345bfb, 0x733f55f2, 0x500e7fcd, 0x5d0571c4, 0x4a1863df, 0x47136dd6, 0xdccad731, 0xd1c1d938, 0xc6dccb23, 0xcbd7c52a, 0xe8e6ef15, 0xe5ede11c, 0xf2f0f307, 0xfffbfd0e, 0xb492a779, 0xb999a970, 0xae84bb6b, 0xa38fb562, 0x80be9f5d, 0x8db59154, 0x9aa8834f, 0x97a38d46];
    var U4 = [0x00000000, 0x090d0b0e, 0x121a161c, 0x1b171d12, 0x24342c38, 0x2d392736, 0x362e3a24, 0x3f23312a, 0x48685870, 0x4165537e, 0x5a724e6c, 0x537f4562, 0x6c5c7448, 0x65517f46, 0x7e466254, 0x774b695a, 0x90d0b0e0, 0x99ddbbee, 0x82caa6fc, 0x8bc7adf2, 0xb4e49cd8, 0xbde997d6, 0xa6fe8ac4, 0xaff381ca, 0xd8b8e890, 0xd1b5e39e, 0xcaa2fe8c, 0xc3aff582, 0xfc8cc4a8, 0xf581cfa6, 0xee96d2b4, 0xe79bd9ba, 0x3bbb7bdb, 0x32b670d5, 0x29a16dc7, 0x20ac66c9, 0x1f8f57e3, 0x16825ced, 0x0d9541ff, 0x04984af1, 0x73d323ab, 0x7ade28a5, 0x61c935b7, 0x68c43eb9, 0x57e70f93, 0x5eea049d, 0x45fd198f, 0x4cf01281, 0xab6bcb3b, 0xa266c035, 0xb971dd27, 0xb07cd629, 0x8f5fe703, 0x8652ec0d, 0x9d45f11f, 0x9448fa11, 0xe303934b, 0xea0e9845, 0xf1198557, 0xf8148e59, 0xc737bf73, 0xce3ab47d, 0xd52da96f, 0xdc20a261, 0x766df6ad, 0x7f60fda3, 0x6477e0b1, 0x6d7aebbf, 0x5259da95, 0x5b54d19b, 0x4043cc89, 0x494ec787, 0x3e05aedd, 0x3708a5d3, 0x2c1fb8c1, 0x2512b3cf, 0x1a3182e5, 0x133c89eb, 0x082b94f9, 0x01269ff7, 0xe6bd464d, 0xefb04d43, 0xf4a75051, 0xfdaa5b5f, 0xc2896a75, 0xcb84617b, 0xd0937c69, 0xd99e7767, 0xaed51e3d, 0xa7d81533, 0xbccf0821, 0xb5c2032f, 0x8ae13205, 0x83ec390b, 0x98fb2419, 0x91f62f17, 0x4dd68d76, 0x44db8678, 0x5fcc9b6a, 0x56c19064, 0x69e2a14e, 0x60efaa40, 0x7bf8b752, 0x72f5bc5c, 0x05bed506, 0x0cb3de08, 0x17a4c31a, 0x1ea9c814, 0x218af93e, 0x2887f230, 0x3390ef22, 0x3a9de42c, 0xdd063d96, 0xd40b3698, 0xcf1c2b8a, 0xc6112084, 0xf93211ae, 0xf03f1aa0, 0xeb2807b2, 0xe2250cbc, 0x956e65e6, 0x9c636ee8, 0x877473fa, 0x8e7978f4, 0xb15a49de, 0xb85742d0, 0xa3405fc2, 0xaa4d54cc, 0xecdaf741, 0xe5d7fc4f, 0xfec0e15d, 0xf7cdea53, 0xc8eedb79, 0xc1e3d077, 0xdaf4cd65, 0xd3f9c66b, 0xa4b2af31, 0xadbfa43f, 0xb6a8b92d, 0xbfa5b223, 0x80868309, 0x898b8807, 0x929c9515, 0x9b919e1b, 0x7c0a47a1, 0x75074caf, 0x6e1051bd, 0x671d5ab3, 0x583e6b99, 0x51336097, 0x4a247d85, 0x4329768b, 0x34621fd1, 0x3d6f14df, 0x267809cd, 0x2f7502c3, 0x105633e9, 0x195b38e7, 0x024c25f5, 0x0b412efb, 0xd7618c9a, 0xde6c8794, 0xc57b9a86, 0xcc769188, 0xf355a0a2, 0xfa58abac, 0xe14fb6be, 0xe842bdb0, 0x9f09d4ea, 0x9604dfe4, 0x8d13c2f6, 0x841ec9f8, 0xbb3df8d2, 0xb230f3dc, 0xa927eece, 0xa02ae5c0, 0x47b13c7a, 0x4ebc3774, 0x55ab2a66, 0x5ca62168, 0x63851042, 0x6a881b4c, 0x719f065e, 0x78920d50, 0x0fd9640a, 0x06d46f04, 0x1dc37216, 0x14ce7918, 0x2bed4832, 0x22e0433c, 0x39f75e2e, 0x30fa5520, 0x9ab701ec, 0x93ba0ae2, 0x88ad17f0, 0x81a01cfe, 0xbe832dd4, 0xb78e26da, 0xac993bc8, 0xa59430c6, 0xd2df599c, 0xdbd25292, 0xc0c54f80, 0xc9c8448e, 0xf6eb75a4, 0xffe67eaa, 0xe4f163b8, 0xedfc68b6, 0x0a67b10c, 0x036aba02, 0x187da710, 0x1170ac1e, 0x2e539d34, 0x275e963a, 0x3c498b28, 0x35448026, 0x420fe97c, 0x4b02e272, 0x5015ff60, 0x5918f46e, 0x663bc544, 0x6f36ce4a, 0x7421d358, 0x7d2cd856, 0xa10c7a37, 0xa8017139, 0xb3166c2b, 0xba1b6725, 0x8538560f, 0x8c355d01, 0x97224013, 0x9e2f4b1d, 0xe9642247, 0xe0692949, 0xfb7e345b, 0xf2733f55, 0xcd500e7f, 0xc45d0571, 0xdf4a1863, 0xd647136d, 0x31dccad7, 0x38d1c1d9, 0x23c6dccb, 0x2acbd7c5, 0x15e8e6ef, 0x1ce5ede1, 0x07f2f0f3, 0x0efffbfd, 0x79b492a7, 0x70b999a9, 0x6bae84bb, 0x62a38fb5, 0x5d80be9f, 0x548db591, 0x4f9aa883, 0x4697a38d];

    function convertToInt32(bytes) {
        var result = [];
        for (var i = 0; i < bytes.length; i += 4) {
            result.push(
                (bytes[i    ] << 24) |
                (bytes[i + 1] << 16) |
                (bytes[i + 2] <<  8) |
                 bytes[i + 3]
            );
        }
        return result;
    }

    var AES = function(key) {
        if (!(this instanceof AES)) {
            throw Error('AES must be instanitated with `new`');
        }

        Object.defineProperty(this, 'key', {
            value: coerceArray(key, true)
        });

        this._prepare();
    }


    AES.prototype._prepare = function() {

        var rounds = numberOfRounds[this.key.length];
        if (rounds == null) {
            throw new Error('invalid key size (must be 16, 24 or 32 bytes)');
        }

        // encryption round keys
        this._Ke = [];

        // decryption round keys
        this._Kd = [];

        for (var i = 0; i <= rounds; i++) {
            this._Ke.push([0, 0, 0, 0]);
            this._Kd.push([0, 0, 0, 0]);
        }

        var roundKeyCount = (rounds + 1) * 4;
        var KC = this.key.length / 4;

        // convert the key into ints
        var tk = convertToInt32(this.key);

        // copy values into round key arrays
        var index;
        for (var i = 0; i < KC; i++) {
            index = i >> 2;
            this._Ke[index][i % 4] = tk[i];
            this._Kd[rounds - index][i % 4] = tk[i];
        }

        // key expansion (fips-197 section 5.2)
        var rconpointer = 0;
        var t = KC, tt;
        while (t < roundKeyCount) {
            tt = tk[KC - 1];
            tk[0] ^= ((S[(tt >> 16) & 0xFF] << 24) ^
                      (S[(tt >>  8) & 0xFF] << 16) ^
                      (S[ tt        & 0xFF] <<  8) ^
                       S[(tt >> 24) & 0xFF]        ^
                      (rcon[rconpointer] << 24));
            rconpointer += 1;

            // key expansion (for non-256 bit)
            if (KC != 8) {
                for (var i = 1; i < KC; i++) {
                    tk[i] ^= tk[i - 1];
                }

            // key expansion for 256-bit keys is "slightly different" (fips-197)
            } else {
                for (var i = 1; i < (KC / 2); i++) {
                    tk[i] ^= tk[i - 1];
                }
                tt = tk[(KC / 2) - 1];

                tk[KC / 2] ^= (S[ tt        & 0xFF]        ^
                              (S[(tt >>  8) & 0xFF] <<  8) ^
                              (S[(tt >> 16) & 0xFF] << 16) ^
                              (S[(tt >> 24) & 0xFF] << 24));

                for (var i = (KC / 2) + 1; i < KC; i++) {
                    tk[i] ^= tk[i - 1];
                }
            }

            // copy values into round key arrays
            var i = 0, r, c;
            while (i < KC && t < roundKeyCount) {
                r = t >> 2;
                c = t % 4;
                this._Ke[r][c] = tk[i];
                this._Kd[rounds - r][c] = tk[i++];
                t++;
            }
        }

        // inverse-cipher-ify the decryption round key (fips-197 section 5.3)
        for (var r = 1; r < rounds; r++) {
            for (var c = 0; c < 4; c++) {
                tt = this._Kd[r][c];
                this._Kd[r][c] = (U1[(tt >> 24) & 0xFF] ^
                                  U2[(tt >> 16) & 0xFF] ^
                                  U3[(tt >>  8) & 0xFF] ^
                                  U4[ tt        & 0xFF]);
            }
        }
    }

    AES.prototype.encrypt = function(plaintext) {
        if (plaintext.length != 16) {
            throw new Error('invalid plaintext size (must be 16 bytes)');
        }

        var rounds = this._Ke.length - 1;
        var a = [0, 0, 0, 0];

        // convert plaintext to (ints ^ key)
        var t = convertToInt32(plaintext);
        for (var i = 0; i < 4; i++) {
            t[i] ^= this._Ke[0][i];
        }

        // apply round transforms
        for (var r = 1; r < rounds; r++) {
            for (var i = 0; i < 4; i++) {
                a[i] = (T1[(t[ i         ] >> 24) & 0xff] ^
                        T2[(t[(i + 1) % 4] >> 16) & 0xff] ^
                        T3[(t[(i + 2) % 4] >>  8) & 0xff] ^
                        T4[ t[(i + 3) % 4]        & 0xff] ^
                        this._Ke[r][i]);
            }
            t = a.slice();
        }

        // the last round is special
        var result = createArray(16), tt;
        for (var i = 0; i < 4; i++) {
            tt = this._Ke[rounds][i];
            result[4 * i    ] = (S[(t[ i         ] >> 24) & 0xff] ^ (tt >> 24)) & 0xff;
            result[4 * i + 1] = (S[(t[(i + 1) % 4] >> 16) & 0xff] ^ (tt >> 16)) & 0xff;
            result[4 * i + 2] = (S[(t[(i + 2) % 4] >>  8) & 0xff] ^ (tt >>  8)) & 0xff;
            result[4 * i + 3] = (S[ t[(i + 3) % 4]        & 0xff] ^  tt       ) & 0xff;
        }

        return result;
    }

    AES.prototype.decrypt = function(ciphertext) {
        if (ciphertext.length != 16) {
            throw new Error('invalid ciphertext size (must be 16 bytes)');
        }

        var rounds = this._Kd.length - 1;
        var a = [0, 0, 0, 0];

        // convert plaintext to (ints ^ key)
        var t = convertToInt32(ciphertext);
        for (var i = 0; i < 4; i++) {
            t[i] ^= this._Kd[0][i];
        }

        // apply round transforms
        for (var r = 1; r < rounds; r++) {
            for (var i = 0; i < 4; i++) {
                a[i] = (T5[(t[ i          ] >> 24) & 0xff] ^
                        T6[(t[(i + 3) % 4] >> 16) & 0xff] ^
                        T7[(t[(i + 2) % 4] >>  8) & 0xff] ^
                        T8[ t[(i + 1) % 4]        & 0xff] ^
                        this._Kd[r][i]);
            }
            t = a.slice();
        }

        // the last round is special
        var result = createArray(16), tt;
        for (var i = 0; i < 4; i++) {
            tt = this._Kd[rounds][i];
            result[4 * i    ] = (Si[(t[ i         ] >> 24) & 0xff] ^ (tt >> 24)) & 0xff;
            result[4 * i + 1] = (Si[(t[(i + 3) % 4] >> 16) & 0xff] ^ (tt >> 16)) & 0xff;
            result[4 * i + 2] = (Si[(t[(i + 2) % 4] >>  8) & 0xff] ^ (tt >>  8)) & 0xff;
            result[4 * i + 3] = (Si[ t[(i + 1) % 4]        & 0xff] ^  tt       ) & 0xff;
        }

        return result;
    }


    /**
     *  Mode Of Operation - Electonic Codebook (ECB)
     */
    var ModeOfOperationECB = function(key) {
        if (!(this instanceof ModeOfOperationECB)) {
            throw Error('AES must be instanitated with `new`');
        }

        this.description = "Electronic Code Block";
        this.name = "ecb";

        this._aes = new AES(key);
    }

    ModeOfOperationECB.prototype.encrypt = function(plaintext) {
        plaintext = coerceArray(plaintext);

        if ((plaintext.length % 16) !== 0) {
            throw new Error('invalid plaintext size (must be multiple of 16 bytes)');
        }

        var ciphertext = createArray(plaintext.length);
        var block = createArray(16);

        for (var i = 0; i < plaintext.length; i += 16) {
            copyArray(plaintext, block, 0, i, i + 16);
            block = this._aes.encrypt(block);
            copyArray(block, ciphertext, i);
        }

        return ciphertext;
    }

    ModeOfOperationECB.prototype.decrypt = function(ciphertext) {
        ciphertext = coerceArray(ciphertext);

        if ((ciphertext.length % 16) !== 0) {
            throw new Error('invalid ciphertext size (must be multiple of 16 bytes)');
        }

        var plaintext = createArray(ciphertext.length);
        var block = createArray(16);

        for (var i = 0; i < ciphertext.length; i += 16) {
            copyArray(ciphertext, block, 0, i, i + 16);
            block = this._aes.decrypt(block);
            copyArray(block, plaintext, i);
        }

        return plaintext;
    }


    /**
     *  Mode Of Operation - Cipher Block Chaining (CBC)
     */
    var ModeOfOperationCBC = function(key, iv) {
        if (!(this instanceof ModeOfOperationCBC)) {
            throw Error('AES must be instanitated with `new`');
        }

        this.description = "Cipher Block Chaining";
        this.name = "cbc";

        if (!iv) {
            iv = createArray(16);

        } else if (iv.length != 16) {
            throw new Error('invalid initialation vector size (must be 16 bytes)');
        }

        this._lastCipherblock = coerceArray(iv, true);

        this._aes = new AES(key);
    }

    ModeOfOperationCBC.prototype.encrypt = function(plaintext) {
        plaintext = coerceArray(plaintext);

        if ((plaintext.length % 16) !== 0) {
            throw new Error('invalid plaintext size (must be multiple of 16 bytes)');
        }

        var ciphertext = createArray(plaintext.length);
        var block = createArray(16);

        for (var i = 0; i < plaintext.length; i += 16) {
            copyArray(plaintext, block, 0, i, i + 16);

            for (var j = 0; j < 16; j++) {
                block[j] ^= this._lastCipherblock[j];
            }

            this._lastCipherblock = this._aes.encrypt(block);
            copyArray(this._lastCipherblock, ciphertext, i);
        }

        return ciphertext;
    }

    ModeOfOperationCBC.prototype.decrypt = function(ciphertext) {
        ciphertext = coerceArray(ciphertext);

        if ((ciphertext.length % 16) !== 0) {
            throw new Error('invalid ciphertext size (must be multiple of 16 bytes)');
        }

        var plaintext = createArray(ciphertext.length);
        var block = createArray(16);

        for (var i = 0; i < ciphertext.length; i += 16) {
            copyArray(ciphertext, block, 0, i, i + 16);
            block = this._aes.decrypt(block);

            for (var j = 0; j < 16; j++) {
                plaintext[i + j] = block[j] ^ this._lastCipherblock[j];
            }

            copyArray(ciphertext, this._lastCipherblock, 0, i, i + 16);
        }

        return plaintext;
    }


    /**
     *  Mode Of Operation - Cipher Feedback (CFB)
     */
    var ModeOfOperationCFB = function(key, iv, segmentSize) {
        if (!(this instanceof ModeOfOperationCFB)) {
            throw Error('AES must be instanitated with `new`');
        }

        this.description = "Cipher Feedback";
        this.name = "cfb";

        if (!iv) {
            iv = createArray(16);

        } else if (iv.length != 16) {
            throw new Error('invalid initialation vector size (must be 16 size)');
        }

        if (!segmentSize) { segmentSize = 1; }

        this.segmentSize = segmentSize;

        this._shiftRegister = coerceArray(iv, true);

        this._aes = new AES(key);
    }

    ModeOfOperationCFB.prototype.encrypt = function(plaintext) {
        if ((plaintext.length % this.segmentSize) != 0) {
            throw new Error('invalid plaintext size (must be segmentSize bytes)');
        }

        var encrypted = coerceArray(plaintext, true);

        var xorSegment;
        for (var i = 0; i < encrypted.length; i += this.segmentSize) {
            xorSegment = this._aes.encrypt(this._shiftRegister);
            for (var j = 0; j < this.segmentSize; j++) {
                encrypted[i + j] ^= xorSegment[j];
            }

            // Shift the register
            copyArray(this._shiftRegister, this._shiftRegister, 0, this.segmentSize);
            copyArray(encrypted, this._shiftRegister, 16 - this.segmentSize, i, i + this.segmentSize);
        }

        return encrypted;
    }

    ModeOfOperationCFB.prototype.decrypt = function(ciphertext) {
        if ((ciphertext.length % this.segmentSize) != 0) {
            throw new Error('invalid ciphertext size (must be segmentSize bytes)');
        }

        var plaintext = coerceArray(ciphertext, true);

        var xorSegment;
        for (var i = 0; i < plaintext.length; i += this.segmentSize) {
            xorSegment = this._aes.encrypt(this._shiftRegister);

            for (var j = 0; j < this.segmentSize; j++) {
                plaintext[i + j] ^= xorSegment[j];
            }

            // Shift the register
            copyArray(this._shiftRegister, this._shiftRegister, 0, this.segmentSize);
            copyArray(ciphertext, this._shiftRegister, 16 - this.segmentSize, i, i + this.segmentSize);
        }

        return plaintext;
    }

    /**
     *  Mode Of Operation - Output Feedback (OFB)
     */
    var ModeOfOperationOFB = function(key, iv) {
        if (!(this instanceof ModeOfOperationOFB)) {
            throw Error('AES must be instanitated with `new`');
        }

        this.description = "Output Feedback";
        this.name = "ofb";

        if (!iv) {
            iv = createArray(16);

        } else if (iv.length != 16) {
            throw new Error('invalid initialation vector size (must be 16 bytes)');
        }

        this._lastPrecipher = coerceArray(iv, true);
        this._lastPrecipherIndex = 16;

        this._aes = new AES(key);
    }

    ModeOfOperationOFB.prototype.encrypt = function(plaintext) {
        var encrypted = coerceArray(plaintext, true);

        for (var i = 0; i < encrypted.length; i++) {
            if (this._lastPrecipherIndex === 16) {
                this._lastPrecipher = this._aes.encrypt(this._lastPrecipher);
                this._lastPrecipherIndex = 0;
            }
            encrypted[i] ^= this._lastPrecipher[this._lastPrecipherIndex++];
        }

        return encrypted;
    }

    // Decryption is symetric
    ModeOfOperationOFB.prototype.decrypt = ModeOfOperationOFB.prototype.encrypt;


    /**
     *  Counter object for CTR common mode of operation
     */
    var Counter = function(initialValue) {
        if (!(this instanceof Counter)) {
            throw Error('Counter must be instanitated with `new`');
        }

        // We allow 0, but anything false-ish uses the default 1
        if (initialValue !== 0 && !initialValue) { initialValue = 1; }

        if (typeof(initialValue) === 'number') {
            this._counter = createArray(16);
            this.setValue(initialValue);

        } else {
            this.setBytes(initialValue);
        }
    }

    Counter.prototype.setValue = function(value) {
        if (typeof(value) !== 'number' || parseInt(value) != value) {
            throw new Error('invalid counter value (must be an integer)');
        }

        // We cannot safely handle numbers beyond the safe range for integers
        if (value > Number.MAX_SAFE_INTEGER) {
            throw new Error('integer value out of safe range');
        }

        for (var index = 15; index >= 0; --index) {
            this._counter[index] = value % 256;
            value = parseInt(value / 256);
        }
    }

    Counter.prototype.setBytes = function(bytes) {
        bytes = coerceArray(bytes, true);

        if (bytes.length != 16) {
            throw new Error('invalid counter bytes size (must be 16 bytes)');
        }

        this._counter = bytes;
    };

    Counter.prototype.increment = function() {
        for (var i = 15; i >= 0; i--) {
            if (this._counter[i] === 255) {
                this._counter[i] = 0;
            } else {
                this._counter[i]++;
                break;
            }
        }
    }


    /**
     *  Mode Of Operation - Counter (CTR)
     */
    var ModeOfOperationCTR = function(key, counter) {
        if (!(this instanceof ModeOfOperationCTR)) {
            throw Error('AES must be instanitated with `new`');
        }

        this.description = "Counter";
        this.name = "ctr";

        if (!(counter instanceof Counter)) {
            counter = new Counter(counter)
        }

        this._counter = counter;

        this._remainingCounter = null;
        this._remainingCounterIndex = 16;

        this._aes = new AES(key);
    }

    ModeOfOperationCTR.prototype.encrypt = function(plaintext) {
        var encrypted = coerceArray(plaintext, true);

        for (var i = 0; i < encrypted.length; i++) {
            if (this._remainingCounterIndex === 16) {
                this._remainingCounter = this._aes.encrypt(this._counter._counter);
                this._remainingCounterIndex = 0;
                this._counter.increment();
            }
            encrypted[i] ^= this._remainingCounter[this._remainingCounterIndex++];
        }

        return encrypted;
    }

    // Decryption is symetric
    ModeOfOperationCTR.prototype.decrypt = ModeOfOperationCTR.prototype.encrypt;


    ///////////////////////
    // Padding

    // See:https://tools.ietf.org/html/rfc2315
    function pkcs7pad(data) {
        data = coerceArray(data, true);
        var padder = 16 - (data.length % 16);
        var result = createArray(data.length + padder);
        copyArray(data, result);
        for (var i = data.length; i < result.length; i++) {
            result[i] = padder;
        }
        return result;
    }

    function pkcs7strip(data) {
        data = coerceArray(data, true);
        if (data.length < 16) { throw new Error('PKCS#7 invalid length'); }

        var padder = data[data.length - 1];
        if (padder > 16) { throw new Error('PKCS#7 padding byte out of range'); }

        var length = data.length - padder;
        for (var i = 0; i < padder; i++) {
            if (data[length + i] !== padder) {
                throw new Error('PKCS#7 invalid padding byte');
            }
        }

        var result = createArray(length);
        copyArray(data, result, 0, 0, length);
        return result;
    }

    ///////////////////////
    // Exporting


    // The block cipher
    var aesjs = {
        AES: AES,
        Counter: Counter,

        ModeOfOperation: {
            ecb: ModeOfOperationECB,
            cbc: ModeOfOperationCBC,
            cfb: ModeOfOperationCFB,
            ofb: ModeOfOperationOFB,
            ctr: ModeOfOperationCTR
        },

        utils: {
            hex: convertHex,
            utf8: convertUtf8
        },

        padding: {
            pkcs7: {
                pad: pkcs7pad,
                strip: pkcs7strip
            }
        },

        _arrayTest: {
            coerceArray: coerceArray,
            createArray: createArray,
            copyArray: copyArray,
        }
    };


    // node.js
    if (true) {
        module.exports = aesjs

    // RequireJS/AMD
    // http://www.requirejs.org/docs/api.html
    // https://github.com/amdjs/amdjs-api/wiki/AMD
    } else {}


})(this);


/***/ }),

/***/ "./node_modules/base-x/src/index.js":
/*!******************************************!*\
  !*** ./node_modules/base-x/src/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// base-x encoding / decoding
// Copyright (c) 2018 base-x contributors
// Copyright (c) 2014-2018 The Bitcoin Core developers (base58.cpp)
// Distributed under the MIT software license, see the accompanying
// file LICENSE or http://www.opensource.org/licenses/mit-license.php.
// @ts-ignore
var _Buffer = __webpack_require__(/*! safe-buffer */ "./node_modules/safe-buffer/index.js").Buffer
function base (ALPHABET) {
  if (ALPHABET.length >= 255) { throw new TypeError('Alphabet too long') }
  var BASE_MAP = new Uint8Array(256)
  for (var j = 0; j < BASE_MAP.length; j++) {
    BASE_MAP[j] = 255
  }
  for (var i = 0; i < ALPHABET.length; i++) {
    var x = ALPHABET.charAt(i)
    var xc = x.charCodeAt(0)
    if (BASE_MAP[xc] !== 255) { throw new TypeError(x + ' is ambiguous') }
    BASE_MAP[xc] = i
  }
  var BASE = ALPHABET.length
  var LEADER = ALPHABET.charAt(0)
  var FACTOR = Math.log(BASE) / Math.log(256) // log(BASE) / log(256), rounded up
  var iFACTOR = Math.log(256) / Math.log(BASE) // log(256) / log(BASE), rounded up
  function encode (source) {
    if (Array.isArray(source) || source instanceof Uint8Array) { source = _Buffer.from(source) }
    if (!_Buffer.isBuffer(source)) { throw new TypeError('Expected Buffer') }
    if (source.length === 0) { return '' }
        // Skip & count leading zeroes.
    var zeroes = 0
    var length = 0
    var pbegin = 0
    var pend = source.length
    while (pbegin !== pend && source[pbegin] === 0) {
      pbegin++
      zeroes++
    }
        // Allocate enough space in big-endian base58 representation.
    var size = ((pend - pbegin) * iFACTOR + 1) >>> 0
    var b58 = new Uint8Array(size)
        // Process the bytes.
    while (pbegin !== pend) {
      var carry = source[pbegin]
            // Apply "b58 = b58 * 256 + ch".
      var i = 0
      for (var it1 = size - 1; (carry !== 0 || i < length) && (it1 !== -1); it1--, i++) {
        carry += (256 * b58[it1]) >>> 0
        b58[it1] = (carry % BASE) >>> 0
        carry = (carry / BASE) >>> 0
      }
      if (carry !== 0) { throw new Error('Non-zero carry') }
      length = i
      pbegin++
    }
        // Skip leading zeroes in base58 result.
    var it2 = size - length
    while (it2 !== size && b58[it2] === 0) {
      it2++
    }
        // Translate the result into a string.
    var str = LEADER.repeat(zeroes)
    for (; it2 < size; ++it2) { str += ALPHABET.charAt(b58[it2]) }
    return str
  }
  function decodeUnsafe (source) {
    if (typeof source !== 'string') { throw new TypeError('Expected String') }
    if (source.length === 0) { return _Buffer.alloc(0) }
    var psz = 0
        // Skip leading spaces.
    if (source[psz] === ' ') { return }
        // Skip and count leading '1's.
    var zeroes = 0
    var length = 0
    while (source[psz] === LEADER) {
      zeroes++
      psz++
    }
        // Allocate enough space in big-endian base256 representation.
    var size = (((source.length - psz) * FACTOR) + 1) >>> 0 // log(58) / log(256), rounded up.
    var b256 = new Uint8Array(size)
        // Process the characters.
    while (source[psz]) {
            // Decode character
      var carry = BASE_MAP[source.charCodeAt(psz)]
            // Invalid character
      if (carry === 255) { return }
      var i = 0
      for (var it3 = size - 1; (carry !== 0 || i < length) && (it3 !== -1); it3--, i++) {
        carry += (BASE * b256[it3]) >>> 0
        b256[it3] = (carry % 256) >>> 0
        carry = (carry / 256) >>> 0
      }
      if (carry !== 0) { throw new Error('Non-zero carry') }
      length = i
      psz++
    }
        // Skip trailing spaces.
    if (source[psz] === ' ') { return }
        // Skip leading zeroes in b256.
    var it4 = size - length
    while (it4 !== size && b256[it4] === 0) {
      it4++
    }
    var vch = _Buffer.allocUnsafe(zeroes + (size - it4))
    vch.fill(0x00, 0, zeroes)
    var j = zeroes
    while (it4 !== size) {
      vch[j++] = b256[it4++]
    }
    return vch
  }
  function decode (string) {
    var buffer = decodeUnsafe(string)
    if (buffer) { return buffer }
    throw new Error('Non-base' + BASE + ' character')
  }
  return {
    encode: encode,
    decodeUnsafe: decodeUnsafe,
    decode: decode
  }
}
module.exports = base


/***/ }),

/***/ "./node_modules/bitwise/esm/bits/and.js":
/*!**********************************************!*\
  !*** ./node_modules/bitwise/esm/bits/and.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Applies the AND operation, expects two arrays of the same size and returns a new one.
 *
 * @example
 * and([1,0,0,0,1,1,0,1], [0,1,1,0,0,1,0,0]) => [0,0,0,0,0,1,0,0]
 *
 * @param {Array} bits1 input data
 * @param {Array} bits2 input data
 * @return {Array} [bits1 AND bits2]
 */
/* harmony default export */ __webpack_exports__["default"] = (function (bits1, bits2) {
    var result = [];
    for (var i = 0; i < bits1.length; i++)
        result[i] = (bits1[i] & bits2[i]);
    return result;
});


/***/ }),

/***/ "./node_modules/bitwise/esm/bits/index.js":
/*!************************************************!*\
  !*** ./node_modules/bitwise/esm/bits/index.js ***!
  \************************************************/
/*! exports provided: and, nand, nor, not, or, reduceAnd, reduceNand, reduceNor, reduceOr, reduceXnor, reduceXor, toBoolean, toString, xnor, xor, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _and__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./and */ "./node_modules/bitwise/esm/bits/and.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "and", function() { return _and__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _nand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nand */ "./node_modules/bitwise/esm/bits/nand.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nand", function() { return _nand__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _nor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nor */ "./node_modules/bitwise/esm/bits/nor.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nor", function() { return _nor__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _not__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./not */ "./node_modules/bitwise/esm/bits/not.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "not", function() { return _not__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _or__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./or */ "./node_modules/bitwise/esm/bits/or.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "or", function() { return _or__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _reduce_and__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reduce-and */ "./node_modules/bitwise/esm/bits/reduce-and.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reduceAnd", function() { return _reduce_and__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _reduce_nand__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reduce-nand */ "./node_modules/bitwise/esm/bits/reduce-nand.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reduceNand", function() { return _reduce_nand__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _reduce_nor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reduce-nor */ "./node_modules/bitwise/esm/bits/reduce-nor.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reduceNor", function() { return _reduce_nor__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _reduce_or__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reduce-or */ "./node_modules/bitwise/esm/bits/reduce-or.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reduceOr", function() { return _reduce_or__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _reduce_xnor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reduce-xnor */ "./node_modules/bitwise/esm/bits/reduce-xnor.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reduceXnor", function() { return _reduce_xnor__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _reduce_xor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./reduce-xor */ "./node_modules/bitwise/esm/bits/reduce-xor.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reduceXor", function() { return _reduce_xor__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _to_boolean__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./to-boolean */ "./node_modules/bitwise/esm/bits/to-boolean.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toBoolean", function() { return _to_boolean__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _to_string__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./to-string */ "./node_modules/bitwise/esm/bits/to-string.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toString", function() { return _to_string__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _xnor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./xnor */ "./node_modules/bitwise/esm/bits/xnor.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "xnor", function() { return _xnor__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _xor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./xor */ "./node_modules/bitwise/esm/bits/xor.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "xor", function() { return _xor__WEBPACK_IMPORTED_MODULE_14__["default"]; });

















/* harmony default export */ __webpack_exports__["default"] = ({
    and: _and__WEBPACK_IMPORTED_MODULE_0__["default"],
    nand: _nand__WEBPACK_IMPORTED_MODULE_1__["default"],
    nor: _nor__WEBPACK_IMPORTED_MODULE_2__["default"],
    not: _not__WEBPACK_IMPORTED_MODULE_3__["default"],
    or: _or__WEBPACK_IMPORTED_MODULE_4__["default"],
    reduceAnd: _reduce_and__WEBPACK_IMPORTED_MODULE_5__["default"],
    reduceNand: _reduce_nand__WEBPACK_IMPORTED_MODULE_6__["default"],
    reduceNor: _reduce_nor__WEBPACK_IMPORTED_MODULE_7__["default"],
    reduceOr: _reduce_or__WEBPACK_IMPORTED_MODULE_8__["default"],
    reduceXnor: _reduce_xnor__WEBPACK_IMPORTED_MODULE_9__["default"],
    reduceXor: _reduce_xor__WEBPACK_IMPORTED_MODULE_10__["default"],
    toBoolean: _to_boolean__WEBPACK_IMPORTED_MODULE_11__["default"],
    toString: _to_string__WEBPACK_IMPORTED_MODULE_12__["default"],
    xnor: _xnor__WEBPACK_IMPORTED_MODULE_13__["default"],
    xor: _xor__WEBPACK_IMPORTED_MODULE_14__["default"],
});


/***/ }),

/***/ "./node_modules/bitwise/esm/bits/nand.js":
/*!***********************************************!*\
  !*** ./node_modules/bitwise/esm/bits/nand.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Applies the NAND operation, expects two arrays of the same size and returns a new one.
 *
 * @example
 * nand([1,0,0,0,1,1,0,1], [0,1,1,0,0,1,0,0]) => [1,1,1,1,1,0,1,1]
 *
 * @param {Array} bits1 input data
 * @param {Array} bits2 input data
 * @return {Array} [bits1 NAND bits2]
 */
/* harmony default export */ __webpack_exports__["default"] = (function (bits1, bits2) {
    var result = [];
    for (var i = 0; i < bits1.length; i++)
        result[i] = ((bits1[i] & bits2[i]) ^ 1);
    return result;
});


/***/ }),

/***/ "./node_modules/bitwise/esm/bits/nor.js":
/*!**********************************************!*\
  !*** ./node_modules/bitwise/esm/bits/nor.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Applies the NOR operation, expects two arrays of the same size and returns a new one.
 *
 * @example
 * nor([1,0,0,0,1,1,0,1], [0,1,1,0,0,1,0,0]) => [0,0,0,1,0,0,1,0]
 *
 * @param {Array} bits1 input data
 * @param {Array} bits2 input data
 * @return {Array} [bits1 NOR bits2]
 */
/* harmony default export */ __webpack_exports__["default"] = (function (bits1, bits2) {
    var result = [];
    for (var i = 0; i < bits1.length; i++)
        result[i] = ((bits1[i] | bits2[i]) ^ 1);
    return result;
});


/***/ }),

/***/ "./node_modules/bitwise/esm/bits/not.js":
/*!**********************************************!*\
  !*** ./node_modules/bitwise/esm/bits/not.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Flips all given bits and returns the flipped bits.
 *
 * @example
 * not([1,0,1,1,0,1]) => [0,1,0,0,1,0]
 *
 * @param {Array} bits input data
 * @return {Array} [NOT bits]
 */
/* harmony default export */ __webpack_exports__["default"] = (function (bits) {
    var result = [];
    for (var i = 0; i < bits.length; i++)
        result[i] = (bits[i] ^ 1);
    return result;
});


/***/ }),

/***/ "./node_modules/bitwise/esm/bits/or.js":
/*!*********************************************!*\
  !*** ./node_modules/bitwise/esm/bits/or.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Applies the OR operation, expects two arrays of the same size and returns a new one.
 *
 * @example
 * or([1,0,0,0,1,1,0,1], [0,1,1,0,0,1,0,0]) => [1,1,1,0,1,1,0,1]
 *
 * @param {Array} bits1 input data
 * @param {Array} bits2 input data
 * @return {Array} [bits1 OR bits2]
 */
/* harmony default export */ __webpack_exports__["default"] = (function (bits1, bits2) {
    var result = [];
    for (var i = 0; i < bits1.length; i++)
        result[i] = (bits1[i] | bits2[i]);
    return result;
});


/***/ }),

/***/ "./node_modules/bitwise/esm/bits/reduce-and.js":
/*!*****************************************************!*\
  !*** ./node_modules/bitwise/esm/bits/reduce-and.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Applies the AND operation on the given bits. Returns one bit.
 * Throws if less than 2 bits are given.
 *
 * @example
 * reduceAnd([1, 0, 0, 0, 1, 1, 0, 1]) => 0
 *
 * @param {Array} bits input data
 * @return {Integer} AND bits
 */
/* harmony default export */ __webpack_exports__["default"] = (function (bits) {
    if (bits.length < 2)
        throw new RangeError('Not enough bits.');
    var result = bits[0];
    for (var i = 1; i < bits.length; i++)
        result &= bits[i];
    return result;
});


/***/ }),

/***/ "./node_modules/bitwise/esm/bits/reduce-nand.js":
/*!******************************************************!*\
  !*** ./node_modules/bitwise/esm/bits/reduce-nand.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Applies the NAND operation on the given bits. Returns one bit.
 * Throws if less than 2 bits are given.
 *
 * @example
 * reduceNand([1, 0, 0, 0, 1, 1, 0, 1]) => 0
 *
 * @param {Array} bits input data
 * @return {Integer} NAND bits
 */
/* harmony default export */ __webpack_exports__["default"] = (function (bits) {
    if (bits.length < 2)
        throw new RangeError('Not enough bits.');
    var result = bits[0];
    for (var i = 1; i < bits.length; i++)
        result = ((result & bits[i]) ^ 1);
    return result;
});


/***/ }),

/***/ "./node_modules/bitwise/esm/bits/reduce-nor.js":
/*!*****************************************************!*\
  !*** ./node_modules/bitwise/esm/bits/reduce-nor.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Applies the NOR operation on the given bits. Returns one bit.
 * Throws if less than 2 bits are given.
 *
 * @example
 * reduceNor([1, 0, 0, 0, 1, 1, 0, 1]) => 0
 *
 * @param {Array} bits input data
 * @return {Integer} NOR bits
 */
/* harmony default export */ __webpack_exports__["default"] = (function (bits) {
    if (bits.length < 2)
        throw new RangeError('Not enough bits.');
    var result = bits[0];
    for (var i = 1; i < bits.length; i++)
        result = ((result | bits[i]) ^ 1);
    return result;
});


/***/ }),

/***/ "./node_modules/bitwise/esm/bits/reduce-or.js":
/*!****************************************************!*\
  !*** ./node_modules/bitwise/esm/bits/reduce-or.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Applies the OR operation on the given bits. Returns one bit.
 * Throws if less than 2 bits are given.
 *
 * @example
 * reduceOr([1, 0, 0, 0, 1, 1, 0, 1]) => 1
 *
 * @param {Array} bits input data
 * @return {Integer} OR bits
 */
/* harmony default export */ __webpack_exports__["default"] = (function (bits) {
    if (bits.length < 2)
        throw new RangeError('Not enough bits.');
    var result = bits[0];
    for (var i = 1; i < bits.length; i++)
        result |= bits[i];
    return result;
});


/***/ }),

/***/ "./node_modules/bitwise/esm/bits/reduce-xnor.js":
/*!******************************************************!*\
  !*** ./node_modules/bitwise/esm/bits/reduce-xnor.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Applies the XNOR operation on the given bits. Returns one bit.
 * Throws if less than 2 bits are given.
 *
 * @example
 * reduceXnor([1, 0, 0, 0, 1, 1, 0, 1]) => 1
 *
 * @param {Array} bits input data
 * @return {Integer} XNOR bits
 */
/* harmony default export */ __webpack_exports__["default"] = (function (bits) {
    if (bits.length < 2)
        throw new RangeError('Not enough bits.');
    var result = bits[0];
    for (var i = 1; i < bits.length; i++)
        result ^= bits[i] ^ 1;
    return result;
});


/***/ }),

/***/ "./node_modules/bitwise/esm/bits/reduce-xor.js":
/*!*****************************************************!*\
  !*** ./node_modules/bitwise/esm/bits/reduce-xor.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Applies the XOR operation on the given bits. Returns one bit.
 * Throws if less than 2 bits are given.
 *
 * @example
 * reduceXor([1, 0, 0, 0, 1, 1, 0, 1]) => 0
 *
 * @param {Array} bits input data
 * @return {Integer} XOR bits
 */
/* harmony default export */ __webpack_exports__["default"] = (function (bits) {
    if (bits.length < 2)
        throw new RangeError('Not enough bits.');
    var result = bits[0];
    for (var i = 1; i < bits.length; i++)
        result ^= bits[i];
    return result;
});


/***/ }),

/***/ "./node_modules/bitwise/esm/bits/to-boolean.js":
/*!*****************************************************!*\
  !*** ./node_modules/bitwise/esm/bits/to-boolean.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Converts a bit array to a boolean array.
 *
 * @example toBoolean([0, 1]) => [false, true]
 * @param {Array} bits input data
 * @returns {Array} boolean bits
 */
/* harmony default export */ __webpack_exports__["default"] = (function (bits) {
    var result = [];
    for (var i = 0; i < bits.length; i++)
        result[i] = bits[i] === 1;
    return result;
});


/***/ }),

/***/ "./node_modules/bitwise/esm/bits/to-string.js":
/*!****************************************************!*\
  !*** ./node_modules/bitwise/esm/bits/to-string.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Converts a bit array to a string. If defined, inserts spacer every spacing characters, but never inserts it as the last substring.
 *
 * @example
 * toString([1,0,1,0,1,0], 2, '_') => '10_10_10'
 *
 * @param {Array} bits the bits to convert
 * @param {Number} spacing where to place the spacers
 * @param {Number} spacer the string used as a spacer
 * @return {String}
 */
/* harmony default export */ __webpack_exports__["default"] = (function (bits, spacing, spacer) {
    if (spacing === void 0) { spacing = 0; }
    if (spacer === void 0) { spacer = ' '; }
    if (!spacing)
        return bits.join('');
    var result = '';
    for (var i = 0; i < bits.length; i++) {
        result += "" + bits[i];
        if (i % spacing === spacing - 1 && i !== bits.length - 1)
            result += spacer;
    }
    return result;
});


/***/ }),

/***/ "./node_modules/bitwise/esm/bits/xnor.js":
/*!***********************************************!*\
  !*** ./node_modules/bitwise/esm/bits/xnor.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Applies the exclusive NOR operation, expects two arrays of the same size and returns a new one.
 *
 * @example
 * xnor([1,0,0,0,1,1,0,1], [0,1,1,0,0,1,0,0]) => [0,0,0,1,0,1,1,0]
 *
 * @param {Array} bits1 input data
 * @param {Array} bits2 input data
 * @return {Array} [bits1 XNOR bits2]
 */
/* harmony default export */ __webpack_exports__["default"] = (function (bits1, bits2) {
    var result = [];
    for (var i = 0; i < bits1.length; i++)
        result[i] = (bits1[i] ^ bits2[i] ^ 1);
    return result;
});


/***/ }),

/***/ "./node_modules/bitwise/esm/bits/xor.js":
/*!**********************************************!*\
  !*** ./node_modules/bitwise/esm/bits/xor.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Applies the exclusive or operation, expects two arrays of the same size and returns a new one.
 *
 * @example
 * xor([1,0,0,0,1,1,0,1], [0,1,1,0,0,1,0,0]) => [1,1,1,0,1,0,0,1]
 *
 * @param {Array} bits1 input data
 * @param {Array} bits2 input data
 * @return {Array} [bits1 XOR bits2]
 */
/* harmony default export */ __webpack_exports__["default"] = (function (bits1, bits2) {
    var result = [];
    for (var i = 0; i < bits1.length; i++)
        result[i] = (bits1[i] ^ bits2[i]);
    return result;
});


/***/ }),

/***/ "./node_modules/bitwise/esm/buffer/and.js":
/*!************************************************!*\
  !*** ./node_modules/bitwise/esm/buffer/and.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/**
 * Applies a bitwise AND to the contents of two buffers. Returns a new buffer.
 *
 * @example
 * bitwise.buffer.and(a, b, false) => Buffer(a AND b)
 *
 * @param {Buffer} a first buffer
 * @param {Buffer} b second buffer
 * @param {Boolean} isLooping loop through first buffer
 * @return {Buffer} a AND b
 */
/* harmony default export */ __webpack_exports__["default"] = (function (a, b, isLooping) {
    if (isLooping === void 0) { isLooping = false; }
    var length = isLooping ? b.length : a.length;
    var result = Buffer.alloc(length);
    for (var i = 0; i < length; i++) {
        var j = isLooping ? i % a.length : i;
        result[i] = a[j] & b[i];
    }
    return result;
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node-libs-browser/node_modules/buffer/index.js */ "./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./node_modules/bitwise/esm/buffer/create.js":
/*!***************************************************!*\
  !*** ./node_modules/bitwise/esm/buffer/create.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony import */ var _byte_write__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../byte/write */ "./node_modules/bitwise/esm/byte/write.js");

/**
 * Creates a new buffer and writes the given bits.
 *
 * @example
 * createBuffer([1,1,1,1, 0,0,0,1, 1,0,1,0]) => buffer with data 1111 0001 1010 0000
 *
 * @param {Array} bits an array containing the bits to insert
 * @returns {Buffer}
 */
/* harmony default export */ __webpack_exports__["default"] = (function (bits) {
    var data = [0, 0, 0, 0, 0, 0, 0, 0];
    var buffer = Buffer.alloc(Math.ceil(bits.length / 8));
    for (var i = 0; i < buffer.length; i++) {
        for (var j = 0; j < 8; j++) {
            if (bits[i * 8 + j])
                data[j] = bits[i * 8 + j];
            else
                data[j] = 0;
        }
        buffer[i] = Object(_byte_write__WEBPACK_IMPORTED_MODULE_0__["default"])(data);
    }
    return buffer;
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node-libs-browser/node_modules/buffer/index.js */ "./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./node_modules/bitwise/esm/buffer/index.js":
/*!**************************************************!*\
  !*** ./node_modules/bitwise/esm/buffer/index.js ***!
  \**************************************************/
/*! exports provided: and, create, modify, nand, nor, not, or, read, readInt, readUInt, xnor, xor, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _and__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./and */ "./node_modules/bitwise/esm/buffer/and.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "and", function() { return _and__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create */ "./node_modules/bitwise/esm/buffer/create.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "create", function() { return _create__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _modify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modify */ "./node_modules/bitwise/esm/buffer/modify.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "modify", function() { return _modify__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _nand__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nand */ "./node_modules/bitwise/esm/buffer/nand.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nand", function() { return _nand__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _nor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nor */ "./node_modules/bitwise/esm/buffer/nor.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nor", function() { return _nor__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _not__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./not */ "./node_modules/bitwise/esm/buffer/not.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "not", function() { return _not__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _or__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./or */ "./node_modules/bitwise/esm/buffer/or.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "or", function() { return _or__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _read__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./read */ "./node_modules/bitwise/esm/buffer/read.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "read", function() { return _read__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _read_int__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./read-int */ "./node_modules/bitwise/esm/buffer/read-int.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "readInt", function() { return _read_int__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _read_u_int__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./read-u-int */ "./node_modules/bitwise/esm/buffer/read-u-int.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "readUInt", function() { return _read_u_int__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _xnor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./xnor */ "./node_modules/bitwise/esm/buffer/xnor.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "xnor", function() { return _xnor__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _xor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./xor */ "./node_modules/bitwise/esm/buffer/xor.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "xor", function() { return _xor__WEBPACK_IMPORTED_MODULE_11__["default"]; });














/* harmony default export */ __webpack_exports__["default"] = ({
    and: _and__WEBPACK_IMPORTED_MODULE_0__["default"],
    create: _create__WEBPACK_IMPORTED_MODULE_1__["default"],
    modify: _modify__WEBPACK_IMPORTED_MODULE_2__["default"],
    nand: _nand__WEBPACK_IMPORTED_MODULE_3__["default"],
    nor: _nor__WEBPACK_IMPORTED_MODULE_4__["default"],
    not: _not__WEBPACK_IMPORTED_MODULE_5__["default"],
    or: _or__WEBPACK_IMPORTED_MODULE_6__["default"],
    read: _read__WEBPACK_IMPORTED_MODULE_7__["default"],
    readInt: _read_int__WEBPACK_IMPORTED_MODULE_8__["default"],
    readUInt: _read_u_int__WEBPACK_IMPORTED_MODULE_9__["default"],
    xnor: _xnor__WEBPACK_IMPORTED_MODULE_10__["default"],
    xor: _xor__WEBPACK_IMPORTED_MODULE_11__["default"],
});


/***/ }),

/***/ "./node_modules/bitwise/esm/buffer/modify.js":
/*!***************************************************!*\
  !*** ./node_modules/bitwise/esm/buffer/modify.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _byte_write__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../byte/write */ "./node_modules/bitwise/esm/byte/write.js");
/* harmony import */ var _read__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./read */ "./node_modules/bitwise/esm/buffer/read.js");


/**
 * Modifies the buffer's bits to equal newBits starting at bitOffset.
 *
 * @example
 * modifyBuffer(buffer, [0,0,1,0], 0) => buffer was modified
 *
 * @param {Buffer} buffer the buffer to modify
 * @param {Array} bits the bits to insert
 * @param {Number} offset where to start (in bits)
 * @returns {undefined}
 */
/* harmony default export */ __webpack_exports__["default"] = (function (buffer, bits, offset) {
    if (offset === void 0) { offset = 0; }
    var start = Math.floor(offset / 8);
    var end = Math.ceil((offset + bits.length) / 8);
    var subBuffer = buffer.slice(start, end);
    var byteData = Object(_read__WEBPACK_IMPORTED_MODULE_1__["default"])(subBuffer);
    var subOffset = offset % 8;
    for (var i = 0; i < bits.length; i++)
        byteData[subOffset++] = bits[i];
    var length = end - start;
    for (var i_1 = 0; i_1 < length; i_1++)
        subBuffer[i_1] = Object(_byte_write__WEBPACK_IMPORTED_MODULE_0__["default"])(byteData.slice(i_1 * 8, (i_1 + 1) * 8));
});


/***/ }),

/***/ "./node_modules/bitwise/esm/buffer/nand.js":
/*!*************************************************!*\
  !*** ./node_modules/bitwise/esm/buffer/nand.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/**
 * Applies a bitwise NAND to the contents of two buffers. Returns a new buffer.
 *
 * @example
 * bitwise.buffer.nand(a, b, false) => Buffer(a NAND b)
 *
 * @param {Buffer} a first buffer
 * @param {Buffer} b second buffer
 * @param {Boolean} isLooping loop through first buffer
 * @return {Buffer} a NAND b
 */
/* harmony default export */ __webpack_exports__["default"] = (function (a, b, isLooping) {
    if (isLooping === void 0) { isLooping = false; }
    var length = isLooping ? b.length : a.length;
    var result = Buffer.alloc(length);
    for (var i = 0; i < length; i++) {
        var j = isLooping ? i % a.length : i;
        result[i] = ~(a[j] & b[i]);
    }
    return result;
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node-libs-browser/node_modules/buffer/index.js */ "./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./node_modules/bitwise/esm/buffer/nor.js":
/*!************************************************!*\
  !*** ./node_modules/bitwise/esm/buffer/nor.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/**
 * Applies a bitwise NOR to the contents of two buffers. Returns a new buffer.
 *
 * @example
 * bitwise.buffer.nor(a, b, false) => Buffer(a NOR b)
 *
 * @param {Buffer} a first buffer
 * @param {Buffer} b second buffer
 * @param {Boolean} isLooping loop through first buffer
 * @return {Buffer} a NOR b
 */
/* harmony default export */ __webpack_exports__["default"] = (function (a, b, isLooping) {
    if (isLooping === void 0) { isLooping = false; }
    var length = isLooping ? b.length : a.length;
    var result = Buffer.alloc(length);
    for (var i = 0; i < length; i++) {
        var j = isLooping ? i % a.length : i;
        result[i] = ~(a[j] | b[i]);
    }
    return result;
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node-libs-browser/node_modules/buffer/index.js */ "./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./node_modules/bitwise/esm/buffer/not.js":
/*!************************************************!*\
  !*** ./node_modules/bitwise/esm/buffer/not.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/**
 * Applies a bitwise NOT to the contents of a buffer. Returns a new buffer.
 *
 * @example
 * bitwise.buffer.not(buffer) => Buffer(NOT buffer)
 *
 * @param {Buffer} buffer input data
 * @return {Buffer} Buffer(NOT buffer)
 */
/* harmony default export */ __webpack_exports__["default"] = (function (buffer) {
    var result = Buffer.alloc(buffer.length);
    for (var i = 0; i < buffer.length; i++)
        result[i] = ~buffer[i];
    return result;
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node-libs-browser/node_modules/buffer/index.js */ "./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./node_modules/bitwise/esm/buffer/or.js":
/*!***********************************************!*\
  !*** ./node_modules/bitwise/esm/buffer/or.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/**
 * Applies a bitwise OR to the contents of two buffers. Returns a new buffer.
 *
 * @example
 * bitwise.buffer.or(a, b, false) => Buffer(a OR b)
 *
 * @param {Buffer} a first buffer
 * @param {Buffer} b second buffer
 * @param {Boolean} isLooping loop through first buffer
 * @return {Buffer} a OR b
 */
/* harmony default export */ __webpack_exports__["default"] = (function (a, b, isLooping) {
    if (isLooping === void 0) { isLooping = false; }
    var length = isLooping ? b.length : a.length;
    var result = Buffer.alloc(length);
    for (var i = 0; i < length; i++) {
        var j = isLooping ? i % a.length : i;
        result[i] = a[j] | b[i];
    }
    return result;
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node-libs-browser/node_modules/buffer/index.js */ "./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./node_modules/bitwise/esm/buffer/read-int.js":
/*!*****************************************************!*\
  !*** ./node_modules/bitwise/esm/buffer/read-int.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities */ "./node_modules/bitwise/esm/utilities.js");
/* harmony import */ var _bits_not__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bits/not */ "./node_modules/bitwise/esm/bits/not.js");
/* harmony import */ var _read__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./read */ "./node_modules/bitwise/esm/buffer/read.js");



/**
 * Converts a section of a buffer to a signed integer.
 *
 * @example
 * // buffer 11110110
 * readUInt(buffer, 3, 5) => -10
 *
 * @param {Buffer} buffer the buffer to extract information from
 * @param {Number} length the length of the signed integer (in bits)
 * @param {Number} offset where to start (in bits)
 * @return {Number}
 */
/* harmony default export */ __webpack_exports__["default"] = (function (buffer, offset, length) {
    if (offset === void 0) { offset = 0; }
    if (length === void 0) { length = 8; }
    var bits = Object(_read__WEBPACK_IMPORTED_MODULE_2__["default"])(buffer, offset, length);
    if (bits[0] === 0) {
        var result = 0;
        for (var i = 0; i < length; i++)
            if (bits[i])
                result += _utilities__WEBPACK_IMPORTED_MODULE_0__["p2"][length - i - 1];
        return result;
    }
    else {
        var result = -1;
        var inverted = Object(_bits_not__WEBPACK_IMPORTED_MODULE_1__["default"])(bits);
        for (var i = 0; i < length; i++)
            if (inverted[i])
                result -= _utilities__WEBPACK_IMPORTED_MODULE_0__["p2"][length - i - 1];
        return result;
    }
});


/***/ }),

/***/ "./node_modules/bitwise/esm/buffer/read-u-int.js":
/*!*******************************************************!*\
  !*** ./node_modules/bitwise/esm/buffer/read-u-int.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities */ "./node_modules/bitwise/esm/utilities.js");
/* harmony import */ var _read__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./read */ "./node_modules/bitwise/esm/buffer/read.js");


/**
 * Converts a section of a buffer to an unsigned integer.
 *
 * @example
 * // buffer 11110110
 * readUInt(buffer, 3, 5) => 22
 *
 * @param {Buffer} buffer the buffer to extract information from
 * @param {Number} length the length of the unsigned integer (in bits)
 * @param {Number} offset where to start (in bits)
 * @returns {Number}
 */
/* harmony default export */ __webpack_exports__["default"] = (function (buffer, offset, length) {
    if (offset === void 0) { offset = 0; }
    if (length === void 0) { length = 8; }
    var arr = Object(_read__WEBPACK_IMPORTED_MODULE_1__["default"])(buffer, offset, length);
    var result = 0;
    for (var i = 0; i < length; i++)
        result += arr[i] * _utilities__WEBPACK_IMPORTED_MODULE_0__["p2"][length - i - 1];
    return result;
});


/***/ }),

/***/ "./node_modules/bitwise/esm/buffer/read.js":
/*!*************************************************!*\
  !*** ./node_modules/bitwise/esm/buffer/read.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _byte_read__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../byte/read */ "./node_modules/bitwise/esm/byte/read.js");

/**
 * Returns an Array containing bitLength bits starting at bitOffset.
 *
 * @example
 * readBuffer(buffer, 2, 4) => [0,0,1,0]
 *
 * @param {Buffer} buffer the buffer to read
 * @param {Number} offset where to start (in bits)
 * @param {Number} length how many bits to read
 * @returns {Array}
 */
/* harmony default export */ __webpack_exports__["default"] = (function (buffer, offset, length) {
    if (offset === void 0) { offset = 0; }
    if (!length)
        length = buffer.length * 8 - offset;
    var start = Math.floor(offset / 8);
    var bytesToRead = Math.floor(length / 8) + 2;
    var arr = [];
    arr.length = bytesToRead * 8;
    for (var i = 0; i < bytesToRead; i++) {
        var toRead = buffer[start + i];
        if (toRead === undefined)
            continue;
        var bits = Object(_byte_read__WEBPACK_IMPORTED_MODULE_0__["default"])(buffer[start + i]);
        arr[i * 8] = bits[0];
        arr[i * 8 + 1] = bits[1];
        arr[i * 8 + 2] = bits[2];
        arr[i * 8 + 3] = bits[3];
        arr[i * 8 + 4] = bits[4];
        arr[i * 8 + 5] = bits[5];
        arr[i * 8 + 6] = bits[6];
        arr[i * 8 + 7] = bits[7];
    }
    var subOffset = offset % 8;
    return arr.slice(subOffset, subOffset + length);
});


/***/ }),

/***/ "./node_modules/bitwise/esm/buffer/xnor.js":
/*!*************************************************!*\
  !*** ./node_modules/bitwise/esm/buffer/xnor.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/**
 * Applies a bitwise XNOR to the contents of two buffers. Returns a new buffer.
 *
 * @example
 * bitwise.buffer.xnor(a, b, false) => Buffer(a XNOR b)
 *
 * @param {Buffer} a first buffer
 * @param {Buffer} b second buffer
 * @param {Boolean} isLooping loop through first buffer
 * @return {Buffer} a XNOR b
 */
/* harmony default export */ __webpack_exports__["default"] = (function (a, b, isLooping) {
    if (isLooping === void 0) { isLooping = false; }
    var length = isLooping ? b.length : a.length;
    var result = Buffer.alloc(length);
    for (var i = 0; i < length; i++) {
        var j = isLooping ? i % a.length : i;
        result[i] = ~(a[j] ^ b[i]);
    }
    return result;
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node-libs-browser/node_modules/buffer/index.js */ "./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./node_modules/bitwise/esm/buffer/xor.js":
/*!************************************************!*\
  !*** ./node_modules/bitwise/esm/buffer/xor.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/**
 * Applies a bitwise XOR to the contents of two buffers. Returns a new buffer.
 *
 * @example
 * bitwise.buffer.xor(a, b, false) => Buffer(a XOR b)
 *
 * @param {Buffer} a first buffer
 * @param {Buffer} b second buffer
 * @param {Boolean} isLooping loop through first buffer
 * @return {Buffer} a XOR b
 */
/* harmony default export */ __webpack_exports__["default"] = (function (a, b, isLooping) {
    if (isLooping === void 0) { isLooping = false; }
    var length = isLooping ? b.length : a.length;
    var result = Buffer.alloc(length);
    for (var i = 0; i < length; i++) {
        var j = isLooping ? i % a.length : i;
        result[i] = a[j] ^ b[i];
    }
    return result;
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node-libs-browser/node_modules/buffer/index.js */ "./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./node_modules/bitwise/esm/byte/index.js":
/*!************************************************!*\
  !*** ./node_modules/bitwise/esm/byte/index.js ***!
  \************************************************/
/*! exports provided: read, write, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _read__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./read */ "./node_modules/bitwise/esm/byte/read.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "read", function() { return _read__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _write__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./write */ "./node_modules/bitwise/esm/byte/write.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "write", function() { return _write__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/* harmony default export */ __webpack_exports__["default"] = ({ read: _read__WEBPACK_IMPORTED_MODULE_0__["default"], write: _write__WEBPACK_IMPORTED_MODULE_1__["default"] });


/***/ }),

/***/ "./node_modules/bitwise/esm/byte/read.js":
/*!***********************************************!*\
  !*** ./node_modules/bitwise/esm/byte/read.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Returns an Array of length 8 containing the read bits.
 *
 * @example
 * byte.read(42) => [0,0,1,0,1,0,1,0]
 *
 * @param {Number} byte one byte
 * @return {Array}
 */
/* harmony default export */ __webpack_exports__["default"] = (function (byte) {
    if (byte > 255 || byte < 0 || ~~byte !== byte)
        throw new RangeError('invalid byte');
    var result = [0, 0, 0, 0, 0, 0, 0, 0];
    for (var i = 0; i < 8; i++)
        result[7 - i] = ((byte >> i) & 1);
    return result;
});


/***/ }),

/***/ "./node_modules/bitwise/esm/byte/write.js":
/*!************************************************!*\
  !*** ./node_modules/bitwise/esm/byte/write.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Returns a UInt8 (0-255) which equals the given bits.
 *
 * @example
 * byte.write([0,0,1,0,1,0,1,0]) => 42
 *
 * @param {Array} byte 8 bits
 * @return {Number} 8-bit unsigned integer
 */
/* harmony default export */ __webpack_exports__["default"] = (function (byte) {
    if (!Array.isArray(byte) || byte.length !== 8)
        throw new RangeError('invalid array length');
    var data = 0;
    for (var i = 0; i < 8; i++)
        if (byte[7 - i])
            data |= 1 << i;
    return data;
});


/***/ }),

/***/ "./node_modules/bitwise/esm/index.js":
/*!*******************************************!*\
  !*** ./node_modules/bitwise/esm/index.js ***!
  \*******************************************/
/*! exports provided: bits, buffer, byte, integer, nibble, string, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bits */ "./node_modules/bitwise/esm/bits/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bits", function() { return _bits__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _buffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buffer */ "./node_modules/bitwise/esm/buffer/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buffer", function() { return _buffer__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _byte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./byte */ "./node_modules/bitwise/esm/byte/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "byte", function() { return _byte__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _integer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./integer */ "./node_modules/bitwise/esm/integer/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "integer", function() { return _integer__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _nibble__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nibble */ "./node_modules/bitwise/esm/nibble/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nibble", function() { return _nibble__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./string */ "./node_modules/bitwise/esm/string/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "string", function() { return _string__WEBPACK_IMPORTED_MODULE_5__["default"]; });








var bitwise = { bits: _bits__WEBPACK_IMPORTED_MODULE_0__["default"], buffer: _buffer__WEBPACK_IMPORTED_MODULE_1__["default"], byte: _byte__WEBPACK_IMPORTED_MODULE_2__["default"], integer: _integer__WEBPACK_IMPORTED_MODULE_3__["default"], nibble: _nibble__WEBPACK_IMPORTED_MODULE_4__["default"], string: _string__WEBPACK_IMPORTED_MODULE_5__["default"] };
/* harmony default export */ __webpack_exports__["default"] = (bitwise);


/***/ }),

/***/ "./node_modules/bitwise/esm/integer/get-bit.js":
/*!*****************************************************!*\
  !*** ./node_modules/bitwise/esm/integer/get-bit.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Gets the value of a specific bit.
 * @example bitwise.integer.getBit(128, 7) => 1
 * @param {Integer} int32 input number
 * @param {Integer} position bit's position
 * @returns {Integer} bit's value
 */
/* harmony default export */ __webpack_exports__["default"] = (function (int32, position) {
    return ((int32 >> position) & 1);
});


/***/ }),

/***/ "./node_modules/bitwise/esm/integer/index.js":
/*!***************************************************!*\
  !*** ./node_modules/bitwise/esm/integer/index.js ***!
  \***************************************************/
/*! exports provided: getBit, setBit, toggleBit, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _get_bit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-bit */ "./node_modules/bitwise/esm/integer/get-bit.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBit", function() { return _get_bit__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _set_bit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./set-bit */ "./node_modules/bitwise/esm/integer/set-bit.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setBit", function() { return _set_bit__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _toggle_bit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toggle-bit */ "./node_modules/bitwise/esm/integer/toggle-bit.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toggleBit", function() { return _toggle_bit__WEBPACK_IMPORTED_MODULE_2__["default"]; });





/* harmony default export */ __webpack_exports__["default"] = ({ getBit: _get_bit__WEBPACK_IMPORTED_MODULE_0__["default"], setBit: _set_bit__WEBPACK_IMPORTED_MODULE_1__["default"], toggleBit: _toggle_bit__WEBPACK_IMPORTED_MODULE_2__["default"] });


/***/ }),

/***/ "./node_modules/bitwise/esm/integer/set-bit.js":
/*!*****************************************************!*\
  !*** ./node_modules/bitwise/esm/integer/set-bit.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Sets the value of a specific bit.
 * @example bitwise.integer.set(128, 7, 0) => 0
 * @param {Integer} int32 input number
 * @param {Integer} position bit’s position
 * @param {Integer} value bit’s new value
 * @returns {Integer} resulting number
 */
/* harmony default export */ __webpack_exports__["default"] = (function (int32, position, value) {
    return (value === 1 ? int32 | (1 << position) : int32 & ~(1 << position));
});


/***/ }),

/***/ "./node_modules/bitwise/esm/integer/toggle-bit.js":
/*!********************************************************!*\
  !*** ./node_modules/bitwise/esm/integer/toggle-bit.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Toggles a specific bit.
 * @example bitwise.integer.getBit(128, 7) => 0
 * @param {Integer} int32 input number
 * @param {Integer} position bit’s position
 * @returns {Integer} updated number
 */
/* harmony default export */ __webpack_exports__["default"] = (function (int32, position) { return int32 ^ (1 << position); });


/***/ }),

/***/ "./node_modules/bitwise/esm/nibble/index.js":
/*!**************************************************!*\
  !*** ./node_modules/bitwise/esm/nibble/index.js ***!
  \**************************************************/
/*! exports provided: read, write, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _read__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./read */ "./node_modules/bitwise/esm/nibble/read.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "read", function() { return _read__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _write__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./write */ "./node_modules/bitwise/esm/nibble/write.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "write", function() { return _write__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/* harmony default export */ __webpack_exports__["default"] = ({ read: _read__WEBPACK_IMPORTED_MODULE_0__["default"], write: _write__WEBPACK_IMPORTED_MODULE_1__["default"] });


/***/ }),

/***/ "./node_modules/bitwise/esm/nibble/read.js":
/*!*************************************************!*\
  !*** ./node_modules/bitwise/esm/nibble/read.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Returns an Array of length 8 containing the read bits.
 *
 * @example
 * nibble.read(15) => [1,1,1,1]
 *
 * @param {Number} nibble one nibble
 * @return {Array}
 */
/* harmony default export */ __webpack_exports__["default"] = (function (nibble) {
    if (nibble < 16 && nibble >= 0 && Math.floor(nibble) === nibble) {
        var result = [0, 0, 0, 0];
        for (var i = 0; i < 4; i++)
            result[3 - i] = ((nibble >> i) & 1);
        return result;
    }
    else
        throw new RangeError('invalid array length');
});


/***/ }),

/***/ "./node_modules/bitwise/esm/nibble/write.js":
/*!**************************************************!*\
  !*** ./node_modules/bitwise/esm/nibble/write.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Returns a Nibble (0-15) which equals the given bits.
 *
 * @example
 * byte.write([1,0,1,0]) => 10
 *
 * @param {Array} nibble 4-bit unsigned integer
 * @return {Number}
 */
/* harmony default export */ __webpack_exports__["default"] = (function (nibble) {
    if (!Array.isArray(nibble) || nibble.length !== 4)
        throw new RangeError('invalid array length');
    var result = 0;
    for (var i = 0; i < 4; i++)
        if (nibble[3 - i])
            result |= 1 << i;
    return result;
});


/***/ }),

/***/ "./node_modules/bitwise/esm/string/index.js":
/*!**************************************************!*\
  !*** ./node_modules/bitwise/esm/string/index.js ***!
  \**************************************************/
/*! exports provided: toBits, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _to_bits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./to-bits */ "./node_modules/bitwise/esm/string/to-bits.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toBits", function() { return _to_bits__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/* harmony default export */ __webpack_exports__["default"] = ({ toBits: _to_bits__WEBPACK_IMPORTED_MODULE_0__["default"] });


/***/ }),

/***/ "./node_modules/bitwise/esm/string/to-bits.js":
/*!****************************************************!*\
  !*** ./node_modules/bitwise/esm/string/to-bits.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Converts a string into an array of bits. Ignores all characters except 1 and 0.
 *
 * @example
 * toBits('10 10 12$%_.0') => [1,0,1,0,1,0]
 *
 * @param {String} string the string to convert
 * @returns {Array} resulting array of bits
 */
/* harmony default export */ __webpack_exports__["default"] = (function (string) {
    var result = [];
    for (var i = 0; i < string.length; i++) {
        if (string[i] === '1')
            result.push(1);
        else if (string[i] === '0')
            result.push(0);
    }
    return result;
});


/***/ }),

/***/ "./node_modules/bitwise/esm/utilities.js":
/*!***********************************************!*\
  !*** ./node_modules/bitwise/esm/utilities.js ***!
  \***********************************************/
/*! exports provided: p2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p2", function() { return p2; });
// 32-bit powers of two wouldn't be possible with <<
var p2 = [];
for (var i = 0; i < 32; i++)
    p2[i] = Math.pow(2, i);


/***/ }),

/***/ "./node_modules/bs58/index.js":
/*!************************************!*\
  !*** ./node_modules/bs58/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var basex = __webpack_require__(/*! base-x */ "./node_modules/base-x/src/index.js")
var ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'

module.exports = basex(ALPHABET)


/***/ }),

/***/ "./node_modules/bs58check/base.js":
/*!****************************************!*\
  !*** ./node_modules/bs58check/base.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var base58 = __webpack_require__(/*! bs58 */ "./node_modules/bs58/index.js")
var Buffer = __webpack_require__(/*! safe-buffer */ "./node_modules/safe-buffer/index.js").Buffer

module.exports = function (checksumFn) {
  // Encode a buffer as a base58-check encoded string
  function encode (payload) {
    var checksum = checksumFn(payload)

    return base58.encode(Buffer.concat([
      payload,
      checksum
    ], payload.length + 4))
  }

  function decodeRaw (buffer) {
    var payload = buffer.slice(0, -4)
    var checksum = buffer.slice(-4)
    var newChecksum = checksumFn(payload)

    if (checksum[0] ^ newChecksum[0] |
        checksum[1] ^ newChecksum[1] |
        checksum[2] ^ newChecksum[2] |
        checksum[3] ^ newChecksum[3]) return

    return payload
  }

  // Decode a base58-check encoded string to a buffer, no result if checksum is wrong
  function decodeUnsafe (string) {
    var buffer = base58.decodeUnsafe(string)
    if (!buffer) return

    return decodeRaw(buffer)
  }

  function decode (string) {
    var buffer = base58.decode(string)
    var payload = decodeRaw(buffer, checksumFn)
    if (!payload) throw new Error('Invalid checksum')
    return payload
  }

  return {
    encode: encode,
    decode: decode,
    decodeUnsafe: decodeUnsafe
  }
}


/***/ }),

/***/ "./node_modules/bs58check/index.js":
/*!*****************************************!*\
  !*** ./node_modules/bs58check/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createHash = __webpack_require__(/*! create-hash */ "./node_modules/create-hash/browser.js")
var bs58checkBase = __webpack_require__(/*! ./base */ "./node_modules/bs58check/base.js")

// SHA256(SHA256(buffer))
function sha256x2 (buffer) {
  var tmp = createHash('sha256').update(buffer).digest()
  return createHash('sha256').update(tmp).digest()
}

module.exports = bs58checkBase(sha256x2)


/***/ }),

/***/ "./node_modules/component-emitter/index.js":
/*!*************************************************!*\
  !*** ./node_modules/component-emitter/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/**
 * Expose `Emitter`.
 */

if (true) {
  module.exports = Emitter;
}

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }

  // Remove event specific arrays for event types that no
  // one is subscribed for to avoid memory leak.
  if (callbacks.length === 0) {
    delete this._callbacks['$' + event];
  }

  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};

  var args = new Array(arguments.length - 1)
    , callbacks = this._callbacks['$' + event];

  for (var i = 1; i < arguments.length; i++) {
    args[i - 1] = arguments[i];
  }

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};


/***/ }),

/***/ "./node_modules/crc-32/crc32.js":
/*!**************************************!*\
  !*** ./node_modules/crc-32/crc32.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* crc32.js (C) 2014-present SheetJS -- http://sheetjs.com */
/* vim: set ts=2: */
/*exported CRC32 */
var CRC32;
(function (factory) {
	/*jshint ignore:start */
	/*eslint-disable */
	if(typeof DO_NOT_EXPORT_CRC === 'undefined') {
		if(true) {
			factory(exports);
		} else {}
	} else {
		factory(CRC32 = {});
	}
	/*eslint-enable */
	/*jshint ignore:end */
}(function(CRC32) {
CRC32.version = '1.2.0';
/* see perf/crc32table.js */
/*global Int32Array */
function signed_crc_table() {
	var c = 0, table = new Array(256);

	for(var n =0; n != 256; ++n){
		c = n;
		c = ((c&1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));
		c = ((c&1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));
		c = ((c&1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));
		c = ((c&1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));
		c = ((c&1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));
		c = ((c&1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));
		c = ((c&1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));
		c = ((c&1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));
		table[n] = c;
	}

	return typeof Int32Array !== 'undefined' ? new Int32Array(table) : table;
}

var T = signed_crc_table();
function crc32_bstr(bstr, seed) {
	var C = seed ^ -1, L = bstr.length - 1;
	for(var i = 0; i < L;) {
		C = (C>>>8) ^ T[(C^bstr.charCodeAt(i++))&0xFF];
		C = (C>>>8) ^ T[(C^bstr.charCodeAt(i++))&0xFF];
	}
	if(i === L) C = (C>>>8) ^ T[(C ^ bstr.charCodeAt(i))&0xFF];
	return C ^ -1;
}

function crc32_buf(buf, seed) {
	if(buf.length > 10000) return crc32_buf_8(buf, seed);
	var C = seed ^ -1, L = buf.length - 3;
	for(var i = 0; i < L;) {
		C = (C>>>8) ^ T[(C^buf[i++])&0xFF];
		C = (C>>>8) ^ T[(C^buf[i++])&0xFF];
		C = (C>>>8) ^ T[(C^buf[i++])&0xFF];
		C = (C>>>8) ^ T[(C^buf[i++])&0xFF];
	}
	while(i < L+3) C = (C>>>8) ^ T[(C^buf[i++])&0xFF];
	return C ^ -1;
}

function crc32_buf_8(buf, seed) {
	var C = seed ^ -1, L = buf.length - 7;
	for(var i = 0; i < L;) {
		C = (C>>>8) ^ T[(C^buf[i++])&0xFF];
		C = (C>>>8) ^ T[(C^buf[i++])&0xFF];
		C = (C>>>8) ^ T[(C^buf[i++])&0xFF];
		C = (C>>>8) ^ T[(C^buf[i++])&0xFF];
		C = (C>>>8) ^ T[(C^buf[i++])&0xFF];
		C = (C>>>8) ^ T[(C^buf[i++])&0xFF];
		C = (C>>>8) ^ T[(C^buf[i++])&0xFF];
		C = (C>>>8) ^ T[(C^buf[i++])&0xFF];
	}
	while(i < L+7) C = (C>>>8) ^ T[(C^buf[i++])&0xFF];
	return C ^ -1;
}

function crc32_str(str, seed) {
	var C = seed ^ -1;
	for(var i = 0, L=str.length, c, d; i < L;) {
		c = str.charCodeAt(i++);
		if(c < 0x80) {
			C = (C>>>8) ^ T[(C ^ c)&0xFF];
		} else if(c < 0x800) {
			C = (C>>>8) ^ T[(C ^ (192|((c>>6)&31)))&0xFF];
			C = (C>>>8) ^ T[(C ^ (128|(c&63)))&0xFF];
		} else if(c >= 0xD800 && c < 0xE000) {
			c = (c&1023)+64; d = str.charCodeAt(i++)&1023;
			C = (C>>>8) ^ T[(C ^ (240|((c>>8)&7)))&0xFF];
			C = (C>>>8) ^ T[(C ^ (128|((c>>2)&63)))&0xFF];
			C = (C>>>8) ^ T[(C ^ (128|((d>>6)&15)|((c&3)<<4)))&0xFF];
			C = (C>>>8) ^ T[(C ^ (128|(d&63)))&0xFF];
		} else {
			C = (C>>>8) ^ T[(C ^ (224|((c>>12)&15)))&0xFF];
			C = (C>>>8) ^ T[(C ^ (128|((c>>6)&63)))&0xFF];
			C = (C>>>8) ^ T[(C ^ (128|(c&63)))&0xFF];
		}
	}
	return C ^ -1;
}
CRC32.table = T;
// $FlowIgnore
CRC32.bstr = crc32_bstr;
// $FlowIgnore
CRC32.buf = crc32_buf;
// $FlowIgnore
CRC32.str = crc32_str;
}));


/***/ }),

/***/ "./node_modules/eth-lattice-keyring/index.js":
/*!***************************************************!*\
  !*** ./node_modules/eth-lattice-keyring/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {const crypto = __webpack_require__(/*! crypto */ "./node_modules/crypto-browserify/index.js");
const EventEmitter = __webpack_require__(/*! events */ "./node_modules/events/events.js").EventEmitter;
const SDK = __webpack_require__(/*! gridplus-sdk */ "./node_modules/gridplus-sdk/index.js");
const keyringType = 'Lattice Hardware';
const HARDENED_OFFSET = 0x80000000;
const PER_PAGE = 5;
const CLOSE_CODE = -1000;

class LatticeKeyring extends EventEmitter {
  constructor (opts={}) {
    super()
    this.type = keyringType
    this._resetDefaults();
    this.deserialize(opts);
  }

  //-------------------------------------------------------------------
  // Keyring API (per `https://github.com/MetaMask/eth-simple-keyring`)
  //-------------------------------------------------------------------
  deserialize (opts = {}) {
    if (opts.creds)
      this.creds = opts.creds;
    if (opts.accounts)
      this.accounts = opts.accounts;
    if (opts.walletUID)
      this.walletUID = opts.walletUID;
    if (opts.name)
      this.name = opts.name;
    if (opts.network)
      this.network = opts.network;
    return Promise.resolve()
  }

  serialize() {
    return Promise.resolve({
      creds: this.creds,
      accounts: this.accounts,
      walletUID: this.walletUID,
      name: this.name,
      network: this.network,
    })
  }

  isUnlocked () {
    return this._hasCreds() && this._hasSession()
  }

  setHdPath() {
    console.warn("setHdPath not implemented.")
    return;
  }

  // Initialize a session with the Lattice1 device using the GridPlus SDK
  unlock(updateData=true) {
    return new Promise((resolve, reject) => {
      this._getCreds()
      .then((creds) => {
        if (creds) {
          this.creds.deviceID = creds.deviceID;
          this.creds.password = creds.password;
        }
        return this._initSession();
      })
      .then(() => {
        return this._connect(updateData);
      })
      .then(() => {
        return resolve('Unlocked');
      })
      .catch((err) => {
        return reject(Error(err));
      })
    })
  }

  // Add addresses to the local store and return the full result
  addAccounts(n=1) {
    return new Promise((resolve, reject) => {
      if (n === CLOSE_CODE) {
        // Special case: use a code to forget the device. 
        // (This function is overloaded due to constraints upstream)
        this.forgetDevice();
        return resolve([]);
      } else if (n <= 0) {
        // Avoid non-positive numbers.
        return reject('Number of accounts to add must be a positive number.');
      } else {
        // Normal behavior: establish the connection and fetch addresses.
        this.unlock()
        .then(() => {
          return this._fetchAddresses(n, this.unlockedAccount)
        })
        .then((addrs) => {
          // Splice the new account(s) into `this.accounts`
          this.accounts.splice(this.unlockedAccount, n);
          this.accounts.splice(this.unlockedAccount, 0, ...addrs);
          return resolve(this.accounts);
        })
        .catch((err) => {
          return reject(err);
        })
      }
    })
  }

  // Return the local store of addresses
  getAccounts() {
    return Promise.resolve(this.accounts ? this.accounts.slice() : [].slice());
  }

  signTransaction (address, tx) {
    return new Promise((resolve, reject) => {
      this._unlockAndFindAccount(address)
      .then((addrIdx) => {
        // Build the Lattice request data and make request
        const txData = {
          chainId: tx.getChainId(),
          nonce: Number(`0x${tx.nonce.toString('hex')}`) || 0,
          gasPrice: Number(`0x${tx.gasPrice.toString('hex')}`),
          gasLimit: Number(`0x${tx.gasLimit.toString('hex')}`),
          to: `0x${tx.to.toString('hex')}`,
          value: Number(`0x${tx.value.toString('hex')}`),
          data: tx.data.length === 0 ? null : `0x${tx.data.toString('hex')}`,
          signerPath: [HARDENED_OFFSET+44, HARDENED_OFFSET+60, HARDENED_OFFSET, 0, addrIdx],
        }
        return this._signTxData(txData)
      })
      .then((signedTx) => {
        // Add the sig params. `signedTx = { sig: { v, r, s }, tx, txHash}`
        if (!signedTx.sig || !signedTx.sig.v || !signedTx.sig.r || !signedTx.sig.s)
          return reject(Error('No signature returned'));
        tx.v = signedTx.sig.v;
        tx.r = Buffer.from(signedTx.sig.r, 'hex');
        tx.s = Buffer.from(signedTx.sig.s, 'hex');
        return resolve(tx);
      })
      .catch((err) => {
        return reject(Error(err));
      })
    })
  }

  signPersonalMessage(address, msg) {
    return this.signMessage(address, { payload: msg, protocol: 'signPersonal' });
  }

  signMessage(address, msg) {
    return new Promise((resolve, reject) => {
      this._unlockAndFindAccount(address)
      .then((addrIdx) => {
        const { payload, protocol } = msg;
        if (!payload || !protocol)
          return reject('`payload` and `protocol` fields must be included in the request');
        const req = {
          currency: 'ETH_MSG',
          data: {
            protocol,
            payload,
            signerPath: [HARDENED_OFFSET+44, HARDENED_OFFSET+60, HARDENED_OFFSET, 0, addrIdx],
          }
        }
        if (!this._hasSession())
          return reject('No SDK session started. Cannot sign transaction.')
        this.sdkSession.sign(req, (err, res) => {
          if (err)
            return reject(err);
          if (!res.sig)
            return reject('No signature returned');
          let v = (res.sig.v - 27).toString(16);
          if (v.length < 2)
            v = `0${v}`;
          return resolve(`0x${res.sig.r}${res.sig.s}${v}`);
        })
      })
    })
  }

  exportAccount(address) {
    return Promise.reject(Error('exportAccount not supported by this device'))
  }

  removeAccount(address) {
    // We only allow one account at a time, so removing any account
    // should result in a state reset. The user will need to reconnect
    // to the Lattice
    this.forgetDevice();
  }

  getFirstPage() {
    this.page = 0;
    return this._getPage(1);
  }

  getNextPage () {
    return this.getFirstPage();
  }

  getPreviousPage () {
    return this.getFirstPage();
  }

  setAccountToUnlock (index) {
    this.unlockedAccount = parseInt(index, 10)
  }

  forgetDevice () {
    this._resetDefaults();
  }

  //-------------------------------------------------------------------
  // Internal methods and interface to SDK
  //-------------------------------------------------------------------
  _unlockAndFindAccount(address) {
    return new Promise((resolve, reject) => {
      // NOTE: We are passing `false` here because we do NOT want
      // state data to be updated as a result of a transaction request.
      // It is possible the user inserted or removed a SafeCard and
      // will not be able to sign this transaction. If that is the
      // case, we just want to return an error message
      this.unlock(false)
      .then(() => {
        return this.getAccounts()
      })
      .then((addrs) => {
        // Find the signer in our current set of accounts
        // If we can't find it, return an error
        let addrIdx = null;
        addrs.forEach((addr, i) => {
          if (address.toLowerCase() === addr.toLowerCase())
            addrIdx = i;
        })
        if (addrIdx === null)
          return reject('Signer not present');
        return resolve(addrIdx);
      })
      .catch((err) => {
        return reject(err);
      })
    })
  }


  _resetDefaults() {
    this.accounts = [];
    this.isLocked = true;
    this.creds = {
      deviceID: null,
      password: null,
    };
    this.walletUID = null;
    this.sdkSession = null;
    this.page = 0;
    this.unlockedAccount = 0;
    this.network = null;
  }

  _getCreds() {
    return new Promise((resolve, reject) => {
      // We only need to setup if we don't have a deviceID
      if (this._hasCreds())
        return resolve();

      // If we are not aware of what Lattice we should be talking to,
      // we need to open a window that lets the user go through the
      // pairing or connection process.
      const name = this.name ? this.name : 'Unknown'
      let base = 'https://wallet.gridplus.io';
      if (this.network && this.network !== 'mainnet')
        base = 'https://gridplus-web-wallet-dev.herokuapp.com';
      let url = `${base}?keyring=${name}`;
      if (this.network)
        url += `&network=${this.network}`
      const popup = window.open(url);
      popup.postMessage('GET_LATTICE_CREDS', base);

      // PostMessage handler
      function receiveMessage(event) {
        // Ensure origin
        if (event.origin !== base)
          return;
        // Parse response data
        try {
          const data = JSON.parse(event.data);
          if (!data.deviceID || !data.password)
            return reject(Error('Invalid credentials returned from Lattice.'));
          return resolve(data);
        } catch (err) {
          return reject(err);
        }
      }
      window.addEventListener("message", receiveMessage, false);
    })
  }

  // [re]connect to the Lattice. This should be done frequently to ensure
  // the expected wallet UID is still the one active in the Lattice.
  // This will handle SafeCard insertion/removal events.
  // updateData - true if you want to overwrite walletUID and accounts in
  //              the event that we find we are not synced.
  //              If left false and we notice a new walletUID, we will
  //              return an error.
  _connect(updateData) {
    return new Promise((resolve, reject) => {
      this.sdkSession.connect(this.creds.deviceID, (err) => {
        if (err)
          return reject(err);
        // Save the current wallet UID
        const activeWallet = this.sdkSession.getActiveWallet();
        if (!activeWallet || !activeWallet.uid)
          return reject("No active wallet");
        const newUID = activeWallet.uid.toString('hex');
        // If we fetched a walletUID that does not match our current one,
        // reset accounts and update the known UID
        if (newUID != this.walletUID) {
          // If we don't want to update data, return an error
          if (updateData === false)
            return reject('Wallet has changed! Please reconnect.')
          
          // By default we should clear out accounts and update with
          // the new walletUID. We should NOT fill in the accounts yet,
          // as we reserve that functionality to `addAccounts`
          this.accounts = [];
          this.walletUID = newUID;
        }
        return resolve();
      });
    })
  }

  _initSession() {
    return new Promise((resolve, reject) => {
      if (this._hasSession())
        return resolve();
      try {
        let url = 'https://signing.gridpl.us';
        if (this.network && this.network !== 'mainnet')
          url = 'https://signing.staging-gridpl.us'
        const setupData = {
          name: this.name,
          baseUrl: url,
          crypto,
          timeout: 120000,
          privKey: this._genSessionKey(),
          network: this.network
        }
        this.sdkSession = new SDK.Client(setupData);
        return resolve();
      } catch (err) {
        return reject(err);
      }
    })
  }

  _fetchAddresses(n=1, i=0) {
    return new Promise((resolve, reject) => {
      if (!this._hasSession())
        return reject('No SDK session started. Cannot fetch addresses.')

      // The Lattice does not allow for us to skip indices.
      if (i > this.accounts.length)
        return reject(`Requested address is out of bounds. You may only request index <${this.accounts.length}`)

      // If we have already cached the address(es), we don't need to do it again
      if (this.accounts.length > i)
        return resolve(this.accounts.slice(i, n));
      
      // Make the request to get the requested address
      const addrData = { 
        currency: 'ETH', 
        startPath: [HARDENED_OFFSET+44, HARDENED_OFFSET+60, HARDENED_OFFSET, 0, i], 
        n, // Only request one at a time. This module only supports ETH, so no gap limits
      }
      this.sdkSession.getAddresses(addrData, (err, addrs) => {
        if (err)
          return reject(Error(`Error getting addresses: ${err}`));
        // Sanity check -- if this returned 0 addresses, handle the error
        if (addrs.length < 1)
          return reject('No addresses returned');
        // Return the addresses we fetched *without* updating state
        return resolve(addrs);
      })
    })
  }

  _signTxData(txData) {
    return new Promise((resolve, reject) => {
      if (!this._hasSession())
        return reject('No SDK session started. Cannot sign transaction.')
      this.sdkSession.sign({ currency: 'ETH', data: txData }, (err, res) => {
        if (err)
          return reject(err);
        if (!res.tx)
          return reject('No transaction payload returned.');
        return resolve(res)
      })
    })
  }

  _getPage(increment=1) {
    return new Promise((resolve, reject) => {
      this.page += increment;
      if (this.page <= 0)
        this.page = 1;
      const start = PER_PAGE * (this.page - 1);
      const to = PER_PAGE * this.page;

      this.unlock()
      .then(() => {
        // V1: We will only support export of one (the first) address
        return this._fetchAddresses(1, 0);
        //-----------
      })
      .then((addrs) => {
        // Build some account objects from the addresses
        const localAccounts = [];
        addrs.forEach((addr, i) => {
          localAccounts.push({
            address: addr,
            balance: null,
            index: start + i,
          })
        })
        return resolve(localAccounts);
      })
      .catch((err) => {
        return reject(err);
      })
    })
  }

  _hasCreds() {
    return this.creds.deviceID !== null && this.creds.password !== null && this.name;
  }

  _hasSession() {
    return this.sdkSession && this.walletUID;
  }

  _genSessionKey() {
    if (!this._hasCreds())
      throw new Error('No credentials -- cannot create session key!');
    const buf = Buffer.concat([
      Buffer.from(this.creds.password), 
      Buffer.from(this.creds.deviceID), 
      Buffer.from(this.name)
    ])
    return crypto.createHash('sha256').update(buf).digest();
  }

}

LatticeKeyring.type = keyringType
module.exports = LatticeKeyring;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node-libs-browser/node_modules/buffer/index.js */ "./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./node_modules/gridplus-sdk/index.js":
/*!********************************************!*\
  !*** ./node_modules/gridplus-sdk/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Client = __webpack_require__(/*! ./src/client */ "./node_modules/gridplus-sdk/src/client.js");

module.exports = {
  Client,
};


/***/ }),

/***/ "./node_modules/gridplus-sdk/node_modules/js-sha3/src/sha3.js":
/*!********************************************************************!*\
  !*** ./node_modules/gridplus-sdk/node_modules/js-sha3/src/sha3.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * [js-sha3]{@link https://github.com/emn178/js-sha3}
 *
 * @version 0.8.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2015-2018
 * @license MIT
 */
/*jslint bitwise: true */
(function () {
  'use strict';

  var INPUT_ERROR = 'input is invalid type';
  var FINALIZE_ERROR = 'finalize already called';
  var WINDOW = typeof window === 'object';
  var root = WINDOW ? window : {};
  if (root.JS_SHA3_NO_WINDOW) {
    WINDOW = false;
  }
  var WEB_WORKER = !WINDOW && typeof self === 'object';
  var NODE_JS = !root.JS_SHA3_NO_NODE_JS && typeof process === 'object' && process.versions && process.versions.node;
  if (NODE_JS) {
    root = global;
  } else if (WEB_WORKER) {
    root = self;
  }
  var COMMON_JS = !root.JS_SHA3_NO_COMMON_JS && typeof module === 'object' && module.exports;
  var AMD =  true && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js");
  var ARRAY_BUFFER = !root.JS_SHA3_NO_ARRAY_BUFFER && typeof ArrayBuffer !== 'undefined';
  var HEX_CHARS = '0123456789abcdef'.split('');
  var SHAKE_PADDING = [31, 7936, 2031616, 520093696];
  var CSHAKE_PADDING = [4, 1024, 262144, 67108864];
  var KECCAK_PADDING = [1, 256, 65536, 16777216];
  var PADDING = [6, 1536, 393216, 100663296];
  var SHIFT = [0, 8, 16, 24];
  var RC = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649,
    0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0,
    2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771,
    2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648,
    2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648];
  var BITS = [224, 256, 384, 512];
  var SHAKE_BITS = [128, 256];
  var OUTPUT_TYPES = ['hex', 'buffer', 'arrayBuffer', 'array', 'digest'];
  var CSHAKE_BYTEPAD = {
    '128': 168,
    '256': 136
  };

  if (root.JS_SHA3_NO_NODE_JS || !Array.isArray) {
    Array.isArray = function (obj) {
      return Object.prototype.toString.call(obj) === '[object Array]';
    };
  }

  if (ARRAY_BUFFER && (root.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) {
    ArrayBuffer.isView = function (obj) {
      return typeof obj === 'object' && obj.buffer && obj.buffer.constructor === ArrayBuffer;
    };
  }

  var createOutputMethod = function (bits, padding, outputType) {
    return function (message) {
      return new Keccak(bits, padding, bits).update(message)[outputType]();
    };
  };

  var createShakeOutputMethod = function (bits, padding, outputType) {
    return function (message, outputBits) {
      return new Keccak(bits, padding, outputBits).update(message)[outputType]();
    };
  };

  var createCshakeOutputMethod = function (bits, padding, outputType) {
    return function (message, outputBits, n, s) {
      return methods['cshake' + bits].update(message, outputBits, n, s)[outputType]();
    };
  };

  var createKmacOutputMethod = function (bits, padding, outputType) {
    return function (key, message, outputBits, s) {
      return methods['kmac' + bits].update(key, message, outputBits, s)[outputType]();
    };
  };

  var createOutputMethods = function (method, createMethod, bits, padding) {
    for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
      var type = OUTPUT_TYPES[i];
      method[type] = createMethod(bits, padding, type);
    }
    return method;
  };

  var createMethod = function (bits, padding) {
    var method = createOutputMethod(bits, padding, 'hex');
    method.create = function () {
      return new Keccak(bits, padding, bits);
    };
    method.update = function (message) {
      return method.create().update(message);
    };
    return createOutputMethods(method, createOutputMethod, bits, padding);
  };

  var createShakeMethod = function (bits, padding) {
    var method = createShakeOutputMethod(bits, padding, 'hex');
    method.create = function (outputBits) {
      return new Keccak(bits, padding, outputBits);
    };
    method.update = function (message, outputBits) {
      return method.create(outputBits).update(message);
    };
    return createOutputMethods(method, createShakeOutputMethod, bits, padding);
  };

  var createCshakeMethod = function (bits, padding) {
    var w = CSHAKE_BYTEPAD[bits];
    var method = createCshakeOutputMethod(bits, padding, 'hex');
    method.create = function (outputBits, n, s) {
      if (!n && !s) {
        return methods['shake' + bits].create(outputBits);
      } else {
        return new Keccak(bits, padding, outputBits).bytepad([n, s], w);
      }
    };
    method.update = function (message, outputBits, n, s) {
      return method.create(outputBits, n, s).update(message);
    };
    return createOutputMethods(method, createCshakeOutputMethod, bits, padding);
  };

  var createKmacMethod = function (bits, padding) {
    var w = CSHAKE_BYTEPAD[bits];
    var method = createKmacOutputMethod(bits, padding, 'hex');
    method.create = function (key, outputBits, s) {
      return new Kmac(bits, padding, outputBits).bytepad(['KMAC', s], w).bytepad([key], w);
    };
    method.update = function (key, message, outputBits, s) {
      return method.create(key, outputBits, s).update(message);
    };
    return createOutputMethods(method, createKmacOutputMethod, bits, padding);
  };

  var algorithms = [
    { name: 'keccak', padding: KECCAK_PADDING, bits: BITS, createMethod: createMethod },
    { name: 'sha3', padding: PADDING, bits: BITS, createMethod: createMethod },
    { name: 'shake', padding: SHAKE_PADDING, bits: SHAKE_BITS, createMethod: createShakeMethod },
    { name: 'cshake', padding: CSHAKE_PADDING, bits: SHAKE_BITS, createMethod: createCshakeMethod },
    { name: 'kmac', padding: CSHAKE_PADDING, bits: SHAKE_BITS, createMethod: createKmacMethod }
  ];

  var methods = {}, methodNames = [];

  for (var i = 0; i < algorithms.length; ++i) {
    var algorithm = algorithms[i];
    var bits = algorithm.bits;
    for (var j = 0; j < bits.length; ++j) {
      var methodName = algorithm.name + '_' + bits[j];
      methodNames.push(methodName);
      methods[methodName] = algorithm.createMethod(bits[j], algorithm.padding);
      if (algorithm.name !== 'sha3') {
        var newMethodName = algorithm.name + bits[j];
        methodNames.push(newMethodName);
        methods[newMethodName] = methods[methodName];
      }
    }
  }

  function Keccak(bits, padding, outputBits) {
    this.blocks = [];
    this.s = [];
    this.padding = padding;
    this.outputBits = outputBits;
    this.reset = true;
    this.finalized = false;
    this.block = 0;
    this.start = 0;
    this.blockCount = (1600 - (bits << 1)) >> 5;
    this.byteCount = this.blockCount << 2;
    this.outputBlocks = outputBits >> 5;
    this.extraBytes = (outputBits & 31) >> 3;

    for (var i = 0; i < 50; ++i) {
      this.s[i] = 0;
    }
  }

  Keccak.prototype.update = function (message) {
    if (this.finalized) {
      throw new Error(FINALIZE_ERROR);
    }
    var notString, type = typeof message;
    if (type !== 'string') {
      if (type === 'object') {
        if (message === null) {
          throw new Error(INPUT_ERROR);
        } else if (ARRAY_BUFFER && message.constructor === ArrayBuffer) {
          message = new Uint8Array(message);
        } else if (!Array.isArray(message)) {
          if (!ARRAY_BUFFER || !ArrayBuffer.isView(message)) {
            throw new Error(INPUT_ERROR);
          }
        }
      } else {
        throw new Error(INPUT_ERROR);
      }
      notString = true;
    }
    var blocks = this.blocks, byteCount = this.byteCount, length = message.length,
      blockCount = this.blockCount, index = 0, s = this.s, i, code;

    while (index < length) {
      if (this.reset) {
        this.reset = false;
        blocks[0] = this.block;
        for (i = 1; i < blockCount + 1; ++i) {
          blocks[i] = 0;
        }
      }
      if (notString) {
        for (i = this.start; index < length && i < byteCount; ++index) {
          blocks[i >> 2] |= message[index] << SHIFT[i++ & 3];
        }
      } else {
        for (i = this.start; index < length && i < byteCount; ++index) {
          code = message.charCodeAt(index);
          if (code < 0x80) {
            blocks[i >> 2] |= code << SHIFT[i++ & 3];
          } else if (code < 0x800) {
            blocks[i >> 2] |= (0xc0 | (code >> 6)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          } else if (code < 0xd800 || code >= 0xe000) {
            blocks[i >> 2] |= (0xe0 | (code >> 12)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          } else {
            code = 0x10000 + (((code & 0x3ff) << 10) | (message.charCodeAt(++index) & 0x3ff));
            blocks[i >> 2] |= (0xf0 | (code >> 18)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | ((code >> 12) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          }
        }
      }
      this.lastByteIndex = i;
      if (i >= byteCount) {
        this.start = i - byteCount;
        this.block = blocks[blockCount];
        for (i = 0; i < blockCount; ++i) {
          s[i] ^= blocks[i];
        }
        f(s);
        this.reset = true;
      } else {
        this.start = i;
      }
    }
    return this;
  };

  Keccak.prototype.encode = function (x, right) {
    var o = x & 255, n = 1;
    var bytes = [o];
    x = x >> 8;
    o = x & 255;
    while (o > 0) {
      bytes.unshift(o);
      x = x >> 8;
      o = x & 255;
      ++n;
    }
    if (right) {
      bytes.push(n);
    } else {
      bytes.unshift(n);
    }
    this.update(bytes);
    return bytes.length;
  };

  Keccak.prototype.encodeString = function (str) {
    var notString, type = typeof str;
    if (type !== 'string') {
      if (type === 'object') {
        if (str === null) {
          throw new Error(INPUT_ERROR);
        } else if (ARRAY_BUFFER && str.constructor === ArrayBuffer) {
          str = new Uint8Array(str);
        } else if (!Array.isArray(str)) {
          if (!ARRAY_BUFFER || !ArrayBuffer.isView(str)) {
            throw new Error(INPUT_ERROR);
          }
        }
      } else {
        throw new Error(INPUT_ERROR);
      }
      notString = true;
    }
    var bytes = 0, length = str.length;
    if (notString) {
      bytes = length;
    } else {
      for (var i = 0; i < str.length; ++i) {
        var code = str.charCodeAt(i);
        if (code < 0x80) {
          bytes += 1;
        } else if (code < 0x800) {
          bytes += 2;
        } else if (code < 0xd800 || code >= 0xe000) {
          bytes += 3;
        } else {
          code = 0x10000 + (((code & 0x3ff) << 10) | (str.charCodeAt(++i) & 0x3ff));
          bytes += 4;
        }
      }
    }
    bytes += this.encode(bytes * 8);
    this.update(str);
    return bytes;
  };

  Keccak.prototype.bytepad = function (strs, w) {
    var bytes = this.encode(w);
    for (var i = 0; i < strs.length; ++i) {
      bytes += this.encodeString(strs[i]);
    }
    var paddingBytes = w - bytes % w;
    var zeros = [];
    zeros.length = paddingBytes;
    this.update(zeros);
    return this;
  };

  Keccak.prototype.finalize = function () {
    if (this.finalized) {
      return;
    }
    this.finalized = true;
    var blocks = this.blocks, i = this.lastByteIndex, blockCount = this.blockCount, s = this.s;
    blocks[i >> 2] |= this.padding[i & 3];
    if (this.lastByteIndex === this.byteCount) {
      blocks[0] = blocks[blockCount];
      for (i = 1; i < blockCount + 1; ++i) {
        blocks[i] = 0;
      }
    }
    blocks[blockCount - 1] |= 0x80000000;
    for (i = 0; i < blockCount; ++i) {
      s[i] ^= blocks[i];
    }
    f(s);
  };

  Keccak.prototype.toString = Keccak.prototype.hex = function () {
    this.finalize();

    var blockCount = this.blockCount, s = this.s, outputBlocks = this.outputBlocks,
      extraBytes = this.extraBytes, i = 0, j = 0;
    var hex = '', block;
    while (j < outputBlocks) {
      for (i = 0; i < blockCount && j < outputBlocks; ++i, ++j) {
        block = s[i];
        hex += HEX_CHARS[(block >> 4) & 0x0F] + HEX_CHARS[block & 0x0F] +
          HEX_CHARS[(block >> 12) & 0x0F] + HEX_CHARS[(block >> 8) & 0x0F] +
          HEX_CHARS[(block >> 20) & 0x0F] + HEX_CHARS[(block >> 16) & 0x0F] +
          HEX_CHARS[(block >> 28) & 0x0F] + HEX_CHARS[(block >> 24) & 0x0F];
      }
      if (j % blockCount === 0) {
        f(s);
        i = 0;
      }
    }
    if (extraBytes) {
      block = s[i];
      hex += HEX_CHARS[(block >> 4) & 0x0F] + HEX_CHARS[block & 0x0F];
      if (extraBytes > 1) {
        hex += HEX_CHARS[(block >> 12) & 0x0F] + HEX_CHARS[(block >> 8) & 0x0F];
      }
      if (extraBytes > 2) {
        hex += HEX_CHARS[(block >> 20) & 0x0F] + HEX_CHARS[(block >> 16) & 0x0F];
      }
    }
    return hex;
  };

  Keccak.prototype.arrayBuffer = function () {
    this.finalize();

    var blockCount = this.blockCount, s = this.s, outputBlocks = this.outputBlocks,
      extraBytes = this.extraBytes, i = 0, j = 0;
    var bytes = this.outputBits >> 3;
    var buffer;
    if (extraBytes) {
      buffer = new ArrayBuffer((outputBlocks + 1) << 2);
    } else {
      buffer = new ArrayBuffer(bytes);
    }
    var array = new Uint32Array(buffer);
    while (j < outputBlocks) {
      for (i = 0; i < blockCount && j < outputBlocks; ++i, ++j) {
        array[j] = s[i];
      }
      if (j % blockCount === 0) {
        f(s);
      }
    }
    if (extraBytes) {
      array[i] = s[i];
      buffer = buffer.slice(0, bytes);
    }
    return buffer;
  };

  Keccak.prototype.buffer = Keccak.prototype.arrayBuffer;

  Keccak.prototype.digest = Keccak.prototype.array = function () {
    this.finalize();

    var blockCount = this.blockCount, s = this.s, outputBlocks = this.outputBlocks,
      extraBytes = this.extraBytes, i = 0, j = 0;
    var array = [], offset, block;
    while (j < outputBlocks) {
      for (i = 0; i < blockCount && j < outputBlocks; ++i, ++j) {
        offset = j << 2;
        block = s[i];
        array[offset] = block & 0xFF;
        array[offset + 1] = (block >> 8) & 0xFF;
        array[offset + 2] = (block >> 16) & 0xFF;
        array[offset + 3] = (block >> 24) & 0xFF;
      }
      if (j % blockCount === 0) {
        f(s);
      }
    }
    if (extraBytes) {
      offset = j << 2;
      block = s[i];
      array[offset] = block & 0xFF;
      if (extraBytes > 1) {
        array[offset + 1] = (block >> 8) & 0xFF;
      }
      if (extraBytes > 2) {
        array[offset + 2] = (block >> 16) & 0xFF;
      }
    }
    return array;
  };

  function Kmac(bits, padding, outputBits) {
    Keccak.call(this, bits, padding, outputBits);
  }

  Kmac.prototype = new Keccak();

  Kmac.prototype.finalize = function () {
    this.encode(this.outputBits, true);
    return Keccak.prototype.finalize.call(this);
  };

  var f = function (s) {
    var h, l, n, c0, c1, c2, c3, c4, c5, c6, c7, c8, c9,
      b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17,
      b18, b19, b20, b21, b22, b23, b24, b25, b26, b27, b28, b29, b30, b31, b32, b33,
      b34, b35, b36, b37, b38, b39, b40, b41, b42, b43, b44, b45, b46, b47, b48, b49;
    for (n = 0; n < 48; n += 2) {
      c0 = s[0] ^ s[10] ^ s[20] ^ s[30] ^ s[40];
      c1 = s[1] ^ s[11] ^ s[21] ^ s[31] ^ s[41];
      c2 = s[2] ^ s[12] ^ s[22] ^ s[32] ^ s[42];
      c3 = s[3] ^ s[13] ^ s[23] ^ s[33] ^ s[43];
      c4 = s[4] ^ s[14] ^ s[24] ^ s[34] ^ s[44];
      c5 = s[5] ^ s[15] ^ s[25] ^ s[35] ^ s[45];
      c6 = s[6] ^ s[16] ^ s[26] ^ s[36] ^ s[46];
      c7 = s[7] ^ s[17] ^ s[27] ^ s[37] ^ s[47];
      c8 = s[8] ^ s[18] ^ s[28] ^ s[38] ^ s[48];
      c9 = s[9] ^ s[19] ^ s[29] ^ s[39] ^ s[49];

      h = c8 ^ ((c2 << 1) | (c3 >>> 31));
      l = c9 ^ ((c3 << 1) | (c2 >>> 31));
      s[0] ^= h;
      s[1] ^= l;
      s[10] ^= h;
      s[11] ^= l;
      s[20] ^= h;
      s[21] ^= l;
      s[30] ^= h;
      s[31] ^= l;
      s[40] ^= h;
      s[41] ^= l;
      h = c0 ^ ((c4 << 1) | (c5 >>> 31));
      l = c1 ^ ((c5 << 1) | (c4 >>> 31));
      s[2] ^= h;
      s[3] ^= l;
      s[12] ^= h;
      s[13] ^= l;
      s[22] ^= h;
      s[23] ^= l;
      s[32] ^= h;
      s[33] ^= l;
      s[42] ^= h;
      s[43] ^= l;
      h = c2 ^ ((c6 << 1) | (c7 >>> 31));
      l = c3 ^ ((c7 << 1) | (c6 >>> 31));
      s[4] ^= h;
      s[5] ^= l;
      s[14] ^= h;
      s[15] ^= l;
      s[24] ^= h;
      s[25] ^= l;
      s[34] ^= h;
      s[35] ^= l;
      s[44] ^= h;
      s[45] ^= l;
      h = c4 ^ ((c8 << 1) | (c9 >>> 31));
      l = c5 ^ ((c9 << 1) | (c8 >>> 31));
      s[6] ^= h;
      s[7] ^= l;
      s[16] ^= h;
      s[17] ^= l;
      s[26] ^= h;
      s[27] ^= l;
      s[36] ^= h;
      s[37] ^= l;
      s[46] ^= h;
      s[47] ^= l;
      h = c6 ^ ((c0 << 1) | (c1 >>> 31));
      l = c7 ^ ((c1 << 1) | (c0 >>> 31));
      s[8] ^= h;
      s[9] ^= l;
      s[18] ^= h;
      s[19] ^= l;
      s[28] ^= h;
      s[29] ^= l;
      s[38] ^= h;
      s[39] ^= l;
      s[48] ^= h;
      s[49] ^= l;

      b0 = s[0];
      b1 = s[1];
      b32 = (s[11] << 4) | (s[10] >>> 28);
      b33 = (s[10] << 4) | (s[11] >>> 28);
      b14 = (s[20] << 3) | (s[21] >>> 29);
      b15 = (s[21] << 3) | (s[20] >>> 29);
      b46 = (s[31] << 9) | (s[30] >>> 23);
      b47 = (s[30] << 9) | (s[31] >>> 23);
      b28 = (s[40] << 18) | (s[41] >>> 14);
      b29 = (s[41] << 18) | (s[40] >>> 14);
      b20 = (s[2] << 1) | (s[3] >>> 31);
      b21 = (s[3] << 1) | (s[2] >>> 31);
      b2 = (s[13] << 12) | (s[12] >>> 20);
      b3 = (s[12] << 12) | (s[13] >>> 20);
      b34 = (s[22] << 10) | (s[23] >>> 22);
      b35 = (s[23] << 10) | (s[22] >>> 22);
      b16 = (s[33] << 13) | (s[32] >>> 19);
      b17 = (s[32] << 13) | (s[33] >>> 19);
      b48 = (s[42] << 2) | (s[43] >>> 30);
      b49 = (s[43] << 2) | (s[42] >>> 30);
      b40 = (s[5] << 30) | (s[4] >>> 2);
      b41 = (s[4] << 30) | (s[5] >>> 2);
      b22 = (s[14] << 6) | (s[15] >>> 26);
      b23 = (s[15] << 6) | (s[14] >>> 26);
      b4 = (s[25] << 11) | (s[24] >>> 21);
      b5 = (s[24] << 11) | (s[25] >>> 21);
      b36 = (s[34] << 15) | (s[35] >>> 17);
      b37 = (s[35] << 15) | (s[34] >>> 17);
      b18 = (s[45] << 29) | (s[44] >>> 3);
      b19 = (s[44] << 29) | (s[45] >>> 3);
      b10 = (s[6] << 28) | (s[7] >>> 4);
      b11 = (s[7] << 28) | (s[6] >>> 4);
      b42 = (s[17] << 23) | (s[16] >>> 9);
      b43 = (s[16] << 23) | (s[17] >>> 9);
      b24 = (s[26] << 25) | (s[27] >>> 7);
      b25 = (s[27] << 25) | (s[26] >>> 7);
      b6 = (s[36] << 21) | (s[37] >>> 11);
      b7 = (s[37] << 21) | (s[36] >>> 11);
      b38 = (s[47] << 24) | (s[46] >>> 8);
      b39 = (s[46] << 24) | (s[47] >>> 8);
      b30 = (s[8] << 27) | (s[9] >>> 5);
      b31 = (s[9] << 27) | (s[8] >>> 5);
      b12 = (s[18] << 20) | (s[19] >>> 12);
      b13 = (s[19] << 20) | (s[18] >>> 12);
      b44 = (s[29] << 7) | (s[28] >>> 25);
      b45 = (s[28] << 7) | (s[29] >>> 25);
      b26 = (s[38] << 8) | (s[39] >>> 24);
      b27 = (s[39] << 8) | (s[38] >>> 24);
      b8 = (s[48] << 14) | (s[49] >>> 18);
      b9 = (s[49] << 14) | (s[48] >>> 18);

      s[0] = b0 ^ (~b2 & b4);
      s[1] = b1 ^ (~b3 & b5);
      s[10] = b10 ^ (~b12 & b14);
      s[11] = b11 ^ (~b13 & b15);
      s[20] = b20 ^ (~b22 & b24);
      s[21] = b21 ^ (~b23 & b25);
      s[30] = b30 ^ (~b32 & b34);
      s[31] = b31 ^ (~b33 & b35);
      s[40] = b40 ^ (~b42 & b44);
      s[41] = b41 ^ (~b43 & b45);
      s[2] = b2 ^ (~b4 & b6);
      s[3] = b3 ^ (~b5 & b7);
      s[12] = b12 ^ (~b14 & b16);
      s[13] = b13 ^ (~b15 & b17);
      s[22] = b22 ^ (~b24 & b26);
      s[23] = b23 ^ (~b25 & b27);
      s[32] = b32 ^ (~b34 & b36);
      s[33] = b33 ^ (~b35 & b37);
      s[42] = b42 ^ (~b44 & b46);
      s[43] = b43 ^ (~b45 & b47);
      s[4] = b4 ^ (~b6 & b8);
      s[5] = b5 ^ (~b7 & b9);
      s[14] = b14 ^ (~b16 & b18);
      s[15] = b15 ^ (~b17 & b19);
      s[24] = b24 ^ (~b26 & b28);
      s[25] = b25 ^ (~b27 & b29);
      s[34] = b34 ^ (~b36 & b38);
      s[35] = b35 ^ (~b37 & b39);
      s[44] = b44 ^ (~b46 & b48);
      s[45] = b45 ^ (~b47 & b49);
      s[6] = b6 ^ (~b8 & b0);
      s[7] = b7 ^ (~b9 & b1);
      s[16] = b16 ^ (~b18 & b10);
      s[17] = b17 ^ (~b19 & b11);
      s[26] = b26 ^ (~b28 & b20);
      s[27] = b27 ^ (~b29 & b21);
      s[36] = b36 ^ (~b38 & b30);
      s[37] = b37 ^ (~b39 & b31);
      s[46] = b46 ^ (~b48 & b40);
      s[47] = b47 ^ (~b49 & b41);
      s[8] = b8 ^ (~b0 & b2);
      s[9] = b9 ^ (~b1 & b3);
      s[18] = b18 ^ (~b10 & b12);
      s[19] = b19 ^ (~b11 & b13);
      s[28] = b28 ^ (~b20 & b22);
      s[29] = b29 ^ (~b21 & b23);
      s[38] = b38 ^ (~b30 & b32);
      s[39] = b39 ^ (~b31 & b33);
      s[48] = b48 ^ (~b40 & b42);
      s[49] = b49 ^ (~b41 & b43);

      s[0] ^= RC[n];
      s[1] ^= RC[n + 1];
    }
  };

  if (COMMON_JS) {
    module.exports = methods;
  } else {
    for (i = 0; i < methodNames.length; ++i) {
      root[methodNames[i]] = methods[methodNames[i]];
    }
    if (AMD) {
      !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
        return methods;
      }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
  }
})();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/gridplus-sdk/node_modules/secp256k1/elliptic.js":
/*!**********************************************************************!*\
  !*** ./node_modules/gridplus-sdk/node_modules/secp256k1/elliptic.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib */ "./node_modules/gridplus-sdk/node_modules/secp256k1/lib/index.js")(__webpack_require__(/*! ./lib/elliptic */ "./node_modules/gridplus-sdk/node_modules/secp256k1/lib/elliptic.js"))


/***/ }),

/***/ "./node_modules/gridplus-sdk/node_modules/secp256k1/lib/elliptic.js":
/*!**************************************************************************!*\
  !*** ./node_modules/gridplus-sdk/node_modules/secp256k1/lib/elliptic.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const EC = __webpack_require__(/*! elliptic */ "./node_modules/elliptic/lib/elliptic.js").ec

const ec = new EC('secp256k1')
const ecparams = ec.curve

// Hack, we can not use bn.js@5, while elliptic uses bn.js@4
// See https://github.com/indutny/elliptic/issues/191#issuecomment-569888758
const BN = ecparams.n.constructor

function loadCompressedPublicKey (first, xbuf) {
  let x = new BN(xbuf)

  // overflow
  if (x.cmp(ecparams.p) >= 0) return null
  x = x.toRed(ecparams.red)

  // compute corresponding Y
  let y = x.redSqr().redIMul(x).redIAdd(ecparams.b).redSqrt()
  if ((first === 0x03) !== y.isOdd()) y = y.redNeg()

  return ec.keyPair({ pub: { x: x, y: y } })
}

function loadUncompressedPublicKey (first, xbuf, ybuf) {
  let x = new BN(xbuf)
  let y = new BN(ybuf)

  // overflow
  if (x.cmp(ecparams.p) >= 0 || y.cmp(ecparams.p) >= 0) return null

  x = x.toRed(ecparams.red)
  y = y.toRed(ecparams.red)

  // is odd flag
  if ((first === 0x06 || first === 0x07) && y.isOdd() !== (first === 0x07)) return null

  // x*x*x + b = y*y
  const x3 = x.redSqr().redIMul(x)
  if (!y.redSqr().redISub(x3.redIAdd(ecparams.b)).isZero()) return null

  return ec.keyPair({ pub: { x: x, y: y } })
}

function loadPublicKey (pubkey) {
  // length should be validated in interface
  const first = pubkey[0]
  switch (first) {
    case 0x02:
    case 0x03:
      if (pubkey.length !== 33) return null
      return loadCompressedPublicKey(first, pubkey.subarray(1, 33))
    case 0x04:
    case 0x06:
    case 0x07:
      if (pubkey.length !== 65) return null
      return loadUncompressedPublicKey(first, pubkey.subarray(1, 33), pubkey.subarray(33, 65))
    default:
      return null
  }
}

function savePublicKey (output, point) {
  const pubkey = point.encode(null, output.length === 33)
  // Loop should be faster because we do not need create extra Uint8Array
  // output.set(new Uint8Array(pubkey))
  for (let i = 0; i < output.length; ++i) output[i] = pubkey[i]
}

module.exports = {
  contextRandomize () {
    return 0
  },

  privateKeyVerify (seckey) {
    const bn = new BN(seckey)
    return bn.cmp(ecparams.n) < 0 && !bn.isZero() ? 0 : 1
  },

  privateKeyNegate (seckey) {
    const bn = new BN(seckey)
    const negate = ecparams.n.sub(bn).umod(ecparams.n).toArrayLike(Uint8Array, 'be', 32)
    seckey.set(negate)
    return 0
  },

  privateKeyTweakAdd (seckey, tweak) {
    const bn = new BN(tweak)
    if (bn.cmp(ecparams.n) >= 0) return 1

    bn.iadd(new BN(seckey))
    if (bn.cmp(ecparams.n) >= 0) bn.isub(ecparams.n)
    if (bn.isZero()) return 1

    const tweaked = bn.toArrayLike(Uint8Array, 'be', 32)
    seckey.set(tweaked)

    return 0
  },

  privateKeyTweakMul (seckey, tweak) {
    let bn = new BN(tweak)
    if (bn.cmp(ecparams.n) >= 0 || bn.isZero()) return 1

    bn.imul(new BN(seckey))
    if (bn.cmp(ecparams.n) >= 0) bn = bn.umod(ecparams.n)

    const tweaked = bn.toArrayLike(Uint8Array, 'be', 32)
    seckey.set(tweaked)

    return 0
  },

  publicKeyVerify (pubkey) {
    const pair = loadPublicKey(pubkey)
    return pair === null ? 1 : 0
  },

  publicKeyCreate (output, seckey) {
    const bn = new BN(seckey)
    if (bn.cmp(ecparams.n) >= 0 || bn.isZero()) return 1

    const point = ec.keyFromPrivate(seckey).getPublic()
    savePublicKey(output, point)

    return 0
  },

  publicKeyConvert (output, pubkey) {
    const pair = loadPublicKey(pubkey)
    if (pair === null) return 1

    const point = pair.getPublic()
    savePublicKey(output, point)

    return 0
  },

  publicKeyNegate (output, pubkey) {
    const pair = loadPublicKey(pubkey)
    if (pair === null) return 1

    const point = pair.getPublic()
    point.y = point.y.redNeg()
    savePublicKey(output, point)

    return 0
  },

  publicKeyCombine (output, pubkeys) {
    const pairs = new Array(pubkeys.length)
    for (let i = 0; i < pubkeys.length; ++i) {
      pairs[i] = loadPublicKey(pubkeys[i])
      if (pairs[i] === null) return 1
    }

    let point = pairs[0].getPublic()
    for (let i = 1; i < pairs.length; ++i) point = point.add(pairs[i].pub)
    if (point.isInfinity()) return 2

    savePublicKey(output, point)

    return 0
  },

  publicKeyTweakAdd (output, pubkey, tweak) {
    const pair = loadPublicKey(pubkey)
    if (pair === null) return 1

    tweak = new BN(tweak)
    if (tweak.cmp(ecparams.n) >= 0) return 2

    const point = pair.getPublic().add(ecparams.g.mul(tweak))
    if (point.isInfinity()) return 2

    savePublicKey(output, point)

    return 0
  },

  publicKeyTweakMul (output, pubkey, tweak) {
    const pair = loadPublicKey(pubkey)
    if (pair === null) return 1

    tweak = new BN(tweak)
    if (tweak.cmp(ecparams.n) >= 0 || tweak.isZero()) return 2

    const point = pair.getPublic().mul(tweak)
    savePublicKey(output, point)

    return 0
  },

  signatureNormalize (sig) {
    const r = new BN(sig.subarray(0, 32))
    const s = new BN(sig.subarray(32, 64))
    if (r.cmp(ecparams.n) >= 0 || s.cmp(ecparams.n) >= 0) return 1

    if (s.cmp(ec.nh) === 1) {
      sig.set(ecparams.n.sub(s).toArrayLike(Uint8Array, 'be', 32), 32)
    }

    return 0
  },

  // Copied 1-to-1 from https://github.com/bitcoinjs/bip66/blob/master/index.js
  // Adapted for Uint8Array instead Buffer
  signatureExport (obj, sig) {
    const sigR = sig.subarray(0, 32)
    const sigS = sig.subarray(32, 64)
    if (new BN(sigR).cmp(ecparams.n) >= 0) return 1
    if (new BN(sigS).cmp(ecparams.n) >= 0) return 1

    const { output } = obj

    // Prepare R
    let r = output.subarray(4, 4 + 33)
    r[0] = 0x00
    r.set(sigR, 1)

    let lenR = 33
    let posR = 0
    for (; lenR > 1 && r[posR] === 0x00 && !(r[posR + 1] & 0x80); --lenR, ++posR);

    r = r.subarray(posR)
    if (r[0] & 0x80) return 1
    if (lenR > 1 && (r[0] === 0x00) && !(r[1] & 0x80)) return 1

    // Prepare S
    let s = output.subarray(6 + 33, 6 + 33 + 33)
    s[0] = 0x00
    s.set(sigS, 1)

    let lenS = 33
    let posS = 0
    for (; lenS > 1 && s[posS] === 0x00 && !(s[posS + 1] & 0x80); --lenS, ++posS);

    s = s.subarray(posS)
    if (s[0] & 0x80) return 1
    if (lenS > 1 && (s[0] === 0x00) && !(s[1] & 0x80)) return 1

    // Set output length for return
    obj.outputlen = 6 + lenR + lenS

    // Output in specified format
    // 0x30 [total-length] 0x02 [R-length] [R] 0x02 [S-length] [S]
    output[0] = 0x30
    output[1] = obj.outputlen - 2
    output[2] = 0x02
    output[3] = r.length
    output.set(r, 4)
    output[4 + lenR] = 0x02
    output[5 + lenR] = s.length
    output.set(s, 6 + lenR)

    return 0
  },

  // Copied 1-to-1 from https://github.com/bitcoinjs/bip66/blob/master/index.js
  // Adapted for Uint8Array instead Buffer
  signatureImport (output, sig) {
    if (sig.length < 8) return 1
    if (sig.length > 72) return 1
    if (sig[0] !== 0x30) return 1
    if (sig[1] !== sig.length - 2) return 1
    if (sig[2] !== 0x02) return 1

    const lenR = sig[3]
    if (lenR === 0) return 1
    if (5 + lenR >= sig.length) return 1
    if (sig[4 + lenR] !== 0x02) return 1

    const lenS = sig[5 + lenR]
    if (lenS === 0) return 1
    if ((6 + lenR + lenS) !== sig.length) return 1

    if (sig[4] & 0x80) return 1
    if (lenR > 1 && (sig[4] === 0x00) && !(sig[5] & 0x80)) return 1

    if (sig[lenR + 6] & 0x80) return 1
    if (lenS > 1 && (sig[lenR + 6] === 0x00) && !(sig[lenR + 7] & 0x80)) return 1

    let sigR = sig.subarray(4, 4 + lenR)
    if (sigR.length === 33 && sigR[0] === 0x00) sigR = sigR.subarray(1)
    if (sigR.length > 32) return 1

    let sigS = sig.subarray(6 + lenR)
    if (sigS.length === 33 && sigS[0] === 0x00) sigS = sigS.slice(1)
    if (sigS.length > 32) throw new Error('S length is too long')

    let r = new BN(sigR)
    if (r.cmp(ecparams.n) >= 0) r = new BN(0)

    let s = new BN(sig.subarray(6 + lenR))
    if (s.cmp(ecparams.n) >= 0) s = new BN(0)

    output.set(r.toArrayLike(Uint8Array, 'be', 32), 0)
    output.set(s.toArrayLike(Uint8Array, 'be', 32), 32)

    return 0
  },

  ecdsaSign (obj, message, seckey, data, noncefn) {
    if (noncefn) {
      const _noncefn = noncefn
      noncefn = (counter) => {
        const nonce = _noncefn(message, seckey, null, data, counter)

        const isValid = nonce instanceof Uint8Array && nonce.length === 32
        if (!isValid) throw new Error('This is the way')

        return new BN(nonce)
      }
    }

    const d = new BN(seckey)
    if (d.cmp(ecparams.n) >= 0 || d.isZero()) return 1

    let sig
    try {
      sig = ec.sign(message, seckey, { canonical: true, k: noncefn, pers: data })
    } catch (err) {
      return 1
    }

    obj.signature.set(sig.r.toArrayLike(Uint8Array, 'be', 32), 0)
    obj.signature.set(sig.s.toArrayLike(Uint8Array, 'be', 32), 32)
    obj.recid = sig.recoveryParam

    return 0
  },

  ecdsaVerify (sig, msg32, pubkey) {
    const sigObj = { r: sig.subarray(0, 32), s: sig.subarray(32, 64) }

    const sigr = new BN(sigObj.r)
    const sigs = new BN(sigObj.s)
    if (sigr.cmp(ecparams.n) >= 0 || sigs.cmp(ecparams.n) >= 0) return 1
    if (sigs.cmp(ec.nh) === 1 || sigr.isZero() || sigs.isZero()) return 3

    const pair = loadPublicKey(pubkey)
    if (pair === null) return 2

    const point = pair.getPublic()
    const isValid = ec.verify(msg32, sigObj, point)
    return isValid ? 0 : 3
  },

  ecdsaRecover (output, sig, recid, msg32) {
    const sigObj = { r: sig.slice(0, 32), s: sig.slice(32, 64) }

    const sigr = new BN(sigObj.r)
    const sigs = new BN(sigObj.s)
    if (sigr.cmp(ecparams.n) >= 0 || sigs.cmp(ecparams.n) >= 0) return 1

    if (sigr.isZero() || sigs.isZero()) return 2

    // Can throw `throw new Error('Unable to find sencond key candinate');`
    let point
    try {
      point = ec.recoverPubKey(msg32, sigObj, recid)
    } catch (err) {
      return 2
    }

    savePublicKey(output, point)

    return 0
  },

  ecdh (output, pubkey, seckey, data, hashfn, xbuf, ybuf) {
    const pair = loadPublicKey(pubkey)
    if (pair === null) return 1

    const scalar = new BN(seckey)
    if (scalar.cmp(ecparams.n) >= 0 || scalar.isZero()) return 2

    const point = pair.getPublic().mul(scalar)

    if (hashfn === undefined) {
      const data = point.encode(null, true)
      const sha256 = ec.hash().update(data).digest()
      for (let i = 0; i < 32; ++i) output[i] = sha256[i]
    } else {
      if (!xbuf) xbuf = new Uint8Array(32)
      const x = point.getX().toArray('be', 32)
      for (let i = 0; i < 32; ++i) xbuf[i] = x[i]

      if (!ybuf) ybuf = new Uint8Array(32)
      const y = point.getY().toArray('be', 32)
      for (let i = 0; i < 32; ++i) ybuf[i] = y[i]

      const hash = hashfn(xbuf, ybuf, data)

      const isValid = hash instanceof Uint8Array && hash.length === output.length
      if (!isValid) return 2

      output.set(hash)
    }

    return 0
  }
}


/***/ }),

/***/ "./node_modules/gridplus-sdk/node_modules/secp256k1/lib/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/gridplus-sdk/node_modules/secp256k1/lib/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const errors = {
  IMPOSSIBLE_CASE: 'Impossible case. Please create issue.',
  TWEAK_ADD:
    'The tweak was out of range or the resulted private key is invalid',
  TWEAK_MUL: 'The tweak was out of range or equal to zero',
  CONTEXT_RANDOMIZE_UNKNOW: 'Unknow error on context randomization',
  SECKEY_INVALID: 'Private Key is invalid',
  PUBKEY_PARSE: 'Public Key could not be parsed',
  PUBKEY_SERIALIZE: 'Public Key serialization error',
  PUBKEY_COMBINE: 'The sum of the public keys is not valid',
  SIG_PARSE: 'Signature could not be parsed',
  SIGN: 'The nonce generation function failed, or the private key was invalid',
  RECOVER: 'Public key could not be recover',
  ECDH: 'Scalar was invalid (zero or overflow)'
}

function assert (cond, msg) {
  if (!cond) throw new Error(msg)
}

function isUint8Array (name, value, length) {
  assert(value instanceof Uint8Array, `Expected ${name} to be an Uint8Array`)

  if (length !== undefined) {
    if (Array.isArray(length)) {
      const numbers = length.join(', ')
      const msg = `Expected ${name} to be an Uint8Array with length [${numbers}]`
      assert(length.includes(value.length), msg)
    } else {
      const msg = `Expected ${name} to be an Uint8Array with length ${length}`
      assert(value.length === length, msg)
    }
  }
}

function isCompressed (value) {
  assert(toTypeString(value) === 'Boolean', 'Expected compressed to be a Boolean')
}

function getAssertedOutput (output = (len) => new Uint8Array(len), length) {
  if (typeof output === 'function') output = output(length)
  isUint8Array('output', output, length)
  return output
}

function toTypeString (value) {
  return Object.prototype.toString.call(value).slice(8, -1)
}

module.exports = (secp256k1) => {
  return {
    contextRandomize (seed) {
      assert(
        seed === null || seed instanceof Uint8Array,
        'Expected seed to be an Uint8Array or null'
      )
      if (seed !== null) isUint8Array('seed', seed, 32)

      switch (secp256k1.contextRandomize(seed)) {
        case 1:
          throw new Error(errors.CONTEXT_RANDOMIZE_UNKNOW)
      }
    },

    privateKeyVerify (seckey) {
      isUint8Array('private key', seckey, 32)

      return secp256k1.privateKeyVerify(seckey) === 0
    },

    privateKeyNegate (seckey) {
      isUint8Array('private key', seckey, 32)

      switch (secp256k1.privateKeyNegate(seckey)) {
        case 0:
          return seckey
        case 1:
          throw new Error(errors.IMPOSSIBLE_CASE)
      }
    },

    privateKeyTweakAdd (seckey, tweak) {
      isUint8Array('private key', seckey, 32)
      isUint8Array('tweak', tweak, 32)

      switch (secp256k1.privateKeyTweakAdd(seckey, tweak)) {
        case 0:
          return seckey
        case 1:
          throw new Error(errors.TWEAK_ADD)
      }
    },

    privateKeyTweakMul (seckey, tweak) {
      isUint8Array('private key', seckey, 32)
      isUint8Array('tweak', tweak, 32)

      switch (secp256k1.privateKeyTweakMul(seckey, tweak)) {
        case 0:
          return seckey
        case 1:
          throw new Error(errors.TWEAK_MUL)
      }
    },

    publicKeyVerify (pubkey) {
      isUint8Array('public key', pubkey, [33, 65])

      return secp256k1.publicKeyVerify(pubkey) === 0
    },

    publicKeyCreate (seckey, compressed = true, output) {
      isUint8Array('private key', seckey, 32)
      isCompressed(compressed)
      output = getAssertedOutput(output, compressed ? 33 : 65)

      switch (secp256k1.publicKeyCreate(output, seckey)) {
        case 0:
          return output
        case 1:
          throw new Error(errors.SECKEY_INVALID)
        case 2:
          throw new Error(errors.PUBKEY_SERIALIZE)
      }
    },

    publicKeyConvert (pubkey, compressed = true, output) {
      isUint8Array('public key', pubkey, [33, 65])
      isCompressed(compressed)
      output = getAssertedOutput(output, compressed ? 33 : 65)

      switch (secp256k1.publicKeyConvert(output, pubkey)) {
        case 0:
          return output
        case 1:
          throw new Error(errors.PUBKEY_PARSE)
        case 2:
          throw new Error(errors.PUBKEY_SERIALIZE)
      }
    },

    publicKeyNegate (pubkey, compressed = true, output) {
      isUint8Array('public key', pubkey, [33, 65])
      isCompressed(compressed)
      output = getAssertedOutput(output, compressed ? 33 : 65)

      switch (secp256k1.publicKeyNegate(output, pubkey)) {
        case 0:
          return output
        case 1:
          throw new Error(errors.PUBKEY_PARSE)
        case 2:
          throw new Error(errors.IMPOSSIBLE_CASE)
        case 3:
          throw new Error(errors.PUBKEY_SERIALIZE)
      }
    },

    publicKeyCombine (pubkeys, compressed = true, output) {
      assert(Array.isArray(pubkeys), 'Expected public keys to be an Array')
      assert(pubkeys.length > 0, 'Expected public keys array will have more than zero items')
      for (const pubkey of pubkeys) {
        isUint8Array('public key', pubkey, [33, 65])
      }
      isCompressed(compressed)
      output = getAssertedOutput(output, compressed ? 33 : 65)

      switch (secp256k1.publicKeyCombine(output, pubkeys)) {
        case 0:
          return output
        case 1:
          throw new Error(errors.PUBKEY_PARSE)
        case 2:
          throw new Error(errors.PUBKEY_COMBINE)
        case 3:
          throw new Error(errors.PUBKEY_SERIALIZE)
      }
    },

    publicKeyTweakAdd (pubkey, tweak, compressed = true, output) {
      isUint8Array('public key', pubkey, [33, 65])
      isUint8Array('tweak', tweak, 32)
      isCompressed(compressed)
      output = getAssertedOutput(output, compressed ? 33 : 65)

      switch (secp256k1.publicKeyTweakAdd(output, pubkey, tweak)) {
        case 0:
          return output
        case 1:
          throw new Error(errors.PUBKEY_PARSE)
        case 2:
          throw new Error(errors.TWEAK_ADD)
      }
    },

    publicKeyTweakMul (pubkey, tweak, compressed = true, output) {
      isUint8Array('public key', pubkey, [33, 65])
      isUint8Array('tweak', tweak, 32)
      isCompressed(compressed)
      output = getAssertedOutput(output, compressed ? 33 : 65)

      switch (secp256k1.publicKeyTweakMul(output, pubkey, tweak)) {
        case 0:
          return output
        case 1:
          throw new Error(errors.PUBKEY_PARSE)
        case 2:
          throw new Error(errors.TWEAK_MUL)
      }
    },

    signatureNormalize (sig) {
      isUint8Array('signature', sig, 64)

      switch (secp256k1.signatureNormalize(sig)) {
        case 0:
          return sig
        case 1:
          throw new Error(errors.SIG_PARSE)
      }
    },

    signatureExport (sig, output) {
      isUint8Array('signature', sig, 64)
      output = getAssertedOutput(output, 72)

      const obj = { output, outputlen: 72 }
      switch (secp256k1.signatureExport(obj, sig)) {
        case 0:
          return output.slice(0, obj.outputlen)
        case 1:
          throw new Error(errors.SIG_PARSE)
        case 2:
          throw new Error(errors.IMPOSSIBLE_CASE)
      }
    },

    signatureImport (sig, output) {
      isUint8Array('signature', sig)
      output = getAssertedOutput(output, 64)

      switch (secp256k1.signatureImport(output, sig)) {
        case 0:
          return output
        case 1:
          throw new Error(errors.SIG_PARSE)
        case 2:
          throw new Error(errors.IMPOSSIBLE_CASE)
      }
    },

    ecdsaSign (msg32, seckey, options = {}, output) {
      isUint8Array('message', msg32, 32)
      isUint8Array('private key', seckey, 32)
      assert(toTypeString(options) === 'Object', 'Expected options to be an Object')
      if (options.data !== undefined) isUint8Array('options.data', options.data)
      if (options.noncefn !== undefined) assert(toTypeString(options.noncefn) === 'Function', 'Expected options.noncefn to be a Function')
      output = getAssertedOutput(output, 64)

      const obj = { signature: output, recid: null }
      switch (secp256k1.ecdsaSign(obj, msg32, seckey, options.data, options.noncefn)) {
        case 0:
          return obj
        case 1:
          throw new Error(errors.SIGN)
        case 2:
          throw new Error(errors.IMPOSSIBLE_CASE)
      }
    },

    ecdsaVerify (sig, msg32, pubkey) {
      isUint8Array('signature', sig, 64)
      isUint8Array('message', msg32, 32)
      isUint8Array('public key', pubkey, [33, 65])

      switch (secp256k1.ecdsaVerify(sig, msg32, pubkey)) {
        case 0:
          return true
        case 3:
          return false
        case 1:
          throw new Error(errors.SIG_PARSE)
        case 2:
          throw new Error(errors.PUBKEY_PARSE)
      }
    },

    ecdsaRecover (sig, recid, msg32, compressed = true, output) {
      isUint8Array('signature', sig, 64)
      assert(
        toTypeString(recid) === 'Number' &&
          recid >= 0 &&
          recid <= 3,
        'Expected recovery id to be a Number within interval [0, 3]'
      )
      isUint8Array('message', msg32, 32)
      isCompressed(compressed)
      output = getAssertedOutput(output, compressed ? 33 : 65)

      switch (secp256k1.ecdsaRecover(output, sig, recid, msg32)) {
        case 0:
          return output
        case 1:
          throw new Error(errors.SIG_PARSE)
        case 2:
          throw new Error(errors.RECOVER)
        case 3:
          throw new Error(errors.IMPOSSIBLE_CASE)
      }
    },

    ecdh (pubkey, seckey, options = {}, output) {
      isUint8Array('public key', pubkey, [33, 65])
      isUint8Array('private key', seckey, 32)
      assert(toTypeString(options) === 'Object', 'Expected options to be an Object')
      if (options.data !== undefined) isUint8Array('options.data', options.data)
      if (options.hashfn !== undefined) {
        assert(toTypeString(options.hashfn) === 'Function', 'Expected options.hashfn to be a Function')
        if (options.xbuf !== undefined) isUint8Array('options.xbuf', options.xbuf, 32)
        if (options.ybuf !== undefined) isUint8Array('options.ybuf', options.ybuf, 32)
        isUint8Array('output', output)
      } else {
        output = getAssertedOutput(output, 32)
      }

      switch (secp256k1.ecdh(output, pubkey, seckey, options.data, options.hashfn, options.xbuf, options.ybuf)) {
        case 0:
          return output
        case 1:
          throw new Error(errors.PUBKEY_PARSE)
        case 2:
          throw new Error(errors.ECDH)
      }
    }
  }
}


/***/ }),

/***/ "./node_modules/gridplus-sdk/src/bitcoin.js":
/*!**************************************************!*\
  !*** ./node_modules/gridplus-sdk/src/bitcoin.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Util for Bitcoin-specific functionality
const bs58 = __webpack_require__(/*! bs58 */ "./node_modules/bs58/index.js");
const bs58check = __webpack_require__(/*! bs58check */ "./node_modules/bs58check/index.js")
const Buffer = __webpack_require__(/*! buffer/ */ "./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer;
const constants = __webpack_require__(/*! ./constants */ "./node_modules/gridplus-sdk/src/constants.js")
const DEFAULT_SEQUENCE = 0xffffffff;
const DEFAULT_SIGHASH_BUFFER = Buffer.from('01', 'hex'); // SIGHASH_ALL = 0x01
const { HARDENED_OFFSET } = __webpack_require__(/*! ./constants */ "./node_modules/gridplus-sdk/src/constants.js");
const DEFAULT_CHANGE = [44 + HARDENED_OFFSET, HARDENED_OFFSET, HARDENED_OFFSET, 1, 0];

const OP = {
  '0': 0x00,
  HASH160: 0xa9,
  DUP: 0x76,
  EQUAL: 0x87,
  EQUALVERIFY: 0x88,
  CHECKSIG: 0xac,
}

const addressVersion = {
  'LEGACY': 0x00,
  'SEGWIT': 0x05,
  'TESTNET': 0x6F,
  'SEGWIT_TESTNET': 0xC4,
}
exports.addressVersion = addressVersion;

// Bitcoin script types -- defined by the Lattice protocol spec
const scriptTypes = {
  P2PKH: 0x01,
  P2SH: 0x02,
  P2SH_P2WPKH: 0x03,
}
exports.scriptTypes = scriptTypes

// We need to build two different objects here:
// 1. bitcoinjs-lib TransactionBuilder object, which will be used in conjunction
//    with the returned signatures to build and serialize the transaction before
//    broadcasting it. We will replace `bitcoinjs-lib`'s signatures with the ones
//    we get from the Lattice
// 2. The serialized Lattice request, which includes data (outlined in the specification)
//    that is needed to sign all of the inputs and build a change output. 
// @inputs (contained in `data`)
// `prevOuts`: an array of objects with the following properties:
//           a. txHash
//           b. value
//           c. index          -- the index of the output in the transaction
//           d. signerPath -- the path of the address in our wallet that is signing this input
// `recipient`: Receiving address, which must be converted to a pubkeyhash
// `value`:     Number of satoshis to send the recipient
// `fee`:       Number of satoshis to use for a transaction fee (should have been calculated)
//              already based on the number of inputs plus two outputs
// `version`:   Transaction version of the inputs. All inputs must be of the same version! 
// `isSegwit`: a boolean which determines how we serialize the data and parameterize txb
exports.buildBitcoinTxRequest = function(data) {
  try {
    const { prevOuts, recipient, value, changePath=DEFAULT_CHANGE, fee, isSegwit, changeVersion='SEGWIT' } = data;
    if (changePath.length !== 5) throw new Error('Please provide a full change path.')
    // Serialize the request
    const payload = Buffer.alloc(59 + (69 * prevOuts.length));
    let off = 0;
    // Change version byte (a.k.a. address format byte)
    if (addressVersion[changeVersion] === undefined)
      throw new Error('Invalid change version specified.');
    payload.writeUInt8(addressVersion[changeVersion]); off++;

    // Build the change data
    payload.writeUInt32LE(changePath.length, off); off += 4;
    for (let i = 0; i < changePath.length; i++) {
      payload.writeUInt32LE(changePath[i], off); off += 4;
    }    

    // Fee is a param
    payload.writeUInt32LE(fee, off); off += 4;
    const recipientVersionByte = bs58.decode(recipient)[0];
    const recipientPubkeyhash = bs58check.decode(recipient).slice(1);
    // Parameterize the recipient output
    payload.writeUInt8(recipientVersionByte, off); off++;
    recipientPubkeyhash.copy(payload, off); off += recipientPubkeyhash.length;
    writeUInt64LE(value, payload, off); off += 8;

    // Build the inputs from the previous outputs
    payload.writeUInt8(prevOuts.length, off); off++;
    let inputSum = 0;
    const scriptType = isSegwit === true ? 
                        scriptTypes.P2SH_P2WPKH :  // Only support p2sh(p2wpkh) for segwit spends for now
                        scriptTypes.P2PKH; // No support for multisig p2sh in v1 (p2sh == segwit here)
    prevOuts.forEach((input) => {
      if (!input.signerPath || input.signerPath.length !== 5) {
        throw new Error('Full recipient path not specified ')
      }
      payload.writeUInt32LE(input.signerPath.length, off); off += 4;
      for (let i = 0; i < input.signerPath.length; i++) {
        payload.writeUInt32LE(input.signerPath[i], off); off += 4;
      }
      payload.writeUInt32LE(input.index, off); off += 4;
      writeUInt64LE(input.value, payload, off); off += 8;
      inputSum += input.value;
      payload.writeUInt8(scriptType, off); off++;
      if (!Buffer.isBuffer(input.txHash)) input.txHash = Buffer.from(input.txHash, 'hex');
      input.txHash.copy(payload, off); off += input.txHash.length;
    })
    // Send them back!
    return {
      payload,
      schema: constants.signingSchema.BTC_TRANSFER,
      origData: data,   // We will need the original data for serializing the tx
      changeData: {     // This data helps fill in the change output
        changeVersion,
        value: inputSum - (value + fee),
      }
    };
  } catch (err) {
    return { err };
  }
}

// Serialize a transaction consisting of inputs, outputs, and some
// metadata
// -- inputs  = { hash, index, sig, pubkey }
// -- outputs = { value, recipient }  // expects an address string for `recipient`
// -- isSegwitSpend = true if the inputs are being spent using segwit
//                    (NOTE: either ALL are being spent, or none are)
// -- network = Name of network, used to determine transaction version
// -- lockTime = Will probably always be 0
exports.serializeTx = function(data) {
  const { inputs, outputs, isSegwitSpend, lockTime=0, crypto } = data;
  let payload = Buffer.alloc(4);
  let off = 0;
  // Always use version 2
  const version = 2;
  payload.writeUInt32LE(version, off); off += 4;
  if (isSegwitSpend === true) {
    payload = concat(payload, Buffer.from('00', 'hex')); // marker = 0x00
    payload = concat(payload, Buffer.from('01', 'hex')); // flag = 0x01
  }
  // Serialize signed inputs
  const numInputs = getVarInt(inputs.length);
  payload = concat(payload, numInputs); off += numInputs.length;
  inputs.forEach((input) => {
    payload = concat(payload, input.hash.reverse()); off += input.hash.length;
    const index = getU32LE(input.index);
    payload = concat(payload, index); off += index.length;
    if (isSegwitSpend === true) {
      // Build a vector (varSlice of varSlice) containing the redeemScript
      const redeemScript = buildRedeemScript(input.pubkey, crypto);
      const redeemScriptLen = getVarInt(redeemScript.length);
      const slice = Buffer.concat([redeemScriptLen, redeemScript]);
      const sliceLen = getVarInt(slice.length);
      payload = concat(payload, sliceLen); off += sliceLen.length;
      payload = concat(payload, slice); off += slice.length;
    } else {
      // Build the signature + pubkey script to spend this input
      const slice = buildSig(input.sig, input.pubkey);
      payload = concat(payload, slice); off += slice.length;
    }
    // Use the default sequence for all transactions
    const sequence = getU32LE(DEFAULT_SEQUENCE);
    payload = concat(payload, sequence); off += sequence.length;
  })
  // Serialize outputs
  const numOutputs = getVarInt(outputs.length);
  payload = concat(payload, numOutputs); off += numOutputs.length;
  outputs.forEach((output) => {
    const value = getU64LE(output.value);
    payload = concat(payload, value); off += value.length;
    // Build the output locking script and write it as a var slice
    const script = buildLockingScript(output.recipient);
    const scriptLen = getVarInt(script.length);
    payload = concat(payload, scriptLen); off += scriptLen.length;
    payload = concat(payload, script); off += script.length;
  })
  // Add witness data if needed
  if (isSegwitSpend === true) {
    const sigs = [];
    const pubkeys = [];
    for (let i = 0; i < inputs.length; i++) {
      sigs.push(inputs[i].sig);
      pubkeys.push(inputs[i].pubkey);
    }
    const witnessSlice = buildWitness(sigs, pubkeys);
    payload = concat(payload, witnessSlice); off += witnessSlice.length;
  }
  // Finish with locktime
  return Buffer.concat([payload, getU32LE(lockTime)]).toString('hex');
}

// Convert a pubkeyhash to a bitcoin base58check address with a version byte
exports.getBitcoinAddress = function(pubkeyhash, version) {
  return bs58check.encode(Buffer.concat([Buffer.from([version]), pubkeyhash]));
}


// Builder utils
//-----------------------
function buildRedeemScript(pubkey, crypto) {
  const redeemScript = Buffer.alloc(22);
  const shaHash = crypto.createHash('sha256').update(pubkey).digest();
  const pubkeyhash = crypto.createHash('rmd160').update(shaHash).digest();
  redeemScript.writeUInt8(OP['0']);
  redeemScript.writeUInt8(pubkeyhash.length, 1);
  pubkeyhash.copy(redeemScript, 2);
  return redeemScript;
}

// Var slice of signature + var slice of pubkey
function buildSig(sig, pubkey) {
  sig = Buffer.concat([sig, DEFAULT_SIGHASH_BUFFER])
  const sigLen = getVarInt(sig.length);
  const pubkeyLen = getVarInt(pubkey.length);
  const slice = Buffer.concat([sigLen, sig, pubkeyLen, pubkey]);
  const len = getVarInt(slice.length);
  return Buffer.concat([len, slice]);
}

// Witness is written as a "vector", which is a list of varSlices
// prefixed by the number of items
function buildWitness(sigs, pubkeys) {
  let witness = Buffer.alloc(0);
  // Two items in each vector (sig, pubkey)
  const len = Buffer.alloc(1); len.writeUInt8(2);
  for (let i = 0; i < sigs.length; i++) {
    const sig = Buffer.concat([sigs[i], DEFAULT_SIGHASH_BUFFER]);
    const sigLen = getVarInt(sig.length);
    const pubkey = pubkeys[i];
    const pubkeyLen = getVarInt(pubkey.length);
    witness = Buffer.concat([witness, len, sigLen, sig, pubkeyLen, pubkey]);
  }
  return witness;
}

// Locking script buiders
//-----------------------
function buildLockingScript(address) {
  const versionByte = bs58.decode(address)[0];
  const pubkeyhash = bs58check.decode(address).slice(1);
  if (versionByte === addressVersion.SEGWIT || versionByte === addressVersion.SEGWIT_TESTNET) { 
    // Also works for p2sh
    return buildP2shLockingScript(pubkeyhash);
  } else {
    // We assume testnet uses p2pkh
    return buildP2pkhLockingScript(pubkeyhash);
  }
}

function buildP2pkhLockingScript(pubkeyhash) {
  const out = Buffer.alloc(5 + pubkeyhash.length);
  let off = 0;
  out.writeUInt8(OP.DUP, off); off++;
  out.writeUInt8(OP.HASH160, off); off++;
  out.writeUInt8(pubkeyhash.length, off); off++;
  pubkeyhash.copy(out, off); off += pubkeyhash.length;
  out.writeUInt8(OP.EQUALVERIFY, off); off++;
  out.writeUInt8(OP.CHECKSIG, off); off++;
  return out;
}

function buildP2shLockingScript(pubkeyhash) {
  const out = Buffer.alloc(3 + pubkeyhash.length);
  let off = 0;
  out.writeUInt8(OP.HASH160, off); off++;
  out.writeUInt8(pubkeyhash.length, off); off++;
  pubkeyhash.copy(out, off); off += pubkeyhash.length;
  out.writeUInt8(OP.EQUAL, off); off++;
  return out;
}

// Static Utils
//----------------------
function concat(base, addition) {
  return Buffer.concat([base, addition]);
}

function getU64LE(x) {
  const buffer = Buffer.alloc(8);
  writeUInt64LE(x, buffer, 0);
  return buffer;
}

function getU32LE(x) {
  const buffer = Buffer.alloc(4);
  buffer.writeUInt32LE(x);
  return buffer;
}

function getVarInt (x) {
  let buffer;
  if (x < 0xfd) {
    buffer = Buffer.alloc(1);
    buffer.writeUInt8(x);
  } else if (x <= 0xffff) {
    buffer = Buffer.alloc(3);
    buffer.writeUInt8(0xfd, 0);
    buffer.writeUInt16LE(x, 1);
  } else if (x < 0xffffffff) {
    buffer = Buffer.alloc(5);
    buffer.writeUInt8(0xfe, 0);
    buffer.writeUInt32LE(x, 1);
  } else {
    buffer = Buffer.alloc(9);
    buffer.writeUInt8(0xff, 0);
    buffer.writeUInt32LE(x >>> 0, 1);
    buffer.writeUInt32LE((x / 0x100000000) | 0, 5);
  }
  return buffer;
}

function writeUInt64LE(n, buf, off) {
  if (typeof n === 'number') n = n.toString(16);
  const preBuf = Buffer.alloc(8);
  const nStr = n.length % 2 === 0 ? n.toString(16) : `0${n.toString(16)}`;
  const nBuf = Buffer.from(nStr, 'hex');
  nBuf.reverse().copy(preBuf, 0);
  preBuf.copy(buf, off);
  return preBuf;
}

/***/ }),

/***/ "./node_modules/gridplus-sdk/src/client.js":
/*!*************************************************!*\
  !*** ./node_modules/gridplus-sdk/src/client.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const bitwise = __webpack_require__(/*! bitwise */ "./node_modules/bitwise/esm/index.js");
const superagent = __webpack_require__(/*! superagent */ "./node_modules/superagent/lib/client.js");
const bitcoin = __webpack_require__(/*! ./bitcoin */ "./node_modules/gridplus-sdk/src/bitcoin.js");
const ethereum = __webpack_require__(/*! ./ethereum */ "./node_modules/gridplus-sdk/src/ethereum.js");
const { buildAddAbiPayload, abiParsers, MAX_ABI_DEFS } = __webpack_require__(/*! ./ethereumAbi */ "./node_modules/gridplus-sdk/src/ethereumAbi.js");
const {
  isValidAssetPath,
  signReqResolver,
  aes256_decrypt,
  aes256_encrypt,
  parseDER,
  checksum,
  ensureHexBuffer,
  getP256KeyPair,
  getP256KeyPairFromPub,
  parseLattice1Response,
  toPaddedDER,
} = __webpack_require__(/*! ./util */ "./node_modules/gridplus-sdk/src/util.js");
const {
  getFwVersionConst,
  ADDR_STR_LEN,
  ENC_MSG_LEN,
  decResLengths,
  deviceCodes,
  encReqCodes,
  responseCodes,
  REQUEST_TYPE_BYTE,
  VERSION_BYTE,
  messageConstants,
  BASE_URL,
} = __webpack_require__(/*! ./constants */ "./node_modules/gridplus-sdk/src/constants.js");
const Buffer = __webpack_require__(/*! buffer/ */ "./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer;
const EMPTY_WALLET_UID = Buffer.alloc(32);

class Client {
  constructor({ baseUrl, crypto, name, privKey, timeout, retryCount } = {}) {
    // Definitions
    // if (!baseUrl) throw new Error('baseUrl is required');
    if (name && name.length > 24) throw new Error('name must be less than 24 characters');
    if (!crypto) throw new Error('crypto provider is required');
    this.baseUrl = baseUrl || BASE_URL;
    this.crypto = crypto;
    this.name = name || 'Unknown';
    
    // Derive an ECDSA keypair using the p256 curve. The public key will
    // be used as an identifier
    this.privKey = privKey || this.crypto.randomBytes(32);
    this.key = getP256KeyPair(this.privKey);//.encode('hex');

    // Stateful params
    this.ephemeralPub = null;
    this.sharedSecret = null;
    this.timeout = timeout || 60000;
    this.deviceId = null;
    this.isPaired = false;
    this.retryCount = retryCount || 3;

    // Information about the current wallet. Should be null unless we know a wallet is present
    this.activeWallets = {
      internal: {
        uid: EMPTY_WALLET_UID,           // 32 byte id
        name: null,                      // 20 char (max) string
        capabilities: null,              // 4 byte flag
        external: false,
      },
      external: {
        uid: EMPTY_WALLET_UID,           // 32 byte id
        name: null,                      // 20 char (max) string
        capabilities: null,              // 4 byte flag
        external: true,
      }
    }
  }
  
  //=======================================================================
  // LATTICE FUNCTIONS
  //=======================================================================

  // `Connect` will attempt to contact a device based on its deviceId.
  // The response should include an ephemeral public key, which is used to
  // pair with the device in a later request
  connect(deviceId, cb) {
    // User may "re-connect" if a device ID has previously been stored
    if (typeof deviceId === 'function') {
      if (!this.deviceId) 
        return cb('No device ID has been stored. Please connect with your device ID first.')
      cb = deviceId;
    } else {
      // If the user passes in a device ID, connect to that device and save
      // the new ID for future use.
      this.deviceId = deviceId;
    }
    const param = this._buildRequest(deviceCodes.CONNECT, this.pubKeyBytes());
    this._request(param, (err, res) => {
      if (err) return cb(err);
      this.isPaired = this._handleConnect(res);
      // Check for an active wallet. This will get bypassed if we are not paired.
      if (this.isPaired) {
        this._getActiveWallet((err) => {
          return cb(err, this.isPaired);
        }, true);
      } else {
        return cb(null);
      }
      
    });
  }

  pair(pairingSecret, cb) {
    // Build the secret hash from the salt
    const pubKey = this.pubKeyBytes();
    const nameBuf = Buffer.alloc(25);
    if (this.name.length > 24) {
      return cb('Name is too many characters. Please change it to <25 characters.');
    }
    nameBuf.write(this.name);
    // Make sure we add a null termination byte to the pairing secret
    const preImage = Buffer.concat([pubKey, nameBuf, Buffer.from(pairingSecret)]);
    const hash = this.crypto.createHash('sha256').update(preImage).digest();
    const sig = this.key.sign(hash); // returns an array, not a buffer
    const derSig = toPaddedDER(sig);
    const payload = Buffer.concat([nameBuf, derSig]);

    // Build the request
    const param = this._buildEncRequest(encReqCodes.FINALIZE_PAIRING, payload);
    this._request(param, (err, res) => {
      if (err) return cb(err);
      // Recover the ephemeral key
      const errStr = this._handlePair(res);
      if (errStr) return cb(errStr);
      // Try to get the active wallet once pairing is successful
      this._getActiveWallet((err) => {
        if (err) return cb(err);
        return cb(null, this.hasActiveWallet());
      }, true);
    })  
  }

  test(data, cb) {
    if (!data.payload)
      return cb('First argument must contain `testID` and `payload` fields.');
    const TEST_DATA_SZ = 500;
    const payload = Buffer.alloc(TEST_DATA_SZ + 6);
    payload.writeUInt32BE(data.testID, 0);
    payload.writeUInt16BE(data.payload.length, 4);
    data.payload.copy(payload, 6);
    const param = this._buildEncRequest(encReqCodes.TEST, payload);
    this._request(param, (err, res) => {
      if (err) return cb(err);
      const decrypted = this._handleEncResponse(res, decResLengths.test);
      if (decrypted.err !== null ) 
        return cb(decrypted.err);
      return cb(null, decrypted.data.slice(65)); // remove ephem pub
    })
  }

  getAddresses(opts, cb) {
    const SKIP_CACHE_FLAG = 1;
    const MAX_ADDR = 10;
    const { startPath, n, skipCache=true } = opts;
    if (startPath === undefined || n === undefined || startPath.length !== 5) {
      return cb('Please provide `startPath` and `n` options');
    } else if (n > MAX_ADDR) {
      return cb(`You may only request ${MAX_ADDR} addresses at once.`);
    }

    if (skipCache === true && false === isValidAssetPath(startPath))
      return cb('Parent path is not supported');

    const payload = Buffer.alloc(1 + 32 + startPath.length * 4);
    let off = 0;

    // WalletUID
    const wallet = this.getActiveWallet();
    if (wallet === null) return cb('No active wallet.');
    wallet.uid.copy(payload, off); off += 32;
    // Build the start path (5x u32 indices)
    for (let i = 0; i < startPath.length; i++) {
      payload.writeUInt32BE(startPath[i], off);
      off += 4;
    }
    // Specify the number of subsequent addresses to request.
    // We also allow the user to skip the cache and request any address related to the asset
    // in the wallet.
    let val;
    const fwConstants = getFwVersionConst(this.fwVersion);
    if (true === fwConstants.addrFlagsAllowed) {
      const flag = skipCache === true ? bitwise.nibble.read(SKIP_CACHE_FLAG) : bitwise.nibble.read(0);
      const count = bitwise.nibble.read(n);
      val = bitwise.byte.write(flag.concat(count));
    } else {
      val = n;
    }
    payload.writeUInt8(val, off); off++;
    const param = this._buildEncRequest(encReqCodes.GET_ADDRESSES, payload);
    return this._request(param, (err, res) => {
      if (err) return cb(err);
      const parsedRes = this._handleGetAddresses(res);
      if (parsedRes.err) return cb(parsedRes.err);
      return cb(null, parsedRes.data);
    })
  }

  sign(opts, cb) {
    const { currency, data } = opts;
    if (currency === undefined || data === undefined) {
      return cb('Please provide `currency` and `data` options');
    } else if (signReqResolver[currency] === undefined) {
      return cb('Unsupported currency');
    }

    // All transaction requests must be put into the same sized buffer.
    // This comes from sizeof(GpTransactionRequest_t), but note we remove
    // the 2-byte schemaId since it is not returned from our resolver.
    // Note that different firmware versions may have different data sizes.
    const fwConstants = getFwVersionConst(this.fwVersion);

    // Build the signing request payload to send to the device. If we catch
    // bad params, return an error instead
    data.ethMaxDataSz = fwConstants.ethMaxDataSz;
    data.ethMaxMsgSz = fwConstants.ethMaxMsgSz;
    const req = signReqResolver[currency](data);
    if (req.err !== undefined) return cb({ err: req.err });

    if (req.payload.length > fwConstants.reqMaxDataSz)
      return cb('Transaction is too large');

    // Build the payload
    const payload = Buffer.alloc(2 + fwConstants.reqMaxDataSz);
    let off = 0;
    // Copy request schema (e.g. ETH or BTC transfer)
    payload.writeUInt16BE(req.schema, off); off += 2;

    // Copy the wallet UID
    const wallet = this.getActiveWallet();
    if (wallet === null) return cb('No active wallet.');
    wallet.uid.copy(payload, off); off += wallet.uid.length;
    // Build data based on the type of request
    // Copy the payload of the request
    req.payload.copy(payload, off);
    // Construct the encrypted request and send it
    const param = this._buildEncRequest(encReqCodes.SIGN_TRANSACTION, payload);
    return this._request(param, (err, res, responseCode) => {
      if (responseCode === responseCodes.RESP_ERR_WALLET_NOT_PRESENT) {
        // If we catch a case where the wallet has changed, try getting the new active wallet
        // and recursively make the original request.
        this._getActiveWallet((err) => {
          if (err) return cb(err)
          else     return this.sign(opts, cb);
        })
      } else if (err) {
        // If there was another error caught, return it
        if (err) return cb(err);
      } else {
        // Correct wallet and no errors -- handle the response
        const parsedRes = this._handleSign(res, currency, req);
        return cb(parsedRes.err, parsedRes.data);
      }
    })
  }

  addAbiDefs(defs, cb, nextCode=null) {
    const defsToAdd = defs.slice(0, MAX_ABI_DEFS);
    defs = defs.slice(MAX_ABI_DEFS);
    let abiPayload;
    try {
      abiPayload = buildAddAbiPayload(defsToAdd);
    } catch (err) {
      return cb(err);
    }
    const payload = Buffer.alloc(abiPayload.length + 10);
    // Let the firmware know how many defs are remaining *after this one*.
    // If this is a positive number, firmware will send us a temporary code
    // to bypass user authorization if the user has configured easy ABI loading.
    payload.writeUInt16LE(defs.length);
    // If this is a follow-up request, we don't need to ask for user authorization
    // if we use the correct temporary u64
    if (nextCode !== null)
      nextCode.copy(payload, 2);
    abiPayload.copy(payload, 10);
    const param = this._buildEncRequest(encReqCodes.ADD_ABI_DEFS, payload);
    return this._request(param, (err, res, responseCode) => {
      if (responseCode && responseCode !== responseCodes.RESP_SUCCESS)
        return cb('Error making request.');
      else if (err)
        return cb(err);
      const decrypted = this._handleEncResponse(res, decResLengths.addAbiDefs);
      // Grab the 8 byte code to fast track our next request, if needed
      nextCode = decrypted.data.slice(65, 73); 
      // No defs left? Return success
      if (defs.length === 0)
        return cb(null);
      // Add the next set
      this.addAbiDefs(defs, cb, nextCode, defs);
    })
  }
  
  addPermissionV0(opts, cb) {
    const { currency, timeWindow, limit, decimals, asset } = opts;
    if (!currency || timeWindow === undefined || limit === undefined || decimals === undefined ||
        timeWindow === null || limit === null || decimals === null)
      return cb('currency, timeWindow, decimals, and limit are all required options.');
    else if (timeWindow === 0 || limit === 0)
      return cb('Time window and spending limit must be positive.');
    // Build the name of the permission
    let name = currency;
    if (asset)
      name += `_${asset}`;
    // Start building the payload
    const payload = Buffer.alloc(293);
    // Copy the name
    if (Buffer.from(name).length > 255)
      return cb('Asset name too long.');
    Buffer.from(name).copy(payload, 0);
    // Convert the limit to a 32 byte hex buffer and copy it in
    const limitBuf = ensureHexBuffer(limit)
    if (limitBuf.length > 32)
      return cb('Limit too large.');
    limitBuf.copy(payload, 256 + (32 - limitBuf.length));
    // Copy the time window (seconds)
    payload.writeUInt32BE(timeWindow, 288);
    payload.writeUInt8(decimals, 292);
    // Encrypt the request and send it to the Lattice.
    const param = this._buildEncRequest(encReqCodes.ADD_PERMISSION_V0, payload);
    return this._request(param, (err, res, responseCode) => {
      if (responseCode === responseCodes.RESP_ERR_WALLET_NOT_PRESENT) {
        // If we catch a case where the wallet has changed, try getting the new active wallet
        // and recursively make the original request.
        this._getActiveWallet((err) => {
          if (err) return cb(err)
          else     return this.addPermissionV0(opts, cb);
        })
      } else if (err) {
        // If there was another error caught, return it
        if (err) return cb(err);
      } else {
        // Correct wallet and no errors -- handle the response
        const d = this._handleEncResponse(res, decResLengths.finalizePair);
        if (d.err)
          return cb(d.err);
        return cb(null);
      }
    })
  }

  //=======================================================================
  // INTERNAL FUNCTIONS
  // These handle the logic around building requests and consuming
  // responses. They take into account the Lattice's serialization scheme
  // among other protocols.
  //=======================================================================

  // Get the active wallet in the device. If we already have one recorded,
  // we don't need to do anything
  // returns cb(err) -- err is a string
  _getActiveWallet(cb, forceRefresh=false) {
    if (forceRefresh !== true && (this.hasActiveWallet() === true || this.isPaired !== true)) {
      // If the active wallet already exists, or if we are not paired, skip the request
      return cb(null);
    } else {
      // No active wallet? Get it from the device
      const payload = Buffer.alloc(0);
      const param = this._buildEncRequest(encReqCodes.GET_WALLETS, payload);
      return this._request(param, (err, res) => {
        if (err) {
          this._resetActiveWallets();
          return cb(err);
        }
        return cb(this._handleGetWallets(res));
      })
    }
  }

  // Get the shared secret, derived via ECDH from the local private key
  // and the ephemeral public key
  // @returns Buffer
  _getSharedSecret() {
    // Once every ~256 attempts, we will get a key that starts with a `00` byte, which
    // can lead to problems initializing AES if we don't force a 32 byte BE buffer.
    return Buffer.from(this.key.derive(this.ephemeralPub.getPublic()).toArray('be', 32));
  }

  // Get the ephemeral id, which is the first 4 bytes of the shared secret
  // generated from the local private key and the ephemeral public key from
  // the device.
  // @returns Buffer
  _getEphemId() {
    if (this.ephemeralPub === null) return null;
    // EphemId is the first 4 bytes of the hash of the shared secret
    const secret = this._getSharedSecret();
    const hash = this.crypto.createHash('sha256').update(secret).digest();
    return hash.slice(0, 4);
  }

  _buildEncRequest(enc_request_code, payload) {
    // Get the ephemeral id - all encrypted requests require there to be an
    // epehemeral public key in order to send
    const ephemId = parseInt(this._getEphemId().toString('hex'), 16)
    
    // Build the payload and checksum
    const payloadPreCs = Buffer.concat([Buffer.from([enc_request_code]), payload]);
    const cs = checksum(payloadPreCs);
    const payloadBuf = Buffer.alloc(payloadPreCs.length + 4);

    // Lattice validates checksums in little endian
    payloadPreCs.copy(payloadBuf, 0);
    payloadBuf.writeUInt32LE(cs, payloadPreCs.length);
    // Encrypt this payload
    const secret = this._getSharedSecret();
    const newEncPayload = aes256_encrypt(payloadBuf, secret);

    // Write to the overall payload. We must use the same length
    // for every encrypted request and must include a 32-bit ephemId
    // along with the encrypted data
    const newPayload = Buffer.alloc(ENC_MSG_LEN + 4);
    // First 4 bytes are the ephemeral id (in little endian)
    newPayload.writeUInt32LE(ephemId, 0);
    // Next N bytes
    newEncPayload.copy(newPayload, 4);
    return this._buildRequest(deviceCodes.ENCRYPTED_REQUEST, newPayload);
  
  }

  // Build a request to send to the device.
  // @param [request_code] {uint8}  - 8-bit unsigned integer representing the message request code
  // @param [id] {buffer} - 4 byte identifier (comes from HSM for subsequent encrypted reqs)
  // @param [payload] {buffer} - serialized payload
  // @returns {buffer}
  _buildRequest(request_code, payload) {
    // Length of payload;
    // we add 1 to the payload length to account for the request_code byte
    let L = payload && Buffer.isBuffer(payload) ? payload.length + 1 : 1;
    if (request_code === deviceCodes.ENCRYPTED_REQUEST) {
      L = 1 + payload.length;
    }
    let i = 0;
    const preReq = Buffer.alloc(L + 8);
    // Build the header
    i = preReq.writeUInt8(VERSION_BYTE, i);
    i = preReq.writeUInt8(REQUEST_TYPE_BYTE, i);
    const id = this.crypto.randomBytes(4);
    i = preReq.writeUInt32BE(parseInt(`0x${id.toString('hex')}`), i);
    i = preReq.writeUInt16BE(L, i);
    // Build the payload
    i = preReq.writeUInt8(request_code, i);
    if (L > 1) i = payload.copy(preReq, i);
    // Add the checksum
    const cs = checksum(preReq);
    const req = Buffer.alloc(preReq.length + 4); // 4-byte checksum
    i = preReq.copy(req);
    req.writeUInt32BE(cs, i);
    return req;
  }

  _request(data, cb, retryCount=this.retryCount) {
    if (!this.deviceId) return cb('Serial is not set. Please set it and try again.');
    const url = `${this.baseUrl}/${this.deviceId}`;
    superagent.post(url).timeout(this.timeout)
    .send({data})
    .then(res => {
      if (!res || !res.body) return cb(`Invalid response: ${res}`)
      else if (res.body.status !== 200) return cb(`Error code ${res.body.status}: ${res.body.message}`)
      const parsed = parseLattice1Response(res.body.message);
      // If the device is busy, retry if we can
      if (( parsed.responseCode === responseCodes.RESP_ERR_DEV_BUSY ||
            parsed.responseCode === responseCodes.RESP_ERR_GCE_TIMEOUT ) 
            && (retryCount > 0)) {
        return setTimeout(() => { this._request(data, cb, retryCount-1) }, 3000);
      }
      // If we caugh a `ErrWalletNotPresent` make sure we aren't caching an old ative walletUID
      if (parsed.responseCode === responseCodes.RESP_ERR_WALLET_NOT_PRESENT) 
        this._resetActiveWallets();
      // If there was an error in the response, return it
      if (parsed.err) 
        return cb(parsed.err);
      return cb(null, parsed.data, parsed.responseCode); 
    })
    .catch((err) => {
      const isTimeout = err.code === 'ECONNABORTED' && err.errno === 'ETIME';
      if (isTimeout)
        return cb('Timeout waiting for device. Please ensure it is connected to the internet and try again in a minute.')
      else
        return cb('Failed to make request to device.');
    });
  }

  // ----- Device response handlers -----

  // Connect will call `StartPairingMode` on the device, which gives the
  // user 60 seconds to finalize the pairing
  // This will return an ephemeral public key, which is needed for the next
  // request. If the device is already paired, this ephemPub is simply used
  // to encrypt the next request. If the device is not paired, it is needed
  // to pair the device within 60 seconds.
  // @returns true if we are paired to the device already
  _handleConnect(res) {
    let off = 0;
    const pairingStatus = res.readUInt8(off); off++;
    // If we are already paired, we get the next ephemeral key
    const pub = res.slice(off, off + 65).toString('hex'); off += 65;
    // Grab the firmware version (will be 0-length for older fw versions)
    // It is of format |fix|minor|major|reserved|
    this.fwVersion = res.slice(off, off + 4);
    // Set the public key
    this.ephemeralPub = getP256KeyPairFromPub(pub);
    // return the state of our pairing
    return (pairingStatus === messageConstants.PAIRED);
  }

  // All encrypted responses must be decrypted with the previous shared secret. Per specification,
  // decrypted responses will all contain a 65-byte public key as the prefix, which becomes the 
  // new ephemeralPub.
  _handleEncResponse(encRes, len) {
    // Decrypt response
    const secret = this._getSharedSecret();
    const encData = encRes.slice(0, ENC_MSG_LEN);
    const res = aes256_decrypt(encData, secret);
    // len does not include a 65-byte pubkey that prefies each encResponse
    len += 65;
    // Validate checksum. It will be the last 4 bytes of the decrypted payload.
    // The length of the decrypted payload will be fixed for each given message type.
    const toCheck = res.slice(0, len);
    const cs = parseInt(`0x${res.slice(len, len+4).toString('hex')}`);
    const csCheck = checksum(toCheck);
    if (cs !== csCheck) return { err: `Checksum mismatch in response from Lattice (calculated ${csCheck}, wanted ${cs})` };

    // First 65 bytes is the next ephemeral pubkey
    const pub = res.slice(0, 65).toString('hex');
    try {
      this.ephemeralPub = getP256KeyPairFromPub(pub);
      return { err: null, data: res };
    } catch (e) {
      return { err: `Error handling getAddresses response: ${e.toString()}` };
    }
  }

  // Pair will create a new pairing if the user successfully enters the secret
  // into the device in time. If successful (status=0), the device will return
  // a new ephemeral public key, which is used to derive a shared secret
  // for the next request
  // @returns error (or null)
  _handlePair(encRes) {
    const d = this._handleEncResponse(encRes, decResLengths.finalizePair);
    if (d.err) return d.err;
    // Remove the pairing salt - we're paired!
    this.pairingSalt = null;
    this.isPaired = true;
    return null;
  }

  // GetAddresses will return an array of address strings
  _handleGetAddresses(encRes) {
    // Handle the encrypted response
    const decrypted = this._handleEncResponse(encRes, decResLengths.getAddresses);
    if (decrypted.err !== null ) return decrypted;

    const addrData = decrypted.data;
    let off = 65; // Skip 65 byte pubkey prefix
    // Look for addresses until we reach the end (a 4 byte checksum)
    const addrs = [];
    while (off + 4 < decResLengths.getAddresses) {
      const addrBytes = addrData.slice(off, off+ADDR_STR_LEN); off += ADDR_STR_LEN;
      // Return the UTF-8 representation
      const len = addrBytes.indexOf(0); // First 0 is the null terminator
      if (len > 0)
        addrs.push(addrBytes.slice(0, len).toString());
    }
    return { data: addrs, err: null };
  }

  _handleGetWallets(encRes) {
    const decrypted = this._handleEncResponse(encRes, decResLengths.getWallets);
    if (decrypted.err !== null) return decrypted;
    const res = decrypted.data;
    let walletUID;
    // Read the external wallet data first. If it is non-null, the external wallet will
    // be the active wallet of the device and we should save it.
    // If the external wallet is blank, it means there is no card present and we should 
    // save and use the interal wallet.
    // If both wallets are empty, it means the device still needs to be set up.
    const walletDescriptorLen = 71;
    // Skip 65byte pubkey prefix. WalletDescriptor contains 32byte id + 4byte flag + 35byte name
    let off = 65;
    // Internal first
    let hasActiveWallet = false;
    walletUID = res.slice(off, off+32);
    this.activeWallets.internal.uid = walletUID;
    this.activeWallets.internal.capabilities = res.readUInt32BE(off+32);
    this.activeWallets.internal.name = res.slice(off+36, off+walletDescriptorLen);
    if (!walletUID.equals(EMPTY_WALLET_UID))
      hasActiveWallet = true;

    // Offset the first item
    off += walletDescriptorLen;
    
    // External
    walletUID = res.slice(off, off+32);
    this.activeWallets.external.uid = walletUID;
    this.activeWallets.external.capabilities = res.readUInt32BE(off+32);
    this.activeWallets.external.name = res.slice(off+36, off+walletDescriptorLen);
    if (!walletUID.equals(EMPTY_WALLET_UID))
      hasActiveWallet = true;
    if (hasActiveWallet === true)
      return null;
    else
      return 'No active wallet.';
  }

  _handleSign(encRes, currencyType, req=null) {
    // Handle the encrypted response
    const decrypted = this._handleEncResponse(encRes, decResLengths.sign);
    if (decrypted.err !== null ) return { err: decrypted.err };
    const PUBKEY_PREFIX_LEN = 65;
    const PKH_PREFIX_LEN = 20;
    let off = PUBKEY_PREFIX_LEN; // Skip past pubkey prefix
    const res = decrypted.data;

    // Get the change data if we are making a BTC transaction
    let changeRecipient;
    if (currencyType === 'BTC') {
      const changeVersion = bitcoin.addressVersion[req.changeData.changeVersion];
      const changePubkeyhash = res.slice(off, off + PKH_PREFIX_LEN); off += PKH_PREFIX_LEN;
      changeRecipient = bitcoin.getBitcoinAddress(changePubkeyhash, changeVersion);
    }
    // Start building return data
    const returnData = { err: null, data: null };
    const DERLength = 74; // max size of a DER signature -- all Lattice sigs are this long
    const SIGS_OFFSET = 10 * DERLength; // 10 signature slots precede 10 pubkey slots
    const PUBKEYS_OFFSET = PUBKEY_PREFIX_LEN + PKH_PREFIX_LEN + SIGS_OFFSET;
    
    if (currencyType === 'BTC') {
      const compressedPubLength = 33;  // Size of compressed public key
      const pubkeys = [];
      const sigs = [];
      let n = 0;
      // Parse the signature for each output -- they are returned
      // in the serialized payload in form [pubkey, sig]
      // There is one signature per output
      while (off < res.length) {
        // Exit out if we have seen all the returned sigs and pubkeys
        if (res[off] !== 0x30) break;
        // Otherwise grab another set
        // Note that all DER sigs returned fill the maximum 74 byte buffer, but also
        // contain a length at off+1, which we use to parse the non-zero data.
        // First get the signature from its slot
        const sigStart = off;
        const sigEnd = off + 2 + res[off + 1];
        sigs.push(res.slice(sigStart, sigEnd));
        // Next, shift by the full set of signatures to hit the respective pubkey
        // NOTE: The data returned is: [<sig0>, <sig1>, ... <sig9>][<pubkey0>, <pubkey1>, ... <pubkey9>]
        const pubStart = (n * compressedPubLength) + PUBKEYS_OFFSET;
        const pubEnd = ((n+1) * compressedPubLength) + PUBKEYS_OFFSET;
        pubkeys.push(res.slice(pubStart, pubEnd));
        // Update offset to hit the next signature slot
        off += DERLength;
        n += 1;
      }
      // Build the transaction data to be serialized
      const preSerializedData = {
        inputs: [],
        outputs: [],
        isSegwitSpend: req.origData.isSegwit,
        network: req.origData.network,
        crypto: this.crypto,
      };

      // First output comes from request dta
      preSerializedData.outputs.push({
        value: req.origData.value,
        recipient: req.origData.recipient,
      });
      if (req.changeData.value > 0) {
        // Second output comes from change data
        preSerializedData.outputs.push({
          value: req.changeData.value,
          recipient: changeRecipient,
        });
      }
      
      // Add the inputs
      for (let i = 0; i < sigs.length; i++) {
        preSerializedData.inputs.push({
          hash: req.origData.prevOuts[i].txHash,
          index: req.origData.prevOuts[i].index,
          sig: sigs[i],
          pubkey: pubkeys[i],
        });
      }

      // Finally, serialize the transaction
      const serializedTx = bitcoin.serializeTx(preSerializedData);
      // Generate the transaction hash so the user can look this transaction up later
      let preImageTxHash = serializedTx;
      if (preSerializedData.isSegwitSpend === true) {
        // Segwit transactions need to be re-serialized using legacy serialization
        // before the transaction hash is calculated. This allows legacy clients
        // to validate the transactions.
        preSerializedData.isSegwitSpend = false;
        preImageTxHash = bitcoin.serializeTx(preSerializedData);
      }  
      let txHash = this.crypto.createHash('sha256').update(Buffer.from(preImageTxHash, 'hex')).digest();
      txHash = this.crypto.createHash('sha256').update(txHash).digest().reverse().toString('hex');
      
      // Add extra data for debugging/lookup purposes
      returnData.data = {
        tx: serializedTx,
        txHash,
        changeRecipient,
        sigs,
      }
    } else if (currencyType === 'ETH') {
      const sig = parseDER(res.slice(off, (off + 2 + res[off + 1]))); off += DERLength;
      const ethAddr = res.slice(off, off + 20);
      // Determine the `v` param and add it to the sig before returning
      const rawTx = ethereum.buildEthRawTx(req, sig, ethAddr, req.useEIP155);
      returnData.data = {
        tx: `0x${rawTx}`,
        txHash: `0x${ethereum.hashTransaction(rawTx)}`,
        sig: {
          v: sig.v,
          r: sig.r.toString('hex'),
          s: sig.s.toString('hex'),
        },
        signer: ethAddr,
      };
    } else if (currencyType === 'ETH_MSG') {
      const sig = parseDER(res.slice(off, (off + 2 + res[off + 1]))); off += DERLength;
      const signer = res.slice(off, off + 20);
      const validatedSig = ethereum.validateEthereumMsgResponse({ signer, sig }, req);
      returnData.data = {
        sig: {
          v: validatedSig.v,
          r: validatedSig.r.toString('hex'),
          s: validatedSig.s.toString('hex'),
        },
        signer,
      }
    }

    return returnData;
  }

  _resetActiveWallets() {
    this.activeWallets.internal.uid = EMPTY_WALLET_UID;
    this.activeWallets.internal.name = null;
    this.activeWallets.internal.capabilities = null;
    this.activeWallets.external.uid = EMPTY_WALLET_UID;
    this.activeWallets.external.name = null;
    this.activeWallets.external.capabilities = null;
    return;
  }

  getActiveWallet() {
    if (!EMPTY_WALLET_UID.equals(this.activeWallets.external.uid)) {
      return this.activeWallets.external;
    } else if (!EMPTY_WALLET_UID.equals(this.activeWallets.internal.uid)) {
      return this.activeWallets.internal;
    } else {
      return null;
    }
  }

  hasActiveWallet() {
    return this.getActiveWallet() !== null;
  }
  
  // Get 64 bytes representing the public key
  // This is the uncompressed key without the leading 04 byte
  pubKeyBytes(LE=false) {
    const k = this.key.getPublic();
    const p = k.encode('hex');
    const pb = Buffer.from(p, 'hex');
    if (LE === true) {
      // Need to flip X and Y components to little endian
      const x = pb.slice(1, 33).reverse();
      const y = pb.slice(33, 65).reverse();
      return Buffer.concat([pb[0], x, y]);
    } else {
      return pb;
    }
  }

  // TODO: Find a better way to export this.
  parseAbi(source, data) {
    switch (source) {
      case 'etherscan':
        return abiParsers[source](data);
      default:
        return { err: `No ${source} parser available.` };

    }
  }
}

module.exports = Client;


/***/ }),

/***/ "./node_modules/gridplus-sdk/src/constants.js":
/*!****************************************************!*\
  !*** ./node_modules/gridplus-sdk/src/constants.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Consistent with Lattice's IV
const AES_IV = [0x6d, 0x79, 0x73, 0x65, 0x63, 0x72, 0x65, 0x74, 0x70, 0x61, 0x73, 0x73, 0x77, 0x6f, 0x72, 0x64]

const ADDR_STR_LEN = 129; // 128-char strings (null terminated)

// Decrypted response lengths will be fixed for any given message type.
// These are defined in the Lattice spec.
// Every decrypted response should have a 65-byte pubkey prefixing it (and a 4-byte request ID)
// These are NOT counted in `decResLengths`, meaning these values are 69-bytes smaller than the
// corresponding structs in firmware.
const decResLengths = {
    finalizePair: 0,                    // Only contains the pubkey
    getAddresses: 10 * ADDR_STR_LEN,    // 10x 129 byte strings (128 bytes + null terminator)
    sign: 1090,                         // 1 DER signature for ETH, 10 for BTC + change pubkeyhash
    getWallets: 142,                    // 71 bytes per wallet record (response contains internal and external)
    addAbiDefs: 8,
    test: 1646                          // Max size of test response payload
}

// Every corresponding decrypted response struct in firmware has a pubkey
// and checksum added. These are not included in `decResLengths`
const DES_RES_EXTRADATA_LEN = 69; 

// Encrypted responses also have metadata
// Prefix:
// * protocol version (1 byte)
// * response type, reserved (1 byte) -- not used
// * response id (4 bytes) -- not used
// * payload length (2 bytes)
// * response code (1 byte)
// Suffix:
// * checksum (4 bytes) -- NOT the same checksum as inside the decrypted msg
const ENC_MSG_METADATA_LEN = 13;

const ENC_MSG_EXTRA_LEN = DES_RES_EXTRADATA_LEN + ENC_MSG_METADATA_LEN;
// Per Lattice spec, all encrypted messages must fit in a buffer of this size.
// The length comes from the largest request/response data type size
// We also add the prefix length
let ENC_MSG_LEN = 0;
Object.keys(decResLengths).forEach((k) => {
    if (decResLengths[k] + ENC_MSG_EXTRA_LEN > ENC_MSG_LEN)
        ENC_MSG_LEN = decResLengths[k] + ENC_MSG_EXTRA_LEN;
})
  
const deviceCodes = {
    'CONNECT': 1,
    'ENCRYPTED_REQUEST': 2,
}

const encReqCodes = {
    'FINALIZE_PAIRING': 0x00,
    'GET_ADDRESSES': 0x01,
    'ADD_PERMISSION': 0x02,
    'SIGN_TRANSACTION': 0x03,
    'GET_WALLETS': 0x04,
    'ADD_PERMISSION_V0': 0x05,
    'ADD_ABI_DEFS': 0x06,
    'TEST': 0x07,
}

const messageConstants = {
    'NOT_PAIRED': 0x00,
    'PAIRED': 0x01,
}

const addressSizes = {
    'BTC': 20,  // 20 byte pubkeyhash
    'ETH': 20,  // 20 byte address not including 0x prefix
}
  
const responseCodes = {
    RESP_SUCCESS: 0x00,
    RESP_ERR_INVALID_MSG: 0x80,
    RESP_ERR_UNSUPPORTED_VER: 0x81,
    RESP_ERR_DEV_BUSY: 0x82,
    RESP_ERR_USER_TIMEOUT: 0x83,
    RESP_ERR_USER_DECLINED: 0x84,
    RESP_ERR_PAIR_FAIL: 0x85,
    RESP_ERR_PAIR_DISABLED: 0x86,
    RESP_ERR_PERMISSION_DISABLED: 0x87,
    RESP_ERR_INTERNAL: 0x88,
    RESP_ERR_GCE_TIMEOUT: 0x89,
    RESP_ERR_WALLET_NOT_PRESENT: 0x8a,
    RESP_ERR_DEV_LOCKED: 0x8b,
    RESP_ERR_DISABLED: 0x8c,
    RESP_ERR_ALREADY: 0x8d,
}

const responseMsgs = {
    [responseCodes.RESP_SUCCESS]: 0x00,
    [responseCodes.RESP_ERR_INVALID_MSG]: 'Invalid Request',
    [responseCodes.RESP_ERR_UNSUPPORTED_VER]: 'Unsupported Version',
    [responseCodes.RESP_ERR_DEV_BUSY]: 'Device Busy',
    [responseCodes.RESP_ERR_USER_TIMEOUT]: 'Timeout Waiting for User',
    [responseCodes.RESP_ERR_USER_DECLINED]: 'Request Declined by User',
    [responseCodes.RESP_ERR_PAIR_FAIL]: 'Pairing Failed',
    [responseCodes.RESP_ERR_PAIR_DISABLED]: 'Pairing is Currently Disabled',
    [responseCodes.RESP_ERR_PERMISSION_DISABLED]: 'Automated Signing is Currently Disabled',
    [responseCodes.RESP_ERR_INTERNAL]: 'Device Error',
    [responseCodes.RESP_ERR_GCE_TIMEOUT]: 'Timeout',
    [responseCodes.RESP_ERR_WALLET_NOT_PRESENT]: 'Incorrect Wallet UID Provided',
    [responseCodes.RESP_ERR_DEV_LOCKED]: 'Device Locked',
    [responseCodes.RESP_ERR_DISABLED]: 'Disabled',
    [responseCodes.RESP_ERR_ALREADY]: 'Record already exists. You must first remove it on your device.'
}
 

const signingSchema = {
    BTC_TRANSFER: 0,
    ETH_TRANSFER: 1,
    ERC20_TRANSFER: 2,
    ETH_MSG: 3,
}

const ethMsgProtocol = {
    SIGN_PERSONAL: 0,
}

const REQUEST_TYPE_BYTE = 0x02; // For all HSM-bound requests
const VERSION_BYTE = 1;
const HARDENED_OFFSET = 0x80000000; // Hardened offset
const HANDLE_LARGER_CHAIN_ID = 255; // ChainId value to signify larger chainID is in data buffer
const MAX_CHAIN_ID_BYTES = 8; // Max number of bytes to contain larger chainID in data buffer

const BASE_URL = 'https://signing.gridpl.us';

const ETH_ABI_LATTICE_FW_TYPE_MAP = {
    'address': 1,
    'bool': 2,
    'uint8': 3,
    'uint16': 4,
    'uint32': 5,
    'uint64': 6,
    'uint128': 7,
    'uint256': 8,
    // 'int8': 9,      // We do not support signed integer types in v1 because we can't display them
    // 'int16': 10,
    // 'int24': 11,
    // 'int64': 12,
    // 'int128': 13,
    // 'int256': 14,
    'uint': 15,
    // 'int': 16,
    'bytes1': 17,
    'bytes2': 18,
    'bytes3': 19,
    'bytes4': 20,
    'bytes5': 21,
    'bytes6': 22,
    'bytes7': 23,
    'bytes8': 24,
    'bytes9': 25,
    'bytes10': 26,
    'bytes11': 27,
    'bytes12': 28,
    'bytes13': 29,
    'bytes14': 30,
    'bytes15': 31,
    'bytes16': 32,
    'bytes17': 33,
    'bytes18': 34,
    'bytes19': 35,
    'bytes20': 36,
    'bytes21': 37,
    'bytes22': 38,
    'bytes23': 39,
    'bytes24': 40,
    'bytes25': 41,
    'bytes26': 42,
    'bytes27': 43,
    'bytes28': 44,
    'bytes29': 45,
    'bytes30': 46,
    'bytes31': 47,
    'bytes32': 48,
    'bytes': 49,
    'string': 50,
};

function getFwVersionConst(v) {
    const c = {
        reqMaxDataSz: 1152,
    };
    if (v.length === 0 || (v[1] < 10 && v[2] === 0)) {
        c.ethMaxDataSz = c.reqMaxDataSz - 128;
        c.ethMaxMsgSz = c.ethMaxDataSz;
        c.ethMaxGasPrice = 500000000000; // 500 gwei
        c.addrFlagsAllowed = false;
    } else if (v[1] >= 10 && v[2] >= 0) {
        c.reqMaxDataSz = 1678;
        c.ethMaxDataSz = c.reqMaxDataSz - 128;
        c.ethMaxMsgSz = c.ethMaxDataSz;
        c.ethMaxGasPrice = 20000000000000; // 20000 gwei
        c.addrFlagsAllowed = true;
    }
    return c;
}

module.exports = {
    getFwVersionConst,
    ADDR_STR_LEN,
    AES_IV,
    BASE_URL,
    ENC_MSG_LEN,
    addressSizes,
    decResLengths,
    deviceCodes,
    encReqCodes,
    ethMsgProtocol,
    messageConstants,
    responseCodes,
    responseMsgs,
    signingSchema,
    REQUEST_TYPE_BYTE,
    VERSION_BYTE,
    HARDENED_OFFSET,
    HANDLE_LARGER_CHAIN_ID,
    MAX_CHAIN_ID_BYTES,
    ETH_ABI_LATTICE_FW_TYPE_MAP,
}

/***/ }),

/***/ "./node_modules/gridplus-sdk/src/ethereum.js":
/*!***************************************************!*\
  !*** ./node_modules/gridplus-sdk/src/ethereum.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Utils for Ethereum transactions. This is effecitvely a shim of ethereumjs-util, which
// does not have browser (or, by proxy, React-Native) support.
const BN = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
const Buffer = __webpack_require__(/*! buffer/ */ "./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer
const constants = __webpack_require__(/*! ./constants */ "./node_modules/gridplus-sdk/src/constants.js");
const keccak256 = __webpack_require__(/*! js-sha3 */ "./node_modules/gridplus-sdk/node_modules/js-sha3/src/sha3.js").keccak256;
const rlp = __webpack_require__(/*! rlp-browser */ "./node_modules/rlp-browser/index.js");
const secp256k1 = __webpack_require__(/*! secp256k1 */ "./node_modules/gridplus-sdk/node_modules/secp256k1/elliptic.js");

exports.buildEthereumMsgRequest = function(input) {
  if (!input.payload || !input.protocol || !input.signerPath)
    throw new Error('You must provide `payload`, `signerPath`, and `protocol` arguments in the messsage request');
  const req = {
    schema: constants.signingSchema.ETH_MSG,
    payload: null,
    input, // Save the input for later
    msg: null, // Save the buffered message for later
  }
  if (input.protocol === 'signPersonal') {
    const L = ((input.signerPath.length + 1) * 4) + input.ethMaxMsgSz + 4;
    let off = 0;
    req.payload = Buffer.alloc(L);
    req.payload.writeUInt8(constants.ethMsgProtocol.SIGN_PERSONAL, 0); off += 1;
    req.payload.writeUInt32LE(input.signerPath.length, off); off += 4;
    for (let i = 0; i < input.signerPath.length; i++) {
      req.payload.writeUInt32LE(input.signerPath[i], off); off += 4;
    }
    // Write the payload buffer. The payload can come in either as a buffer or as a string
    let payload = input.payload;
    // Determine if this is a hex string
    let displayHex = false;
    if (typeof input.payload === 'string') {
      if (input.payload.slice(0, 2) === '0x') {
        payload = ensureHexBuffer(input.payload)
        displayHex = true === isHexStr(input.payload.slice(2));
      } else {
        if (false === latticeCanDisplayStr(input.payload))
          throw new Error('Currently, the Lattice can only display ASCII strings.');
        payload = Buffer.from(input.payload)
      }
    } else if (typeof input.displayHex === 'boolean') {
      // If this is a buffer and the user has specified whether or not this
      // is a hex buffer with the optional argument, write that
      displayHex = input.displayHex
    }
    // Write the payload and metadata into our buffer
    req.msg = payload;
    req.payload.writeUInt8(displayHex, off); off += 1;
    req.payload.writeUInt16LE(payload.length, off); off += 2;
    // Make sure we didn't run past the max size
    if (payload.length > input.ethMaxMsgSz)
      throw new Error(`Your message is ${payload.length} bytes, but can only be a maximum of ${input.ethMaxMsgSz}`);
    payload.copy(req.payload, off);
    return req;
  } else {
    throw new Error('Unsupported protocol');
  }
}

exports.validateEthereumMsgResponse = function(res, req) {
  const { signer, sig } = res;
  const { input, msg } = req;
  if (input.protocol === 'signPersonal') {
    const prefix = Buffer.from(
      `\u0019Ethereum Signed Message:\n${msg.length.toString()}`,
      'utf-8',
    );
    return addRecoveryParam(Buffer.concat([prefix, msg]), sig, signer)
  } else {
    throw new Error('Unsupported protocol');
  }
}

exports.buildEthereumTxRequest = function(data) {
  try {
    let { chainId=1 } = data;
    const { signerPath, eip155=null, ethMaxDataSz } = data;
    // Sanity checks:
    // There are a handful of named chains we allow the user to reference (`chainIds`)
    // Custom chainIDs should be either numerical or hex strings
    if (typeof chainId !== 'number' && isValidChainIdHexNumStr(chainId) === false) 
      chainId = chainIds[chainId];
    // If this was not a custom chainID and we cannot find the name of it, exit
    if (!chainId) 
      throw new Error('Unsupported chain ID or name');
    // Sanity check on signePath
    if (!signerPath || signerPath.length !== 5) 
      throw new Error('Please provider full signer path (`signerPath`)')

    // Determine if we should use EIP155 given the chainID.
    // If we are explicitly told to use eip155, we will use it. Otherwise,
    // we will look up if the specified chainId is associated with a chain
    // that does not use EIP155 by default. Note that most do use EIP155.
    let useEIP155 = chainUsesEIP155(chainId);
    if (eip155 !== null && typeof eip155 === 'boolean')
      useEIP155 = eip155;

    // Hack for metamask, which sends value=null for 0 ETH transactions
    if (!data.value)
      data.value = 0;
      
    //--------------
    // 1. BUILD THE RAW TX FOR FUTURE RLP ENCODING
    //--------------

    // Ensure all fields are 0x-prefixed hex strings
    const rawTx = [];
    // Build the transaction buffer array
    const nonceBytes = ensureHexBuffer(data.nonce);
    const gasPriceBytes = ensureHexBuffer(data.gasPrice);
    const gasLimitBytes = ensureHexBuffer(data.gasLimit);
    const toBytes = ensureHexBuffer(data.to);
    const valueBytes = ensureHexBuffer(data.value);
    const dataBytes = ensureHexBuffer(data.data);

    rawTx.push(nonceBytes);
    rawTx.push(gasPriceBytes);
    rawTx.push(gasLimitBytes);
    rawTx.push(toBytes);
    rawTx.push(valueBytes);
    rawTx.push(dataBytes);
    // Add empty v,r,s values
    if (useEIP155 === true) {
      rawTx.push(ensureHexBuffer(chainId)); // v
      rawTx.push(ensureHexBuffer(null));    // r
      rawTx.push(ensureHexBuffer(null));    // s
    }

    //--------------
    // 2. BUILD THE LATTICE REQUEST PAYLOAD
    //--------------
    const ETH_TX_NON_DATA_SZ = 122; // Accounts for metadata and non-data params
    const txReqPayload = Buffer.alloc(ethMaxDataSz + ETH_TX_NON_DATA_SZ);
    let off = 0;
    // 1. EIP155 switch and chainID
    //------------------
    txReqPayload.writeUInt8(Number(useEIP155), off); off++;
    // NOTE: Originally we designed for a 1-byte chainID, but modern rollup chains use much larger
    // chainID values. To account for these, we will put the chainID into the `data` buffer if it
    // is >=255. Values up to UINT64_MAX will be allowed.
    let chainIdBuf; 
    let chainIdBufSz = 0;
    if (useChainIdBuffer(chainId) === true) {
      chainIdBuf = getChainIdBuf(chainId);
      chainIdBufSz = chainIdBuf.length;
      if (chainIdBufSz > constants.MAX_CHAIN_ID_BYTES)
        throw new Error('ChainID provided is too large.');
      // Signal to Lattice firmware that it needs to read the chainId from the tx.data buffer
      txReqPayload.writeUInt8(constants.HANDLE_LARGER_CHAIN_ID, off); off++;
    } else {
      // For chainIDs <255, write it to the chainId u8 slot in the main tx buffer
      chainIdBuf = ensureHexBuffer(chainId);
      if (chainIdBuf.length !== 1)
        throw new Error('Error parsing chainID');
      chainIdBuf.copy(txReqPayload, off); off += chainIdBuf.length;
    }

    // 2. BIP44 Path
    //------------------
    // First write the number of indices in this path (will probably always be 5, but
    // we want to keep this extensible)
    txReqPayload.writeUInt32LE(signerPath.length, off); off += 4;
    for (let i = 0; i < signerPath.length; i++) {
      txReqPayload.writeUInt32LE(signerPath[i], off); off += 4;
    }

    // 3. ETH TX request data
    //------------------
    txReqPayload.writeUInt32BE(data.nonce, off); off += 4;
    writeUInt64BE(data.gasPrice, txReqPayload, off); off += 8;
    txReqPayload.writeUInt32BE(data.gasLimit, off); off += 4;
    toBytes.copy(txReqPayload, off); off += 20;
    // Place the value (a BE number) in an offset such that it
    // can be interpreted as a number
    const valueOff = off + 32 - valueBytes.length;
    valueBytes.copy(txReqPayload, valueOff); off += 32;
    // Ensure data field isn't too long
    if (dataBytes && dataBytes.length > ethMaxDataSz) {
      return { err: `Data field too large (must be <=${ethMaxDataSz} bytes)` }
    }
    // Write the data size (does *NOT* include the chainId buffer, if that exists)
    txReqPayload.writeUInt16BE(dataBytes.length, off); off += 2;
    if (dataBytes.length + chainIdBufSz > ethMaxDataSz)
      throw new Error('Payload too large.');
    // Copy in the chainId buffer if needed
    if (chainIdBufSz > 0) {
      txReqPayload.writeUInt8(chainIdBufSz, off); off++;
      chainIdBuf.copy(txReqPayload, off); off += chainIdBufSz;
    }
    // Copy the data itself
    dataBytes.copy(txReqPayload, off); off += ethMaxDataSz;
    return { 
      rawTx,
      payload: txReqPayload,
      schema: constants.signingSchema.ETH_TRANSFER,  // We will use eth transfer for all ETH txs for v1 
      chainId,
      useEIP155,
      signerPath,
    };
  } catch (err) {
    return { err: err.message };
  }
}

// From ethereumjs-util
function stripZeros(a) {
  let first = a[0]
  while (a.length > 0 && first.toString() === '0') {
    a = a.slice(1)
    first = a[0]
  }
  return a
}

// Given a 64-byte signature [r,s] we need to figure out the v value
// and attah the full signature to the end of the transaction payload
exports.buildEthRawTx = function(tx, sig, address, useEIP155=true) {
  // RLP-encode the data we sent to the lattice
  const rlpEncoded = rlp.encode(tx.rawTx);
  const newSig = addRecoveryParam(rlpEncoded, sig, address, tx.chainId, useEIP155);
  // Use the signature to generate a new raw transaction payload
  const newRawTx = tx.rawTx.slice(0, 6);
  newRawTx.push(newSig.v);
  // Per `ethereumjs-tx`, RLP encoding should include signature components w/ stripped zeros
  // See: https://github.com/ethereumjs/ethereumjs-tx/blob/master/src/transaction.ts#L187
  newRawTx.push(stripZeros(newSig.r));
  newRawTx.push(stripZeros(newSig.s));
  return rlp.encode(newRawTx).toString('hex');
}

// Attach a recovery parameter to a signature by brute-forcing ECRecover
function addRecoveryParam(payload, sig, address, chainId, useEIP155) {
  try {
    // Rebuild the keccak256 hash here so we can `ecrecover`
    const hash = new Uint8Array(Buffer.from(keccak256(payload), 'hex'));
    let v = 0;
    // Fix signature componenet lengths to 32 bytes each
    const r = fixLen(sig.r, 32); sig.r = r;
    const s = fixLen(sig.s, 32); sig.s = s;
    // Calculate the recovery param
    const rs = new Uint8Array(Buffer.concat([r, s]));
    let pubkey = secp256k1.ecdsaRecover(rs, v, hash, false).slice(1)
    // If the first `v` value is a match, return the sig!
    if (pubToAddrStr(pubkey) === address.toString('hex')) {
      sig.v  = getRecoveryParam(v, useEIP155, chainId);
      return sig;
    }
    // Otherwise, try the other `v` value
    v = 1;
    pubkey = secp256k1.ecdsaRecover(rs, v, hash, false).slice(1)
    if (pubToAddrStr(pubkey) === address.toString('hex')) {
      sig.v  = getRecoveryParam(v, useEIP155, chainId);
      return sig;
    } else {
      // If neither is a match, we should return an error
      throw new Error('Invalid Ethereum signature returned.');
    }
  } catch (err) {
    throw new Error(err);
  }
}
exports.addRecoveryParam = addRecoveryParam;

// Convert an RLP-serialized transaction (plus signature) into a transaction hash
exports.hashTransaction = function(serializedTx) {
  return keccak256(Buffer.from(serializedTx, 'hex')); 
}

// Returns address string given public key buffer
function pubToAddrStr(pub) {
  return keccak256(pub).slice(-40);
}

function fixLen(msg, length) {
  const buf = Buffer.alloc(length)
  if (msg.length < length) {
    msg.copy(buf, length - msg.length)
    return buf
  }
  return msg.slice(-length)
}

// Convert a 0/1 `v` into a recovery param:
// * For non-EIP155 transactions, return `27 + v`
// * For EIP155 transactions, return `(CHAIN_ID*2) + 35 + v`
function getRecoveryParam(v, useEIP155, chainId) {
  // If we are not using EIP155, convert v directly to a buffer and return it
  if (false === useEIP155)
    return Buffer.from(new BN(v).plus(27).toString(16), 'hex');
  // We will use EIP155 in most cases. Convert v to a bignum and operate on it.
  // Note that the protocol calls for v = (CHAIN_ID*2) + 35/36, where 35 or 36
  // is decided on based on the ecrecover result. `v` is passed in as either 0 or 1
  // so we add 35 to that.
  const chainIdBuf = getChainIdBuf(chainId);
  const chainIdBN = new BN(chainIdBuf.toString('hex'), 16);
  return ensureHexBuffer(chainIdBN.times(2).plus(35).plus(v).toString(16));
}

function writeUInt64BE(n, buf, off) {
  if (typeof n === 'number') n = n.toString(16);
  const preBuf = Buffer.alloc(8);
  const nStr = n.length % 2 === 0 ? n.toString(16) : `0${n.toString(16)}`;
  const nBuf = Buffer.from(nStr, 'hex');
  nBuf.copy(preBuf, preBuf.length - nBuf.length);
  preBuf.copy(buf, off);
  return preBuf;
}

function isHexStr(str) {
  return (/^[0-9a-fA-F]+$/).test(str)
}

// Determine if the Lattice can display a string we give it. Currently, the Lattice can only
// display ASCII strings, so we will reject other UTF8 codes.
// In the future we may add a mechanism to display certain UTF8 codes such as popular emojis.
function latticeCanDisplayStr(str) {
  for (let i = 0; i < str.length; i++)
    if (str.charCodeAt(i) < 0x0020 || str.charCodeAt(i) > 0x007f)
      return false;
  return true;
}

const chainIds = {
  mainnet: 1,
  roptsten: 3,
  rinkeby: 4,
  kovan: 42,
  goerli: 5
}

// Get a buffer containing the chainId value.
// Returns a 1, 2, 4, or 8 byte buffer with the chainId encoded in big endian
function getChainIdBuf(chainId) {
  let b;
  // If our chainID is a hex string, we can convert it to a hex
  // buffer directly
  if (true === isValidChainIdHexNumStr(chainId))
    b = ensureHexBuffer(chainId);
  // If our chainID is a base-10 number, parse with bignumber.js and convert to hex buffer
  else
    b = ensureHexBuffer(new BN(chainId).toString(16));
  // Make sure the buffer is an allowed size
  if (b.length > 8)
    throw new Error('ChainID provided is too large.');
  // If this matches a u16, u32, or u64 size, return it now
  if (b.length <= 2 || b.length === 4 || b.length === 8)
    return b;
  // For other size buffers, we need to pack into u32 or u64 before returning;
  let buf;
  if (b.length === 3) {
    buf = Buffer.alloc(4);
    buf.writeUInt32BE(chainId);
  } else if (b.length <= 8) {
    buf = Buffer.alloc(8);
    b.copy(buf, 8 - b.length)
  }
  return buf;
}

// Determine if the chain uses EIP155 by default, based on the chainID
function chainUsesEIP155(chainID) {
  switch (chainID) {
    case 3: // ropsten
    case 4: // rinkeby
      return false;
    case 1: // mainnet
    case 42: // kovan
    case 5: // goerli
    default: // all others should use eip155
      return true;
  }
}

// Determine if a valid number was passed in as a hex string
function isValidChainIdHexNumStr(s) {
  return new BN(s, 16).isNaN() === false;
}

// If this is a nubmer that fits in one byte, we don't need to add it
// to the `data` buffer of the main transaction. 
// Note the one edge case: we still need to use the `data` field for chainID=255.
function useChainIdBuffer(id) {
  const buf = getChainIdBuf(id);
  if (buf.length === 1)
    return buf.readUInt8(0) === 255;
  return true;
}

exports.chainIds = chainIds;

// Ensure a param is represented by a buffer
// TODO: Remove circular dependency in util.js so that we can put this function there
function ensureHexBuffer(x) {
  if (x === null || x === 0) return Buffer.alloc(0);
  else if (Buffer.isBuffer(x)) x = x.toString('hex');
  if (typeof x === 'number') x = `${x.toString(16)}`;
  else if (typeof x === 'string' && x.slice(0, 2) === '0x') x = x.slice(2);
  if (x.length % 2 > 0) x = `0${x}`;
  return Buffer.from(x, 'hex');
}
exports.ensureHexBuffer = ensureHexBuffer;

/***/ }),

/***/ "./node_modules/gridplus-sdk/src/ethereumAbi.js":
/*!******************************************************!*\
  !*** ./node_modules/gridplus-sdk/src/ethereumAbi.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Buffer = __webpack_require__(/*! buffer/ */ "./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer
const keccak256 = __webpack_require__(/*! js-sha3 */ "./node_modules/gridplus-sdk/node_modules/js-sha3/src/sha3.js").keccak256;
const { ETH_ABI_LATTICE_FW_TYPE_MAP } = __webpack_require__(/*! ./constants */ "./node_modules/gridplus-sdk/src/constants.js");
const NAME_MAX_SZ = 100;
const HEADER_SZ = 5 + NAME_MAX_SZ; // 4 byte sig + name + 1 byte param count
const PARAM_SZ = 26; // 20 byte name + 6 byte def
const MAX_PARAMS = 18;
const MAX_ABI_DEFS = 2;
exports.MAX_ABI_DEFS = MAX_ABI_DEFS;

// Build a request to add ABI data
exports.buildAddAbiPayload = function(defs) {
  if (!defs || !Array.isArray(defs))
    throw new Error('Missing definitions.');
  if (defs.length > exports.MAX_ABI_DEFS)
    throw new Error(`You may only add ${MAX_ABI_DEFS} ABI definitions per request.`);
  const b = Buffer.alloc(1 + (MAX_ABI_DEFS * (HEADER_SZ + (PARAM_SZ * MAX_PARAMS))));
  let off = 0;
  b.writeUInt8(defs.length, off); off++;
  defs.forEach((def) => {
    if (!def.sig || !def.name || !def.params)
      throw new Error('name, sig, and params must be present for every ABI definition.')
    // Header data
    const sig = Buffer.from(def.sig, 'hex');
    if (sig.length !== 4)
      throw new Error('Function signatures must always be four bytes.');
    sig.copy(b, off); off += sig.length;
    const name = Buffer.from(def.name);
    if (name.length > NAME_MAX_SZ - 1) // The -1 accounts for the null terminator
      throw new Error(`Only function names shorter than ${NAME_MAX_SZ} characters are supported.`);
    Buffer.from(def.name).slice(0, NAME_MAX_SZ).copy(b, off); off += NAME_MAX_SZ;
    // Number of parameters
    const numParams = Array.isArray(def.params) ? def.params.length : 0;
    b.writeUInt8(numParams, off); off++;
    // Don't overflow the buffer
    if (numParams > MAX_PARAMS)
      throw new Error('Currently only ABI defintions with <=10 parameters are supported.');
    // Copy the params if needed
    if (numParams > 0) {
      // First copy param names (first 20 bytes)
      def.params.forEach((param) => {
        if (!param.name || !param.latticeTypeIdx || param.isArray === undefined || param.arraySz === undefined)
          throw new Error('name, latticeTypeIdx, isArray, and arraySz must be defined for all ABI params.');
        Buffer.from(param.name).slice(0, 20).copy(b, off); off += 20;
      })
      // Bump offset to account for blank param slots
      off += 20 * (MAX_PARAMS - numParams);
      // Next copy the definitions
      def.params.forEach((param) => {
        b.writeUInt8(param.latticeTypeIdx, off); off++;
        b.writeUInt8(param.isArray === true, off); off++;
        b.writeUInt32LE(param.arraySz, off); off += 4;
      })
      // Bump offset again
      off += 6 * (MAX_PARAMS - numParams);
    } else {
      // If there are no params, just bump the offset
      off += PARAM_SZ * MAX_PARAMS;
    }
  })
  return b;
}

//--------------------------------------
// PARSERS
//--------------------------------------
function parseEtherscanAbiDefs(_defs) { // `_defs` are `result` of the parsed response
  const defs = [];
  _defs.forEach((d) => {
    if (d.name && d.inputs && d.type === 'function' && d.stateMutability !== 'view') {
      const sig = getFuncSig(d);
      const params = parseEtherscanAbiInputs(d.inputs);
      defs.push({
        name: d.name,
        sig,
        params,
      })
    }
  })
  return defs;
}

exports.abiParsers = {
  etherscan: parseEtherscanAbiDefs,
}

//--------------------------------------
// HELPERS
//--------------------------------------
// Get the 4-byte function identifier based on the canonical name
function getFuncSig(f) {
  // Canonical name is:
  // funcName(paramType0, ..., paramTypeN)
  let canonicalName = `${f.name}(`;
  f.inputs.forEach((input) => {
    canonicalName += `${input.type},`
  })
  if (f.inputs.length > 0)
    canonicalName = canonicalName.slice(0, canonicalName.length - 1)
  canonicalName += ')'
  return keccak256(canonicalName).slice(0, 8);
}

// Parse the ABI param data into structs Lattice firmware will recognize.
function parseEtherscanAbiInputs(inputs) {
  const data = [];
  inputs.forEach((input) => {
    const typeName = input.type;
    const d = { isArray: false, arraySz: 0, name: input.name, };
    const openBracketIdx = typeName.indexOf('[');
    const closeBracketIdx = typeName.indexOf(']');
    if (openBracketIdx > -1 && closeBracketIdx > -1) {
      if (openBracketIdx >= closeBracketIdx) {
        ; // not a valid param -- skip it
      } else if ((openBracketIdx + 1) === closeBracketIdx) {
        d.isArray = true;
      } else {
        // Parse the array size if applicable
        const number = parseInt(typeName.slice(openBracketIdx, closeBracketIdx))
        if (isNaN(number)) {
          return d;
        }
        d.isArray = true;
        d.arraySz = number;
      }
    }
    const singularTypeName = openBracketIdx > -1 ? typeName.slice(0, openBracketIdx) : typeName;
    d.latticeTypeIdx = getTypeIdxLatticeFw(singularTypeName)
    if (!d.latticeTypeIdx)
      throw new Error(`Unsupported type: ${typeName}`)
    data.push(d)
  })
  return data;
}

// Enum values from inside Lattice firmware
function getTypeIdxLatticeFw(type) {
  return ETH_ABI_LATTICE_FW_TYPE_MAP[type];
}


/***/ }),

/***/ "./node_modules/gridplus-sdk/src/util.js":
/*!***********************************************!*\
  !*** ./node_modules/gridplus-sdk/src/util.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Static utility functions
const { buildBitcoinTxRequest } = __webpack_require__(/*! ./bitcoin */ "./node_modules/gridplus-sdk/src/bitcoin.js");
const { buildEthereumTxRequest, buildEthereumMsgRequest, ensureHexBuffer } = __webpack_require__(/*! ./ethereum */ "./node_modules/gridplus-sdk/src/ethereum.js");
const Buffer = __webpack_require__(/*! buffer/ */ "./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer
const aes = __webpack_require__(/*! aes-js */ "./node_modules/aes-js/index.js");
const crc32 = __webpack_require__(/*! crc-32 */ "./node_modules/crc-32/crc32.js");
const elliptic = __webpack_require__(/*! elliptic */ "./node_modules/elliptic/lib/elliptic.js");
const { AES_IV, responseCodes, responseMsgs, VERSION_BYTE } = __webpack_require__(/*! ./constants */ "./node_modules/gridplus-sdk/src/constants.js");
const EC = elliptic.ec;
const ec = new EC('p256');

//--------------------------------------------------
// LATTICE UTILS
//--------------------------------------------------

// Parse a response from the Lattice1
function parseLattice1Response(r) {
  const parsed = {
    err: null,
    data: null,
  }
  const b = Buffer.from(r, 'hex');
  let off = 0;
  
  // Get protocol version
  const protoVer = b.readUInt8(off); off++;
  if (protoVer !== VERSION_BYTE) {
    parsed.err = 'Incorrect protocol version. Please update your SDK';
    return parsed;
  }

  // Get the type of response
  // Should always be 0x00
  const msgType = b.readUInt8(off); off++;
  if (msgType !== 0x00) {
    parsed.err = 'Incorrect response from Lattice1';
    return parsed;
  }

  // Get the payload
  b.readUInt32BE(off); off+=4; // First 4 bytes is the id, but we don't need that anymore
  const len = b.readUInt16BE(off); off+=2;
  const payload = b.slice(off, off+len); off+=len;

  // Get response code
  const responseCode = payload.readUInt8(0);
  if (responseCode !== responseCodes.RESP_SUCCESS) {
    parsed.err = `Error from device: ${responseMsgs[responseCode] ? responseMsgs[responseCode] : 'Unknown Error'}`;
    parsed.responseCode = responseCode;
    return parsed;
  } else {
    parsed.data = payload.slice(1, payload.length);
  }

  // Verify checksum
  const cs = b.readUInt32BE(off);
  const expectedCs = checksum(b.slice(0, b.length - 4));
  if (cs !== expectedCs) {
    parsed.err = 'Invalid checksum from device response'
    parsed.data = null;
    return parsed;
  }
  
  return parsed;
}

function checksum(x) {
  // crc32 returns a signed integer - need to cast it to unsigned
  // Note that this uses the default 0xedb88320 polynomial
  return crc32.buf(x) >>> 0; // Need this to be a uint, hence the bit shift
}

// Get a 74-byte padded DER-encoded signature buffer
// `sig` must be the signature output from elliptic.js
function toPaddedDER(sig) {
  // We use 74 as the maximum length of a DER signature. All sigs must
  // be right-padded with zeros so that this can be a fixed size field
  const b = Buffer.alloc(74);
  const ds = Buffer.from(sig.toDER());
  ds.copy(b);
  return b;
}

//--------------------------------------------------
// TRANSACTION UTILS
//--------------------------------------------------
const signReqResolver = {
  'BTC': buildBitcoinTxRequest,
  'ETH': buildEthereumTxRequest,
  'ETH_MSG': buildEthereumMsgRequest,
}

// Temporary helper to determine if this is a supported BIP44 parent path
function isValidAssetPath(path) {
  const HARDENED_OFFSET = 0x80000000;
  const allowedPurposes = [HARDENED_OFFSET+49, HARDENED_OFFSET+44];
  const allowedCoins = [HARDENED_OFFSET, HARDENED_OFFSET+1, HARDENED_OFFSET+60];
  const allowedAccounts = [HARDENED_OFFSET];
  const allowedChange = [0, 1]
  return (
    (allowedPurposes.indexOf(path[0]) >= 0) &&
    (allowedCoins.indexOf(path[1]) >= 0) &&
    (allowedAccounts.indexOf(path[2]) >= 0) &&
    (allowedChange.indexOf(path[3]) >= 0)
  );
}

//--------------------------------------------------
// CRYPTO UTILS
//--------------------------------------------------
function aes256_encrypt(data, key) {
  const iv = Buffer.from(AES_IV);
  const aesCbc = new aes.ModeOfOperation.cbc(key, iv);
  const paddedData = (data.length) % 16 === 0 ? data : aes.padding.pkcs7.pad(data);
  return Buffer.from(aesCbc.encrypt(paddedData));
}

function aes256_decrypt(data, key) {
  const iv = Buffer.from(AES_IV);
  const aesCbc = new aes.ModeOfOperation.cbc(key, iv);
  return Buffer.from(aesCbc.decrypt(data));
}

// Decode a DER signature. Returns signature object {r, s } or null if there is an error
function parseDER(sigBuf) {
  if (sigBuf[0] !== 0x30 || sigBuf[2] !== 0x02) return null;
  let off = 3;
  const sig = { r: null, s: null }
  const rLen = sigBuf[off]; off++;
  sig.r = sigBuf.slice(off, off + rLen); off += rLen
  if (sigBuf[off] !== 0x02) return null;
  off++;
  const sLen = sigBuf[off]; off++;
  sig.s = sigBuf.slice(off, off + sLen);
  return sig;
}

function getP256KeyPair (priv) {
  return ec.keyFromPrivate(priv, 'hex');
}

function getP256KeyPairFromPub(pub) {
  return ec.keyFromPublic(pub, 'hex');
}


module.exports = {
  isValidAssetPath,
  ensureHexBuffer,
  signReqResolver,
  aes256_decrypt,
  aes256_encrypt,
  parseDER,
  checksum,
  parseLattice1Response,
  getP256KeyPair,
  getP256KeyPairFromPub,
  toPaddedDER,
}

/***/ }),

/***/ "./node_modules/rlp-browser/index.js":
/*!*******************************************!*\
  !*** ./node_modules/rlp-browser/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const assert = __webpack_require__(/*! assert */ "./node_modules/node-libs-browser/node_modules/assert/assert.js")
const Buffer = __webpack_require__(/*! buffer/ */ "./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer
/**
 * RLP Encoding based on: https://github.com/ethereum/wiki/wiki/%5BEnglish%5D-RLP
 * This function takes in a data, convert it to buffer if not, and a length for recursion
 *
 * @param {Buffer,String,Integer,Array} data - will be converted to buffer
 * @returns {Buffer} - returns buffer of encoded data
 **/
exports.encode = function (input) {
  if (input instanceof Array) {
    var output = []
    for (var i = 0; i < input.length; i++) {
      output.push(exports.encode(input[i]))
    }
    var buf = Buffer.concat(output)
    return Buffer.concat([encodeLength(buf.length, 192), buf])
  } else {
    input = toBuffer(input)
    if (input.length === 1 && input[0] < 128) {
      return input
    } else {
      return Buffer.concat([encodeLength(input.length, 128), input])
    }
  }
}

function safeParseInt (v, base) {
  if (v.slice(0, 2) === '00') {
    throw (new Error('invalid RLP: extra zeros'))
  }

  return parseInt(v, base)
}

function encodeLength (len, offset) {
  if (len < 56) {
    return new Buffer([len + offset])
  } else {
    var hexLength = intToHex(len)
    var lLength = hexLength.length / 2
    var firstByte = intToHex(offset + 55 + lLength)
    return new Buffer(firstByte + hexLength, 'hex')
  }
}

/**
 * RLP Decoding based on: {@link https://github.com/ethereum/wiki/wiki/%5BEnglish%5D-RLP|RLP}
 * @param {Buffer,String,Integer,Array} data - will be converted to buffer
 * @returns {Array} - returns decode Array of Buffers containg the original message
 **/
exports.decode = function (input, stream) {
  if (!input || input.length === 0) {
    return new Buffer([])
  }

  input = toBuffer(input)
  var decoded = _decode(input)

  if (stream) {
    return decoded
  }

  assert.equal(decoded.remainder.length, 0, 'invalid remainder')
  return decoded.data
}

exports.getLength = function (input) {
  if (!input || input.length === 0) {
    return new Buffer([])
  }

  input = toBuffer(input)
  var firstByte = input[0]
  if (firstByte <= 0x7f) {
    return input.length
  } else if (firstByte <= 0xb7) {
    return firstByte - 0x7f
  } else if (firstByte <= 0xbf) {
    return firstByte - 0xb6
  } else if (firstByte <= 0xf7) {
    // a list between  0-55 bytes long
    return firstByte - 0xbf
  } else {
    // a list  over 55 bytes long
    var llength = firstByte - 0xf6
    var length = safeParseInt(input.slice(1, llength).toString('hex'), 16)
    return llength + length
  }
}

function _decode (input) {
  var length, llength, data, innerRemainder, d
  var decoded = []
  var firstByte = input[0]

  if (firstByte <= 0x7f) {
    // a single byte whose value is in the [0x00, 0x7f] range, that byte is its own RLP encoding.
    return {
      data: input.slice(0, 1),
      remainder: input.slice(1)
    }
  } else if (firstByte <= 0xb7) {
    // string is 0-55 bytes long. A single byte with value 0x80 plus the length of the string followed by the string
    // The range of the first byte is [0x80, 0xb7]
    length = firstByte - 0x7f

    // set 0x80 null to 0
    if (firstByte === 0x80) {
      data = new Buffer([])
    } else {
      data = input.slice(1, length)
    }

    if (length === 2 && data[0] < 0x80) {
      throw new Error('invalid rlp encoding: byte must be less 0x80')
    }

    return {
      data: data,
      remainder: input.slice(length)
    }
  } else if (firstByte <= 0xbf) {
    llength = firstByte - 0xb6
    length = safeParseInt(input.slice(1, llength).toString('hex'), 16)
    data = input.slice(llength, length + llength)
    if (data.length < length) {
      throw (new Error('invalid RLP'))
    }

    return {
      data: data,
      remainder: input.slice(length + llength)
    }
  } else if (firstByte <= 0xf7) {
    // a list between  0-55 bytes long
    length = firstByte - 0xbf
    innerRemainder = input.slice(1, length)
    while (innerRemainder.length) {
      d = _decode(innerRemainder)
      decoded.push(d.data)
      innerRemainder = d.remainder
    }

    return {
      data: decoded,
      remainder: input.slice(length)
    }
  } else {
    // a list  over 55 bytes long
    llength = firstByte - 0xf6
    length = safeParseInt(input.slice(1, llength).toString('hex'), 16)
    var totalLength = llength + length
    if (totalLength > input.length) {
      throw new Error('invalid rlp: total length is larger than the data')
    }

    innerRemainder = input.slice(llength, totalLength)
    if (innerRemainder.length === 0) {
      throw new Error('invalid rlp, List has a invalid length')
    }

    while (innerRemainder.length) {
      d = _decode(innerRemainder)
      decoded.push(d.data)
      innerRemainder = d.remainder
    }
    return {
      data: decoded,
      remainder: input.slice(totalLength)
    }
  }
}

function isHexPrefixed (str) {
  return str.slice(0, 2) === '0x'
}

// Removes 0x from a given String
function stripHexPrefix (str) {
  if (typeof str !== 'string') {
    return str
  }
  return isHexPrefixed(str) ? str.slice(2) : str
}

function intToHex (i) {
  var hex = i.toString(16)
  if (hex.length % 2) {
    hex = '0' + hex
  }

  return hex
}

function padToEven (a) {
  if (a.length % 2) a = '0' + a
  return a
}

function intToBuffer (i) {
  var hex = intToHex(i)
  return new Buffer(hex, 'hex')
}

function toBuffer (v) {
  if (!Buffer.isBuffer(v)) {
    if (typeof v === 'string') {
      if (isHexPrefixed(v)) {
        v = new Buffer(padToEven(stripHexPrefix(v)), 'hex')
      } else {
        v = new Buffer(v)
      }
    } else if (typeof v === 'number') {
      if (!v) {
        v = new Buffer([])
      } else {
        v = intToBuffer(v)
      }
    } else if (v === null || v === undefined) {
      v = new Buffer([])
    } else if (v.toArray) {
      // converts a BN to a Buffer
      v = new Buffer(v.toArray())
    } else {
      throw new Error('invalid type')
    }
  }
  return v
}


/***/ }),

/***/ "./node_modules/superagent/lib/agent-base.js":
/*!***************************************************!*\
  !*** ./node_modules/superagent/lib/agent-base.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function Agent() {
  this._defaults = [];
}

["use", "on", "once", "set", "query", "type", "accept", "auth", "withCredentials", "sortQuery", "retry", "ok", "redirects",
 "timeout", "buffer", "serialize", "parse", "ca", "key", "pfx", "cert"].forEach(function(fn) {
  /** Default setting for all requests from this agent */
  Agent.prototype[fn] = function(/*varargs*/) {
    this._defaults.push({fn:fn, arguments:arguments});
    return this;
  }
});

Agent.prototype._setDefaults = function(req) {
    this._defaults.forEach(function(def) {
      req[def.fn].apply(req, def.arguments);
    });
};

module.exports = Agent;


/***/ }),

/***/ "./node_modules/superagent/lib/client.js":
/*!***********************************************!*\
  !*** ./node_modules/superagent/lib/client.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Root reference for iframes.
 */

var root;
if (typeof window !== 'undefined') { // Browser window
  root = window;
} else if (typeof self !== 'undefined') { // Web Worker
  root = self;
} else { // Other environments
  console.warn("Using browser-only version of superagent in non-browser environment");
  root = this;
}

var Emitter = __webpack_require__(/*! component-emitter */ "./node_modules/component-emitter/index.js");
var RequestBase = __webpack_require__(/*! ./request-base */ "./node_modules/superagent/lib/request-base.js");
var isObject = __webpack_require__(/*! ./is-object */ "./node_modules/superagent/lib/is-object.js");
var ResponseBase = __webpack_require__(/*! ./response-base */ "./node_modules/superagent/lib/response-base.js");
var Agent = __webpack_require__(/*! ./agent-base */ "./node_modules/superagent/lib/agent-base.js");

/**
 * Noop.
 */

function noop(){};

/**
 * Expose `request`.
 */

var request = exports = module.exports = function(method, url) {
  // callback
  if ('function' == typeof url) {
    return new exports.Request('GET', method).end(url);
  }

  // url first
  if (1 == arguments.length) {
    return new exports.Request('GET', method);
  }

  return new exports.Request(method, url);
}

exports.Request = Request;

/**
 * Determine XHR.
 */

request.getXHR = function () {
  if (root.XMLHttpRequest
      && (!root.location || 'file:' != root.location.protocol
          || !root.ActiveXObject)) {
    return new XMLHttpRequest;
  } else {
    try { return new ActiveXObject('Microsoft.XMLHTTP'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP.6.0'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP.3.0'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP'); } catch(e) {}
  }
  throw Error("Browser-only version of superagent could not find XHR");
};

/**
 * Removes leading and trailing whitespace, added to support IE.
 *
 * @param {String} s
 * @return {String}
 * @api private
 */

var trim = ''.trim
  ? function(s) { return s.trim(); }
  : function(s) { return s.replace(/(^\s*|\s*$)/g, ''); };

/**
 * Serialize the given `obj`.
 *
 * @param {Object} obj
 * @return {String}
 * @api private
 */

function serialize(obj) {
  if (!isObject(obj)) return obj;
  var pairs = [];
  for (var key in obj) {
    pushEncodedKeyValuePair(pairs, key, obj[key]);
  }
  return pairs.join('&');
}

/**
 * Helps 'serialize' with serializing arrays.
 * Mutates the pairs array.
 *
 * @param {Array} pairs
 * @param {String} key
 * @param {Mixed} val
 */

function pushEncodedKeyValuePair(pairs, key, val) {
  if (val != null) {
    if (Array.isArray(val)) {
      val.forEach(function(v) {
        pushEncodedKeyValuePair(pairs, key, v);
      });
    } else if (isObject(val)) {
      for(var subkey in val) {
        pushEncodedKeyValuePair(pairs, key + '[' + subkey + ']', val[subkey]);
      }
    } else {
      pairs.push(encodeURIComponent(key)
        + '=' + encodeURIComponent(val));
    }
  } else if (val === null) {
    pairs.push(encodeURIComponent(key));
  }
}

/**
 * Expose serialization method.
 */

request.serializeObject = serialize;

/**
  * Parse the given x-www-form-urlencoded `str`.
  *
  * @param {String} str
  * @return {Object}
  * @api private
  */

function parseString(str) {
  var obj = {};
  var pairs = str.split('&');
  var pair;
  var pos;

  for (var i = 0, len = pairs.length; i < len; ++i) {
    pair = pairs[i];
    pos = pair.indexOf('=');
    if (pos == -1) {
      obj[decodeURIComponent(pair)] = '';
    } else {
      obj[decodeURIComponent(pair.slice(0, pos))] =
        decodeURIComponent(pair.slice(pos + 1));
    }
  }

  return obj;
}

/**
 * Expose parser.
 */

request.parseString = parseString;

/**
 * Default MIME type map.
 *
 *     superagent.types.xml = 'application/xml';
 *
 */

request.types = {
  html: 'text/html',
  json: 'application/json',
  xml: 'text/xml',
  urlencoded: 'application/x-www-form-urlencoded',
  'form': 'application/x-www-form-urlencoded',
  'form-data': 'application/x-www-form-urlencoded'
};

/**
 * Default serialization map.
 *
 *     superagent.serialize['application/xml'] = function(obj){
 *       return 'generated xml here';
 *     };
 *
 */

request.serialize = {
  'application/x-www-form-urlencoded': serialize,
  'application/json': JSON.stringify
};

/**
  * Default parsers.
  *
  *     superagent.parse['application/xml'] = function(str){
  *       return { object parsed from str };
  *     };
  *
  */

request.parse = {
  'application/x-www-form-urlencoded': parseString,
  'application/json': JSON.parse
};

/**
 * Parse the given header `str` into
 * an object containing the mapped fields.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function parseHeader(str) {
  var lines = str.split(/\r?\n/);
  var fields = {};
  var index;
  var line;
  var field;
  var val;

  for (var i = 0, len = lines.length; i < len; ++i) {
    line = lines[i];
    index = line.indexOf(':');
    if (index === -1) { // could be empty line, just skip it
      continue;
    }
    field = line.slice(0, index).toLowerCase();
    val = trim(line.slice(index + 1));
    fields[field] = val;
  }

  return fields;
}

/**
 * Check if `mime` is json or has +json structured syntax suffix.
 *
 * @param {String} mime
 * @return {Boolean}
 * @api private
 */

function isJSON(mime) {
  // should match /json or +json
  // but not /json-seq
  return /[\/+]json($|[^-\w])/.test(mime);
}

/**
 * Initialize a new `Response` with the given `xhr`.
 *
 *  - set flags (.ok, .error, etc)
 *  - parse header
 *
 * Examples:
 *
 *  Aliasing `superagent` as `request` is nice:
 *
 *      request = superagent;
 *
 *  We can use the promise-like API, or pass callbacks:
 *
 *      request.get('/').end(function(res){});
 *      request.get('/', function(res){});
 *
 *  Sending data can be chained:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' })
 *        .end(function(res){});
 *
 *  Or passed to `.send()`:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' }, function(res){});
 *
 *  Or passed to `.post()`:
 *
 *      request
 *        .post('/user', { name: 'tj' })
 *        .end(function(res){});
 *
 * Or further reduced to a single call for simple cases:
 *
 *      request
 *        .post('/user', { name: 'tj' }, function(res){});
 *
 * @param {XMLHTTPRequest} xhr
 * @param {Object} options
 * @api private
 */

function Response(req) {
  this.req = req;
  this.xhr = this.req.xhr;
  // responseText is accessible only if responseType is '' or 'text' and on older browsers
  this.text = ((this.req.method !='HEAD' && (this.xhr.responseType === '' || this.xhr.responseType === 'text')) || typeof this.xhr.responseType === 'undefined')
     ? this.xhr.responseText
     : null;
  this.statusText = this.req.xhr.statusText;
  var status = this.xhr.status;
  // handle IE9 bug: http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request
  if (status === 1223) {
    status = 204;
  }
  this._setStatusProperties(status);
  this.header = this.headers = parseHeader(this.xhr.getAllResponseHeaders());
  // getAllResponseHeaders sometimes falsely returns "" for CORS requests, but
  // getResponseHeader still works. so we get content-type even if getting
  // other headers fails.
  this.header['content-type'] = this.xhr.getResponseHeader('content-type');
  this._setHeaderProperties(this.header);

  if (null === this.text && req._responseType) {
    this.body = this.xhr.response;
  } else {
    this.body = this.req.method != 'HEAD'
      ? this._parseBody(this.text ? this.text : this.xhr.response)
      : null;
  }
}

ResponseBase(Response.prototype);

/**
 * Parse the given body `str`.
 *
 * Used for auto-parsing of bodies. Parsers
 * are defined on the `superagent.parse` object.
 *
 * @param {String} str
 * @return {Mixed}
 * @api private
 */

Response.prototype._parseBody = function(str) {
  var parse = request.parse[this.type];
  if (this.req._parser) {
    return this.req._parser(this, str);
  }
  if (!parse && isJSON(this.type)) {
    parse = request.parse['application/json'];
  }
  return parse && str && (str.length || str instanceof Object)
    ? parse(str)
    : null;
};

/**
 * Return an `Error` representative of this response.
 *
 * @return {Error}
 * @api public
 */

Response.prototype.toError = function(){
  var req = this.req;
  var method = req.method;
  var url = req.url;

  var msg = 'cannot ' + method + ' ' + url + ' (' + this.status + ')';
  var err = new Error(msg);
  err.status = this.status;
  err.method = method;
  err.url = url;

  return err;
};

/**
 * Expose `Response`.
 */

request.Response = Response;

/**
 * Initialize a new `Request` with the given `method` and `url`.
 *
 * @param {String} method
 * @param {String} url
 * @api public
 */

function Request(method, url) {
  var self = this;
  this._query = this._query || [];
  this.method = method;
  this.url = url;
  this.header = {}; // preserves header name case
  this._header = {}; // coerces header names to lowercase
  this.on('end', function(){
    var err = null;
    var res = null;

    try {
      res = new Response(self);
    } catch(e) {
      err = new Error('Parser is unable to parse the response');
      err.parse = true;
      err.original = e;
      // issue #675: return the raw response if the response parsing fails
      if (self.xhr) {
        // ie9 doesn't have 'response' property
        err.rawResponse = typeof self.xhr.responseType == 'undefined' ? self.xhr.responseText : self.xhr.response;
        // issue #876: return the http status code if the response parsing fails
        err.status = self.xhr.status ? self.xhr.status : null;
        err.statusCode = err.status; // backwards-compat only
      } else {
        err.rawResponse = null;
        err.status = null;
      }

      return self.callback(err);
    }

    self.emit('response', res);

    var new_err;
    try {
      if (!self._isResponseOK(res)) {
        new_err = new Error(res.statusText || 'Unsuccessful HTTP response');
      }
    } catch(custom_err) {
      new_err = custom_err; // ok() callback can throw
    }

    // #1000 don't catch errors from the callback to avoid double calling it
    if (new_err) {
      new_err.original = err;
      new_err.response = res;
      new_err.status = res.status;
      self.callback(new_err, res);
    } else {
      self.callback(null, res);
    }
  });
}

/**
 * Mixin `Emitter` and `RequestBase`.
 */

Emitter(Request.prototype);
RequestBase(Request.prototype);

/**
 * Set Content-Type to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.xml = 'application/xml';
 *
 *      request.post('/')
 *        .type('xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 *      request.post('/')
 *        .type('application/xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 * @param {String} type
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.type = function(type){
  this.set('Content-Type', request.types[type] || type);
  return this;
};

/**
 * Set Accept to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.json = 'application/json';
 *
 *      request.get('/agent')
 *        .accept('json')
 *        .end(callback);
 *
 *      request.get('/agent')
 *        .accept('application/json')
 *        .end(callback);
 *
 * @param {String} accept
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.accept = function(type){
  this.set('Accept', request.types[type] || type);
  return this;
};

/**
 * Set Authorization field value with `user` and `pass`.
 *
 * @param {String} user
 * @param {String} [pass] optional in case of using 'bearer' as type
 * @param {Object} options with 'type' property 'auto', 'basic' or 'bearer' (default 'basic')
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.auth = function(user, pass, options){
  if (1 === arguments.length) pass = '';
  if (typeof pass === 'object' && pass !== null) { // pass is optional and can be replaced with options
    options = pass;
    pass = '';
  }
  if (!options) {
    options = {
      type: 'function' === typeof btoa ? 'basic' : 'auto',
    };
  }

  var encoder = function(string) {
    if ('function' === typeof btoa) {
      return btoa(string);
    }
    throw new Error('Cannot use basic auth, btoa is not a function');
  };

  return this._auth(user, pass, options, encoder);
};

/**
 * Add query-string `val`.
 *
 * Examples:
 *
 *   request.get('/shoes')
 *     .query('size=10')
 *     .query({ color: 'blue' })
 *
 * @param {Object|String} val
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.query = function(val){
  if ('string' != typeof val) val = serialize(val);
  if (val) this._query.push(val);
  return this;
};

/**
 * Queue the given `file` as an attachment to the specified `field`,
 * with optional `options` (or filename).
 *
 * ``` js
 * request.post('/upload')
 *   .attach('content', new Blob(['<a id="a"><b id="b">hey!</b></a>'], { type: "text/html"}))
 *   .end(callback);
 * ```
 *
 * @param {String} field
 * @param {Blob|File} file
 * @param {String|Object} options
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.attach = function(field, file, options){
  if (file) {
    if (this._data) {
      throw Error("superagent can't mix .send() and .attach()");
    }

    this._getFormData().append(field, file, options || file.name);
  }
  return this;
};

Request.prototype._getFormData = function(){
  if (!this._formData) {
    this._formData = new root.FormData();
  }
  return this._formData;
};

/**
 * Invoke the callback with `err` and `res`
 * and handle arity check.
 *
 * @param {Error} err
 * @param {Response} res
 * @api private
 */

Request.prototype.callback = function(err, res){
  if (this._shouldRetry(err, res)) {
    return this._retry();
  }

  var fn = this._callback;
  this.clearTimeout();

  if (err) {
    if (this._maxRetries) err.retries = this._retries - 1;
    this.emit('error', err);
  }

  fn(err, res);
};

/**
 * Invoke callback with x-domain error.
 *
 * @api private
 */

Request.prototype.crossDomainError = function(){
  var err = new Error('Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.');
  err.crossDomain = true;

  err.status = this.status;
  err.method = this.method;
  err.url = this.url;

  this.callback(err);
};

// This only warns, because the request is still likely to work
Request.prototype.buffer = Request.prototype.ca = Request.prototype.agent = function(){
  console.warn("This is not supported in browser version of superagent");
  return this;
};

// This throws, because it can't send/receive data as expected
Request.prototype.pipe = Request.prototype.write = function(){
  throw Error("Streaming is not supported in browser version of superagent");
};

/**
 * Check if `obj` is a host object,
 * we don't want to serialize these :)
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */
Request.prototype._isHost = function _isHost(obj) {
  // Native objects stringify to [object File], [object Blob], [object FormData], etc.
  return obj && 'object' === typeof obj && !Array.isArray(obj) && Object.prototype.toString.call(obj) !== '[object Object]';
}

/**
 * Initiate request, invoking callback `fn(res)`
 * with an instanceof `Response`.
 *
 * @param {Function} fn
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.end = function(fn){
  if (this._endCalled) {
    console.warn("Warning: .end() was called twice. This is not supported in superagent");
  }
  this._endCalled = true;

  // store callback
  this._callback = fn || noop;

  // querystring
  this._finalizeQueryString();

  return this._end();
};

Request.prototype._end = function() {
  var self = this;
  var xhr = (this.xhr = request.getXHR());
  var data = this._formData || this._data;

  this._setTimeouts();

  // state change
  xhr.onreadystatechange = function(){
    var readyState = xhr.readyState;
    if (readyState >= 2 && self._responseTimeoutTimer) {
      clearTimeout(self._responseTimeoutTimer);
    }
    if (4 != readyState) {
      return;
    }

    // In IE9, reads to any property (e.g. status) off of an aborted XHR will
    // result in the error "Could not complete the operation due to error c00c023f"
    var status;
    try { status = xhr.status } catch(e) { status = 0; }

    if (!status) {
      if (self.timedout || self._aborted) return;
      return self.crossDomainError();
    }
    self.emit('end');
  };

  // progress
  var handleProgress = function(direction, e) {
    if (e.total > 0) {
      e.percent = e.loaded / e.total * 100;
    }
    e.direction = direction;
    self.emit('progress', e);
  };
  if (this.hasListeners('progress')) {
    try {
      xhr.onprogress = handleProgress.bind(null, 'download');
      if (xhr.upload) {
        xhr.upload.onprogress = handleProgress.bind(null, 'upload');
      }
    } catch(e) {
      // Accessing xhr.upload fails in IE from a web worker, so just pretend it doesn't exist.
      // Reported here:
      // https://connect.microsoft.com/IE/feedback/details/837245/xmlhttprequest-upload-throws-invalid-argument-when-used-from-web-worker-context
    }
  }

  // initiate request
  try {
    if (this.username && this.password) {
      xhr.open(this.method, this.url, true, this.username, this.password);
    } else {
      xhr.open(this.method, this.url, true);
    }
  } catch (err) {
    // see #1149
    return this.callback(err);
  }

  // CORS
  if (this._withCredentials) xhr.withCredentials = true;

  // body
  if (!this._formData && 'GET' != this.method && 'HEAD' != this.method && 'string' != typeof data && !this._isHost(data)) {
    // serialize stuff
    var contentType = this._header['content-type'];
    var serialize = this._serializer || request.serialize[contentType ? contentType.split(';')[0] : ''];
    if (!serialize && isJSON(contentType)) {
      serialize = request.serialize['application/json'];
    }
    if (serialize) data = serialize(data);
  }

  // set header fields
  for (var field in this.header) {
    if (null == this.header[field]) continue;

    if (this.header.hasOwnProperty(field))
      xhr.setRequestHeader(field, this.header[field]);
  }

  if (this._responseType) {
    xhr.responseType = this._responseType;
  }

  // send stuff
  this.emit('request', this);

  // IE11 xhr.send(undefined) sends 'undefined' string as POST payload (instead of nothing)
  // We need null here if data is undefined
  xhr.send(typeof data !== 'undefined' ? data : null);
  return this;
};

request.agent = function() {
  return new Agent();
};

["GET", "POST", "OPTIONS", "PATCH", "PUT", "DELETE"].forEach(function(method) {
  Agent.prototype[method.toLowerCase()] = function(url, fn) {
    var req = new request.Request(method, url);
    this._setDefaults(req);
    if (fn) {
      req.end(fn);
    }
    return req;
  };
});

Agent.prototype.del = Agent.prototype['delete'];

/**
 * GET `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.get = function(url, data, fn) {
  var req = request('GET', url);
  if ('function' == typeof data) (fn = data), (data = null);
  if (data) req.query(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * HEAD `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.head = function(url, data, fn) {
  var req = request('HEAD', url);
  if ('function' == typeof data) (fn = data), (data = null);
  if (data) req.query(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * OPTIONS query to `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.options = function(url, data, fn) {
  var req = request('OPTIONS', url);
  if ('function' == typeof data) (fn = data), (data = null);
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * DELETE `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

function del(url, data, fn) {
  var req = request('DELETE', url);
  if ('function' == typeof data) (fn = data), (data = null);
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
}

request['del'] = del;
request['delete'] = del;

/**
 * PATCH `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.patch = function(url, data, fn) {
  var req = request('PATCH', url);
  if ('function' == typeof data) (fn = data), (data = null);
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * POST `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.post = function(url, data, fn) {
  var req = request('POST', url);
  if ('function' == typeof data) (fn = data), (data = null);
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * PUT `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.put = function(url, data, fn) {
  var req = request('PUT', url);
  if ('function' == typeof data) (fn = data), (data = null);
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};


/***/ }),

/***/ "./node_modules/superagent/lib/is-object.js":
/*!**************************************************!*\
  !*** ./node_modules/superagent/lib/is-object.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Check if `obj` is an object.
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */

function isObject(obj) {
  return null !== obj && 'object' === typeof obj;
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/superagent/lib/request-base.js":
/*!*****************************************************!*\
  !*** ./node_modules/superagent/lib/request-base.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module of mixed-in functions shared between node and client code
 */
var isObject = __webpack_require__(/*! ./is-object */ "./node_modules/superagent/lib/is-object.js");

/**
 * Expose `RequestBase`.
 */

module.exports = RequestBase;

/**
 * Initialize a new `RequestBase`.
 *
 * @api public
 */

function RequestBase(obj) {
  if (obj) return mixin(obj);
}

/**
 * Mixin the prototype properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in RequestBase.prototype) {
    obj[key] = RequestBase.prototype[key];
  }
  return obj;
}

/**
 * Clear previous timeout.
 *
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.clearTimeout = function _clearTimeout(){
  clearTimeout(this._timer);
  clearTimeout(this._responseTimeoutTimer);
  delete this._timer;
  delete this._responseTimeoutTimer;
  return this;
};

/**
 * Override default response body parser
 *
 * This function will be called to convert incoming data into request.body
 *
 * @param {Function}
 * @api public
 */

RequestBase.prototype.parse = function parse(fn){
  this._parser = fn;
  return this;
};

/**
 * Set format of binary response body.
 * In browser valid formats are 'blob' and 'arraybuffer',
 * which return Blob and ArrayBuffer, respectively.
 *
 * In Node all values result in Buffer.
 *
 * Examples:
 *
 *      req.get('/')
 *        .responseType('blob')
 *        .end(callback);
 *
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.responseType = function(val){
  this._responseType = val;
  return this;
};

/**
 * Override default request body serializer
 *
 * This function will be called to convert data set via .send or .attach into payload to send
 *
 * @param {Function}
 * @api public
 */

RequestBase.prototype.serialize = function serialize(fn){
  this._serializer = fn;
  return this;
};

/**
 * Set timeouts.
 *
 * - response timeout is time between sending request and receiving the first byte of the response. Includes DNS and connection time.
 * - deadline is the time from start of the request to receiving response body in full. If the deadline is too short large files may not load at all on slow connections.
 *
 * Value of 0 or false means no timeout.
 *
 * @param {Number|Object} ms or {response, deadline}
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.timeout = function timeout(options){
  if (!options || 'object' !== typeof options) {
    this._timeout = options;
    this._responseTimeout = 0;
    return this;
  }

  for(var option in options) {
    switch(option) {
      case 'deadline':
        this._timeout = options.deadline;
        break;
      case 'response':
        this._responseTimeout = options.response;
        break;
      default:
        console.warn("Unknown timeout option", option);
    }
  }
  return this;
};

/**
 * Set number of retry attempts on error.
 *
 * Failed requests will be retried 'count' times if timeout or err.code >= 500.
 *
 * @param {Number} count
 * @param {Function} [fn]
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.retry = function retry(count, fn){
  // Default to 1 if no count passed or true
  if (arguments.length === 0 || count === true) count = 1;
  if (count <= 0) count = 0;
  this._maxRetries = count;
  this._retries = 0;
  this._retryCallback = fn;
  return this;
};

var ERROR_CODES = [
  'ECONNRESET',
  'ETIMEDOUT',
  'EADDRINFO',
  'ESOCKETTIMEDOUT'
];

/**
 * Determine if a request should be retried.
 * (Borrowed from segmentio/superagent-retry)
 *
 * @param {Error} err
 * @param {Response} [res]
 * @returns {Boolean}
 */
RequestBase.prototype._shouldRetry = function(err, res) {
  if (!this._maxRetries || this._retries++ >= this._maxRetries) {
    return false;
  }
  if (this._retryCallback) {
    try {
      var override = this._retryCallback(err, res);
      if (override === true) return true;
      if (override === false) return false;
      // undefined falls back to defaults
    } catch(e) {
      console.error(e);
    }
  }
  if (res && res.status && res.status >= 500 && res.status != 501) return true;
  if (err) {
    if (err.code && ~ERROR_CODES.indexOf(err.code)) return true;
    // Superagent timeout
    if (err.timeout && err.code == 'ECONNABORTED') return true;
    if (err.crossDomain) return true;
  }
  return false;
};

/**
 * Retry request
 *
 * @return {Request} for chaining
 * @api private
 */

RequestBase.prototype._retry = function() {

  this.clearTimeout();

  // node
  if (this.req) {
    this.req = null;
    this.req = this.request();
  }

  this._aborted = false;
  this.timedout = false;

  return this._end();
};

/**
 * Promise support
 *
 * @param {Function} resolve
 * @param {Function} [reject]
 * @return {Request}
 */

RequestBase.prototype.then = function then(resolve, reject) {
  if (!this._fullfilledPromise) {
    var self = this;
    if (this._endCalled) {
      console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises");
    }
    this._fullfilledPromise = new Promise(function(innerResolve, innerReject) {
      self.end(function(err, res) {
        if (err) innerReject(err);
        else innerResolve(res);
      });
    });
  }
  return this._fullfilledPromise.then(resolve, reject);
};

RequestBase.prototype['catch'] = function(cb) {
  return this.then(undefined, cb);
};

/**
 * Allow for extension
 */

RequestBase.prototype.use = function use(fn) {
  fn(this);
  return this;
};

RequestBase.prototype.ok = function(cb) {
  if ('function' !== typeof cb) throw Error("Callback required");
  this._okCallback = cb;
  return this;
};

RequestBase.prototype._isResponseOK = function(res) {
  if (!res) {
    return false;
  }

  if (this._okCallback) {
    return this._okCallback(res);
  }

  return res.status >= 200 && res.status < 300;
};

/**
 * Get request header `field`.
 * Case-insensitive.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */

RequestBase.prototype.get = function(field){
  return this._header[field.toLowerCase()];
};

/**
 * Get case-insensitive header `field` value.
 * This is a deprecated internal API. Use `.get(field)` instead.
 *
 * (getHeader is no longer used internally by the superagent code base)
 *
 * @param {String} field
 * @return {String}
 * @api private
 * @deprecated
 */

RequestBase.prototype.getHeader = RequestBase.prototype.get;

/**
 * Set header `field` to `val`, or multiple fields with one object.
 * Case-insensitive.
 *
 * Examples:
 *
 *      req.get('/')
 *        .set('Accept', 'application/json')
 *        .set('X-API-Key', 'foobar')
 *        .end(callback);
 *
 *      req.get('/')
 *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })
 *        .end(callback);
 *
 * @param {String|Object} field
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.set = function(field, val){
  if (isObject(field)) {
    for (var key in field) {
      this.set(key, field[key]);
    }
    return this;
  }
  this._header[field.toLowerCase()] = val;
  this.header[field] = val;
  return this;
};

/**
 * Remove header `field`.
 * Case-insensitive.
 *
 * Example:
 *
 *      req.get('/')
 *        .unset('User-Agent')
 *        .end(callback);
 *
 * @param {String} field
 */
RequestBase.prototype.unset = function(field){
  delete this._header[field.toLowerCase()];
  delete this.header[field];
  return this;
};

/**
 * Write the field `name` and `val`, or multiple fields with one object
 * for "multipart/form-data" request bodies.
 *
 * ``` js
 * request.post('/upload')
 *   .field('foo', 'bar')
 *   .end(callback);
 *
 * request.post('/upload')
 *   .field({ foo: 'bar', baz: 'qux' })
 *   .end(callback);
 * ```
 *
 * @param {String|Object} name
 * @param {String|Blob|File|Buffer|fs.ReadStream} val
 * @return {Request} for chaining
 * @api public
 */
RequestBase.prototype.field = function(name, val) {
  // name should be either a string or an object.
  if (null === name || undefined === name) {
    throw new Error('.field(name, val) name can not be empty');
  }

  if (this._data) {
    console.error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()");
  }

  if (isObject(name)) {
    for (var key in name) {
      this.field(key, name[key]);
    }
    return this;
  }

  if (Array.isArray(val)) {
    for (var i in val) {
      this.field(name, val[i]);
    }
    return this;
  }

  // val should be defined now
  if (null === val || undefined === val) {
    throw new Error('.field(name, val) val can not be empty');
  }
  if ('boolean' === typeof val) {
    val = '' + val;
  }
  this._getFormData().append(name, val);
  return this;
};

/**
 * Abort the request, and clear potential timeout.
 *
 * @return {Request}
 * @api public
 */
RequestBase.prototype.abort = function(){
  if (this._aborted) {
    return this;
  }
  this._aborted = true;
  this.xhr && this.xhr.abort(); // browser
  this.req && this.req.abort(); // node
  this.clearTimeout();
  this.emit('abort');
  return this;
};

RequestBase.prototype._auth = function(user, pass, options, base64Encoder) {
  switch (options.type) {
    case 'basic':
      this.set('Authorization', 'Basic ' + base64Encoder(user + ':' + pass));
      break;

    case 'auto':
      this.username = user;
      this.password = pass;
      break;

    case 'bearer': // usage would be .auth(accessToken, { type: 'bearer' })
      this.set('Authorization', 'Bearer ' + user);
      break;
  }
  return this;
};

/**
 * Enable transmission of cookies with x-domain requests.
 *
 * Note that for this to work the origin must not be
 * using "Access-Control-Allow-Origin" with a wildcard,
 * and also must set "Access-Control-Allow-Credentials"
 * to "true".
 *
 * @api public
 */

RequestBase.prototype.withCredentials = function(on) {
  // This is browser-only functionality. Node side is no-op.
  if (on == undefined) on = true;
  this._withCredentials = on;
  return this;
};

/**
 * Set the max redirects to `n`. Does noting in browser XHR implementation.
 *
 * @param {Number} n
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.redirects = function(n){
  this._maxRedirects = n;
  return this;
};

/**
 * Maximum size of buffered response body, in bytes. Counts uncompressed size.
 * Default 200MB.
 *
 * @param {Number} n
 * @return {Request} for chaining
 */
RequestBase.prototype.maxResponseSize = function(n){
  if ('number' !== typeof n) {
    throw TypeError("Invalid argument");
  }
  this._maxResponseSize = n;
  return this;
};

/**
 * Convert to a plain javascript object (not JSON string) of scalar properties.
 * Note as this method is designed to return a useful non-this value,
 * it cannot be chained.
 *
 * @return {Object} describing method, url, and data of this request
 * @api public
 */

RequestBase.prototype.toJSON = function() {
  return {
    method: this.method,
    url: this.url,
    data: this._data,
    headers: this._header,
  };
};

/**
 * Send `data` as the request body, defaulting the `.type()` to "json" when
 * an object is given.
 *
 * Examples:
 *
 *       // manual json
 *       request.post('/user')
 *         .type('json')
 *         .send('{"name":"tj"}')
 *         .end(callback)
 *
 *       // auto json
 *       request.post('/user')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // manual x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send('name=tj')
 *         .end(callback)
 *
 *       // auto x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // defaults to x-www-form-urlencoded
 *      request.post('/user')
 *        .send('name=tobi')
 *        .send('species=ferret')
 *        .end(callback)
 *
 * @param {String|Object} data
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.send = function(data){
  var isObj = isObject(data);
  var type = this._header['content-type'];

  if (this._formData) {
    console.error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()");
  }

  if (isObj && !this._data) {
    if (Array.isArray(data)) {
      this._data = [];
    } else if (!this._isHost(data)) {
      this._data = {};
    }
  } else if (data && this._data && this._isHost(this._data)) {
    throw Error("Can't merge these send calls");
  }

  // merge
  if (isObj && isObject(this._data)) {
    for (var key in data) {
      this._data[key] = data[key];
    }
  } else if ('string' == typeof data) {
    // default to x-www-form-urlencoded
    if (!type) this.type('form');
    type = this._header['content-type'];
    if ('application/x-www-form-urlencoded' == type) {
      this._data = this._data
        ? this._data + '&' + data
        : data;
    } else {
      this._data = (this._data || '') + data;
    }
  } else {
    this._data = data;
  }

  if (!isObj || this._isHost(data)) {
    return this;
  }

  // default to json
  if (!type) this.type('json');
  return this;
};

/**
 * Sort `querystring` by the sort function
 *
 *
 * Examples:
 *
 *       // default order
 *       request.get('/user')
 *         .query('name=Nick')
 *         .query('search=Manny')
 *         .sortQuery()
 *         .end(callback)
 *
 *       // customized sort function
 *       request.get('/user')
 *         .query('name=Nick')
 *         .query('search=Manny')
 *         .sortQuery(function(a, b){
 *           return a.length - b.length;
 *         })
 *         .end(callback)
 *
 *
 * @param {Function} sort
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.sortQuery = function(sort) {
  // _sort default to true but otherwise can be a function or boolean
  this._sort = typeof sort === 'undefined' ? true : sort;
  return this;
};

/**
 * Compose querystring to append to req.url
 *
 * @api private
 */
RequestBase.prototype._finalizeQueryString = function(){
  var query = this._query.join('&');
  if (query) {
    this.url += (this.url.indexOf('?') >= 0 ? '&' : '?') + query;
  }
  this._query.length = 0; // Makes the call idempotent

  if (this._sort) {
    var index = this.url.indexOf('?');
    if (index >= 0) {
      var queryArr = this.url.substring(index + 1).split('&');
      if ('function' === typeof this._sort) {
        queryArr.sort(this._sort);
      } else {
        queryArr.sort();
      }
      this.url = this.url.substring(0, index) + '?' + queryArr.join('&');
    }
  }
};

// For backwards compat only
RequestBase.prototype._appendQueryString = function() {console.trace("Unsupported");}

/**
 * Invoke callback with timeout error.
 *
 * @api private
 */

RequestBase.prototype._timeoutError = function(reason, timeout, errno){
  if (this._aborted) {
    return;
  }
  var err = new Error(reason + timeout + 'ms exceeded');
  err.timeout = timeout;
  err.code = 'ECONNABORTED';
  err.errno = errno;
  this.timedout = true;
  this.abort();
  this.callback(err);
};

RequestBase.prototype._setTimeouts = function() {
  var self = this;

  // deadline
  if (this._timeout && !this._timer) {
    this._timer = setTimeout(function(){
      self._timeoutError('Timeout of ', self._timeout, 'ETIME');
    }, this._timeout);
  }
  // response timeout
  if (this._responseTimeout && !this._responseTimeoutTimer) {
    this._responseTimeoutTimer = setTimeout(function(){
      self._timeoutError('Response timeout of ', self._responseTimeout, 'ETIMEDOUT');
    }, this._responseTimeout);
  }
};


/***/ }),

/***/ "./node_modules/superagent/lib/response-base.js":
/*!******************************************************!*\
  !*** ./node_modules/superagent/lib/response-base.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module dependencies.
 */

var utils = __webpack_require__(/*! ./utils */ "./node_modules/superagent/lib/utils.js");

/**
 * Expose `ResponseBase`.
 */

module.exports = ResponseBase;

/**
 * Initialize a new `ResponseBase`.
 *
 * @api public
 */

function ResponseBase(obj) {
  if (obj) return mixin(obj);
}

/**
 * Mixin the prototype properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in ResponseBase.prototype) {
    obj[key] = ResponseBase.prototype[key];
  }
  return obj;
}

/**
 * Get case-insensitive `field` value.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */

ResponseBase.prototype.get = function(field) {
  return this.header[field.toLowerCase()];
};

/**
 * Set header related properties:
 *
 *   - `.type` the content type without params
 *
 * A response of "Content-Type: text/plain; charset=utf-8"
 * will provide you with a `.type` of "text/plain".
 *
 * @param {Object} header
 * @api private
 */

ResponseBase.prototype._setHeaderProperties = function(header){
    // TODO: moar!
    // TODO: make this a util

    // content-type
    var ct = header['content-type'] || '';
    this.type = utils.type(ct);

    // params
    var params = utils.params(ct);
    for (var key in params) this[key] = params[key];

    this.links = {};

    // links
    try {
        if (header.link) {
            this.links = utils.parseLinks(header.link);
        }
    } catch (err) {
        // ignore
    }
};

/**
 * Set flags such as `.ok` based on `status`.
 *
 * For example a 2xx response will give you a `.ok` of __true__
 * whereas 5xx will be __false__ and `.error` will be __true__. The
 * `.clientError` and `.serverError` are also available to be more
 * specific, and `.statusType` is the class of error ranging from 1..5
 * sometimes useful for mapping respond colors etc.
 *
 * "sugar" properties are also defined for common cases. Currently providing:
 *
 *   - .noContent
 *   - .badRequest
 *   - .unauthorized
 *   - .notAcceptable
 *   - .notFound
 *
 * @param {Number} status
 * @api private
 */

ResponseBase.prototype._setStatusProperties = function(status){
    var type = status / 100 | 0;

    // status / class
    this.status = this.statusCode = status;
    this.statusType = type;

    // basics
    this.info = 1 == type;
    this.ok = 2 == type;
    this.redirect = 3 == type;
    this.clientError = 4 == type;
    this.serverError = 5 == type;
    this.error = (4 == type || 5 == type)
        ? this.toError()
        : false;

    // sugar
    this.created = 201 == status;
    this.accepted = 202 == status;
    this.noContent = 204 == status;
    this.badRequest = 400 == status;
    this.unauthorized = 401 == status;
    this.notAcceptable = 406 == status;
    this.forbidden = 403 == status;
    this.notFound = 404 == status;
    this.unprocessableEntity = 422 == status;
};


/***/ }),

/***/ "./node_modules/superagent/lib/utils.js":
/*!**********************************************!*\
  !*** ./node_modules/superagent/lib/utils.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Return the mime type for the given `str`.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */

exports.type = function(str){
  return str.split(/ *; */).shift();
};

/**
 * Return header field parameters.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

exports.params = function(str){
  return str.split(/ *; */).reduce(function(obj, str){
    var parts = str.split(/ *= */);
    var key = parts.shift();
    var val = parts.shift();

    if (key && val) obj[key] = val;
    return obj;
  }, {});
};

/**
 * Parse Link header fields.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

exports.parseLinks = function(str){
  return str.split(/ *, */).reduce(function(obj, str){
    var parts = str.split(/ *; */);
    var url = parts[0].slice(1, -1);
    var rel = parts[1].split(/ *= */)[1].slice(1, -1);
    obj[rel] = url;
    return obj;
  }, {});
};

/**
 * Strip content related fields from `header`.
 *
 * @param {Object} header
 * @return {Object} header
 * @api private
 */

exports.cleanHeader = function(header, changesOrigin){
  delete header['content-type'];
  delete header['content-length'];
  delete header['transfer-encoding'];
  delete header['host'];
  // secuirty
  if (changesOrigin) {
    delete header['authorization'];
    delete header['cookie'];
  }
  return header;
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2Flcy1qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2Jhc2UteC9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9iaXR3aXNlL2VzbS9iaXRzL2FuZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2JpdHdpc2UvZXNtL2JpdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9iaXR3aXNlL2VzbS9iaXRzL25hbmQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9iaXR3aXNlL2VzbS9iaXRzL25vci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2JpdHdpc2UvZXNtL2JpdHMvbm90LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYml0d2lzZS9lc20vYml0cy9vci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2JpdHdpc2UvZXNtL2JpdHMvcmVkdWNlLWFuZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2JpdHdpc2UvZXNtL2JpdHMvcmVkdWNlLW5hbmQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9iaXR3aXNlL2VzbS9iaXRzL3JlZHVjZS1ub3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9iaXR3aXNlL2VzbS9iaXRzL3JlZHVjZS1vci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2JpdHdpc2UvZXNtL2JpdHMvcmVkdWNlLXhub3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9iaXR3aXNlL2VzbS9iaXRzL3JlZHVjZS14b3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9iaXR3aXNlL2VzbS9iaXRzL3RvLWJvb2xlYW4uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9iaXR3aXNlL2VzbS9iaXRzL3RvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2JpdHdpc2UvZXNtL2JpdHMveG5vci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2JpdHdpc2UvZXNtL2JpdHMveG9yLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYml0d2lzZS9lc20vYnVmZmVyL2FuZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2JpdHdpc2UvZXNtL2J1ZmZlci9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9iaXR3aXNlL2VzbS9idWZmZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9iaXR3aXNlL2VzbS9idWZmZXIvbW9kaWZ5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYml0d2lzZS9lc20vYnVmZmVyL25hbmQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9iaXR3aXNlL2VzbS9idWZmZXIvbm9yLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYml0d2lzZS9lc20vYnVmZmVyL25vdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2JpdHdpc2UvZXNtL2J1ZmZlci9vci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2JpdHdpc2UvZXNtL2J1ZmZlci9yZWFkLWludC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2JpdHdpc2UvZXNtL2J1ZmZlci9yZWFkLXUtaW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYml0d2lzZS9lc20vYnVmZmVyL3JlYWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9iaXR3aXNlL2VzbS9idWZmZXIveG5vci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2JpdHdpc2UvZXNtL2J1ZmZlci94b3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9iaXR3aXNlL2VzbS9ieXRlL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYml0d2lzZS9lc20vYnl0ZS9yZWFkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYml0d2lzZS9lc20vYnl0ZS93cml0ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2JpdHdpc2UvZXNtL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYml0d2lzZS9lc20vaW50ZWdlci9nZXQtYml0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYml0d2lzZS9lc20vaW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2JpdHdpc2UvZXNtL2ludGVnZXIvc2V0LWJpdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2JpdHdpc2UvZXNtL2ludGVnZXIvdG9nZ2xlLWJpdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2JpdHdpc2UvZXNtL25pYmJsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2JpdHdpc2UvZXNtL25pYmJsZS9yZWFkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYml0d2lzZS9lc20vbmliYmxlL3dyaXRlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYml0d2lzZS9lc20vc3RyaW5nL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYml0d2lzZS9lc20vc3RyaW5nL3RvLWJpdHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9iaXR3aXNlL2VzbS91dGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9iczU4L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYnM1OGNoZWNrL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9iczU4Y2hlY2svaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9jb21wb25lbnQtZW1pdHRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2NyYy0zMi9jcmMzMi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2V0aC1sYXR0aWNlLWtleXJpbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9ncmlkcGx1cy1zZGsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9ncmlkcGx1cy1zZGsvbm9kZV9tb2R1bGVzL2pzLXNoYTMvc3JjL3NoYTMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9ncmlkcGx1cy1zZGsvbm9kZV9tb2R1bGVzL3NlY3AyNTZrMS9lbGxpcHRpYy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2dyaWRwbHVzLXNkay9ub2RlX21vZHVsZXMvc2VjcDI1NmsxL2xpYi9lbGxpcHRpYy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2dyaWRwbHVzLXNkay9ub2RlX21vZHVsZXMvc2VjcDI1NmsxL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2dyaWRwbHVzLXNkay9zcmMvYml0Y29pbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2dyaWRwbHVzLXNkay9zcmMvY2xpZW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZ3JpZHBsdXMtc2RrL3NyYy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9ncmlkcGx1cy1zZGsvc3JjL2V0aGVyZXVtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZ3JpZHBsdXMtc2RrL3NyYy9ldGhlcmV1bUFiaS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2dyaWRwbHVzLXNkay9zcmMvdXRpbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JscC1icm93c2VyL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvc3VwZXJhZ2VudC9saWIvYWdlbnQtYmFzZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3N1cGVyYWdlbnQvbGliL2NsaWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3N1cGVyYWdlbnQvbGliL2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3N1cGVyYWdlbnQvbGliL3JlcXVlc3QtYmFzZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3N1cGVyYWdlbnQvbGliL3Jlc3BvbnNlLWJhc2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9zdXBlcmFnZW50L2xpYi91dGlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUNBQXlDLGNBQWM7O0FBRXZELHVCQUF1QixxQkFBcUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFD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QUFDQTtBQUNBLGlCQUFpQixvQ0FBb0M7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSCxlQUFlLHdCQUF3QjtBQUN2QztBQUNBO0FBQ0E7QUFDQSxNQUFNLG1DQUFPO0FBQ2I7QUFDQSxPQUFPO0FBQUEsb0dBQUM7QUFDUjtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQy9vQkQsaUJBQWlCLG1CQUFPLENBQUMsOEVBQU8sRUFBRSxtQkFBTyxDQUFDLDBGQUFnQjs7Ozs7Ozs7Ozs7O0FDQTFELFdBQVcsbUJBQU8sQ0FBQyx5REFBVTs7QUFFN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixPQUFPLGFBQWEsRUFBRTtBQUMzQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixPQUFPLGFBQWEsRUFBRTtBQUMzQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLG1CQUFtQjtBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLG1CQUFtQixvQkFBb0I7QUFDdkM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGtCQUFrQjtBQUNyQzs7QUFFQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXLFNBQVM7O0FBRXBCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVLHVEQUF1RDs7QUFFakU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVLHVEQUF1RDs7QUFFakU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNDQUFzQywwQ0FBMEM7QUFDaEYsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLG9CQUFvQjs7QUFFcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0Esb0JBQW9COztBQUVwQjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsMEVBQTBFO0FBQzFFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsUUFBUTtBQUM3QixLQUFLO0FBQ0w7QUFDQTtBQUNBLHFCQUFxQixRQUFROztBQUU3QjtBQUNBO0FBQ0EscUJBQXFCLFFBQVE7O0FBRTdCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2paQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtELEtBQUs7O0FBRXZEO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixLQUFLLG9DQUFvQyxRQUFRO0FBQy9FO0FBQ0EsS0FBSztBQUNMLDhCQUE4QixLQUFLLG1DQUFtQyxPQUFPO0FBQzdFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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LEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3JPQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsMkJBQTJCO0FBQ3BEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7Ozs7Ozs7Ozs7O0FD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QTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixZQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLHNCQUFzQixXQUFXLFlBQVk7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRGQUE0RjtBQUM1RjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFF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QUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3ZJYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUI7QUFDdkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRyxJQUFJO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLElBQUk7QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvNC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qISBNSVQgTGljZW5zZS4gQ29weXJpZ2h0IDIwMTUtMjAxOCBSaWNoYXJkIE1vb3JlIDxtZUByaWNtb28uY29tPi4gU2VlIExJQ0VOU0UudHh0LiAqL1xuKGZ1bmN0aW9uKHJvb3QpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIGZ1bmN0aW9uIGNoZWNrSW50KHZhbHVlKSB7XG4gICAgICAgIHJldHVybiAocGFyc2VJbnQodmFsdWUpID09PSB2YWx1ZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tJbnRzKGFycmF5aXNoKSB7XG4gICAgICAgIGlmICghY2hlY2tJbnQoYXJyYXlpc2gubGVuZ3RoKSkgeyByZXR1cm4gZmFsc2U7IH1cblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5aXNoLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoIWNoZWNrSW50KGFycmF5aXNoW2ldKSB8fCBhcnJheWlzaFtpXSA8IDAgfHwgYXJyYXlpc2hbaV0gPiAyNTUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb2VyY2VBcnJheShhcmcsIGNvcHkpIHtcblxuICAgICAgICAvLyBBcnJheUJ1ZmZlciB2aWV3XG4gICAgICAgIGlmIChhcmcuYnVmZmVyICYmIGFyZy5uYW1lID09PSAnVWludDhBcnJheScpIHtcblxuICAgICAgICAgICAgaWYgKGNvcHkpIHtcbiAgICAgICAgICAgICAgICBpZiAoYXJnLnNsaWNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyZyA9IGFyZy5zbGljZSgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGFyZyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSXQncyBhbiBhcnJheTsgY2hlY2sgaXQgaXMgYSB2YWxpZCByZXByZXNlbnRhdGlvbiBvZiBhIGJ5dGVcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuICAgICAgICAgICAgaWYgKCFjaGVja0ludHMoYXJnKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQXJyYXkgY29udGFpbnMgaW52YWxpZCB2YWx1ZTogJyArIGFyZyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShhcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU29tZXRoaW5nIGVsc2UsIGJ1dCBiZWhhdmVzIGxpa2UgYW4gYXJyYXkgKG1heWJlIGEgQnVmZmVyPyBBcmd1bWVudHM/KVxuICAgICAgICBpZiAoY2hlY2tJbnQoYXJnLmxlbmd0aCkgJiYgY2hlY2tJbnRzKGFyZykpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShhcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1bnN1cHBvcnRlZCBhcnJheS1saWtlIG9iamVjdCcpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUFycmF5KGxlbmd0aCkge1xuICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkobGVuZ3RoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb3B5QXJyYXkoc291cmNlQXJyYXksIHRhcmdldEFycmF5LCB0YXJnZXRTdGFydCwgc291cmNlU3RhcnQsIHNvdXJjZUVuZCkge1xuICAgICAgICBpZiAoc291cmNlU3RhcnQgIT0gbnVsbCB8fCBzb3VyY2VFbmQgIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKHNvdXJjZUFycmF5LnNsaWNlKSB7XG4gICAgICAgICAgICAgICAgc291cmNlQXJyYXkgPSBzb3VyY2VBcnJheS5zbGljZShzb3VyY2VTdGFydCwgc291cmNlRW5kKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc291cmNlQXJyYXkgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChzb3VyY2VBcnJheSwgc291cmNlU3RhcnQsIHNvdXJjZUVuZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGFyZ2V0QXJyYXkuc2V0KHNvdXJjZUFycmF5LCB0YXJnZXRTdGFydCk7XG4gICAgfVxuXG5cblxuICAgIHZhciBjb252ZXJ0VXRmOCA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgZnVuY3Rpb24gdG9CeXRlcyh0ZXh0KSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gW10sIGkgPSAwO1xuICAgICAgICAgICAgdGV4dCA9IGVuY29kZVVSSSh0ZXh0KTtcbiAgICAgICAgICAgIHdoaWxlIChpIDwgdGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgYyA9IHRleHQuY2hhckNvZGVBdChpKyspO1xuXG4gICAgICAgICAgICAgICAgLy8gaWYgaXQgaXMgYSAlIHNpZ24sIGVuY29kZSB0aGUgZm9sbG93aW5nIDIgYnl0ZXMgYXMgYSBoZXggdmFsdWVcbiAgICAgICAgICAgICAgICBpZiAoYyA9PT0gMzcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocGFyc2VJbnQodGV4dC5zdWJzdHIoaSwgMiksIDE2KSlcbiAgICAgICAgICAgICAgICAgICAgaSArPSAyO1xuXG4gICAgICAgICAgICAgICAgLy8gb3RoZXJ3aXNlLCBqdXN0IHRoZSBhY3R1YWwgYnl0ZVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGMpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY29lcmNlQXJyYXkocmVzdWx0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGZyb21CeXRlcyhieXRlcykge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IFtdLCBpID0gMDtcblxuICAgICAgICAgICAgd2hpbGUgKGkgPCBieXRlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgYyA9IGJ5dGVzW2ldO1xuXG4gICAgICAgICAgICAgICAgaWYgKGMgPCAxMjgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZShjKSk7XG4gICAgICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGMgPiAxOTEgJiYgYyA8IDIyNCkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKCgoYyAmIDB4MWYpIDw8IDYpIHwgKGJ5dGVzW2kgKyAxXSAmIDB4M2YpKSk7XG4gICAgICAgICAgICAgICAgICAgIGkgKz0gMjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKCgoYyAmIDB4MGYpIDw8IDEyKSB8ICgoYnl0ZXNbaSArIDFdICYgMHgzZikgPDwgNikgfCAoYnl0ZXNbaSArIDJdICYgMHgzZikpKTtcbiAgICAgICAgICAgICAgICAgICAgaSArPSAzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5qb2luKCcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0b0J5dGVzOiB0b0J5dGVzLFxuICAgICAgICAgICAgZnJvbUJ5dGVzOiBmcm9tQnl0ZXMsXG4gICAgICAgIH1cbiAgICB9KSgpO1xuXG4gICAgdmFyIGNvbnZlcnRIZXggPSAoZnVuY3Rpb24oKSB7XG4gICAgICAgIGZ1bmN0aW9uIHRvQnl0ZXModGV4dCkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0ZXh0Lmxlbmd0aDsgaSArPSAyKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocGFyc2VJbnQodGV4dC5zdWJzdHIoaSwgMiksIDE2KSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBodHRwOi8vaXh0aS5uZXQvZGV2ZWxvcG1lbnQvamF2YXNjcmlwdC8yMDExLzExLzExL2Jhc2U2NC1lbmNvZGVkZWNvZGUtb2YtdXRmOC1pbi1icm93c2VyLXdpdGgtanMuaHRtbFxuICAgICAgICB2YXIgSGV4ID0gJzAxMjM0NTY3ODlhYmNkZWYnO1xuXG4gICAgICAgIGZ1bmN0aW9uIGZyb21CeXRlcyhieXRlcykge1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB2ID0gYnl0ZXNbaV07XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKEhleFsodiAmIDB4ZjApID4+IDRdICsgSGV4W3YgJiAweDBmXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQuam9pbignJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdG9CeXRlczogdG9CeXRlcyxcbiAgICAgICAgICAgIGZyb21CeXRlczogZnJvbUJ5dGVzLFxuICAgICAgICB9XG4gICAgfSkoKTtcblxuXG4gICAgLy8gTnVtYmVyIG9mIHJvdW5kcyBieSBrZXlzaXplXG4gICAgdmFyIG51bWJlck9mUm91bmRzID0gezE2OiAxMCwgMjQ6IDEyLCAzMjogMTR9XG5cbiAgICAvLyBSb3VuZCBjb25zdGFudCB3b3Jkc1xuICAgIHZhciByY29uID0gWzB4MDEsIDB4MDIsIDB4MDQsIDB4MDgsIDB4MTAsIDB4MjAsIDB4NDAsIDB4ODAsIDB4MWIsIDB4MzYsIDB4NmMsIDB4ZDgsIDB4YWIsIDB4NGQsIDB4OWEsIDB4MmYsIDB4NWUsIDB4YmMsIDB4NjMsIDB4YzYsIDB4OTcsIDB4MzUsIDB4NmEsIDB4ZDQsIDB4YjMsIDB4N2QsIDB4ZmEsIDB4ZWYsIDB4YzUsIDB4OTFdO1xuXG4gICAgLy8gUy1ib3ggYW5kIEludmVyc2UgUy1ib3ggKFMgaXMgZm9yIFN1YnN0aXR1dGlvbilcbiAgICB2YXIgUyA9IFsweDYzLCAweDdjLCAweDc3LCAweDdiLCAweGYyLCAweDZiLCAweDZmLCAweGM1LCAweDMwLCAweDAxLCAweDY3LCAweDJiLCAweGZlLCAweGQ3LCAweGFiLCAweDc2LCAweGNhLCAweDgyLCAweGM5LCAweDdkLCAweGZhLCAweDU5LCAweDQ3LCAweGYwLCAweGFkLCAweGQ0LCAweGEyLCAweGFmLCAweDljLCAweGE0LCAweDcyLCAweGMwLCAweGI3LCAweGZkLCAweDkzLCAweDI2LCAweDM2LCAweDNmLCAweGY3LCAweGNjLCAweDM0LCAweGE1LCAweGU1LCAweGYxLCAweDcxLCAweGQ4LCAweDMxLCAweDE1LCAweDA0LCAweGM3LCAweDIzLCAweGMzLCAweDE4LCAweDk2LCAweDA1LCAweDlhLCAweDA3LCAweDEyLCAweDgwLCAweGUyLCAweGViLCAweDI3LCAweGIyLCAweDc1LCAweDA5LCAweDgzLCAweDJjLCAweDFhLCAweDFiLCAweDZlLCAweDVhLCAweGEwLCAweDUyLCAweDNiLCAweGQ2LCAweGIzLCAweDI5LCAweGUzLCAweDJmLCAweDg0LCAweDUzLCAweGQxLCAweDAwLCAweGVkLCAweDIwLCAweGZjLCAweGIxLCAweDViLCAweDZhLCAweGNiLCAweGJlLCAweDM5LCAweDRhLCAweDRjLCAweDU4LCAweGNmLCAweGQwLCAweGVmLCAweGFhLCAweGZiLCAweDQzLCAweDRkLCAweDMzLCAweDg1LCAweDQ1LCAweGY5LCAweDAyLCAweDdmLCAweDUwLCAweDNjLCAweDlmLCAweGE4LCAweDUxLCAweGEzLCAweDQwLCAweDhmLCAweDkyLCAweDlkLCAweDM4LCAweGY1LCAweGJjLCAweGI2LCAweGRhLCAweDIxLCAweDEwLCAweGZmLCAweGYzLCAweGQyLCAweGNkLCAweDBjLCAweDEzLCAweGVjLCAweDVmLCAweDk3LCAweDQ0LCAweDE3LCAweGM0LCAweGE3LCAweDdlLCAweDNkLCAweDY0LCAweDVkLCAweDE5LCAweDczLCAweDYwLCAweDgxLCAweDRmLCAweGRjLCAweDIyLCAweDJhLCAweDkwLCAweDg4LCAweDQ2LCAweGVlLCAweGI4LCAweDE0LCAweGRlLCAweDVlLCAweDBiLCAweGRiLCAweGUwLCAweDMyLCAweDNhLCAweDBhLCAweDQ5LCAweDA2LCAweDI0LCAweDVjLCAweGMyLCAweGQzLCAweGFjLCAweDYyLCAweDkxLCAweDk1LCAweGU0LCAweDc5LCAweGU3LCAweGM4LCAweDM3LCAweDZkLCAweDhkLCAweGQ1LCAweDRlLCAweGE5LCAweDZjLCAweDU2LCAweGY0LCAweGVhLCAweDY1LCAweDdhLCAweGFlLCAweDA4LCAweGJhLCAweDc4LCAweDI1LCAweDJlLCAweDFjLCAweGE2LCAweGI0LCAweGM2LCAweGU4LCAweGRkLCAweDc0LCAweDFmLCAweDRiLCAweGJkLCAweDhiLCAweDhhLCAweDcwLCAweDNlLCAweGI1LCAweDY2LCAweDQ4LCAweDAzLCAweGY2LCAweDBlLCAweDYxLCAweDM1LCAweDU3LCAweGI5LCAweDg2LCAweGMxLCAweDFkLCAweDllLCAweGUxLCAweGY4LCAweDk4LCAweDExLCAweDY5LCAweGQ5LCAweDhlLCAweDk0LCAweDliLCAweDFlLCAweDg3LCAweGU5LCAweGNlLCAweDU1LCAweDI4LCAweGRmLCAweDhjLCAweGExLCAweDg5LCAweDBkLCAweGJmLCAweGU2LCAweDQyLCAweDY4LCAweDQxLCAweDk5LCAweDJkLCAweDBmLCAweGIwLCAweDU0LCAweGJiLCAweDE2XTtcbiAgICB2YXIgU2kgPVsweDUyLCAweDA5LCAweDZhLCAweGQ1LCAweDMwLCAweDM2LCAweGE1LCAweDM4LCAweGJmLCAweDQwLCAweGEzLCAweDllLCAweDgxLCAweGYzLCAweGQ3LCAweGZiLCAweDdjLCAweGUzLCAweDM5LCAweDgyLCAweDliLCAweDJmLCAweGZmLCAweDg3LCAweDM0LCAweDhlLCAweDQzLCAweDQ0LCAweGM0LCAweGRlLCAweGU5LCAweGNiLCAweDU0LCAweDdiLCAweDk0LCAweDMyLCAweGE2LCAweGMyLCAweDIzLCAweDNkLCAweGVlLCAweDRjLCAweDk1LCAweDBiLCAweDQyLCAweGZhLCAweGMzLCAweDRlLCAweDA4LCAweDJlLCAweGExLCAweDY2LCAweDI4LCAweGQ5LCAweDI0LCAweGIyLCAweDc2LCAweDViLCAweGEyLCAweDQ5LCAweDZkLCAweDhiLCAweGQxLCAweDI1LCAweDcyLCAweGY4LCAweGY2LCAweDY0LCAweDg2LCAweDY4LCAweDk4LCAweDE2LCAweGQ0LCAweGE0LCAweDVjLCAweGNjLCAweDVkLCAweDY1LCAweGI2LCAweDkyLCAweDZjLCAweDcwLCAweDQ4LCAweDUwLCAweGZkLCAweGVkLCAweGI5LCAweGRhLCAweDVlLCAweDE1LCAweDQ2LCAweDU3LCAweGE3LCAweDhkLCAweDlkLCAweDg0LCAweDkwLCAweGQ4LCAweGFiLCAweDAwLCAweDhjLCAweGJjLCAweGQzLCAweDBhLCAweGY3LCAweGU0LCAweDU4LCAweDA1LCAweGI4LCAweGIzLCAweDQ1LCAweDA2LCAweGQwLCAweDJjLCAweDFlLCAweDhmLCAweGNhLCAweDNmLCAweDBmLCAweDAyLCAweGMxLCAweGFmLCAweGJkLCAweDAzLCAweDAxLCAweDEzLCAweDhhLCAweDZiLCAweDNhLCAweDkxLCAweDExLCAweDQxLCAweDRmLCAweDY3LCAweGRjLCAweGVhLCAweDk3LCAweGYyLCAweGNmLCAweGNlLCAweGYwLCAweGI0LCAweGU2LCAweDczLCAweDk2LCAweGFjLCAweDc0LCAweDIyLCAweGU3LCAweGFkLCAweDM1LCAweDg1LCAweGUyLCAweGY5LCAweDM3LCAweGU4LCAweDFjLCAweDc1LCAweGRmLCAweDZlLCAweDQ3LCAweGYxLCAweDFhLCAweDcxLCAweDFkLCAweDI5LCAweGM1LCAweDg5LCAweDZmLCAweGI3LCAweDYyLCAweDBlLCAweGFhLCAweDE4LCAweGJlLCAweDFiLCAweGZjLCAweDU2LCAweDNlLCAweDRiLCAweGM2LCAweGQyLCAweDc5LCAweDIwLCAweDlhLCAweGRiLCAweGMwLCAweGZlLCAweDc4LCAweGNkLCAweDVhLCAweGY0LCAweDFmLCAweGRkLCAweGE4LCAweDMzLCAweDg4LCAweDA3LCAweGM3LCAweDMxLCAweGIxLCAweDEyLCAweDEwLCAweDU5LCAweDI3LCAweDgwLCAweGVjLCAweDVmLCAweDYwLCAweDUxLCAweDdmLCAweGE5LCAweDE5LCAweGI1LCAweDRhLCAweDBkLCAweDJkLCAweGU1LCAweDdhLCAweDlmLCAweDkzLCAweGM5LCAweDljLCAweGVmLCAweGEwLCAweGUwLCAweDNiLCAweDRkLCAweGFlLCAweDJhLCAweGY1LCAweGIwLCAweGM4LCAweGViLCAweGJiLCAweDNjLCAweDgzLCAweDUzLCAweDk5LCAweDYxLCAweDE3LCAweDJiLCAweDA0LCAweDdlLCAweGJhLCAweDc3LCAweGQ2LCAweDI2LCAweGUxLCAweDY5LCAweDE0LCAweDYzLCAweDU1LCAweDIxLCAweDBjLCAweDdkXTtcblxuICAgIC8vIFRyYW5zZm9ybWF0aW9ucyBmb3IgZW5jcnlwdGlvblxuICAgIHZhciBUMSA9IFsweGM2NjM2M2E1LCAweGY4N2M3Yzg0LCAweGVlNzc3Nzk5LCAweGY2N2I3YjhkLCAweGZmZjJmMjBkLCAweGQ2NmI2YmJkLCAweGRlNmY2ZmIxLCAweDkxYzVjNTU0LCAweDYwMzAzMDUwLCAweDAyMDEwMTAzLCAweGNlNjc2N2E5LCAweDU2MmIyYjdkLCAweGU3ZmVmZTE5LCAweGI1ZDdkNzYyLCAweDRkYWJhYmU2LCAweGVjNzY3NjlhLCAweDhmY2FjYTQ1LCAweDFmODI4MjlkLCAweDg5YzljOTQwLCAweGZhN2Q3ZDg3LCAweGVmZmFmYTE1LCAweGIyNTk1OWViLCAweDhlNDc0N2M5LCAweGZiZjBmMDBiLCAweDQxYWRhZGVjLCAweGIzZDRkNDY3LCAweDVmYTJhMmZkLCAweDQ1YWZhZmVhLCAweDIzOWM5Y2JmLCAweDUzYTRhNGY3LCAweGU0NzI3Mjk2LCAweDliYzBjMDViLCAweDc1YjdiN2MyLCAweGUxZmRmZDFjLCAweDNkOTM5M2FlLCAweDRjMjYyNjZhLCAweDZjMzYzNjVhLCAweDdlM2YzZjQxLCAweGY1ZjdmNzAyLCAweDgzY2NjYzRmLCAweDY4MzQzNDVjLCAweDUxYTVhNWY0LCAweGQxZTVlNTM0LCAweGY5ZjFmMTA4LCAweGUyNzE3MTkzLCAweGFiZDhkODczLCAweDYyMzEzMTUzLCAweDJhMTUxNTNmLCAweDA4MDQwNDBjLCAweDk1YzdjNzUyLCAweDQ2MjMyMzY1LCAweDlkYzNjMzVlLCAweDMwMTgxODI4LCAweDM3OTY5NmExLCAweDBhMDUwNTBmLCAweDJmOWE5YWI1LCAweDBlMDcwNzA5LCAweDI0MTIxMjM2LCAweDFiODA4MDliLCAweGRmZTJlMjNkLCAweGNkZWJlYjI2LCAweDRlMjcyNzY5LCAweDdmYjJiMmNkLCAweGVhNzU3NTlmLCAweDEyMDkwOTFiLCAweDFkODM4MzllLCAweDU4MmMyYzc0LCAweDM0MWExYTJlLCAweDM2MWIxYjJkLCAweGRjNmU2ZWIyLCAweGI0NWE1YWVlLCAweDViYTBhMGZiLCAweGE0NTI1MmY2LCAweDc2M2IzYjRkLCAweGI3ZDZkNjYxLCAweDdkYjNiM2NlLCAweDUyMjkyOTdiLCAweGRkZTNlMzNlLCAweDVlMmYyZjcxLCAweDEzODQ4NDk3LCAweGE2NTM1M2Y1LCAweGI5ZDFkMTY4LCAweDAwMDAwMDAwLCAweGMxZWRlZDJjLCAweDQwMjAyMDYwLCAweGUzZmNmYzFmLCAweDc5YjFiMWM4LCAweGI2NWI1YmVkLCAweGQ0NmE2YWJlLCAweDhkY2JjYjQ2LCAweDY3YmViZWQ5LCAweDcyMzkzOTRiLCAweDk0NGE0YWRlLCAweDk4NGM0Y2Q0LCAweGIwNTg1OGU4LCAweDg1Y2ZjZjRhLCAweGJiZDBkMDZiLCAweGM1ZWZlZjJhLCAweDRmYWFhYWU1LCAweGVkZmJmYjE2LCAweDg2NDM0M2M1LCAweDlhNGQ0ZGQ3LCAweDY2MzMzMzU1LCAweDExODU4NTk0LCAweDhhNDU0NWNmLCAweGU5ZjlmOTEwLCAweDA0MDIwMjA2LCAweGZlN2Y3ZjgxLCAweGEwNTA1MGYwLCAweDc4M2MzYzQ0LCAweDI1OWY5ZmJhLCAweDRiYThhOGUzLCAweGEyNTE1MWYzLCAweDVkYTNhM2ZlLCAweDgwNDA0MGMwLCAweDA1OGY4ZjhhLCAweDNmOTI5MmFkLCAweDIxOWQ5ZGJjLCAweDcwMzgzODQ4LCAweGYxZjVmNTA0LCAweDYzYmNiY2RmLCAweDc3YjZiNmMxLCAweGFmZGFkYTc1LCAweDQyMjEyMTYzLCAweDIwMTAxMDMwLCAweGU1ZmZmZjFhLCAweGZkZjNmMzBlLCAweGJmZDJkMjZkLCAweDgxY2RjZDRjLCAweDE4MGMwYzE0LCAweDI2MTMxMzM1LCAweGMzZWNlYzJmLCAweGJlNWY1ZmUxLCAweDM1OTc5N2EyLCAweDg4NDQ0NGNjLCAweDJlMTcxNzM5LCAweDkzYzRjNDU3LCAweDU1YTdhN2YyLCAweGZjN2U3ZTgyLCAweDdhM2QzZDQ3LCAweGM4NjQ2NGFjLCAweGJhNWQ1ZGU3LCAweDMyMTkxOTJiLCAweGU2NzM3Mzk1LCAweGMwNjA2MGEwLCAweDE5ODE4MTk4LCAweDllNGY0ZmQxLCAweGEzZGNkYzdmLCAweDQ0MjIyMjY2LCAweDU0MmEyYTdlLCAweDNiOTA5MGFiLCAweDBiODg4ODgzLCAweDhjNDY0NmNhLCAweGM3ZWVlZTI5LCAweDZiYjhiOGQzLCAweDI4MTQxNDNjLCAweGE3ZGVkZTc5LCAweGJjNWU1ZWUyLCAweDE2MGIwYjFkLCAweGFkZGJkYjc2LCAweGRiZTBlMDNiLCAweDY0MzIzMjU2LCAweDc0M2EzYTRlLCAweDE0MGEwYTFlLCAweDkyNDk0OWRiLCAweDBjMDYwNjBhLCAweDQ4MjQyNDZjLCAweGI4NWM1Y2U0LCAweDlmYzJjMjVkLCAweGJkZDNkMzZlLCAweDQzYWNhY2VmLCAweGM0NjI2MmE2LCAweDM5OTE5MWE4LCAweDMxOTU5NWE0LCAweGQzZTRlNDM3LCAweGYyNzk3OThiLCAweGQ1ZTdlNzMyLCAweDhiYzhjODQzLCAweDZlMzczNzU5LCAweGRhNmQ2ZGI3LCAweDAxOGQ4ZDhjLCAweGIxZDVkNTY0LCAweDljNGU0ZWQyLCAweDQ5YTlhOWUwLCAweGQ4NmM2Y2I0LCAweGFjNTY1NmZhLCAweGYzZjRmNDA3LCAweGNmZWFlYTI1LCAweGNhNjU2NWFmLCAweGY0N2E3YThlLCAweDQ3YWVhZWU5LCAweDEwMDgwODE4LCAweDZmYmFiYWQ1LCAweGYwNzg3ODg4LCAweDRhMjUyNTZmLCAweDVjMmUyZTcyLCAweDM4MWMxYzI0LCAweDU3YTZhNmYxLCAweDczYjRiNGM3LCAweDk3YzZjNjUxLCAweGNiZThlODIzLCAweGExZGRkZDdjLCAweGU4NzQ3NDljLCAweDNlMWYxZjIxLCAweDk2NGI0YmRkLCAweDYxYmRiZGRjLCAweDBkOGI4Yjg2LCAweDBmOGE4YTg1LCAweGUwNzA3MDkwLCAweDdjM2UzZTQyLCAweDcxYjViNWM0LCAweGNjNjY2NmFhLCAweDkwNDg0OGQ4LCAweDA2MDMwMzA1LCAweGY3ZjZmNjAxLCAweDFjMGUwZTEyLCAweGMyNjE2MWEzLCAweDZhMzUzNTVmLCAweGFlNTc1N2Y5LCAweDY5YjliOWQwLCAweDE3ODY4NjkxLCAweDk5YzFjMTU4LCAweDNhMWQxZDI3LCAweDI3OWU5ZWI5LCAweGQ5ZTFlMTM4LCAweGViZjhmODEzLCAweDJiOTg5OGIzLCAweDIyMTExMTMzLCAweGQyNjk2OWJiLCAweGE5ZDlkOTcwLCAweDA3OGU4ZTg5LCAweDMzOTQ5NGE3LCAweDJkOWI5YmI2LCAweDNjMWUxZTIyLCAweDE1ODc4NzkyLCAweGM5ZTllOTIwLCAweDg3Y2VjZTQ5LCAweGFhNTU1NWZmLCAweDUwMjgyODc4LCAweGE1ZGZkZjdhLCAweDAzOGM4YzhmLCAweDU5YTFhMWY4LCAweDA5ODk4OTgwLCAweDFhMGQwZDE3LCAweDY1YmZiZmRhLCAweGQ3ZTZlNjMxLCAweDg0NDI0MmM2LCAweGQwNjg2OGI4LCAweDgyNDE0MWMzLCAweDI5OTk5OWIwLCAweDVhMmQyZDc3LCAweDFlMGYwZjExLCAweDdiYjBiMGNiLCAweGE4NTQ1NGZjLCAweDZkYmJiYmQ2LCAweDJjMTYxNjNhXTtcbiAgICB2YXIgVDIgPSBbMHhhNWM2NjM2MywgMHg4NGY4N2M3YywgMHg5OWVlNzc3NywgMHg4ZGY2N2I3YiwgMHgwZGZmZjJmMiwgMHhiZGQ2NmI2YiwgMHhiMWRlNmY2ZiwgMHg1NDkxYzVjNSwgMHg1MDYwMzAzMCwgMHgwMzAyMDEwMSwgMHhhOWNlNjc2NywgMHg3ZDU2MmIyYiwgMHgxOWU3ZmVmZSwgMHg2MmI1ZDdkNywgMHhlNjRkYWJhYiwgMHg5YWVjNzY3NiwgMHg0NThmY2FjYSwgMHg5ZDFmODI4MiwgMHg0MDg5YzljOSwgMHg4N2ZhN2Q3ZCwgMHgxNWVmZmFmYSwgMHhlYmIyNTk1OSwgMHhjOThlNDc0NywgMHgwYmZiZjBmMCwgMHhlYzQxYWRhZCwgMHg2N2IzZDRkNCwgMHhmZDVmYTJhMiwgMHhlYTQ1YWZhZiwgMHhiZjIzOWM5YywgMHhmNzUzYTRhNCwgMHg5NmU0NzI3MiwgMHg1YjliYzBjMCwgMHhjMjc1YjdiNywgMHgxY2UxZmRmZCwgMHhhZTNkOTM5MywgMHg2YTRjMjYyNiwgMHg1YTZjMzYzNiwgMHg0MTdlM2YzZiwgMHgwMmY1ZjdmNywgMHg0ZjgzY2NjYywgMHg1YzY4MzQzNCwgMHhmNDUxYTVhNSwgMHgzNGQxZTVlNSwgMHgwOGY5ZjFmMSwgMHg5M2UyNzE3MSwgMHg3M2FiZDhkOCwgMHg1MzYyMzEzMSwgMHgzZjJhMTUxNSwgMHgwYzA4MDQwNCwgMHg1Mjk1YzdjNywgMHg2NTQ2MjMyMywgMHg1ZTlkYzNjMywgMHgyODMwMTgxOCwgMHhhMTM3OTY5NiwgMHgwZjBhMDUwNSwgMHhiNTJmOWE5YSwgMHgwOTBlMDcwNywgMHgzNjI0MTIxMiwgMHg5YjFiODA4MCwgMHgzZGRmZTJlMiwgMHgyNmNkZWJlYiwgMHg2OTRlMjcyNywgMHhjZDdmYjJiMiwgMHg5ZmVhNzU3NSwgMHgxYjEyMDkwOSwgMHg5ZTFkODM4MywgMHg3NDU4MmMyYywgMHgyZTM0MWExYSwgMHgyZDM2MWIxYiwgMHhiMmRjNmU2ZSwgMHhlZWI0NWE1YSwgMHhmYjViYTBhMCwgMHhmNmE0NTI1MiwgMHg0ZDc2M2IzYiwgMHg2MWI3ZDZkNiwgMHhjZTdkYjNiMywgMHg3YjUyMjkyOSwgMHgzZWRkZTNlMywgMHg3MTVlMmYyZiwgMHg5NzEzODQ4NCwgMHhmNWE2NTM1MywgMHg2OGI5ZDFkMSwgMHgwMDAwMDAwMCwgMHgyY2MxZWRlZCwgMHg2MDQwMjAyMCwgMHgxZmUzZmNmYywgMHhjODc5YjFiMSwgMHhlZGI2NWI1YiwgMHhiZWQ0NmE2YSwgMHg0NjhkY2JjYiwgMHhkOTY3YmViZSwgMHg0YjcyMzkzOSwgMHhkZTk0NGE0YSwgMHhkNDk4NGM0YywgMHhlOGIwNTg1OCwgMHg0YTg1Y2ZjZiwgMHg2YmJiZDBkMCwgMHgyYWM1ZWZlZiwgMHhlNTRmYWFhYSwgMHgxNmVkZmJmYiwgMHhjNTg2NDM0MywgMHhkNzlhNGQ0ZCwgMHg1NTY2MzMzMywgMHg5NDExODU4NSwgMHhjZjhhNDU0NSwgMHgxMGU5ZjlmOSwgMHgwNjA0MDIwMiwgMHg4MWZlN2Y3ZiwgMHhmMGEwNTA1MCwgMHg0NDc4M2MzYywgMHhiYTI1OWY5ZiwgMHhlMzRiYThhOCwgMHhmM2EyNTE1MSwgMHhmZTVkYTNhMywgMHhjMDgwNDA0MCwgMHg4YTA1OGY4ZiwgMHhhZDNmOTI5MiwgMHhiYzIxOWQ5ZCwgMHg0ODcwMzgzOCwgMHgwNGYxZjVmNSwgMHhkZjYzYmNiYywgMHhjMTc3YjZiNiwgMHg3NWFmZGFkYSwgMHg2MzQyMjEyMSwgMHgzMDIwMTAxMCwgMHgxYWU1ZmZmZiwgMHgwZWZkZjNmMywgMHg2ZGJmZDJkMiwgMHg0YzgxY2RjZCwgMHgxNDE4MGMwYywgMHgzNTI2MTMxMywgMHgyZmMzZWNlYywgMHhlMWJlNWY1ZiwgMHhhMjM1OTc5NywgMHhjYzg4NDQ0NCwgMHgzOTJlMTcxNywgMHg1NzkzYzRjNCwgMHhmMjU1YTdhNywgMHg4MmZjN2U3ZSwgMHg0NzdhM2QzZCwgMHhhY2M4NjQ2NCwgMHhlN2JhNWQ1ZCwgMHgyYjMyMTkxOSwgMHg5NWU2NzM3MywgMHhhMGMwNjA2MCwgMHg5ODE5ODE4MSwgMHhkMTllNGY0ZiwgMHg3ZmEzZGNkYywgMHg2NjQ0MjIyMiwgMHg3ZTU0MmEyYSwgMHhhYjNiOTA5MCwgMHg4MzBiODg4OCwgMHhjYThjNDY0NiwgMHgyOWM3ZWVlZSwgMHhkMzZiYjhiOCwgMHgzYzI4MTQxNCwgMHg3OWE3ZGVkZSwgMHhlMmJjNWU1ZSwgMHgxZDE2MGIwYiwgMHg3NmFkZGJkYiwgMHgzYmRiZTBlMCwgMHg1NjY0MzIzMiwgMHg0ZTc0M2EzYSwgMHgxZTE0MGEwYSwgMHhkYjkyNDk0OSwgMHgwYTBjMDYwNiwgMHg2YzQ4MjQyNCwgMHhlNGI4NWM1YywgMHg1ZDlmYzJjMiwgMHg2ZWJkZDNkMywgMHhlZjQzYWNhYywgMHhhNmM0NjI2MiwgMHhhODM5OTE5MSwgMHhhNDMxOTU5NSwgMHgzN2QzZTRlNCwgMHg4YmYyNzk3OSwgMHgzMmQ1ZTdlNywgMHg0MzhiYzhjOCwgMHg1OTZlMzczNywgMHhiN2RhNmQ2ZCwgMHg4YzAxOGQ4ZCwgMHg2NGIxZDVkNSwgMHhkMjljNGU0ZSwgMHhlMDQ5YTlhOSwgMHhiNGQ4NmM2YywgMHhmYWFjNTY1NiwgMHgwN2YzZjRmNCwgMHgyNWNmZWFlYSwgMHhhZmNhNjU2NSwgMHg4ZWY0N2E3YSwgMHhlOTQ3YWVhZSwgMHgxODEwMDgwOCwgMHhkNTZmYmFiYSwgMHg4OGYwNzg3OCwgMHg2ZjRhMjUyNSwgMHg3MjVjMmUyZSwgMHgyNDM4MWMxYywgMHhmMTU3YTZhNiwgMHhjNzczYjRiNCwgMHg1MTk3YzZjNiwgMHgyM2NiZThlOCwgMHg3Y2ExZGRkZCwgMHg5Y2U4NzQ3NCwgMHgyMTNlMWYxZiwgMHhkZDk2NGI0YiwgMHhkYzYxYmRiZCwgMHg4NjBkOGI4YiwgMHg4NTBmOGE4YSwgMHg5MGUwNzA3MCwgMHg0MjdjM2UzZSwgMHhjNDcxYjViNSwgMHhhYWNjNjY2NiwgMHhkODkwNDg0OCwgMHgwNTA2MDMwMywgMHgwMWY3ZjZmNiwgMHgxMjFjMGUwZSwgMHhhM2MyNjE2MSwgMHg1ZjZhMzUzNSwgMHhmOWFlNTc1NywgMHhkMDY5YjliOSwgMHg5MTE3ODY4NiwgMHg1ODk5YzFjMSwgMHgyNzNhMWQxZCwgMHhiOTI3OWU5ZSwgMHgzOGQ5ZTFlMSwgMHgxM2ViZjhmOCwgMHhiMzJiOTg5OCwgMHgzMzIyMTExMSwgMHhiYmQyNjk2OSwgMHg3MGE5ZDlkOSwgMHg4OTA3OGU4ZSwgMHhhNzMzOTQ5NCwgMHhiNjJkOWI5YiwgMHgyMjNjMWUxZSwgMHg5MjE1ODc4NywgMHgyMGM5ZTllOSwgMHg0OTg3Y2VjZSwgMHhmZmFhNTU1NSwgMHg3ODUwMjgyOCwgMHg3YWE1ZGZkZiwgMHg4ZjAzOGM4YywgMHhmODU5YTFhMSwgMHg4MDA5ODk4OSwgMHgxNzFhMGQwZCwgMHhkYTY1YmZiZiwgMHgzMWQ3ZTZlNiwgMHhjNjg0NDI0MiwgMHhiOGQwNjg2OCwgMHhjMzgyNDE0MSwgMHhiMDI5OTk5OSwgMHg3NzVhMmQyZCwgMHgxMTFlMGYwZiwgMHhjYjdiYjBiMCwgMHhmY2E4NTQ1NCwgMHhkNjZkYmJiYiwgMHgzYTJjMTYxNl07XG4gICAgdmFyIFQzID0gWzB4NjNhNWM2NjMsIDB4N2M4NGY4N2MsIDB4Nzc5OWVlNzcsIDB4N2I4ZGY2N2IsIDB4ZjIwZGZmZjIsIDB4NmJiZGQ2NmIsIDB4NmZiMWRlNmYsIDB4YzU1NDkxYzUsIDB4MzA1MDYwMzAsIDB4MDEwMzAyMDEsIDB4NjdhOWNlNjcsIDB4MmI3ZDU2MmIsIDB4ZmUxOWU3ZmUsIDB4ZDc2MmI1ZDcsIDB4YWJlNjRkYWIsIDB4NzY5YWVjNzYsIDB4Y2E0NThmY2EsIDB4ODI5ZDFmODIsIDB4Yzk0MDg5YzksIDB4N2Q4N2ZhN2QsIDB4ZmExNWVmZmEsIDB4NTllYmIyNTksIDB4NDdjOThlNDcsIDB4ZjAwYmZiZjAsIDB4YWRlYzQxYWQsIDB4ZDQ2N2IzZDQsIDB4YTJmZDVmYTIsIDB4YWZlYTQ1YWYsIDB4OWNiZjIzOWMsIDB4YTRmNzUzYTQsIDB4NzI5NmU0NzIsIDB4YzA1YjliYzAsIDB4YjdjMjc1YjcsIDB4ZmQxY2UxZmQsIDB4OTNhZTNkOTMsIDB4MjY2YTRjMjYsIDB4MzY1YTZjMzYsIDB4M2Y0MTdlM2YsIDB4ZjcwMmY1ZjcsIDB4Y2M0ZjgzY2MsIDB4MzQ1YzY4MzQsIDB4YTVmNDUxYTUsIDB4ZTUzNGQxZTUsIDB4ZjEwOGY5ZjEsIDB4NzE5M2UyNzEsIDB4ZDg3M2FiZDgsIDB4MzE1MzYyMzEsIDB4MTUzZjJhMTUsIDB4MDQwYzA4MDQsIDB4Yzc1Mjk1YzcsIDB4MjM2NTQ2MjMsIDB4YzM1ZTlkYzMsIDB4MTgyODMwMTgsIDB4OTZhMTM3OTYsIDB4MDUwZjBhMDUsIDB4OWFiNTJmOWEsIDB4MDcwOTBlMDcsIDB4MTIzNjI0MTIsIDB4ODA5YjFiODAsIDB4ZTIzZGRmZTIsIDB4ZWIyNmNkZWIsIDB4Mjc2OTRlMjcsIDB4YjJjZDdmYjIsIDB4NzU5ZmVhNzUsIDB4MDkxYjEyMDksIDB4ODM5ZTFkODMsIDB4MmM3NDU4MmMsIDB4MWEyZTM0MWEsIDB4MWIyZDM2MWIsIDB4NmViMmRjNmUsIDB4NWFlZWI0NWEsIDB4YTBmYjViYTAsIDB4NTJmNmE0NTIsIDB4M2I0ZDc2M2IsIDB4ZDY2MWI3ZDYsIDB4YjNjZTdkYjMsIDB4Mjk3YjUyMjksIDB4ZTMzZWRkZTMsIDB4MmY3MTVlMmYsIDB4ODQ5NzEzODQsIDB4NTNmNWE2NTMsIDB4ZDE2OGI5ZDEsIDB4MDAwMDAwMDAsIDB4ZWQyY2MxZWQsIDB4MjA2MDQwMjAsIDB4ZmMxZmUzZmMsIDB4YjFjODc5YjEsIDB4NWJlZGI2NWIsIDB4NmFiZWQ0NmEsIDB4Y2I0NjhkY2IsIDB4YmVkOTY3YmUsIDB4Mzk0YjcyMzksIDB4NGFkZTk0NGEsIDB4NGNkNDk4NGMsIDB4NThlOGIwNTgsIDB4Y2Y0YTg1Y2YsIDB4ZDA2YmJiZDAsIDB4ZWYyYWM1ZWYsIDB4YWFlNTRmYWEsIDB4ZmIxNmVkZmIsIDB4NDNjNTg2NDMsIDB4NGRkNzlhNGQsIDB4MzM1NTY2MzMsIDB4ODU5NDExODUsIDB4NDVjZjhhNDUsIDB4ZjkxMGU5ZjksIDB4MDIwNjA0MDIsIDB4N2Y4MWZlN2YsIDB4NTBmMGEwNTAsIDB4M2M0NDc4M2MsIDB4OWZiYTI1OWYsIDB4YThlMzRiYTgsIDB4NTFmM2EyNTEsIDB4YTNmZTVkYTMsIDB4NDBjMDgwNDAsIDB4OGY4YTA1OGYsIDB4OTJhZDNmOTIsIDB4OWRiYzIxOWQsIDB4Mzg0ODcwMzgsIDB4ZjUwNGYxZjUsIDB4YmNkZjYzYmMsIDB4YjZjMTc3YjYsIDB4ZGE3NWFmZGEsIDB4MjE2MzQyMjEsIDB4MTAzMDIwMTAsIDB4ZmYxYWU1ZmYsIDB4ZjMwZWZkZjMsIDB4ZDI2ZGJmZDIsIDB4Y2Q0YzgxY2QsIDB4MGMxNDE4MGMsIDB4MTMzNTI2MTMsIDB4ZWMyZmMzZWMsIDB4NWZlMWJlNWYsIDB4OTdhMjM1OTcsIDB4NDRjYzg4NDQsIDB4MTczOTJlMTcsIDB4YzQ1NzkzYzQsIDB4YTdmMjU1YTcsIDB4N2U4MmZjN2UsIDB4M2Q0NzdhM2QsIDB4NjRhY2M4NjQsIDB4NWRlN2JhNWQsIDB4MTkyYjMyMTksIDB4NzM5NWU2NzMsIDB4NjBhMGMwNjAsIDB4ODE5ODE5ODEsIDB4NGZkMTllNGYsIDB4ZGM3ZmEzZGMsIDB4MjI2NjQ0MjIsIDB4MmE3ZTU0MmEsIDB4OTBhYjNiOTAsIDB4ODg4MzBiODgsIDB4NDZjYThjNDYsIDB4ZWUyOWM3ZWUsIDB4YjhkMzZiYjgsIDB4MTQzYzI4MTQsIDB4ZGU3OWE3ZGUsIDB4NWVlMmJjNWUsIDB4MGIxZDE2MGIsIDB4ZGI3NmFkZGIsIDB4ZTAzYmRiZTAsIDB4MzI1NjY0MzIsIDB4M2E0ZTc0M2EsIDB4MGExZTE0MGEsIDB4NDlkYjkyNDksIDB4MDYwYTBjMDYsIDB4MjQ2YzQ4MjQsIDB4NWNlNGI4NWMsIDB4YzI1ZDlmYzIsIDB4ZDM2ZWJkZDMsIDB4YWNlZjQzYWMsIDB4NjJhNmM0NjIsIDB4OTFhODM5OTEsIDB4OTVhNDMxOTUsIDB4ZTQzN2QzZTQsIDB4Nzk4YmYyNzksIDB4ZTczMmQ1ZTcsIDB4Yzg0MzhiYzgsIDB4Mzc1OTZlMzcsIDB4NmRiN2RhNmQsIDB4OGQ4YzAxOGQsIDB4ZDU2NGIxZDUsIDB4NGVkMjljNGUsIDB4YTllMDQ5YTksIDB4NmNiNGQ4NmMsIDB4NTZmYWFjNTYsIDB4ZjQwN2YzZjQsIDB4ZWEyNWNmZWEsIDB4NjVhZmNhNjUsIDB4N2E4ZWY0N2EsIDB4YWVlOTQ3YWUsIDB4MDgxODEwMDgsIDB4YmFkNTZmYmEsIDB4Nzg4OGYwNzgsIDB4MjU2ZjRhMjUsIDB4MmU3MjVjMmUsIDB4MWMyNDM4MWMsIDB4YTZmMTU3YTYsIDB4YjRjNzczYjQsIDB4YzY1MTk3YzYsIDB4ZTgyM2NiZTgsIDB4ZGQ3Y2ExZGQsIDB4NzQ5Y2U4NzQsIDB4MWYyMTNlMWYsIDB4NGJkZDk2NGIsIDB4YmRkYzYxYmQsIDB4OGI4NjBkOGIsIDB4OGE4NTBmOGEsIDB4NzA5MGUwNzAsIDB4M2U0MjdjM2UsIDB4YjVjNDcxYjUsIDB4NjZhYWNjNjYsIDB4NDhkODkwNDgsIDB4MDMwNTA2MDMsIDB4ZjYwMWY3ZjYsIDB4MGUxMjFjMGUsIDB4NjFhM2MyNjEsIDB4MzU1ZjZhMzUsIDB4NTdmOWFlNTcsIDB4YjlkMDY5YjksIDB4ODY5MTE3ODYsIDB4YzE1ODk5YzEsIDB4MWQyNzNhMWQsIDB4OWViOTI3OWUsIDB4ZTEzOGQ5ZTEsIDB4ZjgxM2ViZjgsIDB4OThiMzJiOTgsIDB4MTEzMzIyMTEsIDB4NjliYmQyNjksIDB4ZDk3MGE5ZDksIDB4OGU4OTA3OGUsIDB4OTRhNzMzOTQsIDB4OWJiNjJkOWIsIDB4MWUyMjNjMWUsIDB4ODc5MjE1ODcsIDB4ZTkyMGM5ZTksIDB4Y2U0OTg3Y2UsIDB4NTVmZmFhNTUsIDB4Mjg3ODUwMjgsIDB4ZGY3YWE1ZGYsIDB4OGM4ZjAzOGMsIDB4YTFmODU5YTEsIDB4ODk4MDA5ODksIDB4MGQxNzFhMGQsIDB4YmZkYTY1YmYsIDB4ZTYzMWQ3ZTYsIDB4NDJjNjg0NDIsIDB4NjhiOGQwNjgsIDB4NDFjMzgyNDEsIDB4OTliMDI5OTksIDB4MmQ3NzVhMmQsIDB4MGYxMTFlMGYsIDB4YjBjYjdiYjAsIDB4NTRmY2E4NTQsIDB4YmJkNjZkYmIsIDB4MTYzYTJjMTZdO1xuICAgIHZhciBUNCA9IFsweDYzNjNhNWM2LCAweDdjN2M4NGY4LCAweDc3Nzc5OWVlLCAweDdiN2I4ZGY2LCAweGYyZjIwZGZmLCAweDZiNmJiZGQ2LCAweDZmNmZiMWRlLCAweGM1YzU1NDkxLCAweDMwMzA1MDYwLCAweDAxMDEwMzAyLCAweDY3NjdhOWNlLCAweDJiMmI3ZDU2LCAweGZlZmUxOWU3LCAweGQ3ZDc2MmI1LCAweGFiYWJlNjRkLCAweDc2NzY5YWVjLCAweGNhY2E0NThmLCAweDgyODI5ZDFmLCAweGM5Yzk0MDg5LCAweDdkN2Q4N2ZhLCAweGZhZmExNWVmLCAweDU5NTllYmIyLCAweDQ3NDdjOThlLCAweGYwZjAwYmZiLCAweGFkYWRlYzQxLCAweGQ0ZDQ2N2IzLCAweGEyYTJmZDVmLCAweGFmYWZlYTQ1LCAweDljOWNiZjIzLCAweGE0YTRmNzUzLCAweDcyNzI5NmU0LCAweGMwYzA1YjliLCAweGI3YjdjMjc1LCAweGZkZmQxY2UxLCAweDkzOTNhZTNkLCAweDI2MjY2YTRjLCAweDM2MzY1YTZjLCAweDNmM2Y0MTdlLCAweGY3ZjcwMmY1LCAweGNjY2M0ZjgzLCAweDM0MzQ1YzY4LCAweGE1YTVmNDUxLCAweGU1ZTUzNGQxLCAweGYxZjEwOGY5LCAweDcxNzE5M2UyLCAweGQ4ZDg3M2FiLCAweDMxMzE1MzYyLCAweDE1MTUzZjJhLCAweDA0MDQwYzA4LCAweGM3Yzc1Mjk1LCAweDIzMjM2NTQ2LCAweGMzYzM1ZTlkLCAweDE4MTgyODMwLCAweDk2OTZhMTM3LCAweDA1MDUwZjBhLCAweDlhOWFiNTJmLCAweDA3MDcwOTBlLCAweDEyMTIzNjI0LCAweDgwODA5YjFiLCAweGUyZTIzZGRmLCAweGViZWIyNmNkLCAweDI3Mjc2OTRlLCAweGIyYjJjZDdmLCAweDc1NzU5ZmVhLCAweDA5MDkxYjEyLCAweDgzODM5ZTFkLCAweDJjMmM3NDU4LCAweDFhMWEyZTM0LCAweDFiMWIyZDM2LCAweDZlNmViMmRjLCAweDVhNWFlZWI0LCAweGEwYTBmYjViLCAweDUyNTJmNmE0LCAweDNiM2I0ZDc2LCAweGQ2ZDY2MWI3LCAweGIzYjNjZTdkLCAweDI5Mjk3YjUyLCAweGUzZTMzZWRkLCAweDJmMmY3MTVlLCAweDg0ODQ5NzEzLCAweDUzNTNmNWE2LCAweGQxZDE2OGI5LCAweDAwMDAwMDAwLCAweGVkZWQyY2MxLCAweDIwMjA2MDQwLCAweGZjZmMxZmUzLCAweGIxYjFjODc5LCAweDViNWJlZGI2LCAweDZhNmFiZWQ0LCAweGNiY2I0NjhkLCAweGJlYmVkOTY3LCAweDM5Mzk0YjcyLCAweDRhNGFkZTk0LCAweDRjNGNkNDk4LCAweDU4NThlOGIwLCAweGNmY2Y0YTg1LCAweGQwZDA2YmJiLCAweGVmZWYyYWM1LCAweGFhYWFlNTRmLCAweGZiZmIxNmVkLCAweDQzNDNjNTg2LCAweDRkNGRkNzlhLCAweDMzMzM1NTY2LCAweDg1ODU5NDExLCAweDQ1NDVjZjhhLCAweGY5ZjkxMGU5LCAweDAyMDIwNjA0LCAweDdmN2Y4MWZlLCAweDUwNTBmMGEwLCAweDNjM2M0NDc4LCAweDlmOWZiYTI1LCAweGE4YThlMzRiLCAweDUxNTFmM2EyLCAweGEzYTNmZTVkLCAweDQwNDBjMDgwLCAweDhmOGY4YTA1LCAweDkyOTJhZDNmLCAweDlkOWRiYzIxLCAweDM4Mzg0ODcwLCAweGY1ZjUwNGYxLCAweGJjYmNkZjYzLCAweGI2YjZjMTc3LCAweGRhZGE3NWFmLCAweDIxMjE2MzQyLCAweDEwMTAzMDIwLCAweGZmZmYxYWU1LCAweGYzZjMwZWZkLCAweGQyZDI2ZGJmLCAweGNkY2Q0YzgxLCAweDBjMGMxNDE4LCAweDEzMTMzNTI2LCAweGVjZWMyZmMzLCAweDVmNWZlMWJlLCAweDk3OTdhMjM1LCAweDQ0NDRjYzg4LCAweDE3MTczOTJlLCAweGM0YzQ1NzkzLCAweGE3YTdmMjU1LCAweDdlN2U4MmZjLCAweDNkM2Q0NzdhLCAweDY0NjRhY2M4LCAweDVkNWRlN2JhLCAweDE5MTkyYjMyLCAweDczNzM5NWU2LCAweDYwNjBhMGMwLCAweDgxODE5ODE5LCAweDRmNGZkMTllLCAweGRjZGM3ZmEzLCAweDIyMjI2NjQ0LCAweDJhMmE3ZTU0LCAweDkwOTBhYjNiLCAweDg4ODg4MzBiLCAweDQ2NDZjYThjLCAweGVlZWUyOWM3LCAweGI4YjhkMzZiLCAweDE0MTQzYzI4LCAweGRlZGU3OWE3LCAweDVlNWVlMmJjLCAweDBiMGIxZDE2LCAweGRiZGI3NmFkLCAweGUwZTAzYmRiLCAweDMyMzI1NjY0LCAweDNhM2E0ZTc0LCAweDBhMGExZTE0LCAweDQ5NDlkYjkyLCAweDA2MDYwYTBjLCAweDI0MjQ2YzQ4LCAweDVjNWNlNGI4LCAweGMyYzI1ZDlmLCAweGQzZDM2ZWJkLCAweGFjYWNlZjQzLCAweDYyNjJhNmM0LCAweDkxOTFhODM5LCAweDk1OTVhNDMxLCAweGU0ZTQzN2QzLCAweDc5Nzk4YmYyLCAweGU3ZTczMmQ1LCAweGM4Yzg0MzhiLCAweDM3Mzc1OTZlLCAweDZkNmRiN2RhLCAweDhkOGQ4YzAxLCAweGQ1ZDU2NGIxLCAweDRlNGVkMjljLCAweGE5YTllMDQ5LCAweDZjNmNiNGQ4LCAweDU2NTZmYWFjLCAweGY0ZjQwN2YzLCAweGVhZWEyNWNmLCAweDY1NjVhZmNhLCAweDdhN2E4ZWY0LCAweGFlYWVlOTQ3LCAweDA4MDgxODEwLCAweGJhYmFkNTZmLCAweDc4Nzg4OGYwLCAweDI1MjU2ZjRhLCAweDJlMmU3MjVjLCAweDFjMWMyNDM4LCAweGE2YTZmMTU3LCAweGI0YjRjNzczLCAweGM2YzY1MTk3LCAweGU4ZTgyM2NiLCAweGRkZGQ3Y2ExLCAweDc0NzQ5Y2U4LCAweDFmMWYyMTNlLCAweDRiNGJkZDk2LCAweGJkYmRkYzYxLCAweDhiOGI4NjBkLCAweDhhOGE4NTBmLCAweDcwNzA5MGUwLCAweDNlM2U0MjdjLCAweGI1YjVjNDcxLCAweDY2NjZhYWNjLCAweDQ4NDhkODkwLCAweDAzMDMwNTA2LCAweGY2ZjYwMWY3LCAweDBlMGUxMjFjLCAweDYxNjFhM2MyLCAweDM1MzU1ZjZhLCAweDU3NTdmOWFlLCAweGI5YjlkMDY5LCAweDg2ODY5MTE3LCAweGMxYzE1ODk5LCAweDFkMWQyNzNhLCAweDllOWViOTI3LCAweGUxZTEzOGQ5LCAweGY4ZjgxM2ViLCAweDk4OThiMzJiLCAweDExMTEzMzIyLCAweDY5NjliYmQyLCAweGQ5ZDk3MGE5LCAweDhlOGU4OTA3LCAweDk0OTRhNzMzLCAweDliOWJiNjJkLCAweDFlMWUyMjNjLCAweDg3ODc5MjE1LCAweGU5ZTkyMGM5LCAweGNlY2U0OTg3LCAweDU1NTVmZmFhLCAweDI4Mjg3ODUwLCAweGRmZGY3YWE1LCAweDhjOGM4ZjAzLCAweGExYTFmODU5LCAweDg5ODk4MDA5LCAweDBkMGQxNzFhLCAweGJmYmZkYTY1LCAweGU2ZTYzMWQ3LCAweDQyNDJjNjg0LCAweDY4NjhiOGQwLCAweDQxNDFjMzgyLCAweDk5OTliMDI5LCAweDJkMmQ3NzVhLCAweDBmMGYxMTFlLCAweGIwYjBjYjdiLCAweDU0NTRmY2E4LCAweGJiYmJkNjZkLCAweDE2MTYzYTJjXTtcblxuICAgIC8vIFRyYW5zZm9ybWF0aW9ucyBmb3IgZGVjcnlwdGlvblxuICAgIHZhciBUNSA9IFsweDUxZjRhNzUwLCAweDdlNDE2NTUzLCAweDFhMTdhNGMzLCAweDNhMjc1ZTk2LCAweDNiYWI2YmNiLCAweDFmOWQ0NWYxLCAweGFjZmE1OGFiLCAweDRiZTMwMzkzLCAweDIwMzBmYTU1LCAweGFkNzY2ZGY2LCAweDg4Y2M3NjkxLCAweGY1MDI0YzI1LCAweDRmZTVkN2ZjLCAweGM1MmFjYmQ3LCAweDI2MzU0NDgwLCAweGI1NjJhMzhmLCAweGRlYjE1YTQ5LCAweDI1YmExYjY3LCAweDQ1ZWEwZTk4LCAweDVkZmVjMGUxLCAweGMzMmY3NTAyLCAweDgxNGNmMDEyLCAweDhkNDY5N2EzLCAweDZiZDNmOWM2LCAweDAzOGY1ZmU3LCAweDE1OTI5Yzk1LCAweGJmNmQ3YWViLCAweDk1NTI1OWRhLCAweGQ0YmU4MzJkLCAweDU4NzQyMWQzLCAweDQ5ZTA2OTI5LCAweDhlYzljODQ0LCAweDc1YzI4OTZhLCAweGY0OGU3OTc4LCAweDk5NTgzZTZiLCAweDI3Yjk3MWRkLCAweGJlZTE0ZmI2LCAweGYwODhhZDE3LCAweGM5MjBhYzY2LCAweDdkY2UzYWI0LCAweDYzZGY0YTE4LCAweGU1MWEzMTgyLCAweDk3NTEzMzYwLCAweDYyNTM3ZjQ1LCAweGIxNjQ3N2UwLCAweGJiNmJhZTg0LCAweGZlODFhMDFjLCAweGY5MDgyYjk0LCAweDcwNDg2ODU4LCAweDhmNDVmZDE5LCAweDk0ZGU2Yzg3LCAweDUyN2JmOGI3LCAweGFiNzNkMzIzLCAweDcyNGIwMmUyLCAweGUzMWY4ZjU3LCAweDY2NTVhYjJhLCAweGIyZWIyODA3LCAweDJmYjVjMjAzLCAweDg2YzU3YjlhLCAweGQzMzcwOGE1LCAweDMwMjg4N2YyLCAweDIzYmZhNWIyLCAweDAyMDM2YWJhLCAweGVkMTY4MjVjLCAweDhhY2YxYzJiLCAweGE3NzliNDkyLCAweGYzMDdmMmYwLCAweDRlNjllMmExLCAweDY1ZGFmNGNkLCAweDA2MDViZWQ1LCAweGQxMzQ2MjFmLCAweGM0YTZmZThhLCAweDM0MmU1MzlkLCAweGEyZjM1NWEwLCAweDA1OGFlMTMyLCAweGE0ZjZlYjc1LCAweDBiODNlYzM5LCAweDQwNjBlZmFhLCAweDVlNzE5ZjA2LCAweGJkNmUxMDUxLCAweDNlMjE4YWY5LCAweDk2ZGQwNjNkLCAweGRkM2UwNWFlLCAweDRkZTZiZDQ2LCAweDkxNTQ4ZGI1LCAweDcxYzQ1ZDA1LCAweDA0MDZkNDZmLCAweDYwNTAxNWZmLCAweDE5OThmYjI0LCAweGQ2YmRlOTk3LCAweDg5NDA0M2NjLCAweDY3ZDk5ZTc3LCAweGIwZTg0MmJkLCAweDA3ODk4Yjg4LCAweGU3MTk1YjM4LCAweDc5YzhlZWRiLCAweGExN2MwYTQ3LCAweDdjNDIwZmU5LCAweGY4ODQxZWM5LCAweDAwMDAwMDAwLCAweDA5ODA4NjgzLCAweDMyMmJlZDQ4LCAweDFlMTE3MGFjLCAweDZjNWE3MjRlLCAweGZkMGVmZmZiLCAweDBmODUzODU2LCAweDNkYWVkNTFlLCAweDM2MmQzOTI3LCAweDBhMGZkOTY0LCAweDY4NWNhNjIxLCAweDliNWI1NGQxLCAweDI0MzYyZTNhLCAweDBjMGE2N2IxLCAweDkzNTdlNzBmLCAweGI0ZWU5NmQyLCAweDFiOWI5MTllLCAweDgwYzBjNTRmLCAweDYxZGMyMGEyLCAweDVhNzc0YjY5LCAweDFjMTIxYTE2LCAweGUyOTNiYTBhLCAweGMwYTAyYWU1LCAweDNjMjJlMDQzLCAweDEyMWIxNzFkLCAweDBlMDkwZDBiLCAweGYyOGJjN2FkLCAweDJkYjZhOGI5LCAweDE0MWVhOWM4LCAweDU3ZjExOTg1LCAweGFmNzUwNzRjLCAweGVlOTlkZGJiLCAweGEzN2Y2MGZkLCAweGY3MDEyNjlmLCAweDVjNzJmNWJjLCAweDQ0NjYzYmM1LCAweDViZmI3ZTM0LCAweDhiNDMyOTc2LCAweGNiMjNjNmRjLCAweGI2ZWRmYzY4LCAweGI4ZTRmMTYzLCAweGQ3MzFkY2NhLCAweDQyNjM4NTEwLCAweDEzOTcyMjQwLCAweDg0YzYxMTIwLCAweDg1NGEyNDdkLCAweGQyYmIzZGY4LCAweGFlZjkzMjExLCAweGM3MjlhMTZkLCAweDFkOWUyZjRiLCAweGRjYjIzMGYzLCAweDBkODY1MmVjLCAweDc3YzFlM2QwLCAweDJiYjMxNjZjLCAweGE5NzBiOTk5LCAweDExOTQ0OGZhLCAweDQ3ZTk2NDIyLCAweGE4ZmM4Y2M0LCAweGEwZjAzZjFhLCAweDU2N2QyY2Q4LCAweDIyMzM5MGVmLCAweDg3NDk0ZWM3LCAweGQ5MzhkMWMxLCAweDhjY2FhMmZlLCAweDk4ZDQwYjM2LCAweGE2ZjU4MWNmLCAweGE1N2FkZTI4LCAweGRhYjc4ZTI2LCAweDNmYWRiZmE0LCAweDJjM2E5ZGU0LCAweDUwNzg5MjBkLCAweDZhNWZjYzliLCAweDU0N2U0NjYyLCAweGY2OGQxM2MyLCAweDkwZDhiOGU4LCAweDJlMzlmNzVlLCAweDgyYzNhZmY1LCAweDlmNWQ4MGJlLCAweDY5ZDA5MzdjLCAweDZmZDUyZGE5LCAweGNmMjUxMmIzLCAweGM4YWM5OTNiLCAweDEwMTg3ZGE3LCAweGU4OWM2MzZlLCAweGRiM2JiYjdiLCAweGNkMjY3ODA5LCAweDZlNTkxOGY0LCAweGVjOWFiNzAxLCAweDgzNGY5YWE4LCAweGU2OTU2ZTY1LCAweGFhZmZlNjdlLCAweDIxYmNjZjA4LCAweGVmMTVlOGU2LCAweGJhZTc5YmQ5LCAweDRhNmYzNmNlLCAweGVhOWYwOWQ0LCAweDI5YjA3Y2Q2LCAweDMxYTRiMmFmLCAweDJhM2YyMzMxLCAweGM2YTU5NDMwLCAweDM1YTI2NmMwLCAweDc0NGViYzM3LCAweGZjODJjYWE2LCAweGUwOTBkMGIwLCAweDMzYTdkODE1LCAweGYxMDQ5ODRhLCAweDQxZWNkYWY3LCAweDdmY2Q1MDBlLCAweDE3OTFmNjJmLCAweDc2NGRkNjhkLCAweDQzZWZiMDRkLCAweGNjYWE0ZDU0LCAweGU0OTYwNGRmLCAweDllZDFiNWUzLCAweDRjNmE4ODFiLCAweGMxMmMxZmI4LCAweDQ2NjU1MTdmLCAweDlkNWVlYTA0LCAweDAxOGMzNTVkLCAweGZhODc3NDczLCAweGZiMGI0MTJlLCAweGIzNjcxZDVhLCAweDkyZGJkMjUyLCAweGU5MTA1NjMzLCAweDZkZDY0NzEzLCAweDlhZDc2MThjLCAweDM3YTEwYzdhLCAweDU5ZjgxNDhlLCAweGViMTMzYzg5LCAweGNlYTkyN2VlLCAweGI3NjFjOTM1LCAweGUxMWNlNWVkLCAweDdhNDdiMTNjLCAweDljZDJkZjU5LCAweDU1ZjI3MzNmLCAweDE4MTRjZTc5LCAweDczYzczN2JmLCAweDUzZjdjZGVhLCAweDVmZmRhYTViLCAweGRmM2Q2ZjE0LCAweDc4NDRkYjg2LCAweGNhYWZmMzgxLCAweGI5NjhjNDNlLCAweDM4MjQzNDJjLCAweGMyYTM0MDVmLCAweDE2MWRjMzcyLCAweGJjZTIyNTBjLCAweDI4M2M0OThiLCAweGZmMGQ5NTQxLCAweDM5YTgwMTcxLCAweDA4MGNiM2RlLCAweGQ4YjRlNDljLCAweDY0NTZjMTkwLCAweDdiY2I4NDYxLCAweGQ1MzJiNjcwLCAweDQ4NmM1Yzc0LCAweGQwYjg1NzQyXTtcbiAgICB2YXIgVDYgPSBbMHg1MDUxZjRhNywgMHg1MzdlNDE2NSwgMHhjMzFhMTdhNCwgMHg5NjNhMjc1ZSwgMHhjYjNiYWI2YiwgMHhmMTFmOWQ0NSwgMHhhYmFjZmE1OCwgMHg5MzRiZTMwMywgMHg1NTIwMzBmYSwgMHhmNmFkNzY2ZCwgMHg5MTg4Y2M3NiwgMHgyNWY1MDI0YywgMHhmYzRmZTVkNywgMHhkN2M1MmFjYiwgMHg4MDI2MzU0NCwgMHg4ZmI1NjJhMywgMHg0OWRlYjE1YSwgMHg2NzI1YmExYiwgMHg5ODQ1ZWEwZSwgMHhlMTVkZmVjMCwgMHgwMmMzMmY3NSwgMHgxMjgxNGNmMCwgMHhhMzhkNDY5NywgMHhjNjZiZDNmOSwgMHhlNzAzOGY1ZiwgMHg5NTE1OTI5YywgMHhlYmJmNmQ3YSwgMHhkYTk1NTI1OSwgMHgyZGQ0YmU4MywgMHhkMzU4NzQyMSwgMHgyOTQ5ZTA2OSwgMHg0NDhlYzljOCwgMHg2YTc1YzI4OSwgMHg3OGY0OGU3OSwgMHg2Yjk5NTgzZSwgMHhkZDI3Yjk3MSwgMHhiNmJlZTE0ZiwgMHgxN2YwODhhZCwgMHg2NmM5MjBhYywgMHhiNDdkY2UzYSwgMHgxODYzZGY0YSwgMHg4MmU1MWEzMSwgMHg2MDk3NTEzMywgMHg0NTYyNTM3ZiwgMHhlMGIxNjQ3NywgMHg4NGJiNmJhZSwgMHgxY2ZlODFhMCwgMHg5NGY5MDgyYiwgMHg1ODcwNDg2OCwgMHgxOThmNDVmZCwgMHg4Nzk0ZGU2YywgMHhiNzUyN2JmOCwgMHgyM2FiNzNkMywgMHhlMjcyNGIwMiwgMHg1N2UzMWY4ZiwgMHgyYTY2NTVhYiwgMHgwN2IyZWIyOCwgMHgwMzJmYjVjMiwgMHg5YTg2YzU3YiwgMHhhNWQzMzcwOCwgMHhmMjMwMjg4NywgMHhiMjIzYmZhNSwgMHhiYTAyMDM2YSwgMHg1Y2VkMTY4MiwgMHgyYjhhY2YxYywgMHg5MmE3NzliNCwgMHhmMGYzMDdmMiwgMHhhMTRlNjllMiwgMHhjZDY1ZGFmNCwgMHhkNTA2MDViZSwgMHgxZmQxMzQ2MiwgMHg4YWM0YTZmZSwgMHg5ZDM0MmU1MywgMHhhMGEyZjM1NSwgMHgzMjA1OGFlMSwgMHg3NWE0ZjZlYiwgMHgzOTBiODNlYywgMHhhYTQwNjBlZiwgMHgwNjVlNzE5ZiwgMHg1MWJkNmUxMCwgMHhmOTNlMjE4YSwgMHgzZDk2ZGQwNiwgMHhhZWRkM2UwNSwgMHg0NjRkZTZiZCwgMHhiNTkxNTQ4ZCwgMHgwNTcxYzQ1ZCwgMHg2ZjA0MDZkNCwgMHhmZjYwNTAxNSwgMHgyNDE5OThmYiwgMHg5N2Q2YmRlOSwgMHhjYzg5NDA0MywgMHg3NzY3ZDk5ZSwgMHhiZGIwZTg0MiwgMHg4ODA3ODk4YiwgMHgzOGU3MTk1YiwgMHhkYjc5YzhlZSwgMHg0N2ExN2MwYSwgMHhlOTdjNDIwZiwgMHhjOWY4ODQxZSwgMHgwMDAwMDAwMCwgMHg4MzA5ODA4NiwgMHg0ODMyMmJlZCwgMHhhYzFlMTE3MCwgMHg0ZTZjNWE3MiwgMHhmYmZkMGVmZiwgMHg1NjBmODUzOCwgMHgxZTNkYWVkNSwgMHgyNzM2MmQzOSwgMHg2NDBhMGZkOSwgMHgyMTY4NWNhNiwgMHhkMTliNWI1NCwgMHgzYTI0MzYyZSwgMHhiMTBjMGE2NywgMHgwZjkzNTdlNywgMHhkMmI0ZWU5NiwgMHg5ZTFiOWI5MSwgMHg0ZjgwYzBjNSwgMHhhMjYxZGMyMCwgMHg2OTVhNzc0YiwgMHgxNjFjMTIxYSwgMHgwYWUyOTNiYSwgMHhlNWMwYTAyYSwgMHg0MzNjMjJlMCwgMHgxZDEyMWIxNywgMHgwYjBlMDkwZCwgMHhhZGYyOGJjNywgMHhiOTJkYjZhOCwgMHhjODE0MWVhOSwgMHg4NTU3ZjExOSwgMHg0Y2FmNzUwNywgMHhiYmVlOTlkZCwgMHhmZGEzN2Y2MCwgMHg5ZmY3MDEyNiwgMHhiYzVjNzJmNSwgMHhjNTQ0NjYzYiwgMHgzNDViZmI3ZSwgMHg3NjhiNDMyOSwgMHhkY2NiMjNjNiwgMHg2OGI2ZWRmYywgMHg2M2I4ZTRmMSwgMHhjYWQ3MzFkYywgMHgxMDQyNjM4NSwgMHg0MDEzOTcyMiwgMHgyMDg0YzYxMSwgMHg3ZDg1NGEyNCwgMHhmOGQyYmIzZCwgMHgxMWFlZjkzMiwgMHg2ZGM3MjlhMSwgMHg0YjFkOWUyZiwgMHhmM2RjYjIzMCwgMHhlYzBkODY1MiwgMHhkMDc3YzFlMywgMHg2YzJiYjMxNiwgMHg5OWE5NzBiOSwgMHhmYTExOTQ0OCwgMHgyMjQ3ZTk2NCwgMHhjNGE4ZmM4YywgMHgxYWEwZjAzZiwgMHhkODU2N2QyYywgMHhlZjIyMzM5MCwgMHhjNzg3NDk0ZSwgMHhjMWQ5MzhkMSwgMHhmZThjY2FhMiwgMHgzNjk4ZDQwYiwgMHhjZmE2ZjU4MSwgMHgyOGE1N2FkZSwgMHgyNmRhYjc4ZSwgMHhhNDNmYWRiZiwgMHhlNDJjM2E5ZCwgMHgwZDUwNzg5MiwgMHg5YjZhNWZjYywgMHg2MjU0N2U0NiwgMHhjMmY2OGQxMywgMHhlODkwZDhiOCwgMHg1ZTJlMzlmNywgMHhmNTgyYzNhZiwgMHhiZTlmNWQ4MCwgMHg3YzY5ZDA5MywgMHhhOTZmZDUyZCwgMHhiM2NmMjUxMiwgMHgzYmM4YWM5OSwgMHhhNzEwMTg3ZCwgMHg2ZWU4OWM2MywgMHg3YmRiM2JiYiwgMHgwOWNkMjY3OCwgMHhmNDZlNTkxOCwgMHgwMWVjOWFiNywgMHhhODgzNGY5YSwgMHg2NWU2OTU2ZSwgMHg3ZWFhZmZlNiwgMHgwODIxYmNjZiwgMHhlNmVmMTVlOCwgMHhkOWJhZTc5YiwgMHhjZTRhNmYzNiwgMHhkNGVhOWYwOSwgMHhkNjI5YjA3YywgMHhhZjMxYTRiMiwgMHgzMTJhM2YyMywgMHgzMGM2YTU5NCwgMHhjMDM1YTI2NiwgMHgzNzc0NGViYywgMHhhNmZjODJjYSwgMHhiMGUwOTBkMCwgMHgxNTMzYTdkOCwgMHg0YWYxMDQ5OCwgMHhmNzQxZWNkYSwgMHgwZTdmY2Q1MCwgMHgyZjE3OTFmNiwgMHg4ZDc2NGRkNiwgMHg0ZDQzZWZiMCwgMHg1NGNjYWE0ZCwgMHhkZmU0OTYwNCwgMHhlMzllZDFiNSwgMHgxYjRjNmE4OCwgMHhiOGMxMmMxZiwgMHg3ZjQ2NjU1MSwgMHgwNDlkNWVlYSwgMHg1ZDAxOGMzNSwgMHg3M2ZhODc3NCwgMHgyZWZiMGI0MSwgMHg1YWIzNjcxZCwgMHg1MjkyZGJkMiwgMHgzM2U5MTA1NiwgMHgxMzZkZDY0NywgMHg4YzlhZDc2MSwgMHg3YTM3YTEwYywgMHg4ZTU5ZjgxNCwgMHg4OWViMTMzYywgMHhlZWNlYTkyNywgMHgzNWI3NjFjOSwgMHhlZGUxMWNlNSwgMHgzYzdhNDdiMSwgMHg1OTljZDJkZiwgMHgzZjU1ZjI3MywgMHg3OTE4MTRjZSwgMHhiZjczYzczNywgMHhlYTUzZjdjZCwgMHg1YjVmZmRhYSwgMHgxNGRmM2Q2ZiwgMHg4Njc4NDRkYiwgMHg4MWNhYWZmMywgMHgzZWI5NjhjNCwgMHgyYzM4MjQzNCwgMHg1ZmMyYTM0MCwgMHg3MjE2MWRjMywgMHgwY2JjZTIyNSwgMHg4YjI4M2M0OSwgMHg0MWZmMGQ5NSwgMHg3MTM5YTgwMSwgMHhkZTA4MGNiMywgMHg5Y2Q4YjRlNCwgMHg5MDY0NTZjMSwgMHg2MTdiY2I4NCwgMHg3MGQ1MzJiNiwgMHg3NDQ4NmM1YywgMHg0MmQwYjg1N107XG4gICAgdmFyIFQ3ID0gWzB4YTc1MDUxZjQsIDB4NjU1MzdlNDEsIDB4YTRjMzFhMTcsIDB4NWU5NjNhMjcsIDB4NmJjYjNiYWIsIDB4NDVmMTFmOWQsIDB4NThhYmFjZmEsIDB4MDM5MzRiZTMsIDB4ZmE1NTIwMzAsIDB4NmRmNmFkNzYsIDB4NzY5MTg4Y2MsIDB4NGMyNWY1MDIsIDB4ZDdmYzRmZTUsIDB4Y2JkN2M1MmEsIDB4NDQ4MDI2MzUsIDB4YTM4ZmI1NjIsIDB4NWE0OWRlYjEsIDB4MWI2NzI1YmEsIDB4MGU5ODQ1ZWEsIDB4YzBlMTVkZmUsIDB4NzUwMmMzMmYsIDB4ZjAxMjgxNGMsIDB4OTdhMzhkNDYsIDB4ZjljNjZiZDMsIDB4NWZlNzAzOGYsIDB4OWM5NTE1OTIsIDB4N2FlYmJmNmQsIDB4NTlkYTk1NTIsIDB4ODMyZGQ0YmUsIDB4MjFkMzU4NzQsIDB4NjkyOTQ5ZTAsIDB4Yzg0NDhlYzksIDB4ODk2YTc1YzIsIDB4Nzk3OGY0OGUsIDB4M2U2Yjk5NTgsIDB4NzFkZDI3YjksIDB4NGZiNmJlZTEsIDB4YWQxN2YwODgsIDB4YWM2NmM5MjAsIDB4M2FiNDdkY2UsIDB4NGExODYzZGYsIDB4MzE4MmU1MWEsIDB4MzM2MDk3NTEsIDB4N2Y0NTYyNTMsIDB4NzdlMGIxNjQsIDB4YWU4NGJiNmIsIDB4YTAxY2ZlODEsIDB4MmI5NGY5MDgsIDB4Njg1ODcwNDgsIDB4ZmQxOThmNDUsIDB4NmM4Nzk0ZGUsIDB4ZjhiNzUyN2IsIDB4ZDMyM2FiNzMsIDB4MDJlMjcyNGIsIDB4OGY1N2UzMWYsIDB4YWIyYTY2NTUsIDB4MjgwN2IyZWIsIDB4YzIwMzJmYjUsIDB4N2I5YTg2YzUsIDB4MDhhNWQzMzcsIDB4ODdmMjMwMjgsIDB4YTViMjIzYmYsIDB4NmFiYTAyMDMsIDB4ODI1Y2VkMTYsIDB4MWMyYjhhY2YsIDB4YjQ5MmE3NzksIDB4ZjJmMGYzMDcsIDB4ZTJhMTRlNjksIDB4ZjRjZDY1ZGEsIDB4YmVkNTA2MDUsIDB4NjIxZmQxMzQsIDB4ZmU4YWM0YTYsIDB4NTM5ZDM0MmUsIDB4NTVhMGEyZjMsIDB4ZTEzMjA1OGEsIDB4ZWI3NWE0ZjYsIDB4ZWMzOTBiODMsIDB4ZWZhYTQwNjAsIDB4OWYwNjVlNzEsIDB4MTA1MWJkNmUsIDB4OGFmOTNlMjEsIDB4MDYzZDk2ZGQsIDB4MDVhZWRkM2UsIDB4YmQ0NjRkZTYsIDB4OGRiNTkxNTQsIDB4NWQwNTcxYzQsIDB4ZDQ2ZjA0MDYsIDB4MTVmZjYwNTAsIDB4ZmIyNDE5OTgsIDB4ZTk5N2Q2YmQsIDB4NDNjYzg5NDAsIDB4OWU3NzY3ZDksIDB4NDJiZGIwZTgsIDB4OGI4ODA3ODksIDB4NWIzOGU3MTksIDB4ZWVkYjc5YzgsIDB4MGE0N2ExN2MsIDB4MGZlOTdjNDIsIDB4MWVjOWY4ODQsIDB4MDAwMDAwMDAsIDB4ODY4MzA5ODAsIDB4ZWQ0ODMyMmIsIDB4NzBhYzFlMTEsIDB4NzI0ZTZjNWEsIDB4ZmZmYmZkMGUsIDB4Mzg1NjBmODUsIDB4ZDUxZTNkYWUsIDB4MzkyNzM2MmQsIDB4ZDk2NDBhMGYsIDB4YTYyMTY4NWMsIDB4NTRkMTliNWIsIDB4MmUzYTI0MzYsIDB4NjdiMTBjMGEsIDB4ZTcwZjkzNTcsIDB4OTZkMmI0ZWUsIDB4OTE5ZTFiOWIsIDB4YzU0ZjgwYzAsIDB4MjBhMjYxZGMsIDB4NGI2OTVhNzcsIDB4MWExNjFjMTIsIDB4YmEwYWUyOTMsIDB4MmFlNWMwYTAsIDB4ZTA0MzNjMjIsIDB4MTcxZDEyMWIsIDB4MGQwYjBlMDksIDB4YzdhZGYyOGIsIDB4YThiOTJkYjYsIDB4YTljODE0MWUsIDB4MTk4NTU3ZjEsIDB4MDc0Y2FmNzUsIDB4ZGRiYmVlOTksIDB4NjBmZGEzN2YsIDB4MjY5ZmY3MDEsIDB4ZjViYzVjNzIsIDB4M2JjNTQ0NjYsIDB4N2UzNDViZmIsIDB4Mjk3NjhiNDMsIDB4YzZkY2NiMjMsIDB4ZmM2OGI2ZWQsIDB4ZjE2M2I4ZTQsIDB4ZGNjYWQ3MzEsIDB4ODUxMDQyNjMsIDB4MjI0MDEzOTcsIDB4MTEyMDg0YzYsIDB4MjQ3ZDg1NGEsIDB4M2RmOGQyYmIsIDB4MzIxMWFlZjksIDB4YTE2ZGM3MjksIDB4MmY0YjFkOWUsIDB4MzBmM2RjYjIsIDB4NTJlYzBkODYsIDB4ZTNkMDc3YzEsIDB4MTY2YzJiYjMsIDB4Yjk5OWE5NzAsIDB4NDhmYTExOTQsIDB4NjQyMjQ3ZTksIDB4OGNjNGE4ZmMsIDB4M2YxYWEwZjAsIDB4MmNkODU2N2QsIDB4OTBlZjIyMzMsIDB4NGVjNzg3NDksIDB4ZDFjMWQ5MzgsIDB4YTJmZThjY2EsIDB4MGIzNjk4ZDQsIDB4ODFjZmE2ZjUsIDB4ZGUyOGE1N2EsIDB4OGUyNmRhYjcsIDB4YmZhNDNmYWQsIDB4OWRlNDJjM2EsIDB4OTIwZDUwNzgsIDB4Y2M5YjZhNWYsIDB4NDY2MjU0N2UsIDB4MTNjMmY2OGQsIDB4YjhlODkwZDgsIDB4Zjc1ZTJlMzksIDB4YWZmNTgyYzMsIDB4ODBiZTlmNWQsIDB4OTM3YzY5ZDAsIDB4MmRhOTZmZDUsIDB4MTJiM2NmMjUsIDB4OTkzYmM4YWMsIDB4N2RhNzEwMTgsIDB4NjM2ZWU4OWMsIDB4YmI3YmRiM2IsIDB4NzgwOWNkMjYsIDB4MThmNDZlNTksIDB4YjcwMWVjOWEsIDB4OWFhODgzNGYsIDB4NmU2NWU2OTUsIDB4ZTY3ZWFhZmYsIDB4Y2YwODIxYmMsIDB4ZThlNmVmMTUsIDB4OWJkOWJhZTcsIDB4MzZjZTRhNmYsIDB4MDlkNGVhOWYsIDB4N2NkNjI5YjAsIDB4YjJhZjMxYTQsIDB4MjMzMTJhM2YsIDB4OTQzMGM2YTUsIDB4NjZjMDM1YTIsIDB4YmMzNzc0NGUsIDB4Y2FhNmZjODIsIDB4ZDBiMGUwOTAsIDB4ZDgxNTMzYTcsIDB4OTg0YWYxMDQsIDB4ZGFmNzQxZWMsIDB4NTAwZTdmY2QsIDB4ZjYyZjE3OTEsIDB4ZDY4ZDc2NGQsIDB4YjA0ZDQzZWYsIDB4NGQ1NGNjYWEsIDB4MDRkZmU0OTYsIDB4YjVlMzllZDEsIDB4ODgxYjRjNmEsIDB4MWZiOGMxMmMsIDB4NTE3ZjQ2NjUsIDB4ZWEwNDlkNWUsIDB4MzU1ZDAxOGMsIDB4NzQ3M2ZhODcsIDB4NDEyZWZiMGIsIDB4MWQ1YWIzNjcsIDB4ZDI1MjkyZGIsIDB4NTYzM2U5MTAsIDB4NDcxMzZkZDYsIDB4NjE4YzlhZDcsIDB4MGM3YTM3YTEsIDB4MTQ4ZTU5ZjgsIDB4M2M4OWViMTMsIDB4MjdlZWNlYTksIDB4YzkzNWI3NjEsIDB4ZTVlZGUxMWMsIDB4YjEzYzdhNDcsIDB4ZGY1OTljZDIsIDB4NzMzZjU1ZjIsIDB4Y2U3OTE4MTQsIDB4MzdiZjczYzcsIDB4Y2RlYTUzZjcsIDB4YWE1YjVmZmQsIDB4NmYxNGRmM2QsIDB4ZGI4Njc4NDQsIDB4ZjM4MWNhYWYsIDB4YzQzZWI5NjgsIDB4MzQyYzM4MjQsIDB4NDA1ZmMyYTMsIDB4YzM3MjE2MWQsIDB4MjUwY2JjZTIsIDB4NDk4YjI4M2MsIDB4OTU0MWZmMGQsIDB4MDE3MTM5YTgsIDB4YjNkZTA4MGMsIDB4ZTQ5Y2Q4YjQsIDB4YzE5MDY0NTYsIDB4ODQ2MTdiY2IsIDB4YjY3MGQ1MzIsIDB4NWM3NDQ4NmMsIDB4NTc0MmQwYjhdO1xuICAgIHZhciBUOCA9IFsweGY0YTc1MDUxLCAweDQxNjU1MzdlLCAweDE3YTRjMzFhLCAweDI3NWU5NjNhLCAweGFiNmJjYjNiLCAweDlkNDVmMTFmLCAweGZhNThhYmFjLCAweGUzMDM5MzRiLCAweDMwZmE1NTIwLCAweDc2NmRmNmFkLCAweGNjNzY5MTg4LCAweDAyNGMyNWY1LCAweGU1ZDdmYzRmLCAweDJhY2JkN2M1LCAweDM1NDQ4MDI2LCAweDYyYTM4ZmI1LCAweGIxNWE0OWRlLCAweGJhMWI2NzI1LCAweGVhMGU5ODQ1LCAweGZlYzBlMTVkLCAweDJmNzUwMmMzLCAweDRjZjAxMjgxLCAweDQ2OTdhMzhkLCAweGQzZjljNjZiLCAweDhmNWZlNzAzLCAweDkyOWM5NTE1LCAweDZkN2FlYmJmLCAweDUyNTlkYTk1LCAweGJlODMyZGQ0LCAweDc0MjFkMzU4LCAweGUwNjkyOTQ5LCAweGM5Yzg0NDhlLCAweGMyODk2YTc1LCAweDhlNzk3OGY0LCAweDU4M2U2Yjk5LCAweGI5NzFkZDI3LCAweGUxNGZiNmJlLCAweDg4YWQxN2YwLCAweDIwYWM2NmM5LCAweGNlM2FiNDdkLCAweGRmNGExODYzLCAweDFhMzE4MmU1LCAweDUxMzM2MDk3LCAweDUzN2Y0NTYyLCAweDY0NzdlMGIxLCAweDZiYWU4NGJiLCAweDgxYTAxY2ZlLCAweDA4MmI5NGY5LCAweDQ4Njg1ODcwLCAweDQ1ZmQxOThmLCAweGRlNmM4Nzk0LCAweDdiZjhiNzUyLCAweDczZDMyM2FiLCAweDRiMDJlMjcyLCAweDFmOGY1N2UzLCAweDU1YWIyYTY2LCAweGViMjgwN2IyLCAweGI1YzIwMzJmLCAweGM1N2I5YTg2LCAweDM3MDhhNWQzLCAweDI4ODdmMjMwLCAweGJmYTViMjIzLCAweDAzNmFiYTAyLCAweDE2ODI1Y2VkLCAweGNmMWMyYjhhLCAweDc5YjQ5MmE3LCAweDA3ZjJmMGYzLCAweDY5ZTJhMTRlLCAweGRhZjRjZDY1LCAweDA1YmVkNTA2LCAweDM0NjIxZmQxLCAweGE2ZmU4YWM0LCAweDJlNTM5ZDM0LCAweGYzNTVhMGEyLCAweDhhZTEzMjA1LCAweGY2ZWI3NWE0LCAweDgzZWMzOTBiLCAweDYwZWZhYTQwLCAweDcxOWYwNjVlLCAweDZlMTA1MWJkLCAweDIxOGFmOTNlLCAweGRkMDYzZDk2LCAweDNlMDVhZWRkLCAweGU2YmQ0NjRkLCAweDU0OGRiNTkxLCAweGM0NWQwNTcxLCAweDA2ZDQ2ZjA0LCAweDUwMTVmZjYwLCAweDk4ZmIyNDE5LCAweGJkZTk5N2Q2LCAweDQwNDNjYzg5LCAweGQ5OWU3NzY3LCAweGU4NDJiZGIwLCAweDg5OGI4ODA3LCAweDE5NWIzOGU3LCAweGM4ZWVkYjc5LCAweDdjMGE0N2ExLCAweDQyMGZlOTdjLCAweDg0MWVjOWY4LCAweDAwMDAwMDAwLCAweDgwODY4MzA5LCAweDJiZWQ0ODMyLCAweDExNzBhYzFlLCAweDVhNzI0ZTZjLCAweDBlZmZmYmZkLCAweDg1Mzg1NjBmLCAweGFlZDUxZTNkLCAweDJkMzkyNzM2LCAweDBmZDk2NDBhLCAweDVjYTYyMTY4LCAweDViNTRkMTliLCAweDM2MmUzYTI0LCAweDBhNjdiMTBjLCAweDU3ZTcwZjkzLCAweGVlOTZkMmI0LCAweDliOTE5ZTFiLCAweGMwYzU0ZjgwLCAweGRjMjBhMjYxLCAweDc3NGI2OTVhLCAweDEyMWExNjFjLCAweDkzYmEwYWUyLCAweGEwMmFlNWMwLCAweDIyZTA0MzNjLCAweDFiMTcxZDEyLCAweDA5MGQwYjBlLCAweDhiYzdhZGYyLCAweGI2YThiOTJkLCAweDFlYTljODE0LCAweGYxMTk4NTU3LCAweDc1MDc0Y2FmLCAweDk5ZGRiYmVlLCAweDdmNjBmZGEzLCAweDAxMjY5ZmY3LCAweDcyZjViYzVjLCAweDY2M2JjNTQ0LCAweGZiN2UzNDViLCAweDQzMjk3NjhiLCAweDIzYzZkY2NiLCAweGVkZmM2OGI2LCAweGU0ZjE2M2I4LCAweDMxZGNjYWQ3LCAweDYzODUxMDQyLCAweDk3MjI0MDEzLCAweGM2MTEyMDg0LCAweDRhMjQ3ZDg1LCAweGJiM2RmOGQyLCAweGY5MzIxMWFlLCAweDI5YTE2ZGM3LCAweDllMmY0YjFkLCAweGIyMzBmM2RjLCAweDg2NTJlYzBkLCAweGMxZTNkMDc3LCAweGIzMTY2YzJiLCAweDcwYjk5OWE5LCAweDk0NDhmYTExLCAweGU5NjQyMjQ3LCAweGZjOGNjNGE4LCAweGYwM2YxYWEwLCAweDdkMmNkODU2LCAweDMzOTBlZjIyLCAweDQ5NGVjNzg3LCAweDM4ZDFjMWQ5LCAweGNhYTJmZThjLCAweGQ0MGIzNjk4LCAweGY1ODFjZmE2LCAweDdhZGUyOGE1LCAweGI3OGUyNmRhLCAweGFkYmZhNDNmLCAweDNhOWRlNDJjLCAweDc4OTIwZDUwLCAweDVmY2M5YjZhLCAweDdlNDY2MjU0LCAweDhkMTNjMmY2LCAweGQ4YjhlODkwLCAweDM5Zjc1ZTJlLCAweGMzYWZmNTgyLCAweDVkODBiZTlmLCAweGQwOTM3YzY5LCAweGQ1MmRhOTZmLCAweDI1MTJiM2NmLCAweGFjOTkzYmM4LCAweDE4N2RhNzEwLCAweDljNjM2ZWU4LCAweDNiYmI3YmRiLCAweDI2NzgwOWNkLCAweDU5MThmNDZlLCAweDlhYjcwMWVjLCAweDRmOWFhODgzLCAweDk1NmU2NWU2LCAweGZmZTY3ZWFhLCAweGJjY2YwODIxLCAweDE1ZThlNmVmLCAweGU3OWJkOWJhLCAweDZmMzZjZTRhLCAweDlmMDlkNGVhLCAweGIwN2NkNjI5LCAweGE0YjJhZjMxLCAweDNmMjMzMTJhLCAweGE1OTQzMGM2LCAweGEyNjZjMDM1LCAweDRlYmMzNzc0LCAweDgyY2FhNmZjLCAweDkwZDBiMGUwLCAweGE3ZDgxNTMzLCAweDA0OTg0YWYxLCAweGVjZGFmNzQxLCAweGNkNTAwZTdmLCAweDkxZjYyZjE3LCAweDRkZDY4ZDc2LCAweGVmYjA0ZDQzLCAweGFhNGQ1NGNjLCAweDk2MDRkZmU0LCAweGQxYjVlMzllLCAweDZhODgxYjRjLCAweDJjMWZiOGMxLCAweDY1NTE3ZjQ2LCAweDVlZWEwNDlkLCAweDhjMzU1ZDAxLCAweDg3NzQ3M2ZhLCAweDBiNDEyZWZiLCAweDY3MWQ1YWIzLCAweGRiZDI1MjkyLCAweDEwNTYzM2U5LCAweGQ2NDcxMzZkLCAweGQ3NjE4YzlhLCAweGExMGM3YTM3LCAweGY4MTQ4ZTU5LCAweDEzM2M4OWViLCAweGE5MjdlZWNlLCAweDYxYzkzNWI3LCAweDFjZTVlZGUxLCAweDQ3YjEzYzdhLCAweGQyZGY1OTljLCAweGYyNzMzZjU1LCAweDE0Y2U3OTE4LCAweGM3MzdiZjczLCAweGY3Y2RlYTUzLCAweGZkYWE1YjVmLCAweDNkNmYxNGRmLCAweDQ0ZGI4Njc4LCAweGFmZjM4MWNhLCAweDY4YzQzZWI5LCAweDI0MzQyYzM4LCAweGEzNDA1ZmMyLCAweDFkYzM3MjE2LCAweGUyMjUwY2JjLCAweDNjNDk4YjI4LCAweDBkOTU0MWZmLCAweGE4MDE3MTM5LCAweDBjYjNkZTA4LCAweGI0ZTQ5Y2Q4LCAweDU2YzE5MDY0LCAweGNiODQ2MTdiLCAweDMyYjY3MGQ1LCAweDZjNWM3NDQ4LCAweGI4NTc0MmQwXTtcblxuICAgIC8vIFRyYW5zZm9ybWF0aW9ucyBmb3IgZGVjcnlwdGlvbiBrZXkgZXhwYW5zaW9uXG4gICAgdmFyIFUxID0gWzB4MDAwMDAwMDAsIDB4MGUwOTBkMGIsIDB4MWMxMjFhMTYsIDB4MTIxYjE3MWQsIDB4MzgyNDM0MmMsIDB4MzYyZDM5MjcsIDB4MjQzNjJlM2EsIDB4MmEzZjIzMzEsIDB4NzA0ODY4NTgsIDB4N2U0MTY1NTMsIDB4NmM1YTcyNGUsIDB4NjI1MzdmNDUsIDB4NDg2YzVjNzQsIDB4NDY2NTUxN2YsIDB4NTQ3ZTQ2NjIsIDB4NWE3NzRiNjksIDB4ZTA5MGQwYjAsIDB4ZWU5OWRkYmIsIDB4ZmM4MmNhYTYsIDB4ZjI4YmM3YWQsIDB4ZDhiNGU0OWMsIDB4ZDZiZGU5OTcsIDB4YzRhNmZlOGEsIDB4Y2FhZmYzODEsIDB4OTBkOGI4ZTgsIDB4OWVkMWI1ZTMsIDB4OGNjYWEyZmUsIDB4ODJjM2FmZjUsIDB4YThmYzhjYzQsIDB4YTZmNTgxY2YsIDB4YjRlZTk2ZDIsIDB4YmFlNzliZDksIDB4ZGIzYmJiN2IsIDB4ZDUzMmI2NzAsIDB4YzcyOWExNmQsIDB4YzkyMGFjNjYsIDB4ZTMxZjhmNTcsIDB4ZWQxNjgyNWMsIDB4ZmYwZDk1NDEsIDB4ZjEwNDk4NGEsIDB4YWI3M2QzMjMsIDB4YTU3YWRlMjgsIDB4Yjc2MWM5MzUsIDB4Yjk2OGM0M2UsIDB4OTM1N2U3MGYsIDB4OWQ1ZWVhMDQsIDB4OGY0NWZkMTksIDB4ODE0Y2YwMTIsIDB4M2JhYjZiY2IsIDB4MzVhMjY2YzAsIDB4MjdiOTcxZGQsIDB4MjliMDdjZDYsIDB4MDM4ZjVmZTcsIDB4MGQ4NjUyZWMsIDB4MWY5ZDQ1ZjEsIDB4MTE5NDQ4ZmEsIDB4NGJlMzAzOTMsIDB4NDVlYTBlOTgsIDB4NTdmMTE5ODUsIDB4NTlmODE0OGUsIDB4NzNjNzM3YmYsIDB4N2RjZTNhYjQsIDB4NmZkNTJkYTksIDB4NjFkYzIwYTIsIDB4YWQ3NjZkZjYsIDB4YTM3ZjYwZmQsIDB4YjE2NDc3ZTAsIDB4YmY2ZDdhZWIsIDB4OTU1MjU5ZGEsIDB4OWI1YjU0ZDEsIDB4ODk0MDQzY2MsIDB4ODc0OTRlYzcsIDB4ZGQzZTA1YWUsIDB4ZDMzNzA4YTUsIDB4YzEyYzFmYjgsIDB4Y2YyNTEyYjMsIDB4ZTUxYTMxODIsIDB4ZWIxMzNjODksIDB4ZjkwODJiOTQsIDB4ZjcwMTI2OWYsIDB4NGRlNmJkNDYsIDB4NDNlZmIwNGQsIDB4NTFmNGE3NTAsIDB4NWZmZGFhNWIsIDB4NzVjMjg5NmEsIDB4N2JjYjg0NjEsIDB4NjlkMDkzN2MsIDB4NjdkOTllNzcsIDB4M2RhZWQ1MWUsIDB4MzNhN2Q4MTUsIDB4MjFiY2NmMDgsIDB4MmZiNWMyMDMsIDB4MDU4YWUxMzIsIDB4MGI4M2VjMzksIDB4MTk5OGZiMjQsIDB4MTc5MWY2MmYsIDB4NzY0ZGQ2OGQsIDB4Nzg0NGRiODYsIDB4NmE1ZmNjOWIsIDB4NjQ1NmMxOTAsIDB4NGU2OWUyYTEsIDB4NDA2MGVmYWEsIDB4NTI3YmY4YjcsIDB4NWM3MmY1YmMsIDB4MDYwNWJlZDUsIDB4MDgwY2IzZGUsIDB4MWExN2E0YzMsIDB4MTQxZWE5YzgsIDB4M2UyMThhZjksIDB4MzAyODg3ZjIsIDB4MjIzMzkwZWYsIDB4MmMzYTlkZTQsIDB4OTZkZDA2M2QsIDB4OThkNDBiMzYsIDB4OGFjZjFjMmIsIDB4ODRjNjExMjAsIDB4YWVmOTMyMTEsIDB4YTBmMDNmMWEsIDB4YjJlYjI4MDcsIDB4YmNlMjI1MGMsIDB4ZTY5NTZlNjUsIDB4ZTg5YzYzNmUsIDB4ZmE4Nzc0NzMsIDB4ZjQ4ZTc5NzgsIDB4ZGViMTVhNDksIDB4ZDBiODU3NDIsIDB4YzJhMzQwNWYsIDB4Y2NhYTRkNTQsIDB4NDFlY2RhZjcsIDB4NGZlNWQ3ZmMsIDB4NWRmZWMwZTEsIDB4NTNmN2NkZWEsIDB4NzljOGVlZGIsIDB4NzdjMWUzZDAsIDB4NjVkYWY0Y2QsIDB4NmJkM2Y5YzYsIDB4MzFhNGIyYWYsIDB4M2ZhZGJmYTQsIDB4MmRiNmE4YjksIDB4MjNiZmE1YjIsIDB4MDk4MDg2ODMsIDB4MDc4OThiODgsIDB4MTU5MjljOTUsIDB4MWI5YjkxOWUsIDB4YTE3YzBhNDcsIDB4YWY3NTA3NGMsIDB4YmQ2ZTEwNTEsIDB4YjM2NzFkNWEsIDB4OTk1ODNlNmIsIDB4OTc1MTMzNjAsIDB4ODU0YTI0N2QsIDB4OGI0MzI5NzYsIDB4ZDEzNDYyMWYsIDB4ZGYzZDZmMTQsIDB4Y2QyNjc4MDksIDB4YzMyZjc1MDIsIDB4ZTkxMDU2MzMsIDB4ZTcxOTViMzgsIDB4ZjUwMjRjMjUsIDB4ZmIwYjQxMmUsIDB4OWFkNzYxOGMsIDB4OTRkZTZjODcsIDB4ODZjNTdiOWEsIDB4ODhjYzc2OTEsIDB4YTJmMzU1YTAsIDB4YWNmYTU4YWIsIDB4YmVlMTRmYjYsIDB4YjBlODQyYmQsIDB4ZWE5ZjA5ZDQsIDB4ZTQ5NjA0ZGYsIDB4ZjY4ZDEzYzIsIDB4Zjg4NDFlYzksIDB4ZDJiYjNkZjgsIDB4ZGNiMjMwZjMsIDB4Y2VhOTI3ZWUsIDB4YzBhMDJhZTUsIDB4N2E0N2IxM2MsIDB4NzQ0ZWJjMzcsIDB4NjY1NWFiMmEsIDB4Njg1Y2E2MjEsIDB4NDI2Mzg1MTAsIDB4NGM2YTg4MWIsIDB4NWU3MTlmMDYsIDB4NTA3ODkyMGQsIDB4MGEwZmQ5NjQsIDB4MDQwNmQ0NmYsIDB4MTYxZGMzNzIsIDB4MTgxNGNlNzksIDB4MzIyYmVkNDgsIDB4M2MyMmUwNDMsIDB4MmUzOWY3NWUsIDB4MjAzMGZhNTUsIDB4ZWM5YWI3MDEsIDB4ZTI5M2JhMGEsIDB4ZjA4OGFkMTcsIDB4ZmU4MWEwMWMsIDB4ZDRiZTgzMmQsIDB4ZGFiNzhlMjYsIDB4YzhhYzk5M2IsIDB4YzZhNTk0MzAsIDB4OWNkMmRmNTksIDB4OTJkYmQyNTIsIDB4ODBjMGM1NGYsIDB4OGVjOWM4NDQsIDB4YTRmNmViNzUsIDB4YWFmZmU2N2UsIDB4YjhlNGYxNjMsIDB4YjZlZGZjNjgsIDB4MGMwYTY3YjEsIDB4MDIwMzZhYmEsIDB4MTAxODdkYTcsIDB4MWUxMTcwYWMsIDB4MzQyZTUzOWQsIDB4M2EyNzVlOTYsIDB4MjgzYzQ5OGIsIDB4MjYzNTQ0ODAsIDB4N2M0MjBmZTksIDB4NzI0YjAyZTIsIDB4NjA1MDE1ZmYsIDB4NmU1OTE4ZjQsIDB4NDQ2NjNiYzUsIDB4NGE2ZjM2Y2UsIDB4NTg3NDIxZDMsIDB4NTY3ZDJjZDgsIDB4MzdhMTBjN2EsIDB4MzlhODAxNzEsIDB4MmJiMzE2NmMsIDB4MjViYTFiNjcsIDB4MGY4NTM4NTYsIDB4MDE4YzM1NWQsIDB4MTM5NzIyNDAsIDB4MWQ5ZTJmNGIsIDB4NDdlOTY0MjIsIDB4NDllMDY5MjksIDB4NWJmYjdlMzQsIDB4NTVmMjczM2YsIDB4N2ZjZDUwMGUsIDB4NzFjNDVkMDUsIDB4NjNkZjRhMTgsIDB4NmRkNjQ3MTMsIDB4ZDczMWRjY2EsIDB4ZDkzOGQxYzEsIDB4Y2IyM2M2ZGMsIDB4YzUyYWNiZDcsIDB4ZWYxNWU4ZTYsIDB4ZTExY2U1ZWQsIDB4ZjMwN2YyZjAsIDB4ZmQwZWZmZmIsIDB4YTc3OWI0OTIsIDB4YTk3MGI5OTksIDB4YmI2YmFlODQsIDB4YjU2MmEzOGYsIDB4OWY1ZDgwYmUsIDB4OTE1NDhkYjUsIDB4ODM0ZjlhYTgsIDB4OGQ0Njk3YTNdO1xuICAgIHZhciBVMiA9IFsweDAwMDAwMDAwLCAweDBiMGUwOTBkLCAweDE2MWMxMjFhLCAweDFkMTIxYjE3LCAweDJjMzgyNDM0LCAweDI3MzYyZDM5LCAweDNhMjQzNjJlLCAweDMxMmEzZjIzLCAweDU4NzA0ODY4LCAweDUzN2U0MTY1LCAweDRlNmM1YTcyLCAweDQ1NjI1MzdmLCAweDc0NDg2YzVjLCAweDdmNDY2NTUxLCAweDYyNTQ3ZTQ2LCAweDY5NWE3NzRiLCAweGIwZTA5MGQwLCAweGJiZWU5OWRkLCAweGE2ZmM4MmNhLCAweGFkZjI4YmM3LCAweDljZDhiNGU0LCAweDk3ZDZiZGU5LCAweDhhYzRhNmZlLCAweDgxY2FhZmYzLCAweGU4OTBkOGI4LCAweGUzOWVkMWI1LCAweGZlOGNjYWEyLCAweGY1ODJjM2FmLCAweGM0YThmYzhjLCAweGNmYTZmNTgxLCAweGQyYjRlZTk2LCAweGQ5YmFlNzliLCAweDdiZGIzYmJiLCAweDcwZDUzMmI2LCAweDZkYzcyOWExLCAweDY2YzkyMGFjLCAweDU3ZTMxZjhmLCAweDVjZWQxNjgyLCAweDQxZmYwZDk1LCAweDRhZjEwNDk4LCAweDIzYWI3M2QzLCAweDI4YTU3YWRlLCAweDM1Yjc2MWM5LCAweDNlYjk2OGM0LCAweDBmOTM1N2U3LCAweDA0OWQ1ZWVhLCAweDE5OGY0NWZkLCAweDEyODE0Y2YwLCAweGNiM2JhYjZiLCAweGMwMzVhMjY2LCAweGRkMjdiOTcxLCAweGQ2MjliMDdjLCAweGU3MDM4ZjVmLCAweGVjMGQ4NjUyLCAweGYxMWY5ZDQ1LCAweGZhMTE5NDQ4LCAweDkzNGJlMzAzLCAweDk4NDVlYTBlLCAweDg1NTdmMTE5LCAweDhlNTlmODE0LCAweGJmNzNjNzM3LCAweGI0N2RjZTNhLCAweGE5NmZkNTJkLCAweGEyNjFkYzIwLCAweGY2YWQ3NjZkLCAweGZkYTM3ZjYwLCAweGUwYjE2NDc3LCAweGViYmY2ZDdhLCAweGRhOTU1MjU5LCAweGQxOWI1YjU0LCAweGNjODk0MDQzLCAweGM3ODc0OTRlLCAweGFlZGQzZTA1LCAweGE1ZDMzNzA4LCAweGI4YzEyYzFmLCAweGIzY2YyNTEyLCAweDgyZTUxYTMxLCAweDg5ZWIxMzNjLCAweDk0ZjkwODJiLCAweDlmZjcwMTI2LCAweDQ2NGRlNmJkLCAweDRkNDNlZmIwLCAweDUwNTFmNGE3LCAweDViNWZmZGFhLCAweDZhNzVjMjg5LCAweDYxN2JjYjg0LCAweDdjNjlkMDkzLCAweDc3NjdkOTllLCAweDFlM2RhZWQ1LCAweDE1MzNhN2Q4LCAweDA4MjFiY2NmLCAweDAzMmZiNWMyLCAweDMyMDU4YWUxLCAweDM5MGI4M2VjLCAweDI0MTk5OGZiLCAweDJmMTc5MWY2LCAweDhkNzY0ZGQ2LCAweDg2Nzg0NGRiLCAweDliNmE1ZmNjLCAweDkwNjQ1NmMxLCAweGExNGU2OWUyLCAweGFhNDA2MGVmLCAweGI3NTI3YmY4LCAweGJjNWM3MmY1LCAweGQ1MDYwNWJlLCAweGRlMDgwY2IzLCAweGMzMWExN2E0LCAweGM4MTQxZWE5LCAweGY5M2UyMThhLCAweGYyMzAyODg3LCAweGVmMjIzMzkwLCAweGU0MmMzYTlkLCAweDNkOTZkZDA2LCAweDM2OThkNDBiLCAweDJiOGFjZjFjLCAweDIwODRjNjExLCAweDExYWVmOTMyLCAweDFhYTBmMDNmLCAweDA3YjJlYjI4LCAweDBjYmNlMjI1LCAweDY1ZTY5NTZlLCAweDZlZTg5YzYzLCAweDczZmE4Nzc0LCAweDc4ZjQ4ZTc5LCAweDQ5ZGViMTVhLCAweDQyZDBiODU3LCAweDVmYzJhMzQwLCAweDU0Y2NhYTRkLCAweGY3NDFlY2RhLCAweGZjNGZlNWQ3LCAweGUxNWRmZWMwLCAweGVhNTNmN2NkLCAweGRiNzljOGVlLCAweGQwNzdjMWUzLCAweGNkNjVkYWY0LCAweGM2NmJkM2Y5LCAweGFmMzFhNGIyLCAweGE0M2ZhZGJmLCAweGI5MmRiNmE4LCAweGIyMjNiZmE1LCAweDgzMDk4MDg2LCAweDg4MDc4OThiLCAweDk1MTU5MjljLCAweDllMWI5YjkxLCAweDQ3YTE3YzBhLCAweDRjYWY3NTA3LCAweDUxYmQ2ZTEwLCAweDVhYjM2NzFkLCAweDZiOTk1ODNlLCAweDYwOTc1MTMzLCAweDdkODU0YTI0LCAweDc2OGI0MzI5LCAweDFmZDEzNDYyLCAweDE0ZGYzZDZmLCAweDA5Y2QyNjc4LCAweDAyYzMyZjc1LCAweDMzZTkxMDU2LCAweDM4ZTcxOTViLCAweDI1ZjUwMjRjLCAweDJlZmIwYjQxLCAweDhjOWFkNzYxLCAweDg3OTRkZTZjLCAweDlhODZjNTdiLCAweDkxODhjYzc2LCAweGEwYTJmMzU1LCAweGFiYWNmYTU4LCAweGI2YmVlMTRmLCAweGJkYjBlODQyLCAweGQ0ZWE5ZjA5LCAweGRmZTQ5NjA0LCAweGMyZjY4ZDEzLCAweGM5Zjg4NDFlLCAweGY4ZDJiYjNkLCAweGYzZGNiMjMwLCAweGVlY2VhOTI3LCAweGU1YzBhMDJhLCAweDNjN2E0N2IxLCAweDM3NzQ0ZWJjLCAweDJhNjY1NWFiLCAweDIxNjg1Y2E2LCAweDEwNDI2Mzg1LCAweDFiNGM2YTg4LCAweDA2NWU3MTlmLCAweDBkNTA3ODkyLCAweDY0MGEwZmQ5LCAweDZmMDQwNmQ0LCAweDcyMTYxZGMzLCAweDc5MTgxNGNlLCAweDQ4MzIyYmVkLCAweDQzM2MyMmUwLCAweDVlMmUzOWY3LCAweDU1MjAzMGZhLCAweDAxZWM5YWI3LCAweDBhZTI5M2JhLCAweDE3ZjA4OGFkLCAweDFjZmU4MWEwLCAweDJkZDRiZTgzLCAweDI2ZGFiNzhlLCAweDNiYzhhYzk5LCAweDMwYzZhNTk0LCAweDU5OWNkMmRmLCAweDUyOTJkYmQyLCAweDRmODBjMGM1LCAweDQ0OGVjOWM4LCAweDc1YTRmNmViLCAweDdlYWFmZmU2LCAweDYzYjhlNGYxLCAweDY4YjZlZGZjLCAweGIxMGMwYTY3LCAweGJhMDIwMzZhLCAweGE3MTAxODdkLCAweGFjMWUxMTcwLCAweDlkMzQyZTUzLCAweDk2M2EyNzVlLCAweDhiMjgzYzQ5LCAweDgwMjYzNTQ0LCAweGU5N2M0MjBmLCAweGUyNzI0YjAyLCAweGZmNjA1MDE1LCAweGY0NmU1OTE4LCAweGM1NDQ2NjNiLCAweGNlNGE2ZjM2LCAweGQzNTg3NDIxLCAweGQ4NTY3ZDJjLCAweDdhMzdhMTBjLCAweDcxMzlhODAxLCAweDZjMmJiMzE2LCAweDY3MjViYTFiLCAweDU2MGY4NTM4LCAweDVkMDE4YzM1LCAweDQwMTM5NzIyLCAweDRiMWQ5ZTJmLCAweDIyNDdlOTY0LCAweDI5NDllMDY5LCAweDM0NWJmYjdlLCAweDNmNTVmMjczLCAweDBlN2ZjZDUwLCAweDA1NzFjNDVkLCAweDE4NjNkZjRhLCAweDEzNmRkNjQ3LCAweGNhZDczMWRjLCAweGMxZDkzOGQxLCAweGRjY2IyM2M2LCAweGQ3YzUyYWNiLCAweGU2ZWYxNWU4LCAweGVkZTExY2U1LCAweGYwZjMwN2YyLCAweGZiZmQwZWZmLCAweDkyYTc3OWI0LCAweDk5YTk3MGI5LCAweDg0YmI2YmFlLCAweDhmYjU2MmEzLCAweGJlOWY1ZDgwLCAweGI1OTE1NDhkLCAweGE4ODM0ZjlhLCAweGEzOGQ0Njk3XTtcbiAgICB2YXIgVTMgPSBbMHgwMDAwMDAwMCwgMHgwZDBiMGUwOSwgMHgxYTE2MWMxMiwgMHgxNzFkMTIxYiwgMHgzNDJjMzgyNCwgMHgzOTI3MzYyZCwgMHgyZTNhMjQzNiwgMHgyMzMxMmEzZiwgMHg2ODU4NzA0OCwgMHg2NTUzN2U0MSwgMHg3MjRlNmM1YSwgMHg3ZjQ1NjI1MywgMHg1Yzc0NDg2YywgMHg1MTdmNDY2NSwgMHg0NjYyNTQ3ZSwgMHg0YjY5NWE3NywgMHhkMGIwZTA5MCwgMHhkZGJiZWU5OSwgMHhjYWE2ZmM4MiwgMHhjN2FkZjI4YiwgMHhlNDljZDhiNCwgMHhlOTk3ZDZiZCwgMHhmZThhYzRhNiwgMHhmMzgxY2FhZiwgMHhiOGU4OTBkOCwgMHhiNWUzOWVkMSwgMHhhMmZlOGNjYSwgMHhhZmY1ODJjMywgMHg4Y2M0YThmYywgMHg4MWNmYTZmNSwgMHg5NmQyYjRlZSwgMHg5YmQ5YmFlNywgMHhiYjdiZGIzYiwgMHhiNjcwZDUzMiwgMHhhMTZkYzcyOSwgMHhhYzY2YzkyMCwgMHg4ZjU3ZTMxZiwgMHg4MjVjZWQxNiwgMHg5NTQxZmYwZCwgMHg5ODRhZjEwNCwgMHhkMzIzYWI3MywgMHhkZTI4YTU3YSwgMHhjOTM1Yjc2MSwgMHhjNDNlYjk2OCwgMHhlNzBmOTM1NywgMHhlYTA0OWQ1ZSwgMHhmZDE5OGY0NSwgMHhmMDEyODE0YywgMHg2YmNiM2JhYiwgMHg2NmMwMzVhMiwgMHg3MWRkMjdiOSwgMHg3Y2Q2MjliMCwgMHg1ZmU3MDM4ZiwgMHg1MmVjMGQ4NiwgMHg0NWYxMWY5ZCwgMHg0OGZhMTE5NCwgMHgwMzkzNGJlMywgMHgwZTk4NDVlYSwgMHgxOTg1NTdmMSwgMHgxNDhlNTlmOCwgMHgzN2JmNzNjNywgMHgzYWI0N2RjZSwgMHgyZGE5NmZkNSwgMHgyMGEyNjFkYywgMHg2ZGY2YWQ3NiwgMHg2MGZkYTM3ZiwgMHg3N2UwYjE2NCwgMHg3YWViYmY2ZCwgMHg1OWRhOTU1MiwgMHg1NGQxOWI1YiwgMHg0M2NjODk0MCwgMHg0ZWM3ODc0OSwgMHgwNWFlZGQzZSwgMHgwOGE1ZDMzNywgMHgxZmI4YzEyYywgMHgxMmIzY2YyNSwgMHgzMTgyZTUxYSwgMHgzYzg5ZWIxMywgMHgyYjk0ZjkwOCwgMHgyNjlmZjcwMSwgMHhiZDQ2NGRlNiwgMHhiMDRkNDNlZiwgMHhhNzUwNTFmNCwgMHhhYTViNWZmZCwgMHg4OTZhNzVjMiwgMHg4NDYxN2JjYiwgMHg5MzdjNjlkMCwgMHg5ZTc3NjdkOSwgMHhkNTFlM2RhZSwgMHhkODE1MzNhNywgMHhjZjA4MjFiYywgMHhjMjAzMmZiNSwgMHhlMTMyMDU4YSwgMHhlYzM5MGI4MywgMHhmYjI0MTk5OCwgMHhmNjJmMTc5MSwgMHhkNjhkNzY0ZCwgMHhkYjg2Nzg0NCwgMHhjYzliNmE1ZiwgMHhjMTkwNjQ1NiwgMHhlMmExNGU2OSwgMHhlZmFhNDA2MCwgMHhmOGI3NTI3YiwgMHhmNWJjNWM3MiwgMHhiZWQ1MDYwNSwgMHhiM2RlMDgwYywgMHhhNGMzMWExNywgMHhhOWM4MTQxZSwgMHg4YWY5M2UyMSwgMHg4N2YyMzAyOCwgMHg5MGVmMjIzMywgMHg5ZGU0MmMzYSwgMHgwNjNkOTZkZCwgMHgwYjM2OThkNCwgMHgxYzJiOGFjZiwgMHgxMTIwODRjNiwgMHgzMjExYWVmOSwgMHgzZjFhYTBmMCwgMHgyODA3YjJlYiwgMHgyNTBjYmNlMiwgMHg2ZTY1ZTY5NSwgMHg2MzZlZTg5YywgMHg3NDczZmE4NywgMHg3OTc4ZjQ4ZSwgMHg1YTQ5ZGViMSwgMHg1NzQyZDBiOCwgMHg0MDVmYzJhMywgMHg0ZDU0Y2NhYSwgMHhkYWY3NDFlYywgMHhkN2ZjNGZlNSwgMHhjMGUxNWRmZSwgMHhjZGVhNTNmNywgMHhlZWRiNzljOCwgMHhlM2QwNzdjMSwgMHhmNGNkNjVkYSwgMHhmOWM2NmJkMywgMHhiMmFmMzFhNCwgMHhiZmE0M2ZhZCwgMHhhOGI5MmRiNiwgMHhhNWIyMjNiZiwgMHg4NjgzMDk4MCwgMHg4Yjg4MDc4OSwgMHg5Yzk1MTU5MiwgMHg5MTllMWI5YiwgMHgwYTQ3YTE3YywgMHgwNzRjYWY3NSwgMHgxMDUxYmQ2ZSwgMHgxZDVhYjM2NywgMHgzZTZiOTk1OCwgMHgzMzYwOTc1MSwgMHgyNDdkODU0YSwgMHgyOTc2OGI0MywgMHg2MjFmZDEzNCwgMHg2ZjE0ZGYzZCwgMHg3ODA5Y2QyNiwgMHg3NTAyYzMyZiwgMHg1NjMzZTkxMCwgMHg1YjM4ZTcxOSwgMHg0YzI1ZjUwMiwgMHg0MTJlZmIwYiwgMHg2MThjOWFkNywgMHg2Yzg3OTRkZSwgMHg3YjlhODZjNSwgMHg3NjkxODhjYywgMHg1NWEwYTJmMywgMHg1OGFiYWNmYSwgMHg0ZmI2YmVlMSwgMHg0MmJkYjBlOCwgMHgwOWQ0ZWE5ZiwgMHgwNGRmZTQ5NiwgMHgxM2MyZjY4ZCwgMHgxZWM5Zjg4NCwgMHgzZGY4ZDJiYiwgMHgzMGYzZGNiMiwgMHgyN2VlY2VhOSwgMHgyYWU1YzBhMCwgMHhiMTNjN2E0NywgMHhiYzM3NzQ0ZSwgMHhhYjJhNjY1NSwgMHhhNjIxNjg1YywgMHg4NTEwNDI2MywgMHg4ODFiNGM2YSwgMHg5ZjA2NWU3MSwgMHg5MjBkNTA3OCwgMHhkOTY0MGEwZiwgMHhkNDZmMDQwNiwgMHhjMzcyMTYxZCwgMHhjZTc5MTgxNCwgMHhlZDQ4MzIyYiwgMHhlMDQzM2MyMiwgMHhmNzVlMmUzOSwgMHhmYTU1MjAzMCwgMHhiNzAxZWM5YSwgMHhiYTBhZTI5MywgMHhhZDE3ZjA4OCwgMHhhMDFjZmU4MSwgMHg4MzJkZDRiZSwgMHg4ZTI2ZGFiNywgMHg5OTNiYzhhYywgMHg5NDMwYzZhNSwgMHhkZjU5OWNkMiwgMHhkMjUyOTJkYiwgMHhjNTRmODBjMCwgMHhjODQ0OGVjOSwgMHhlYjc1YTRmNiwgMHhlNjdlYWFmZiwgMHhmMTYzYjhlNCwgMHhmYzY4YjZlZCwgMHg2N2IxMGMwYSwgMHg2YWJhMDIwMywgMHg3ZGE3MTAxOCwgMHg3MGFjMWUxMSwgMHg1MzlkMzQyZSwgMHg1ZTk2M2EyNywgMHg0OThiMjgzYywgMHg0NDgwMjYzNSwgMHgwZmU5N2M0MiwgMHgwMmUyNzI0YiwgMHgxNWZmNjA1MCwgMHgxOGY0NmU1OSwgMHgzYmM1NDQ2NiwgMHgzNmNlNGE2ZiwgMHgyMWQzNTg3NCwgMHgyY2Q4NTY3ZCwgMHgwYzdhMzdhMSwgMHgwMTcxMzlhOCwgMHgxNjZjMmJiMywgMHgxYjY3MjViYSwgMHgzODU2MGY4NSwgMHgzNTVkMDE4YywgMHgyMjQwMTM5NywgMHgyZjRiMWQ5ZSwgMHg2NDIyNDdlOSwgMHg2OTI5NDllMCwgMHg3ZTM0NWJmYiwgMHg3MzNmNTVmMiwgMHg1MDBlN2ZjZCwgMHg1ZDA1NzFjNCwgMHg0YTE4NjNkZiwgMHg0NzEzNmRkNiwgMHhkY2NhZDczMSwgMHhkMWMxZDkzOCwgMHhjNmRjY2IyMywgMHhjYmQ3YzUyYSwgMHhlOGU2ZWYxNSwgMHhlNWVkZTExYywgMHhmMmYwZjMwNywgMHhmZmZiZmQwZSwgMHhiNDkyYTc3OSwgMHhiOTk5YTk3MCwgMHhhZTg0YmI2YiwgMHhhMzhmYjU2MiwgMHg4MGJlOWY1ZCwgMHg4ZGI1OTE1NCwgMHg5YWE4ODM0ZiwgMHg5N2EzOGQ0Nl07XG4gICAgdmFyIFU0ID0gWzB4MDAwMDAwMDAsIDB4MDkwZDBiMGUsIDB4MTIxYTE2MWMsIDB4MWIxNzFkMTIsIDB4MjQzNDJjMzgsIDB4MmQzOTI3MzYsIDB4MzYyZTNhMjQsIDB4M2YyMzMxMmEsIDB4NDg2ODU4NzAsIDB4NDE2NTUzN2UsIDB4NWE3MjRlNmMsIDB4NTM3ZjQ1NjIsIDB4NmM1Yzc0NDgsIDB4NjU1MTdmNDYsIDB4N2U0NjYyNTQsIDB4Nzc0YjY5NWEsIDB4OTBkMGIwZTAsIDB4OTlkZGJiZWUsIDB4ODJjYWE2ZmMsIDB4OGJjN2FkZjIsIDB4YjRlNDljZDgsIDB4YmRlOTk3ZDYsIDB4YTZmZThhYzQsIDB4YWZmMzgxY2EsIDB4ZDhiOGU4OTAsIDB4ZDFiNWUzOWUsIDB4Y2FhMmZlOGMsIDB4YzNhZmY1ODIsIDB4ZmM4Y2M0YTgsIDB4ZjU4MWNmYTYsIDB4ZWU5NmQyYjQsIDB4ZTc5YmQ5YmEsIDB4M2JiYjdiZGIsIDB4MzJiNjcwZDUsIDB4MjlhMTZkYzcsIDB4MjBhYzY2YzksIDB4MWY4ZjU3ZTMsIDB4MTY4MjVjZWQsIDB4MGQ5NTQxZmYsIDB4MDQ5ODRhZjEsIDB4NzNkMzIzYWIsIDB4N2FkZTI4YTUsIDB4NjFjOTM1YjcsIDB4NjhjNDNlYjksIDB4NTdlNzBmOTMsIDB4NWVlYTA0OWQsIDB4NDVmZDE5OGYsIDB4NGNmMDEyODEsIDB4YWI2YmNiM2IsIDB4YTI2NmMwMzUsIDB4Yjk3MWRkMjcsIDB4YjA3Y2Q2MjksIDB4OGY1ZmU3MDMsIDB4ODY1MmVjMGQsIDB4OWQ0NWYxMWYsIDB4OTQ0OGZhMTEsIDB4ZTMwMzkzNGIsIDB4ZWEwZTk4NDUsIDB4ZjExOTg1NTcsIDB4ZjgxNDhlNTksIDB4YzczN2JmNzMsIDB4Y2UzYWI0N2QsIDB4ZDUyZGE5NmYsIDB4ZGMyMGEyNjEsIDB4NzY2ZGY2YWQsIDB4N2Y2MGZkYTMsIDB4NjQ3N2UwYjEsIDB4NmQ3YWViYmYsIDB4NTI1OWRhOTUsIDB4NWI1NGQxOWIsIDB4NDA0M2NjODksIDB4NDk0ZWM3ODcsIDB4M2UwNWFlZGQsIDB4MzcwOGE1ZDMsIDB4MmMxZmI4YzEsIDB4MjUxMmIzY2YsIDB4MWEzMTgyZTUsIDB4MTMzYzg5ZWIsIDB4MDgyYjk0ZjksIDB4MDEyNjlmZjcsIDB4ZTZiZDQ2NGQsIDB4ZWZiMDRkNDMsIDB4ZjRhNzUwNTEsIDB4ZmRhYTViNWYsIDB4YzI4OTZhNzUsIDB4Y2I4NDYxN2IsIDB4ZDA5MzdjNjksIDB4ZDk5ZTc3NjcsIDB4YWVkNTFlM2QsIDB4YTdkODE1MzMsIDB4YmNjZjA4MjEsIDB4YjVjMjAzMmYsIDB4OGFlMTMyMDUsIDB4ODNlYzM5MGIsIDB4OThmYjI0MTksIDB4OTFmNjJmMTcsIDB4NGRkNjhkNzYsIDB4NDRkYjg2NzgsIDB4NWZjYzliNmEsIDB4NTZjMTkwNjQsIDB4NjllMmExNGUsIDB4NjBlZmFhNDAsIDB4N2JmOGI3NTIsIDB4NzJmNWJjNWMsIDB4MDViZWQ1MDYsIDB4MGNiM2RlMDgsIDB4MTdhNGMzMWEsIDB4MWVhOWM4MTQsIDB4MjE4YWY5M2UsIDB4Mjg4N2YyMzAsIDB4MzM5MGVmMjIsIDB4M2E5ZGU0MmMsIDB4ZGQwNjNkOTYsIDB4ZDQwYjM2OTgsIDB4Y2YxYzJiOGEsIDB4YzYxMTIwODQsIDB4ZjkzMjExYWUsIDB4ZjAzZjFhYTAsIDB4ZWIyODA3YjIsIDB4ZTIyNTBjYmMsIDB4OTU2ZTY1ZTYsIDB4OWM2MzZlZTgsIDB4ODc3NDczZmEsIDB4OGU3OTc4ZjQsIDB4YjE1YTQ5ZGUsIDB4Yjg1NzQyZDAsIDB4YTM0MDVmYzIsIDB4YWE0ZDU0Y2MsIDB4ZWNkYWY3NDEsIDB4ZTVkN2ZjNGYsIDB4ZmVjMGUxNWQsIDB4ZjdjZGVhNTMsIDB4YzhlZWRiNzksIDB4YzFlM2QwNzcsIDB4ZGFmNGNkNjUsIDB4ZDNmOWM2NmIsIDB4YTRiMmFmMzEsIDB4YWRiZmE0M2YsIDB4YjZhOGI5MmQsIDB4YmZhNWIyMjMsIDB4ODA4NjgzMDksIDB4ODk4Yjg4MDcsIDB4OTI5Yzk1MTUsIDB4OWI5MTllMWIsIDB4N2MwYTQ3YTEsIDB4NzUwNzRjYWYsIDB4NmUxMDUxYmQsIDB4NjcxZDVhYjMsIDB4NTgzZTZiOTksIDB4NTEzMzYwOTcsIDB4NGEyNDdkODUsIDB4NDMyOTc2OGIsIDB4MzQ2MjFmZDEsIDB4M2Q2ZjE0ZGYsIDB4MjY3ODA5Y2QsIDB4MmY3NTAyYzMsIDB4MTA1NjMzZTksIDB4MTk1YjM4ZTcsIDB4MDI0YzI1ZjUsIDB4MGI0MTJlZmIsIDB4ZDc2MThjOWEsIDB4ZGU2Yzg3OTQsIDB4YzU3YjlhODYsIDB4Y2M3NjkxODgsIDB4ZjM1NWEwYTIsIDB4ZmE1OGFiYWMsIDB4ZTE0ZmI2YmUsIDB4ZTg0MmJkYjAsIDB4OWYwOWQ0ZWEsIDB4OTYwNGRmZTQsIDB4OGQxM2MyZjYsIDB4ODQxZWM5ZjgsIDB4YmIzZGY4ZDIsIDB4YjIzMGYzZGMsIDB4YTkyN2VlY2UsIDB4YTAyYWU1YzAsIDB4NDdiMTNjN2EsIDB4NGViYzM3NzQsIDB4NTVhYjJhNjYsIDB4NWNhNjIxNjgsIDB4NjM4NTEwNDIsIDB4NmE4ODFiNGMsIDB4NzE5ZjA2NWUsIDB4Nzg5MjBkNTAsIDB4MGZkOTY0MGEsIDB4MDZkNDZmMDQsIDB4MWRjMzcyMTYsIDB4MTRjZTc5MTgsIDB4MmJlZDQ4MzIsIDB4MjJlMDQzM2MsIDB4MzlmNzVlMmUsIDB4MzBmYTU1MjAsIDB4OWFiNzAxZWMsIDB4OTNiYTBhZTIsIDB4ODhhZDE3ZjAsIDB4ODFhMDFjZmUsIDB4YmU4MzJkZDQsIDB4Yjc4ZTI2ZGEsIDB4YWM5OTNiYzgsIDB4YTU5NDMwYzYsIDB4ZDJkZjU5OWMsIDB4ZGJkMjUyOTIsIDB4YzBjNTRmODAsIDB4YzljODQ0OGUsIDB4ZjZlYjc1YTQsIDB4ZmZlNjdlYWEsIDB4ZTRmMTYzYjgsIDB4ZWRmYzY4YjYsIDB4MGE2N2IxMGMsIDB4MDM2YWJhMDIsIDB4MTg3ZGE3MTAsIDB4MTE3MGFjMWUsIDB4MmU1MzlkMzQsIDB4Mjc1ZTk2M2EsIDB4M2M0OThiMjgsIDB4MzU0NDgwMjYsIDB4NDIwZmU5N2MsIDB4NGIwMmUyNzIsIDB4NTAxNWZmNjAsIDB4NTkxOGY0NmUsIDB4NjYzYmM1NDQsIDB4NmYzNmNlNGEsIDB4NzQyMWQzNTgsIDB4N2QyY2Q4NTYsIDB4YTEwYzdhMzcsIDB4YTgwMTcxMzksIDB4YjMxNjZjMmIsIDB4YmExYjY3MjUsIDB4ODUzODU2MGYsIDB4OGMzNTVkMDEsIDB4OTcyMjQwMTMsIDB4OWUyZjRiMWQsIDB4ZTk2NDIyNDcsIDB4ZTA2OTI5NDksIDB4ZmI3ZTM0NWIsIDB4ZjI3MzNmNTUsIDB4Y2Q1MDBlN2YsIDB4YzQ1ZDA1NzEsIDB4ZGY0YTE4NjMsIDB4ZDY0NzEzNmQsIDB4MzFkY2NhZDcsIDB4MzhkMWMxZDksIDB4MjNjNmRjY2IsIDB4MmFjYmQ3YzUsIDB4MTVlOGU2ZWYsIDB4MWNlNWVkZTEsIDB4MDdmMmYwZjMsIDB4MGVmZmZiZmQsIDB4NzliNDkyYTcsIDB4NzBiOTk5YTksIDB4NmJhZTg0YmIsIDB4NjJhMzhmYjUsIDB4NWQ4MGJlOWYsIDB4NTQ4ZGI1OTEsIDB4NGY5YWE4ODMsIDB4NDY5N2EzOGRdO1xuXG4gICAgZnVuY3Rpb24gY29udmVydFRvSW50MzIoYnl0ZXMpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSArPSA0KSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChcbiAgICAgICAgICAgICAgICAoYnl0ZXNbaSAgICBdIDw8IDI0KSB8XG4gICAgICAgICAgICAgICAgKGJ5dGVzW2kgKyAxXSA8PCAxNikgfFxuICAgICAgICAgICAgICAgIChieXRlc1tpICsgMl0gPDwgIDgpIHxcbiAgICAgICAgICAgICAgICAgYnl0ZXNbaSArIDNdXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgdmFyIEFFUyA9IGZ1bmN0aW9uKGtleSkge1xuICAgICAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgQUVTKSkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0FFUyBtdXN0IGJlIGluc3Rhbml0YXRlZCB3aXRoIGBuZXdgJyk7XG4gICAgICAgIH1cblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ2tleScsIHtcbiAgICAgICAgICAgIHZhbHVlOiBjb2VyY2VBcnJheShrZXksIHRydWUpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX3ByZXBhcmUoKTtcbiAgICB9XG5cblxuICAgIEFFUy5wcm90b3R5cGUuX3ByZXBhcmUgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgcm91bmRzID0gbnVtYmVyT2ZSb3VuZHNbdGhpcy5rZXkubGVuZ3RoXTtcbiAgICAgICAgaWYgKHJvdW5kcyA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQga2V5IHNpemUgKG11c3QgYmUgMTYsIDI0IG9yIDMyIGJ5dGVzKScpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZW5jcnlwdGlvbiByb3VuZCBrZXlzXG4gICAgICAgIHRoaXMuX0tlID0gW107XG5cbiAgICAgICAgLy8gZGVjcnlwdGlvbiByb3VuZCBrZXlzXG4gICAgICAgIHRoaXMuX0tkID0gW107XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gcm91bmRzOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuX0tlLnB1c2goWzAsIDAsIDAsIDBdKTtcbiAgICAgICAgICAgIHRoaXMuX0tkLnB1c2goWzAsIDAsIDAsIDBdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciByb3VuZEtleUNvdW50ID0gKHJvdW5kcyArIDEpICogNDtcbiAgICAgICAgdmFyIEtDID0gdGhpcy5rZXkubGVuZ3RoIC8gNDtcblxuICAgICAgICAvLyBjb252ZXJ0IHRoZSBrZXkgaW50byBpbnRzXG4gICAgICAgIHZhciB0ayA9IGNvbnZlcnRUb0ludDMyKHRoaXMua2V5KTtcblxuICAgICAgICAvLyBjb3B5IHZhbHVlcyBpbnRvIHJvdW5kIGtleSBhcnJheXNcbiAgICAgICAgdmFyIGluZGV4O1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IEtDOyBpKyspIHtcbiAgICAgICAgICAgIGluZGV4ID0gaSA+PiAyO1xuICAgICAgICAgICAgdGhpcy5fS2VbaW5kZXhdW2kgJSA0XSA9IHRrW2ldO1xuICAgICAgICAgICAgdGhpcy5fS2Rbcm91bmRzIC0gaW5kZXhdW2kgJSA0XSA9IHRrW2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8ga2V5IGV4cGFuc2lvbiAoZmlwcy0xOTcgc2VjdGlvbiA1LjIpXG4gICAgICAgIHZhciByY29ucG9pbnRlciA9IDA7XG4gICAgICAgIHZhciB0ID0gS0MsIHR0O1xuICAgICAgICB3aGlsZSAodCA8IHJvdW5kS2V5Q291bnQpIHtcbiAgICAgICAgICAgIHR0ID0gdGtbS0MgLSAxXTtcbiAgICAgICAgICAgIHRrWzBdIF49ICgoU1sodHQgPj4gMTYpICYgMHhGRl0gPDwgMjQpIF5cbiAgICAgICAgICAgICAgICAgICAgICAoU1sodHQgPj4gIDgpICYgMHhGRl0gPDwgMTYpIF5cbiAgICAgICAgICAgICAgICAgICAgICAoU1sgdHQgICAgICAgICYgMHhGRl0gPDwgIDgpIF5cbiAgICAgICAgICAgICAgICAgICAgICAgU1sodHQgPj4gMjQpICYgMHhGRl0gICAgICAgIF5cbiAgICAgICAgICAgICAgICAgICAgICAocmNvbltyY29ucG9pbnRlcl0gPDwgMjQpKTtcbiAgICAgICAgICAgIHJjb25wb2ludGVyICs9IDE7XG5cbiAgICAgICAgICAgIC8vIGtleSBleHBhbnNpb24gKGZvciBub24tMjU2IGJpdClcbiAgICAgICAgICAgIGlmIChLQyAhPSA4KSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBLQzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRrW2ldIF49IHRrW2kgLSAxXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGtleSBleHBhbnNpb24gZm9yIDI1Ni1iaXQga2V5cyBpcyBcInNsaWdodGx5IGRpZmZlcmVudFwiIChmaXBzLTE5NylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCAoS0MgLyAyKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRrW2ldIF49IHRrW2kgLSAxXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdHQgPSB0a1soS0MgLyAyKSAtIDFdO1xuXG4gICAgICAgICAgICAgICAgdGtbS0MgLyAyXSBePSAoU1sgdHQgICAgICAgICYgMHhGRl0gICAgICAgIF5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChTWyh0dCA+PiAgOCkgJiAweEZGXSA8PCAgOCkgXlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFNbKHR0ID4+IDE2KSAmIDB4RkZdIDw8IDE2KSBeXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoU1sodHQgPj4gMjQpICYgMHhGRl0gPDwgMjQpKTtcblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAoS0MgLyAyKSArIDE7IGkgPCBLQzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRrW2ldIF49IHRrW2kgLSAxXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGNvcHkgdmFsdWVzIGludG8gcm91bmQga2V5IGFycmF5c1xuICAgICAgICAgICAgdmFyIGkgPSAwLCByLCBjO1xuICAgICAgICAgICAgd2hpbGUgKGkgPCBLQyAmJiB0IDwgcm91bmRLZXlDb3VudCkge1xuICAgICAgICAgICAgICAgIHIgPSB0ID4+IDI7XG4gICAgICAgICAgICAgICAgYyA9IHQgJSA0O1xuICAgICAgICAgICAgICAgIHRoaXMuX0tlW3JdW2NdID0gdGtbaV07XG4gICAgICAgICAgICAgICAgdGhpcy5fS2Rbcm91bmRzIC0gcl1bY10gPSB0a1tpKytdO1xuICAgICAgICAgICAgICAgIHQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGludmVyc2UtY2lwaGVyLWlmeSB0aGUgZGVjcnlwdGlvbiByb3VuZCBrZXkgKGZpcHMtMTk3IHNlY3Rpb24gNS4zKVxuICAgICAgICBmb3IgKHZhciByID0gMTsgciA8IHJvdW5kczsgcisrKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBjID0gMDsgYyA8IDQ7IGMrKykge1xuICAgICAgICAgICAgICAgIHR0ID0gdGhpcy5fS2Rbcl1bY107XG4gICAgICAgICAgICAgICAgdGhpcy5fS2Rbcl1bY10gPSAoVTFbKHR0ID4+IDI0KSAmIDB4RkZdIF5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVMlsodHQgPj4gMTYpICYgMHhGRl0gXlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFUzWyh0dCA+PiAgOCkgJiAweEZGXSBeXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVTRbIHR0ICAgICAgICAmIDB4RkZdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIEFFUy5wcm90b3R5cGUuZW5jcnlwdCA9IGZ1bmN0aW9uKHBsYWludGV4dCkge1xuICAgICAgICBpZiAocGxhaW50ZXh0Lmxlbmd0aCAhPSAxNikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIHBsYWludGV4dCBzaXplIChtdXN0IGJlIDE2IGJ5dGVzKScpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHJvdW5kcyA9IHRoaXMuX0tlLmxlbmd0aCAtIDE7XG4gICAgICAgIHZhciBhID0gWzAsIDAsIDAsIDBdO1xuXG4gICAgICAgIC8vIGNvbnZlcnQgcGxhaW50ZXh0IHRvIChpbnRzIF4ga2V5KVxuICAgICAgICB2YXIgdCA9IGNvbnZlcnRUb0ludDMyKHBsYWludGV4dCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICB0W2ldIF49IHRoaXMuX0tlWzBdW2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYXBwbHkgcm91bmQgdHJhbnNmb3Jtc1xuICAgICAgICBmb3IgKHZhciByID0gMTsgciA8IHJvdW5kczsgcisrKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgICAgIGFbaV0gPSAoVDFbKHRbIGkgICAgICAgICBdID4+IDI0KSAmIDB4ZmZdIF5cbiAgICAgICAgICAgICAgICAgICAgICAgIFQyWyh0WyhpICsgMSkgJSA0XSA+PiAxNikgJiAweGZmXSBeXG4gICAgICAgICAgICAgICAgICAgICAgICBUM1sodFsoaSArIDIpICUgNF0gPj4gIDgpICYgMHhmZl0gXlxuICAgICAgICAgICAgICAgICAgICAgICAgVDRbIHRbKGkgKyAzKSAlIDRdICAgICAgICAmIDB4ZmZdIF5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX0tlW3JdW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHQgPSBhLnNsaWNlKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0aGUgbGFzdCByb3VuZCBpcyBzcGVjaWFsXG4gICAgICAgIHZhciByZXN1bHQgPSBjcmVhdGVBcnJheSgxNiksIHR0O1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgdHQgPSB0aGlzLl9LZVtyb3VuZHNdW2ldO1xuICAgICAgICAgICAgcmVzdWx0WzQgKiBpICAgIF0gPSAoU1sodFsgaSAgICAgICAgIF0gPj4gMjQpICYgMHhmZl0gXiAodHQgPj4gMjQpKSAmIDB4ZmY7XG4gICAgICAgICAgICByZXN1bHRbNCAqIGkgKyAxXSA9IChTWyh0WyhpICsgMSkgJSA0XSA+PiAxNikgJiAweGZmXSBeICh0dCA+PiAxNikpICYgMHhmZjtcbiAgICAgICAgICAgIHJlc3VsdFs0ICogaSArIDJdID0gKFNbKHRbKGkgKyAyKSAlIDRdID4+ICA4KSAmIDB4ZmZdIF4gKHR0ID4+ICA4KSkgJiAweGZmO1xuICAgICAgICAgICAgcmVzdWx0WzQgKiBpICsgM10gPSAoU1sgdFsoaSArIDMpICUgNF0gICAgICAgICYgMHhmZl0gXiAgdHQgICAgICAgKSAmIDB4ZmY7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIEFFUy5wcm90b3R5cGUuZGVjcnlwdCA9IGZ1bmN0aW9uKGNpcGhlcnRleHQpIHtcbiAgICAgICAgaWYgKGNpcGhlcnRleHQubGVuZ3RoICE9IDE2KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgY2lwaGVydGV4dCBzaXplIChtdXN0IGJlIDE2IGJ5dGVzKScpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHJvdW5kcyA9IHRoaXMuX0tkLmxlbmd0aCAtIDE7XG4gICAgICAgIHZhciBhID0gWzAsIDAsIDAsIDBdO1xuXG4gICAgICAgIC8vIGNvbnZlcnQgcGxhaW50ZXh0IHRvIChpbnRzIF4ga2V5KVxuICAgICAgICB2YXIgdCA9IGNvbnZlcnRUb0ludDMyKGNpcGhlcnRleHQpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgdFtpXSBePSB0aGlzLl9LZFswXVtpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFwcGx5IHJvdW5kIHRyYW5zZm9ybXNcbiAgICAgICAgZm9yICh2YXIgciA9IDE7IHIgPCByb3VuZHM7IHIrKykge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgICAgICBhW2ldID0gKFQ1Wyh0WyBpICAgICAgICAgIF0gPj4gMjQpICYgMHhmZl0gXlxuICAgICAgICAgICAgICAgICAgICAgICAgVDZbKHRbKGkgKyAzKSAlIDRdID4+IDE2KSAmIDB4ZmZdIF5cbiAgICAgICAgICAgICAgICAgICAgICAgIFQ3Wyh0WyhpICsgMikgJSA0XSA+PiAgOCkgJiAweGZmXSBeXG4gICAgICAgICAgICAgICAgICAgICAgICBUOFsgdFsoaSArIDEpICUgNF0gICAgICAgICYgMHhmZl0gXlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fS2Rbcl1baV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdCA9IGEuc2xpY2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRoZSBsYXN0IHJvdW5kIGlzIHNwZWNpYWxcbiAgICAgICAgdmFyIHJlc3VsdCA9IGNyZWF0ZUFycmF5KDE2KSwgdHQ7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICB0dCA9IHRoaXMuX0tkW3JvdW5kc11baV07XG4gICAgICAgICAgICByZXN1bHRbNCAqIGkgICAgXSA9IChTaVsodFsgaSAgICAgICAgIF0gPj4gMjQpICYgMHhmZl0gXiAodHQgPj4gMjQpKSAmIDB4ZmY7XG4gICAgICAgICAgICByZXN1bHRbNCAqIGkgKyAxXSA9IChTaVsodFsoaSArIDMpICUgNF0gPj4gMTYpICYgMHhmZl0gXiAodHQgPj4gMTYpKSAmIDB4ZmY7XG4gICAgICAgICAgICByZXN1bHRbNCAqIGkgKyAyXSA9IChTaVsodFsoaSArIDIpICUgNF0gPj4gIDgpICYgMHhmZl0gXiAodHQgPj4gIDgpKSAmIDB4ZmY7XG4gICAgICAgICAgICByZXN1bHRbNCAqIGkgKyAzXSA9IChTaVsgdFsoaSArIDEpICUgNF0gICAgICAgICYgMHhmZl0gXiAgdHQgICAgICAgKSAmIDB4ZmY7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogIE1vZGUgT2YgT3BlcmF0aW9uIC0gRWxlY3RvbmljIENvZGVib29rIChFQ0IpXG4gICAgICovXG4gICAgdmFyIE1vZGVPZk9wZXJhdGlvbkVDQiA9IGZ1bmN0aW9uKGtleSkge1xuICAgICAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgTW9kZU9mT3BlcmF0aW9uRUNCKSkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0FFUyBtdXN0IGJlIGluc3Rhbml0YXRlZCB3aXRoIGBuZXdgJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gXCJFbGVjdHJvbmljIENvZGUgQmxvY2tcIjtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJlY2JcIjtcblxuICAgICAgICB0aGlzLl9hZXMgPSBuZXcgQUVTKGtleSk7XG4gICAgfVxuXG4gICAgTW9kZU9mT3BlcmF0aW9uRUNCLnByb3RvdHlwZS5lbmNyeXB0ID0gZnVuY3Rpb24ocGxhaW50ZXh0KSB7XG4gICAgICAgIHBsYWludGV4dCA9IGNvZXJjZUFycmF5KHBsYWludGV4dCk7XG5cbiAgICAgICAgaWYgKChwbGFpbnRleHQubGVuZ3RoICUgMTYpICE9PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgcGxhaW50ZXh0IHNpemUgKG11c3QgYmUgbXVsdGlwbGUgb2YgMTYgYnl0ZXMpJyk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY2lwaGVydGV4dCA9IGNyZWF0ZUFycmF5KHBsYWludGV4dC5sZW5ndGgpO1xuICAgICAgICB2YXIgYmxvY2sgPSBjcmVhdGVBcnJheSgxNik7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwbGFpbnRleHQubGVuZ3RoOyBpICs9IDE2KSB7XG4gICAgICAgICAgICBjb3B5QXJyYXkocGxhaW50ZXh0LCBibG9jaywgMCwgaSwgaSArIDE2KTtcbiAgICAgICAgICAgIGJsb2NrID0gdGhpcy5fYWVzLmVuY3J5cHQoYmxvY2spO1xuICAgICAgICAgICAgY29weUFycmF5KGJsb2NrLCBjaXBoZXJ0ZXh0LCBpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjaXBoZXJ0ZXh0O1xuICAgIH1cblxuICAgIE1vZGVPZk9wZXJhdGlvbkVDQi5wcm90b3R5cGUuZGVjcnlwdCA9IGZ1bmN0aW9uKGNpcGhlcnRleHQpIHtcbiAgICAgICAgY2lwaGVydGV4dCA9IGNvZXJjZUFycmF5KGNpcGhlcnRleHQpO1xuXG4gICAgICAgIGlmICgoY2lwaGVydGV4dC5sZW5ndGggJSAxNikgIT09IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignaW52YWxpZCBjaXBoZXJ0ZXh0IHNpemUgKG11c3QgYmUgbXVsdGlwbGUgb2YgMTYgYnl0ZXMpJyk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcGxhaW50ZXh0ID0gY3JlYXRlQXJyYXkoY2lwaGVydGV4dC5sZW5ndGgpO1xuICAgICAgICB2YXIgYmxvY2sgPSBjcmVhdGVBcnJheSgxNik7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaXBoZXJ0ZXh0Lmxlbmd0aDsgaSArPSAxNikge1xuICAgICAgICAgICAgY29weUFycmF5KGNpcGhlcnRleHQsIGJsb2NrLCAwLCBpLCBpICsgMTYpO1xuICAgICAgICAgICAgYmxvY2sgPSB0aGlzLl9hZXMuZGVjcnlwdChibG9jayk7XG4gICAgICAgICAgICBjb3B5QXJyYXkoYmxvY2ssIHBsYWludGV4dCwgaSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGxhaW50ZXh0O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogIE1vZGUgT2YgT3BlcmF0aW9uIC0gQ2lwaGVyIEJsb2NrIENoYWluaW5nIChDQkMpXG4gICAgICovXG4gICAgdmFyIE1vZGVPZk9wZXJhdGlvbkNCQyA9IGZ1bmN0aW9uKGtleSwgaXYpIHtcbiAgICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIE1vZGVPZk9wZXJhdGlvbkNCQykpIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdBRVMgbXVzdCBiZSBpbnN0YW5pdGF0ZWQgd2l0aCBgbmV3YCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IFwiQ2lwaGVyIEJsb2NrIENoYWluaW5nXCI7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiY2JjXCI7XG5cbiAgICAgICAgaWYgKCFpdikge1xuICAgICAgICAgICAgaXYgPSBjcmVhdGVBcnJheSgxNik7XG5cbiAgICAgICAgfSBlbHNlIGlmIChpdi5sZW5ndGggIT0gMTYpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignaW52YWxpZCBpbml0aWFsYXRpb24gdmVjdG9yIHNpemUgKG11c3QgYmUgMTYgYnl0ZXMpJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9sYXN0Q2lwaGVyYmxvY2sgPSBjb2VyY2VBcnJheShpdiwgdHJ1ZSk7XG5cbiAgICAgICAgdGhpcy5fYWVzID0gbmV3IEFFUyhrZXkpO1xuICAgIH1cblxuICAgIE1vZGVPZk9wZXJhdGlvbkNCQy5wcm90b3R5cGUuZW5jcnlwdCA9IGZ1bmN0aW9uKHBsYWludGV4dCkge1xuICAgICAgICBwbGFpbnRleHQgPSBjb2VyY2VBcnJheShwbGFpbnRleHQpO1xuXG4gICAgICAgIGlmICgocGxhaW50ZXh0Lmxlbmd0aCAlIDE2KSAhPT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIHBsYWludGV4dCBzaXplIChtdXN0IGJlIG11bHRpcGxlIG9mIDE2IGJ5dGVzKScpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNpcGhlcnRleHQgPSBjcmVhdGVBcnJheShwbGFpbnRleHQubGVuZ3RoKTtcbiAgICAgICAgdmFyIGJsb2NrID0gY3JlYXRlQXJyYXkoMTYpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGxhaW50ZXh0Lmxlbmd0aDsgaSArPSAxNikge1xuICAgICAgICAgICAgY29weUFycmF5KHBsYWludGV4dCwgYmxvY2ssIDAsIGksIGkgKyAxNik7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgMTY7IGorKykge1xuICAgICAgICAgICAgICAgIGJsb2NrW2pdIF49IHRoaXMuX2xhc3RDaXBoZXJibG9ja1tqXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fbGFzdENpcGhlcmJsb2NrID0gdGhpcy5fYWVzLmVuY3J5cHQoYmxvY2spO1xuICAgICAgICAgICAgY29weUFycmF5KHRoaXMuX2xhc3RDaXBoZXJibG9jaywgY2lwaGVydGV4dCwgaSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2lwaGVydGV4dDtcbiAgICB9XG5cbiAgICBNb2RlT2ZPcGVyYXRpb25DQkMucHJvdG90eXBlLmRlY3J5cHQgPSBmdW5jdGlvbihjaXBoZXJ0ZXh0KSB7XG4gICAgICAgIGNpcGhlcnRleHQgPSBjb2VyY2VBcnJheShjaXBoZXJ0ZXh0KTtcblxuICAgICAgICBpZiAoKGNpcGhlcnRleHQubGVuZ3RoICUgMTYpICE9PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgY2lwaGVydGV4dCBzaXplIChtdXN0IGJlIG11bHRpcGxlIG9mIDE2IGJ5dGVzKScpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHBsYWludGV4dCA9IGNyZWF0ZUFycmF5KGNpcGhlcnRleHQubGVuZ3RoKTtcbiAgICAgICAgdmFyIGJsb2NrID0gY3JlYXRlQXJyYXkoMTYpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2lwaGVydGV4dC5sZW5ndGg7IGkgKz0gMTYpIHtcbiAgICAgICAgICAgIGNvcHlBcnJheShjaXBoZXJ0ZXh0LCBibG9jaywgMCwgaSwgaSArIDE2KTtcbiAgICAgICAgICAgIGJsb2NrID0gdGhpcy5fYWVzLmRlY3J5cHQoYmxvY2spO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IDE2OyBqKyspIHtcbiAgICAgICAgICAgICAgICBwbGFpbnRleHRbaSArIGpdID0gYmxvY2tbal0gXiB0aGlzLl9sYXN0Q2lwaGVyYmxvY2tbal07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvcHlBcnJheShjaXBoZXJ0ZXh0LCB0aGlzLl9sYXN0Q2lwaGVyYmxvY2ssIDAsIGksIGkgKyAxNik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGxhaW50ZXh0O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogIE1vZGUgT2YgT3BlcmF0aW9uIC0gQ2lwaGVyIEZlZWRiYWNrIChDRkIpXG4gICAgICovXG4gICAgdmFyIE1vZGVPZk9wZXJhdGlvbkNGQiA9IGZ1bmN0aW9uKGtleSwgaXYsIHNlZ21lbnRTaXplKSB7XG4gICAgICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBNb2RlT2ZPcGVyYXRpb25DRkIpKSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignQUVTIG11c3QgYmUgaW5zdGFuaXRhdGVkIHdpdGggYG5ld2AnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBcIkNpcGhlciBGZWVkYmFja1wiO1xuICAgICAgICB0aGlzLm5hbWUgPSBcImNmYlwiO1xuXG4gICAgICAgIGlmICghaXYpIHtcbiAgICAgICAgICAgIGl2ID0gY3JlYXRlQXJyYXkoMTYpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoaXYubGVuZ3RoICE9IDE2KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgaW5pdGlhbGF0aW9uIHZlY3RvciBzaXplIChtdXN0IGJlIDE2IHNpemUpJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXNlZ21lbnRTaXplKSB7IHNlZ21lbnRTaXplID0gMTsgfVxuXG4gICAgICAgIHRoaXMuc2VnbWVudFNpemUgPSBzZWdtZW50U2l6ZTtcblxuICAgICAgICB0aGlzLl9zaGlmdFJlZ2lzdGVyID0gY29lcmNlQXJyYXkoaXYsIHRydWUpO1xuXG4gICAgICAgIHRoaXMuX2FlcyA9IG5ldyBBRVMoa2V5KTtcbiAgICB9XG5cbiAgICBNb2RlT2ZPcGVyYXRpb25DRkIucHJvdG90eXBlLmVuY3J5cHQgPSBmdW5jdGlvbihwbGFpbnRleHQpIHtcbiAgICAgICAgaWYgKChwbGFpbnRleHQubGVuZ3RoICUgdGhpcy5zZWdtZW50U2l6ZSkgIT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIHBsYWludGV4dCBzaXplIChtdXN0IGJlIHNlZ21lbnRTaXplIGJ5dGVzKScpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGVuY3J5cHRlZCA9IGNvZXJjZUFycmF5KHBsYWludGV4dCwgdHJ1ZSk7XG5cbiAgICAgICAgdmFyIHhvclNlZ21lbnQ7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZW5jcnlwdGVkLmxlbmd0aDsgaSArPSB0aGlzLnNlZ21lbnRTaXplKSB7XG4gICAgICAgICAgICB4b3JTZWdtZW50ID0gdGhpcy5fYWVzLmVuY3J5cHQodGhpcy5fc2hpZnRSZWdpc3Rlcik7XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuc2VnbWVudFNpemU7IGorKykge1xuICAgICAgICAgICAgICAgIGVuY3J5cHRlZFtpICsgal0gXj0geG9yU2VnbWVudFtqXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU2hpZnQgdGhlIHJlZ2lzdGVyXG4gICAgICAgICAgICBjb3B5QXJyYXkodGhpcy5fc2hpZnRSZWdpc3RlciwgdGhpcy5fc2hpZnRSZWdpc3RlciwgMCwgdGhpcy5zZWdtZW50U2l6ZSk7XG4gICAgICAgICAgICBjb3B5QXJyYXkoZW5jcnlwdGVkLCB0aGlzLl9zaGlmdFJlZ2lzdGVyLCAxNiAtIHRoaXMuc2VnbWVudFNpemUsIGksIGkgKyB0aGlzLnNlZ21lbnRTaXplKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlbmNyeXB0ZWQ7XG4gICAgfVxuXG4gICAgTW9kZU9mT3BlcmF0aW9uQ0ZCLnByb3RvdHlwZS5kZWNyeXB0ID0gZnVuY3Rpb24oY2lwaGVydGV4dCkge1xuICAgICAgICBpZiAoKGNpcGhlcnRleHQubGVuZ3RoICUgdGhpcy5zZWdtZW50U2l6ZSkgIT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIGNpcGhlcnRleHQgc2l6ZSAobXVzdCBiZSBzZWdtZW50U2l6ZSBieXRlcyknKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBwbGFpbnRleHQgPSBjb2VyY2VBcnJheShjaXBoZXJ0ZXh0LCB0cnVlKTtcblxuICAgICAgICB2YXIgeG9yU2VnbWVudDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwbGFpbnRleHQubGVuZ3RoOyBpICs9IHRoaXMuc2VnbWVudFNpemUpIHtcbiAgICAgICAgICAgIHhvclNlZ21lbnQgPSB0aGlzLl9hZXMuZW5jcnlwdCh0aGlzLl9zaGlmdFJlZ2lzdGVyKTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLnNlZ21lbnRTaXplOyBqKyspIHtcbiAgICAgICAgICAgICAgICBwbGFpbnRleHRbaSArIGpdIF49IHhvclNlZ21lbnRbal07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFNoaWZ0IHRoZSByZWdpc3RlclxuICAgICAgICAgICAgY29weUFycmF5KHRoaXMuX3NoaWZ0UmVnaXN0ZXIsIHRoaXMuX3NoaWZ0UmVnaXN0ZXIsIDAsIHRoaXMuc2VnbWVudFNpemUpO1xuICAgICAgICAgICAgY29weUFycmF5KGNpcGhlcnRleHQsIHRoaXMuX3NoaWZ0UmVnaXN0ZXIsIDE2IC0gdGhpcy5zZWdtZW50U2l6ZSwgaSwgaSArIHRoaXMuc2VnbWVudFNpemUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBsYWludGV4dDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiAgTW9kZSBPZiBPcGVyYXRpb24gLSBPdXRwdXQgRmVlZGJhY2sgKE9GQilcbiAgICAgKi9cbiAgICB2YXIgTW9kZU9mT3BlcmF0aW9uT0ZCID0gZnVuY3Rpb24oa2V5LCBpdikge1xuICAgICAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgTW9kZU9mT3BlcmF0aW9uT0ZCKSkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0FFUyBtdXN0IGJlIGluc3Rhbml0YXRlZCB3aXRoIGBuZXdgJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gXCJPdXRwdXQgRmVlZGJhY2tcIjtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJvZmJcIjtcblxuICAgICAgICBpZiAoIWl2KSB7XG4gICAgICAgICAgICBpdiA9IGNyZWF0ZUFycmF5KDE2KTtcblxuICAgICAgICB9IGVsc2UgaWYgKGl2Lmxlbmd0aCAhPSAxNikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIGluaXRpYWxhdGlvbiB2ZWN0b3Igc2l6ZSAobXVzdCBiZSAxNiBieXRlcyknKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2xhc3RQcmVjaXBoZXIgPSBjb2VyY2VBcnJheShpdiwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuX2xhc3RQcmVjaXBoZXJJbmRleCA9IDE2O1xuXG4gICAgICAgIHRoaXMuX2FlcyA9IG5ldyBBRVMoa2V5KTtcbiAgICB9XG5cbiAgICBNb2RlT2ZPcGVyYXRpb25PRkIucHJvdG90eXBlLmVuY3J5cHQgPSBmdW5jdGlvbihwbGFpbnRleHQpIHtcbiAgICAgICAgdmFyIGVuY3J5cHRlZCA9IGNvZXJjZUFycmF5KHBsYWludGV4dCwgdHJ1ZSk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbmNyeXB0ZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9sYXN0UHJlY2lwaGVySW5kZXggPT09IDE2KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbGFzdFByZWNpcGhlciA9IHRoaXMuX2Flcy5lbmNyeXB0KHRoaXMuX2xhc3RQcmVjaXBoZXIpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2xhc3RQcmVjaXBoZXJJbmRleCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbmNyeXB0ZWRbaV0gXj0gdGhpcy5fbGFzdFByZWNpcGhlclt0aGlzLl9sYXN0UHJlY2lwaGVySW5kZXgrK107XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZW5jcnlwdGVkO1xuICAgIH1cblxuICAgIC8vIERlY3J5cHRpb24gaXMgc3ltZXRyaWNcbiAgICBNb2RlT2ZPcGVyYXRpb25PRkIucHJvdG90eXBlLmRlY3J5cHQgPSBNb2RlT2ZPcGVyYXRpb25PRkIucHJvdG90eXBlLmVuY3J5cHQ7XG5cblxuICAgIC8qKlxuICAgICAqICBDb3VudGVyIG9iamVjdCBmb3IgQ1RSIGNvbW1vbiBtb2RlIG9mIG9wZXJhdGlvblxuICAgICAqL1xuICAgIHZhciBDb3VudGVyID0gZnVuY3Rpb24oaW5pdGlhbFZhbHVlKSB7XG4gICAgICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBDb3VudGVyKSkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0NvdW50ZXIgbXVzdCBiZSBpbnN0YW5pdGF0ZWQgd2l0aCBgbmV3YCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gV2UgYWxsb3cgMCwgYnV0IGFueXRoaW5nIGZhbHNlLWlzaCB1c2VzIHRoZSBkZWZhdWx0IDFcbiAgICAgICAgaWYgKGluaXRpYWxWYWx1ZSAhPT0gMCAmJiAhaW5pdGlhbFZhbHVlKSB7IGluaXRpYWxWYWx1ZSA9IDE7IH1cblxuICAgICAgICBpZiAodHlwZW9mKGluaXRpYWxWYWx1ZSkgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICB0aGlzLl9jb3VudGVyID0gY3JlYXRlQXJyYXkoMTYpO1xuICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZShpbml0aWFsVmFsdWUpO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldEJ5dGVzKGluaXRpYWxWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBDb3VudGVyLnByb3RvdHlwZS5zZXRWYWx1ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIGlmICh0eXBlb2YodmFsdWUpICE9PSAnbnVtYmVyJyB8fCBwYXJzZUludCh2YWx1ZSkgIT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignaW52YWxpZCBjb3VudGVyIHZhbHVlIChtdXN0IGJlIGFuIGludGVnZXIpJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBXZSBjYW5ub3Qgc2FmZWx5IGhhbmRsZSBudW1iZXJzIGJleW9uZCB0aGUgc2FmZSByYW5nZSBmb3IgaW50ZWdlcnNcbiAgICAgICAgaWYgKHZhbHVlID4gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignaW50ZWdlciB2YWx1ZSBvdXQgb2Ygc2FmZSByYW5nZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaW5kZXggPSAxNTsgaW5kZXggPj0gMDsgLS1pbmRleCkge1xuICAgICAgICAgICAgdGhpcy5fY291bnRlcltpbmRleF0gPSB2YWx1ZSAlIDI1NjtcbiAgICAgICAgICAgIHZhbHVlID0gcGFyc2VJbnQodmFsdWUgLyAyNTYpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQ291bnRlci5wcm90b3R5cGUuc2V0Qnl0ZXMgPSBmdW5jdGlvbihieXRlcykge1xuICAgICAgICBieXRlcyA9IGNvZXJjZUFycmF5KGJ5dGVzLCB0cnVlKTtcblxuICAgICAgICBpZiAoYnl0ZXMubGVuZ3RoICE9IDE2KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgY291bnRlciBieXRlcyBzaXplIChtdXN0IGJlIDE2IGJ5dGVzKScpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fY291bnRlciA9IGJ5dGVzO1xuICAgIH07XG5cbiAgICBDb3VudGVyLnByb3RvdHlwZS5pbmNyZW1lbnQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE1OyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2NvdW50ZXJbaV0gPT09IDI1NSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvdW50ZXJbaV0gPSAwO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jb3VudGVyW2ldKys7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqICBNb2RlIE9mIE9wZXJhdGlvbiAtIENvdW50ZXIgKENUUilcbiAgICAgKi9cbiAgICB2YXIgTW9kZU9mT3BlcmF0aW9uQ1RSID0gZnVuY3Rpb24oa2V5LCBjb3VudGVyKSB7XG4gICAgICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBNb2RlT2ZPcGVyYXRpb25DVFIpKSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignQUVTIG11c3QgYmUgaW5zdGFuaXRhdGVkIHdpdGggYG5ld2AnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBcIkNvdW50ZXJcIjtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJjdHJcIjtcblxuICAgICAgICBpZiAoIShjb3VudGVyIGluc3RhbmNlb2YgQ291bnRlcikpIHtcbiAgICAgICAgICAgIGNvdW50ZXIgPSBuZXcgQ291bnRlcihjb3VudGVyKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fY291bnRlciA9IGNvdW50ZXI7XG5cbiAgICAgICAgdGhpcy5fcmVtYWluaW5nQ291bnRlciA9IG51bGw7XG4gICAgICAgIHRoaXMuX3JlbWFpbmluZ0NvdW50ZXJJbmRleCA9IDE2O1xuXG4gICAgICAgIHRoaXMuX2FlcyA9IG5ldyBBRVMoa2V5KTtcbiAgICB9XG5cbiAgICBNb2RlT2ZPcGVyYXRpb25DVFIucHJvdG90eXBlLmVuY3J5cHQgPSBmdW5jdGlvbihwbGFpbnRleHQpIHtcbiAgICAgICAgdmFyIGVuY3J5cHRlZCA9IGNvZXJjZUFycmF5KHBsYWludGV4dCwgdHJ1ZSk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbmNyeXB0ZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9yZW1haW5pbmdDb3VudGVySW5kZXggPT09IDE2KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVtYWluaW5nQ291bnRlciA9IHRoaXMuX2Flcy5lbmNyeXB0KHRoaXMuX2NvdW50ZXIuX2NvdW50ZXIpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlbWFpbmluZ0NvdW50ZXJJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5fY291bnRlci5pbmNyZW1lbnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVuY3J5cHRlZFtpXSBePSB0aGlzLl9yZW1haW5pbmdDb3VudGVyW3RoaXMuX3JlbWFpbmluZ0NvdW50ZXJJbmRleCsrXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlbmNyeXB0ZWQ7XG4gICAgfVxuXG4gICAgLy8gRGVjcnlwdGlvbiBpcyBzeW1ldHJpY1xuICAgIE1vZGVPZk9wZXJhdGlvbkNUUi5wcm90b3R5cGUuZGVjcnlwdCA9IE1vZGVPZk9wZXJhdGlvbkNUUi5wcm90b3R5cGUuZW5jcnlwdDtcblxuXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBQYWRkaW5nXG5cbiAgICAvLyBTZWU6aHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzIzMTVcbiAgICBmdW5jdGlvbiBwa2NzN3BhZChkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBjb2VyY2VBcnJheShkYXRhLCB0cnVlKTtcbiAgICAgICAgdmFyIHBhZGRlciA9IDE2IC0gKGRhdGEubGVuZ3RoICUgMTYpO1xuICAgICAgICB2YXIgcmVzdWx0ID0gY3JlYXRlQXJyYXkoZGF0YS5sZW5ndGggKyBwYWRkZXIpO1xuICAgICAgICBjb3B5QXJyYXkoZGF0YSwgcmVzdWx0KTtcbiAgICAgICAgZm9yICh2YXIgaSA9IGRhdGEubGVuZ3RoOyBpIDwgcmVzdWx0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICByZXN1bHRbaV0gPSBwYWRkZXI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwa2NzN3N0cmlwKGRhdGEpIHtcbiAgICAgICAgZGF0YSA9IGNvZXJjZUFycmF5KGRhdGEsIHRydWUpO1xuICAgICAgICBpZiAoZGF0YS5sZW5ndGggPCAxNikgeyB0aHJvdyBuZXcgRXJyb3IoJ1BLQ1MjNyBpbnZhbGlkIGxlbmd0aCcpOyB9XG5cbiAgICAgICAgdmFyIHBhZGRlciA9IGRhdGFbZGF0YS5sZW5ndGggLSAxXTtcbiAgICAgICAgaWYgKHBhZGRlciA+IDE2KSB7IHRocm93IG5ldyBFcnJvcignUEtDUyM3IHBhZGRpbmcgYnl0ZSBvdXQgb2YgcmFuZ2UnKTsgfVxuXG4gICAgICAgIHZhciBsZW5ndGggPSBkYXRhLmxlbmd0aCAtIHBhZGRlcjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYWRkZXI7IGkrKykge1xuICAgICAgICAgICAgaWYgKGRhdGFbbGVuZ3RoICsgaV0gIT09IHBhZGRlcikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUEtDUyM3IGludmFsaWQgcGFkZGluZyBieXRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcmVzdWx0ID0gY3JlYXRlQXJyYXkobGVuZ3RoKTtcbiAgICAgICAgY29weUFycmF5KGRhdGEsIHJlc3VsdCwgMCwgMCwgbGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIEV4cG9ydGluZ1xuXG5cbiAgICAvLyBUaGUgYmxvY2sgY2lwaGVyXG4gICAgdmFyIGFlc2pzID0ge1xuICAgICAgICBBRVM6IEFFUyxcbiAgICAgICAgQ291bnRlcjogQ291bnRlcixcblxuICAgICAgICBNb2RlT2ZPcGVyYXRpb246IHtcbiAgICAgICAgICAgIGVjYjogTW9kZU9mT3BlcmF0aW9uRUNCLFxuICAgICAgICAgICAgY2JjOiBNb2RlT2ZPcGVyYXRpb25DQkMsXG4gICAgICAgICAgICBjZmI6IE1vZGVPZk9wZXJhdGlvbkNGQixcbiAgICAgICAgICAgIG9mYjogTW9kZU9mT3BlcmF0aW9uT0ZCLFxuICAgICAgICAgICAgY3RyOiBNb2RlT2ZPcGVyYXRpb25DVFJcbiAgICAgICAgfSxcblxuICAgICAgICB1dGlsczoge1xuICAgICAgICAgICAgaGV4OiBjb252ZXJ0SGV4LFxuICAgICAgICAgICAgdXRmODogY29udmVydFV0ZjhcbiAgICAgICAgfSxcblxuICAgICAgICBwYWRkaW5nOiB7XG4gICAgICAgICAgICBwa2NzNzoge1xuICAgICAgICAgICAgICAgIHBhZDogcGtjczdwYWQsXG4gICAgICAgICAgICAgICAgc3RyaXA6IHBrY3M3c3RyaXBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBfYXJyYXlUZXN0OiB7XG4gICAgICAgICAgICBjb2VyY2VBcnJheTogY29lcmNlQXJyYXksXG4gICAgICAgICAgICBjcmVhdGVBcnJheTogY3JlYXRlQXJyYXksXG4gICAgICAgICAgICBjb3B5QXJyYXk6IGNvcHlBcnJheSxcbiAgICAgICAgfVxuICAgIH07XG5cblxuICAgIC8vIG5vZGUuanNcbiAgICBpZiAodHlwZW9mIGV4cG9ydHMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gYWVzanNcblxuICAgIC8vIFJlcXVpcmVKUy9BTURcbiAgICAvLyBodHRwOi8vd3d3LnJlcXVpcmVqcy5vcmcvZG9jcy9hcGkuaHRtbFxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbWRqcy9hbWRqcy1hcGkvd2lraS9BTURcbiAgICB9IGVsc2UgaWYgKHR5cGVvZihkZWZpbmUpID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgZGVmaW5lKFtdLCBmdW5jdGlvbigpIHsgcmV0dXJuIGFlc2pzOyB9KTtcblxuICAgIC8vIFdlYiBCcm93c2Vyc1xuICAgIH0gZWxzZSB7XG5cbiAgICAgICAgLy8gSWYgdGhlcmUgd2FzIGFuIGV4aXN0aW5nIGxpYnJhcnkgYXQgXCJhZXNqc1wiIG1ha2Ugc3VyZSBpdCdzIHN0aWxsIGF2YWlsYWJsZVxuICAgICAgICBpZiAocm9vdC5hZXNqcykge1xuICAgICAgICAgICAgYWVzanMuX2Flc2pzID0gcm9vdC5hZXNqcztcbiAgICAgICAgfVxuXG4gICAgICAgIHJvb3QuYWVzanMgPSBhZXNqcztcbiAgICB9XG5cblxufSkodGhpcyk7XG4iLCIndXNlIHN0cmljdCdcbi8vIGJhc2UteCBlbmNvZGluZyAvIGRlY29kaW5nXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTggYmFzZS14IGNvbnRyaWJ1dG9yc1xuLy8gQ29weXJpZ2h0IChjKSAyMDE0LTIwMTggVGhlIEJpdGNvaW4gQ29yZSBkZXZlbG9wZXJzIChiYXNlNTguY3BwKVxuLy8gRGlzdHJpYnV0ZWQgdW5kZXIgdGhlIE1JVCBzb2Z0d2FyZSBsaWNlbnNlLCBzZWUgdGhlIGFjY29tcGFueWluZ1xuLy8gZmlsZSBMSUNFTlNFIG9yIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwLlxuLy8gQHRzLWlnbm9yZVxudmFyIF9CdWZmZXIgPSByZXF1aXJlKCdzYWZlLWJ1ZmZlcicpLkJ1ZmZlclxuZnVuY3Rpb24gYmFzZSAoQUxQSEFCRVQpIHtcbiAgaWYgKEFMUEhBQkVULmxlbmd0aCA+PSAyNTUpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQWxwaGFiZXQgdG9vIGxvbmcnKSB9XG4gIHZhciBCQVNFX01BUCA9IG5ldyBVaW50OEFycmF5KDI1NilcbiAgZm9yICh2YXIgaiA9IDA7IGogPCBCQVNFX01BUC5sZW5ndGg7IGorKykge1xuICAgIEJBU0VfTUFQW2pdID0gMjU1XG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBBTFBIQUJFVC5sZW5ndGg7IGkrKykge1xuICAgIHZhciB4ID0gQUxQSEFCRVQuY2hhckF0KGkpXG4gICAgdmFyIHhjID0geC5jaGFyQ29kZUF0KDApXG4gICAgaWYgKEJBU0VfTUFQW3hjXSAhPT0gMjU1KSB7IHRocm93IG5ldyBUeXBlRXJyb3IoeCArICcgaXMgYW1iaWd1b3VzJykgfVxuICAgIEJBU0VfTUFQW3hjXSA9IGlcbiAgfVxuICB2YXIgQkFTRSA9IEFMUEhBQkVULmxlbmd0aFxuICB2YXIgTEVBREVSID0gQUxQSEFCRVQuY2hhckF0KDApXG4gIHZhciBGQUNUT1IgPSBNYXRoLmxvZyhCQVNFKSAvIE1hdGgubG9nKDI1NikgLy8gbG9nKEJBU0UpIC8gbG9nKDI1NiksIHJvdW5kZWQgdXBcbiAgdmFyIGlGQUNUT1IgPSBNYXRoLmxvZygyNTYpIC8gTWF0aC5sb2coQkFTRSkgLy8gbG9nKDI1NikgLyBsb2coQkFTRSksIHJvdW5kZWQgdXBcbiAgZnVuY3Rpb24gZW5jb2RlIChzb3VyY2UpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShzb3VyY2UpIHx8IHNvdXJjZSBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkpIHsgc291cmNlID0gX0J1ZmZlci5mcm9tKHNvdXJjZSkgfVxuICAgIGlmICghX0J1ZmZlci5pc0J1ZmZlcihzb3VyY2UpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIEJ1ZmZlcicpIH1cbiAgICBpZiAoc291cmNlLmxlbmd0aCA9PT0gMCkgeyByZXR1cm4gJycgfVxuICAgICAgICAvLyBTa2lwICYgY291bnQgbGVhZGluZyB6ZXJvZXMuXG4gICAgdmFyIHplcm9lcyA9IDBcbiAgICB2YXIgbGVuZ3RoID0gMFxuICAgIHZhciBwYmVnaW4gPSAwXG4gICAgdmFyIHBlbmQgPSBzb3VyY2UubGVuZ3RoXG4gICAgd2hpbGUgKHBiZWdpbiAhPT0gcGVuZCAmJiBzb3VyY2VbcGJlZ2luXSA9PT0gMCkge1xuICAgICAgcGJlZ2luKytcbiAgICAgIHplcm9lcysrXG4gICAgfVxuICAgICAgICAvLyBBbGxvY2F0ZSBlbm91Z2ggc3BhY2UgaW4gYmlnLWVuZGlhbiBiYXNlNTggcmVwcmVzZW50YXRpb24uXG4gICAgdmFyIHNpemUgPSAoKHBlbmQgLSBwYmVnaW4pICogaUZBQ1RPUiArIDEpID4+PiAwXG4gICAgdmFyIGI1OCA9IG5ldyBVaW50OEFycmF5KHNpemUpXG4gICAgICAgIC8vIFByb2Nlc3MgdGhlIGJ5dGVzLlxuICAgIHdoaWxlIChwYmVnaW4gIT09IHBlbmQpIHtcbiAgICAgIHZhciBjYXJyeSA9IHNvdXJjZVtwYmVnaW5dXG4gICAgICAgICAgICAvLyBBcHBseSBcImI1OCA9IGI1OCAqIDI1NiArIGNoXCIuXG4gICAgICB2YXIgaSA9IDBcbiAgICAgIGZvciAodmFyIGl0MSA9IHNpemUgLSAxOyAoY2FycnkgIT09IDAgfHwgaSA8IGxlbmd0aCkgJiYgKGl0MSAhPT0gLTEpOyBpdDEtLSwgaSsrKSB7XG4gICAgICAgIGNhcnJ5ICs9ICgyNTYgKiBiNThbaXQxXSkgPj4+IDBcbiAgICAgICAgYjU4W2l0MV0gPSAoY2FycnkgJSBCQVNFKSA+Pj4gMFxuICAgICAgICBjYXJyeSA9IChjYXJyeSAvIEJBU0UpID4+PiAwXG4gICAgICB9XG4gICAgICBpZiAoY2FycnkgIT09IDApIHsgdGhyb3cgbmV3IEVycm9yKCdOb24temVybyBjYXJyeScpIH1cbiAgICAgIGxlbmd0aCA9IGlcbiAgICAgIHBiZWdpbisrXG4gICAgfVxuICAgICAgICAvLyBTa2lwIGxlYWRpbmcgemVyb2VzIGluIGJhc2U1OCByZXN1bHQuXG4gICAgdmFyIGl0MiA9IHNpemUgLSBsZW5ndGhcbiAgICB3aGlsZSAoaXQyICE9PSBzaXplICYmIGI1OFtpdDJdID09PSAwKSB7XG4gICAgICBpdDIrK1xuICAgIH1cbiAgICAgICAgLy8gVHJhbnNsYXRlIHRoZSByZXN1bHQgaW50byBhIHN0cmluZy5cbiAgICB2YXIgc3RyID0gTEVBREVSLnJlcGVhdCh6ZXJvZXMpXG4gICAgZm9yICg7IGl0MiA8IHNpemU7ICsraXQyKSB7IHN0ciArPSBBTFBIQUJFVC5jaGFyQXQoYjU4W2l0Ml0pIH1cbiAgICByZXR1cm4gc3RyXG4gIH1cbiAgZnVuY3Rpb24gZGVjb2RlVW5zYWZlIChzb3VyY2UpIHtcbiAgICBpZiAodHlwZW9mIHNvdXJjZSAhPT0gJ3N0cmluZycpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgU3RyaW5nJykgfVxuICAgIGlmIChzb3VyY2UubGVuZ3RoID09PSAwKSB7IHJldHVybiBfQnVmZmVyLmFsbG9jKDApIH1cbiAgICB2YXIgcHN6ID0gMFxuICAgICAgICAvLyBTa2lwIGxlYWRpbmcgc3BhY2VzLlxuICAgIGlmIChzb3VyY2VbcHN6XSA9PT0gJyAnKSB7IHJldHVybiB9XG4gICAgICAgIC8vIFNraXAgYW5kIGNvdW50IGxlYWRpbmcgJzEncy5cbiAgICB2YXIgemVyb2VzID0gMFxuICAgIHZhciBsZW5ndGggPSAwXG4gICAgd2hpbGUgKHNvdXJjZVtwc3pdID09PSBMRUFERVIpIHtcbiAgICAgIHplcm9lcysrXG4gICAgICBwc3orK1xuICAgIH1cbiAgICAgICAgLy8gQWxsb2NhdGUgZW5vdWdoIHNwYWNlIGluIGJpZy1lbmRpYW4gYmFzZTI1NiByZXByZXNlbnRhdGlvbi5cbiAgICB2YXIgc2l6ZSA9ICgoKHNvdXJjZS5sZW5ndGggLSBwc3opICogRkFDVE9SKSArIDEpID4+PiAwIC8vIGxvZyg1OCkgLyBsb2coMjU2KSwgcm91bmRlZCB1cC5cbiAgICB2YXIgYjI1NiA9IG5ldyBVaW50OEFycmF5KHNpemUpXG4gICAgICAgIC8vIFByb2Nlc3MgdGhlIGNoYXJhY3RlcnMuXG4gICAgd2hpbGUgKHNvdXJjZVtwc3pdKSB7XG4gICAgICAgICAgICAvLyBEZWNvZGUgY2hhcmFjdGVyXG4gICAgICB2YXIgY2FycnkgPSBCQVNFX01BUFtzb3VyY2UuY2hhckNvZGVBdChwc3opXVxuICAgICAgICAgICAgLy8gSW52YWxpZCBjaGFyYWN0ZXJcbiAgICAgIGlmIChjYXJyeSA9PT0gMjU1KSB7IHJldHVybiB9XG4gICAgICB2YXIgaSA9IDBcbiAgICAgIGZvciAodmFyIGl0MyA9IHNpemUgLSAxOyAoY2FycnkgIT09IDAgfHwgaSA8IGxlbmd0aCkgJiYgKGl0MyAhPT0gLTEpOyBpdDMtLSwgaSsrKSB7XG4gICAgICAgIGNhcnJ5ICs9IChCQVNFICogYjI1NltpdDNdKSA+Pj4gMFxuICAgICAgICBiMjU2W2l0M10gPSAoY2FycnkgJSAyNTYpID4+PiAwXG4gICAgICAgIGNhcnJ5ID0gKGNhcnJ5IC8gMjU2KSA+Pj4gMFxuICAgICAgfVxuICAgICAgaWYgKGNhcnJ5ICE9PSAwKSB7IHRocm93IG5ldyBFcnJvcignTm9uLXplcm8gY2FycnknKSB9XG4gICAgICBsZW5ndGggPSBpXG4gICAgICBwc3orK1xuICAgIH1cbiAgICAgICAgLy8gU2tpcCB0cmFpbGluZyBzcGFjZXMuXG4gICAgaWYgKHNvdXJjZVtwc3pdID09PSAnICcpIHsgcmV0dXJuIH1cbiAgICAgICAgLy8gU2tpcCBsZWFkaW5nIHplcm9lcyBpbiBiMjU2LlxuICAgIHZhciBpdDQgPSBzaXplIC0gbGVuZ3RoXG4gICAgd2hpbGUgKGl0NCAhPT0gc2l6ZSAmJiBiMjU2W2l0NF0gPT09IDApIHtcbiAgICAgIGl0NCsrXG4gICAgfVxuICAgIHZhciB2Y2ggPSBfQnVmZmVyLmFsbG9jVW5zYWZlKHplcm9lcyArIChzaXplIC0gaXQ0KSlcbiAgICB2Y2guZmlsbCgweDAwLCAwLCB6ZXJvZXMpXG4gICAgdmFyIGogPSB6ZXJvZXNcbiAgICB3aGlsZSAoaXQ0ICE9PSBzaXplKSB7XG4gICAgICB2Y2hbaisrXSA9IGIyNTZbaXQ0KytdXG4gICAgfVxuICAgIHJldHVybiB2Y2hcbiAgfVxuICBmdW5jdGlvbiBkZWNvZGUgKHN0cmluZykge1xuICAgIHZhciBidWZmZXIgPSBkZWNvZGVVbnNhZmUoc3RyaW5nKVxuICAgIGlmIChidWZmZXIpIHsgcmV0dXJuIGJ1ZmZlciB9XG4gICAgdGhyb3cgbmV3IEVycm9yKCdOb24tYmFzZScgKyBCQVNFICsgJyBjaGFyYWN0ZXInKVxuICB9XG4gIHJldHVybiB7XG4gICAgZW5jb2RlOiBlbmNvZGUsXG4gICAgZGVjb2RlVW5zYWZlOiBkZWNvZGVVbnNhZmUsXG4gICAgZGVjb2RlOiBkZWNvZGVcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBiYXNlXG4iLCIvKipcbiAqIEFwcGxpZXMgdGhlIEFORCBvcGVyYXRpb24sIGV4cGVjdHMgdHdvIGFycmF5cyBvZiB0aGUgc2FtZSBzaXplIGFuZCByZXR1cm5zIGEgbmV3IG9uZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogYW5kKFsxLDAsMCwwLDEsMSwwLDFdLCBbMCwxLDEsMCwwLDEsMCwwXSkgPT4gWzAsMCwwLDAsMCwxLDAsMF1cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBiaXRzMSBpbnB1dCBkYXRhXG4gKiBAcGFyYW0ge0FycmF5fSBiaXRzMiBpbnB1dCBkYXRhXG4gKiBAcmV0dXJuIHtBcnJheX0gW2JpdHMxIEFORCBiaXRzMl1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIChiaXRzMSwgYml0czIpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBiaXRzMS5sZW5ndGg7IGkrKylcbiAgICAgICAgcmVzdWx0W2ldID0gKGJpdHMxW2ldICYgYml0czJbaV0pO1xuICAgIHJldHVybiByZXN1bHQ7XG59KTtcbiIsImltcG9ydCBhbmQgZnJvbSAnLi9hbmQnO1xuaW1wb3J0IG5hbmQgZnJvbSAnLi9uYW5kJztcbmltcG9ydCBub3IgZnJvbSAnLi9ub3InO1xuaW1wb3J0IG5vdCBmcm9tICcuL25vdCc7XG5pbXBvcnQgb3IgZnJvbSAnLi9vcic7XG5pbXBvcnQgcmVkdWNlQW5kIGZyb20gJy4vcmVkdWNlLWFuZCc7XG5pbXBvcnQgcmVkdWNlTmFuZCBmcm9tICcuL3JlZHVjZS1uYW5kJztcbmltcG9ydCByZWR1Y2VOb3IgZnJvbSAnLi9yZWR1Y2Utbm9yJztcbmltcG9ydCByZWR1Y2VPciBmcm9tICcuL3JlZHVjZS1vcic7XG5pbXBvcnQgcmVkdWNlWG5vciBmcm9tICcuL3JlZHVjZS14bm9yJztcbmltcG9ydCByZWR1Y2VYb3IgZnJvbSAnLi9yZWR1Y2UteG9yJztcbmltcG9ydCB0b0Jvb2xlYW4gZnJvbSAnLi90by1ib29sZWFuJztcbmltcG9ydCB0b1N0cmluZyBmcm9tICcuL3RvLXN0cmluZyc7XG5pbXBvcnQgeG5vciBmcm9tICcuL3hub3InO1xuaW1wb3J0IHhvciBmcm9tICcuL3hvcic7XG5leHBvcnQgeyBhbmQsIG5hbmQsIG5vciwgbm90LCBvciwgcmVkdWNlQW5kLCByZWR1Y2VOYW5kLCByZWR1Y2VOb3IsIHJlZHVjZU9yLCByZWR1Y2VYbm9yLCByZWR1Y2VYb3IsIHRvQm9vbGVhbiwgdG9TdHJpbmcsIHhub3IsIHhvciwgfTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBhbmQ6IGFuZCxcbiAgICBuYW5kOiBuYW5kLFxuICAgIG5vcjogbm9yLFxuICAgIG5vdDogbm90LFxuICAgIG9yOiBvcixcbiAgICByZWR1Y2VBbmQ6IHJlZHVjZUFuZCxcbiAgICByZWR1Y2VOYW5kOiByZWR1Y2VOYW5kLFxuICAgIHJlZHVjZU5vcjogcmVkdWNlTm9yLFxuICAgIHJlZHVjZU9yOiByZWR1Y2VPcixcbiAgICByZWR1Y2VYbm9yOiByZWR1Y2VYbm9yLFxuICAgIHJlZHVjZVhvcjogcmVkdWNlWG9yLFxuICAgIHRvQm9vbGVhbjogdG9Cb29sZWFuLFxuICAgIHRvU3RyaW5nOiB0b1N0cmluZyxcbiAgICB4bm9yOiB4bm9yLFxuICAgIHhvcjogeG9yLFxufTtcbiIsIi8qKlxuICogQXBwbGllcyB0aGUgTkFORCBvcGVyYXRpb24sIGV4cGVjdHMgdHdvIGFycmF5cyBvZiB0aGUgc2FtZSBzaXplIGFuZCByZXR1cm5zIGEgbmV3IG9uZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogbmFuZChbMSwwLDAsMCwxLDEsMCwxXSwgWzAsMSwxLDAsMCwxLDAsMF0pID0+IFsxLDEsMSwxLDEsMCwxLDFdXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYml0czEgaW5wdXQgZGF0YVxuICogQHBhcmFtIHtBcnJheX0gYml0czIgaW5wdXQgZGF0YVxuICogQHJldHVybiB7QXJyYXl9IFtiaXRzMSBOQU5EIGJpdHMyXVxuICovXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gKGJpdHMxLCBiaXRzMikge1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJpdHMxLmxlbmd0aDsgaSsrKVxuICAgICAgICByZXN1bHRbaV0gPSAoKGJpdHMxW2ldICYgYml0czJbaV0pIF4gMSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn0pO1xuIiwiLyoqXG4gKiBBcHBsaWVzIHRoZSBOT1Igb3BlcmF0aW9uLCBleHBlY3RzIHR3byBhcnJheXMgb2YgdGhlIHNhbWUgc2l6ZSBhbmQgcmV0dXJucyBhIG5ldyBvbmUuXG4gKlxuICogQGV4YW1wbGVcbiAqIG5vcihbMSwwLDAsMCwxLDEsMCwxXSwgWzAsMSwxLDAsMCwxLDAsMF0pID0+IFswLDAsMCwxLDAsMCwxLDBdXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYml0czEgaW5wdXQgZGF0YVxuICogQHBhcmFtIHtBcnJheX0gYml0czIgaW5wdXQgZGF0YVxuICogQHJldHVybiB7QXJyYXl9IFtiaXRzMSBOT1IgYml0czJdXG4gKi9cbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiAoYml0czEsIGJpdHMyKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYml0czEubGVuZ3RoOyBpKyspXG4gICAgICAgIHJlc3VsdFtpXSA9ICgoYml0czFbaV0gfCBiaXRzMltpXSkgXiAxKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufSk7XG4iLCIvKipcbiAqIEZsaXBzIGFsbCBnaXZlbiBiaXRzIGFuZCByZXR1cm5zIHRoZSBmbGlwcGVkIGJpdHMuXG4gKlxuICogQGV4YW1wbGVcbiAqIG5vdChbMSwwLDEsMSwwLDFdKSA9PiBbMCwxLDAsMCwxLDBdXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYml0cyBpbnB1dCBkYXRhXG4gKiBAcmV0dXJuIHtBcnJheX0gW05PVCBiaXRzXVxuICovXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gKGJpdHMpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBiaXRzLmxlbmd0aDsgaSsrKVxuICAgICAgICByZXN1bHRbaV0gPSAoYml0c1tpXSBeIDEpO1xuICAgIHJldHVybiByZXN1bHQ7XG59KTtcbiIsIi8qKlxuICogQXBwbGllcyB0aGUgT1Igb3BlcmF0aW9uLCBleHBlY3RzIHR3byBhcnJheXMgb2YgdGhlIHNhbWUgc2l6ZSBhbmQgcmV0dXJucyBhIG5ldyBvbmUuXG4gKlxuICogQGV4YW1wbGVcbiAqIG9yKFsxLDAsMCwwLDEsMSwwLDFdLCBbMCwxLDEsMCwwLDEsMCwwXSkgPT4gWzEsMSwxLDAsMSwxLDAsMV1cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBiaXRzMSBpbnB1dCBkYXRhXG4gKiBAcGFyYW0ge0FycmF5fSBiaXRzMiBpbnB1dCBkYXRhXG4gKiBAcmV0dXJuIHtBcnJheX0gW2JpdHMxIE9SIGJpdHMyXVxuICovXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gKGJpdHMxLCBiaXRzMikge1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJpdHMxLmxlbmd0aDsgaSsrKVxuICAgICAgICByZXN1bHRbaV0gPSAoYml0czFbaV0gfCBiaXRzMltpXSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn0pO1xuIiwiLyoqXG4gKiBBcHBsaWVzIHRoZSBBTkQgb3BlcmF0aW9uIG9uIHRoZSBnaXZlbiBiaXRzLiBSZXR1cm5zIG9uZSBiaXQuXG4gKiBUaHJvd3MgaWYgbGVzcyB0aGFuIDIgYml0cyBhcmUgZ2l2ZW4uXG4gKlxuICogQGV4YW1wbGVcbiAqIHJlZHVjZUFuZChbMSwgMCwgMCwgMCwgMSwgMSwgMCwgMV0pID0+IDBcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBiaXRzIGlucHV0IGRhdGFcbiAqIEByZXR1cm4ge0ludGVnZXJ9IEFORCBiaXRzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiAoYml0cykge1xuICAgIGlmIChiaXRzLmxlbmd0aCA8IDIpXG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdOb3QgZW5vdWdoIGJpdHMuJyk7XG4gICAgdmFyIHJlc3VsdCA9IGJpdHNbMF07XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBiaXRzLmxlbmd0aDsgaSsrKVxuICAgICAgICByZXN1bHQgJj0gYml0c1tpXTtcbiAgICByZXR1cm4gcmVzdWx0O1xufSk7XG4iLCIvKipcbiAqIEFwcGxpZXMgdGhlIE5BTkQgb3BlcmF0aW9uIG9uIHRoZSBnaXZlbiBiaXRzLiBSZXR1cm5zIG9uZSBiaXQuXG4gKiBUaHJvd3MgaWYgbGVzcyB0aGFuIDIgYml0cyBhcmUgZ2l2ZW4uXG4gKlxuICogQGV4YW1wbGVcbiAqIHJlZHVjZU5hbmQoWzEsIDAsIDAsIDAsIDEsIDEsIDAsIDFdKSA9PiAwXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYml0cyBpbnB1dCBkYXRhXG4gKiBAcmV0dXJuIHtJbnRlZ2VyfSBOQU5EIGJpdHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIChiaXRzKSB7XG4gICAgaWYgKGJpdHMubGVuZ3RoIDwgMilcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ05vdCBlbm91Z2ggYml0cy4nKTtcbiAgICB2YXIgcmVzdWx0ID0gYml0c1swXTtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGJpdHMubGVuZ3RoOyBpKyspXG4gICAgICAgIHJlc3VsdCA9ICgocmVzdWx0ICYgYml0c1tpXSkgXiAxKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufSk7XG4iLCIvKipcbiAqIEFwcGxpZXMgdGhlIE5PUiBvcGVyYXRpb24gb24gdGhlIGdpdmVuIGJpdHMuIFJldHVybnMgb25lIGJpdC5cbiAqIFRocm93cyBpZiBsZXNzIHRoYW4gMiBiaXRzIGFyZSBnaXZlbi5cbiAqXG4gKiBAZXhhbXBsZVxuICogcmVkdWNlTm9yKFsxLCAwLCAwLCAwLCAxLCAxLCAwLCAxXSkgPT4gMFxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGJpdHMgaW5wdXQgZGF0YVxuICogQHJldHVybiB7SW50ZWdlcn0gTk9SIGJpdHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIChiaXRzKSB7XG4gICAgaWYgKGJpdHMubGVuZ3RoIDwgMilcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ05vdCBlbm91Z2ggYml0cy4nKTtcbiAgICB2YXIgcmVzdWx0ID0gYml0c1swXTtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGJpdHMubGVuZ3RoOyBpKyspXG4gICAgICAgIHJlc3VsdCA9ICgocmVzdWx0IHwgYml0c1tpXSkgXiAxKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufSk7XG4iLCIvKipcbiAqIEFwcGxpZXMgdGhlIE9SIG9wZXJhdGlvbiBvbiB0aGUgZ2l2ZW4gYml0cy4gUmV0dXJucyBvbmUgYml0LlxuICogVGhyb3dzIGlmIGxlc3MgdGhhbiAyIGJpdHMgYXJlIGdpdmVuLlxuICpcbiAqIEBleGFtcGxlXG4gKiByZWR1Y2VPcihbMSwgMCwgMCwgMCwgMSwgMSwgMCwgMV0pID0+IDFcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBiaXRzIGlucHV0IGRhdGFcbiAqIEByZXR1cm4ge0ludGVnZXJ9IE9SIGJpdHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIChiaXRzKSB7XG4gICAgaWYgKGJpdHMubGVuZ3RoIDwgMilcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ05vdCBlbm91Z2ggYml0cy4nKTtcbiAgICB2YXIgcmVzdWx0ID0gYml0c1swXTtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGJpdHMubGVuZ3RoOyBpKyspXG4gICAgICAgIHJlc3VsdCB8PSBiaXRzW2ldO1xuICAgIHJldHVybiByZXN1bHQ7XG59KTtcbiIsIi8qKlxuICogQXBwbGllcyB0aGUgWE5PUiBvcGVyYXRpb24gb24gdGhlIGdpdmVuIGJpdHMuIFJldHVybnMgb25lIGJpdC5cbiAqIFRocm93cyBpZiBsZXNzIHRoYW4gMiBiaXRzIGFyZSBnaXZlbi5cbiAqXG4gKiBAZXhhbXBsZVxuICogcmVkdWNlWG5vcihbMSwgMCwgMCwgMCwgMSwgMSwgMCwgMV0pID0+IDFcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBiaXRzIGlucHV0IGRhdGFcbiAqIEByZXR1cm4ge0ludGVnZXJ9IFhOT1IgYml0c1xuICovXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gKGJpdHMpIHtcbiAgICBpZiAoYml0cy5sZW5ndGggPCAyKVxuICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignTm90IGVub3VnaCBiaXRzLicpO1xuICAgIHZhciByZXN1bHQgPSBiaXRzWzBdO1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYml0cy5sZW5ndGg7IGkrKylcbiAgICAgICAgcmVzdWx0IF49IGJpdHNbaV0gXiAxO1xuICAgIHJldHVybiByZXN1bHQ7XG59KTtcbiIsIi8qKlxuICogQXBwbGllcyB0aGUgWE9SIG9wZXJhdGlvbiBvbiB0aGUgZ2l2ZW4gYml0cy4gUmV0dXJucyBvbmUgYml0LlxuICogVGhyb3dzIGlmIGxlc3MgdGhhbiAyIGJpdHMgYXJlIGdpdmVuLlxuICpcbiAqIEBleGFtcGxlXG4gKiByZWR1Y2VYb3IoWzEsIDAsIDAsIDAsIDEsIDEsIDAsIDFdKSA9PiAwXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYml0cyBpbnB1dCBkYXRhXG4gKiBAcmV0dXJuIHtJbnRlZ2VyfSBYT1IgYml0c1xuICovXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gKGJpdHMpIHtcbiAgICBpZiAoYml0cy5sZW5ndGggPCAyKVxuICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignTm90IGVub3VnaCBiaXRzLicpO1xuICAgIHZhciByZXN1bHQgPSBiaXRzWzBdO1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYml0cy5sZW5ndGg7IGkrKylcbiAgICAgICAgcmVzdWx0IF49IGJpdHNbaV07XG4gICAgcmV0dXJuIHJlc3VsdDtcbn0pO1xuIiwiLyoqXG4gKiBDb252ZXJ0cyBhIGJpdCBhcnJheSB0byBhIGJvb2xlYW4gYXJyYXkuXG4gKlxuICogQGV4YW1wbGUgdG9Cb29sZWFuKFswLCAxXSkgPT4gW2ZhbHNlLCB0cnVlXVxuICogQHBhcmFtIHtBcnJheX0gYml0cyBpbnB1dCBkYXRhXG4gKiBAcmV0dXJucyB7QXJyYXl9IGJvb2xlYW4gYml0c1xuICovXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gKGJpdHMpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBiaXRzLmxlbmd0aDsgaSsrKVxuICAgICAgICByZXN1bHRbaV0gPSBiaXRzW2ldID09PSAxO1xuICAgIHJldHVybiByZXN1bHQ7XG59KTtcbiIsIi8qKlxuICogQ29udmVydHMgYSBiaXQgYXJyYXkgdG8gYSBzdHJpbmcuIElmIGRlZmluZWQsIGluc2VydHMgc3BhY2VyIGV2ZXJ5IHNwYWNpbmcgY2hhcmFjdGVycywgYnV0IG5ldmVyIGluc2VydHMgaXQgYXMgdGhlIGxhc3Qgc3Vic3RyaW5nLlxuICpcbiAqIEBleGFtcGxlXG4gKiB0b1N0cmluZyhbMSwwLDEsMCwxLDBdLCAyLCAnXycpID0+ICcxMF8xMF8xMCdcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBiaXRzIHRoZSBiaXRzIHRvIGNvbnZlcnRcbiAqIEBwYXJhbSB7TnVtYmVyfSBzcGFjaW5nIHdoZXJlIHRvIHBsYWNlIHRoZSBzcGFjZXJzXG4gKiBAcGFyYW0ge051bWJlcn0gc3BhY2VyIHRoZSBzdHJpbmcgdXNlZCBhcyBhIHNwYWNlclxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gKGJpdHMsIHNwYWNpbmcsIHNwYWNlcikge1xuICAgIGlmIChzcGFjaW5nID09PSB2b2lkIDApIHsgc3BhY2luZyA9IDA7IH1cbiAgICBpZiAoc3BhY2VyID09PSB2b2lkIDApIHsgc3BhY2VyID0gJyAnOyB9XG4gICAgaWYgKCFzcGFjaW5nKVxuICAgICAgICByZXR1cm4gYml0cy5qb2luKCcnKTtcbiAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBiaXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdCArPSBcIlwiICsgYml0c1tpXTtcbiAgICAgICAgaWYgKGkgJSBzcGFjaW5nID09PSBzcGFjaW5nIC0gMSAmJiBpICE9PSBiaXRzLmxlbmd0aCAtIDEpXG4gICAgICAgICAgICByZXN1bHQgKz0gc3BhY2VyO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufSk7XG4iLCIvKipcbiAqIEFwcGxpZXMgdGhlIGV4Y2x1c2l2ZSBOT1Igb3BlcmF0aW9uLCBleHBlY3RzIHR3byBhcnJheXMgb2YgdGhlIHNhbWUgc2l6ZSBhbmQgcmV0dXJucyBhIG5ldyBvbmUuXG4gKlxuICogQGV4YW1wbGVcbiAqIHhub3IoWzEsMCwwLDAsMSwxLDAsMV0sIFswLDEsMSwwLDAsMSwwLDBdKSA9PiBbMCwwLDAsMSwwLDEsMSwwXVxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGJpdHMxIGlucHV0IGRhdGFcbiAqIEBwYXJhbSB7QXJyYXl9IGJpdHMyIGlucHV0IGRhdGFcbiAqIEByZXR1cm4ge0FycmF5fSBbYml0czEgWE5PUiBiaXRzMl1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIChiaXRzMSwgYml0czIpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBiaXRzMS5sZW5ndGg7IGkrKylcbiAgICAgICAgcmVzdWx0W2ldID0gKGJpdHMxW2ldIF4gYml0czJbaV0gXiAxKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufSk7XG4iLCIvKipcbiAqIEFwcGxpZXMgdGhlIGV4Y2x1c2l2ZSBvciBvcGVyYXRpb24sIGV4cGVjdHMgdHdvIGFycmF5cyBvZiB0aGUgc2FtZSBzaXplIGFuZCByZXR1cm5zIGEgbmV3IG9uZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogeG9yKFsxLDAsMCwwLDEsMSwwLDFdLCBbMCwxLDEsMCwwLDEsMCwwXSkgPT4gWzEsMSwxLDAsMSwwLDAsMV1cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBiaXRzMSBpbnB1dCBkYXRhXG4gKiBAcGFyYW0ge0FycmF5fSBiaXRzMiBpbnB1dCBkYXRhXG4gKiBAcmV0dXJuIHtBcnJheX0gW2JpdHMxIFhPUiBiaXRzMl1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIChiaXRzMSwgYml0czIpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBiaXRzMS5sZW5ndGg7IGkrKylcbiAgICAgICAgcmVzdWx0W2ldID0gKGJpdHMxW2ldIF4gYml0czJbaV0pO1xuICAgIHJldHVybiByZXN1bHQ7XG59KTtcbiIsIi8qKlxuICogQXBwbGllcyBhIGJpdHdpc2UgQU5EIHRvIHRoZSBjb250ZW50cyBvZiB0d28gYnVmZmVycy4gUmV0dXJucyBhIG5ldyBidWZmZXIuXG4gKlxuICogQGV4YW1wbGVcbiAqIGJpdHdpc2UuYnVmZmVyLmFuZChhLCBiLCBmYWxzZSkgPT4gQnVmZmVyKGEgQU5EIGIpXG4gKlxuICogQHBhcmFtIHtCdWZmZXJ9IGEgZmlyc3QgYnVmZmVyXG4gKiBAcGFyYW0ge0J1ZmZlcn0gYiBzZWNvbmQgYnVmZmVyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGlzTG9vcGluZyBsb29wIHRocm91Z2ggZmlyc3QgYnVmZmVyXG4gKiBAcmV0dXJuIHtCdWZmZXJ9IGEgQU5EIGJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIChhLCBiLCBpc0xvb3BpbmcpIHtcbiAgICBpZiAoaXNMb29waW5nID09PSB2b2lkIDApIHsgaXNMb29waW5nID0gZmFsc2U7IH1cbiAgICB2YXIgbGVuZ3RoID0gaXNMb29waW5nID8gYi5sZW5ndGggOiBhLmxlbmd0aDtcbiAgICB2YXIgcmVzdWx0ID0gQnVmZmVyLmFsbG9jKGxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgaiA9IGlzTG9vcGluZyA/IGkgJSBhLmxlbmd0aCA6IGk7XG4gICAgICAgIHJlc3VsdFtpXSA9IGFbal0gJiBiW2ldO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufSk7XG4iLCJpbXBvcnQgd3JpdGVCeXRlIGZyb20gJy4uL2J5dGUvd3JpdGUnO1xuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGJ1ZmZlciBhbmQgd3JpdGVzIHRoZSBnaXZlbiBiaXRzLlxuICpcbiAqIEBleGFtcGxlXG4gKiBjcmVhdGVCdWZmZXIoWzEsMSwxLDEsIDAsMCwwLDEsIDEsMCwxLDBdKSA9PiBidWZmZXIgd2l0aCBkYXRhIDExMTEgMDAwMSAxMDEwIDAwMDBcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBiaXRzIGFuIGFycmF5IGNvbnRhaW5pbmcgdGhlIGJpdHMgdG8gaW5zZXJ0XG4gKiBAcmV0dXJucyB7QnVmZmVyfVxuICovXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gKGJpdHMpIHtcbiAgICB2YXIgZGF0YSA9IFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwXTtcbiAgICB2YXIgYnVmZmVyID0gQnVmZmVyLmFsbG9jKE1hdGguY2VpbChiaXRzLmxlbmd0aCAvIDgpKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJ1ZmZlci5sZW5ndGg7IGkrKykge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IDg7IGorKykge1xuICAgICAgICAgICAgaWYgKGJpdHNbaSAqIDggKyBqXSlcbiAgICAgICAgICAgICAgICBkYXRhW2pdID0gYml0c1tpICogOCArIGpdO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGRhdGFbal0gPSAwO1xuICAgICAgICB9XG4gICAgICAgIGJ1ZmZlcltpXSA9IHdyaXRlQnl0ZShkYXRhKTtcbiAgICB9XG4gICAgcmV0dXJuIGJ1ZmZlcjtcbn0pO1xuIiwiaW1wb3J0IGFuZCBmcm9tICcuL2FuZCc7XG5pbXBvcnQgY3JlYXRlIGZyb20gJy4vY3JlYXRlJztcbmltcG9ydCBtb2RpZnkgZnJvbSAnLi9tb2RpZnknO1xuaW1wb3J0IG5hbmQgZnJvbSAnLi9uYW5kJztcbmltcG9ydCBub3IgZnJvbSAnLi9ub3InO1xuaW1wb3J0IG5vdCBmcm9tICcuL25vdCc7XG5pbXBvcnQgb3IgZnJvbSAnLi9vcic7XG5pbXBvcnQgcmVhZCBmcm9tICcuL3JlYWQnO1xuaW1wb3J0IHJlYWRJbnQgZnJvbSAnLi9yZWFkLWludCc7XG5pbXBvcnQgcmVhZFVJbnQgZnJvbSAnLi9yZWFkLXUtaW50JztcbmltcG9ydCB4bm9yIGZyb20gJy4veG5vcic7XG5pbXBvcnQgeG9yIGZyb20gJy4veG9yJztcbmV4cG9ydCB7IGFuZCwgY3JlYXRlLCBtb2RpZnksIG5hbmQsIG5vciwgbm90LCBvciwgcmVhZCwgcmVhZEludCwgcmVhZFVJbnQsIHhub3IsIHhvciwgfTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBhbmQ6IGFuZCxcbiAgICBjcmVhdGU6IGNyZWF0ZSxcbiAgICBtb2RpZnk6IG1vZGlmeSxcbiAgICBuYW5kOiBuYW5kLFxuICAgIG5vcjogbm9yLFxuICAgIG5vdDogbm90LFxuICAgIG9yOiBvcixcbiAgICByZWFkOiByZWFkLFxuICAgIHJlYWRJbnQ6IHJlYWRJbnQsXG4gICAgcmVhZFVJbnQ6IHJlYWRVSW50LFxuICAgIHhub3I6IHhub3IsXG4gICAgeG9yOiB4b3IsXG59O1xuIiwiaW1wb3J0IHdyaXRlQnl0ZSBmcm9tICcuLi9ieXRlL3dyaXRlJztcbmltcG9ydCByZWFkQnVmZmVyIGZyb20gJy4vcmVhZCc7XG4vKipcbiAqIE1vZGlmaWVzIHRoZSBidWZmZXIncyBiaXRzIHRvIGVxdWFsIG5ld0JpdHMgc3RhcnRpbmcgYXQgYml0T2Zmc2V0LlxuICpcbiAqIEBleGFtcGxlXG4gKiBtb2RpZnlCdWZmZXIoYnVmZmVyLCBbMCwwLDEsMF0sIDApID0+IGJ1ZmZlciB3YXMgbW9kaWZpZWRcbiAqXG4gKiBAcGFyYW0ge0J1ZmZlcn0gYnVmZmVyIHRoZSBidWZmZXIgdG8gbW9kaWZ5XG4gKiBAcGFyYW0ge0FycmF5fSBiaXRzIHRoZSBiaXRzIHRvIGluc2VydFxuICogQHBhcmFtIHtOdW1iZXJ9IG9mZnNldCB3aGVyZSB0byBzdGFydCAoaW4gYml0cylcbiAqIEByZXR1cm5zIHt1bmRlZmluZWR9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiAoYnVmZmVyLCBiaXRzLCBvZmZzZXQpIHtcbiAgICBpZiAob2Zmc2V0ID09PSB2b2lkIDApIHsgb2Zmc2V0ID0gMDsgfVxuICAgIHZhciBzdGFydCA9IE1hdGguZmxvb3Iob2Zmc2V0IC8gOCk7XG4gICAgdmFyIGVuZCA9IE1hdGguY2VpbCgob2Zmc2V0ICsgYml0cy5sZW5ndGgpIC8gOCk7XG4gICAgdmFyIHN1YkJ1ZmZlciA9IGJ1ZmZlci5zbGljZShzdGFydCwgZW5kKTtcbiAgICB2YXIgYnl0ZURhdGEgPSByZWFkQnVmZmVyKHN1YkJ1ZmZlcik7XG4gICAgdmFyIHN1Yk9mZnNldCA9IG9mZnNldCAlIDg7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBiaXRzLmxlbmd0aDsgaSsrKVxuICAgICAgICBieXRlRGF0YVtzdWJPZmZzZXQrK10gPSBiaXRzW2ldO1xuICAgIHZhciBsZW5ndGggPSBlbmQgLSBzdGFydDtcbiAgICBmb3IgKHZhciBpXzEgPSAwOyBpXzEgPCBsZW5ndGg7IGlfMSsrKVxuICAgICAgICBzdWJCdWZmZXJbaV8xXSA9IHdyaXRlQnl0ZShieXRlRGF0YS5zbGljZShpXzEgKiA4LCAoaV8xICsgMSkgKiA4KSk7XG59KTtcbiIsIi8qKlxuICogQXBwbGllcyBhIGJpdHdpc2UgTkFORCB0byB0aGUgY29udGVudHMgb2YgdHdvIGJ1ZmZlcnMuIFJldHVybnMgYSBuZXcgYnVmZmVyLlxuICpcbiAqIEBleGFtcGxlXG4gKiBiaXR3aXNlLmJ1ZmZlci5uYW5kKGEsIGIsIGZhbHNlKSA9PiBCdWZmZXIoYSBOQU5EIGIpXG4gKlxuICogQHBhcmFtIHtCdWZmZXJ9IGEgZmlyc3QgYnVmZmVyXG4gKiBAcGFyYW0ge0J1ZmZlcn0gYiBzZWNvbmQgYnVmZmVyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGlzTG9vcGluZyBsb29wIHRocm91Z2ggZmlyc3QgYnVmZmVyXG4gKiBAcmV0dXJuIHtCdWZmZXJ9IGEgTkFORCBiXG4gKi9cbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiAoYSwgYiwgaXNMb29waW5nKSB7XG4gICAgaWYgKGlzTG9vcGluZyA9PT0gdm9pZCAwKSB7IGlzTG9vcGluZyA9IGZhbHNlOyB9XG4gICAgdmFyIGxlbmd0aCA9IGlzTG9vcGluZyA/IGIubGVuZ3RoIDogYS5sZW5ndGg7XG4gICAgdmFyIHJlc3VsdCA9IEJ1ZmZlci5hbGxvYyhsZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGogPSBpc0xvb3BpbmcgPyBpICUgYS5sZW5ndGggOiBpO1xuICAgICAgICByZXN1bHRbaV0gPSB+KGFbal0gJiBiW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn0pO1xuIiwiLyoqXG4gKiBBcHBsaWVzIGEgYml0d2lzZSBOT1IgdG8gdGhlIGNvbnRlbnRzIG9mIHR3byBidWZmZXJzLiBSZXR1cm5zIGEgbmV3IGJ1ZmZlci5cbiAqXG4gKiBAZXhhbXBsZVxuICogYml0d2lzZS5idWZmZXIubm9yKGEsIGIsIGZhbHNlKSA9PiBCdWZmZXIoYSBOT1IgYilcbiAqXG4gKiBAcGFyYW0ge0J1ZmZlcn0gYSBmaXJzdCBidWZmZXJcbiAqIEBwYXJhbSB7QnVmZmVyfSBiIHNlY29uZCBidWZmZXJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gaXNMb29waW5nIGxvb3AgdGhyb3VnaCBmaXJzdCBidWZmZXJcbiAqIEByZXR1cm4ge0J1ZmZlcn0gYSBOT1IgYlxuICovXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gKGEsIGIsIGlzTG9vcGluZykge1xuICAgIGlmIChpc0xvb3BpbmcgPT09IHZvaWQgMCkgeyBpc0xvb3BpbmcgPSBmYWxzZTsgfVxuICAgIHZhciBsZW5ndGggPSBpc0xvb3BpbmcgPyBiLmxlbmd0aCA6IGEubGVuZ3RoO1xuICAgIHZhciByZXN1bHQgPSBCdWZmZXIuYWxsb2MobGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBqID0gaXNMb29waW5nID8gaSAlIGEubGVuZ3RoIDogaTtcbiAgICAgICAgcmVzdWx0W2ldID0gfihhW2pdIHwgYltpXSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59KTtcbiIsIi8qKlxuICogQXBwbGllcyBhIGJpdHdpc2UgTk9UIHRvIHRoZSBjb250ZW50cyBvZiBhIGJ1ZmZlci4gUmV0dXJucyBhIG5ldyBidWZmZXIuXG4gKlxuICogQGV4YW1wbGVcbiAqIGJpdHdpc2UuYnVmZmVyLm5vdChidWZmZXIpID0+IEJ1ZmZlcihOT1QgYnVmZmVyKVxuICpcbiAqIEBwYXJhbSB7QnVmZmVyfSBidWZmZXIgaW5wdXQgZGF0YVxuICogQHJldHVybiB7QnVmZmVyfSBCdWZmZXIoTk9UIGJ1ZmZlcilcbiAqL1xuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIChidWZmZXIpIHtcbiAgICB2YXIgcmVzdWx0ID0gQnVmZmVyLmFsbG9jKGJ1ZmZlci5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYnVmZmVyLmxlbmd0aDsgaSsrKVxuICAgICAgICByZXN1bHRbaV0gPSB+YnVmZmVyW2ldO1xuICAgIHJldHVybiByZXN1bHQ7XG59KTtcbiIsIi8qKlxuICogQXBwbGllcyBhIGJpdHdpc2UgT1IgdG8gdGhlIGNvbnRlbnRzIG9mIHR3byBidWZmZXJzLiBSZXR1cm5zIGEgbmV3IGJ1ZmZlci5cbiAqXG4gKiBAZXhhbXBsZVxuICogYml0d2lzZS5idWZmZXIub3IoYSwgYiwgZmFsc2UpID0+IEJ1ZmZlcihhIE9SIGIpXG4gKlxuICogQHBhcmFtIHtCdWZmZXJ9IGEgZmlyc3QgYnVmZmVyXG4gKiBAcGFyYW0ge0J1ZmZlcn0gYiBzZWNvbmQgYnVmZmVyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGlzTG9vcGluZyBsb29wIHRocm91Z2ggZmlyc3QgYnVmZmVyXG4gKiBAcmV0dXJuIHtCdWZmZXJ9IGEgT1IgYlxuICovXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gKGEsIGIsIGlzTG9vcGluZykge1xuICAgIGlmIChpc0xvb3BpbmcgPT09IHZvaWQgMCkgeyBpc0xvb3BpbmcgPSBmYWxzZTsgfVxuICAgIHZhciBsZW5ndGggPSBpc0xvb3BpbmcgPyBiLmxlbmd0aCA6IGEubGVuZ3RoO1xuICAgIHZhciByZXN1bHQgPSBCdWZmZXIuYWxsb2MobGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBqID0gaXNMb29waW5nID8gaSAlIGEubGVuZ3RoIDogaTtcbiAgICAgICAgcmVzdWx0W2ldID0gYVtqXSB8IGJbaV07XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59KTtcbiIsImltcG9ydCB7IHAyIH0gZnJvbSAnLi4vdXRpbGl0aWVzJztcbmltcG9ydCBub3QgZnJvbSAnLi4vYml0cy9ub3QnO1xuaW1wb3J0IHJlYWQgZnJvbSAnLi9yZWFkJztcbi8qKlxuICogQ29udmVydHMgYSBzZWN0aW9uIG9mIGEgYnVmZmVyIHRvIGEgc2lnbmVkIGludGVnZXIuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIGJ1ZmZlciAxMTExMDExMFxuICogcmVhZFVJbnQoYnVmZmVyLCAzLCA1KSA9PiAtMTBcbiAqXG4gKiBAcGFyYW0ge0J1ZmZlcn0gYnVmZmVyIHRoZSBidWZmZXIgdG8gZXh0cmFjdCBpbmZvcm1hdGlvbiBmcm9tXG4gKiBAcGFyYW0ge051bWJlcn0gbGVuZ3RoIHRoZSBsZW5ndGggb2YgdGhlIHNpZ25lZCBpbnRlZ2VyIChpbiBiaXRzKVxuICogQHBhcmFtIHtOdW1iZXJ9IG9mZnNldCB3aGVyZSB0byBzdGFydCAoaW4gYml0cylcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIChidWZmZXIsIG9mZnNldCwgbGVuZ3RoKSB7XG4gICAgaWYgKG9mZnNldCA9PT0gdm9pZCAwKSB7IG9mZnNldCA9IDA7IH1cbiAgICBpZiAobGVuZ3RoID09PSB2b2lkIDApIHsgbGVuZ3RoID0gODsgfVxuICAgIHZhciBiaXRzID0gcmVhZChidWZmZXIsIG9mZnNldCwgbGVuZ3RoKTtcbiAgICBpZiAoYml0c1swXSA9PT0gMCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gMDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKylcbiAgICAgICAgICAgIGlmIChiaXRzW2ldKVxuICAgICAgICAgICAgICAgIHJlc3VsdCArPSBwMltsZW5ndGggLSBpIC0gMV07XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gLTE7XG4gICAgICAgIHZhciBpbnZlcnRlZCA9IG5vdChiaXRzKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKylcbiAgICAgICAgICAgIGlmIChpbnZlcnRlZFtpXSlcbiAgICAgICAgICAgICAgICByZXN1bHQgLT0gcDJbbGVuZ3RoIC0gaSAtIDFdO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn0pO1xuIiwiaW1wb3J0IHsgcDIgfSBmcm9tICcuLi91dGlsaXRpZXMnO1xuaW1wb3J0IHJlYWQgZnJvbSAnLi9yZWFkJztcbi8qKlxuICogQ29udmVydHMgYSBzZWN0aW9uIG9mIGEgYnVmZmVyIHRvIGFuIHVuc2lnbmVkIGludGVnZXIuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIGJ1ZmZlciAxMTExMDExMFxuICogcmVhZFVJbnQoYnVmZmVyLCAzLCA1KSA9PiAyMlxuICpcbiAqIEBwYXJhbSB7QnVmZmVyfSBidWZmZXIgdGhlIGJ1ZmZlciB0byBleHRyYWN0IGluZm9ybWF0aW9uIGZyb21cbiAqIEBwYXJhbSB7TnVtYmVyfSBsZW5ndGggdGhlIGxlbmd0aCBvZiB0aGUgdW5zaWduZWQgaW50ZWdlciAoaW4gYml0cylcbiAqIEBwYXJhbSB7TnVtYmVyfSBvZmZzZXQgd2hlcmUgdG8gc3RhcnQgKGluIGJpdHMpXG4gKiBAcmV0dXJucyB7TnVtYmVyfVxuICovXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gKGJ1ZmZlciwgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgICBpZiAob2Zmc2V0ID09PSB2b2lkIDApIHsgb2Zmc2V0ID0gMDsgfVxuICAgIGlmIChsZW5ndGggPT09IHZvaWQgMCkgeyBsZW5ndGggPSA4OyB9XG4gICAgdmFyIGFyciA9IHJlYWQoYnVmZmVyLCBvZmZzZXQsIGxlbmd0aCk7XG4gICAgdmFyIHJlc3VsdCA9IDA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKylcbiAgICAgICAgcmVzdWx0ICs9IGFycltpXSAqIHAyW2xlbmd0aCAtIGkgLSAxXTtcbiAgICByZXR1cm4gcmVzdWx0O1xufSk7XG4iLCJpbXBvcnQgcmVhZEJ5dGUgZnJvbSAnLi4vYnl0ZS9yZWFkJztcbi8qKlxuICogUmV0dXJucyBhbiBBcnJheSBjb250YWluaW5nIGJpdExlbmd0aCBiaXRzIHN0YXJ0aW5nIGF0IGJpdE9mZnNldC5cbiAqXG4gKiBAZXhhbXBsZVxuICogcmVhZEJ1ZmZlcihidWZmZXIsIDIsIDQpID0+IFswLDAsMSwwXVxuICpcbiAqIEBwYXJhbSB7QnVmZmVyfSBidWZmZXIgdGhlIGJ1ZmZlciB0byByZWFkXG4gKiBAcGFyYW0ge051bWJlcn0gb2Zmc2V0IHdoZXJlIHRvIHN0YXJ0IChpbiBiaXRzKVxuICogQHBhcmFtIHtOdW1iZXJ9IGxlbmd0aCBob3cgbWFueSBiaXRzIHRvIHJlYWRcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIChidWZmZXIsIG9mZnNldCwgbGVuZ3RoKSB7XG4gICAgaWYgKG9mZnNldCA9PT0gdm9pZCAwKSB7IG9mZnNldCA9IDA7IH1cbiAgICBpZiAoIWxlbmd0aClcbiAgICAgICAgbGVuZ3RoID0gYnVmZmVyLmxlbmd0aCAqIDggLSBvZmZzZXQ7XG4gICAgdmFyIHN0YXJ0ID0gTWF0aC5mbG9vcihvZmZzZXQgLyA4KTtcbiAgICB2YXIgYnl0ZXNUb1JlYWQgPSBNYXRoLmZsb29yKGxlbmd0aCAvIDgpICsgMjtcbiAgICB2YXIgYXJyID0gW107XG4gICAgYXJyLmxlbmd0aCA9IGJ5dGVzVG9SZWFkICogODtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJ5dGVzVG9SZWFkOyBpKyspIHtcbiAgICAgICAgdmFyIHRvUmVhZCA9IGJ1ZmZlcltzdGFydCArIGldO1xuICAgICAgICBpZiAodG9SZWFkID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgdmFyIGJpdHMgPSByZWFkQnl0ZShidWZmZXJbc3RhcnQgKyBpXSk7XG4gICAgICAgIGFycltpICogOF0gPSBiaXRzWzBdO1xuICAgICAgICBhcnJbaSAqIDggKyAxXSA9IGJpdHNbMV07XG4gICAgICAgIGFycltpICogOCArIDJdID0gYml0c1syXTtcbiAgICAgICAgYXJyW2kgKiA4ICsgM10gPSBiaXRzWzNdO1xuICAgICAgICBhcnJbaSAqIDggKyA0XSA9IGJpdHNbNF07XG4gICAgICAgIGFycltpICogOCArIDVdID0gYml0c1s1XTtcbiAgICAgICAgYXJyW2kgKiA4ICsgNl0gPSBiaXRzWzZdO1xuICAgICAgICBhcnJbaSAqIDggKyA3XSA9IGJpdHNbN107XG4gICAgfVxuICAgIHZhciBzdWJPZmZzZXQgPSBvZmZzZXQgJSA4O1xuICAgIHJldHVybiBhcnIuc2xpY2Uoc3ViT2Zmc2V0LCBzdWJPZmZzZXQgKyBsZW5ndGgpO1xufSk7XG4iLCIvKipcbiAqIEFwcGxpZXMgYSBiaXR3aXNlIFhOT1IgdG8gdGhlIGNvbnRlbnRzIG9mIHR3byBidWZmZXJzLiBSZXR1cm5zIGEgbmV3IGJ1ZmZlci5cbiAqXG4gKiBAZXhhbXBsZVxuICogYml0d2lzZS5idWZmZXIueG5vcihhLCBiLCBmYWxzZSkgPT4gQnVmZmVyKGEgWE5PUiBiKVxuICpcbiAqIEBwYXJhbSB7QnVmZmVyfSBhIGZpcnN0IGJ1ZmZlclxuICogQHBhcmFtIHtCdWZmZXJ9IGIgc2Vjb25kIGJ1ZmZlclxuICogQHBhcmFtIHtCb29sZWFufSBpc0xvb3BpbmcgbG9vcCB0aHJvdWdoIGZpcnN0IGJ1ZmZlclxuICogQHJldHVybiB7QnVmZmVyfSBhIFhOT1IgYlxuICovXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gKGEsIGIsIGlzTG9vcGluZykge1xuICAgIGlmIChpc0xvb3BpbmcgPT09IHZvaWQgMCkgeyBpc0xvb3BpbmcgPSBmYWxzZTsgfVxuICAgIHZhciBsZW5ndGggPSBpc0xvb3BpbmcgPyBiLmxlbmd0aCA6IGEubGVuZ3RoO1xuICAgIHZhciByZXN1bHQgPSBCdWZmZXIuYWxsb2MobGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBqID0gaXNMb29waW5nID8gaSAlIGEubGVuZ3RoIDogaTtcbiAgICAgICAgcmVzdWx0W2ldID0gfihhW2pdIF4gYltpXSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59KTtcbiIsIi8qKlxuICogQXBwbGllcyBhIGJpdHdpc2UgWE9SIHRvIHRoZSBjb250ZW50cyBvZiB0d28gYnVmZmVycy4gUmV0dXJucyBhIG5ldyBidWZmZXIuXG4gKlxuICogQGV4YW1wbGVcbiAqIGJpdHdpc2UuYnVmZmVyLnhvcihhLCBiLCBmYWxzZSkgPT4gQnVmZmVyKGEgWE9SIGIpXG4gKlxuICogQHBhcmFtIHtCdWZmZXJ9IGEgZmlyc3QgYnVmZmVyXG4gKiBAcGFyYW0ge0J1ZmZlcn0gYiBzZWNvbmQgYnVmZmVyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGlzTG9vcGluZyBsb29wIHRocm91Z2ggZmlyc3QgYnVmZmVyXG4gKiBAcmV0dXJuIHtCdWZmZXJ9IGEgWE9SIGJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIChhLCBiLCBpc0xvb3BpbmcpIHtcbiAgICBpZiAoaXNMb29waW5nID09PSB2b2lkIDApIHsgaXNMb29waW5nID0gZmFsc2U7IH1cbiAgICB2YXIgbGVuZ3RoID0gaXNMb29waW5nID8gYi5sZW5ndGggOiBhLmxlbmd0aDtcbiAgICB2YXIgcmVzdWx0ID0gQnVmZmVyLmFsbG9jKGxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgaiA9IGlzTG9vcGluZyA/IGkgJSBhLmxlbmd0aCA6IGk7XG4gICAgICAgIHJlc3VsdFtpXSA9IGFbal0gXiBiW2ldO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufSk7XG4iLCJpbXBvcnQgcmVhZCBmcm9tICcuL3JlYWQnO1xuaW1wb3J0IHdyaXRlIGZyb20gJy4vd3JpdGUnO1xuZXhwb3J0IHsgcmVhZCwgd3JpdGUgfTtcbmV4cG9ydCBkZWZhdWx0IHsgcmVhZDogcmVhZCwgd3JpdGU6IHdyaXRlIH07XG4iLCIvKipcbiAqIFJldHVybnMgYW4gQXJyYXkgb2YgbGVuZ3RoIDggY29udGFpbmluZyB0aGUgcmVhZCBiaXRzLlxuICpcbiAqIEBleGFtcGxlXG4gKiBieXRlLnJlYWQoNDIpID0+IFswLDAsMSwwLDEsMCwxLDBdXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGJ5dGUgb25lIGJ5dGVcbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gKGJ5dGUpIHtcbiAgICBpZiAoYnl0ZSA+IDI1NSB8fCBieXRlIDwgMCB8fCB+fmJ5dGUgIT09IGJ5dGUpXG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdpbnZhbGlkIGJ5dGUnKTtcbiAgICB2YXIgcmVzdWx0ID0gWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgODsgaSsrKVxuICAgICAgICByZXN1bHRbNyAtIGldID0gKChieXRlID4+IGkpICYgMSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn0pO1xuIiwiLyoqXG4gKiBSZXR1cm5zIGEgVUludDggKDAtMjU1KSB3aGljaCBlcXVhbHMgdGhlIGdpdmVuIGJpdHMuXG4gKlxuICogQGV4YW1wbGVcbiAqIGJ5dGUud3JpdGUoWzAsMCwxLDAsMSwwLDEsMF0pID0+IDQyXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYnl0ZSA4IGJpdHNcbiAqIEByZXR1cm4ge051bWJlcn0gOC1iaXQgdW5zaWduZWQgaW50ZWdlclxuICovXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gKGJ5dGUpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYnl0ZSkgfHwgYnl0ZS5sZW5ndGggIT09IDgpXG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdpbnZhbGlkIGFycmF5IGxlbmd0aCcpO1xuICAgIHZhciBkYXRhID0gMDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDg7IGkrKylcbiAgICAgICAgaWYgKGJ5dGVbNyAtIGldKVxuICAgICAgICAgICAgZGF0YSB8PSAxIDw8IGk7XG4gICAgcmV0dXJuIGRhdGE7XG59KTtcbiIsImltcG9ydCBiaXRzIGZyb20gJy4vYml0cyc7XG5pbXBvcnQgYnVmZmVyIGZyb20gJy4vYnVmZmVyJztcbmltcG9ydCBieXRlIGZyb20gJy4vYnl0ZSc7XG5pbXBvcnQgaW50ZWdlciBmcm9tICcuL2ludGVnZXInO1xuaW1wb3J0IG5pYmJsZSBmcm9tICcuL25pYmJsZSc7XG5pbXBvcnQgc3RyaW5nIGZyb20gJy4vc3RyaW5nJztcbmV4cG9ydCB7IGJpdHMsIGJ1ZmZlciwgYnl0ZSwgaW50ZWdlciwgbmliYmxlLCBzdHJpbmcgfTtcbnZhciBiaXR3aXNlID0geyBiaXRzOiBiaXRzLCBidWZmZXI6IGJ1ZmZlciwgYnl0ZTogYnl0ZSwgaW50ZWdlcjogaW50ZWdlciwgbmliYmxlOiBuaWJibGUsIHN0cmluZzogc3RyaW5nIH07XG5leHBvcnQgZGVmYXVsdCBiaXR3aXNlO1xuIiwiLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBvZiBhIHNwZWNpZmljIGJpdC5cbiAqIEBleGFtcGxlIGJpdHdpc2UuaW50ZWdlci5nZXRCaXQoMTI4LCA3KSA9PiAxXG4gKiBAcGFyYW0ge0ludGVnZXJ9IGludDMyIGlucHV0IG51bWJlclxuICogQHBhcmFtIHtJbnRlZ2VyfSBwb3NpdGlvbiBiaXQncyBwb3NpdGlvblxuICogQHJldHVybnMge0ludGVnZXJ9IGJpdCdzIHZhbHVlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiAoaW50MzIsIHBvc2l0aW9uKSB7XG4gICAgcmV0dXJuICgoaW50MzIgPj4gcG9zaXRpb24pICYgMSk7XG59KTtcbiIsImltcG9ydCBnZXRCaXQgZnJvbSAnLi9nZXQtYml0JztcbmltcG9ydCBzZXRCaXQgZnJvbSAnLi9zZXQtYml0JztcbmltcG9ydCB0b2dnbGVCaXQgZnJvbSAnLi90b2dnbGUtYml0JztcbmV4cG9ydCB7IGdldEJpdCwgc2V0Qml0LCB0b2dnbGVCaXQgfTtcbmV4cG9ydCBkZWZhdWx0IHsgZ2V0Qml0OiBnZXRCaXQsIHNldEJpdDogc2V0Qml0LCB0b2dnbGVCaXQ6IHRvZ2dsZUJpdCB9O1xuIiwiLyoqXG4gKiBTZXRzIHRoZSB2YWx1ZSBvZiBhIHNwZWNpZmljIGJpdC5cbiAqIEBleGFtcGxlIGJpdHdpc2UuaW50ZWdlci5zZXQoMTI4LCA3LCAwKSA9PiAwXG4gKiBAcGFyYW0ge0ludGVnZXJ9IGludDMyIGlucHV0IG51bWJlclxuICogQHBhcmFtIHtJbnRlZ2VyfSBwb3NpdGlvbiBiaXTigJlzIHBvc2l0aW9uXG4gKiBAcGFyYW0ge0ludGVnZXJ9IHZhbHVlIGJpdOKAmXMgbmV3IHZhbHVlXG4gKiBAcmV0dXJucyB7SW50ZWdlcn0gcmVzdWx0aW5nIG51bWJlclxuICovXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gKGludDMyLCBwb3NpdGlvbiwgdmFsdWUpIHtcbiAgICByZXR1cm4gKHZhbHVlID09PSAxID8gaW50MzIgfCAoMSA8PCBwb3NpdGlvbikgOiBpbnQzMiAmIH4oMSA8PCBwb3NpdGlvbikpO1xufSk7XG4iLCIvKipcbiAqIFRvZ2dsZXMgYSBzcGVjaWZpYyBiaXQuXG4gKiBAZXhhbXBsZSBiaXR3aXNlLmludGVnZXIuZ2V0Qml0KDEyOCwgNykgPT4gMFxuICogQHBhcmFtIHtJbnRlZ2VyfSBpbnQzMiBpbnB1dCBudW1iZXJcbiAqIEBwYXJhbSB7SW50ZWdlcn0gcG9zaXRpb24gYml04oCZcyBwb3NpdGlvblxuICogQHJldHVybnMge0ludGVnZXJ9IHVwZGF0ZWQgbnVtYmVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiAoaW50MzIsIHBvc2l0aW9uKSB7IHJldHVybiBpbnQzMiBeICgxIDw8IHBvc2l0aW9uKTsgfSk7XG4iLCJpbXBvcnQgcmVhZCBmcm9tICcuL3JlYWQnO1xuaW1wb3J0IHdyaXRlIGZyb20gJy4vd3JpdGUnO1xuZXhwb3J0IHsgcmVhZCwgd3JpdGUgfTtcbmV4cG9ydCBkZWZhdWx0IHsgcmVhZDogcmVhZCwgd3JpdGU6IHdyaXRlIH07XG4iLCIvKipcbiAqIFJldHVybnMgYW4gQXJyYXkgb2YgbGVuZ3RoIDggY29udGFpbmluZyB0aGUgcmVhZCBiaXRzLlxuICpcbiAqIEBleGFtcGxlXG4gKiBuaWJibGUucmVhZCgxNSkgPT4gWzEsMSwxLDFdXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG5pYmJsZSBvbmUgbmliYmxlXG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIChuaWJibGUpIHtcbiAgICBpZiAobmliYmxlIDwgMTYgJiYgbmliYmxlID49IDAgJiYgTWF0aC5mbG9vcihuaWJibGUpID09PSBuaWJibGUpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFswLCAwLCAwLCAwXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA0OyBpKyspXG4gICAgICAgICAgICByZXN1bHRbMyAtIGldID0gKChuaWJibGUgPj4gaSkgJiAxKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgZWxzZVxuICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignaW52YWxpZCBhcnJheSBsZW5ndGgnKTtcbn0pO1xuIiwiLyoqXG4gKiBSZXR1cm5zIGEgTmliYmxlICgwLTE1KSB3aGljaCBlcXVhbHMgdGhlIGdpdmVuIGJpdHMuXG4gKlxuICogQGV4YW1wbGVcbiAqIGJ5dGUud3JpdGUoWzEsMCwxLDBdKSA9PiAxMFxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IG5pYmJsZSA0LWJpdCB1bnNpZ25lZCBpbnRlZ2VyXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiAobmliYmxlKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KG5pYmJsZSkgfHwgbmliYmxlLmxlbmd0aCAhPT0gNClcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2ludmFsaWQgYXJyYXkgbGVuZ3RoJyk7XG4gICAgdmFyIHJlc3VsdCA9IDA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCA0OyBpKyspXG4gICAgICAgIGlmIChuaWJibGVbMyAtIGldKVxuICAgICAgICAgICAgcmVzdWx0IHw9IDEgPDwgaTtcbiAgICByZXR1cm4gcmVzdWx0O1xufSk7XG4iLCJpbXBvcnQgdG9CaXRzIGZyb20gJy4vdG8tYml0cyc7XG5leHBvcnQgeyB0b0JpdHMgfTtcbmV4cG9ydCBkZWZhdWx0IHsgdG9CaXRzOiB0b0JpdHMgfTtcbiIsIi8qKlxuICogQ29udmVydHMgYSBzdHJpbmcgaW50byBhbiBhcnJheSBvZiBiaXRzLiBJZ25vcmVzIGFsbCBjaGFyYWN0ZXJzIGV4Y2VwdCAxIGFuZCAwLlxuICpcbiAqIEBleGFtcGxlXG4gKiB0b0JpdHMoJzEwIDEwIDEyJCVfLjAnKSA9PiBbMSwwLDEsMCwxLDBdXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0cmluZyB0aGUgc3RyaW5nIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtBcnJheX0gcmVzdWx0aW5nIGFycmF5IG9mIGJpdHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHJpbmcubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHN0cmluZ1tpXSA9PT0gJzEnKVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goMSk7XG4gICAgICAgIGVsc2UgaWYgKHN0cmluZ1tpXSA9PT0gJzAnKVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goMCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59KTtcbiIsIi8vIDMyLWJpdCBwb3dlcnMgb2YgdHdvIHdvdWxkbid0IGJlIHBvc3NpYmxlIHdpdGggPDxcbmV4cG9ydCB2YXIgcDIgPSBbXTtcbmZvciAodmFyIGkgPSAwOyBpIDwgMzI7IGkrKylcbiAgICBwMltpXSA9IE1hdGgucG93KDIsIGkpO1xuIiwidmFyIGJhc2V4ID0gcmVxdWlyZSgnYmFzZS14JylcbnZhciBBTFBIQUJFVCA9ICcxMjM0NTY3ODlBQkNERUZHSEpLTE1OUFFSU1RVVldYWVphYmNkZWZnaGlqa21ub3BxcnN0dXZ3eHl6J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2V4KEFMUEhBQkVUKVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBiYXNlNTggPSByZXF1aXJlKCdiczU4JylcbnZhciBCdWZmZXIgPSByZXF1aXJlKCdzYWZlLWJ1ZmZlcicpLkJ1ZmZlclxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjaGVja3N1bUZuKSB7XG4gIC8vIEVuY29kZSBhIGJ1ZmZlciBhcyBhIGJhc2U1OC1jaGVjayBlbmNvZGVkIHN0cmluZ1xuICBmdW5jdGlvbiBlbmNvZGUgKHBheWxvYWQpIHtcbiAgICB2YXIgY2hlY2tzdW0gPSBjaGVja3N1bUZuKHBheWxvYWQpXG5cbiAgICByZXR1cm4gYmFzZTU4LmVuY29kZShCdWZmZXIuY29uY2F0KFtcbiAgICAgIHBheWxvYWQsXG4gICAgICBjaGVja3N1bVxuICAgIF0sIHBheWxvYWQubGVuZ3RoICsgNCkpXG4gIH1cblxuICBmdW5jdGlvbiBkZWNvZGVSYXcgKGJ1ZmZlcikge1xuICAgIHZhciBwYXlsb2FkID0gYnVmZmVyLnNsaWNlKDAsIC00KVxuICAgIHZhciBjaGVja3N1bSA9IGJ1ZmZlci5zbGljZSgtNClcbiAgICB2YXIgbmV3Q2hlY2tzdW0gPSBjaGVja3N1bUZuKHBheWxvYWQpXG5cbiAgICBpZiAoY2hlY2tzdW1bMF0gXiBuZXdDaGVja3N1bVswXSB8XG4gICAgICAgIGNoZWNrc3VtWzFdIF4gbmV3Q2hlY2tzdW1bMV0gfFxuICAgICAgICBjaGVja3N1bVsyXSBeIG5ld0NoZWNrc3VtWzJdIHxcbiAgICAgICAgY2hlY2tzdW1bM10gXiBuZXdDaGVja3N1bVszXSkgcmV0dXJuXG5cbiAgICByZXR1cm4gcGF5bG9hZFxuICB9XG5cbiAgLy8gRGVjb2RlIGEgYmFzZTU4LWNoZWNrIGVuY29kZWQgc3RyaW5nIHRvIGEgYnVmZmVyLCBubyByZXN1bHQgaWYgY2hlY2tzdW0gaXMgd3JvbmdcbiAgZnVuY3Rpb24gZGVjb2RlVW5zYWZlIChzdHJpbmcpIHtcbiAgICB2YXIgYnVmZmVyID0gYmFzZTU4LmRlY29kZVVuc2FmZShzdHJpbmcpXG4gICAgaWYgKCFidWZmZXIpIHJldHVyblxuXG4gICAgcmV0dXJuIGRlY29kZVJhdyhidWZmZXIpXG4gIH1cblxuICBmdW5jdGlvbiBkZWNvZGUgKHN0cmluZykge1xuICAgIHZhciBidWZmZXIgPSBiYXNlNTguZGVjb2RlKHN0cmluZylcbiAgICB2YXIgcGF5bG9hZCA9IGRlY29kZVJhdyhidWZmZXIsIGNoZWNrc3VtRm4pXG4gICAgaWYgKCFwYXlsb2FkKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY2hlY2tzdW0nKVxuICAgIHJldHVybiBwYXlsb2FkXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGVuY29kZTogZW5jb2RlLFxuICAgIGRlY29kZTogZGVjb2RlLFxuICAgIGRlY29kZVVuc2FmZTogZGVjb2RlVW5zYWZlXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgY3JlYXRlSGFzaCA9IHJlcXVpcmUoJ2NyZWF0ZS1oYXNoJylcbnZhciBiczU4Y2hlY2tCYXNlID0gcmVxdWlyZSgnLi9iYXNlJylcblxuLy8gU0hBMjU2KFNIQTI1NihidWZmZXIpKVxuZnVuY3Rpb24gc2hhMjU2eDIgKGJ1ZmZlcikge1xuICB2YXIgdG1wID0gY3JlYXRlSGFzaCgnc2hhMjU2JykudXBkYXRlKGJ1ZmZlcikuZGlnZXN0KClcbiAgcmV0dXJuIGNyZWF0ZUhhc2goJ3NoYTI1NicpLnVwZGF0ZSh0bXApLmRpZ2VzdCgpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gYnM1OGNoZWNrQmFzZShzaGEyNTZ4MilcbiIsIlxyXG4vKipcclxuICogRXhwb3NlIGBFbWl0dGVyYC5cclxuICovXHJcblxyXG5pZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICBtb2R1bGUuZXhwb3J0cyA9IEVtaXR0ZXI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbml0aWFsaXplIGEgbmV3IGBFbWl0dGVyYC5cclxuICpcclxuICogQGFwaSBwdWJsaWNcclxuICovXHJcblxyXG5mdW5jdGlvbiBFbWl0dGVyKG9iaikge1xyXG4gIGlmIChvYmopIHJldHVybiBtaXhpbihvYmopO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIE1peGluIHRoZSBlbWl0dGVyIHByb3BlcnRpZXMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcclxuICogQHJldHVybiB7T2JqZWN0fVxyXG4gKiBAYXBpIHByaXZhdGVcclxuICovXHJcblxyXG5mdW5jdGlvbiBtaXhpbihvYmopIHtcclxuICBmb3IgKHZhciBrZXkgaW4gRW1pdHRlci5wcm90b3R5cGUpIHtcclxuICAgIG9ialtrZXldID0gRW1pdHRlci5wcm90b3R5cGVba2V5XTtcclxuICB9XHJcbiAgcmV0dXJuIG9iajtcclxufVxyXG5cclxuLyoqXHJcbiAqIExpc3RlbiBvbiB0aGUgZ2l2ZW4gYGV2ZW50YCB3aXRoIGBmbmAuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxyXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxyXG4gKiBAYXBpIHB1YmxpY1xyXG4gKi9cclxuXHJcbkVtaXR0ZXIucHJvdG90eXBlLm9uID1cclxuRW1pdHRlci5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50LCBmbil7XHJcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xyXG4gICh0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdID0gdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XSB8fCBbXSlcclxuICAgIC5wdXNoKGZuKTtcclxuICByZXR1cm4gdGhpcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBBZGRzIGFuIGBldmVudGAgbGlzdGVuZXIgdGhhdCB3aWxsIGJlIGludm9rZWQgYSBzaW5nbGVcclxuICogdGltZSB0aGVuIGF1dG9tYXRpY2FsbHkgcmVtb3ZlZC5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXHJcbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XHJcbiAqIEBhcGkgcHVibGljXHJcbiAqL1xyXG5cclxuRW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uKGV2ZW50LCBmbil7XHJcbiAgZnVuY3Rpb24gb24oKSB7XHJcbiAgICB0aGlzLm9mZihldmVudCwgb24pO1xyXG4gICAgZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICB9XHJcblxyXG4gIG9uLmZuID0gZm47XHJcbiAgdGhpcy5vbihldmVudCwgb24pO1xyXG4gIHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJlbW92ZSB0aGUgZ2l2ZW4gY2FsbGJhY2sgZm9yIGBldmVudGAgb3IgYWxsXHJcbiAqIHJlZ2lzdGVyZWQgY2FsbGJhY2tzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cclxuICogQHJldHVybiB7RW1pdHRlcn1cclxuICogQGFwaSBwdWJsaWNcclxuICovXHJcblxyXG5FbWl0dGVyLnByb3RvdHlwZS5vZmYgPVxyXG5FbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9XHJcbkVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9XHJcbkVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCwgZm4pe1xyXG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcclxuXHJcbiAgLy8gYWxsXHJcbiAgaWYgKDAgPT0gYXJndW1lbnRzLmxlbmd0aCkge1xyXG4gICAgdGhpcy5fY2FsbGJhY2tzID0ge307XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8vIHNwZWNpZmljIGV2ZW50XHJcbiAgdmFyIGNhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF07XHJcbiAgaWYgKCFjYWxsYmFja3MpIHJldHVybiB0aGlzO1xyXG5cclxuICAvLyByZW1vdmUgYWxsIGhhbmRsZXJzXHJcbiAgaWYgKDEgPT0gYXJndW1lbnRzLmxlbmd0aCkge1xyXG4gICAgZGVsZXRlIHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF07XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8vIHJlbW92ZSBzcGVjaWZpYyBoYW5kbGVyXHJcbiAgdmFyIGNiO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjYiA9IGNhbGxiYWNrc1tpXTtcclxuICAgIGlmIChjYiA9PT0gZm4gfHwgY2IuZm4gPT09IGZuKSB7XHJcbiAgICAgIGNhbGxiYWNrcy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gUmVtb3ZlIGV2ZW50IHNwZWNpZmljIGFycmF5cyBmb3IgZXZlbnQgdHlwZXMgdGhhdCBub1xyXG4gIC8vIG9uZSBpcyBzdWJzY3JpYmVkIGZvciB0byBhdm9pZCBtZW1vcnkgbGVhay5cclxuICBpZiAoY2FsbGJhY2tzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgZGVsZXRlIHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF07XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdGhpcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBFbWl0IGBldmVudGAgd2l0aCB0aGUgZ2l2ZW4gYXJncy5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XHJcbiAqIEBwYXJhbSB7TWl4ZWR9IC4uLlxyXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxyXG4gKi9cclxuXHJcbkVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbihldmVudCl7XHJcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xyXG5cclxuICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSlcclxuICAgICwgY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XTtcclxuXHJcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xyXG4gIH1cclxuXHJcbiAgaWYgKGNhbGxiYWNrcykge1xyXG4gICAgY2FsbGJhY2tzID0gY2FsbGJhY2tzLnNsaWNlKDApO1xyXG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNhbGxiYWNrcy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xyXG4gICAgICBjYWxsYmFja3NbaV0uYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdGhpcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZXR1cm4gYXJyYXkgb2YgY2FsbGJhY2tzIGZvciBgZXZlbnRgLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcclxuICogQHJldHVybiB7QXJyYXl9XHJcbiAqIEBhcGkgcHVibGljXHJcbiAqL1xyXG5cclxuRW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24oZXZlbnQpe1xyXG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcclxuICByZXR1cm4gdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XSB8fCBbXTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDaGVjayBpZiB0aGlzIGVtaXR0ZXIgaGFzIGBldmVudGAgaGFuZGxlcnMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxyXG4gKiBAcmV0dXJuIHtCb29sZWFufVxyXG4gKiBAYXBpIHB1YmxpY1xyXG4gKi9cclxuXHJcbkVtaXR0ZXIucHJvdG90eXBlLmhhc0xpc3RlbmVycyA9IGZ1bmN0aW9uKGV2ZW50KXtcclxuICByZXR1cm4gISEgdGhpcy5saXN0ZW5lcnMoZXZlbnQpLmxlbmd0aDtcclxufTtcclxuIiwiLyogY3JjMzIuanMgKEMpIDIwMTQtcHJlc2VudCBTaGVldEpTIC0tIGh0dHA6Ly9zaGVldGpzLmNvbSAqL1xuLyogdmltOiBzZXQgdHM9MjogKi9cbi8qZXhwb3J0ZWQgQ1JDMzIgKi9cbnZhciBDUkMzMjtcbihmdW5jdGlvbiAoZmFjdG9yeSkge1xuXHQvKmpzaGludCBpZ25vcmU6c3RhcnQgKi9cblx0Lyplc2xpbnQtZGlzYWJsZSAqL1xuXHRpZih0eXBlb2YgRE9fTk9UX0VYUE9SVF9DUkMgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0aWYoJ29iamVjdCcgPT09IHR5cGVvZiBleHBvcnRzKSB7XG5cdFx0XHRmYWN0b3J5KGV4cG9ydHMpO1xuXHRcdH0gZWxzZSBpZiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGRlZmluZSAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0XHRkZWZpbmUoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHR2YXIgbW9kdWxlID0ge307XG5cdFx0XHRcdGZhY3RvcnkobW9kdWxlKTtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZTtcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRmYWN0b3J5KENSQzMyID0ge30pO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRmYWN0b3J5KENSQzMyID0ge30pO1xuXHR9XG5cdC8qZXNsaW50LWVuYWJsZSAqL1xuXHQvKmpzaGludCBpZ25vcmU6ZW5kICovXG59KGZ1bmN0aW9uKENSQzMyKSB7XG5DUkMzMi52ZXJzaW9uID0gJzEuMi4wJztcbi8qIHNlZSBwZXJmL2NyYzMydGFibGUuanMgKi9cbi8qZ2xvYmFsIEludDMyQXJyYXkgKi9cbmZ1bmN0aW9uIHNpZ25lZF9jcmNfdGFibGUoKSB7XG5cdHZhciBjID0gMCwgdGFibGUgPSBuZXcgQXJyYXkoMjU2KTtcblxuXHRmb3IodmFyIG4gPTA7IG4gIT0gMjU2OyArK24pe1xuXHRcdGMgPSBuO1xuXHRcdGMgPSAoKGMmMSkgPyAoLTMwNjY3NDkxMiBeIChjID4+PiAxKSkgOiAoYyA+Pj4gMSkpO1xuXHRcdGMgPSAoKGMmMSkgPyAoLTMwNjY3NDkxMiBeIChjID4+PiAxKSkgOiAoYyA+Pj4gMSkpO1xuXHRcdGMgPSAoKGMmMSkgPyAoLTMwNjY3NDkxMiBeIChjID4+PiAxKSkgOiAoYyA+Pj4gMSkpO1xuXHRcdGMgPSAoKGMmMSkgPyAoLTMwNjY3NDkxMiBeIChjID4+PiAxKSkgOiAoYyA+Pj4gMSkpO1xuXHRcdGMgPSAoKGMmMSkgPyAoLTMwNjY3NDkxMiBeIChjID4+PiAxKSkgOiAoYyA+Pj4gMSkpO1xuXHRcdGMgPSAoKGMmMSkgPyAoLTMwNjY3NDkxMiBeIChjID4+PiAxKSkgOiAoYyA+Pj4gMSkpO1xuXHRcdGMgPSAoKGMmMSkgPyAoLTMwNjY3NDkxMiBeIChjID4+PiAxKSkgOiAoYyA+Pj4gMSkpO1xuXHRcdGMgPSAoKGMmMSkgPyAoLTMwNjY3NDkxMiBeIChjID4+PiAxKSkgOiAoYyA+Pj4gMSkpO1xuXHRcdHRhYmxlW25dID0gYztcblx0fVxuXG5cdHJldHVybiB0eXBlb2YgSW50MzJBcnJheSAhPT0gJ3VuZGVmaW5lZCcgPyBuZXcgSW50MzJBcnJheSh0YWJsZSkgOiB0YWJsZTtcbn1cblxudmFyIFQgPSBzaWduZWRfY3JjX3RhYmxlKCk7XG5mdW5jdGlvbiBjcmMzMl9ic3RyKGJzdHIsIHNlZWQpIHtcblx0dmFyIEMgPSBzZWVkIF4gLTEsIEwgPSBic3RyLmxlbmd0aCAtIDE7XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBMOykge1xuXHRcdEMgPSAoQz4+PjgpIF4gVFsoQ15ic3RyLmNoYXJDb2RlQXQoaSsrKSkmMHhGRl07XG5cdFx0QyA9IChDPj4+OCkgXiBUWyhDXmJzdHIuY2hhckNvZGVBdChpKyspKSYweEZGXTtcblx0fVxuXHRpZihpID09PSBMKSBDID0gKEM+Pj44KSBeIFRbKEMgXiBic3RyLmNoYXJDb2RlQXQoaSkpJjB4RkZdO1xuXHRyZXR1cm4gQyBeIC0xO1xufVxuXG5mdW5jdGlvbiBjcmMzMl9idWYoYnVmLCBzZWVkKSB7XG5cdGlmKGJ1Zi5sZW5ndGggPiAxMDAwMCkgcmV0dXJuIGNyYzMyX2J1Zl84KGJ1Ziwgc2VlZCk7XG5cdHZhciBDID0gc2VlZCBeIC0xLCBMID0gYnVmLmxlbmd0aCAtIDM7XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBMOykge1xuXHRcdEMgPSAoQz4+PjgpIF4gVFsoQ15idWZbaSsrXSkmMHhGRl07XG5cdFx0QyA9IChDPj4+OCkgXiBUWyhDXmJ1ZltpKytdKSYweEZGXTtcblx0XHRDID0gKEM+Pj44KSBeIFRbKENeYnVmW2krK10pJjB4RkZdO1xuXHRcdEMgPSAoQz4+PjgpIF4gVFsoQ15idWZbaSsrXSkmMHhGRl07XG5cdH1cblx0d2hpbGUoaSA8IEwrMykgQyA9IChDPj4+OCkgXiBUWyhDXmJ1ZltpKytdKSYweEZGXTtcblx0cmV0dXJuIEMgXiAtMTtcbn1cblxuZnVuY3Rpb24gY3JjMzJfYnVmXzgoYnVmLCBzZWVkKSB7XG5cdHZhciBDID0gc2VlZCBeIC0xLCBMID0gYnVmLmxlbmd0aCAtIDc7XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBMOykge1xuXHRcdEMgPSAoQz4+PjgpIF4gVFsoQ15idWZbaSsrXSkmMHhGRl07XG5cdFx0QyA9IChDPj4+OCkgXiBUWyhDXmJ1ZltpKytdKSYweEZGXTtcblx0XHRDID0gKEM+Pj44KSBeIFRbKENeYnVmW2krK10pJjB4RkZdO1xuXHRcdEMgPSAoQz4+PjgpIF4gVFsoQ15idWZbaSsrXSkmMHhGRl07XG5cdFx0QyA9IChDPj4+OCkgXiBUWyhDXmJ1ZltpKytdKSYweEZGXTtcblx0XHRDID0gKEM+Pj44KSBeIFRbKENeYnVmW2krK10pJjB4RkZdO1xuXHRcdEMgPSAoQz4+PjgpIF4gVFsoQ15idWZbaSsrXSkmMHhGRl07XG5cdFx0QyA9IChDPj4+OCkgXiBUWyhDXmJ1ZltpKytdKSYweEZGXTtcblx0fVxuXHR3aGlsZShpIDwgTCs3KSBDID0gKEM+Pj44KSBeIFRbKENeYnVmW2krK10pJjB4RkZdO1xuXHRyZXR1cm4gQyBeIC0xO1xufVxuXG5mdW5jdGlvbiBjcmMzMl9zdHIoc3RyLCBzZWVkKSB7XG5cdHZhciBDID0gc2VlZCBeIC0xO1xuXHRmb3IodmFyIGkgPSAwLCBMPXN0ci5sZW5ndGgsIGMsIGQ7IGkgPCBMOykge1xuXHRcdGMgPSBzdHIuY2hhckNvZGVBdChpKyspO1xuXHRcdGlmKGMgPCAweDgwKSB7XG5cdFx0XHRDID0gKEM+Pj44KSBeIFRbKEMgXiBjKSYweEZGXTtcblx0XHR9IGVsc2UgaWYoYyA8IDB4ODAwKSB7XG5cdFx0XHRDID0gKEM+Pj44KSBeIFRbKEMgXiAoMTkyfCgoYz4+NikmMzEpKSkmMHhGRl07XG5cdFx0XHRDID0gKEM+Pj44KSBeIFRbKEMgXiAoMTI4fChjJjYzKSkpJjB4RkZdO1xuXHRcdH0gZWxzZSBpZihjID49IDB4RDgwMCAmJiBjIDwgMHhFMDAwKSB7XG5cdFx0XHRjID0gKGMmMTAyMykrNjQ7IGQgPSBzdHIuY2hhckNvZGVBdChpKyspJjEwMjM7XG5cdFx0XHRDID0gKEM+Pj44KSBeIFRbKEMgXiAoMjQwfCgoYz4+OCkmNykpKSYweEZGXTtcblx0XHRcdEMgPSAoQz4+PjgpIF4gVFsoQyBeICgxMjh8KChjPj4yKSY2MykpKSYweEZGXTtcblx0XHRcdEMgPSAoQz4+PjgpIF4gVFsoQyBeICgxMjh8KChkPj42KSYxNSl8KChjJjMpPDw0KSkpJjB4RkZdO1xuXHRcdFx0QyA9IChDPj4+OCkgXiBUWyhDIF4gKDEyOHwoZCY2MykpKSYweEZGXTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0QyA9IChDPj4+OCkgXiBUWyhDIF4gKDIyNHwoKGM+PjEyKSYxNSkpKSYweEZGXTtcblx0XHRcdEMgPSAoQz4+PjgpIF4gVFsoQyBeICgxMjh8KChjPj42KSY2MykpKSYweEZGXTtcblx0XHRcdEMgPSAoQz4+PjgpIF4gVFsoQyBeICgxMjh8KGMmNjMpKSkmMHhGRl07XG5cdFx0fVxuXHR9XG5cdHJldHVybiBDIF4gLTE7XG59XG5DUkMzMi50YWJsZSA9IFQ7XG4vLyAkRmxvd0lnbm9yZVxuQ1JDMzIuYnN0ciA9IGNyYzMyX2JzdHI7XG4vLyAkRmxvd0lnbm9yZVxuQ1JDMzIuYnVmID0gY3JjMzJfYnVmO1xuLy8gJEZsb3dJZ25vcmVcbkNSQzMyLnN0ciA9IGNyYzMyX3N0cjtcbn0pKTtcbiIsImNvbnN0IGNyeXB0byA9IHJlcXVpcmUoJ2NyeXB0bycpO1xuY29uc3QgRXZlbnRFbWl0dGVyID0gcmVxdWlyZSgnZXZlbnRzJykuRXZlbnRFbWl0dGVyO1xuY29uc3QgU0RLID0gcmVxdWlyZSgnZ3JpZHBsdXMtc2RrJyk7XG5jb25zdCBrZXlyaW5nVHlwZSA9ICdMYXR0aWNlIEhhcmR3YXJlJztcbmNvbnN0IEhBUkRFTkVEX09GRlNFVCA9IDB4ODAwMDAwMDA7XG5jb25zdCBQRVJfUEFHRSA9IDU7XG5jb25zdCBDTE9TRV9DT0RFID0gLTEwMDA7XG5cbmNsYXNzIExhdHRpY2VLZXlyaW5nIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKG9wdHM9e30pIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy50eXBlID0ga2V5cmluZ1R5cGVcbiAgICB0aGlzLl9yZXNldERlZmF1bHRzKCk7XG4gICAgdGhpcy5kZXNlcmlhbGl6ZShvcHRzKTtcbiAgfVxuXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBLZXlyaW5nIEFQSSAocGVyIGBodHRwczovL2dpdGh1Yi5jb20vTWV0YU1hc2svZXRoLXNpbXBsZS1rZXlyaW5nYClcbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGRlc2VyaWFsaXplIChvcHRzID0ge30pIHtcbiAgICBpZiAob3B0cy5jcmVkcylcbiAgICAgIHRoaXMuY3JlZHMgPSBvcHRzLmNyZWRzO1xuICAgIGlmIChvcHRzLmFjY291bnRzKVxuICAgICAgdGhpcy5hY2NvdW50cyA9IG9wdHMuYWNjb3VudHM7XG4gICAgaWYgKG9wdHMud2FsbGV0VUlEKVxuICAgICAgdGhpcy53YWxsZXRVSUQgPSBvcHRzLndhbGxldFVJRDtcbiAgICBpZiAob3B0cy5uYW1lKVxuICAgICAgdGhpcy5uYW1lID0gb3B0cy5uYW1lO1xuICAgIGlmIChvcHRzLm5ldHdvcmspXG4gICAgICB0aGlzLm5ldHdvcmsgPSBvcHRzLm5ldHdvcms7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gIH1cblxuICBzZXJpYWxpemUoKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICBjcmVkczogdGhpcy5jcmVkcyxcbiAgICAgIGFjY291bnRzOiB0aGlzLmFjY291bnRzLFxuICAgICAgd2FsbGV0VUlEOiB0aGlzLndhbGxldFVJRCxcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIG5ldHdvcms6IHRoaXMubmV0d29yayxcbiAgICB9KVxuICB9XG5cbiAgaXNVbmxvY2tlZCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hhc0NyZWRzKCkgJiYgdGhpcy5faGFzU2Vzc2lvbigpXG4gIH1cblxuICBzZXRIZFBhdGgoKSB7XG4gICAgY29uc29sZS53YXJuKFwic2V0SGRQYXRoIG5vdCBpbXBsZW1lbnRlZC5cIilcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBJbml0aWFsaXplIGEgc2Vzc2lvbiB3aXRoIHRoZSBMYXR0aWNlMSBkZXZpY2UgdXNpbmcgdGhlIEdyaWRQbHVzIFNES1xuICB1bmxvY2sodXBkYXRlRGF0YT10cnVlKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuX2dldENyZWRzKClcbiAgICAgIC50aGVuKChjcmVkcykgPT4ge1xuICAgICAgICBpZiAoY3JlZHMpIHtcbiAgICAgICAgICB0aGlzLmNyZWRzLmRldmljZUlEID0gY3JlZHMuZGV2aWNlSUQ7XG4gICAgICAgICAgdGhpcy5jcmVkcy5wYXNzd29yZCA9IGNyZWRzLnBhc3N3b3JkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9pbml0U2Vzc2lvbigpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Nvbm5lY3QodXBkYXRlRGF0YSk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZSgnVW5sb2NrZWQnKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICByZXR1cm4gcmVqZWN0KEVycm9yKGVycikpO1xuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgLy8gQWRkIGFkZHJlc3NlcyB0byB0aGUgbG9jYWwgc3RvcmUgYW5kIHJldHVybiB0aGUgZnVsbCByZXN1bHRcbiAgYWRkQWNjb3VudHMobj0xKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmIChuID09PSBDTE9TRV9DT0RFKSB7XG4gICAgICAgIC8vIFNwZWNpYWwgY2FzZTogdXNlIGEgY29kZSB0byBmb3JnZXQgdGhlIGRldmljZS4gXG4gICAgICAgIC8vIChUaGlzIGZ1bmN0aW9uIGlzIG92ZXJsb2FkZWQgZHVlIHRvIGNvbnN0cmFpbnRzIHVwc3RyZWFtKVxuICAgICAgICB0aGlzLmZvcmdldERldmljZSgpO1xuICAgICAgICByZXR1cm4gcmVzb2x2ZShbXSk7XG4gICAgICB9IGVsc2UgaWYgKG4gPD0gMCkge1xuICAgICAgICAvLyBBdm9pZCBub24tcG9zaXRpdmUgbnVtYmVycy5cbiAgICAgICAgcmV0dXJuIHJlamVjdCgnTnVtYmVyIG9mIGFjY291bnRzIHRvIGFkZCBtdXN0IGJlIGEgcG9zaXRpdmUgbnVtYmVyLicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTm9ybWFsIGJlaGF2aW9yOiBlc3RhYmxpc2ggdGhlIGNvbm5lY3Rpb24gYW5kIGZldGNoIGFkZHJlc3Nlcy5cbiAgICAgICAgdGhpcy51bmxvY2soKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2ZldGNoQWRkcmVzc2VzKG4sIHRoaXMudW5sb2NrZWRBY2NvdW50KVxuICAgICAgICB9KVxuICAgICAgICAudGhlbigoYWRkcnMpID0+IHtcbiAgICAgICAgICAvLyBTcGxpY2UgdGhlIG5ldyBhY2NvdW50KHMpIGludG8gYHRoaXMuYWNjb3VudHNgXG4gICAgICAgICAgdGhpcy5hY2NvdW50cy5zcGxpY2UodGhpcy51bmxvY2tlZEFjY291bnQsIG4pO1xuICAgICAgICAgIHRoaXMuYWNjb3VudHMuc3BsaWNlKHRoaXMudW5sb2NrZWRBY2NvdW50LCAwLCAuLi5hZGRycyk7XG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUodGhpcy5hY2NvdW50cyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvLyBSZXR1cm4gdGhlIGxvY2FsIHN0b3JlIG9mIGFkZHJlc3Nlc1xuICBnZXRBY2NvdW50cygpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuYWNjb3VudHMgPyB0aGlzLmFjY291bnRzLnNsaWNlKCkgOiBbXS5zbGljZSgpKTtcbiAgfVxuXG4gIHNpZ25UcmFuc2FjdGlvbiAoYWRkcmVzcywgdHgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5fdW5sb2NrQW5kRmluZEFjY291bnQoYWRkcmVzcylcbiAgICAgIC50aGVuKChhZGRySWR4KSA9PiB7XG4gICAgICAgIC8vIEJ1aWxkIHRoZSBMYXR0aWNlIHJlcXVlc3QgZGF0YSBhbmQgbWFrZSByZXF1ZXN0XG4gICAgICAgIGNvbnN0IHR4RGF0YSA9IHtcbiAgICAgICAgICBjaGFpbklkOiB0eC5nZXRDaGFpbklkKCksXG4gICAgICAgICAgbm9uY2U6IE51bWJlcihgMHgke3R4Lm5vbmNlLnRvU3RyaW5nKCdoZXgnKX1gKSB8fCAwLFxuICAgICAgICAgIGdhc1ByaWNlOiBOdW1iZXIoYDB4JHt0eC5nYXNQcmljZS50b1N0cmluZygnaGV4Jyl9YCksXG4gICAgICAgICAgZ2FzTGltaXQ6IE51bWJlcihgMHgke3R4Lmdhc0xpbWl0LnRvU3RyaW5nKCdoZXgnKX1gKSxcbiAgICAgICAgICB0bzogYDB4JHt0eC50by50b1N0cmluZygnaGV4Jyl9YCxcbiAgICAgICAgICB2YWx1ZTogTnVtYmVyKGAweCR7dHgudmFsdWUudG9TdHJpbmcoJ2hleCcpfWApLFxuICAgICAgICAgIGRhdGE6IHR4LmRhdGEubGVuZ3RoID09PSAwID8gbnVsbCA6IGAweCR7dHguZGF0YS50b1N0cmluZygnaGV4Jyl9YCxcbiAgICAgICAgICBzaWduZXJQYXRoOiBbSEFSREVORURfT0ZGU0VUKzQ0LCBIQVJERU5FRF9PRkZTRVQrNjAsIEhBUkRFTkVEX09GRlNFVCwgMCwgYWRkcklkeF0sXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpZ25UeERhdGEodHhEYXRhKVxuICAgICAgfSlcbiAgICAgIC50aGVuKChzaWduZWRUeCkgPT4ge1xuICAgICAgICAvLyBBZGQgdGhlIHNpZyBwYXJhbXMuIGBzaWduZWRUeCA9IHsgc2lnOiB7IHYsIHIsIHMgfSwgdHgsIHR4SGFzaH1gXG4gICAgICAgIGlmICghc2lnbmVkVHguc2lnIHx8ICFzaWduZWRUeC5zaWcudiB8fCAhc2lnbmVkVHguc2lnLnIgfHwgIXNpZ25lZFR4LnNpZy5zKVxuICAgICAgICAgIHJldHVybiByZWplY3QoRXJyb3IoJ05vIHNpZ25hdHVyZSByZXR1cm5lZCcpKTtcbiAgICAgICAgdHgudiA9IHNpZ25lZFR4LnNpZy52O1xuICAgICAgICB0eC5yID0gQnVmZmVyLmZyb20oc2lnbmVkVHguc2lnLnIsICdoZXgnKTtcbiAgICAgICAgdHgucyA9IEJ1ZmZlci5mcm9tKHNpZ25lZFR4LnNpZy5zLCAnaGV4Jyk7XG4gICAgICAgIHJldHVybiByZXNvbHZlKHR4KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICByZXR1cm4gcmVqZWN0KEVycm9yKGVycikpO1xuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgc2lnblBlcnNvbmFsTWVzc2FnZShhZGRyZXNzLCBtc2cpIHtcbiAgICByZXR1cm4gdGhpcy5zaWduTWVzc2FnZShhZGRyZXNzLCB7IHBheWxvYWQ6IG1zZywgcHJvdG9jb2w6ICdzaWduUGVyc29uYWwnIH0pO1xuICB9XG5cbiAgc2lnbk1lc3NhZ2UoYWRkcmVzcywgbXNnKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuX3VubG9ja0FuZEZpbmRBY2NvdW50KGFkZHJlc3MpXG4gICAgICAudGhlbigoYWRkcklkeCkgPT4ge1xuICAgICAgICBjb25zdCB7IHBheWxvYWQsIHByb3RvY29sIH0gPSBtc2c7XG4gICAgICAgIGlmICghcGF5bG9hZCB8fCAhcHJvdG9jb2wpXG4gICAgICAgICAgcmV0dXJuIHJlamVjdCgnYHBheWxvYWRgIGFuZCBgcHJvdG9jb2xgIGZpZWxkcyBtdXN0IGJlIGluY2x1ZGVkIGluIHRoZSByZXF1ZXN0Jyk7XG4gICAgICAgIGNvbnN0IHJlcSA9IHtcbiAgICAgICAgICBjdXJyZW5jeTogJ0VUSF9NU0cnLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHByb3RvY29sLFxuICAgICAgICAgICAgcGF5bG9hZCxcbiAgICAgICAgICAgIHNpZ25lclBhdGg6IFtIQVJERU5FRF9PRkZTRVQrNDQsIEhBUkRFTkVEX09GRlNFVCs2MCwgSEFSREVORURfT0ZGU0VULCAwLCBhZGRySWR4XSxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLl9oYXNTZXNzaW9uKCkpXG4gICAgICAgICAgcmV0dXJuIHJlamVjdCgnTm8gU0RLIHNlc3Npb24gc3RhcnRlZC4gQ2Fubm90IHNpZ24gdHJhbnNhY3Rpb24uJylcbiAgICAgICAgdGhpcy5zZGtTZXNzaW9uLnNpZ24ocmVxLCAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICBpZiAoZXJyKVxuICAgICAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgICAgIGlmICghcmVzLnNpZylcbiAgICAgICAgICAgIHJldHVybiByZWplY3QoJ05vIHNpZ25hdHVyZSByZXR1cm5lZCcpO1xuICAgICAgICAgIGxldCB2ID0gKHJlcy5zaWcudiAtIDI3KS50b1N0cmluZygxNik7XG4gICAgICAgICAgaWYgKHYubGVuZ3RoIDwgMilcbiAgICAgICAgICAgIHYgPSBgMCR7dn1gO1xuICAgICAgICAgIHJldHVybiByZXNvbHZlKGAweCR7cmVzLnNpZy5yfSR7cmVzLnNpZy5zfSR7dn1gKTtcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGV4cG9ydEFjY291bnQoYWRkcmVzcykge1xuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChFcnJvcignZXhwb3J0QWNjb3VudCBub3Qgc3VwcG9ydGVkIGJ5IHRoaXMgZGV2aWNlJykpXG4gIH1cblxuICByZW1vdmVBY2NvdW50KGFkZHJlc3MpIHtcbiAgICAvLyBXZSBvbmx5IGFsbG93IG9uZSBhY2NvdW50IGF0IGEgdGltZSwgc28gcmVtb3ZpbmcgYW55IGFjY291bnRcbiAgICAvLyBzaG91bGQgcmVzdWx0IGluIGEgc3RhdGUgcmVzZXQuIFRoZSB1c2VyIHdpbGwgbmVlZCB0byByZWNvbm5lY3RcbiAgICAvLyB0byB0aGUgTGF0dGljZVxuICAgIHRoaXMuZm9yZ2V0RGV2aWNlKCk7XG4gIH1cblxuICBnZXRGaXJzdFBhZ2UoKSB7XG4gICAgdGhpcy5wYWdlID0gMDtcbiAgICByZXR1cm4gdGhpcy5fZ2V0UGFnZSgxKTtcbiAgfVxuXG4gIGdldE5leHRQYWdlICgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRGaXJzdFBhZ2UoKTtcbiAgfVxuXG4gIGdldFByZXZpb3VzUGFnZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Rmlyc3RQYWdlKCk7XG4gIH1cblxuICBzZXRBY2NvdW50VG9VbmxvY2sgKGluZGV4KSB7XG4gICAgdGhpcy51bmxvY2tlZEFjY291bnQgPSBwYXJzZUludChpbmRleCwgMTApXG4gIH1cblxuICBmb3JnZXREZXZpY2UgKCkge1xuICAgIHRoaXMuX3Jlc2V0RGVmYXVsdHMoKTtcbiAgfVxuXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBJbnRlcm5hbCBtZXRob2RzIGFuZCBpbnRlcmZhY2UgdG8gU0RLXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBfdW5sb2NrQW5kRmluZEFjY291bnQoYWRkcmVzcykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAvLyBOT1RFOiBXZSBhcmUgcGFzc2luZyBgZmFsc2VgIGhlcmUgYmVjYXVzZSB3ZSBkbyBOT1Qgd2FudFxuICAgICAgLy8gc3RhdGUgZGF0YSB0byBiZSB1cGRhdGVkIGFzIGEgcmVzdWx0IG9mIGEgdHJhbnNhY3Rpb24gcmVxdWVzdC5cbiAgICAgIC8vIEl0IGlzIHBvc3NpYmxlIHRoZSB1c2VyIGluc2VydGVkIG9yIHJlbW92ZWQgYSBTYWZlQ2FyZCBhbmRcbiAgICAgIC8vIHdpbGwgbm90IGJlIGFibGUgdG8gc2lnbiB0aGlzIHRyYW5zYWN0aW9uLiBJZiB0aGF0IGlzIHRoZVxuICAgICAgLy8gY2FzZSwgd2UganVzdCB3YW50IHRvIHJldHVybiBhbiBlcnJvciBtZXNzYWdlXG4gICAgICB0aGlzLnVubG9jayhmYWxzZSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QWNjb3VudHMoKVxuICAgICAgfSlcbiAgICAgIC50aGVuKChhZGRycykgPT4ge1xuICAgICAgICAvLyBGaW5kIHRoZSBzaWduZXIgaW4gb3VyIGN1cnJlbnQgc2V0IG9mIGFjY291bnRzXG4gICAgICAgIC8vIElmIHdlIGNhbid0IGZpbmQgaXQsIHJldHVybiBhbiBlcnJvclxuICAgICAgICBsZXQgYWRkcklkeCA9IG51bGw7XG4gICAgICAgIGFkZHJzLmZvckVhY2goKGFkZHIsIGkpID0+IHtcbiAgICAgICAgICBpZiAoYWRkcmVzcy50b0xvd2VyQ2FzZSgpID09PSBhZGRyLnRvTG93ZXJDYXNlKCkpXG4gICAgICAgICAgICBhZGRySWR4ID0gaTtcbiAgICAgICAgfSlcbiAgICAgICAgaWYgKGFkZHJJZHggPT09IG51bGwpXG4gICAgICAgICAgcmV0dXJuIHJlamVjdCgnU2lnbmVyIG5vdCBwcmVzZW50Jyk7XG4gICAgICAgIHJldHVybiByZXNvbHZlKGFkZHJJZHgpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG5cbiAgX3Jlc2V0RGVmYXVsdHMoKSB7XG4gICAgdGhpcy5hY2NvdW50cyA9IFtdO1xuICAgIHRoaXMuaXNMb2NrZWQgPSB0cnVlO1xuICAgIHRoaXMuY3JlZHMgPSB7XG4gICAgICBkZXZpY2VJRDogbnVsbCxcbiAgICAgIHBhc3N3b3JkOiBudWxsLFxuICAgIH07XG4gICAgdGhpcy53YWxsZXRVSUQgPSBudWxsO1xuICAgIHRoaXMuc2RrU2Vzc2lvbiA9IG51bGw7XG4gICAgdGhpcy5wYWdlID0gMDtcbiAgICB0aGlzLnVubG9ja2VkQWNjb3VudCA9IDA7XG4gICAgdGhpcy5uZXR3b3JrID0gbnVsbDtcbiAgfVxuXG4gIF9nZXRDcmVkcygpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgLy8gV2Ugb25seSBuZWVkIHRvIHNldHVwIGlmIHdlIGRvbid0IGhhdmUgYSBkZXZpY2VJRFxuICAgICAgaWYgKHRoaXMuX2hhc0NyZWRzKCkpXG4gICAgICAgIHJldHVybiByZXNvbHZlKCk7XG5cbiAgICAgIC8vIElmIHdlIGFyZSBub3QgYXdhcmUgb2Ygd2hhdCBMYXR0aWNlIHdlIHNob3VsZCBiZSB0YWxraW5nIHRvLFxuICAgICAgLy8gd2UgbmVlZCB0byBvcGVuIGEgd2luZG93IHRoYXQgbGV0cyB0aGUgdXNlciBnbyB0aHJvdWdoIHRoZVxuICAgICAgLy8gcGFpcmluZyBvciBjb25uZWN0aW9uIHByb2Nlc3MuXG4gICAgICBjb25zdCBuYW1lID0gdGhpcy5uYW1lID8gdGhpcy5uYW1lIDogJ1Vua25vd24nXG4gICAgICBsZXQgYmFzZSA9ICdodHRwczovL3dhbGxldC5ncmlkcGx1cy5pbyc7XG4gICAgICBpZiAodGhpcy5uZXR3b3JrICYmIHRoaXMubmV0d29yayAhPT0gJ21haW5uZXQnKVxuICAgICAgICBiYXNlID0gJ2h0dHBzOi8vZ3JpZHBsdXMtd2ViLXdhbGxldC1kZXYuaGVyb2t1YXBwLmNvbSc7XG4gICAgICBsZXQgdXJsID0gYCR7YmFzZX0/a2V5cmluZz0ke25hbWV9YDtcbiAgICAgIGlmICh0aGlzLm5ldHdvcmspXG4gICAgICAgIHVybCArPSBgJm5ldHdvcms9JHt0aGlzLm5ldHdvcmt9YFxuICAgICAgY29uc3QgcG9wdXAgPSB3aW5kb3cub3Blbih1cmwpO1xuICAgICAgcG9wdXAucG9zdE1lc3NhZ2UoJ0dFVF9MQVRUSUNFX0NSRURTJywgYmFzZSk7XG5cbiAgICAgIC8vIFBvc3RNZXNzYWdlIGhhbmRsZXJcbiAgICAgIGZ1bmN0aW9uIHJlY2VpdmVNZXNzYWdlKGV2ZW50KSB7XG4gICAgICAgIC8vIEVuc3VyZSBvcmlnaW5cbiAgICAgICAgaWYgKGV2ZW50Lm9yaWdpbiAhPT0gYmFzZSlcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIC8vIFBhcnNlIHJlc3BvbnNlIGRhdGFcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcbiAgICAgICAgICBpZiAoIWRhdGEuZGV2aWNlSUQgfHwgIWRhdGEucGFzc3dvcmQpXG4gICAgICAgICAgICByZXR1cm4gcmVqZWN0KEVycm9yKCdJbnZhbGlkIGNyZWRlbnRpYWxzIHJldHVybmVkIGZyb20gTGF0dGljZS4nKSk7XG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUoZGF0YSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIHJlY2VpdmVNZXNzYWdlLCBmYWxzZSk7XG4gICAgfSlcbiAgfVxuXG4gIC8vIFtyZV1jb25uZWN0IHRvIHRoZSBMYXR0aWNlLiBUaGlzIHNob3VsZCBiZSBkb25lIGZyZXF1ZW50bHkgdG8gZW5zdXJlXG4gIC8vIHRoZSBleHBlY3RlZCB3YWxsZXQgVUlEIGlzIHN0aWxsIHRoZSBvbmUgYWN0aXZlIGluIHRoZSBMYXR0aWNlLlxuICAvLyBUaGlzIHdpbGwgaGFuZGxlIFNhZmVDYXJkIGluc2VydGlvbi9yZW1vdmFsIGV2ZW50cy5cbiAgLy8gdXBkYXRlRGF0YSAtIHRydWUgaWYgeW91IHdhbnQgdG8gb3ZlcndyaXRlIHdhbGxldFVJRCBhbmQgYWNjb3VudHMgaW5cbiAgLy8gICAgICAgICAgICAgIHRoZSBldmVudCB0aGF0IHdlIGZpbmQgd2UgYXJlIG5vdCBzeW5jZWQuXG4gIC8vICAgICAgICAgICAgICBJZiBsZWZ0IGZhbHNlIGFuZCB3ZSBub3RpY2UgYSBuZXcgd2FsbGV0VUlELCB3ZSB3aWxsXG4gIC8vICAgICAgICAgICAgICByZXR1cm4gYW4gZXJyb3IuXG4gIF9jb25uZWN0KHVwZGF0ZURhdGEpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5zZGtTZXNzaW9uLmNvbm5lY3QodGhpcy5jcmVkcy5kZXZpY2VJRCwgKGVycikgPT4ge1xuICAgICAgICBpZiAoZXJyKVxuICAgICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgICAgLy8gU2F2ZSB0aGUgY3VycmVudCB3YWxsZXQgVUlEXG4gICAgICAgIGNvbnN0IGFjdGl2ZVdhbGxldCA9IHRoaXMuc2RrU2Vzc2lvbi5nZXRBY3RpdmVXYWxsZXQoKTtcbiAgICAgICAgaWYgKCFhY3RpdmVXYWxsZXQgfHwgIWFjdGl2ZVdhbGxldC51aWQpXG4gICAgICAgICAgcmV0dXJuIHJlamVjdChcIk5vIGFjdGl2ZSB3YWxsZXRcIik7XG4gICAgICAgIGNvbnN0IG5ld1VJRCA9IGFjdGl2ZVdhbGxldC51aWQudG9TdHJpbmcoJ2hleCcpO1xuICAgICAgICAvLyBJZiB3ZSBmZXRjaGVkIGEgd2FsbGV0VUlEIHRoYXQgZG9lcyBub3QgbWF0Y2ggb3VyIGN1cnJlbnQgb25lLFxuICAgICAgICAvLyByZXNldCBhY2NvdW50cyBhbmQgdXBkYXRlIHRoZSBrbm93biBVSURcbiAgICAgICAgaWYgKG5ld1VJRCAhPSB0aGlzLndhbGxldFVJRCkge1xuICAgICAgICAgIC8vIElmIHdlIGRvbid0IHdhbnQgdG8gdXBkYXRlIGRhdGEsIHJldHVybiBhbiBlcnJvclxuICAgICAgICAgIGlmICh1cGRhdGVEYXRhID09PSBmYWxzZSlcbiAgICAgICAgICAgIHJldHVybiByZWplY3QoJ1dhbGxldCBoYXMgY2hhbmdlZCEgUGxlYXNlIHJlY29ubmVjdC4nKVxuICAgICAgICAgIFxuICAgICAgICAgIC8vIEJ5IGRlZmF1bHQgd2Ugc2hvdWxkIGNsZWFyIG91dCBhY2NvdW50cyBhbmQgdXBkYXRlIHdpdGhcbiAgICAgICAgICAvLyB0aGUgbmV3IHdhbGxldFVJRC4gV2Ugc2hvdWxkIE5PVCBmaWxsIGluIHRoZSBhY2NvdW50cyB5ZXQsXG4gICAgICAgICAgLy8gYXMgd2UgcmVzZXJ2ZSB0aGF0IGZ1bmN0aW9uYWxpdHkgdG8gYGFkZEFjY291bnRzYFxuICAgICAgICAgIHRoaXMuYWNjb3VudHMgPSBbXTtcbiAgICAgICAgICB0aGlzLndhbGxldFVJRCA9IG5ld1VJRDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb2x2ZSgpO1xuICAgICAgfSk7XG4gICAgfSlcbiAgfVxuXG4gIF9pbml0U2Vzc2lvbigpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2hhc1Nlc3Npb24oKSlcbiAgICAgICAgcmV0dXJuIHJlc29sdmUoKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxldCB1cmwgPSAnaHR0cHM6Ly9zaWduaW5nLmdyaWRwbC51cyc7XG4gICAgICAgIGlmICh0aGlzLm5ldHdvcmsgJiYgdGhpcy5uZXR3b3JrICE9PSAnbWFpbm5ldCcpXG4gICAgICAgICAgdXJsID0gJ2h0dHBzOi8vc2lnbmluZy5zdGFnaW5nLWdyaWRwbC51cydcbiAgICAgICAgY29uc3Qgc2V0dXBEYXRhID0ge1xuICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgICBiYXNlVXJsOiB1cmwsXG4gICAgICAgICAgY3J5cHRvLFxuICAgICAgICAgIHRpbWVvdXQ6IDEyMDAwMCxcbiAgICAgICAgICBwcml2S2V5OiB0aGlzLl9nZW5TZXNzaW9uS2V5KCksXG4gICAgICAgICAgbmV0d29yazogdGhpcy5uZXR3b3JrXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZGtTZXNzaW9uID0gbmV3IFNESy5DbGllbnQoc2V0dXBEYXRhKTtcbiAgICAgICAgcmV0dXJuIHJlc29sdmUoKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIF9mZXRjaEFkZHJlc3NlcyhuPTEsIGk9MCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIXRoaXMuX2hhc1Nlc3Npb24oKSlcbiAgICAgICAgcmV0dXJuIHJlamVjdCgnTm8gU0RLIHNlc3Npb24gc3RhcnRlZC4gQ2Fubm90IGZldGNoIGFkZHJlc3Nlcy4nKVxuXG4gICAgICAvLyBUaGUgTGF0dGljZSBkb2VzIG5vdCBhbGxvdyBmb3IgdXMgdG8gc2tpcCBpbmRpY2VzLlxuICAgICAgaWYgKGkgPiB0aGlzLmFjY291bnRzLmxlbmd0aClcbiAgICAgICAgcmV0dXJuIHJlamVjdChgUmVxdWVzdGVkIGFkZHJlc3MgaXMgb3V0IG9mIGJvdW5kcy4gWW91IG1heSBvbmx5IHJlcXVlc3QgaW5kZXggPCR7dGhpcy5hY2NvdW50cy5sZW5ndGh9YClcblxuICAgICAgLy8gSWYgd2UgaGF2ZSBhbHJlYWR5IGNhY2hlZCB0aGUgYWRkcmVzcyhlcyksIHdlIGRvbid0IG5lZWQgdG8gZG8gaXQgYWdhaW5cbiAgICAgIGlmICh0aGlzLmFjY291bnRzLmxlbmd0aCA+IGkpXG4gICAgICAgIHJldHVybiByZXNvbHZlKHRoaXMuYWNjb3VudHMuc2xpY2UoaSwgbikpO1xuICAgICAgXG4gICAgICAvLyBNYWtlIHRoZSByZXF1ZXN0IHRvIGdldCB0aGUgcmVxdWVzdGVkIGFkZHJlc3NcbiAgICAgIGNvbnN0IGFkZHJEYXRhID0geyBcbiAgICAgICAgY3VycmVuY3k6ICdFVEgnLCBcbiAgICAgICAgc3RhcnRQYXRoOiBbSEFSREVORURfT0ZGU0VUKzQ0LCBIQVJERU5FRF9PRkZTRVQrNjAsIEhBUkRFTkVEX09GRlNFVCwgMCwgaV0sIFxuICAgICAgICBuLCAvLyBPbmx5IHJlcXVlc3Qgb25lIGF0IGEgdGltZS4gVGhpcyBtb2R1bGUgb25seSBzdXBwb3J0cyBFVEgsIHNvIG5vIGdhcCBsaW1pdHNcbiAgICAgIH1cbiAgICAgIHRoaXMuc2RrU2Vzc2lvbi5nZXRBZGRyZXNzZXMoYWRkckRhdGEsIChlcnIsIGFkZHJzKSA9PiB7XG4gICAgICAgIGlmIChlcnIpXG4gICAgICAgICAgcmV0dXJuIHJlamVjdChFcnJvcihgRXJyb3IgZ2V0dGluZyBhZGRyZXNzZXM6ICR7ZXJyfWApKTtcbiAgICAgICAgLy8gU2FuaXR5IGNoZWNrIC0tIGlmIHRoaXMgcmV0dXJuZWQgMCBhZGRyZXNzZXMsIGhhbmRsZSB0aGUgZXJyb3JcbiAgICAgICAgaWYgKGFkZHJzLmxlbmd0aCA8IDEpXG4gICAgICAgICAgcmV0dXJuIHJlamVjdCgnTm8gYWRkcmVzc2VzIHJldHVybmVkJyk7XG4gICAgICAgIC8vIFJldHVybiB0aGUgYWRkcmVzc2VzIHdlIGZldGNoZWQgKndpdGhvdXQqIHVwZGF0aW5nIHN0YXRlXG4gICAgICAgIHJldHVybiByZXNvbHZlKGFkZHJzKTtcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIF9zaWduVHhEYXRhKHR4RGF0YSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIXRoaXMuX2hhc1Nlc3Npb24oKSlcbiAgICAgICAgcmV0dXJuIHJlamVjdCgnTm8gU0RLIHNlc3Npb24gc3RhcnRlZC4gQ2Fubm90IHNpZ24gdHJhbnNhY3Rpb24uJylcbiAgICAgIHRoaXMuc2RrU2Vzc2lvbi5zaWduKHsgY3VycmVuY3k6ICdFVEgnLCBkYXRhOiB0eERhdGEgfSwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgIGlmIChlcnIpXG4gICAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgICBpZiAoIXJlcy50eClcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KCdObyB0cmFuc2FjdGlvbiBwYXlsb2FkIHJldHVybmVkLicpO1xuICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXMpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBfZ2V0UGFnZShpbmNyZW1lbnQ9MSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLnBhZ2UgKz0gaW5jcmVtZW50O1xuICAgICAgaWYgKHRoaXMucGFnZSA8PSAwKVxuICAgICAgICB0aGlzLnBhZ2UgPSAxO1xuICAgICAgY29uc3Qgc3RhcnQgPSBQRVJfUEFHRSAqICh0aGlzLnBhZ2UgLSAxKTtcbiAgICAgIGNvbnN0IHRvID0gUEVSX1BBR0UgKiB0aGlzLnBhZ2U7XG5cbiAgICAgIHRoaXMudW5sb2NrKClcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgLy8gVjE6IFdlIHdpbGwgb25seSBzdXBwb3J0IGV4cG9ydCBvZiBvbmUgKHRoZSBmaXJzdCkgYWRkcmVzc1xuICAgICAgICByZXR1cm4gdGhpcy5fZmV0Y2hBZGRyZXNzZXMoMSwgMCk7XG4gICAgICAgIC8vLS0tLS0tLS0tLS1cbiAgICAgIH0pXG4gICAgICAudGhlbigoYWRkcnMpID0+IHtcbiAgICAgICAgLy8gQnVpbGQgc29tZSBhY2NvdW50IG9iamVjdHMgZnJvbSB0aGUgYWRkcmVzc2VzXG4gICAgICAgIGNvbnN0IGxvY2FsQWNjb3VudHMgPSBbXTtcbiAgICAgICAgYWRkcnMuZm9yRWFjaCgoYWRkciwgaSkgPT4ge1xuICAgICAgICAgIGxvY2FsQWNjb3VudHMucHVzaCh7XG4gICAgICAgICAgICBhZGRyZXNzOiBhZGRyLFxuICAgICAgICAgICAgYmFsYW5jZTogbnVsbCxcbiAgICAgICAgICAgIGluZGV4OiBzdGFydCArIGksXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHJlc29sdmUobG9jYWxBY2NvdW50cyk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgX2hhc0NyZWRzKCkge1xuICAgIHJldHVybiB0aGlzLmNyZWRzLmRldmljZUlEICE9PSBudWxsICYmIHRoaXMuY3JlZHMucGFzc3dvcmQgIT09IG51bGwgJiYgdGhpcy5uYW1lO1xuICB9XG5cbiAgX2hhc1Nlc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc2RrU2Vzc2lvbiAmJiB0aGlzLndhbGxldFVJRDtcbiAgfVxuXG4gIF9nZW5TZXNzaW9uS2V5KCkge1xuICAgIGlmICghdGhpcy5faGFzQ3JlZHMoKSlcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm8gY3JlZGVudGlhbHMgLS0gY2Fubm90IGNyZWF0ZSBzZXNzaW9uIGtleSEnKTtcbiAgICBjb25zdCBidWYgPSBCdWZmZXIuY29uY2F0KFtcbiAgICAgIEJ1ZmZlci5mcm9tKHRoaXMuY3JlZHMucGFzc3dvcmQpLCBcbiAgICAgIEJ1ZmZlci5mcm9tKHRoaXMuY3JlZHMuZGV2aWNlSUQpLCBcbiAgICAgIEJ1ZmZlci5mcm9tKHRoaXMubmFtZSlcbiAgICBdKVxuICAgIHJldHVybiBjcnlwdG8uY3JlYXRlSGFzaCgnc2hhMjU2JykudXBkYXRlKGJ1ZikuZGlnZXN0KCk7XG4gIH1cblxufVxuXG5MYXR0aWNlS2V5cmluZy50eXBlID0ga2V5cmluZ1R5cGVcbm1vZHVsZS5leHBvcnRzID0gTGF0dGljZUtleXJpbmc7IiwiY29uc3QgQ2xpZW50ID0gcmVxdWlyZSgnLi9zcmMvY2xpZW50Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBDbGllbnQsXG59O1xuIiwiLyoqXG4gKiBbanMtc2hhM117QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2VtbjE3OC9qcy1zaGEzfVxuICpcbiAqIEB2ZXJzaW9uIDAuOC4wXG4gKiBAYXV0aG9yIENoZW4sIFlpLUN5dWFuIFtlbW4xNzhAZ21haWwuY29tXVxuICogQGNvcHlyaWdodCBDaGVuLCBZaS1DeXVhbiAyMDE1LTIwMThcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4vKmpzbGludCBiaXR3aXNlOiB0cnVlICovXG4oZnVuY3Rpb24gKCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgdmFyIElOUFVUX0VSUk9SID0gJ2lucHV0IGlzIGludmFsaWQgdHlwZSc7XG4gIHZhciBGSU5BTElaRV9FUlJPUiA9ICdmaW5hbGl6ZSBhbHJlYWR5IGNhbGxlZCc7XG4gIHZhciBXSU5ET1cgPSB0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JztcbiAgdmFyIHJvb3QgPSBXSU5ET1cgPyB3aW5kb3cgOiB7fTtcbiAgaWYgKHJvb3QuSlNfU0hBM19OT19XSU5ET1cpIHtcbiAgICBXSU5ET1cgPSBmYWxzZTtcbiAgfVxuICB2YXIgV0VCX1dPUktFUiA9ICFXSU5ET1cgJiYgdHlwZW9mIHNlbGYgPT09ICdvYmplY3QnO1xuICB2YXIgTk9ERV9KUyA9ICFyb290LkpTX1NIQTNfTk9fTk9ERV9KUyAmJiB0eXBlb2YgcHJvY2VzcyA9PT0gJ29iamVjdCcgJiYgcHJvY2Vzcy52ZXJzaW9ucyAmJiBwcm9jZXNzLnZlcnNpb25zLm5vZGU7XG4gIGlmIChOT0RFX0pTKSB7XG4gICAgcm9vdCA9IGdsb2JhbDtcbiAgfSBlbHNlIGlmIChXRUJfV09SS0VSKSB7XG4gICAgcm9vdCA9IHNlbGY7XG4gIH1cbiAgdmFyIENPTU1PTl9KUyA9ICFyb290LkpTX1NIQTNfTk9fQ09NTU9OX0pTICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzO1xuICB2YXIgQU1EID0gdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kO1xuICB2YXIgQVJSQVlfQlVGRkVSID0gIXJvb3QuSlNfU0hBM19OT19BUlJBWV9CVUZGRVIgJiYgdHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJztcbiAgdmFyIEhFWF9DSEFSUyA9ICcwMTIzNDU2Nzg5YWJjZGVmJy5zcGxpdCgnJyk7XG4gIHZhciBTSEFLRV9QQURESU5HID0gWzMxLCA3OTM2LCAyMDMxNjE2LCA1MjAwOTM2OTZdO1xuICB2YXIgQ1NIQUtFX1BBRERJTkcgPSBbNCwgMTAyNCwgMjYyMTQ0LCA2NzEwODg2NF07XG4gIHZhciBLRUNDQUtfUEFERElORyA9IFsxLCAyNTYsIDY1NTM2LCAxNjc3NzIxNl07XG4gIHZhciBQQURESU5HID0gWzYsIDE1MzYsIDM5MzIxNiwgMTAwNjYzMjk2XTtcbiAgdmFyIFNISUZUID0gWzAsIDgsIDE2LCAyNF07XG4gIHZhciBSQyA9IFsxLCAwLCAzMjg5OCwgMCwgMzI5MDYsIDIxNDc0ODM2NDgsIDIxNDc1MTY0MTYsIDIxNDc0ODM2NDgsIDMyOTA3LCAwLCAyMTQ3NDgzNjQ5LFxuICAgIDAsIDIxNDc1MTY1NDUsIDIxNDc0ODM2NDgsIDMyNzc3LCAyMTQ3NDgzNjQ4LCAxMzgsIDAsIDEzNiwgMCwgMjE0NzUxNjQyNSwgMCxcbiAgICAyMTQ3NDgzNjU4LCAwLCAyMTQ3NTE2NTU1LCAwLCAxMzksIDIxNDc0ODM2NDgsIDMyOTA1LCAyMTQ3NDgzNjQ4LCAzMjc3MSxcbiAgICAyMTQ3NDgzNjQ4LCAzMjc3MCwgMjE0NzQ4MzY0OCwgMTI4LCAyMTQ3NDgzNjQ4LCAzMjc3OCwgMCwgMjE0NzQ4MzY1OCwgMjE0NzQ4MzY0OCxcbiAgICAyMTQ3NTE2NTQ1LCAyMTQ3NDgzNjQ4LCAzMjg5NiwgMjE0NzQ4MzY0OCwgMjE0NzQ4MzY0OSwgMCwgMjE0NzUxNjQyNCwgMjE0NzQ4MzY0OF07XG4gIHZhciBCSVRTID0gWzIyNCwgMjU2LCAzODQsIDUxMl07XG4gIHZhciBTSEFLRV9CSVRTID0gWzEyOCwgMjU2XTtcbiAgdmFyIE9VVFBVVF9UWVBFUyA9IFsnaGV4JywgJ2J1ZmZlcicsICdhcnJheUJ1ZmZlcicsICdhcnJheScsICdkaWdlc3QnXTtcbiAgdmFyIENTSEFLRV9CWVRFUEFEID0ge1xuICAgICcxMjgnOiAxNjgsXG4gICAgJzI1Nic6IDEzNlxuICB9O1xuXG4gIGlmIChyb290LkpTX1NIQTNfTk9fTk9ERV9KUyB8fCAhQXJyYXkuaXNBcnJheSkge1xuICAgIEFycmF5LmlzQXJyYXkgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gICAgfTtcbiAgfVxuXG4gIGlmIChBUlJBWV9CVUZGRVIgJiYgKHJvb3QuSlNfU0hBM19OT19BUlJBWV9CVUZGRVJfSVNfVklFVyB8fCAhQXJyYXlCdWZmZXIuaXNWaWV3KSkge1xuICAgIEFycmF5QnVmZmVyLmlzVmlldyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiBvYmouYnVmZmVyICYmIG9iai5idWZmZXIuY29uc3RydWN0b3IgPT09IEFycmF5QnVmZmVyO1xuICAgIH07XG4gIH1cblxuICB2YXIgY3JlYXRlT3V0cHV0TWV0aG9kID0gZnVuY3Rpb24gKGJpdHMsIHBhZGRpbmcsIG91dHB1dFR5cGUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICAgIHJldHVybiBuZXcgS2VjY2FrKGJpdHMsIHBhZGRpbmcsIGJpdHMpLnVwZGF0ZShtZXNzYWdlKVtvdXRwdXRUeXBlXSgpO1xuICAgIH07XG4gIH07XG5cbiAgdmFyIGNyZWF0ZVNoYWtlT3V0cHV0TWV0aG9kID0gZnVuY3Rpb24gKGJpdHMsIHBhZGRpbmcsIG91dHB1dFR5cGUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKG1lc3NhZ2UsIG91dHB1dEJpdHMpIHtcbiAgICAgIHJldHVybiBuZXcgS2VjY2FrKGJpdHMsIHBhZGRpbmcsIG91dHB1dEJpdHMpLnVwZGF0ZShtZXNzYWdlKVtvdXRwdXRUeXBlXSgpO1xuICAgIH07XG4gIH07XG5cbiAgdmFyIGNyZWF0ZUNzaGFrZU91dHB1dE1ldGhvZCA9IGZ1bmN0aW9uIChiaXRzLCBwYWRkaW5nLCBvdXRwdXRUeXBlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChtZXNzYWdlLCBvdXRwdXRCaXRzLCBuLCBzKSB7XG4gICAgICByZXR1cm4gbWV0aG9kc1snY3NoYWtlJyArIGJpdHNdLnVwZGF0ZShtZXNzYWdlLCBvdXRwdXRCaXRzLCBuLCBzKVtvdXRwdXRUeXBlXSgpO1xuICAgIH07XG4gIH07XG5cbiAgdmFyIGNyZWF0ZUttYWNPdXRwdXRNZXRob2QgPSBmdW5jdGlvbiAoYml0cywgcGFkZGluZywgb3V0cHV0VHlwZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoa2V5LCBtZXNzYWdlLCBvdXRwdXRCaXRzLCBzKSB7XG4gICAgICByZXR1cm4gbWV0aG9kc1sna21hYycgKyBiaXRzXS51cGRhdGUoa2V5LCBtZXNzYWdlLCBvdXRwdXRCaXRzLCBzKVtvdXRwdXRUeXBlXSgpO1xuICAgIH07XG4gIH07XG5cbiAgdmFyIGNyZWF0ZU91dHB1dE1ldGhvZHMgPSBmdW5jdGlvbiAobWV0aG9kLCBjcmVhdGVNZXRob2QsIGJpdHMsIHBhZGRpbmcpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IE9VVFBVVF9UWVBFUy5sZW5ndGg7ICsraSkge1xuICAgICAgdmFyIHR5cGUgPSBPVVRQVVRfVFlQRVNbaV07XG4gICAgICBtZXRob2RbdHlwZV0gPSBjcmVhdGVNZXRob2QoYml0cywgcGFkZGluZywgdHlwZSk7XG4gICAgfVxuICAgIHJldHVybiBtZXRob2Q7XG4gIH07XG5cbiAgdmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChiaXRzLCBwYWRkaW5nKSB7XG4gICAgdmFyIG1ldGhvZCA9IGNyZWF0ZU91dHB1dE1ldGhvZChiaXRzLCBwYWRkaW5nLCAnaGV4Jyk7XG4gICAgbWV0aG9kLmNyZWF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBuZXcgS2VjY2FrKGJpdHMsIHBhZGRpbmcsIGJpdHMpO1xuICAgIH07XG4gICAgbWV0aG9kLnVwZGF0ZSA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgICByZXR1cm4gbWV0aG9kLmNyZWF0ZSgpLnVwZGF0ZShtZXNzYWdlKTtcbiAgICB9O1xuICAgIHJldHVybiBjcmVhdGVPdXRwdXRNZXRob2RzKG1ldGhvZCwgY3JlYXRlT3V0cHV0TWV0aG9kLCBiaXRzLCBwYWRkaW5nKTtcbiAgfTtcblxuICB2YXIgY3JlYXRlU2hha2VNZXRob2QgPSBmdW5jdGlvbiAoYml0cywgcGFkZGluZykge1xuICAgIHZhciBtZXRob2QgPSBjcmVhdGVTaGFrZU91dHB1dE1ldGhvZChiaXRzLCBwYWRkaW5nLCAnaGV4Jyk7XG4gICAgbWV0aG9kLmNyZWF0ZSA9IGZ1bmN0aW9uIChvdXRwdXRCaXRzKSB7XG4gICAgICByZXR1cm4gbmV3IEtlY2NhayhiaXRzLCBwYWRkaW5nLCBvdXRwdXRCaXRzKTtcbiAgICB9O1xuICAgIG1ldGhvZC51cGRhdGUgPSBmdW5jdGlvbiAobWVzc2FnZSwgb3V0cHV0Qml0cykge1xuICAgICAgcmV0dXJuIG1ldGhvZC5jcmVhdGUob3V0cHV0Qml0cykudXBkYXRlKG1lc3NhZ2UpO1xuICAgIH07XG4gICAgcmV0dXJuIGNyZWF0ZU91dHB1dE1ldGhvZHMobWV0aG9kLCBjcmVhdGVTaGFrZU91dHB1dE1ldGhvZCwgYml0cywgcGFkZGluZyk7XG4gIH07XG5cbiAgdmFyIGNyZWF0ZUNzaGFrZU1ldGhvZCA9IGZ1bmN0aW9uIChiaXRzLCBwYWRkaW5nKSB7XG4gICAgdmFyIHcgPSBDU0hBS0VfQllURVBBRFtiaXRzXTtcbiAgICB2YXIgbWV0aG9kID0gY3JlYXRlQ3NoYWtlT3V0cHV0TWV0aG9kKGJpdHMsIHBhZGRpbmcsICdoZXgnKTtcbiAgICBtZXRob2QuY3JlYXRlID0gZnVuY3Rpb24gKG91dHB1dEJpdHMsIG4sIHMpIHtcbiAgICAgIGlmICghbiAmJiAhcykge1xuICAgICAgICByZXR1cm4gbWV0aG9kc1snc2hha2UnICsgYml0c10uY3JlYXRlKG91dHB1dEJpdHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBLZWNjYWsoYml0cywgcGFkZGluZywgb3V0cHV0Qml0cykuYnl0ZXBhZChbbiwgc10sIHcpO1xuICAgICAgfVxuICAgIH07XG4gICAgbWV0aG9kLnVwZGF0ZSA9IGZ1bmN0aW9uIChtZXNzYWdlLCBvdXRwdXRCaXRzLCBuLCBzKSB7XG4gICAgICByZXR1cm4gbWV0aG9kLmNyZWF0ZShvdXRwdXRCaXRzLCBuLCBzKS51cGRhdGUobWVzc2FnZSk7XG4gICAgfTtcbiAgICByZXR1cm4gY3JlYXRlT3V0cHV0TWV0aG9kcyhtZXRob2QsIGNyZWF0ZUNzaGFrZU91dHB1dE1ldGhvZCwgYml0cywgcGFkZGluZyk7XG4gIH07XG5cbiAgdmFyIGNyZWF0ZUttYWNNZXRob2QgPSBmdW5jdGlvbiAoYml0cywgcGFkZGluZykge1xuICAgIHZhciB3ID0gQ1NIQUtFX0JZVEVQQURbYml0c107XG4gICAgdmFyIG1ldGhvZCA9IGNyZWF0ZUttYWNPdXRwdXRNZXRob2QoYml0cywgcGFkZGluZywgJ2hleCcpO1xuICAgIG1ldGhvZC5jcmVhdGUgPSBmdW5jdGlvbiAoa2V5LCBvdXRwdXRCaXRzLCBzKSB7XG4gICAgICByZXR1cm4gbmV3IEttYWMoYml0cywgcGFkZGluZywgb3V0cHV0Qml0cykuYnl0ZXBhZChbJ0tNQUMnLCBzXSwgdykuYnl0ZXBhZChba2V5XSwgdyk7XG4gICAgfTtcbiAgICBtZXRob2QudXBkYXRlID0gZnVuY3Rpb24gKGtleSwgbWVzc2FnZSwgb3V0cHV0Qml0cywgcykge1xuICAgICAgcmV0dXJuIG1ldGhvZC5jcmVhdGUoa2V5LCBvdXRwdXRCaXRzLCBzKS51cGRhdGUobWVzc2FnZSk7XG4gICAgfTtcbiAgICByZXR1cm4gY3JlYXRlT3V0cHV0TWV0aG9kcyhtZXRob2QsIGNyZWF0ZUttYWNPdXRwdXRNZXRob2QsIGJpdHMsIHBhZGRpbmcpO1xuICB9O1xuXG4gIHZhciBhbGdvcml0aG1zID0gW1xuICAgIHsgbmFtZTogJ2tlY2NhaycsIHBhZGRpbmc6IEtFQ0NBS19QQURESU5HLCBiaXRzOiBCSVRTLCBjcmVhdGVNZXRob2Q6IGNyZWF0ZU1ldGhvZCB9LFxuICAgIHsgbmFtZTogJ3NoYTMnLCBwYWRkaW5nOiBQQURESU5HLCBiaXRzOiBCSVRTLCBjcmVhdGVNZXRob2Q6IGNyZWF0ZU1ldGhvZCB9LFxuICAgIHsgbmFtZTogJ3NoYWtlJywgcGFkZGluZzogU0hBS0VfUEFERElORywgYml0czogU0hBS0VfQklUUywgY3JlYXRlTWV0aG9kOiBjcmVhdGVTaGFrZU1ldGhvZCB9LFxuICAgIHsgbmFtZTogJ2NzaGFrZScsIHBhZGRpbmc6IENTSEFLRV9QQURESU5HLCBiaXRzOiBTSEFLRV9CSVRTLCBjcmVhdGVNZXRob2Q6IGNyZWF0ZUNzaGFrZU1ldGhvZCB9LFxuICAgIHsgbmFtZTogJ2ttYWMnLCBwYWRkaW5nOiBDU0hBS0VfUEFERElORywgYml0czogU0hBS0VfQklUUywgY3JlYXRlTWV0aG9kOiBjcmVhdGVLbWFjTWV0aG9kIH1cbiAgXTtcblxuICB2YXIgbWV0aG9kcyA9IHt9LCBtZXRob2ROYW1lcyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYWxnb3JpdGhtcy5sZW5ndGg7ICsraSkge1xuICAgIHZhciBhbGdvcml0aG0gPSBhbGdvcml0aG1zW2ldO1xuICAgIHZhciBiaXRzID0gYWxnb3JpdGhtLmJpdHM7XG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBiaXRzLmxlbmd0aDsgKytqKSB7XG4gICAgICB2YXIgbWV0aG9kTmFtZSA9IGFsZ29yaXRobS5uYW1lICsgJ18nICsgYml0c1tqXTtcbiAgICAgIG1ldGhvZE5hbWVzLnB1c2gobWV0aG9kTmFtZSk7XG4gICAgICBtZXRob2RzW21ldGhvZE5hbWVdID0gYWxnb3JpdGhtLmNyZWF0ZU1ldGhvZChiaXRzW2pdLCBhbGdvcml0aG0ucGFkZGluZyk7XG4gICAgICBpZiAoYWxnb3JpdGhtLm5hbWUgIT09ICdzaGEzJykge1xuICAgICAgICB2YXIgbmV3TWV0aG9kTmFtZSA9IGFsZ29yaXRobS5uYW1lICsgYml0c1tqXTtcbiAgICAgICAgbWV0aG9kTmFtZXMucHVzaChuZXdNZXRob2ROYW1lKTtcbiAgICAgICAgbWV0aG9kc1tuZXdNZXRob2ROYW1lXSA9IG1ldGhvZHNbbWV0aG9kTmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gS2VjY2FrKGJpdHMsIHBhZGRpbmcsIG91dHB1dEJpdHMpIHtcbiAgICB0aGlzLmJsb2NrcyA9IFtdO1xuICAgIHRoaXMucyA9IFtdO1xuICAgIHRoaXMucGFkZGluZyA9IHBhZGRpbmc7XG4gICAgdGhpcy5vdXRwdXRCaXRzID0gb3V0cHV0Qml0cztcbiAgICB0aGlzLnJlc2V0ID0gdHJ1ZTtcbiAgICB0aGlzLmZpbmFsaXplZCA9IGZhbHNlO1xuICAgIHRoaXMuYmxvY2sgPSAwO1xuICAgIHRoaXMuc3RhcnQgPSAwO1xuICAgIHRoaXMuYmxvY2tDb3VudCA9ICgxNjAwIC0gKGJpdHMgPDwgMSkpID4+IDU7XG4gICAgdGhpcy5ieXRlQ291bnQgPSB0aGlzLmJsb2NrQ291bnQgPDwgMjtcbiAgICB0aGlzLm91dHB1dEJsb2NrcyA9IG91dHB1dEJpdHMgPj4gNTtcbiAgICB0aGlzLmV4dHJhQnl0ZXMgPSAob3V0cHV0Qml0cyAmIDMxKSA+PiAzO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCA1MDsgKytpKSB7XG4gICAgICB0aGlzLnNbaV0gPSAwO1xuICAgIH1cbiAgfVxuXG4gIEtlY2Nhay5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICBpZiAodGhpcy5maW5hbGl6ZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihGSU5BTElaRV9FUlJPUik7XG4gICAgfVxuICAgIHZhciBub3RTdHJpbmcsIHR5cGUgPSB0eXBlb2YgbWVzc2FnZTtcbiAgICBpZiAodHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIGlmICh0eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgICBpZiAobWVzc2FnZSA9PT0gbnVsbCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihJTlBVVF9FUlJPUik7XG4gICAgICAgIH0gZWxzZSBpZiAoQVJSQVlfQlVGRkVSICYmIG1lc3NhZ2UuY29uc3RydWN0b3IgPT09IEFycmF5QnVmZmVyKSB7XG4gICAgICAgICAgbWVzc2FnZSA9IG5ldyBVaW50OEFycmF5KG1lc3NhZ2UpO1xuICAgICAgICB9IGVsc2UgaWYgKCFBcnJheS5pc0FycmF5KG1lc3NhZ2UpKSB7XG4gICAgICAgICAgaWYgKCFBUlJBWV9CVUZGRVIgfHwgIUFycmF5QnVmZmVyLmlzVmlldyhtZXNzYWdlKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKElOUFVUX0VSUk9SKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihJTlBVVF9FUlJPUik7XG4gICAgICB9XG4gICAgICBub3RTdHJpbmcgPSB0cnVlO1xuICAgIH1cbiAgICB2YXIgYmxvY2tzID0gdGhpcy5ibG9ja3MsIGJ5dGVDb3VudCA9IHRoaXMuYnl0ZUNvdW50LCBsZW5ndGggPSBtZXNzYWdlLmxlbmd0aCxcbiAgICAgIGJsb2NrQ291bnQgPSB0aGlzLmJsb2NrQ291bnQsIGluZGV4ID0gMCwgcyA9IHRoaXMucywgaSwgY29kZTtcblxuICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgICAgaWYgKHRoaXMucmVzZXQpIHtcbiAgICAgICAgdGhpcy5yZXNldCA9IGZhbHNlO1xuICAgICAgICBibG9ja3NbMF0gPSB0aGlzLmJsb2NrO1xuICAgICAgICBmb3IgKGkgPSAxOyBpIDwgYmxvY2tDb3VudCArIDE7ICsraSkge1xuICAgICAgICAgIGJsb2Nrc1tpXSA9IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChub3RTdHJpbmcpIHtcbiAgICAgICAgZm9yIChpID0gdGhpcy5zdGFydDsgaW5kZXggPCBsZW5ndGggJiYgaSA8IGJ5dGVDb3VudDsgKytpbmRleCkge1xuICAgICAgICAgIGJsb2Nrc1tpID4+IDJdIHw9IG1lc3NhZ2VbaW5kZXhdIDw8IFNISUZUW2krKyAmIDNdO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGkgPSB0aGlzLnN0YXJ0OyBpbmRleCA8IGxlbmd0aCAmJiBpIDwgYnl0ZUNvdW50OyArK2luZGV4KSB7XG4gICAgICAgICAgY29kZSA9IG1lc3NhZ2UuY2hhckNvZGVBdChpbmRleCk7XG4gICAgICAgICAgaWYgKGNvZGUgPCAweDgwKSB7XG4gICAgICAgICAgICBibG9ja3NbaSA+PiAyXSB8PSBjb2RlIDw8IFNISUZUW2krKyAmIDNdO1xuICAgICAgICAgIH0gZWxzZSBpZiAoY29kZSA8IDB4ODAwKSB7XG4gICAgICAgICAgICBibG9ja3NbaSA+PiAyXSB8PSAoMHhjMCB8IChjb2RlID4+IDYpKSA8PCBTSElGVFtpKysgJiAzXTtcbiAgICAgICAgICAgIGJsb2Nrc1tpID4+IDJdIHw9ICgweDgwIHwgKGNvZGUgJiAweDNmKSkgPDwgU0hJRlRbaSsrICYgM107XG4gICAgICAgICAgfSBlbHNlIGlmIChjb2RlIDwgMHhkODAwIHx8IGNvZGUgPj0gMHhlMDAwKSB7XG4gICAgICAgICAgICBibG9ja3NbaSA+PiAyXSB8PSAoMHhlMCB8IChjb2RlID4+IDEyKSkgPDwgU0hJRlRbaSsrICYgM107XG4gICAgICAgICAgICBibG9ja3NbaSA+PiAyXSB8PSAoMHg4MCB8ICgoY29kZSA+PiA2KSAmIDB4M2YpKSA8PCBTSElGVFtpKysgJiAzXTtcbiAgICAgICAgICAgIGJsb2Nrc1tpID4+IDJdIHw9ICgweDgwIHwgKGNvZGUgJiAweDNmKSkgPDwgU0hJRlRbaSsrICYgM107XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvZGUgPSAweDEwMDAwICsgKCgoY29kZSAmIDB4M2ZmKSA8PCAxMCkgfCAobWVzc2FnZS5jaGFyQ29kZUF0KCsraW5kZXgpICYgMHgzZmYpKTtcbiAgICAgICAgICAgIGJsb2Nrc1tpID4+IDJdIHw9ICgweGYwIHwgKGNvZGUgPj4gMTgpKSA8PCBTSElGVFtpKysgJiAzXTtcbiAgICAgICAgICAgIGJsb2Nrc1tpID4+IDJdIHw9ICgweDgwIHwgKChjb2RlID4+IDEyKSAmIDB4M2YpKSA8PCBTSElGVFtpKysgJiAzXTtcbiAgICAgICAgICAgIGJsb2Nrc1tpID4+IDJdIHw9ICgweDgwIHwgKChjb2RlID4+IDYpICYgMHgzZikpIDw8IFNISUZUW2krKyAmIDNdO1xuICAgICAgICAgICAgYmxvY2tzW2kgPj4gMl0gfD0gKDB4ODAgfCAoY29kZSAmIDB4M2YpKSA8PCBTSElGVFtpKysgJiAzXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMubGFzdEJ5dGVJbmRleCA9IGk7XG4gICAgICBpZiAoaSA+PSBieXRlQ291bnQpIHtcbiAgICAgICAgdGhpcy5zdGFydCA9IGkgLSBieXRlQ291bnQ7XG4gICAgICAgIHRoaXMuYmxvY2sgPSBibG9ja3NbYmxvY2tDb3VudF07XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBibG9ja0NvdW50OyArK2kpIHtcbiAgICAgICAgICBzW2ldIF49IGJsb2Nrc1tpXTtcbiAgICAgICAgfVxuICAgICAgICBmKHMpO1xuICAgICAgICB0aGlzLnJlc2V0ID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3RhcnQgPSBpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBLZWNjYWsucHJvdG90eXBlLmVuY29kZSA9IGZ1bmN0aW9uICh4LCByaWdodCkge1xuICAgIHZhciBvID0geCAmIDI1NSwgbiA9IDE7XG4gICAgdmFyIGJ5dGVzID0gW29dO1xuICAgIHggPSB4ID4+IDg7XG4gICAgbyA9IHggJiAyNTU7XG4gICAgd2hpbGUgKG8gPiAwKSB7XG4gICAgICBieXRlcy51bnNoaWZ0KG8pO1xuICAgICAgeCA9IHggPj4gODtcbiAgICAgIG8gPSB4ICYgMjU1O1xuICAgICAgKytuO1xuICAgIH1cbiAgICBpZiAocmlnaHQpIHtcbiAgICAgIGJ5dGVzLnB1c2gobik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJ5dGVzLnVuc2hpZnQobik7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlKGJ5dGVzKTtcbiAgICByZXR1cm4gYnl0ZXMubGVuZ3RoO1xuICB9O1xuXG4gIEtlY2Nhay5wcm90b3R5cGUuZW5jb2RlU3RyaW5nID0gZnVuY3Rpb24gKHN0cikge1xuICAgIHZhciBub3RTdHJpbmcsIHR5cGUgPSB0eXBlb2Ygc3RyO1xuICAgIGlmICh0eXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgaWYgKHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGlmIChzdHIgPT09IG51bGwpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoSU5QVVRfRVJST1IpO1xuICAgICAgICB9IGVsc2UgaWYgKEFSUkFZX0JVRkZFUiAmJiBzdHIuY29uc3RydWN0b3IgPT09IEFycmF5QnVmZmVyKSB7XG4gICAgICAgICAgc3RyID0gbmV3IFVpbnQ4QXJyYXkoc3RyKTtcbiAgICAgICAgfSBlbHNlIGlmICghQXJyYXkuaXNBcnJheShzdHIpKSB7XG4gICAgICAgICAgaWYgKCFBUlJBWV9CVUZGRVIgfHwgIUFycmF5QnVmZmVyLmlzVmlldyhzdHIpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoSU5QVVRfRVJST1IpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKElOUFVUX0VSUk9SKTtcbiAgICAgIH1cbiAgICAgIG5vdFN0cmluZyA9IHRydWU7XG4gICAgfVxuICAgIHZhciBieXRlcyA9IDAsIGxlbmd0aCA9IHN0ci5sZW5ndGg7XG4gICAgaWYgKG5vdFN0cmluZykge1xuICAgICAgYnl0ZXMgPSBsZW5ndGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciBjb2RlID0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIGlmIChjb2RlIDwgMHg4MCkge1xuICAgICAgICAgIGJ5dGVzICs9IDE7XG4gICAgICAgIH0gZWxzZSBpZiAoY29kZSA8IDB4ODAwKSB7XG4gICAgICAgICAgYnl0ZXMgKz0gMjtcbiAgICAgICAgfSBlbHNlIGlmIChjb2RlIDwgMHhkODAwIHx8IGNvZGUgPj0gMHhlMDAwKSB7XG4gICAgICAgICAgYnl0ZXMgKz0gMztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb2RlID0gMHgxMDAwMCArICgoKGNvZGUgJiAweDNmZikgPDwgMTApIHwgKHN0ci5jaGFyQ29kZUF0KCsraSkgJiAweDNmZikpO1xuICAgICAgICAgIGJ5dGVzICs9IDQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgYnl0ZXMgKz0gdGhpcy5lbmNvZGUoYnl0ZXMgKiA4KTtcbiAgICB0aGlzLnVwZGF0ZShzdHIpO1xuICAgIHJldHVybiBieXRlcztcbiAgfTtcblxuICBLZWNjYWsucHJvdG90eXBlLmJ5dGVwYWQgPSBmdW5jdGlvbiAoc3Rycywgdykge1xuICAgIHZhciBieXRlcyA9IHRoaXMuZW5jb2RlKHcpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3Rycy5sZW5ndGg7ICsraSkge1xuICAgICAgYnl0ZXMgKz0gdGhpcy5lbmNvZGVTdHJpbmcoc3Ryc1tpXSk7XG4gICAgfVxuICAgIHZhciBwYWRkaW5nQnl0ZXMgPSB3IC0gYnl0ZXMgJSB3O1xuICAgIHZhciB6ZXJvcyA9IFtdO1xuICAgIHplcm9zLmxlbmd0aCA9IHBhZGRpbmdCeXRlcztcbiAgICB0aGlzLnVwZGF0ZSh6ZXJvcyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgS2VjY2FrLnByb3RvdHlwZS5maW5hbGl6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5maW5hbGl6ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5maW5hbGl6ZWQgPSB0cnVlO1xuICAgIHZhciBibG9ja3MgPSB0aGlzLmJsb2NrcywgaSA9IHRoaXMubGFzdEJ5dGVJbmRleCwgYmxvY2tDb3VudCA9IHRoaXMuYmxvY2tDb3VudCwgcyA9IHRoaXMucztcbiAgICBibG9ja3NbaSA+PiAyXSB8PSB0aGlzLnBhZGRpbmdbaSAmIDNdO1xuICAgIGlmICh0aGlzLmxhc3RCeXRlSW5kZXggPT09IHRoaXMuYnl0ZUNvdW50KSB7XG4gICAgICBibG9ja3NbMF0gPSBibG9ja3NbYmxvY2tDb3VudF07XG4gICAgICBmb3IgKGkgPSAxOyBpIDwgYmxvY2tDb3VudCArIDE7ICsraSkge1xuICAgICAgICBibG9ja3NbaV0gPSAwO1xuICAgICAgfVxuICAgIH1cbiAgICBibG9ja3NbYmxvY2tDb3VudCAtIDFdIHw9IDB4ODAwMDAwMDA7XG4gICAgZm9yIChpID0gMDsgaSA8IGJsb2NrQ291bnQ7ICsraSkge1xuICAgICAgc1tpXSBePSBibG9ja3NbaV07XG4gICAgfVxuICAgIGYocyk7XG4gIH07XG5cbiAgS2VjY2FrLnByb3RvdHlwZS50b1N0cmluZyA9IEtlY2Nhay5wcm90b3R5cGUuaGV4ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZmluYWxpemUoKTtcblxuICAgIHZhciBibG9ja0NvdW50ID0gdGhpcy5ibG9ja0NvdW50LCBzID0gdGhpcy5zLCBvdXRwdXRCbG9ja3MgPSB0aGlzLm91dHB1dEJsb2NrcyxcbiAgICAgIGV4dHJhQnl0ZXMgPSB0aGlzLmV4dHJhQnl0ZXMsIGkgPSAwLCBqID0gMDtcbiAgICB2YXIgaGV4ID0gJycsIGJsb2NrO1xuICAgIHdoaWxlIChqIDwgb3V0cHV0QmxvY2tzKSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgYmxvY2tDb3VudCAmJiBqIDwgb3V0cHV0QmxvY2tzOyArK2ksICsraikge1xuICAgICAgICBibG9jayA9IHNbaV07XG4gICAgICAgIGhleCArPSBIRVhfQ0hBUlNbKGJsb2NrID4+IDQpICYgMHgwRl0gKyBIRVhfQ0hBUlNbYmxvY2sgJiAweDBGXSArXG4gICAgICAgICAgSEVYX0NIQVJTWyhibG9jayA+PiAxMikgJiAweDBGXSArIEhFWF9DSEFSU1soYmxvY2sgPj4gOCkgJiAweDBGXSArXG4gICAgICAgICAgSEVYX0NIQVJTWyhibG9jayA+PiAyMCkgJiAweDBGXSArIEhFWF9DSEFSU1soYmxvY2sgPj4gMTYpICYgMHgwRl0gK1xuICAgICAgICAgIEhFWF9DSEFSU1soYmxvY2sgPj4gMjgpICYgMHgwRl0gKyBIRVhfQ0hBUlNbKGJsb2NrID4+IDI0KSAmIDB4MEZdO1xuICAgICAgfVxuICAgICAgaWYgKGogJSBibG9ja0NvdW50ID09PSAwKSB7XG4gICAgICAgIGYocyk7XG4gICAgICAgIGkgPSAwO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZXh0cmFCeXRlcykge1xuICAgICAgYmxvY2sgPSBzW2ldO1xuICAgICAgaGV4ICs9IEhFWF9DSEFSU1soYmxvY2sgPj4gNCkgJiAweDBGXSArIEhFWF9DSEFSU1tibG9jayAmIDB4MEZdO1xuICAgICAgaWYgKGV4dHJhQnl0ZXMgPiAxKSB7XG4gICAgICAgIGhleCArPSBIRVhfQ0hBUlNbKGJsb2NrID4+IDEyKSAmIDB4MEZdICsgSEVYX0NIQVJTWyhibG9jayA+PiA4KSAmIDB4MEZdO1xuICAgICAgfVxuICAgICAgaWYgKGV4dHJhQnl0ZXMgPiAyKSB7XG4gICAgICAgIGhleCArPSBIRVhfQ0hBUlNbKGJsb2NrID4+IDIwKSAmIDB4MEZdICsgSEVYX0NIQVJTWyhibG9jayA+PiAxNikgJiAweDBGXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGhleDtcbiAgfTtcblxuICBLZWNjYWsucHJvdG90eXBlLmFycmF5QnVmZmVyID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZmluYWxpemUoKTtcblxuICAgIHZhciBibG9ja0NvdW50ID0gdGhpcy5ibG9ja0NvdW50LCBzID0gdGhpcy5zLCBvdXRwdXRCbG9ja3MgPSB0aGlzLm91dHB1dEJsb2NrcyxcbiAgICAgIGV4dHJhQnl0ZXMgPSB0aGlzLmV4dHJhQnl0ZXMsIGkgPSAwLCBqID0gMDtcbiAgICB2YXIgYnl0ZXMgPSB0aGlzLm91dHB1dEJpdHMgPj4gMztcbiAgICB2YXIgYnVmZmVyO1xuICAgIGlmIChleHRyYUJ5dGVzKSB7XG4gICAgICBidWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoKG91dHB1dEJsb2NrcyArIDEpIDw8IDIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBidWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoYnl0ZXMpO1xuICAgIH1cbiAgICB2YXIgYXJyYXkgPSBuZXcgVWludDMyQXJyYXkoYnVmZmVyKTtcbiAgICB3aGlsZSAoaiA8IG91dHB1dEJsb2Nrcykge1xuICAgICAgZm9yIChpID0gMDsgaSA8IGJsb2NrQ291bnQgJiYgaiA8IG91dHB1dEJsb2NrczsgKytpLCArK2opIHtcbiAgICAgICAgYXJyYXlbal0gPSBzW2ldO1xuICAgICAgfVxuICAgICAgaWYgKGogJSBibG9ja0NvdW50ID09PSAwKSB7XG4gICAgICAgIGYocyk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChleHRyYUJ5dGVzKSB7XG4gICAgICBhcnJheVtpXSA9IHNbaV07XG4gICAgICBidWZmZXIgPSBidWZmZXIuc2xpY2UoMCwgYnl0ZXMpO1xuICAgIH1cbiAgICByZXR1cm4gYnVmZmVyO1xuICB9O1xuXG4gIEtlY2Nhay5wcm90b3R5cGUuYnVmZmVyID0gS2VjY2FrLnByb3RvdHlwZS5hcnJheUJ1ZmZlcjtcblxuICBLZWNjYWsucHJvdG90eXBlLmRpZ2VzdCA9IEtlY2Nhay5wcm90b3R5cGUuYXJyYXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5maW5hbGl6ZSgpO1xuXG4gICAgdmFyIGJsb2NrQ291bnQgPSB0aGlzLmJsb2NrQ291bnQsIHMgPSB0aGlzLnMsIG91dHB1dEJsb2NrcyA9IHRoaXMub3V0cHV0QmxvY2tzLFxuICAgICAgZXh0cmFCeXRlcyA9IHRoaXMuZXh0cmFCeXRlcywgaSA9IDAsIGogPSAwO1xuICAgIHZhciBhcnJheSA9IFtdLCBvZmZzZXQsIGJsb2NrO1xuICAgIHdoaWxlIChqIDwgb3V0cHV0QmxvY2tzKSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgYmxvY2tDb3VudCAmJiBqIDwgb3V0cHV0QmxvY2tzOyArK2ksICsraikge1xuICAgICAgICBvZmZzZXQgPSBqIDw8IDI7XG4gICAgICAgIGJsb2NrID0gc1tpXTtcbiAgICAgICAgYXJyYXlbb2Zmc2V0XSA9IGJsb2NrICYgMHhGRjtcbiAgICAgICAgYXJyYXlbb2Zmc2V0ICsgMV0gPSAoYmxvY2sgPj4gOCkgJiAweEZGO1xuICAgICAgICBhcnJheVtvZmZzZXQgKyAyXSA9IChibG9jayA+PiAxNikgJiAweEZGO1xuICAgICAgICBhcnJheVtvZmZzZXQgKyAzXSA9IChibG9jayA+PiAyNCkgJiAweEZGO1xuICAgICAgfVxuICAgICAgaWYgKGogJSBibG9ja0NvdW50ID09PSAwKSB7XG4gICAgICAgIGYocyk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChleHRyYUJ5dGVzKSB7XG4gICAgICBvZmZzZXQgPSBqIDw8IDI7XG4gICAgICBibG9jayA9IHNbaV07XG4gICAgICBhcnJheVtvZmZzZXRdID0gYmxvY2sgJiAweEZGO1xuICAgICAgaWYgKGV4dHJhQnl0ZXMgPiAxKSB7XG4gICAgICAgIGFycmF5W29mZnNldCArIDFdID0gKGJsb2NrID4+IDgpICYgMHhGRjtcbiAgICAgIH1cbiAgICAgIGlmIChleHRyYUJ5dGVzID4gMikge1xuICAgICAgICBhcnJheVtvZmZzZXQgKyAyXSA9IChibG9jayA+PiAxNikgJiAweEZGO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXJyYXk7XG4gIH07XG5cbiAgZnVuY3Rpb24gS21hYyhiaXRzLCBwYWRkaW5nLCBvdXRwdXRCaXRzKSB7XG4gICAgS2VjY2FrLmNhbGwodGhpcywgYml0cywgcGFkZGluZywgb3V0cHV0Qml0cyk7XG4gIH1cblxuICBLbWFjLnByb3RvdHlwZSA9IG5ldyBLZWNjYWsoKTtcblxuICBLbWFjLnByb3RvdHlwZS5maW5hbGl6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmVuY29kZSh0aGlzLm91dHB1dEJpdHMsIHRydWUpO1xuICAgIHJldHVybiBLZWNjYWsucHJvdG90eXBlLmZpbmFsaXplLmNhbGwodGhpcyk7XG4gIH07XG5cbiAgdmFyIGYgPSBmdW5jdGlvbiAocykge1xuICAgIHZhciBoLCBsLCBuLCBjMCwgYzEsIGMyLCBjMywgYzQsIGM1LCBjNiwgYzcsIGM4LCBjOSxcbiAgICAgIGIwLCBiMSwgYjIsIGIzLCBiNCwgYjUsIGI2LCBiNywgYjgsIGI5LCBiMTAsIGIxMSwgYjEyLCBiMTMsIGIxNCwgYjE1LCBiMTYsIGIxNyxcbiAgICAgIGIxOCwgYjE5LCBiMjAsIGIyMSwgYjIyLCBiMjMsIGIyNCwgYjI1LCBiMjYsIGIyNywgYjI4LCBiMjksIGIzMCwgYjMxLCBiMzIsIGIzMyxcbiAgICAgIGIzNCwgYjM1LCBiMzYsIGIzNywgYjM4LCBiMzksIGI0MCwgYjQxLCBiNDIsIGI0MywgYjQ0LCBiNDUsIGI0NiwgYjQ3LCBiNDgsIGI0OTtcbiAgICBmb3IgKG4gPSAwOyBuIDwgNDg7IG4gKz0gMikge1xuICAgICAgYzAgPSBzWzBdIF4gc1sxMF0gXiBzWzIwXSBeIHNbMzBdIF4gc1s0MF07XG4gICAgICBjMSA9IHNbMV0gXiBzWzExXSBeIHNbMjFdIF4gc1szMV0gXiBzWzQxXTtcbiAgICAgIGMyID0gc1syXSBeIHNbMTJdIF4gc1syMl0gXiBzWzMyXSBeIHNbNDJdO1xuICAgICAgYzMgPSBzWzNdIF4gc1sxM10gXiBzWzIzXSBeIHNbMzNdIF4gc1s0M107XG4gICAgICBjNCA9IHNbNF0gXiBzWzE0XSBeIHNbMjRdIF4gc1szNF0gXiBzWzQ0XTtcbiAgICAgIGM1ID0gc1s1XSBeIHNbMTVdIF4gc1syNV0gXiBzWzM1XSBeIHNbNDVdO1xuICAgICAgYzYgPSBzWzZdIF4gc1sxNl0gXiBzWzI2XSBeIHNbMzZdIF4gc1s0Nl07XG4gICAgICBjNyA9IHNbN10gXiBzWzE3XSBeIHNbMjddIF4gc1szN10gXiBzWzQ3XTtcbiAgICAgIGM4ID0gc1s4XSBeIHNbMThdIF4gc1syOF0gXiBzWzM4XSBeIHNbNDhdO1xuICAgICAgYzkgPSBzWzldIF4gc1sxOV0gXiBzWzI5XSBeIHNbMzldIF4gc1s0OV07XG5cbiAgICAgIGggPSBjOCBeICgoYzIgPDwgMSkgfCAoYzMgPj4+IDMxKSk7XG4gICAgICBsID0gYzkgXiAoKGMzIDw8IDEpIHwgKGMyID4+PiAzMSkpO1xuICAgICAgc1swXSBePSBoO1xuICAgICAgc1sxXSBePSBsO1xuICAgICAgc1sxMF0gXj0gaDtcbiAgICAgIHNbMTFdIF49IGw7XG4gICAgICBzWzIwXSBePSBoO1xuICAgICAgc1syMV0gXj0gbDtcbiAgICAgIHNbMzBdIF49IGg7XG4gICAgICBzWzMxXSBePSBsO1xuICAgICAgc1s0MF0gXj0gaDtcbiAgICAgIHNbNDFdIF49IGw7XG4gICAgICBoID0gYzAgXiAoKGM0IDw8IDEpIHwgKGM1ID4+PiAzMSkpO1xuICAgICAgbCA9IGMxIF4gKChjNSA8PCAxKSB8IChjNCA+Pj4gMzEpKTtcbiAgICAgIHNbMl0gXj0gaDtcbiAgICAgIHNbM10gXj0gbDtcbiAgICAgIHNbMTJdIF49IGg7XG4gICAgICBzWzEzXSBePSBsO1xuICAgICAgc1syMl0gXj0gaDtcbiAgICAgIHNbMjNdIF49IGw7XG4gICAgICBzWzMyXSBePSBoO1xuICAgICAgc1szM10gXj0gbDtcbiAgICAgIHNbNDJdIF49IGg7XG4gICAgICBzWzQzXSBePSBsO1xuICAgICAgaCA9IGMyIF4gKChjNiA8PCAxKSB8IChjNyA+Pj4gMzEpKTtcbiAgICAgIGwgPSBjMyBeICgoYzcgPDwgMSkgfCAoYzYgPj4+IDMxKSk7XG4gICAgICBzWzRdIF49IGg7XG4gICAgICBzWzVdIF49IGw7XG4gICAgICBzWzE0XSBePSBoO1xuICAgICAgc1sxNV0gXj0gbDtcbiAgICAgIHNbMjRdIF49IGg7XG4gICAgICBzWzI1XSBePSBsO1xuICAgICAgc1szNF0gXj0gaDtcbiAgICAgIHNbMzVdIF49IGw7XG4gICAgICBzWzQ0XSBePSBoO1xuICAgICAgc1s0NV0gXj0gbDtcbiAgICAgIGggPSBjNCBeICgoYzggPDwgMSkgfCAoYzkgPj4+IDMxKSk7XG4gICAgICBsID0gYzUgXiAoKGM5IDw8IDEpIHwgKGM4ID4+PiAzMSkpO1xuICAgICAgc1s2XSBePSBoO1xuICAgICAgc1s3XSBePSBsO1xuICAgICAgc1sxNl0gXj0gaDtcbiAgICAgIHNbMTddIF49IGw7XG4gICAgICBzWzI2XSBePSBoO1xuICAgICAgc1syN10gXj0gbDtcbiAgICAgIHNbMzZdIF49IGg7XG4gICAgICBzWzM3XSBePSBsO1xuICAgICAgc1s0Nl0gXj0gaDtcbiAgICAgIHNbNDddIF49IGw7XG4gICAgICBoID0gYzYgXiAoKGMwIDw8IDEpIHwgKGMxID4+PiAzMSkpO1xuICAgICAgbCA9IGM3IF4gKChjMSA8PCAxKSB8IChjMCA+Pj4gMzEpKTtcbiAgICAgIHNbOF0gXj0gaDtcbiAgICAgIHNbOV0gXj0gbDtcbiAgICAgIHNbMThdIF49IGg7XG4gICAgICBzWzE5XSBePSBsO1xuICAgICAgc1syOF0gXj0gaDtcbiAgICAgIHNbMjldIF49IGw7XG4gICAgICBzWzM4XSBePSBoO1xuICAgICAgc1szOV0gXj0gbDtcbiAgICAgIHNbNDhdIF49IGg7XG4gICAgICBzWzQ5XSBePSBsO1xuXG4gICAgICBiMCA9IHNbMF07XG4gICAgICBiMSA9IHNbMV07XG4gICAgICBiMzIgPSAoc1sxMV0gPDwgNCkgfCAoc1sxMF0gPj4+IDI4KTtcbiAgICAgIGIzMyA9IChzWzEwXSA8PCA0KSB8IChzWzExXSA+Pj4gMjgpO1xuICAgICAgYjE0ID0gKHNbMjBdIDw8IDMpIHwgKHNbMjFdID4+PiAyOSk7XG4gICAgICBiMTUgPSAoc1syMV0gPDwgMykgfCAoc1syMF0gPj4+IDI5KTtcbiAgICAgIGI0NiA9IChzWzMxXSA8PCA5KSB8IChzWzMwXSA+Pj4gMjMpO1xuICAgICAgYjQ3ID0gKHNbMzBdIDw8IDkpIHwgKHNbMzFdID4+PiAyMyk7XG4gICAgICBiMjggPSAoc1s0MF0gPDwgMTgpIHwgKHNbNDFdID4+PiAxNCk7XG4gICAgICBiMjkgPSAoc1s0MV0gPDwgMTgpIHwgKHNbNDBdID4+PiAxNCk7XG4gICAgICBiMjAgPSAoc1syXSA8PCAxKSB8IChzWzNdID4+PiAzMSk7XG4gICAgICBiMjEgPSAoc1szXSA8PCAxKSB8IChzWzJdID4+PiAzMSk7XG4gICAgICBiMiA9IChzWzEzXSA8PCAxMikgfCAoc1sxMl0gPj4+IDIwKTtcbiAgICAgIGIzID0gKHNbMTJdIDw8IDEyKSB8IChzWzEzXSA+Pj4gMjApO1xuICAgICAgYjM0ID0gKHNbMjJdIDw8IDEwKSB8IChzWzIzXSA+Pj4gMjIpO1xuICAgICAgYjM1ID0gKHNbMjNdIDw8IDEwKSB8IChzWzIyXSA+Pj4gMjIpO1xuICAgICAgYjE2ID0gKHNbMzNdIDw8IDEzKSB8IChzWzMyXSA+Pj4gMTkpO1xuICAgICAgYjE3ID0gKHNbMzJdIDw8IDEzKSB8IChzWzMzXSA+Pj4gMTkpO1xuICAgICAgYjQ4ID0gKHNbNDJdIDw8IDIpIHwgKHNbNDNdID4+PiAzMCk7XG4gICAgICBiNDkgPSAoc1s0M10gPDwgMikgfCAoc1s0Ml0gPj4+IDMwKTtcbiAgICAgIGI0MCA9IChzWzVdIDw8IDMwKSB8IChzWzRdID4+PiAyKTtcbiAgICAgIGI0MSA9IChzWzRdIDw8IDMwKSB8IChzWzVdID4+PiAyKTtcbiAgICAgIGIyMiA9IChzWzE0XSA8PCA2KSB8IChzWzE1XSA+Pj4gMjYpO1xuICAgICAgYjIzID0gKHNbMTVdIDw8IDYpIHwgKHNbMTRdID4+PiAyNik7XG4gICAgICBiNCA9IChzWzI1XSA8PCAxMSkgfCAoc1syNF0gPj4+IDIxKTtcbiAgICAgIGI1ID0gKHNbMjRdIDw8IDExKSB8IChzWzI1XSA+Pj4gMjEpO1xuICAgICAgYjM2ID0gKHNbMzRdIDw8IDE1KSB8IChzWzM1XSA+Pj4gMTcpO1xuICAgICAgYjM3ID0gKHNbMzVdIDw8IDE1KSB8IChzWzM0XSA+Pj4gMTcpO1xuICAgICAgYjE4ID0gKHNbNDVdIDw8IDI5KSB8IChzWzQ0XSA+Pj4gMyk7XG4gICAgICBiMTkgPSAoc1s0NF0gPDwgMjkpIHwgKHNbNDVdID4+PiAzKTtcbiAgICAgIGIxMCA9IChzWzZdIDw8IDI4KSB8IChzWzddID4+PiA0KTtcbiAgICAgIGIxMSA9IChzWzddIDw8IDI4KSB8IChzWzZdID4+PiA0KTtcbiAgICAgIGI0MiA9IChzWzE3XSA8PCAyMykgfCAoc1sxNl0gPj4+IDkpO1xuICAgICAgYjQzID0gKHNbMTZdIDw8IDIzKSB8IChzWzE3XSA+Pj4gOSk7XG4gICAgICBiMjQgPSAoc1syNl0gPDwgMjUpIHwgKHNbMjddID4+PiA3KTtcbiAgICAgIGIyNSA9IChzWzI3XSA8PCAyNSkgfCAoc1syNl0gPj4+IDcpO1xuICAgICAgYjYgPSAoc1szNl0gPDwgMjEpIHwgKHNbMzddID4+PiAxMSk7XG4gICAgICBiNyA9IChzWzM3XSA8PCAyMSkgfCAoc1szNl0gPj4+IDExKTtcbiAgICAgIGIzOCA9IChzWzQ3XSA8PCAyNCkgfCAoc1s0Nl0gPj4+IDgpO1xuICAgICAgYjM5ID0gKHNbNDZdIDw8IDI0KSB8IChzWzQ3XSA+Pj4gOCk7XG4gICAgICBiMzAgPSAoc1s4XSA8PCAyNykgfCAoc1s5XSA+Pj4gNSk7XG4gICAgICBiMzEgPSAoc1s5XSA8PCAyNykgfCAoc1s4XSA+Pj4gNSk7XG4gICAgICBiMTIgPSAoc1sxOF0gPDwgMjApIHwgKHNbMTldID4+PiAxMik7XG4gICAgICBiMTMgPSAoc1sxOV0gPDwgMjApIHwgKHNbMThdID4+PiAxMik7XG4gICAgICBiNDQgPSAoc1syOV0gPDwgNykgfCAoc1syOF0gPj4+IDI1KTtcbiAgICAgIGI0NSA9IChzWzI4XSA8PCA3KSB8IChzWzI5XSA+Pj4gMjUpO1xuICAgICAgYjI2ID0gKHNbMzhdIDw8IDgpIHwgKHNbMzldID4+PiAyNCk7XG4gICAgICBiMjcgPSAoc1szOV0gPDwgOCkgfCAoc1szOF0gPj4+IDI0KTtcbiAgICAgIGI4ID0gKHNbNDhdIDw8IDE0KSB8IChzWzQ5XSA+Pj4gMTgpO1xuICAgICAgYjkgPSAoc1s0OV0gPDwgMTQpIHwgKHNbNDhdID4+PiAxOCk7XG5cbiAgICAgIHNbMF0gPSBiMCBeICh+YjIgJiBiNCk7XG4gICAgICBzWzFdID0gYjEgXiAofmIzICYgYjUpO1xuICAgICAgc1sxMF0gPSBiMTAgXiAofmIxMiAmIGIxNCk7XG4gICAgICBzWzExXSA9IGIxMSBeICh+YjEzICYgYjE1KTtcbiAgICAgIHNbMjBdID0gYjIwIF4gKH5iMjIgJiBiMjQpO1xuICAgICAgc1syMV0gPSBiMjEgXiAofmIyMyAmIGIyNSk7XG4gICAgICBzWzMwXSA9IGIzMCBeICh+YjMyICYgYjM0KTtcbiAgICAgIHNbMzFdID0gYjMxIF4gKH5iMzMgJiBiMzUpO1xuICAgICAgc1s0MF0gPSBiNDAgXiAofmI0MiAmIGI0NCk7XG4gICAgICBzWzQxXSA9IGI0MSBeICh+YjQzICYgYjQ1KTtcbiAgICAgIHNbMl0gPSBiMiBeICh+YjQgJiBiNik7XG4gICAgICBzWzNdID0gYjMgXiAofmI1ICYgYjcpO1xuICAgICAgc1sxMl0gPSBiMTIgXiAofmIxNCAmIGIxNik7XG4gICAgICBzWzEzXSA9IGIxMyBeICh+YjE1ICYgYjE3KTtcbiAgICAgIHNbMjJdID0gYjIyIF4gKH5iMjQgJiBiMjYpO1xuICAgICAgc1syM10gPSBiMjMgXiAofmIyNSAmIGIyNyk7XG4gICAgICBzWzMyXSA9IGIzMiBeICh+YjM0ICYgYjM2KTtcbiAgICAgIHNbMzNdID0gYjMzIF4gKH5iMzUgJiBiMzcpO1xuICAgICAgc1s0Ml0gPSBiNDIgXiAofmI0NCAmIGI0Nik7XG4gICAgICBzWzQzXSA9IGI0MyBeICh+YjQ1ICYgYjQ3KTtcbiAgICAgIHNbNF0gPSBiNCBeICh+YjYgJiBiOCk7XG4gICAgICBzWzVdID0gYjUgXiAofmI3ICYgYjkpO1xuICAgICAgc1sxNF0gPSBiMTQgXiAofmIxNiAmIGIxOCk7XG4gICAgICBzWzE1XSA9IGIxNSBeICh+YjE3ICYgYjE5KTtcbiAgICAgIHNbMjRdID0gYjI0IF4gKH5iMjYgJiBiMjgpO1xuICAgICAgc1syNV0gPSBiMjUgXiAofmIyNyAmIGIyOSk7XG4gICAgICBzWzM0XSA9IGIzNCBeICh+YjM2ICYgYjM4KTtcbiAgICAgIHNbMzVdID0gYjM1IF4gKH5iMzcgJiBiMzkpO1xuICAgICAgc1s0NF0gPSBiNDQgXiAofmI0NiAmIGI0OCk7XG4gICAgICBzWzQ1XSA9IGI0NSBeICh+YjQ3ICYgYjQ5KTtcbiAgICAgIHNbNl0gPSBiNiBeICh+YjggJiBiMCk7XG4gICAgICBzWzddID0gYjcgXiAofmI5ICYgYjEpO1xuICAgICAgc1sxNl0gPSBiMTYgXiAofmIxOCAmIGIxMCk7XG4gICAgICBzWzE3XSA9IGIxNyBeICh+YjE5ICYgYjExKTtcbiAgICAgIHNbMjZdID0gYjI2IF4gKH5iMjggJiBiMjApO1xuICAgICAgc1syN10gPSBiMjcgXiAofmIyOSAmIGIyMSk7XG4gICAgICBzWzM2XSA9IGIzNiBeICh+YjM4ICYgYjMwKTtcbiAgICAgIHNbMzddID0gYjM3IF4gKH5iMzkgJiBiMzEpO1xuICAgICAgc1s0Nl0gPSBiNDYgXiAofmI0OCAmIGI0MCk7XG4gICAgICBzWzQ3XSA9IGI0NyBeICh+YjQ5ICYgYjQxKTtcbiAgICAgIHNbOF0gPSBiOCBeICh+YjAgJiBiMik7XG4gICAgICBzWzldID0gYjkgXiAofmIxICYgYjMpO1xuICAgICAgc1sxOF0gPSBiMTggXiAofmIxMCAmIGIxMik7XG4gICAgICBzWzE5XSA9IGIxOSBeICh+YjExICYgYjEzKTtcbiAgICAgIHNbMjhdID0gYjI4IF4gKH5iMjAgJiBiMjIpO1xuICAgICAgc1syOV0gPSBiMjkgXiAofmIyMSAmIGIyMyk7XG4gICAgICBzWzM4XSA9IGIzOCBeICh+YjMwICYgYjMyKTtcbiAgICAgIHNbMzldID0gYjM5IF4gKH5iMzEgJiBiMzMpO1xuICAgICAgc1s0OF0gPSBiNDggXiAofmI0MCAmIGI0Mik7XG4gICAgICBzWzQ5XSA9IGI0OSBeICh+YjQxICYgYjQzKTtcblxuICAgICAgc1swXSBePSBSQ1tuXTtcbiAgICAgIHNbMV0gXj0gUkNbbiArIDFdO1xuICAgIH1cbiAgfTtcblxuICBpZiAoQ09NTU9OX0pTKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBtZXRob2RzO1xuICB9IGVsc2Uge1xuICAgIGZvciAoaSA9IDA7IGkgPCBtZXRob2ROYW1lcy5sZW5ndGg7ICsraSkge1xuICAgICAgcm9vdFttZXRob2ROYW1lc1tpXV0gPSBtZXRob2RzW21ldGhvZE5hbWVzW2ldXTtcbiAgICB9XG4gICAgaWYgKEFNRCkge1xuICAgICAgZGVmaW5lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG1ldGhvZHM7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn0pKCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliJykocmVxdWlyZSgnLi9saWIvZWxsaXB0aWMnKSlcbiIsImNvbnN0IEVDID0gcmVxdWlyZSgnZWxsaXB0aWMnKS5lY1xuXG5jb25zdCBlYyA9IG5ldyBFQygnc2VjcDI1NmsxJylcbmNvbnN0IGVjcGFyYW1zID0gZWMuY3VydmVcblxuLy8gSGFjaywgd2UgY2FuIG5vdCB1c2UgYm4uanNANSwgd2hpbGUgZWxsaXB0aWMgdXNlcyBibi5qc0A0XG4vLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2luZHV0bnkvZWxsaXB0aWMvaXNzdWVzLzE5MSNpc3N1ZWNvbW1lbnQtNTY5ODg4NzU4XG5jb25zdCBCTiA9IGVjcGFyYW1zLm4uY29uc3RydWN0b3JcblxuZnVuY3Rpb24gbG9hZENvbXByZXNzZWRQdWJsaWNLZXkgKGZpcnN0LCB4YnVmKSB7XG4gIGxldCB4ID0gbmV3IEJOKHhidWYpXG5cbiAgLy8gb3ZlcmZsb3dcbiAgaWYgKHguY21wKGVjcGFyYW1zLnApID49IDApIHJldHVybiBudWxsXG4gIHggPSB4LnRvUmVkKGVjcGFyYW1zLnJlZClcblxuICAvLyBjb21wdXRlIGNvcnJlc3BvbmRpbmcgWVxuICBsZXQgeSA9IHgucmVkU3FyKCkucmVkSU11bCh4KS5yZWRJQWRkKGVjcGFyYW1zLmIpLnJlZFNxcnQoKVxuICBpZiAoKGZpcnN0ID09PSAweDAzKSAhPT0geS5pc09kZCgpKSB5ID0geS5yZWROZWcoKVxuXG4gIHJldHVybiBlYy5rZXlQYWlyKHsgcHViOiB7IHg6IHgsIHk6IHkgfSB9KVxufVxuXG5mdW5jdGlvbiBsb2FkVW5jb21wcmVzc2VkUHVibGljS2V5IChmaXJzdCwgeGJ1ZiwgeWJ1Zikge1xuICBsZXQgeCA9IG5ldyBCTih4YnVmKVxuICBsZXQgeSA9IG5ldyBCTih5YnVmKVxuXG4gIC8vIG92ZXJmbG93XG4gIGlmICh4LmNtcChlY3BhcmFtcy5wKSA+PSAwIHx8IHkuY21wKGVjcGFyYW1zLnApID49IDApIHJldHVybiBudWxsXG5cbiAgeCA9IHgudG9SZWQoZWNwYXJhbXMucmVkKVxuICB5ID0geS50b1JlZChlY3BhcmFtcy5yZWQpXG5cbiAgLy8gaXMgb2RkIGZsYWdcbiAgaWYgKChmaXJzdCA9PT0gMHgwNiB8fCBmaXJzdCA9PT0gMHgwNykgJiYgeS5pc09kZCgpICE9PSAoZmlyc3QgPT09IDB4MDcpKSByZXR1cm4gbnVsbFxuXG4gIC8vIHgqeCp4ICsgYiA9IHkqeVxuICBjb25zdCB4MyA9IHgucmVkU3FyKCkucmVkSU11bCh4KVxuICBpZiAoIXkucmVkU3FyKCkucmVkSVN1Yih4My5yZWRJQWRkKGVjcGFyYW1zLmIpKS5pc1plcm8oKSkgcmV0dXJuIG51bGxcblxuICByZXR1cm4gZWMua2V5UGFpcih7IHB1YjogeyB4OiB4LCB5OiB5IH0gfSlcbn1cblxuZnVuY3Rpb24gbG9hZFB1YmxpY0tleSAocHVia2V5KSB7XG4gIC8vIGxlbmd0aCBzaG91bGQgYmUgdmFsaWRhdGVkIGluIGludGVyZmFjZVxuICBjb25zdCBmaXJzdCA9IHB1YmtleVswXVxuICBzd2l0Y2ggKGZpcnN0KSB7XG4gICAgY2FzZSAweDAyOlxuICAgIGNhc2UgMHgwMzpcbiAgICAgIGlmIChwdWJrZXkubGVuZ3RoICE9PSAzMykgcmV0dXJuIG51bGxcbiAgICAgIHJldHVybiBsb2FkQ29tcHJlc3NlZFB1YmxpY0tleShmaXJzdCwgcHVia2V5LnN1YmFycmF5KDEsIDMzKSlcbiAgICBjYXNlIDB4MDQ6XG4gICAgY2FzZSAweDA2OlxuICAgIGNhc2UgMHgwNzpcbiAgICAgIGlmIChwdWJrZXkubGVuZ3RoICE9PSA2NSkgcmV0dXJuIG51bGxcbiAgICAgIHJldHVybiBsb2FkVW5jb21wcmVzc2VkUHVibGljS2V5KGZpcnN0LCBwdWJrZXkuc3ViYXJyYXkoMSwgMzMpLCBwdWJrZXkuc3ViYXJyYXkoMzMsIDY1KSlcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG5mdW5jdGlvbiBzYXZlUHVibGljS2V5IChvdXRwdXQsIHBvaW50KSB7XG4gIGNvbnN0IHB1YmtleSA9IHBvaW50LmVuY29kZShudWxsLCBvdXRwdXQubGVuZ3RoID09PSAzMylcbiAgLy8gTG9vcCBzaG91bGQgYmUgZmFzdGVyIGJlY2F1c2Ugd2UgZG8gbm90IG5lZWQgY3JlYXRlIGV4dHJhIFVpbnQ4QXJyYXlcbiAgLy8gb3V0cHV0LnNldChuZXcgVWludDhBcnJheShwdWJrZXkpKVxuICBmb3IgKGxldCBpID0gMDsgaSA8IG91dHB1dC5sZW5ndGg7ICsraSkgb3V0cHV0W2ldID0gcHVia2V5W2ldXG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjb250ZXh0UmFuZG9taXplICgpIHtcbiAgICByZXR1cm4gMFxuICB9LFxuXG4gIHByaXZhdGVLZXlWZXJpZnkgKHNlY2tleSkge1xuICAgIGNvbnN0IGJuID0gbmV3IEJOKHNlY2tleSlcbiAgICByZXR1cm4gYm4uY21wKGVjcGFyYW1zLm4pIDwgMCAmJiAhYm4uaXNaZXJvKCkgPyAwIDogMVxuICB9LFxuXG4gIHByaXZhdGVLZXlOZWdhdGUgKHNlY2tleSkge1xuICAgIGNvbnN0IGJuID0gbmV3IEJOKHNlY2tleSlcbiAgICBjb25zdCBuZWdhdGUgPSBlY3BhcmFtcy5uLnN1YihibikudW1vZChlY3BhcmFtcy5uKS50b0FycmF5TGlrZShVaW50OEFycmF5LCAnYmUnLCAzMilcbiAgICBzZWNrZXkuc2V0KG5lZ2F0ZSlcbiAgICByZXR1cm4gMFxuICB9LFxuXG4gIHByaXZhdGVLZXlUd2Vha0FkZCAoc2Vja2V5LCB0d2Vhaykge1xuICAgIGNvbnN0IGJuID0gbmV3IEJOKHR3ZWFrKVxuICAgIGlmIChibi5jbXAoZWNwYXJhbXMubikgPj0gMCkgcmV0dXJuIDFcblxuICAgIGJuLmlhZGQobmV3IEJOKHNlY2tleSkpXG4gICAgaWYgKGJuLmNtcChlY3BhcmFtcy5uKSA+PSAwKSBibi5pc3ViKGVjcGFyYW1zLm4pXG4gICAgaWYgKGJuLmlzWmVybygpKSByZXR1cm4gMVxuXG4gICAgY29uc3QgdHdlYWtlZCA9IGJuLnRvQXJyYXlMaWtlKFVpbnQ4QXJyYXksICdiZScsIDMyKVxuICAgIHNlY2tleS5zZXQodHdlYWtlZClcblxuICAgIHJldHVybiAwXG4gIH0sXG5cbiAgcHJpdmF0ZUtleVR3ZWFrTXVsIChzZWNrZXksIHR3ZWFrKSB7XG4gICAgbGV0IGJuID0gbmV3IEJOKHR3ZWFrKVxuICAgIGlmIChibi5jbXAoZWNwYXJhbXMubikgPj0gMCB8fCBibi5pc1plcm8oKSkgcmV0dXJuIDFcblxuICAgIGJuLmltdWwobmV3IEJOKHNlY2tleSkpXG4gICAgaWYgKGJuLmNtcChlY3BhcmFtcy5uKSA+PSAwKSBibiA9IGJuLnVtb2QoZWNwYXJhbXMubilcblxuICAgIGNvbnN0IHR3ZWFrZWQgPSBibi50b0FycmF5TGlrZShVaW50OEFycmF5LCAnYmUnLCAzMilcbiAgICBzZWNrZXkuc2V0KHR3ZWFrZWQpXG5cbiAgICByZXR1cm4gMFxuICB9LFxuXG4gIHB1YmxpY0tleVZlcmlmeSAocHVia2V5KSB7XG4gICAgY29uc3QgcGFpciA9IGxvYWRQdWJsaWNLZXkocHVia2V5KVxuICAgIHJldHVybiBwYWlyID09PSBudWxsID8gMSA6IDBcbiAgfSxcblxuICBwdWJsaWNLZXlDcmVhdGUgKG91dHB1dCwgc2Vja2V5KSB7XG4gICAgY29uc3QgYm4gPSBuZXcgQk4oc2Vja2V5KVxuICAgIGlmIChibi5jbXAoZWNwYXJhbXMubikgPj0gMCB8fCBibi5pc1plcm8oKSkgcmV0dXJuIDFcblxuICAgIGNvbnN0IHBvaW50ID0gZWMua2V5RnJvbVByaXZhdGUoc2Vja2V5KS5nZXRQdWJsaWMoKVxuICAgIHNhdmVQdWJsaWNLZXkob3V0cHV0LCBwb2ludClcblxuICAgIHJldHVybiAwXG4gIH0sXG5cbiAgcHVibGljS2V5Q29udmVydCAob3V0cHV0LCBwdWJrZXkpIHtcbiAgICBjb25zdCBwYWlyID0gbG9hZFB1YmxpY0tleShwdWJrZXkpXG4gICAgaWYgKHBhaXIgPT09IG51bGwpIHJldHVybiAxXG5cbiAgICBjb25zdCBwb2ludCA9IHBhaXIuZ2V0UHVibGljKClcbiAgICBzYXZlUHVibGljS2V5KG91dHB1dCwgcG9pbnQpXG5cbiAgICByZXR1cm4gMFxuICB9LFxuXG4gIHB1YmxpY0tleU5lZ2F0ZSAob3V0cHV0LCBwdWJrZXkpIHtcbiAgICBjb25zdCBwYWlyID0gbG9hZFB1YmxpY0tleShwdWJrZXkpXG4gICAgaWYgKHBhaXIgPT09IG51bGwpIHJldHVybiAxXG5cbiAgICBjb25zdCBwb2ludCA9IHBhaXIuZ2V0UHVibGljKClcbiAgICBwb2ludC55ID0gcG9pbnQueS5yZWROZWcoKVxuICAgIHNhdmVQdWJsaWNLZXkob3V0cHV0LCBwb2ludClcblxuICAgIHJldHVybiAwXG4gIH0sXG5cbiAgcHVibGljS2V5Q29tYmluZSAob3V0cHV0LCBwdWJrZXlzKSB7XG4gICAgY29uc3QgcGFpcnMgPSBuZXcgQXJyYXkocHVia2V5cy5sZW5ndGgpXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwdWJrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICBwYWlyc1tpXSA9IGxvYWRQdWJsaWNLZXkocHVia2V5c1tpXSlcbiAgICAgIGlmIChwYWlyc1tpXSA9PT0gbnVsbCkgcmV0dXJuIDFcbiAgICB9XG5cbiAgICBsZXQgcG9pbnQgPSBwYWlyc1swXS5nZXRQdWJsaWMoKVxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcGFpcnMubGVuZ3RoOyArK2kpIHBvaW50ID0gcG9pbnQuYWRkKHBhaXJzW2ldLnB1YilcbiAgICBpZiAocG9pbnQuaXNJbmZpbml0eSgpKSByZXR1cm4gMlxuXG4gICAgc2F2ZVB1YmxpY0tleShvdXRwdXQsIHBvaW50KVxuXG4gICAgcmV0dXJuIDBcbiAgfSxcblxuICBwdWJsaWNLZXlUd2Vha0FkZCAob3V0cHV0LCBwdWJrZXksIHR3ZWFrKSB7XG4gICAgY29uc3QgcGFpciA9IGxvYWRQdWJsaWNLZXkocHVia2V5KVxuICAgIGlmIChwYWlyID09PSBudWxsKSByZXR1cm4gMVxuXG4gICAgdHdlYWsgPSBuZXcgQk4odHdlYWspXG4gICAgaWYgKHR3ZWFrLmNtcChlY3BhcmFtcy5uKSA+PSAwKSByZXR1cm4gMlxuXG4gICAgY29uc3QgcG9pbnQgPSBwYWlyLmdldFB1YmxpYygpLmFkZChlY3BhcmFtcy5nLm11bCh0d2VhaykpXG4gICAgaWYgKHBvaW50LmlzSW5maW5pdHkoKSkgcmV0dXJuIDJcblxuICAgIHNhdmVQdWJsaWNLZXkob3V0cHV0LCBwb2ludClcblxuICAgIHJldHVybiAwXG4gIH0sXG5cbiAgcHVibGljS2V5VHdlYWtNdWwgKG91dHB1dCwgcHVia2V5LCB0d2Vhaykge1xuICAgIGNvbnN0IHBhaXIgPSBsb2FkUHVibGljS2V5KHB1YmtleSlcbiAgICBpZiAocGFpciA9PT0gbnVsbCkgcmV0dXJuIDFcblxuICAgIHR3ZWFrID0gbmV3IEJOKHR3ZWFrKVxuICAgIGlmICh0d2Vhay5jbXAoZWNwYXJhbXMubikgPj0gMCB8fCB0d2Vhay5pc1plcm8oKSkgcmV0dXJuIDJcblxuICAgIGNvbnN0IHBvaW50ID0gcGFpci5nZXRQdWJsaWMoKS5tdWwodHdlYWspXG4gICAgc2F2ZVB1YmxpY0tleShvdXRwdXQsIHBvaW50KVxuXG4gICAgcmV0dXJuIDBcbiAgfSxcblxuICBzaWduYXR1cmVOb3JtYWxpemUgKHNpZykge1xuICAgIGNvbnN0IHIgPSBuZXcgQk4oc2lnLnN1YmFycmF5KDAsIDMyKSlcbiAgICBjb25zdCBzID0gbmV3IEJOKHNpZy5zdWJhcnJheSgzMiwgNjQpKVxuICAgIGlmIChyLmNtcChlY3BhcmFtcy5uKSA+PSAwIHx8IHMuY21wKGVjcGFyYW1zLm4pID49IDApIHJldHVybiAxXG5cbiAgICBpZiAocy5jbXAoZWMubmgpID09PSAxKSB7XG4gICAgICBzaWcuc2V0KGVjcGFyYW1zLm4uc3ViKHMpLnRvQXJyYXlMaWtlKFVpbnQ4QXJyYXksICdiZScsIDMyKSwgMzIpXG4gICAgfVxuXG4gICAgcmV0dXJuIDBcbiAgfSxcblxuICAvLyBDb3BpZWQgMS10by0xIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2JpdGNvaW5qcy9iaXA2Ni9ibG9iL21hc3Rlci9pbmRleC5qc1xuICAvLyBBZGFwdGVkIGZvciBVaW50OEFycmF5IGluc3RlYWQgQnVmZmVyXG4gIHNpZ25hdHVyZUV4cG9ydCAob2JqLCBzaWcpIHtcbiAgICBjb25zdCBzaWdSID0gc2lnLnN1YmFycmF5KDAsIDMyKVxuICAgIGNvbnN0IHNpZ1MgPSBzaWcuc3ViYXJyYXkoMzIsIDY0KVxuICAgIGlmIChuZXcgQk4oc2lnUikuY21wKGVjcGFyYW1zLm4pID49IDApIHJldHVybiAxXG4gICAgaWYgKG5ldyBCTihzaWdTKS5jbXAoZWNwYXJhbXMubikgPj0gMCkgcmV0dXJuIDFcblxuICAgIGNvbnN0IHsgb3V0cHV0IH0gPSBvYmpcblxuICAgIC8vIFByZXBhcmUgUlxuICAgIGxldCByID0gb3V0cHV0LnN1YmFycmF5KDQsIDQgKyAzMylcbiAgICByWzBdID0gMHgwMFxuICAgIHIuc2V0KHNpZ1IsIDEpXG5cbiAgICBsZXQgbGVuUiA9IDMzXG4gICAgbGV0IHBvc1IgPSAwXG4gICAgZm9yICg7IGxlblIgPiAxICYmIHJbcG9zUl0gPT09IDB4MDAgJiYgIShyW3Bvc1IgKyAxXSAmIDB4ODApOyAtLWxlblIsICsrcG9zUik7XG5cbiAgICByID0gci5zdWJhcnJheShwb3NSKVxuICAgIGlmIChyWzBdICYgMHg4MCkgcmV0dXJuIDFcbiAgICBpZiAobGVuUiA+IDEgJiYgKHJbMF0gPT09IDB4MDApICYmICEoclsxXSAmIDB4ODApKSByZXR1cm4gMVxuXG4gICAgLy8gUHJlcGFyZSBTXG4gICAgbGV0IHMgPSBvdXRwdXQuc3ViYXJyYXkoNiArIDMzLCA2ICsgMzMgKyAzMylcbiAgICBzWzBdID0gMHgwMFxuICAgIHMuc2V0KHNpZ1MsIDEpXG5cbiAgICBsZXQgbGVuUyA9IDMzXG4gICAgbGV0IHBvc1MgPSAwXG4gICAgZm9yICg7IGxlblMgPiAxICYmIHNbcG9zU10gPT09IDB4MDAgJiYgIShzW3Bvc1MgKyAxXSAmIDB4ODApOyAtLWxlblMsICsrcG9zUyk7XG5cbiAgICBzID0gcy5zdWJhcnJheShwb3NTKVxuICAgIGlmIChzWzBdICYgMHg4MCkgcmV0dXJuIDFcbiAgICBpZiAobGVuUyA+IDEgJiYgKHNbMF0gPT09IDB4MDApICYmICEoc1sxXSAmIDB4ODApKSByZXR1cm4gMVxuXG4gICAgLy8gU2V0IG91dHB1dCBsZW5ndGggZm9yIHJldHVyblxuICAgIG9iai5vdXRwdXRsZW4gPSA2ICsgbGVuUiArIGxlblNcblxuICAgIC8vIE91dHB1dCBpbiBzcGVjaWZpZWQgZm9ybWF0XG4gICAgLy8gMHgzMCBbdG90YWwtbGVuZ3RoXSAweDAyIFtSLWxlbmd0aF0gW1JdIDB4MDIgW1MtbGVuZ3RoXSBbU11cbiAgICBvdXRwdXRbMF0gPSAweDMwXG4gICAgb3V0cHV0WzFdID0gb2JqLm91dHB1dGxlbiAtIDJcbiAgICBvdXRwdXRbMl0gPSAweDAyXG4gICAgb3V0cHV0WzNdID0gci5sZW5ndGhcbiAgICBvdXRwdXQuc2V0KHIsIDQpXG4gICAgb3V0cHV0WzQgKyBsZW5SXSA9IDB4MDJcbiAgICBvdXRwdXRbNSArIGxlblJdID0gcy5sZW5ndGhcbiAgICBvdXRwdXQuc2V0KHMsIDYgKyBsZW5SKVxuXG4gICAgcmV0dXJuIDBcbiAgfSxcblxuICAvLyBDb3BpZWQgMS10by0xIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2JpdGNvaW5qcy9iaXA2Ni9ibG9iL21hc3Rlci9pbmRleC5qc1xuICAvLyBBZGFwdGVkIGZvciBVaW50OEFycmF5IGluc3RlYWQgQnVmZmVyXG4gIHNpZ25hdHVyZUltcG9ydCAob3V0cHV0LCBzaWcpIHtcbiAgICBpZiAoc2lnLmxlbmd0aCA8IDgpIHJldHVybiAxXG4gICAgaWYgKHNpZy5sZW5ndGggPiA3MikgcmV0dXJuIDFcbiAgICBpZiAoc2lnWzBdICE9PSAweDMwKSByZXR1cm4gMVxuICAgIGlmIChzaWdbMV0gIT09IHNpZy5sZW5ndGggLSAyKSByZXR1cm4gMVxuICAgIGlmIChzaWdbMl0gIT09IDB4MDIpIHJldHVybiAxXG5cbiAgICBjb25zdCBsZW5SID0gc2lnWzNdXG4gICAgaWYgKGxlblIgPT09IDApIHJldHVybiAxXG4gICAgaWYgKDUgKyBsZW5SID49IHNpZy5sZW5ndGgpIHJldHVybiAxXG4gICAgaWYgKHNpZ1s0ICsgbGVuUl0gIT09IDB4MDIpIHJldHVybiAxXG5cbiAgICBjb25zdCBsZW5TID0gc2lnWzUgKyBsZW5SXVxuICAgIGlmIChsZW5TID09PSAwKSByZXR1cm4gMVxuICAgIGlmICgoNiArIGxlblIgKyBsZW5TKSAhPT0gc2lnLmxlbmd0aCkgcmV0dXJuIDFcblxuICAgIGlmIChzaWdbNF0gJiAweDgwKSByZXR1cm4gMVxuICAgIGlmIChsZW5SID4gMSAmJiAoc2lnWzRdID09PSAweDAwKSAmJiAhKHNpZ1s1XSAmIDB4ODApKSByZXR1cm4gMVxuXG4gICAgaWYgKHNpZ1tsZW5SICsgNl0gJiAweDgwKSByZXR1cm4gMVxuICAgIGlmIChsZW5TID4gMSAmJiAoc2lnW2xlblIgKyA2XSA9PT0gMHgwMCkgJiYgIShzaWdbbGVuUiArIDddICYgMHg4MCkpIHJldHVybiAxXG5cbiAgICBsZXQgc2lnUiA9IHNpZy5zdWJhcnJheSg0LCA0ICsgbGVuUilcbiAgICBpZiAoc2lnUi5sZW5ndGggPT09IDMzICYmIHNpZ1JbMF0gPT09IDB4MDApIHNpZ1IgPSBzaWdSLnN1YmFycmF5KDEpXG4gICAgaWYgKHNpZ1IubGVuZ3RoID4gMzIpIHJldHVybiAxXG5cbiAgICBsZXQgc2lnUyA9IHNpZy5zdWJhcnJheSg2ICsgbGVuUilcbiAgICBpZiAoc2lnUy5sZW5ndGggPT09IDMzICYmIHNpZ1NbMF0gPT09IDB4MDApIHNpZ1MgPSBzaWdTLnNsaWNlKDEpXG4gICAgaWYgKHNpZ1MubGVuZ3RoID4gMzIpIHRocm93IG5ldyBFcnJvcignUyBsZW5ndGggaXMgdG9vIGxvbmcnKVxuXG4gICAgbGV0IHIgPSBuZXcgQk4oc2lnUilcbiAgICBpZiAoci5jbXAoZWNwYXJhbXMubikgPj0gMCkgciA9IG5ldyBCTigwKVxuXG4gICAgbGV0IHMgPSBuZXcgQk4oc2lnLnN1YmFycmF5KDYgKyBsZW5SKSlcbiAgICBpZiAocy5jbXAoZWNwYXJhbXMubikgPj0gMCkgcyA9IG5ldyBCTigwKVxuXG4gICAgb3V0cHV0LnNldChyLnRvQXJyYXlMaWtlKFVpbnQ4QXJyYXksICdiZScsIDMyKSwgMClcbiAgICBvdXRwdXQuc2V0KHMudG9BcnJheUxpa2UoVWludDhBcnJheSwgJ2JlJywgMzIpLCAzMilcblxuICAgIHJldHVybiAwXG4gIH0sXG5cbiAgZWNkc2FTaWduIChvYmosIG1lc3NhZ2UsIHNlY2tleSwgZGF0YSwgbm9uY2Vmbikge1xuICAgIGlmIChub25jZWZuKSB7XG4gICAgICBjb25zdCBfbm9uY2VmbiA9IG5vbmNlZm5cbiAgICAgIG5vbmNlZm4gPSAoY291bnRlcikgPT4ge1xuICAgICAgICBjb25zdCBub25jZSA9IF9ub25jZWZuKG1lc3NhZ2UsIHNlY2tleSwgbnVsbCwgZGF0YSwgY291bnRlcilcblxuICAgICAgICBjb25zdCBpc1ZhbGlkID0gbm9uY2UgaW5zdGFuY2VvZiBVaW50OEFycmF5ICYmIG5vbmNlLmxlbmd0aCA9PT0gMzJcbiAgICAgICAgaWYgKCFpc1ZhbGlkKSB0aHJvdyBuZXcgRXJyb3IoJ1RoaXMgaXMgdGhlIHdheScpXG5cbiAgICAgICAgcmV0dXJuIG5ldyBCTihub25jZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBkID0gbmV3IEJOKHNlY2tleSlcbiAgICBpZiAoZC5jbXAoZWNwYXJhbXMubikgPj0gMCB8fCBkLmlzWmVybygpKSByZXR1cm4gMVxuXG4gICAgbGV0IHNpZ1xuICAgIHRyeSB7XG4gICAgICBzaWcgPSBlYy5zaWduKG1lc3NhZ2UsIHNlY2tleSwgeyBjYW5vbmljYWw6IHRydWUsIGs6IG5vbmNlZm4sIHBlcnM6IGRhdGEgfSlcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiAxXG4gICAgfVxuXG4gICAgb2JqLnNpZ25hdHVyZS5zZXQoc2lnLnIudG9BcnJheUxpa2UoVWludDhBcnJheSwgJ2JlJywgMzIpLCAwKVxuICAgIG9iai5zaWduYXR1cmUuc2V0KHNpZy5zLnRvQXJyYXlMaWtlKFVpbnQ4QXJyYXksICdiZScsIDMyKSwgMzIpXG4gICAgb2JqLnJlY2lkID0gc2lnLnJlY292ZXJ5UGFyYW1cblxuICAgIHJldHVybiAwXG4gIH0sXG5cbiAgZWNkc2FWZXJpZnkgKHNpZywgbXNnMzIsIHB1YmtleSkge1xuICAgIGNvbnN0IHNpZ09iaiA9IHsgcjogc2lnLnN1YmFycmF5KDAsIDMyKSwgczogc2lnLnN1YmFycmF5KDMyLCA2NCkgfVxuXG4gICAgY29uc3Qgc2lnciA9IG5ldyBCTihzaWdPYmoucilcbiAgICBjb25zdCBzaWdzID0gbmV3IEJOKHNpZ09iai5zKVxuICAgIGlmIChzaWdyLmNtcChlY3BhcmFtcy5uKSA+PSAwIHx8IHNpZ3MuY21wKGVjcGFyYW1zLm4pID49IDApIHJldHVybiAxXG4gICAgaWYgKHNpZ3MuY21wKGVjLm5oKSA9PT0gMSB8fCBzaWdyLmlzWmVybygpIHx8IHNpZ3MuaXNaZXJvKCkpIHJldHVybiAzXG5cbiAgICBjb25zdCBwYWlyID0gbG9hZFB1YmxpY0tleShwdWJrZXkpXG4gICAgaWYgKHBhaXIgPT09IG51bGwpIHJldHVybiAyXG5cbiAgICBjb25zdCBwb2ludCA9IHBhaXIuZ2V0UHVibGljKClcbiAgICBjb25zdCBpc1ZhbGlkID0gZWMudmVyaWZ5KG1zZzMyLCBzaWdPYmosIHBvaW50KVxuICAgIHJldHVybiBpc1ZhbGlkID8gMCA6IDNcbiAgfSxcblxuICBlY2RzYVJlY292ZXIgKG91dHB1dCwgc2lnLCByZWNpZCwgbXNnMzIpIHtcbiAgICBjb25zdCBzaWdPYmogPSB7IHI6IHNpZy5zbGljZSgwLCAzMiksIHM6IHNpZy5zbGljZSgzMiwgNjQpIH1cblxuICAgIGNvbnN0IHNpZ3IgPSBuZXcgQk4oc2lnT2JqLnIpXG4gICAgY29uc3Qgc2lncyA9IG5ldyBCTihzaWdPYmoucylcbiAgICBpZiAoc2lnci5jbXAoZWNwYXJhbXMubikgPj0gMCB8fCBzaWdzLmNtcChlY3BhcmFtcy5uKSA+PSAwKSByZXR1cm4gMVxuXG4gICAgaWYgKHNpZ3IuaXNaZXJvKCkgfHwgc2lncy5pc1plcm8oKSkgcmV0dXJuIDJcblxuICAgIC8vIENhbiB0aHJvdyBgdGhyb3cgbmV3IEVycm9yKCdVbmFibGUgdG8gZmluZCBzZW5jb25kIGtleSBjYW5kaW5hdGUnKTtgXG4gICAgbGV0IHBvaW50XG4gICAgdHJ5IHtcbiAgICAgIHBvaW50ID0gZWMucmVjb3ZlclB1YktleShtc2czMiwgc2lnT2JqLCByZWNpZClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiAyXG4gICAgfVxuXG4gICAgc2F2ZVB1YmxpY0tleShvdXRwdXQsIHBvaW50KVxuXG4gICAgcmV0dXJuIDBcbiAgfSxcblxuICBlY2RoIChvdXRwdXQsIHB1YmtleSwgc2Vja2V5LCBkYXRhLCBoYXNoZm4sIHhidWYsIHlidWYpIHtcbiAgICBjb25zdCBwYWlyID0gbG9hZFB1YmxpY0tleShwdWJrZXkpXG4gICAgaWYgKHBhaXIgPT09IG51bGwpIHJldHVybiAxXG5cbiAgICBjb25zdCBzY2FsYXIgPSBuZXcgQk4oc2Vja2V5KVxuICAgIGlmIChzY2FsYXIuY21wKGVjcGFyYW1zLm4pID49IDAgfHwgc2NhbGFyLmlzWmVybygpKSByZXR1cm4gMlxuXG4gICAgY29uc3QgcG9pbnQgPSBwYWlyLmdldFB1YmxpYygpLm11bChzY2FsYXIpXG5cbiAgICBpZiAoaGFzaGZuID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBwb2ludC5lbmNvZGUobnVsbCwgdHJ1ZSlcbiAgICAgIGNvbnN0IHNoYTI1NiA9IGVjLmhhc2goKS51cGRhdGUoZGF0YSkuZGlnZXN0KClcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzI7ICsraSkgb3V0cHV0W2ldID0gc2hhMjU2W2ldXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICgheGJ1ZikgeGJ1ZiA9IG5ldyBVaW50OEFycmF5KDMyKVxuICAgICAgY29uc3QgeCA9IHBvaW50LmdldFgoKS50b0FycmF5KCdiZScsIDMyKVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzMjsgKytpKSB4YnVmW2ldID0geFtpXVxuXG4gICAgICBpZiAoIXlidWYpIHlidWYgPSBuZXcgVWludDhBcnJheSgzMilcbiAgICAgIGNvbnN0IHkgPSBwb2ludC5nZXRZKCkudG9BcnJheSgnYmUnLCAzMilcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzI7ICsraSkgeWJ1ZltpXSA9IHlbaV1cblxuICAgICAgY29uc3QgaGFzaCA9IGhhc2hmbih4YnVmLCB5YnVmLCBkYXRhKVxuXG4gICAgICBjb25zdCBpc1ZhbGlkID0gaGFzaCBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkgJiYgaGFzaC5sZW5ndGggPT09IG91dHB1dC5sZW5ndGhcbiAgICAgIGlmICghaXNWYWxpZCkgcmV0dXJuIDJcblxuICAgICAgb3V0cHV0LnNldChoYXNoKVxuICAgIH1cblxuICAgIHJldHVybiAwXG4gIH1cbn1cbiIsImNvbnN0IGVycm9ycyA9IHtcbiAgSU1QT1NTSUJMRV9DQVNFOiAnSW1wb3NzaWJsZSBjYXNlLiBQbGVhc2UgY3JlYXRlIGlzc3VlLicsXG4gIFRXRUFLX0FERDpcbiAgICAnVGhlIHR3ZWFrIHdhcyBvdXQgb2YgcmFuZ2Ugb3IgdGhlIHJlc3VsdGVkIHByaXZhdGUga2V5IGlzIGludmFsaWQnLFxuICBUV0VBS19NVUw6ICdUaGUgdHdlYWsgd2FzIG91dCBvZiByYW5nZSBvciBlcXVhbCB0byB6ZXJvJyxcbiAgQ09OVEVYVF9SQU5ET01JWkVfVU5LTk9XOiAnVW5rbm93IGVycm9yIG9uIGNvbnRleHQgcmFuZG9taXphdGlvbicsXG4gIFNFQ0tFWV9JTlZBTElEOiAnUHJpdmF0ZSBLZXkgaXMgaW52YWxpZCcsXG4gIFBVQktFWV9QQVJTRTogJ1B1YmxpYyBLZXkgY291bGQgbm90IGJlIHBhcnNlZCcsXG4gIFBVQktFWV9TRVJJQUxJWkU6ICdQdWJsaWMgS2V5IHNlcmlhbGl6YXRpb24gZXJyb3InLFxuICBQVUJLRVlfQ09NQklORTogJ1RoZSBzdW0gb2YgdGhlIHB1YmxpYyBrZXlzIGlzIG5vdCB2YWxpZCcsXG4gIFNJR19QQVJTRTogJ1NpZ25hdHVyZSBjb3VsZCBub3QgYmUgcGFyc2VkJyxcbiAgU0lHTjogJ1RoZSBub25jZSBnZW5lcmF0aW9uIGZ1bmN0aW9uIGZhaWxlZCwgb3IgdGhlIHByaXZhdGUga2V5IHdhcyBpbnZhbGlkJyxcbiAgUkVDT1ZFUjogJ1B1YmxpYyBrZXkgY291bGQgbm90IGJlIHJlY292ZXInLFxuICBFQ0RIOiAnU2NhbGFyIHdhcyBpbnZhbGlkICh6ZXJvIG9yIG92ZXJmbG93KSdcbn1cblxuZnVuY3Rpb24gYXNzZXJ0IChjb25kLCBtc2cpIHtcbiAgaWYgKCFjb25kKSB0aHJvdyBuZXcgRXJyb3IobXNnKVxufVxuXG5mdW5jdGlvbiBpc1VpbnQ4QXJyYXkgKG5hbWUsIHZhbHVlLCBsZW5ndGgpIHtcbiAgYXNzZXJ0KHZhbHVlIGluc3RhbmNlb2YgVWludDhBcnJheSwgYEV4cGVjdGVkICR7bmFtZX0gdG8gYmUgYW4gVWludDhBcnJheWApXG5cbiAgaWYgKGxlbmd0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkobGVuZ3RoKSkge1xuICAgICAgY29uc3QgbnVtYmVycyA9IGxlbmd0aC5qb2luKCcsICcpXG4gICAgICBjb25zdCBtc2cgPSBgRXhwZWN0ZWQgJHtuYW1lfSB0byBiZSBhbiBVaW50OEFycmF5IHdpdGggbGVuZ3RoIFske251bWJlcnN9XWBcbiAgICAgIGFzc2VydChsZW5ndGguaW5jbHVkZXModmFsdWUubGVuZ3RoKSwgbXNnKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtc2cgPSBgRXhwZWN0ZWQgJHtuYW1lfSB0byBiZSBhbiBVaW50OEFycmF5IHdpdGggbGVuZ3RoICR7bGVuZ3RofWBcbiAgICAgIGFzc2VydCh2YWx1ZS5sZW5ndGggPT09IGxlbmd0aCwgbXNnKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpc0NvbXByZXNzZWQgKHZhbHVlKSB7XG4gIGFzc2VydCh0b1R5cGVTdHJpbmcodmFsdWUpID09PSAnQm9vbGVhbicsICdFeHBlY3RlZCBjb21wcmVzc2VkIHRvIGJlIGEgQm9vbGVhbicpXG59XG5cbmZ1bmN0aW9uIGdldEFzc2VydGVkT3V0cHV0IChvdXRwdXQgPSAobGVuKSA9PiBuZXcgVWludDhBcnJheShsZW4pLCBsZW5ndGgpIHtcbiAgaWYgKHR5cGVvZiBvdXRwdXQgPT09ICdmdW5jdGlvbicpIG91dHB1dCA9IG91dHB1dChsZW5ndGgpXG4gIGlzVWludDhBcnJheSgnb3V0cHV0Jywgb3V0cHV0LCBsZW5ndGgpXG4gIHJldHVybiBvdXRwdXRcbn1cblxuZnVuY3Rpb24gdG9UeXBlU3RyaW5nICh2YWx1ZSkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKS5zbGljZSg4LCAtMSlcbn1cblxubW9kdWxlLmV4cG9ydHMgPSAoc2VjcDI1NmsxKSA9PiB7XG4gIHJldHVybiB7XG4gICAgY29udGV4dFJhbmRvbWl6ZSAoc2VlZCkge1xuICAgICAgYXNzZXJ0KFxuICAgICAgICBzZWVkID09PSBudWxsIHx8IHNlZWQgaW5zdGFuY2VvZiBVaW50OEFycmF5LFxuICAgICAgICAnRXhwZWN0ZWQgc2VlZCB0byBiZSBhbiBVaW50OEFycmF5IG9yIG51bGwnXG4gICAgICApXG4gICAgICBpZiAoc2VlZCAhPT0gbnVsbCkgaXNVaW50OEFycmF5KCdzZWVkJywgc2VlZCwgMzIpXG5cbiAgICAgIHN3aXRjaCAoc2VjcDI1NmsxLmNvbnRleHRSYW5kb21pemUoc2VlZCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcnMuQ09OVEVYVF9SQU5ET01JWkVfVU5LTk9XKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBwcml2YXRlS2V5VmVyaWZ5IChzZWNrZXkpIHtcbiAgICAgIGlzVWludDhBcnJheSgncHJpdmF0ZSBrZXknLCBzZWNrZXksIDMyKVxuXG4gICAgICByZXR1cm4gc2VjcDI1NmsxLnByaXZhdGVLZXlWZXJpZnkoc2Vja2V5KSA9PT0gMFxuICAgIH0sXG5cbiAgICBwcml2YXRlS2V5TmVnYXRlIChzZWNrZXkpIHtcbiAgICAgIGlzVWludDhBcnJheSgncHJpdmF0ZSBrZXknLCBzZWNrZXksIDMyKVxuXG4gICAgICBzd2l0Y2ggKHNlY3AyNTZrMS5wcml2YXRlS2V5TmVnYXRlKHNlY2tleSkpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgIHJldHVybiBzZWNrZXlcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcnMuSU1QT1NTSUJMRV9DQVNFKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBwcml2YXRlS2V5VHdlYWtBZGQgKHNlY2tleSwgdHdlYWspIHtcbiAgICAgIGlzVWludDhBcnJheSgncHJpdmF0ZSBrZXknLCBzZWNrZXksIDMyKVxuICAgICAgaXNVaW50OEFycmF5KCd0d2VhaycsIHR3ZWFrLCAzMilcblxuICAgICAgc3dpdGNoIChzZWNwMjU2azEucHJpdmF0ZUtleVR3ZWFrQWRkKHNlY2tleSwgdHdlYWspKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICByZXR1cm4gc2Vja2V5XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JzLlRXRUFLX0FERClcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgcHJpdmF0ZUtleVR3ZWFrTXVsIChzZWNrZXksIHR3ZWFrKSB7XG4gICAgICBpc1VpbnQ4QXJyYXkoJ3ByaXZhdGUga2V5Jywgc2Vja2V5LCAzMilcbiAgICAgIGlzVWludDhBcnJheSgndHdlYWsnLCB0d2VhaywgMzIpXG5cbiAgICAgIHN3aXRjaCAoc2VjcDI1NmsxLnByaXZhdGVLZXlUd2Vha011bChzZWNrZXksIHR3ZWFrKSkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgcmV0dXJuIHNlY2tleVxuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9ycy5UV0VBS19NVUwpXG4gICAgICB9XG4gICAgfSxcblxuICAgIHB1YmxpY0tleVZlcmlmeSAocHVia2V5KSB7XG4gICAgICBpc1VpbnQ4QXJyYXkoJ3B1YmxpYyBrZXknLCBwdWJrZXksIFszMywgNjVdKVxuXG4gICAgICByZXR1cm4gc2VjcDI1NmsxLnB1YmxpY0tleVZlcmlmeShwdWJrZXkpID09PSAwXG4gICAgfSxcblxuICAgIHB1YmxpY0tleUNyZWF0ZSAoc2Vja2V5LCBjb21wcmVzc2VkID0gdHJ1ZSwgb3V0cHV0KSB7XG4gICAgICBpc1VpbnQ4QXJyYXkoJ3ByaXZhdGUga2V5Jywgc2Vja2V5LCAzMilcbiAgICAgIGlzQ29tcHJlc3NlZChjb21wcmVzc2VkKVxuICAgICAgb3V0cHV0ID0gZ2V0QXNzZXJ0ZWRPdXRwdXQob3V0cHV0LCBjb21wcmVzc2VkID8gMzMgOiA2NSlcblxuICAgICAgc3dpdGNoIChzZWNwMjU2azEucHVibGljS2V5Q3JlYXRlKG91dHB1dCwgc2Vja2V5KSkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgcmV0dXJuIG91dHB1dFxuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9ycy5TRUNLRVlfSU5WQUxJRClcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcnMuUFVCS0VZX1NFUklBTElaRSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgcHVibGljS2V5Q29udmVydCAocHVia2V5LCBjb21wcmVzc2VkID0gdHJ1ZSwgb3V0cHV0KSB7XG4gICAgICBpc1VpbnQ4QXJyYXkoJ3B1YmxpYyBrZXknLCBwdWJrZXksIFszMywgNjVdKVxuICAgICAgaXNDb21wcmVzc2VkKGNvbXByZXNzZWQpXG4gICAgICBvdXRwdXQgPSBnZXRBc3NlcnRlZE91dHB1dChvdXRwdXQsIGNvbXByZXNzZWQgPyAzMyA6IDY1KVxuXG4gICAgICBzd2l0Y2ggKHNlY3AyNTZrMS5wdWJsaWNLZXlDb252ZXJ0KG91dHB1dCwgcHVia2V5KSkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgcmV0dXJuIG91dHB1dFxuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9ycy5QVUJLRVlfUEFSU0UpXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JzLlBVQktFWV9TRVJJQUxJWkUpXG4gICAgICB9XG4gICAgfSxcblxuICAgIHB1YmxpY0tleU5lZ2F0ZSAocHVia2V5LCBjb21wcmVzc2VkID0gdHJ1ZSwgb3V0cHV0KSB7XG4gICAgICBpc1VpbnQ4QXJyYXkoJ3B1YmxpYyBrZXknLCBwdWJrZXksIFszMywgNjVdKVxuICAgICAgaXNDb21wcmVzc2VkKGNvbXByZXNzZWQpXG4gICAgICBvdXRwdXQgPSBnZXRBc3NlcnRlZE91dHB1dChvdXRwdXQsIGNvbXByZXNzZWQgPyAzMyA6IDY1KVxuXG4gICAgICBzd2l0Y2ggKHNlY3AyNTZrMS5wdWJsaWNLZXlOZWdhdGUob3V0cHV0LCBwdWJrZXkpKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICByZXR1cm4gb3V0cHV0XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JzLlBVQktFWV9QQVJTRSlcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcnMuSU1QT1NTSUJMRV9DQVNFKVxuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9ycy5QVUJLRVlfU0VSSUFMSVpFKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBwdWJsaWNLZXlDb21iaW5lIChwdWJrZXlzLCBjb21wcmVzc2VkID0gdHJ1ZSwgb3V0cHV0KSB7XG4gICAgICBhc3NlcnQoQXJyYXkuaXNBcnJheShwdWJrZXlzKSwgJ0V4cGVjdGVkIHB1YmxpYyBrZXlzIHRvIGJlIGFuIEFycmF5JylcbiAgICAgIGFzc2VydChwdWJrZXlzLmxlbmd0aCA+IDAsICdFeHBlY3RlZCBwdWJsaWMga2V5cyBhcnJheSB3aWxsIGhhdmUgbW9yZSB0aGFuIHplcm8gaXRlbXMnKVxuICAgICAgZm9yIChjb25zdCBwdWJrZXkgb2YgcHVia2V5cykge1xuICAgICAgICBpc1VpbnQ4QXJyYXkoJ3B1YmxpYyBrZXknLCBwdWJrZXksIFszMywgNjVdKVxuICAgICAgfVxuICAgICAgaXNDb21wcmVzc2VkKGNvbXByZXNzZWQpXG4gICAgICBvdXRwdXQgPSBnZXRBc3NlcnRlZE91dHB1dChvdXRwdXQsIGNvbXByZXNzZWQgPyAzMyA6IDY1KVxuXG4gICAgICBzd2l0Y2ggKHNlY3AyNTZrMS5wdWJsaWNLZXlDb21iaW5lKG91dHB1dCwgcHVia2V5cykpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgIHJldHVybiBvdXRwdXRcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcnMuUFVCS0VZX1BBUlNFKVxuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9ycy5QVUJLRVlfQ09NQklORSlcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcnMuUFVCS0VZX1NFUklBTElaRSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgcHVibGljS2V5VHdlYWtBZGQgKHB1YmtleSwgdHdlYWssIGNvbXByZXNzZWQgPSB0cnVlLCBvdXRwdXQpIHtcbiAgICAgIGlzVWludDhBcnJheSgncHVibGljIGtleScsIHB1YmtleSwgWzMzLCA2NV0pXG4gICAgICBpc1VpbnQ4QXJyYXkoJ3R3ZWFrJywgdHdlYWssIDMyKVxuICAgICAgaXNDb21wcmVzc2VkKGNvbXByZXNzZWQpXG4gICAgICBvdXRwdXQgPSBnZXRBc3NlcnRlZE91dHB1dChvdXRwdXQsIGNvbXByZXNzZWQgPyAzMyA6IDY1KVxuXG4gICAgICBzd2l0Y2ggKHNlY3AyNTZrMS5wdWJsaWNLZXlUd2Vha0FkZChvdXRwdXQsIHB1YmtleSwgdHdlYWspKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICByZXR1cm4gb3V0cHV0XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JzLlBVQktFWV9QQVJTRSlcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcnMuVFdFQUtfQUREKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBwdWJsaWNLZXlUd2Vha011bCAocHVia2V5LCB0d2VhaywgY29tcHJlc3NlZCA9IHRydWUsIG91dHB1dCkge1xuICAgICAgaXNVaW50OEFycmF5KCdwdWJsaWMga2V5JywgcHVia2V5LCBbMzMsIDY1XSlcbiAgICAgIGlzVWludDhBcnJheSgndHdlYWsnLCB0d2VhaywgMzIpXG4gICAgICBpc0NvbXByZXNzZWQoY29tcHJlc3NlZClcbiAgICAgIG91dHB1dCA9IGdldEFzc2VydGVkT3V0cHV0KG91dHB1dCwgY29tcHJlc3NlZCA/IDMzIDogNjUpXG5cbiAgICAgIHN3aXRjaCAoc2VjcDI1NmsxLnB1YmxpY0tleVR3ZWFrTXVsKG91dHB1dCwgcHVia2V5LCB0d2VhaykpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgIHJldHVybiBvdXRwdXRcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcnMuUFVCS0VZX1BBUlNFKVxuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9ycy5UV0VBS19NVUwpXG4gICAgICB9XG4gICAgfSxcblxuICAgIHNpZ25hdHVyZU5vcm1hbGl6ZSAoc2lnKSB7XG4gICAgICBpc1VpbnQ4QXJyYXkoJ3NpZ25hdHVyZScsIHNpZywgNjQpXG5cbiAgICAgIHN3aXRjaCAoc2VjcDI1NmsxLnNpZ25hdHVyZU5vcm1hbGl6ZShzaWcpKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICByZXR1cm4gc2lnXG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JzLlNJR19QQVJTRSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc2lnbmF0dXJlRXhwb3J0IChzaWcsIG91dHB1dCkge1xuICAgICAgaXNVaW50OEFycmF5KCdzaWduYXR1cmUnLCBzaWcsIDY0KVxuICAgICAgb3V0cHV0ID0gZ2V0QXNzZXJ0ZWRPdXRwdXQob3V0cHV0LCA3MilcblxuICAgICAgY29uc3Qgb2JqID0geyBvdXRwdXQsIG91dHB1dGxlbjogNzIgfVxuICAgICAgc3dpdGNoIChzZWNwMjU2azEuc2lnbmF0dXJlRXhwb3J0KG9iaiwgc2lnKSkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgcmV0dXJuIG91dHB1dC5zbGljZSgwLCBvYmoub3V0cHV0bGVuKVxuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9ycy5TSUdfUEFSU0UpXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JzLklNUE9TU0lCTEVfQ0FTRSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc2lnbmF0dXJlSW1wb3J0IChzaWcsIG91dHB1dCkge1xuICAgICAgaXNVaW50OEFycmF5KCdzaWduYXR1cmUnLCBzaWcpXG4gICAgICBvdXRwdXQgPSBnZXRBc3NlcnRlZE91dHB1dChvdXRwdXQsIDY0KVxuXG4gICAgICBzd2l0Y2ggKHNlY3AyNTZrMS5zaWduYXR1cmVJbXBvcnQob3V0cHV0LCBzaWcpKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICByZXR1cm4gb3V0cHV0XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JzLlNJR19QQVJTRSlcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcnMuSU1QT1NTSUJMRV9DQVNFKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlY2RzYVNpZ24gKG1zZzMyLCBzZWNrZXksIG9wdGlvbnMgPSB7fSwgb3V0cHV0KSB7XG4gICAgICBpc1VpbnQ4QXJyYXkoJ21lc3NhZ2UnLCBtc2czMiwgMzIpXG4gICAgICBpc1VpbnQ4QXJyYXkoJ3ByaXZhdGUga2V5Jywgc2Vja2V5LCAzMilcbiAgICAgIGFzc2VydCh0b1R5cGVTdHJpbmcob3B0aW9ucykgPT09ICdPYmplY3QnLCAnRXhwZWN0ZWQgb3B0aW9ucyB0byBiZSBhbiBPYmplY3QnKVxuICAgICAgaWYgKG9wdGlvbnMuZGF0YSAhPT0gdW5kZWZpbmVkKSBpc1VpbnQ4QXJyYXkoJ29wdGlvbnMuZGF0YScsIG9wdGlvbnMuZGF0YSlcbiAgICAgIGlmIChvcHRpb25zLm5vbmNlZm4gIT09IHVuZGVmaW5lZCkgYXNzZXJ0KHRvVHlwZVN0cmluZyhvcHRpb25zLm5vbmNlZm4pID09PSAnRnVuY3Rpb24nLCAnRXhwZWN0ZWQgb3B0aW9ucy5ub25jZWZuIHRvIGJlIGEgRnVuY3Rpb24nKVxuICAgICAgb3V0cHV0ID0gZ2V0QXNzZXJ0ZWRPdXRwdXQob3V0cHV0LCA2NClcblxuICAgICAgY29uc3Qgb2JqID0geyBzaWduYXR1cmU6IG91dHB1dCwgcmVjaWQ6IG51bGwgfVxuICAgICAgc3dpdGNoIChzZWNwMjU2azEuZWNkc2FTaWduKG9iaiwgbXNnMzIsIHNlY2tleSwgb3B0aW9ucy5kYXRhLCBvcHRpb25zLm5vbmNlZm4pKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICByZXR1cm4gb2JqXG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JzLlNJR04pXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JzLklNUE9TU0lCTEVfQ0FTRSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZWNkc2FWZXJpZnkgKHNpZywgbXNnMzIsIHB1YmtleSkge1xuICAgICAgaXNVaW50OEFycmF5KCdzaWduYXR1cmUnLCBzaWcsIDY0KVxuICAgICAgaXNVaW50OEFycmF5KCdtZXNzYWdlJywgbXNnMzIsIDMyKVxuICAgICAgaXNVaW50OEFycmF5KCdwdWJsaWMga2V5JywgcHVia2V5LCBbMzMsIDY1XSlcblxuICAgICAgc3dpdGNoIChzZWNwMjU2azEuZWNkc2FWZXJpZnkoc2lnLCBtc2czMiwgcHVia2V5KSkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9ycy5TSUdfUEFSU0UpXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JzLlBVQktFWV9QQVJTRSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZWNkc2FSZWNvdmVyIChzaWcsIHJlY2lkLCBtc2czMiwgY29tcHJlc3NlZCA9IHRydWUsIG91dHB1dCkge1xuICAgICAgaXNVaW50OEFycmF5KCdzaWduYXR1cmUnLCBzaWcsIDY0KVxuICAgICAgYXNzZXJ0KFxuICAgICAgICB0b1R5cGVTdHJpbmcocmVjaWQpID09PSAnTnVtYmVyJyAmJlxuICAgICAgICAgIHJlY2lkID49IDAgJiZcbiAgICAgICAgICByZWNpZCA8PSAzLFxuICAgICAgICAnRXhwZWN0ZWQgcmVjb3ZlcnkgaWQgdG8gYmUgYSBOdW1iZXIgd2l0aGluIGludGVydmFsIFswLCAzXSdcbiAgICAgIClcbiAgICAgIGlzVWludDhBcnJheSgnbWVzc2FnZScsIG1zZzMyLCAzMilcbiAgICAgIGlzQ29tcHJlc3NlZChjb21wcmVzc2VkKVxuICAgICAgb3V0cHV0ID0gZ2V0QXNzZXJ0ZWRPdXRwdXQob3V0cHV0LCBjb21wcmVzc2VkID8gMzMgOiA2NSlcblxuICAgICAgc3dpdGNoIChzZWNwMjU2azEuZWNkc2FSZWNvdmVyKG91dHB1dCwgc2lnLCByZWNpZCwgbXNnMzIpKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICByZXR1cm4gb3V0cHV0XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JzLlNJR19QQVJTRSlcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcnMuUkVDT1ZFUilcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcnMuSU1QT1NTSUJMRV9DQVNFKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlY2RoIChwdWJrZXksIHNlY2tleSwgb3B0aW9ucyA9IHt9LCBvdXRwdXQpIHtcbiAgICAgIGlzVWludDhBcnJheSgncHVibGljIGtleScsIHB1YmtleSwgWzMzLCA2NV0pXG4gICAgICBpc1VpbnQ4QXJyYXkoJ3ByaXZhdGUga2V5Jywgc2Vja2V5LCAzMilcbiAgICAgIGFzc2VydCh0b1R5cGVTdHJpbmcob3B0aW9ucykgPT09ICdPYmplY3QnLCAnRXhwZWN0ZWQgb3B0aW9ucyB0byBiZSBhbiBPYmplY3QnKVxuICAgICAgaWYgKG9wdGlvbnMuZGF0YSAhPT0gdW5kZWZpbmVkKSBpc1VpbnQ4QXJyYXkoJ29wdGlvbnMuZGF0YScsIG9wdGlvbnMuZGF0YSlcbiAgICAgIGlmIChvcHRpb25zLmhhc2hmbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGFzc2VydCh0b1R5cGVTdHJpbmcob3B0aW9ucy5oYXNoZm4pID09PSAnRnVuY3Rpb24nLCAnRXhwZWN0ZWQgb3B0aW9ucy5oYXNoZm4gdG8gYmUgYSBGdW5jdGlvbicpXG4gICAgICAgIGlmIChvcHRpb25zLnhidWYgIT09IHVuZGVmaW5lZCkgaXNVaW50OEFycmF5KCdvcHRpb25zLnhidWYnLCBvcHRpb25zLnhidWYsIDMyKVxuICAgICAgICBpZiAob3B0aW9ucy55YnVmICE9PSB1bmRlZmluZWQpIGlzVWludDhBcnJheSgnb3B0aW9ucy55YnVmJywgb3B0aW9ucy55YnVmLCAzMilcbiAgICAgICAgaXNVaW50OEFycmF5KCdvdXRwdXQnLCBvdXRwdXQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvdXRwdXQgPSBnZXRBc3NlcnRlZE91dHB1dChvdXRwdXQsIDMyKVxuICAgICAgfVxuXG4gICAgICBzd2l0Y2ggKHNlY3AyNTZrMS5lY2RoKG91dHB1dCwgcHVia2V5LCBzZWNrZXksIG9wdGlvbnMuZGF0YSwgb3B0aW9ucy5oYXNoZm4sIG9wdGlvbnMueGJ1Ziwgb3B0aW9ucy55YnVmKSkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgcmV0dXJuIG91dHB1dFxuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9ycy5QVUJLRVlfUEFSU0UpXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JzLkVDREgpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIvLyBVdGlsIGZvciBCaXRjb2luLXNwZWNpZmljIGZ1bmN0aW9uYWxpdHlcbmNvbnN0IGJzNTggPSByZXF1aXJlKCdiczU4Jyk7XG5jb25zdCBiczU4Y2hlY2sgPSByZXF1aXJlKCdiczU4Y2hlY2snKVxuY29uc3QgQnVmZmVyID0gcmVxdWlyZSgnYnVmZmVyLycpLkJ1ZmZlcjtcbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJylcbmNvbnN0IERFRkFVTFRfU0VRVUVOQ0UgPSAweGZmZmZmZmZmO1xuY29uc3QgREVGQVVMVF9TSUdIQVNIX0JVRkZFUiA9IEJ1ZmZlci5mcm9tKCcwMScsICdoZXgnKTsgLy8gU0lHSEFTSF9BTEwgPSAweDAxXG5jb25zdCB7IEhBUkRFTkVEX09GRlNFVCB9ID0gcmVxdWlyZSgnLi9jb25zdGFudHMnKTtcbmNvbnN0IERFRkFVTFRfQ0hBTkdFID0gWzQ0ICsgSEFSREVORURfT0ZGU0VULCBIQVJERU5FRF9PRkZTRVQsIEhBUkRFTkVEX09GRlNFVCwgMSwgMF07XG5cbmNvbnN0IE9QID0ge1xuICAnMCc6IDB4MDAsXG4gIEhBU0gxNjA6IDB4YTksXG4gIERVUDogMHg3NixcbiAgRVFVQUw6IDB4ODcsXG4gIEVRVUFMVkVSSUZZOiAweDg4LFxuICBDSEVDS1NJRzogMHhhYyxcbn1cblxuY29uc3QgYWRkcmVzc1ZlcnNpb24gPSB7XG4gICdMRUdBQ1knOiAweDAwLFxuICAnU0VHV0lUJzogMHgwNSxcbiAgJ1RFU1RORVQnOiAweDZGLFxuICAnU0VHV0lUX1RFU1RORVQnOiAweEM0LFxufVxuZXhwb3J0cy5hZGRyZXNzVmVyc2lvbiA9IGFkZHJlc3NWZXJzaW9uO1xuXG4vLyBCaXRjb2luIHNjcmlwdCB0eXBlcyAtLSBkZWZpbmVkIGJ5IHRoZSBMYXR0aWNlIHByb3RvY29sIHNwZWNcbmNvbnN0IHNjcmlwdFR5cGVzID0ge1xuICBQMlBLSDogMHgwMSxcbiAgUDJTSDogMHgwMixcbiAgUDJTSF9QMldQS0g6IDB4MDMsXG59XG5leHBvcnRzLnNjcmlwdFR5cGVzID0gc2NyaXB0VHlwZXNcblxuLy8gV2UgbmVlZCB0byBidWlsZCB0d28gZGlmZmVyZW50IG9iamVjdHMgaGVyZTpcbi8vIDEuIGJpdGNvaW5qcy1saWIgVHJhbnNhY3Rpb25CdWlsZGVyIG9iamVjdCwgd2hpY2ggd2lsbCBiZSB1c2VkIGluIGNvbmp1bmN0aW9uXG4vLyAgICB3aXRoIHRoZSByZXR1cm5lZCBzaWduYXR1cmVzIHRvIGJ1aWxkIGFuZCBzZXJpYWxpemUgdGhlIHRyYW5zYWN0aW9uIGJlZm9yZVxuLy8gICAgYnJvYWRjYXN0aW5nIGl0LiBXZSB3aWxsIHJlcGxhY2UgYGJpdGNvaW5qcy1saWJgJ3Mgc2lnbmF0dXJlcyB3aXRoIHRoZSBvbmVzXG4vLyAgICB3ZSBnZXQgZnJvbSB0aGUgTGF0dGljZVxuLy8gMi4gVGhlIHNlcmlhbGl6ZWQgTGF0dGljZSByZXF1ZXN0LCB3aGljaCBpbmNsdWRlcyBkYXRhIChvdXRsaW5lZCBpbiB0aGUgc3BlY2lmaWNhdGlvbilcbi8vICAgIHRoYXQgaXMgbmVlZGVkIHRvIHNpZ24gYWxsIG9mIHRoZSBpbnB1dHMgYW5kIGJ1aWxkIGEgY2hhbmdlIG91dHB1dC4gXG4vLyBAaW5wdXRzIChjb250YWluZWQgaW4gYGRhdGFgKVxuLy8gYHByZXZPdXRzYDogYW4gYXJyYXkgb2Ygb2JqZWN0cyB3aXRoIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbi8vICAgICAgICAgICBhLiB0eEhhc2hcbi8vICAgICAgICAgICBiLiB2YWx1ZVxuLy8gICAgICAgICAgIGMuIGluZGV4ICAgICAgICAgIC0tIHRoZSBpbmRleCBvZiB0aGUgb3V0cHV0IGluIHRoZSB0cmFuc2FjdGlvblxuLy8gICAgICAgICAgIGQuIHNpZ25lclBhdGggLS0gdGhlIHBhdGggb2YgdGhlIGFkZHJlc3MgaW4gb3VyIHdhbGxldCB0aGF0IGlzIHNpZ25pbmcgdGhpcyBpbnB1dFxuLy8gYHJlY2lwaWVudGA6IFJlY2VpdmluZyBhZGRyZXNzLCB3aGljaCBtdXN0IGJlIGNvbnZlcnRlZCB0byBhIHB1YmtleWhhc2hcbi8vIGB2YWx1ZWA6ICAgICBOdW1iZXIgb2Ygc2F0b3NoaXMgdG8gc2VuZCB0aGUgcmVjaXBpZW50XG4vLyBgZmVlYDogICAgICAgTnVtYmVyIG9mIHNhdG9zaGlzIHRvIHVzZSBmb3IgYSB0cmFuc2FjdGlvbiBmZWUgKHNob3VsZCBoYXZlIGJlZW4gY2FsY3VsYXRlZClcbi8vICAgICAgICAgICAgICBhbHJlYWR5IGJhc2VkIG9uIHRoZSBudW1iZXIgb2YgaW5wdXRzIHBsdXMgdHdvIG91dHB1dHNcbi8vIGB2ZXJzaW9uYDogICBUcmFuc2FjdGlvbiB2ZXJzaW9uIG9mIHRoZSBpbnB1dHMuIEFsbCBpbnB1dHMgbXVzdCBiZSBvZiB0aGUgc2FtZSB2ZXJzaW9uISBcbi8vIGBpc1NlZ3dpdGA6IGEgYm9vbGVhbiB3aGljaCBkZXRlcm1pbmVzIGhvdyB3ZSBzZXJpYWxpemUgdGhlIGRhdGEgYW5kIHBhcmFtZXRlcml6ZSB0eGJcbmV4cG9ydHMuYnVpbGRCaXRjb2luVHhSZXF1ZXN0ID0gZnVuY3Rpb24oZGF0YSkge1xuICB0cnkge1xuICAgIGNvbnN0IHsgcHJldk91dHMsIHJlY2lwaWVudCwgdmFsdWUsIGNoYW5nZVBhdGg9REVGQVVMVF9DSEFOR0UsIGZlZSwgaXNTZWd3aXQsIGNoYW5nZVZlcnNpb249J1NFR1dJVCcgfSA9IGRhdGE7XG4gICAgaWYgKGNoYW5nZVBhdGgubGVuZ3RoICE9PSA1KSB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSBwcm92aWRlIGEgZnVsbCBjaGFuZ2UgcGF0aC4nKVxuICAgIC8vIFNlcmlhbGl6ZSB0aGUgcmVxdWVzdFxuICAgIGNvbnN0IHBheWxvYWQgPSBCdWZmZXIuYWxsb2MoNTkgKyAoNjkgKiBwcmV2T3V0cy5sZW5ndGgpKTtcbiAgICBsZXQgb2ZmID0gMDtcbiAgICAvLyBDaGFuZ2UgdmVyc2lvbiBieXRlIChhLmsuYS4gYWRkcmVzcyBmb3JtYXQgYnl0ZSlcbiAgICBpZiAoYWRkcmVzc1ZlcnNpb25bY2hhbmdlVmVyc2lvbl0gPT09IHVuZGVmaW5lZClcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBjaGFuZ2UgdmVyc2lvbiBzcGVjaWZpZWQuJyk7XG4gICAgcGF5bG9hZC53cml0ZVVJbnQ4KGFkZHJlc3NWZXJzaW9uW2NoYW5nZVZlcnNpb25dKTsgb2ZmKys7XG5cbiAgICAvLyBCdWlsZCB0aGUgY2hhbmdlIGRhdGFcbiAgICBwYXlsb2FkLndyaXRlVUludDMyTEUoY2hhbmdlUGF0aC5sZW5ndGgsIG9mZik7IG9mZiArPSA0O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hhbmdlUGF0aC5sZW5ndGg7IGkrKykge1xuICAgICAgcGF5bG9hZC53cml0ZVVJbnQzMkxFKGNoYW5nZVBhdGhbaV0sIG9mZik7IG9mZiArPSA0O1xuICAgIH0gICAgXG5cbiAgICAvLyBGZWUgaXMgYSBwYXJhbVxuICAgIHBheWxvYWQud3JpdGVVSW50MzJMRShmZWUsIG9mZik7IG9mZiArPSA0O1xuICAgIGNvbnN0IHJlY2lwaWVudFZlcnNpb25CeXRlID0gYnM1OC5kZWNvZGUocmVjaXBpZW50KVswXTtcbiAgICBjb25zdCByZWNpcGllbnRQdWJrZXloYXNoID0gYnM1OGNoZWNrLmRlY29kZShyZWNpcGllbnQpLnNsaWNlKDEpO1xuICAgIC8vIFBhcmFtZXRlcml6ZSB0aGUgcmVjaXBpZW50IG91dHB1dFxuICAgIHBheWxvYWQud3JpdGVVSW50OChyZWNpcGllbnRWZXJzaW9uQnl0ZSwgb2ZmKTsgb2ZmKys7XG4gICAgcmVjaXBpZW50UHVia2V5aGFzaC5jb3B5KHBheWxvYWQsIG9mZik7IG9mZiArPSByZWNpcGllbnRQdWJrZXloYXNoLmxlbmd0aDtcbiAgICB3cml0ZVVJbnQ2NExFKHZhbHVlLCBwYXlsb2FkLCBvZmYpOyBvZmYgKz0gODtcblxuICAgIC8vIEJ1aWxkIHRoZSBpbnB1dHMgZnJvbSB0aGUgcHJldmlvdXMgb3V0cHV0c1xuICAgIHBheWxvYWQud3JpdGVVSW50OChwcmV2T3V0cy5sZW5ndGgsIG9mZik7IG9mZisrO1xuICAgIGxldCBpbnB1dFN1bSA9IDA7XG4gICAgY29uc3Qgc2NyaXB0VHlwZSA9IGlzU2Vnd2l0ID09PSB0cnVlID8gXG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JpcHRUeXBlcy5QMlNIX1AyV1BLSCA6ICAvLyBPbmx5IHN1cHBvcnQgcDJzaChwMndwa2gpIGZvciBzZWd3aXQgc3BlbmRzIGZvciBub3dcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcmlwdFR5cGVzLlAyUEtIOyAvLyBObyBzdXBwb3J0IGZvciBtdWx0aXNpZyBwMnNoIGluIHYxIChwMnNoID09IHNlZ3dpdCBoZXJlKVxuICAgIHByZXZPdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICBpZiAoIWlucHV0LnNpZ25lclBhdGggfHwgaW5wdXQuc2lnbmVyUGF0aC5sZW5ndGggIT09IDUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGdWxsIHJlY2lwaWVudCBwYXRoIG5vdCBzcGVjaWZpZWQgJylcbiAgICAgIH1cbiAgICAgIHBheWxvYWQud3JpdGVVSW50MzJMRShpbnB1dC5zaWduZXJQYXRoLmxlbmd0aCwgb2ZmKTsgb2ZmICs9IDQ7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0LnNpZ25lclBhdGgubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcGF5bG9hZC53cml0ZVVJbnQzMkxFKGlucHV0LnNpZ25lclBhdGhbaV0sIG9mZik7IG9mZiArPSA0O1xuICAgICAgfVxuICAgICAgcGF5bG9hZC53cml0ZVVJbnQzMkxFKGlucHV0LmluZGV4LCBvZmYpOyBvZmYgKz0gNDtcbiAgICAgIHdyaXRlVUludDY0TEUoaW5wdXQudmFsdWUsIHBheWxvYWQsIG9mZik7IG9mZiArPSA4O1xuICAgICAgaW5wdXRTdW0gKz0gaW5wdXQudmFsdWU7XG4gICAgICBwYXlsb2FkLndyaXRlVUludDgoc2NyaXB0VHlwZSwgb2ZmKTsgb2ZmKys7XG4gICAgICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihpbnB1dC50eEhhc2gpKSBpbnB1dC50eEhhc2ggPSBCdWZmZXIuZnJvbShpbnB1dC50eEhhc2gsICdoZXgnKTtcbiAgICAgIGlucHV0LnR4SGFzaC5jb3B5KHBheWxvYWQsIG9mZik7IG9mZiArPSBpbnB1dC50eEhhc2gubGVuZ3RoO1xuICAgIH0pXG4gICAgLy8gU2VuZCB0aGVtIGJhY2shXG4gICAgcmV0dXJuIHtcbiAgICAgIHBheWxvYWQsXG4gICAgICBzY2hlbWE6IGNvbnN0YW50cy5zaWduaW5nU2NoZW1hLkJUQ19UUkFOU0ZFUixcbiAgICAgIG9yaWdEYXRhOiBkYXRhLCAgIC8vIFdlIHdpbGwgbmVlZCB0aGUgb3JpZ2luYWwgZGF0YSBmb3Igc2VyaWFsaXppbmcgdGhlIHR4XG4gICAgICBjaGFuZ2VEYXRhOiB7ICAgICAvLyBUaGlzIGRhdGEgaGVscHMgZmlsbCBpbiB0aGUgY2hhbmdlIG91dHB1dFxuICAgICAgICBjaGFuZ2VWZXJzaW9uLFxuICAgICAgICB2YWx1ZTogaW5wdXRTdW0gLSAodmFsdWUgKyBmZWUpLFxuICAgICAgfVxuICAgIH07XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiB7IGVyciB9O1xuICB9XG59XG5cbi8vIFNlcmlhbGl6ZSBhIHRyYW5zYWN0aW9uIGNvbnNpc3Rpbmcgb2YgaW5wdXRzLCBvdXRwdXRzLCBhbmQgc29tZVxuLy8gbWV0YWRhdGFcbi8vIC0tIGlucHV0cyAgPSB7IGhhc2gsIGluZGV4LCBzaWcsIHB1YmtleSB9XG4vLyAtLSBvdXRwdXRzID0geyB2YWx1ZSwgcmVjaXBpZW50IH0gIC8vIGV4cGVjdHMgYW4gYWRkcmVzcyBzdHJpbmcgZm9yIGByZWNpcGllbnRgXG4vLyAtLSBpc1NlZ3dpdFNwZW5kID0gdHJ1ZSBpZiB0aGUgaW5wdXRzIGFyZSBiZWluZyBzcGVudCB1c2luZyBzZWd3aXRcbi8vICAgICAgICAgICAgICAgICAgICAoTk9URTogZWl0aGVyIEFMTCBhcmUgYmVpbmcgc3BlbnQsIG9yIG5vbmUgYXJlKVxuLy8gLS0gbmV0d29yayA9IE5hbWUgb2YgbmV0d29yaywgdXNlZCB0byBkZXRlcm1pbmUgdHJhbnNhY3Rpb24gdmVyc2lvblxuLy8gLS0gbG9ja1RpbWUgPSBXaWxsIHByb2JhYmx5IGFsd2F5cyBiZSAwXG5leHBvcnRzLnNlcmlhbGl6ZVR4ID0gZnVuY3Rpb24oZGF0YSkge1xuICBjb25zdCB7IGlucHV0cywgb3V0cHV0cywgaXNTZWd3aXRTcGVuZCwgbG9ja1RpbWU9MCwgY3J5cHRvIH0gPSBkYXRhO1xuICBsZXQgcGF5bG9hZCA9IEJ1ZmZlci5hbGxvYyg0KTtcbiAgbGV0IG9mZiA9IDA7XG4gIC8vIEFsd2F5cyB1c2UgdmVyc2lvbiAyXG4gIGNvbnN0IHZlcnNpb24gPSAyO1xuICBwYXlsb2FkLndyaXRlVUludDMyTEUodmVyc2lvbiwgb2ZmKTsgb2ZmICs9IDQ7XG4gIGlmIChpc1NlZ3dpdFNwZW5kID09PSB0cnVlKSB7XG4gICAgcGF5bG9hZCA9IGNvbmNhdChwYXlsb2FkLCBCdWZmZXIuZnJvbSgnMDAnLCAnaGV4JykpOyAvLyBtYXJrZXIgPSAweDAwXG4gICAgcGF5bG9hZCA9IGNvbmNhdChwYXlsb2FkLCBCdWZmZXIuZnJvbSgnMDEnLCAnaGV4JykpOyAvLyBmbGFnID0gMHgwMVxuICB9XG4gIC8vIFNlcmlhbGl6ZSBzaWduZWQgaW5wdXRzXG4gIGNvbnN0IG51bUlucHV0cyA9IGdldFZhckludChpbnB1dHMubGVuZ3RoKTtcbiAgcGF5bG9hZCA9IGNvbmNhdChwYXlsb2FkLCBudW1JbnB1dHMpOyBvZmYgKz0gbnVtSW5wdXRzLmxlbmd0aDtcbiAgaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgcGF5bG9hZCA9IGNvbmNhdChwYXlsb2FkLCBpbnB1dC5oYXNoLnJldmVyc2UoKSk7IG9mZiArPSBpbnB1dC5oYXNoLmxlbmd0aDtcbiAgICBjb25zdCBpbmRleCA9IGdldFUzMkxFKGlucHV0LmluZGV4KTtcbiAgICBwYXlsb2FkID0gY29uY2F0KHBheWxvYWQsIGluZGV4KTsgb2ZmICs9IGluZGV4Lmxlbmd0aDtcbiAgICBpZiAoaXNTZWd3aXRTcGVuZCA9PT0gdHJ1ZSkge1xuICAgICAgLy8gQnVpbGQgYSB2ZWN0b3IgKHZhclNsaWNlIG9mIHZhclNsaWNlKSBjb250YWluaW5nIHRoZSByZWRlZW1TY3JpcHRcbiAgICAgIGNvbnN0IHJlZGVlbVNjcmlwdCA9IGJ1aWxkUmVkZWVtU2NyaXB0KGlucHV0LnB1YmtleSwgY3J5cHRvKTtcbiAgICAgIGNvbnN0IHJlZGVlbVNjcmlwdExlbiA9IGdldFZhckludChyZWRlZW1TY3JpcHQubGVuZ3RoKTtcbiAgICAgIGNvbnN0IHNsaWNlID0gQnVmZmVyLmNvbmNhdChbcmVkZWVtU2NyaXB0TGVuLCByZWRlZW1TY3JpcHRdKTtcbiAgICAgIGNvbnN0IHNsaWNlTGVuID0gZ2V0VmFySW50KHNsaWNlLmxlbmd0aCk7XG4gICAgICBwYXlsb2FkID0gY29uY2F0KHBheWxvYWQsIHNsaWNlTGVuKTsgb2ZmICs9IHNsaWNlTGVuLmxlbmd0aDtcbiAgICAgIHBheWxvYWQgPSBjb25jYXQocGF5bG9hZCwgc2xpY2UpOyBvZmYgKz0gc2xpY2UubGVuZ3RoO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBCdWlsZCB0aGUgc2lnbmF0dXJlICsgcHVia2V5IHNjcmlwdCB0byBzcGVuZCB0aGlzIGlucHV0XG4gICAgICBjb25zdCBzbGljZSA9IGJ1aWxkU2lnKGlucHV0LnNpZywgaW5wdXQucHVia2V5KTtcbiAgICAgIHBheWxvYWQgPSBjb25jYXQocGF5bG9hZCwgc2xpY2UpOyBvZmYgKz0gc2xpY2UubGVuZ3RoO1xuICAgIH1cbiAgICAvLyBVc2UgdGhlIGRlZmF1bHQgc2VxdWVuY2UgZm9yIGFsbCB0cmFuc2FjdGlvbnNcbiAgICBjb25zdCBzZXF1ZW5jZSA9IGdldFUzMkxFKERFRkFVTFRfU0VRVUVOQ0UpO1xuICAgIHBheWxvYWQgPSBjb25jYXQocGF5bG9hZCwgc2VxdWVuY2UpOyBvZmYgKz0gc2VxdWVuY2UubGVuZ3RoO1xuICB9KVxuICAvLyBTZXJpYWxpemUgb3V0cHV0c1xuICBjb25zdCBudW1PdXRwdXRzID0gZ2V0VmFySW50KG91dHB1dHMubGVuZ3RoKTtcbiAgcGF5bG9hZCA9IGNvbmNhdChwYXlsb2FkLCBudW1PdXRwdXRzKTsgb2ZmICs9IG51bU91dHB1dHMubGVuZ3RoO1xuICBvdXRwdXRzLmZvckVhY2goKG91dHB1dCkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gZ2V0VTY0TEUob3V0cHV0LnZhbHVlKTtcbiAgICBwYXlsb2FkID0gY29uY2F0KHBheWxvYWQsIHZhbHVlKTsgb2ZmICs9IHZhbHVlLmxlbmd0aDtcbiAgICAvLyBCdWlsZCB0aGUgb3V0cHV0IGxvY2tpbmcgc2NyaXB0IGFuZCB3cml0ZSBpdCBhcyBhIHZhciBzbGljZVxuICAgIGNvbnN0IHNjcmlwdCA9IGJ1aWxkTG9ja2luZ1NjcmlwdChvdXRwdXQucmVjaXBpZW50KTtcbiAgICBjb25zdCBzY3JpcHRMZW4gPSBnZXRWYXJJbnQoc2NyaXB0Lmxlbmd0aCk7XG4gICAgcGF5bG9hZCA9IGNvbmNhdChwYXlsb2FkLCBzY3JpcHRMZW4pOyBvZmYgKz0gc2NyaXB0TGVuLmxlbmd0aDtcbiAgICBwYXlsb2FkID0gY29uY2F0KHBheWxvYWQsIHNjcmlwdCk7IG9mZiArPSBzY3JpcHQubGVuZ3RoO1xuICB9KVxuICAvLyBBZGQgd2l0bmVzcyBkYXRhIGlmIG5lZWRlZFxuICBpZiAoaXNTZWd3aXRTcGVuZCA9PT0gdHJ1ZSkge1xuICAgIGNvbnN0IHNpZ3MgPSBbXTtcbiAgICBjb25zdCBwdWJrZXlzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHNpZ3MucHVzaChpbnB1dHNbaV0uc2lnKTtcbiAgICAgIHB1YmtleXMucHVzaChpbnB1dHNbaV0ucHVia2V5KTtcbiAgICB9XG4gICAgY29uc3Qgd2l0bmVzc1NsaWNlID0gYnVpbGRXaXRuZXNzKHNpZ3MsIHB1YmtleXMpO1xuICAgIHBheWxvYWQgPSBjb25jYXQocGF5bG9hZCwgd2l0bmVzc1NsaWNlKTsgb2ZmICs9IHdpdG5lc3NTbGljZS5sZW5ndGg7XG4gIH1cbiAgLy8gRmluaXNoIHdpdGggbG9ja3RpbWVcbiAgcmV0dXJuIEJ1ZmZlci5jb25jYXQoW3BheWxvYWQsIGdldFUzMkxFKGxvY2tUaW1lKV0pLnRvU3RyaW5nKCdoZXgnKTtcbn1cblxuLy8gQ29udmVydCBhIHB1YmtleWhhc2ggdG8gYSBiaXRjb2luIGJhc2U1OGNoZWNrIGFkZHJlc3Mgd2l0aCBhIHZlcnNpb24gYnl0ZVxuZXhwb3J0cy5nZXRCaXRjb2luQWRkcmVzcyA9IGZ1bmN0aW9uKHB1YmtleWhhc2gsIHZlcnNpb24pIHtcbiAgcmV0dXJuIGJzNThjaGVjay5lbmNvZGUoQnVmZmVyLmNvbmNhdChbQnVmZmVyLmZyb20oW3ZlcnNpb25dKSwgcHVia2V5aGFzaF0pKTtcbn1cblxuXG4vLyBCdWlsZGVyIHV0aWxzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5mdW5jdGlvbiBidWlsZFJlZGVlbVNjcmlwdChwdWJrZXksIGNyeXB0bykge1xuICBjb25zdCByZWRlZW1TY3JpcHQgPSBCdWZmZXIuYWxsb2MoMjIpO1xuICBjb25zdCBzaGFIYXNoID0gY3J5cHRvLmNyZWF0ZUhhc2goJ3NoYTI1NicpLnVwZGF0ZShwdWJrZXkpLmRpZ2VzdCgpO1xuICBjb25zdCBwdWJrZXloYXNoID0gY3J5cHRvLmNyZWF0ZUhhc2goJ3JtZDE2MCcpLnVwZGF0ZShzaGFIYXNoKS5kaWdlc3QoKTtcbiAgcmVkZWVtU2NyaXB0LndyaXRlVUludDgoT1BbJzAnXSk7XG4gIHJlZGVlbVNjcmlwdC53cml0ZVVJbnQ4KHB1YmtleWhhc2gubGVuZ3RoLCAxKTtcbiAgcHVia2V5aGFzaC5jb3B5KHJlZGVlbVNjcmlwdCwgMik7XG4gIHJldHVybiByZWRlZW1TY3JpcHQ7XG59XG5cbi8vIFZhciBzbGljZSBvZiBzaWduYXR1cmUgKyB2YXIgc2xpY2Ugb2YgcHVia2V5XG5mdW5jdGlvbiBidWlsZFNpZyhzaWcsIHB1YmtleSkge1xuICBzaWcgPSBCdWZmZXIuY29uY2F0KFtzaWcsIERFRkFVTFRfU0lHSEFTSF9CVUZGRVJdKVxuICBjb25zdCBzaWdMZW4gPSBnZXRWYXJJbnQoc2lnLmxlbmd0aCk7XG4gIGNvbnN0IHB1YmtleUxlbiA9IGdldFZhckludChwdWJrZXkubGVuZ3RoKTtcbiAgY29uc3Qgc2xpY2UgPSBCdWZmZXIuY29uY2F0KFtzaWdMZW4sIHNpZywgcHVia2V5TGVuLCBwdWJrZXldKTtcbiAgY29uc3QgbGVuID0gZ2V0VmFySW50KHNsaWNlLmxlbmd0aCk7XG4gIHJldHVybiBCdWZmZXIuY29uY2F0KFtsZW4sIHNsaWNlXSk7XG59XG5cbi8vIFdpdG5lc3MgaXMgd3JpdHRlbiBhcyBhIFwidmVjdG9yXCIsIHdoaWNoIGlzIGEgbGlzdCBvZiB2YXJTbGljZXNcbi8vIHByZWZpeGVkIGJ5IHRoZSBudW1iZXIgb2YgaXRlbXNcbmZ1bmN0aW9uIGJ1aWxkV2l0bmVzcyhzaWdzLCBwdWJrZXlzKSB7XG4gIGxldCB3aXRuZXNzID0gQnVmZmVyLmFsbG9jKDApO1xuICAvLyBUd28gaXRlbXMgaW4gZWFjaCB2ZWN0b3IgKHNpZywgcHVia2V5KVxuICBjb25zdCBsZW4gPSBCdWZmZXIuYWxsb2MoMSk7IGxlbi53cml0ZVVJbnQ4KDIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNpZ3MubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBzaWcgPSBCdWZmZXIuY29uY2F0KFtzaWdzW2ldLCBERUZBVUxUX1NJR0hBU0hfQlVGRkVSXSk7XG4gICAgY29uc3Qgc2lnTGVuID0gZ2V0VmFySW50KHNpZy5sZW5ndGgpO1xuICAgIGNvbnN0IHB1YmtleSA9IHB1YmtleXNbaV07XG4gICAgY29uc3QgcHVia2V5TGVuID0gZ2V0VmFySW50KHB1YmtleS5sZW5ndGgpO1xuICAgIHdpdG5lc3MgPSBCdWZmZXIuY29uY2F0KFt3aXRuZXNzLCBsZW4sIHNpZ0xlbiwgc2lnLCBwdWJrZXlMZW4sIHB1YmtleV0pO1xuICB9XG4gIHJldHVybiB3aXRuZXNzO1xufVxuXG4vLyBMb2NraW5nIHNjcmlwdCBidWlkZXJzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5mdW5jdGlvbiBidWlsZExvY2tpbmdTY3JpcHQoYWRkcmVzcykge1xuICBjb25zdCB2ZXJzaW9uQnl0ZSA9IGJzNTguZGVjb2RlKGFkZHJlc3MpWzBdO1xuICBjb25zdCBwdWJrZXloYXNoID0gYnM1OGNoZWNrLmRlY29kZShhZGRyZXNzKS5zbGljZSgxKTtcbiAgaWYgKHZlcnNpb25CeXRlID09PSBhZGRyZXNzVmVyc2lvbi5TRUdXSVQgfHwgdmVyc2lvbkJ5dGUgPT09IGFkZHJlc3NWZXJzaW9uLlNFR1dJVF9URVNUTkVUKSB7IFxuICAgIC8vIEFsc28gd29ya3MgZm9yIHAyc2hcbiAgICByZXR1cm4gYnVpbGRQMnNoTG9ja2luZ1NjcmlwdChwdWJrZXloYXNoKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBXZSBhc3N1bWUgdGVzdG5ldCB1c2VzIHAycGtoXG4gICAgcmV0dXJuIGJ1aWxkUDJwa2hMb2NraW5nU2NyaXB0KHB1YmtleWhhc2gpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGJ1aWxkUDJwa2hMb2NraW5nU2NyaXB0KHB1YmtleWhhc2gpIHtcbiAgY29uc3Qgb3V0ID0gQnVmZmVyLmFsbG9jKDUgKyBwdWJrZXloYXNoLmxlbmd0aCk7XG4gIGxldCBvZmYgPSAwO1xuICBvdXQud3JpdGVVSW50OChPUC5EVVAsIG9mZik7IG9mZisrO1xuICBvdXQud3JpdGVVSW50OChPUC5IQVNIMTYwLCBvZmYpOyBvZmYrKztcbiAgb3V0LndyaXRlVUludDgocHVia2V5aGFzaC5sZW5ndGgsIG9mZik7IG9mZisrO1xuICBwdWJrZXloYXNoLmNvcHkob3V0LCBvZmYpOyBvZmYgKz0gcHVia2V5aGFzaC5sZW5ndGg7XG4gIG91dC53cml0ZVVJbnQ4KE9QLkVRVUFMVkVSSUZZLCBvZmYpOyBvZmYrKztcbiAgb3V0LndyaXRlVUludDgoT1AuQ0hFQ0tTSUcsIG9mZik7IG9mZisrO1xuICByZXR1cm4gb3V0O1xufVxuXG5mdW5jdGlvbiBidWlsZFAyc2hMb2NraW5nU2NyaXB0KHB1YmtleWhhc2gpIHtcbiAgY29uc3Qgb3V0ID0gQnVmZmVyLmFsbG9jKDMgKyBwdWJrZXloYXNoLmxlbmd0aCk7XG4gIGxldCBvZmYgPSAwO1xuICBvdXQud3JpdGVVSW50OChPUC5IQVNIMTYwLCBvZmYpOyBvZmYrKztcbiAgb3V0LndyaXRlVUludDgocHVia2V5aGFzaC5sZW5ndGgsIG9mZik7IG9mZisrO1xuICBwdWJrZXloYXNoLmNvcHkob3V0LCBvZmYpOyBvZmYgKz0gcHVia2V5aGFzaC5sZW5ndGg7XG4gIG91dC53cml0ZVVJbnQ4KE9QLkVRVUFMLCBvZmYpOyBvZmYrKztcbiAgcmV0dXJuIG91dDtcbn1cblxuLy8gU3RhdGljIFV0aWxzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmZ1bmN0aW9uIGNvbmNhdChiYXNlLCBhZGRpdGlvbikge1xuICByZXR1cm4gQnVmZmVyLmNvbmNhdChbYmFzZSwgYWRkaXRpb25dKTtcbn1cblxuZnVuY3Rpb24gZ2V0VTY0TEUoeCkge1xuICBjb25zdCBidWZmZXIgPSBCdWZmZXIuYWxsb2MoOCk7XG4gIHdyaXRlVUludDY0TEUoeCwgYnVmZmVyLCAwKTtcbiAgcmV0dXJuIGJ1ZmZlcjtcbn1cblxuZnVuY3Rpb24gZ2V0VTMyTEUoeCkge1xuICBjb25zdCBidWZmZXIgPSBCdWZmZXIuYWxsb2MoNCk7XG4gIGJ1ZmZlci53cml0ZVVJbnQzMkxFKHgpO1xuICByZXR1cm4gYnVmZmVyO1xufVxuXG5mdW5jdGlvbiBnZXRWYXJJbnQgKHgpIHtcbiAgbGV0IGJ1ZmZlcjtcbiAgaWYgKHggPCAweGZkKSB7XG4gICAgYnVmZmVyID0gQnVmZmVyLmFsbG9jKDEpO1xuICAgIGJ1ZmZlci53cml0ZVVJbnQ4KHgpO1xuICB9IGVsc2UgaWYgKHggPD0gMHhmZmZmKSB7XG4gICAgYnVmZmVyID0gQnVmZmVyLmFsbG9jKDMpO1xuICAgIGJ1ZmZlci53cml0ZVVJbnQ4KDB4ZmQsIDApO1xuICAgIGJ1ZmZlci53cml0ZVVJbnQxNkxFKHgsIDEpO1xuICB9IGVsc2UgaWYgKHggPCAweGZmZmZmZmZmKSB7XG4gICAgYnVmZmVyID0gQnVmZmVyLmFsbG9jKDUpO1xuICAgIGJ1ZmZlci53cml0ZVVJbnQ4KDB4ZmUsIDApO1xuICAgIGJ1ZmZlci53cml0ZVVJbnQzMkxFKHgsIDEpO1xuICB9IGVsc2Uge1xuICAgIGJ1ZmZlciA9IEJ1ZmZlci5hbGxvYyg5KTtcbiAgICBidWZmZXIud3JpdGVVSW50OCgweGZmLCAwKTtcbiAgICBidWZmZXIud3JpdGVVSW50MzJMRSh4ID4+PiAwLCAxKTtcbiAgICBidWZmZXIud3JpdGVVSW50MzJMRSgoeCAvIDB4MTAwMDAwMDAwKSB8IDAsIDUpO1xuICB9XG4gIHJldHVybiBidWZmZXI7XG59XG5cbmZ1bmN0aW9uIHdyaXRlVUludDY0TEUobiwgYnVmLCBvZmYpIHtcbiAgaWYgKHR5cGVvZiBuID09PSAnbnVtYmVyJykgbiA9IG4udG9TdHJpbmcoMTYpO1xuICBjb25zdCBwcmVCdWYgPSBCdWZmZXIuYWxsb2MoOCk7XG4gIGNvbnN0IG5TdHIgPSBuLmxlbmd0aCAlIDIgPT09IDAgPyBuLnRvU3RyaW5nKDE2KSA6IGAwJHtuLnRvU3RyaW5nKDE2KX1gO1xuICBjb25zdCBuQnVmID0gQnVmZmVyLmZyb20oblN0ciwgJ2hleCcpO1xuICBuQnVmLnJldmVyc2UoKS5jb3B5KHByZUJ1ZiwgMCk7XG4gIHByZUJ1Zi5jb3B5KGJ1Ziwgb2ZmKTtcbiAgcmV0dXJuIHByZUJ1Zjtcbn0iLCJjb25zdCBiaXR3aXNlID0gcmVxdWlyZSgnYml0d2lzZScpO1xuY29uc3Qgc3VwZXJhZ2VudCA9IHJlcXVpcmUoJ3N1cGVyYWdlbnQnKTtcbmNvbnN0IGJpdGNvaW4gPSByZXF1aXJlKCcuL2JpdGNvaW4nKTtcbmNvbnN0IGV0aGVyZXVtID0gcmVxdWlyZSgnLi9ldGhlcmV1bScpO1xuY29uc3QgeyBidWlsZEFkZEFiaVBheWxvYWQsIGFiaVBhcnNlcnMsIE1BWF9BQklfREVGUyB9ID0gcmVxdWlyZSgnLi9ldGhlcmV1bUFiaScpO1xuY29uc3Qge1xuICBpc1ZhbGlkQXNzZXRQYXRoLFxuICBzaWduUmVxUmVzb2x2ZXIsXG4gIGFlczI1Nl9kZWNyeXB0LFxuICBhZXMyNTZfZW5jcnlwdCxcbiAgcGFyc2VERVIsXG4gIGNoZWNrc3VtLFxuICBlbnN1cmVIZXhCdWZmZXIsXG4gIGdldFAyNTZLZXlQYWlyLFxuICBnZXRQMjU2S2V5UGFpckZyb21QdWIsXG4gIHBhcnNlTGF0dGljZTFSZXNwb25zZSxcbiAgdG9QYWRkZWRERVIsXG59ID0gcmVxdWlyZSgnLi91dGlsJyk7XG5jb25zdCB7XG4gIGdldEZ3VmVyc2lvbkNvbnN0LFxuICBBRERSX1NUUl9MRU4sXG4gIEVOQ19NU0dfTEVOLFxuICBkZWNSZXNMZW5ndGhzLFxuICBkZXZpY2VDb2RlcyxcbiAgZW5jUmVxQ29kZXMsXG4gIHJlc3BvbnNlQ29kZXMsXG4gIFJFUVVFU1RfVFlQRV9CWVRFLFxuICBWRVJTSU9OX0JZVEUsXG4gIG1lc3NhZ2VDb25zdGFudHMsXG4gIEJBU0VfVVJMLFxufSA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJyk7XG5jb25zdCBCdWZmZXIgPSByZXF1aXJlKCdidWZmZXIvJykuQnVmZmVyO1xuY29uc3QgRU1QVFlfV0FMTEVUX1VJRCA9IEJ1ZmZlci5hbGxvYygzMik7XG5cbmNsYXNzIENsaWVudCB7XG4gIGNvbnN0cnVjdG9yKHsgYmFzZVVybCwgY3J5cHRvLCBuYW1lLCBwcml2S2V5LCB0aW1lb3V0LCByZXRyeUNvdW50IH0gPSB7fSkge1xuICAgIC8vIERlZmluaXRpb25zXG4gICAgLy8gaWYgKCFiYXNlVXJsKSB0aHJvdyBuZXcgRXJyb3IoJ2Jhc2VVcmwgaXMgcmVxdWlyZWQnKTtcbiAgICBpZiAobmFtZSAmJiBuYW1lLmxlbmd0aCA+IDI0KSB0aHJvdyBuZXcgRXJyb3IoJ25hbWUgbXVzdCBiZSBsZXNzIHRoYW4gMjQgY2hhcmFjdGVycycpO1xuICAgIGlmICghY3J5cHRvKSB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0byBwcm92aWRlciBpcyByZXF1aXJlZCcpO1xuICAgIHRoaXMuYmFzZVVybCA9IGJhc2VVcmwgfHwgQkFTRV9VUkw7XG4gICAgdGhpcy5jcnlwdG8gPSBjcnlwdG87XG4gICAgdGhpcy5uYW1lID0gbmFtZSB8fCAnVW5rbm93bic7XG4gICAgXG4gICAgLy8gRGVyaXZlIGFuIEVDRFNBIGtleXBhaXIgdXNpbmcgdGhlIHAyNTYgY3VydmUuIFRoZSBwdWJsaWMga2V5IHdpbGxcbiAgICAvLyBiZSB1c2VkIGFzIGFuIGlkZW50aWZpZXJcbiAgICB0aGlzLnByaXZLZXkgPSBwcml2S2V5IHx8IHRoaXMuY3J5cHRvLnJhbmRvbUJ5dGVzKDMyKTtcbiAgICB0aGlzLmtleSA9IGdldFAyNTZLZXlQYWlyKHRoaXMucHJpdktleSk7Ly8uZW5jb2RlKCdoZXgnKTtcblxuICAgIC8vIFN0YXRlZnVsIHBhcmFtc1xuICAgIHRoaXMuZXBoZW1lcmFsUHViID0gbnVsbDtcbiAgICB0aGlzLnNoYXJlZFNlY3JldCA9IG51bGw7XG4gICAgdGhpcy50aW1lb3V0ID0gdGltZW91dCB8fCA2MDAwMDtcbiAgICB0aGlzLmRldmljZUlkID0gbnVsbDtcbiAgICB0aGlzLmlzUGFpcmVkID0gZmFsc2U7XG4gICAgdGhpcy5yZXRyeUNvdW50ID0gcmV0cnlDb3VudCB8fCAzO1xuXG4gICAgLy8gSW5mb3JtYXRpb24gYWJvdXQgdGhlIGN1cnJlbnQgd2FsbGV0LiBTaG91bGQgYmUgbnVsbCB1bmxlc3Mgd2Uga25vdyBhIHdhbGxldCBpcyBwcmVzZW50XG4gICAgdGhpcy5hY3RpdmVXYWxsZXRzID0ge1xuICAgICAgaW50ZXJuYWw6IHtcbiAgICAgICAgdWlkOiBFTVBUWV9XQUxMRVRfVUlELCAgICAgICAgICAgLy8gMzIgYnl0ZSBpZFxuICAgICAgICBuYW1lOiBudWxsLCAgICAgICAgICAgICAgICAgICAgICAvLyAyMCBjaGFyIChtYXgpIHN0cmluZ1xuICAgICAgICBjYXBhYmlsaXRpZXM6IG51bGwsICAgICAgICAgICAgICAvLyA0IGJ5dGUgZmxhZ1xuICAgICAgICBleHRlcm5hbDogZmFsc2UsXG4gICAgICB9LFxuICAgICAgZXh0ZXJuYWw6IHtcbiAgICAgICAgdWlkOiBFTVBUWV9XQUxMRVRfVUlELCAgICAgICAgICAgLy8gMzIgYnl0ZSBpZFxuICAgICAgICBuYW1lOiBudWxsLCAgICAgICAgICAgICAgICAgICAgICAvLyAyMCBjaGFyIChtYXgpIHN0cmluZ1xuICAgICAgICBjYXBhYmlsaXRpZXM6IG51bGwsICAgICAgICAgICAgICAvLyA0IGJ5dGUgZmxhZ1xuICAgICAgICBleHRlcm5hbDogdHJ1ZSxcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLy8gTEFUVElDRSBGVU5DVElPTlNcbiAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIC8vIGBDb25uZWN0YCB3aWxsIGF0dGVtcHQgdG8gY29udGFjdCBhIGRldmljZSBiYXNlZCBvbiBpdHMgZGV2aWNlSWQuXG4gIC8vIFRoZSByZXNwb25zZSBzaG91bGQgaW5jbHVkZSBhbiBlcGhlbWVyYWwgcHVibGljIGtleSwgd2hpY2ggaXMgdXNlZCB0b1xuICAvLyBwYWlyIHdpdGggdGhlIGRldmljZSBpbiBhIGxhdGVyIHJlcXVlc3RcbiAgY29ubmVjdChkZXZpY2VJZCwgY2IpIHtcbiAgICAvLyBVc2VyIG1heSBcInJlLWNvbm5lY3RcIiBpZiBhIGRldmljZSBJRCBoYXMgcHJldmlvdXNseSBiZWVuIHN0b3JlZFxuICAgIGlmICh0eXBlb2YgZGV2aWNlSWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGlmICghdGhpcy5kZXZpY2VJZCkgXG4gICAgICAgIHJldHVybiBjYignTm8gZGV2aWNlIElEIGhhcyBiZWVuIHN0b3JlZC4gUGxlYXNlIGNvbm5lY3Qgd2l0aCB5b3VyIGRldmljZSBJRCBmaXJzdC4nKVxuICAgICAgY2IgPSBkZXZpY2VJZDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSWYgdGhlIHVzZXIgcGFzc2VzIGluIGEgZGV2aWNlIElELCBjb25uZWN0IHRvIHRoYXQgZGV2aWNlIGFuZCBzYXZlXG4gICAgICAvLyB0aGUgbmV3IElEIGZvciBmdXR1cmUgdXNlLlxuICAgICAgdGhpcy5kZXZpY2VJZCA9IGRldmljZUlkO1xuICAgIH1cbiAgICBjb25zdCBwYXJhbSA9IHRoaXMuX2J1aWxkUmVxdWVzdChkZXZpY2VDb2Rlcy5DT05ORUNULCB0aGlzLnB1YktleUJ5dGVzKCkpO1xuICAgIHRoaXMuX3JlcXVlc3QocGFyYW0sIChlcnIsIHJlcykgPT4ge1xuICAgICAgaWYgKGVycikgcmV0dXJuIGNiKGVycik7XG4gICAgICB0aGlzLmlzUGFpcmVkID0gdGhpcy5faGFuZGxlQ29ubmVjdChyZXMpO1xuICAgICAgLy8gQ2hlY2sgZm9yIGFuIGFjdGl2ZSB3YWxsZXQuIFRoaXMgd2lsbCBnZXQgYnlwYXNzZWQgaWYgd2UgYXJlIG5vdCBwYWlyZWQuXG4gICAgICBpZiAodGhpcy5pc1BhaXJlZCkge1xuICAgICAgICB0aGlzLl9nZXRBY3RpdmVXYWxsZXQoKGVycikgPT4ge1xuICAgICAgICAgIHJldHVybiBjYihlcnIsIHRoaXMuaXNQYWlyZWQpO1xuICAgICAgICB9LCB0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjYihudWxsKTtcbiAgICAgIH1cbiAgICAgIFxuICAgIH0pO1xuICB9XG5cbiAgcGFpcihwYWlyaW5nU2VjcmV0LCBjYikge1xuICAgIC8vIEJ1aWxkIHRoZSBzZWNyZXQgaGFzaCBmcm9tIHRoZSBzYWx0XG4gICAgY29uc3QgcHViS2V5ID0gdGhpcy5wdWJLZXlCeXRlcygpO1xuICAgIGNvbnN0IG5hbWVCdWYgPSBCdWZmZXIuYWxsb2MoMjUpO1xuICAgIGlmICh0aGlzLm5hbWUubGVuZ3RoID4gMjQpIHtcbiAgICAgIHJldHVybiBjYignTmFtZSBpcyB0b28gbWFueSBjaGFyYWN0ZXJzLiBQbGVhc2UgY2hhbmdlIGl0IHRvIDwyNSBjaGFyYWN0ZXJzLicpO1xuICAgIH1cbiAgICBuYW1lQnVmLndyaXRlKHRoaXMubmFtZSk7XG4gICAgLy8gTWFrZSBzdXJlIHdlIGFkZCBhIG51bGwgdGVybWluYXRpb24gYnl0ZSB0byB0aGUgcGFpcmluZyBzZWNyZXRcbiAgICBjb25zdCBwcmVJbWFnZSA9IEJ1ZmZlci5jb25jYXQoW3B1YktleSwgbmFtZUJ1ZiwgQnVmZmVyLmZyb20ocGFpcmluZ1NlY3JldCldKTtcbiAgICBjb25zdCBoYXNoID0gdGhpcy5jcnlwdG8uY3JlYXRlSGFzaCgnc2hhMjU2JykudXBkYXRlKHByZUltYWdlKS5kaWdlc3QoKTtcbiAgICBjb25zdCBzaWcgPSB0aGlzLmtleS5zaWduKGhhc2gpOyAvLyByZXR1cm5zIGFuIGFycmF5LCBub3QgYSBidWZmZXJcbiAgICBjb25zdCBkZXJTaWcgPSB0b1BhZGRlZERFUihzaWcpO1xuICAgIGNvbnN0IHBheWxvYWQgPSBCdWZmZXIuY29uY2F0KFtuYW1lQnVmLCBkZXJTaWddKTtcblxuICAgIC8vIEJ1aWxkIHRoZSByZXF1ZXN0XG4gICAgY29uc3QgcGFyYW0gPSB0aGlzLl9idWlsZEVuY1JlcXVlc3QoZW5jUmVxQ29kZXMuRklOQUxJWkVfUEFJUklORywgcGF5bG9hZCk7XG4gICAgdGhpcy5fcmVxdWVzdChwYXJhbSwgKGVyciwgcmVzKSA9PiB7XG4gICAgICBpZiAoZXJyKSByZXR1cm4gY2IoZXJyKTtcbiAgICAgIC8vIFJlY292ZXIgdGhlIGVwaGVtZXJhbCBrZXlcbiAgICAgIGNvbnN0IGVyclN0ciA9IHRoaXMuX2hhbmRsZVBhaXIocmVzKTtcbiAgICAgIGlmIChlcnJTdHIpIHJldHVybiBjYihlcnJTdHIpO1xuICAgICAgLy8gVHJ5IHRvIGdldCB0aGUgYWN0aXZlIHdhbGxldCBvbmNlIHBhaXJpbmcgaXMgc3VjY2Vzc2Z1bFxuICAgICAgdGhpcy5fZ2V0QWN0aXZlV2FsbGV0KChlcnIpID0+IHtcbiAgICAgICAgaWYgKGVycikgcmV0dXJuIGNiKGVycik7XG4gICAgICAgIHJldHVybiBjYihudWxsLCB0aGlzLmhhc0FjdGl2ZVdhbGxldCgpKTtcbiAgICAgIH0sIHRydWUpO1xuICAgIH0pICBcbiAgfVxuXG4gIHRlc3QoZGF0YSwgY2IpIHtcbiAgICBpZiAoIWRhdGEucGF5bG9hZClcbiAgICAgIHJldHVybiBjYignRmlyc3QgYXJndW1lbnQgbXVzdCBjb250YWluIGB0ZXN0SURgIGFuZCBgcGF5bG9hZGAgZmllbGRzLicpO1xuICAgIGNvbnN0IFRFU1RfREFUQV9TWiA9IDUwMDtcbiAgICBjb25zdCBwYXlsb2FkID0gQnVmZmVyLmFsbG9jKFRFU1RfREFUQV9TWiArIDYpO1xuICAgIHBheWxvYWQud3JpdGVVSW50MzJCRShkYXRhLnRlc3RJRCwgMCk7XG4gICAgcGF5bG9hZC53cml0ZVVJbnQxNkJFKGRhdGEucGF5bG9hZC5sZW5ndGgsIDQpO1xuICAgIGRhdGEucGF5bG9hZC5jb3B5KHBheWxvYWQsIDYpO1xuICAgIGNvbnN0IHBhcmFtID0gdGhpcy5fYnVpbGRFbmNSZXF1ZXN0KGVuY1JlcUNvZGVzLlRFU1QsIHBheWxvYWQpO1xuICAgIHRoaXMuX3JlcXVlc3QocGFyYW0sIChlcnIsIHJlcykgPT4ge1xuICAgICAgaWYgKGVycikgcmV0dXJuIGNiKGVycik7XG4gICAgICBjb25zdCBkZWNyeXB0ZWQgPSB0aGlzLl9oYW5kbGVFbmNSZXNwb25zZShyZXMsIGRlY1Jlc0xlbmd0aHMudGVzdCk7XG4gICAgICBpZiAoZGVjcnlwdGVkLmVyciAhPT0gbnVsbCApIFxuICAgICAgICByZXR1cm4gY2IoZGVjcnlwdGVkLmVycik7XG4gICAgICByZXR1cm4gY2IobnVsbCwgZGVjcnlwdGVkLmRhdGEuc2xpY2UoNjUpKTsgLy8gcmVtb3ZlIGVwaGVtIHB1YlxuICAgIH0pXG4gIH1cblxuICBnZXRBZGRyZXNzZXMob3B0cywgY2IpIHtcbiAgICBjb25zdCBTS0lQX0NBQ0hFX0ZMQUcgPSAxO1xuICAgIGNvbnN0IE1BWF9BRERSID0gMTA7XG4gICAgY29uc3QgeyBzdGFydFBhdGgsIG4sIHNraXBDYWNoZT10cnVlIH0gPSBvcHRzO1xuICAgIGlmIChzdGFydFBhdGggPT09IHVuZGVmaW5lZCB8fCBuID09PSB1bmRlZmluZWQgfHwgc3RhcnRQYXRoLmxlbmd0aCAhPT0gNSkge1xuICAgICAgcmV0dXJuIGNiKCdQbGVhc2UgcHJvdmlkZSBgc3RhcnRQYXRoYCBhbmQgYG5gIG9wdGlvbnMnKTtcbiAgICB9IGVsc2UgaWYgKG4gPiBNQVhfQUREUikge1xuICAgICAgcmV0dXJuIGNiKGBZb3UgbWF5IG9ubHkgcmVxdWVzdCAke01BWF9BRERSfSBhZGRyZXNzZXMgYXQgb25jZS5gKTtcbiAgICB9XG5cbiAgICBpZiAoc2tpcENhY2hlID09PSB0cnVlICYmIGZhbHNlID09PSBpc1ZhbGlkQXNzZXRQYXRoKHN0YXJ0UGF0aCkpXG4gICAgICByZXR1cm4gY2IoJ1BhcmVudCBwYXRoIGlzIG5vdCBzdXBwb3J0ZWQnKTtcblxuICAgIGNvbnN0IHBheWxvYWQgPSBCdWZmZXIuYWxsb2MoMSArIDMyICsgc3RhcnRQYXRoLmxlbmd0aCAqIDQpO1xuICAgIGxldCBvZmYgPSAwO1xuXG4gICAgLy8gV2FsbGV0VUlEXG4gICAgY29uc3Qgd2FsbGV0ID0gdGhpcy5nZXRBY3RpdmVXYWxsZXQoKTtcbiAgICBpZiAod2FsbGV0ID09PSBudWxsKSByZXR1cm4gY2IoJ05vIGFjdGl2ZSB3YWxsZXQuJyk7XG4gICAgd2FsbGV0LnVpZC5jb3B5KHBheWxvYWQsIG9mZik7IG9mZiArPSAzMjtcbiAgICAvLyBCdWlsZCB0aGUgc3RhcnQgcGF0aCAoNXggdTMyIGluZGljZXMpXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGFydFBhdGgubGVuZ3RoOyBpKyspIHtcbiAgICAgIHBheWxvYWQud3JpdGVVSW50MzJCRShzdGFydFBhdGhbaV0sIG9mZik7XG4gICAgICBvZmYgKz0gNDtcbiAgICB9XG4gICAgLy8gU3BlY2lmeSB0aGUgbnVtYmVyIG9mIHN1YnNlcXVlbnQgYWRkcmVzc2VzIHRvIHJlcXVlc3QuXG4gICAgLy8gV2UgYWxzbyBhbGxvdyB0aGUgdXNlciB0byBza2lwIHRoZSBjYWNoZSBhbmQgcmVxdWVzdCBhbnkgYWRkcmVzcyByZWxhdGVkIHRvIHRoZSBhc3NldFxuICAgIC8vIGluIHRoZSB3YWxsZXQuXG4gICAgbGV0IHZhbDtcbiAgICBjb25zdCBmd0NvbnN0YW50cyA9IGdldEZ3VmVyc2lvbkNvbnN0KHRoaXMuZndWZXJzaW9uKTtcbiAgICBpZiAodHJ1ZSA9PT0gZndDb25zdGFudHMuYWRkckZsYWdzQWxsb3dlZCkge1xuICAgICAgY29uc3QgZmxhZyA9IHNraXBDYWNoZSA9PT0gdHJ1ZSA/IGJpdHdpc2UubmliYmxlLnJlYWQoU0tJUF9DQUNIRV9GTEFHKSA6IGJpdHdpc2UubmliYmxlLnJlYWQoMCk7XG4gICAgICBjb25zdCBjb3VudCA9IGJpdHdpc2UubmliYmxlLnJlYWQobik7XG4gICAgICB2YWwgPSBiaXR3aXNlLmJ5dGUud3JpdGUoZmxhZy5jb25jYXQoY291bnQpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsID0gbjtcbiAgICB9XG4gICAgcGF5bG9hZC53cml0ZVVJbnQ4KHZhbCwgb2ZmKTsgb2ZmKys7XG4gICAgY29uc3QgcGFyYW0gPSB0aGlzLl9idWlsZEVuY1JlcXVlc3QoZW5jUmVxQ29kZXMuR0VUX0FERFJFU1NFUywgcGF5bG9hZCk7XG4gICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QocGFyYW0sIChlcnIsIHJlcykgPT4ge1xuICAgICAgaWYgKGVycikgcmV0dXJuIGNiKGVycik7XG4gICAgICBjb25zdCBwYXJzZWRSZXMgPSB0aGlzLl9oYW5kbGVHZXRBZGRyZXNzZXMocmVzKTtcbiAgICAgIGlmIChwYXJzZWRSZXMuZXJyKSByZXR1cm4gY2IocGFyc2VkUmVzLmVycik7XG4gICAgICByZXR1cm4gY2IobnVsbCwgcGFyc2VkUmVzLmRhdGEpO1xuICAgIH0pXG4gIH1cblxuICBzaWduKG9wdHMsIGNiKSB7XG4gICAgY29uc3QgeyBjdXJyZW5jeSwgZGF0YSB9ID0gb3B0cztcbiAgICBpZiAoY3VycmVuY3kgPT09IHVuZGVmaW5lZCB8fCBkYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBjYignUGxlYXNlIHByb3ZpZGUgYGN1cnJlbmN5YCBhbmQgYGRhdGFgIG9wdGlvbnMnKTtcbiAgICB9IGVsc2UgaWYgKHNpZ25SZXFSZXNvbHZlcltjdXJyZW5jeV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGNiKCdVbnN1cHBvcnRlZCBjdXJyZW5jeScpO1xuICAgIH1cblxuICAgIC8vIEFsbCB0cmFuc2FjdGlvbiByZXF1ZXN0cyBtdXN0IGJlIHB1dCBpbnRvIHRoZSBzYW1lIHNpemVkIGJ1ZmZlci5cbiAgICAvLyBUaGlzIGNvbWVzIGZyb20gc2l6ZW9mKEdwVHJhbnNhY3Rpb25SZXF1ZXN0X3QpLCBidXQgbm90ZSB3ZSByZW1vdmVcbiAgICAvLyB0aGUgMi1ieXRlIHNjaGVtYUlkIHNpbmNlIGl0IGlzIG5vdCByZXR1cm5lZCBmcm9tIG91ciByZXNvbHZlci5cbiAgICAvLyBOb3RlIHRoYXQgZGlmZmVyZW50IGZpcm13YXJlIHZlcnNpb25zIG1heSBoYXZlIGRpZmZlcmVudCBkYXRhIHNpemVzLlxuICAgIGNvbnN0IGZ3Q29uc3RhbnRzID0gZ2V0RndWZXJzaW9uQ29uc3QodGhpcy5md1ZlcnNpb24pO1xuXG4gICAgLy8gQnVpbGQgdGhlIHNpZ25pbmcgcmVxdWVzdCBwYXlsb2FkIHRvIHNlbmQgdG8gdGhlIGRldmljZS4gSWYgd2UgY2F0Y2hcbiAgICAvLyBiYWQgcGFyYW1zLCByZXR1cm4gYW4gZXJyb3IgaW5zdGVhZFxuICAgIGRhdGEuZXRoTWF4RGF0YVN6ID0gZndDb25zdGFudHMuZXRoTWF4RGF0YVN6O1xuICAgIGRhdGEuZXRoTWF4TXNnU3ogPSBmd0NvbnN0YW50cy5ldGhNYXhNc2dTejtcbiAgICBjb25zdCByZXEgPSBzaWduUmVxUmVzb2x2ZXJbY3VycmVuY3ldKGRhdGEpO1xuICAgIGlmIChyZXEuZXJyICE9PSB1bmRlZmluZWQpIHJldHVybiBjYih7IGVycjogcmVxLmVyciB9KTtcblxuICAgIGlmIChyZXEucGF5bG9hZC5sZW5ndGggPiBmd0NvbnN0YW50cy5yZXFNYXhEYXRhU3opXG4gICAgICByZXR1cm4gY2IoJ1RyYW5zYWN0aW9uIGlzIHRvbyBsYXJnZScpO1xuXG4gICAgLy8gQnVpbGQgdGhlIHBheWxvYWRcbiAgICBjb25zdCBwYXlsb2FkID0gQnVmZmVyLmFsbG9jKDIgKyBmd0NvbnN0YW50cy5yZXFNYXhEYXRhU3opO1xuICAgIGxldCBvZmYgPSAwO1xuICAgIC8vIENvcHkgcmVxdWVzdCBzY2hlbWEgKGUuZy4gRVRIIG9yIEJUQyB0cmFuc2ZlcilcbiAgICBwYXlsb2FkLndyaXRlVUludDE2QkUocmVxLnNjaGVtYSwgb2ZmKTsgb2ZmICs9IDI7XG5cbiAgICAvLyBDb3B5IHRoZSB3YWxsZXQgVUlEXG4gICAgY29uc3Qgd2FsbGV0ID0gdGhpcy5nZXRBY3RpdmVXYWxsZXQoKTtcbiAgICBpZiAod2FsbGV0ID09PSBudWxsKSByZXR1cm4gY2IoJ05vIGFjdGl2ZSB3YWxsZXQuJyk7XG4gICAgd2FsbGV0LnVpZC5jb3B5KHBheWxvYWQsIG9mZik7IG9mZiArPSB3YWxsZXQudWlkLmxlbmd0aDtcbiAgICAvLyBCdWlsZCBkYXRhIGJhc2VkIG9uIHRoZSB0eXBlIG9mIHJlcXVlc3RcbiAgICAvLyBDb3B5IHRoZSBwYXlsb2FkIG9mIHRoZSByZXF1ZXN0XG4gICAgcmVxLnBheWxvYWQuY29weShwYXlsb2FkLCBvZmYpO1xuICAgIC8vIENvbnN0cnVjdCB0aGUgZW5jcnlwdGVkIHJlcXVlc3QgYW5kIHNlbmQgaXRcbiAgICBjb25zdCBwYXJhbSA9IHRoaXMuX2J1aWxkRW5jUmVxdWVzdChlbmNSZXFDb2Rlcy5TSUdOX1RSQU5TQUNUSU9OLCBwYXlsb2FkKTtcbiAgICByZXR1cm4gdGhpcy5fcmVxdWVzdChwYXJhbSwgKGVyciwgcmVzLCByZXNwb25zZUNvZGUpID0+IHtcbiAgICAgIGlmIChyZXNwb25zZUNvZGUgPT09IHJlc3BvbnNlQ29kZXMuUkVTUF9FUlJfV0FMTEVUX05PVF9QUkVTRU5UKSB7XG4gICAgICAgIC8vIElmIHdlIGNhdGNoIGEgY2FzZSB3aGVyZSB0aGUgd2FsbGV0IGhhcyBjaGFuZ2VkLCB0cnkgZ2V0dGluZyB0aGUgbmV3IGFjdGl2ZSB3YWxsZXRcbiAgICAgICAgLy8gYW5kIHJlY3Vyc2l2ZWx5IG1ha2UgdGhlIG9yaWdpbmFsIHJlcXVlc3QuXG4gICAgICAgIHRoaXMuX2dldEFjdGl2ZVdhbGxldCgoZXJyKSA9PiB7XG4gICAgICAgICAgaWYgKGVycikgcmV0dXJuIGNiKGVycilcbiAgICAgICAgICBlbHNlICAgICByZXR1cm4gdGhpcy5zaWduKG9wdHMsIGNiKTtcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZiAoZXJyKSB7XG4gICAgICAgIC8vIElmIHRoZXJlIHdhcyBhbm90aGVyIGVycm9yIGNhdWdodCwgcmV0dXJuIGl0XG4gICAgICAgIGlmIChlcnIpIHJldHVybiBjYihlcnIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQ29ycmVjdCB3YWxsZXQgYW5kIG5vIGVycm9ycyAtLSBoYW5kbGUgdGhlIHJlc3BvbnNlXG4gICAgICAgIGNvbnN0IHBhcnNlZFJlcyA9IHRoaXMuX2hhbmRsZVNpZ24ocmVzLCBjdXJyZW5jeSwgcmVxKTtcbiAgICAgICAgcmV0dXJuIGNiKHBhcnNlZFJlcy5lcnIsIHBhcnNlZFJlcy5kYXRhKTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgYWRkQWJpRGVmcyhkZWZzLCBjYiwgbmV4dENvZGU9bnVsbCkge1xuICAgIGNvbnN0IGRlZnNUb0FkZCA9IGRlZnMuc2xpY2UoMCwgTUFYX0FCSV9ERUZTKTtcbiAgICBkZWZzID0gZGVmcy5zbGljZShNQVhfQUJJX0RFRlMpO1xuICAgIGxldCBhYmlQYXlsb2FkO1xuICAgIHRyeSB7XG4gICAgICBhYmlQYXlsb2FkID0gYnVpbGRBZGRBYmlQYXlsb2FkKGRlZnNUb0FkZCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gY2IoZXJyKTtcbiAgICB9XG4gICAgY29uc3QgcGF5bG9hZCA9IEJ1ZmZlci5hbGxvYyhhYmlQYXlsb2FkLmxlbmd0aCArIDEwKTtcbiAgICAvLyBMZXQgdGhlIGZpcm13YXJlIGtub3cgaG93IG1hbnkgZGVmcyBhcmUgcmVtYWluaW5nICphZnRlciB0aGlzIG9uZSouXG4gICAgLy8gSWYgdGhpcyBpcyBhIHBvc2l0aXZlIG51bWJlciwgZmlybXdhcmUgd2lsbCBzZW5kIHVzIGEgdGVtcG9yYXJ5IGNvZGVcbiAgICAvLyB0byBieXBhc3MgdXNlciBhdXRob3JpemF0aW9uIGlmIHRoZSB1c2VyIGhhcyBjb25maWd1cmVkIGVhc3kgQUJJIGxvYWRpbmcuXG4gICAgcGF5bG9hZC53cml0ZVVJbnQxNkxFKGRlZnMubGVuZ3RoKTtcbiAgICAvLyBJZiB0aGlzIGlzIGEgZm9sbG93LXVwIHJlcXVlc3QsIHdlIGRvbid0IG5lZWQgdG8gYXNrIGZvciB1c2VyIGF1dGhvcml6YXRpb25cbiAgICAvLyBpZiB3ZSB1c2UgdGhlIGNvcnJlY3QgdGVtcG9yYXJ5IHU2NFxuICAgIGlmIChuZXh0Q29kZSAhPT0gbnVsbClcbiAgICAgIG5leHRDb2RlLmNvcHkocGF5bG9hZCwgMik7XG4gICAgYWJpUGF5bG9hZC5jb3B5KHBheWxvYWQsIDEwKTtcbiAgICBjb25zdCBwYXJhbSA9IHRoaXMuX2J1aWxkRW5jUmVxdWVzdChlbmNSZXFDb2Rlcy5BRERfQUJJX0RFRlMsIHBheWxvYWQpO1xuICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KHBhcmFtLCAoZXJyLCByZXMsIHJlc3BvbnNlQ29kZSkgPT4ge1xuICAgICAgaWYgKHJlc3BvbnNlQ29kZSAmJiByZXNwb25zZUNvZGUgIT09IHJlc3BvbnNlQ29kZXMuUkVTUF9TVUNDRVNTKVxuICAgICAgICByZXR1cm4gY2IoJ0Vycm9yIG1ha2luZyByZXF1ZXN0LicpO1xuICAgICAgZWxzZSBpZiAoZXJyKVxuICAgICAgICByZXR1cm4gY2IoZXJyKTtcbiAgICAgIGNvbnN0IGRlY3J5cHRlZCA9IHRoaXMuX2hhbmRsZUVuY1Jlc3BvbnNlKHJlcywgZGVjUmVzTGVuZ3Rocy5hZGRBYmlEZWZzKTtcbiAgICAgIC8vIEdyYWIgdGhlIDggYnl0ZSBjb2RlIHRvIGZhc3QgdHJhY2sgb3VyIG5leHQgcmVxdWVzdCwgaWYgbmVlZGVkXG4gICAgICBuZXh0Q29kZSA9IGRlY3J5cHRlZC5kYXRhLnNsaWNlKDY1LCA3Myk7IFxuICAgICAgLy8gTm8gZGVmcyBsZWZ0PyBSZXR1cm4gc3VjY2Vzc1xuICAgICAgaWYgKGRlZnMubGVuZ3RoID09PSAwKVxuICAgICAgICByZXR1cm4gY2IobnVsbCk7XG4gICAgICAvLyBBZGQgdGhlIG5leHQgc2V0XG4gICAgICB0aGlzLmFkZEFiaURlZnMoZGVmcywgY2IsIG5leHRDb2RlLCBkZWZzKTtcbiAgICB9KVxuICB9XG4gIFxuICBhZGRQZXJtaXNzaW9uVjAob3B0cywgY2IpIHtcbiAgICBjb25zdCB7IGN1cnJlbmN5LCB0aW1lV2luZG93LCBsaW1pdCwgZGVjaW1hbHMsIGFzc2V0IH0gPSBvcHRzO1xuICAgIGlmICghY3VycmVuY3kgfHwgdGltZVdpbmRvdyA9PT0gdW5kZWZpbmVkIHx8IGxpbWl0ID09PSB1bmRlZmluZWQgfHwgZGVjaW1hbHMgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgICB0aW1lV2luZG93ID09PSBudWxsIHx8IGxpbWl0ID09PSBudWxsIHx8IGRlY2ltYWxzID09PSBudWxsKVxuICAgICAgcmV0dXJuIGNiKCdjdXJyZW5jeSwgdGltZVdpbmRvdywgZGVjaW1hbHMsIGFuZCBsaW1pdCBhcmUgYWxsIHJlcXVpcmVkIG9wdGlvbnMuJyk7XG4gICAgZWxzZSBpZiAodGltZVdpbmRvdyA9PT0gMCB8fCBsaW1pdCA9PT0gMClcbiAgICAgIHJldHVybiBjYignVGltZSB3aW5kb3cgYW5kIHNwZW5kaW5nIGxpbWl0IG11c3QgYmUgcG9zaXRpdmUuJyk7XG4gICAgLy8gQnVpbGQgdGhlIG5hbWUgb2YgdGhlIHBlcm1pc3Npb25cbiAgICBsZXQgbmFtZSA9IGN1cnJlbmN5O1xuICAgIGlmIChhc3NldClcbiAgICAgIG5hbWUgKz0gYF8ke2Fzc2V0fWA7XG4gICAgLy8gU3RhcnQgYnVpbGRpbmcgdGhlIHBheWxvYWRcbiAgICBjb25zdCBwYXlsb2FkID0gQnVmZmVyLmFsbG9jKDI5Myk7XG4gICAgLy8gQ29weSB0aGUgbmFtZVxuICAgIGlmIChCdWZmZXIuZnJvbShuYW1lKS5sZW5ndGggPiAyNTUpXG4gICAgICByZXR1cm4gY2IoJ0Fzc2V0IG5hbWUgdG9vIGxvbmcuJyk7XG4gICAgQnVmZmVyLmZyb20obmFtZSkuY29weShwYXlsb2FkLCAwKTtcbiAgICAvLyBDb252ZXJ0IHRoZSBsaW1pdCB0byBhIDMyIGJ5dGUgaGV4IGJ1ZmZlciBhbmQgY29weSBpdCBpblxuICAgIGNvbnN0IGxpbWl0QnVmID0gZW5zdXJlSGV4QnVmZmVyKGxpbWl0KVxuICAgIGlmIChsaW1pdEJ1Zi5sZW5ndGggPiAzMilcbiAgICAgIHJldHVybiBjYignTGltaXQgdG9vIGxhcmdlLicpO1xuICAgIGxpbWl0QnVmLmNvcHkocGF5bG9hZCwgMjU2ICsgKDMyIC0gbGltaXRCdWYubGVuZ3RoKSk7XG4gICAgLy8gQ29weSB0aGUgdGltZSB3aW5kb3cgKHNlY29uZHMpXG4gICAgcGF5bG9hZC53cml0ZVVJbnQzMkJFKHRpbWVXaW5kb3csIDI4OCk7XG4gICAgcGF5bG9hZC53cml0ZVVJbnQ4KGRlY2ltYWxzLCAyOTIpO1xuICAgIC8vIEVuY3J5cHQgdGhlIHJlcXVlc3QgYW5kIHNlbmQgaXQgdG8gdGhlIExhdHRpY2UuXG4gICAgY29uc3QgcGFyYW0gPSB0aGlzLl9idWlsZEVuY1JlcXVlc3QoZW5jUmVxQ29kZXMuQUREX1BFUk1JU1NJT05fVjAsIHBheWxvYWQpO1xuICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KHBhcmFtLCAoZXJyLCByZXMsIHJlc3BvbnNlQ29kZSkgPT4ge1xuICAgICAgaWYgKHJlc3BvbnNlQ29kZSA9PT0gcmVzcG9uc2VDb2Rlcy5SRVNQX0VSUl9XQUxMRVRfTk9UX1BSRVNFTlQpIHtcbiAgICAgICAgLy8gSWYgd2UgY2F0Y2ggYSBjYXNlIHdoZXJlIHRoZSB3YWxsZXQgaGFzIGNoYW5nZWQsIHRyeSBnZXR0aW5nIHRoZSBuZXcgYWN0aXZlIHdhbGxldFxuICAgICAgICAvLyBhbmQgcmVjdXJzaXZlbHkgbWFrZSB0aGUgb3JpZ2luYWwgcmVxdWVzdC5cbiAgICAgICAgdGhpcy5fZ2V0QWN0aXZlV2FsbGV0KChlcnIpID0+IHtcbiAgICAgICAgICBpZiAoZXJyKSByZXR1cm4gY2IoZXJyKVxuICAgICAgICAgIGVsc2UgICAgIHJldHVybiB0aGlzLmFkZFBlcm1pc3Npb25WMChvcHRzLCBjYik7XG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYgKGVycikge1xuICAgICAgICAvLyBJZiB0aGVyZSB3YXMgYW5vdGhlciBlcnJvciBjYXVnaHQsIHJldHVybiBpdFxuICAgICAgICBpZiAoZXJyKSByZXR1cm4gY2IoZXJyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIENvcnJlY3Qgd2FsbGV0IGFuZCBubyBlcnJvcnMgLS0gaGFuZGxlIHRoZSByZXNwb25zZVxuICAgICAgICBjb25zdCBkID0gdGhpcy5faGFuZGxlRW5jUmVzcG9uc2UocmVzLCBkZWNSZXNMZW5ndGhzLmZpbmFsaXplUGFpcik7XG4gICAgICAgIGlmIChkLmVycilcbiAgICAgICAgICByZXR1cm4gY2IoZC5lcnIpO1xuICAgICAgICByZXR1cm4gY2IobnVsbCk7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLy8gSU5URVJOQUwgRlVOQ1RJT05TXG4gIC8vIFRoZXNlIGhhbmRsZSB0aGUgbG9naWMgYXJvdW5kIGJ1aWxkaW5nIHJlcXVlc3RzIGFuZCBjb25zdW1pbmdcbiAgLy8gcmVzcG9uc2VzLiBUaGV5IHRha2UgaW50byBhY2NvdW50IHRoZSBMYXR0aWNlJ3Mgc2VyaWFsaXphdGlvbiBzY2hlbWVcbiAgLy8gYW1vbmcgb3RoZXIgcHJvdG9jb2xzLlxuICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgLy8gR2V0IHRoZSBhY3RpdmUgd2FsbGV0IGluIHRoZSBkZXZpY2UuIElmIHdlIGFscmVhZHkgaGF2ZSBvbmUgcmVjb3JkZWQsXG4gIC8vIHdlIGRvbid0IG5lZWQgdG8gZG8gYW55dGhpbmdcbiAgLy8gcmV0dXJucyBjYihlcnIpIC0tIGVyciBpcyBhIHN0cmluZ1xuICBfZ2V0QWN0aXZlV2FsbGV0KGNiLCBmb3JjZVJlZnJlc2g9ZmFsc2UpIHtcbiAgICBpZiAoZm9yY2VSZWZyZXNoICE9PSB0cnVlICYmICh0aGlzLmhhc0FjdGl2ZVdhbGxldCgpID09PSB0cnVlIHx8IHRoaXMuaXNQYWlyZWQgIT09IHRydWUpKSB7XG4gICAgICAvLyBJZiB0aGUgYWN0aXZlIHdhbGxldCBhbHJlYWR5IGV4aXN0cywgb3IgaWYgd2UgYXJlIG5vdCBwYWlyZWQsIHNraXAgdGhlIHJlcXVlc3RcbiAgICAgIHJldHVybiBjYihudWxsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTm8gYWN0aXZlIHdhbGxldD8gR2V0IGl0IGZyb20gdGhlIGRldmljZVxuICAgICAgY29uc3QgcGF5bG9hZCA9IEJ1ZmZlci5hbGxvYygwKTtcbiAgICAgIGNvbnN0IHBhcmFtID0gdGhpcy5fYnVpbGRFbmNSZXF1ZXN0KGVuY1JlcUNvZGVzLkdFVF9XQUxMRVRTLCBwYXlsb2FkKTtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KHBhcmFtLCAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIHRoaXMuX3Jlc2V0QWN0aXZlV2FsbGV0cygpO1xuICAgICAgICAgIHJldHVybiBjYihlcnIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYih0aGlzLl9oYW5kbGVHZXRXYWxsZXRzKHJlcykpO1xuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICAvLyBHZXQgdGhlIHNoYXJlZCBzZWNyZXQsIGRlcml2ZWQgdmlhIEVDREggZnJvbSB0aGUgbG9jYWwgcHJpdmF0ZSBrZXlcbiAgLy8gYW5kIHRoZSBlcGhlbWVyYWwgcHVibGljIGtleVxuICAvLyBAcmV0dXJucyBCdWZmZXJcbiAgX2dldFNoYXJlZFNlY3JldCgpIHtcbiAgICAvLyBPbmNlIGV2ZXJ5IH4yNTYgYXR0ZW1wdHMsIHdlIHdpbGwgZ2V0IGEga2V5IHRoYXQgc3RhcnRzIHdpdGggYSBgMDBgIGJ5dGUsIHdoaWNoXG4gICAgLy8gY2FuIGxlYWQgdG8gcHJvYmxlbXMgaW5pdGlhbGl6aW5nIEFFUyBpZiB3ZSBkb24ndCBmb3JjZSBhIDMyIGJ5dGUgQkUgYnVmZmVyLlxuICAgIHJldHVybiBCdWZmZXIuZnJvbSh0aGlzLmtleS5kZXJpdmUodGhpcy5lcGhlbWVyYWxQdWIuZ2V0UHVibGljKCkpLnRvQXJyYXkoJ2JlJywgMzIpKTtcbiAgfVxuXG4gIC8vIEdldCB0aGUgZXBoZW1lcmFsIGlkLCB3aGljaCBpcyB0aGUgZmlyc3QgNCBieXRlcyBvZiB0aGUgc2hhcmVkIHNlY3JldFxuICAvLyBnZW5lcmF0ZWQgZnJvbSB0aGUgbG9jYWwgcHJpdmF0ZSBrZXkgYW5kIHRoZSBlcGhlbWVyYWwgcHVibGljIGtleSBmcm9tXG4gIC8vIHRoZSBkZXZpY2UuXG4gIC8vIEByZXR1cm5zIEJ1ZmZlclxuICBfZ2V0RXBoZW1JZCgpIHtcbiAgICBpZiAodGhpcy5lcGhlbWVyYWxQdWIgPT09IG51bGwpIHJldHVybiBudWxsO1xuICAgIC8vIEVwaGVtSWQgaXMgdGhlIGZpcnN0IDQgYnl0ZXMgb2YgdGhlIGhhc2ggb2YgdGhlIHNoYXJlZCBzZWNyZXRcbiAgICBjb25zdCBzZWNyZXQgPSB0aGlzLl9nZXRTaGFyZWRTZWNyZXQoKTtcbiAgICBjb25zdCBoYXNoID0gdGhpcy5jcnlwdG8uY3JlYXRlSGFzaCgnc2hhMjU2JykudXBkYXRlKHNlY3JldCkuZGlnZXN0KCk7XG4gICAgcmV0dXJuIGhhc2guc2xpY2UoMCwgNCk7XG4gIH1cblxuICBfYnVpbGRFbmNSZXF1ZXN0KGVuY19yZXF1ZXN0X2NvZGUsIHBheWxvYWQpIHtcbiAgICAvLyBHZXQgdGhlIGVwaGVtZXJhbCBpZCAtIGFsbCBlbmNyeXB0ZWQgcmVxdWVzdHMgcmVxdWlyZSB0aGVyZSB0byBiZSBhblxuICAgIC8vIGVwZWhlbWVyYWwgcHVibGljIGtleSBpbiBvcmRlciB0byBzZW5kXG4gICAgY29uc3QgZXBoZW1JZCA9IHBhcnNlSW50KHRoaXMuX2dldEVwaGVtSWQoKS50b1N0cmluZygnaGV4JyksIDE2KVxuICAgIFxuICAgIC8vIEJ1aWxkIHRoZSBwYXlsb2FkIGFuZCBjaGVja3N1bVxuICAgIGNvbnN0IHBheWxvYWRQcmVDcyA9IEJ1ZmZlci5jb25jYXQoW0J1ZmZlci5mcm9tKFtlbmNfcmVxdWVzdF9jb2RlXSksIHBheWxvYWRdKTtcbiAgICBjb25zdCBjcyA9IGNoZWNrc3VtKHBheWxvYWRQcmVDcyk7XG4gICAgY29uc3QgcGF5bG9hZEJ1ZiA9IEJ1ZmZlci5hbGxvYyhwYXlsb2FkUHJlQ3MubGVuZ3RoICsgNCk7XG5cbiAgICAvLyBMYXR0aWNlIHZhbGlkYXRlcyBjaGVja3N1bXMgaW4gbGl0dGxlIGVuZGlhblxuICAgIHBheWxvYWRQcmVDcy5jb3B5KHBheWxvYWRCdWYsIDApO1xuICAgIHBheWxvYWRCdWYud3JpdGVVSW50MzJMRShjcywgcGF5bG9hZFByZUNzLmxlbmd0aCk7XG4gICAgLy8gRW5jcnlwdCB0aGlzIHBheWxvYWRcbiAgICBjb25zdCBzZWNyZXQgPSB0aGlzLl9nZXRTaGFyZWRTZWNyZXQoKTtcbiAgICBjb25zdCBuZXdFbmNQYXlsb2FkID0gYWVzMjU2X2VuY3J5cHQocGF5bG9hZEJ1Ziwgc2VjcmV0KTtcblxuICAgIC8vIFdyaXRlIHRvIHRoZSBvdmVyYWxsIHBheWxvYWQuIFdlIG11c3QgdXNlIHRoZSBzYW1lIGxlbmd0aFxuICAgIC8vIGZvciBldmVyeSBlbmNyeXB0ZWQgcmVxdWVzdCBhbmQgbXVzdCBpbmNsdWRlIGEgMzItYml0IGVwaGVtSWRcbiAgICAvLyBhbG9uZyB3aXRoIHRoZSBlbmNyeXB0ZWQgZGF0YVxuICAgIGNvbnN0IG5ld1BheWxvYWQgPSBCdWZmZXIuYWxsb2MoRU5DX01TR19MRU4gKyA0KTtcbiAgICAvLyBGaXJzdCA0IGJ5dGVzIGFyZSB0aGUgZXBoZW1lcmFsIGlkIChpbiBsaXR0bGUgZW5kaWFuKVxuICAgIG5ld1BheWxvYWQud3JpdGVVSW50MzJMRShlcGhlbUlkLCAwKTtcbiAgICAvLyBOZXh0IE4gYnl0ZXNcbiAgICBuZXdFbmNQYXlsb2FkLmNvcHkobmV3UGF5bG9hZCwgNCk7XG4gICAgcmV0dXJuIHRoaXMuX2J1aWxkUmVxdWVzdChkZXZpY2VDb2Rlcy5FTkNSWVBURURfUkVRVUVTVCwgbmV3UGF5bG9hZCk7XG4gIFxuICB9XG5cbiAgLy8gQnVpbGQgYSByZXF1ZXN0IHRvIHNlbmQgdG8gdGhlIGRldmljZS5cbiAgLy8gQHBhcmFtIFtyZXF1ZXN0X2NvZGVdIHt1aW50OH0gIC0gOC1iaXQgdW5zaWduZWQgaW50ZWdlciByZXByZXNlbnRpbmcgdGhlIG1lc3NhZ2UgcmVxdWVzdCBjb2RlXG4gIC8vIEBwYXJhbSBbaWRdIHtidWZmZXJ9IC0gNCBieXRlIGlkZW50aWZpZXIgKGNvbWVzIGZyb20gSFNNIGZvciBzdWJzZXF1ZW50IGVuY3J5cHRlZCByZXFzKVxuICAvLyBAcGFyYW0gW3BheWxvYWRdIHtidWZmZXJ9IC0gc2VyaWFsaXplZCBwYXlsb2FkXG4gIC8vIEByZXR1cm5zIHtidWZmZXJ9XG4gIF9idWlsZFJlcXVlc3QocmVxdWVzdF9jb2RlLCBwYXlsb2FkKSB7XG4gICAgLy8gTGVuZ3RoIG9mIHBheWxvYWQ7XG4gICAgLy8gd2UgYWRkIDEgdG8gdGhlIHBheWxvYWQgbGVuZ3RoIHRvIGFjY291bnQgZm9yIHRoZSByZXF1ZXN0X2NvZGUgYnl0ZVxuICAgIGxldCBMID0gcGF5bG9hZCAmJiBCdWZmZXIuaXNCdWZmZXIocGF5bG9hZCkgPyBwYXlsb2FkLmxlbmd0aCArIDEgOiAxO1xuICAgIGlmIChyZXF1ZXN0X2NvZGUgPT09IGRldmljZUNvZGVzLkVOQ1JZUFRFRF9SRVFVRVNUKSB7XG4gICAgICBMID0gMSArIHBheWxvYWQubGVuZ3RoO1xuICAgIH1cbiAgICBsZXQgaSA9IDA7XG4gICAgY29uc3QgcHJlUmVxID0gQnVmZmVyLmFsbG9jKEwgKyA4KTtcbiAgICAvLyBCdWlsZCB0aGUgaGVhZGVyXG4gICAgaSA9IHByZVJlcS53cml0ZVVJbnQ4KFZFUlNJT05fQllURSwgaSk7XG4gICAgaSA9IHByZVJlcS53cml0ZVVJbnQ4KFJFUVVFU1RfVFlQRV9CWVRFLCBpKTtcbiAgICBjb25zdCBpZCA9IHRoaXMuY3J5cHRvLnJhbmRvbUJ5dGVzKDQpO1xuICAgIGkgPSBwcmVSZXEud3JpdGVVSW50MzJCRShwYXJzZUludChgMHgke2lkLnRvU3RyaW5nKCdoZXgnKX1gKSwgaSk7XG4gICAgaSA9IHByZVJlcS53cml0ZVVJbnQxNkJFKEwsIGkpO1xuICAgIC8vIEJ1aWxkIHRoZSBwYXlsb2FkXG4gICAgaSA9IHByZVJlcS53cml0ZVVJbnQ4KHJlcXVlc3RfY29kZSwgaSk7XG4gICAgaWYgKEwgPiAxKSBpID0gcGF5bG9hZC5jb3B5KHByZVJlcSwgaSk7XG4gICAgLy8gQWRkIHRoZSBjaGVja3N1bVxuICAgIGNvbnN0IGNzID0gY2hlY2tzdW0ocHJlUmVxKTtcbiAgICBjb25zdCByZXEgPSBCdWZmZXIuYWxsb2MocHJlUmVxLmxlbmd0aCArIDQpOyAvLyA0LWJ5dGUgY2hlY2tzdW1cbiAgICBpID0gcHJlUmVxLmNvcHkocmVxKTtcbiAgICByZXEud3JpdGVVSW50MzJCRShjcywgaSk7XG4gICAgcmV0dXJuIHJlcTtcbiAgfVxuXG4gIF9yZXF1ZXN0KGRhdGEsIGNiLCByZXRyeUNvdW50PXRoaXMucmV0cnlDb3VudCkge1xuICAgIGlmICghdGhpcy5kZXZpY2VJZCkgcmV0dXJuIGNiKCdTZXJpYWwgaXMgbm90IHNldC4gUGxlYXNlIHNldCBpdCBhbmQgdHJ5IGFnYWluLicpO1xuICAgIGNvbnN0IHVybCA9IGAke3RoaXMuYmFzZVVybH0vJHt0aGlzLmRldmljZUlkfWA7XG4gICAgc3VwZXJhZ2VudC5wb3N0KHVybCkudGltZW91dCh0aGlzLnRpbWVvdXQpXG4gICAgLnNlbmQoe2RhdGF9KVxuICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICBpZiAoIXJlcyB8fCAhcmVzLmJvZHkpIHJldHVybiBjYihgSW52YWxpZCByZXNwb25zZTogJHtyZXN9YClcbiAgICAgIGVsc2UgaWYgKHJlcy5ib2R5LnN0YXR1cyAhPT0gMjAwKSByZXR1cm4gY2IoYEVycm9yIGNvZGUgJHtyZXMuYm9keS5zdGF0dXN9OiAke3Jlcy5ib2R5Lm1lc3NhZ2V9YClcbiAgICAgIGNvbnN0IHBhcnNlZCA9IHBhcnNlTGF0dGljZTFSZXNwb25zZShyZXMuYm9keS5tZXNzYWdlKTtcbiAgICAgIC8vIElmIHRoZSBkZXZpY2UgaXMgYnVzeSwgcmV0cnkgaWYgd2UgY2FuXG4gICAgICBpZiAoKCBwYXJzZWQucmVzcG9uc2VDb2RlID09PSByZXNwb25zZUNvZGVzLlJFU1BfRVJSX0RFVl9CVVNZIHx8XG4gICAgICAgICAgICBwYXJzZWQucmVzcG9uc2VDb2RlID09PSByZXNwb25zZUNvZGVzLlJFU1BfRVJSX0dDRV9USU1FT1VUICkgXG4gICAgICAgICAgICAmJiAocmV0cnlDb3VudCA+IDApKSB7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5fcmVxdWVzdChkYXRhLCBjYiwgcmV0cnlDb3VudC0xKSB9LCAzMDAwKTtcbiAgICAgIH1cbiAgICAgIC8vIElmIHdlIGNhdWdoIGEgYEVycldhbGxldE5vdFByZXNlbnRgIG1ha2Ugc3VyZSB3ZSBhcmVuJ3QgY2FjaGluZyBhbiBvbGQgYXRpdmUgd2FsbGV0VUlEXG4gICAgICBpZiAocGFyc2VkLnJlc3BvbnNlQ29kZSA9PT0gcmVzcG9uc2VDb2Rlcy5SRVNQX0VSUl9XQUxMRVRfTk9UX1BSRVNFTlQpIFxuICAgICAgICB0aGlzLl9yZXNldEFjdGl2ZVdhbGxldHMoKTtcbiAgICAgIC8vIElmIHRoZXJlIHdhcyBhbiBlcnJvciBpbiB0aGUgcmVzcG9uc2UsIHJldHVybiBpdFxuICAgICAgaWYgKHBhcnNlZC5lcnIpIFxuICAgICAgICByZXR1cm4gY2IocGFyc2VkLmVycik7XG4gICAgICByZXR1cm4gY2IobnVsbCwgcGFyc2VkLmRhdGEsIHBhcnNlZC5yZXNwb25zZUNvZGUpOyBcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBjb25zdCBpc1RpbWVvdXQgPSBlcnIuY29kZSA9PT0gJ0VDT05OQUJPUlRFRCcgJiYgZXJyLmVycm5vID09PSAnRVRJTUUnO1xuICAgICAgaWYgKGlzVGltZW91dClcbiAgICAgICAgcmV0dXJuIGNiKCdUaW1lb3V0IHdhaXRpbmcgZm9yIGRldmljZS4gUGxlYXNlIGVuc3VyZSBpdCBpcyBjb25uZWN0ZWQgdG8gdGhlIGludGVybmV0IGFuZCB0cnkgYWdhaW4gaW4gYSBtaW51dGUuJylcbiAgICAgIGVsc2VcbiAgICAgICAgcmV0dXJuIGNiKCdGYWlsZWQgdG8gbWFrZSByZXF1ZXN0IHRvIGRldmljZS4nKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIC0tLS0tIERldmljZSByZXNwb25zZSBoYW5kbGVycyAtLS0tLVxuXG4gIC8vIENvbm5lY3Qgd2lsbCBjYWxsIGBTdGFydFBhaXJpbmdNb2RlYCBvbiB0aGUgZGV2aWNlLCB3aGljaCBnaXZlcyB0aGVcbiAgLy8gdXNlciA2MCBzZWNvbmRzIHRvIGZpbmFsaXplIHRoZSBwYWlyaW5nXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gYW4gZXBoZW1lcmFsIHB1YmxpYyBrZXksIHdoaWNoIGlzIG5lZWRlZCBmb3IgdGhlIG5leHRcbiAgLy8gcmVxdWVzdC4gSWYgdGhlIGRldmljZSBpcyBhbHJlYWR5IHBhaXJlZCwgdGhpcyBlcGhlbVB1YiBpcyBzaW1wbHkgdXNlZFxuICAvLyB0byBlbmNyeXB0IHRoZSBuZXh0IHJlcXVlc3QuIElmIHRoZSBkZXZpY2UgaXMgbm90IHBhaXJlZCwgaXQgaXMgbmVlZGVkXG4gIC8vIHRvIHBhaXIgdGhlIGRldmljZSB3aXRoaW4gNjAgc2Vjb25kcy5cbiAgLy8gQHJldHVybnMgdHJ1ZSBpZiB3ZSBhcmUgcGFpcmVkIHRvIHRoZSBkZXZpY2UgYWxyZWFkeVxuICBfaGFuZGxlQ29ubmVjdChyZXMpIHtcbiAgICBsZXQgb2ZmID0gMDtcbiAgICBjb25zdCBwYWlyaW5nU3RhdHVzID0gcmVzLnJlYWRVSW50OChvZmYpOyBvZmYrKztcbiAgICAvLyBJZiB3ZSBhcmUgYWxyZWFkeSBwYWlyZWQsIHdlIGdldCB0aGUgbmV4dCBlcGhlbWVyYWwga2V5XG4gICAgY29uc3QgcHViID0gcmVzLnNsaWNlKG9mZiwgb2ZmICsgNjUpLnRvU3RyaW5nKCdoZXgnKTsgb2ZmICs9IDY1O1xuICAgIC8vIEdyYWIgdGhlIGZpcm13YXJlIHZlcnNpb24gKHdpbGwgYmUgMC1sZW5ndGggZm9yIG9sZGVyIGZ3IHZlcnNpb25zKVxuICAgIC8vIEl0IGlzIG9mIGZvcm1hdCB8Zml4fG1pbm9yfG1ham9yfHJlc2VydmVkfFxuICAgIHRoaXMuZndWZXJzaW9uID0gcmVzLnNsaWNlKG9mZiwgb2ZmICsgNCk7XG4gICAgLy8gU2V0IHRoZSBwdWJsaWMga2V5XG4gICAgdGhpcy5lcGhlbWVyYWxQdWIgPSBnZXRQMjU2S2V5UGFpckZyb21QdWIocHViKTtcbiAgICAvLyByZXR1cm4gdGhlIHN0YXRlIG9mIG91ciBwYWlyaW5nXG4gICAgcmV0dXJuIChwYWlyaW5nU3RhdHVzID09PSBtZXNzYWdlQ29uc3RhbnRzLlBBSVJFRCk7XG4gIH1cblxuICAvLyBBbGwgZW5jcnlwdGVkIHJlc3BvbnNlcyBtdXN0IGJlIGRlY3J5cHRlZCB3aXRoIHRoZSBwcmV2aW91cyBzaGFyZWQgc2VjcmV0LiBQZXIgc3BlY2lmaWNhdGlvbixcbiAgLy8gZGVjcnlwdGVkIHJlc3BvbnNlcyB3aWxsIGFsbCBjb250YWluIGEgNjUtYnl0ZSBwdWJsaWMga2V5IGFzIHRoZSBwcmVmaXgsIHdoaWNoIGJlY29tZXMgdGhlIFxuICAvLyBuZXcgZXBoZW1lcmFsUHViLlxuICBfaGFuZGxlRW5jUmVzcG9uc2UoZW5jUmVzLCBsZW4pIHtcbiAgICAvLyBEZWNyeXB0IHJlc3BvbnNlXG4gICAgY29uc3Qgc2VjcmV0ID0gdGhpcy5fZ2V0U2hhcmVkU2VjcmV0KCk7XG4gICAgY29uc3QgZW5jRGF0YSA9IGVuY1Jlcy5zbGljZSgwLCBFTkNfTVNHX0xFTik7XG4gICAgY29uc3QgcmVzID0gYWVzMjU2X2RlY3J5cHQoZW5jRGF0YSwgc2VjcmV0KTtcbiAgICAvLyBsZW4gZG9lcyBub3QgaW5jbHVkZSBhIDY1LWJ5dGUgcHVia2V5IHRoYXQgcHJlZmllcyBlYWNoIGVuY1Jlc3BvbnNlXG4gICAgbGVuICs9IDY1O1xuICAgIC8vIFZhbGlkYXRlIGNoZWNrc3VtLiBJdCB3aWxsIGJlIHRoZSBsYXN0IDQgYnl0ZXMgb2YgdGhlIGRlY3J5cHRlZCBwYXlsb2FkLlxuICAgIC8vIFRoZSBsZW5ndGggb2YgdGhlIGRlY3J5cHRlZCBwYXlsb2FkIHdpbGwgYmUgZml4ZWQgZm9yIGVhY2ggZ2l2ZW4gbWVzc2FnZSB0eXBlLlxuICAgIGNvbnN0IHRvQ2hlY2sgPSByZXMuc2xpY2UoMCwgbGVuKTtcbiAgICBjb25zdCBjcyA9IHBhcnNlSW50KGAweCR7cmVzLnNsaWNlKGxlbiwgbGVuKzQpLnRvU3RyaW5nKCdoZXgnKX1gKTtcbiAgICBjb25zdCBjc0NoZWNrID0gY2hlY2tzdW0odG9DaGVjayk7XG4gICAgaWYgKGNzICE9PSBjc0NoZWNrKSByZXR1cm4geyBlcnI6IGBDaGVja3N1bSBtaXNtYXRjaCBpbiByZXNwb25zZSBmcm9tIExhdHRpY2UgKGNhbGN1bGF0ZWQgJHtjc0NoZWNrfSwgd2FudGVkICR7Y3N9KWAgfTtcblxuICAgIC8vIEZpcnN0IDY1IGJ5dGVzIGlzIHRoZSBuZXh0IGVwaGVtZXJhbCBwdWJrZXlcbiAgICBjb25zdCBwdWIgPSByZXMuc2xpY2UoMCwgNjUpLnRvU3RyaW5nKCdoZXgnKTtcbiAgICB0cnkge1xuICAgICAgdGhpcy5lcGhlbWVyYWxQdWIgPSBnZXRQMjU2S2V5UGFpckZyb21QdWIocHViKTtcbiAgICAgIHJldHVybiB7IGVycjogbnVsbCwgZGF0YTogcmVzIH07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIHsgZXJyOiBgRXJyb3IgaGFuZGxpbmcgZ2V0QWRkcmVzc2VzIHJlc3BvbnNlOiAke2UudG9TdHJpbmcoKX1gIH07XG4gICAgfVxuICB9XG5cbiAgLy8gUGFpciB3aWxsIGNyZWF0ZSBhIG5ldyBwYWlyaW5nIGlmIHRoZSB1c2VyIHN1Y2Nlc3NmdWxseSBlbnRlcnMgdGhlIHNlY3JldFxuICAvLyBpbnRvIHRoZSBkZXZpY2UgaW4gdGltZS4gSWYgc3VjY2Vzc2Z1bCAoc3RhdHVzPTApLCB0aGUgZGV2aWNlIHdpbGwgcmV0dXJuXG4gIC8vIGEgbmV3IGVwaGVtZXJhbCBwdWJsaWMga2V5LCB3aGljaCBpcyB1c2VkIHRvIGRlcml2ZSBhIHNoYXJlZCBzZWNyZXRcbiAgLy8gZm9yIHRoZSBuZXh0IHJlcXVlc3RcbiAgLy8gQHJldHVybnMgZXJyb3IgKG9yIG51bGwpXG4gIF9oYW5kbGVQYWlyKGVuY1Jlcykge1xuICAgIGNvbnN0IGQgPSB0aGlzLl9oYW5kbGVFbmNSZXNwb25zZShlbmNSZXMsIGRlY1Jlc0xlbmd0aHMuZmluYWxpemVQYWlyKTtcbiAgICBpZiAoZC5lcnIpIHJldHVybiBkLmVycjtcbiAgICAvLyBSZW1vdmUgdGhlIHBhaXJpbmcgc2FsdCAtIHdlJ3JlIHBhaXJlZCFcbiAgICB0aGlzLnBhaXJpbmdTYWx0ID0gbnVsbDtcbiAgICB0aGlzLmlzUGFpcmVkID0gdHJ1ZTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8vIEdldEFkZHJlc3NlcyB3aWxsIHJldHVybiBhbiBhcnJheSBvZiBhZGRyZXNzIHN0cmluZ3NcbiAgX2hhbmRsZUdldEFkZHJlc3NlcyhlbmNSZXMpIHtcbiAgICAvLyBIYW5kbGUgdGhlIGVuY3J5cHRlZCByZXNwb25zZVxuICAgIGNvbnN0IGRlY3J5cHRlZCA9IHRoaXMuX2hhbmRsZUVuY1Jlc3BvbnNlKGVuY1JlcywgZGVjUmVzTGVuZ3Rocy5nZXRBZGRyZXNzZXMpO1xuICAgIGlmIChkZWNyeXB0ZWQuZXJyICE9PSBudWxsICkgcmV0dXJuIGRlY3J5cHRlZDtcblxuICAgIGNvbnN0IGFkZHJEYXRhID0gZGVjcnlwdGVkLmRhdGE7XG4gICAgbGV0IG9mZiA9IDY1OyAvLyBTa2lwIDY1IGJ5dGUgcHVia2V5IHByZWZpeFxuICAgIC8vIExvb2sgZm9yIGFkZHJlc3NlcyB1bnRpbCB3ZSByZWFjaCB0aGUgZW5kIChhIDQgYnl0ZSBjaGVja3N1bSlcbiAgICBjb25zdCBhZGRycyA9IFtdO1xuICAgIHdoaWxlIChvZmYgKyA0IDwgZGVjUmVzTGVuZ3Rocy5nZXRBZGRyZXNzZXMpIHtcbiAgICAgIGNvbnN0IGFkZHJCeXRlcyA9IGFkZHJEYXRhLnNsaWNlKG9mZiwgb2ZmK0FERFJfU1RSX0xFTik7IG9mZiArPSBBRERSX1NUUl9MRU47XG4gICAgICAvLyBSZXR1cm4gdGhlIFVURi04IHJlcHJlc2VudGF0aW9uXG4gICAgICBjb25zdCBsZW4gPSBhZGRyQnl0ZXMuaW5kZXhPZigwKTsgLy8gRmlyc3QgMCBpcyB0aGUgbnVsbCB0ZXJtaW5hdG9yXG4gICAgICBpZiAobGVuID4gMClcbiAgICAgICAgYWRkcnMucHVzaChhZGRyQnl0ZXMuc2xpY2UoMCwgbGVuKS50b1N0cmluZygpKTtcbiAgICB9XG4gICAgcmV0dXJuIHsgZGF0YTogYWRkcnMsIGVycjogbnVsbCB9O1xuICB9XG5cbiAgX2hhbmRsZUdldFdhbGxldHMoZW5jUmVzKSB7XG4gICAgY29uc3QgZGVjcnlwdGVkID0gdGhpcy5faGFuZGxlRW5jUmVzcG9uc2UoZW5jUmVzLCBkZWNSZXNMZW5ndGhzLmdldFdhbGxldHMpO1xuICAgIGlmIChkZWNyeXB0ZWQuZXJyICE9PSBudWxsKSByZXR1cm4gZGVjcnlwdGVkO1xuICAgIGNvbnN0IHJlcyA9IGRlY3J5cHRlZC5kYXRhO1xuICAgIGxldCB3YWxsZXRVSUQ7XG4gICAgLy8gUmVhZCB0aGUgZXh0ZXJuYWwgd2FsbGV0IGRhdGEgZmlyc3QuIElmIGl0IGlzIG5vbi1udWxsLCB0aGUgZXh0ZXJuYWwgd2FsbGV0IHdpbGxcbiAgICAvLyBiZSB0aGUgYWN0aXZlIHdhbGxldCBvZiB0aGUgZGV2aWNlIGFuZCB3ZSBzaG91bGQgc2F2ZSBpdC5cbiAgICAvLyBJZiB0aGUgZXh0ZXJuYWwgd2FsbGV0IGlzIGJsYW5rLCBpdCBtZWFucyB0aGVyZSBpcyBubyBjYXJkIHByZXNlbnQgYW5kIHdlIHNob3VsZCBcbiAgICAvLyBzYXZlIGFuZCB1c2UgdGhlIGludGVyYWwgd2FsbGV0LlxuICAgIC8vIElmIGJvdGggd2FsbGV0cyBhcmUgZW1wdHksIGl0IG1lYW5zIHRoZSBkZXZpY2Ugc3RpbGwgbmVlZHMgdG8gYmUgc2V0IHVwLlxuICAgIGNvbnN0IHdhbGxldERlc2NyaXB0b3JMZW4gPSA3MTtcbiAgICAvLyBTa2lwIDY1Ynl0ZSBwdWJrZXkgcHJlZml4LiBXYWxsZXREZXNjcmlwdG9yIGNvbnRhaW5zIDMyYnl0ZSBpZCArIDRieXRlIGZsYWcgKyAzNWJ5dGUgbmFtZVxuICAgIGxldCBvZmYgPSA2NTtcbiAgICAvLyBJbnRlcm5hbCBmaXJzdFxuICAgIGxldCBoYXNBY3RpdmVXYWxsZXQgPSBmYWxzZTtcbiAgICB3YWxsZXRVSUQgPSByZXMuc2xpY2Uob2ZmLCBvZmYrMzIpO1xuICAgIHRoaXMuYWN0aXZlV2FsbGV0cy5pbnRlcm5hbC51aWQgPSB3YWxsZXRVSUQ7XG4gICAgdGhpcy5hY3RpdmVXYWxsZXRzLmludGVybmFsLmNhcGFiaWxpdGllcyA9IHJlcy5yZWFkVUludDMyQkUob2ZmKzMyKTtcbiAgICB0aGlzLmFjdGl2ZVdhbGxldHMuaW50ZXJuYWwubmFtZSA9IHJlcy5zbGljZShvZmYrMzYsIG9mZit3YWxsZXREZXNjcmlwdG9yTGVuKTtcbiAgICBpZiAoIXdhbGxldFVJRC5lcXVhbHMoRU1QVFlfV0FMTEVUX1VJRCkpXG4gICAgICBoYXNBY3RpdmVXYWxsZXQgPSB0cnVlO1xuXG4gICAgLy8gT2Zmc2V0IHRoZSBmaXJzdCBpdGVtXG4gICAgb2ZmICs9IHdhbGxldERlc2NyaXB0b3JMZW47XG4gICAgXG4gICAgLy8gRXh0ZXJuYWxcbiAgICB3YWxsZXRVSUQgPSByZXMuc2xpY2Uob2ZmLCBvZmYrMzIpO1xuICAgIHRoaXMuYWN0aXZlV2FsbGV0cy5leHRlcm5hbC51aWQgPSB3YWxsZXRVSUQ7XG4gICAgdGhpcy5hY3RpdmVXYWxsZXRzLmV4dGVybmFsLmNhcGFiaWxpdGllcyA9IHJlcy5yZWFkVUludDMyQkUob2ZmKzMyKTtcbiAgICB0aGlzLmFjdGl2ZVdhbGxldHMuZXh0ZXJuYWwubmFtZSA9IHJlcy5zbGljZShvZmYrMzYsIG9mZit3YWxsZXREZXNjcmlwdG9yTGVuKTtcbiAgICBpZiAoIXdhbGxldFVJRC5lcXVhbHMoRU1QVFlfV0FMTEVUX1VJRCkpXG4gICAgICBoYXNBY3RpdmVXYWxsZXQgPSB0cnVlO1xuICAgIGlmIChoYXNBY3RpdmVXYWxsZXQgPT09IHRydWUpXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICBlbHNlXG4gICAgICByZXR1cm4gJ05vIGFjdGl2ZSB3YWxsZXQuJztcbiAgfVxuXG4gIF9oYW5kbGVTaWduKGVuY1JlcywgY3VycmVuY3lUeXBlLCByZXE9bnVsbCkge1xuICAgIC8vIEhhbmRsZSB0aGUgZW5jcnlwdGVkIHJlc3BvbnNlXG4gICAgY29uc3QgZGVjcnlwdGVkID0gdGhpcy5faGFuZGxlRW5jUmVzcG9uc2UoZW5jUmVzLCBkZWNSZXNMZW5ndGhzLnNpZ24pO1xuICAgIGlmIChkZWNyeXB0ZWQuZXJyICE9PSBudWxsICkgcmV0dXJuIHsgZXJyOiBkZWNyeXB0ZWQuZXJyIH07XG4gICAgY29uc3QgUFVCS0VZX1BSRUZJWF9MRU4gPSA2NTtcbiAgICBjb25zdCBQS0hfUFJFRklYX0xFTiA9IDIwO1xuICAgIGxldCBvZmYgPSBQVUJLRVlfUFJFRklYX0xFTjsgLy8gU2tpcCBwYXN0IHB1YmtleSBwcmVmaXhcbiAgICBjb25zdCByZXMgPSBkZWNyeXB0ZWQuZGF0YTtcblxuICAgIC8vIEdldCB0aGUgY2hhbmdlIGRhdGEgaWYgd2UgYXJlIG1ha2luZyBhIEJUQyB0cmFuc2FjdGlvblxuICAgIGxldCBjaGFuZ2VSZWNpcGllbnQ7XG4gICAgaWYgKGN1cnJlbmN5VHlwZSA9PT0gJ0JUQycpIHtcbiAgICAgIGNvbnN0IGNoYW5nZVZlcnNpb24gPSBiaXRjb2luLmFkZHJlc3NWZXJzaW9uW3JlcS5jaGFuZ2VEYXRhLmNoYW5nZVZlcnNpb25dO1xuICAgICAgY29uc3QgY2hhbmdlUHVia2V5aGFzaCA9IHJlcy5zbGljZShvZmYsIG9mZiArIFBLSF9QUkVGSVhfTEVOKTsgb2ZmICs9IFBLSF9QUkVGSVhfTEVOO1xuICAgICAgY2hhbmdlUmVjaXBpZW50ID0gYml0Y29pbi5nZXRCaXRjb2luQWRkcmVzcyhjaGFuZ2VQdWJrZXloYXNoLCBjaGFuZ2VWZXJzaW9uKTtcbiAgICB9XG4gICAgLy8gU3RhcnQgYnVpbGRpbmcgcmV0dXJuIGRhdGFcbiAgICBjb25zdCByZXR1cm5EYXRhID0geyBlcnI6IG51bGwsIGRhdGE6IG51bGwgfTtcbiAgICBjb25zdCBERVJMZW5ndGggPSA3NDsgLy8gbWF4IHNpemUgb2YgYSBERVIgc2lnbmF0dXJlIC0tIGFsbCBMYXR0aWNlIHNpZ3MgYXJlIHRoaXMgbG9uZ1xuICAgIGNvbnN0IFNJR1NfT0ZGU0VUID0gMTAgKiBERVJMZW5ndGg7IC8vIDEwIHNpZ25hdHVyZSBzbG90cyBwcmVjZWRlIDEwIHB1YmtleSBzbG90c1xuICAgIGNvbnN0IFBVQktFWVNfT0ZGU0VUID0gUFVCS0VZX1BSRUZJWF9MRU4gKyBQS0hfUFJFRklYX0xFTiArIFNJR1NfT0ZGU0VUO1xuICAgIFxuICAgIGlmIChjdXJyZW5jeVR5cGUgPT09ICdCVEMnKSB7XG4gICAgICBjb25zdCBjb21wcmVzc2VkUHViTGVuZ3RoID0gMzM7ICAvLyBTaXplIG9mIGNvbXByZXNzZWQgcHVibGljIGtleVxuICAgICAgY29uc3QgcHVia2V5cyA9IFtdO1xuICAgICAgY29uc3Qgc2lncyA9IFtdO1xuICAgICAgbGV0IG4gPSAwO1xuICAgICAgLy8gUGFyc2UgdGhlIHNpZ25hdHVyZSBmb3IgZWFjaCBvdXRwdXQgLS0gdGhleSBhcmUgcmV0dXJuZWRcbiAgICAgIC8vIGluIHRoZSBzZXJpYWxpemVkIHBheWxvYWQgaW4gZm9ybSBbcHVia2V5LCBzaWddXG4gICAgICAvLyBUaGVyZSBpcyBvbmUgc2lnbmF0dXJlIHBlciBvdXRwdXRcbiAgICAgIHdoaWxlIChvZmYgPCByZXMubGVuZ3RoKSB7XG4gICAgICAgIC8vIEV4aXQgb3V0IGlmIHdlIGhhdmUgc2VlbiBhbGwgdGhlIHJldHVybmVkIHNpZ3MgYW5kIHB1YmtleXNcbiAgICAgICAgaWYgKHJlc1tvZmZdICE9PSAweDMwKSBicmVhaztcbiAgICAgICAgLy8gT3RoZXJ3aXNlIGdyYWIgYW5vdGhlciBzZXRcbiAgICAgICAgLy8gTm90ZSB0aGF0IGFsbCBERVIgc2lncyByZXR1cm5lZCBmaWxsIHRoZSBtYXhpbXVtIDc0IGJ5dGUgYnVmZmVyLCBidXQgYWxzb1xuICAgICAgICAvLyBjb250YWluIGEgbGVuZ3RoIGF0IG9mZisxLCB3aGljaCB3ZSB1c2UgdG8gcGFyc2UgdGhlIG5vbi16ZXJvIGRhdGEuXG4gICAgICAgIC8vIEZpcnN0IGdldCB0aGUgc2lnbmF0dXJlIGZyb20gaXRzIHNsb3RcbiAgICAgICAgY29uc3Qgc2lnU3RhcnQgPSBvZmY7XG4gICAgICAgIGNvbnN0IHNpZ0VuZCA9IG9mZiArIDIgKyByZXNbb2ZmICsgMV07XG4gICAgICAgIHNpZ3MucHVzaChyZXMuc2xpY2Uoc2lnU3RhcnQsIHNpZ0VuZCkpO1xuICAgICAgICAvLyBOZXh0LCBzaGlmdCBieSB0aGUgZnVsbCBzZXQgb2Ygc2lnbmF0dXJlcyB0byBoaXQgdGhlIHJlc3BlY3RpdmUgcHVia2V5XG4gICAgICAgIC8vIE5PVEU6IFRoZSBkYXRhIHJldHVybmVkIGlzOiBbPHNpZzA+LCA8c2lnMT4sIC4uLiA8c2lnOT5dWzxwdWJrZXkwPiwgPHB1YmtleTE+LCAuLi4gPHB1YmtleTk+XVxuICAgICAgICBjb25zdCBwdWJTdGFydCA9IChuICogY29tcHJlc3NlZFB1Ykxlbmd0aCkgKyBQVUJLRVlTX09GRlNFVDtcbiAgICAgICAgY29uc3QgcHViRW5kID0gKChuKzEpICogY29tcHJlc3NlZFB1Ykxlbmd0aCkgKyBQVUJLRVlTX09GRlNFVDtcbiAgICAgICAgcHVia2V5cy5wdXNoKHJlcy5zbGljZShwdWJTdGFydCwgcHViRW5kKSk7XG4gICAgICAgIC8vIFVwZGF0ZSBvZmZzZXQgdG8gaGl0IHRoZSBuZXh0IHNpZ25hdHVyZSBzbG90XG4gICAgICAgIG9mZiArPSBERVJMZW5ndGg7XG4gICAgICAgIG4gKz0gMTtcbiAgICAgIH1cbiAgICAgIC8vIEJ1aWxkIHRoZSB0cmFuc2FjdGlvbiBkYXRhIHRvIGJlIHNlcmlhbGl6ZWRcbiAgICAgIGNvbnN0IHByZVNlcmlhbGl6ZWREYXRhID0ge1xuICAgICAgICBpbnB1dHM6IFtdLFxuICAgICAgICBvdXRwdXRzOiBbXSxcbiAgICAgICAgaXNTZWd3aXRTcGVuZDogcmVxLm9yaWdEYXRhLmlzU2Vnd2l0LFxuICAgICAgICBuZXR3b3JrOiByZXEub3JpZ0RhdGEubmV0d29yayxcbiAgICAgICAgY3J5cHRvOiB0aGlzLmNyeXB0byxcbiAgICAgIH07XG5cbiAgICAgIC8vIEZpcnN0IG91dHB1dCBjb21lcyBmcm9tIHJlcXVlc3QgZHRhXG4gICAgICBwcmVTZXJpYWxpemVkRGF0YS5vdXRwdXRzLnB1c2goe1xuICAgICAgICB2YWx1ZTogcmVxLm9yaWdEYXRhLnZhbHVlLFxuICAgICAgICByZWNpcGllbnQ6IHJlcS5vcmlnRGF0YS5yZWNpcGllbnQsXG4gICAgICB9KTtcbiAgICAgIGlmIChyZXEuY2hhbmdlRGF0YS52YWx1ZSA+IDApIHtcbiAgICAgICAgLy8gU2Vjb25kIG91dHB1dCBjb21lcyBmcm9tIGNoYW5nZSBkYXRhXG4gICAgICAgIHByZVNlcmlhbGl6ZWREYXRhLm91dHB1dHMucHVzaCh7XG4gICAgICAgICAgdmFsdWU6IHJlcS5jaGFuZ2VEYXRhLnZhbHVlLFxuICAgICAgICAgIHJlY2lwaWVudDogY2hhbmdlUmVjaXBpZW50LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLy8gQWRkIHRoZSBpbnB1dHNcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2lncy5sZW5ndGg7IGkrKykge1xuICAgICAgICBwcmVTZXJpYWxpemVkRGF0YS5pbnB1dHMucHVzaCh7XG4gICAgICAgICAgaGFzaDogcmVxLm9yaWdEYXRhLnByZXZPdXRzW2ldLnR4SGFzaCxcbiAgICAgICAgICBpbmRleDogcmVxLm9yaWdEYXRhLnByZXZPdXRzW2ldLmluZGV4LFxuICAgICAgICAgIHNpZzogc2lnc1tpXSxcbiAgICAgICAgICBwdWJrZXk6IHB1YmtleXNbaV0sXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBGaW5hbGx5LCBzZXJpYWxpemUgdGhlIHRyYW5zYWN0aW9uXG4gICAgICBjb25zdCBzZXJpYWxpemVkVHggPSBiaXRjb2luLnNlcmlhbGl6ZVR4KHByZVNlcmlhbGl6ZWREYXRhKTtcbiAgICAgIC8vIEdlbmVyYXRlIHRoZSB0cmFuc2FjdGlvbiBoYXNoIHNvIHRoZSB1c2VyIGNhbiBsb29rIHRoaXMgdHJhbnNhY3Rpb24gdXAgbGF0ZXJcbiAgICAgIGxldCBwcmVJbWFnZVR4SGFzaCA9IHNlcmlhbGl6ZWRUeDtcbiAgICAgIGlmIChwcmVTZXJpYWxpemVkRGF0YS5pc1NlZ3dpdFNwZW5kID09PSB0cnVlKSB7XG4gICAgICAgIC8vIFNlZ3dpdCB0cmFuc2FjdGlvbnMgbmVlZCB0byBiZSByZS1zZXJpYWxpemVkIHVzaW5nIGxlZ2FjeSBzZXJpYWxpemF0aW9uXG4gICAgICAgIC8vIGJlZm9yZSB0aGUgdHJhbnNhY3Rpb24gaGFzaCBpcyBjYWxjdWxhdGVkLiBUaGlzIGFsbG93cyBsZWdhY3kgY2xpZW50c1xuICAgICAgICAvLyB0byB2YWxpZGF0ZSB0aGUgdHJhbnNhY3Rpb25zLlxuICAgICAgICBwcmVTZXJpYWxpemVkRGF0YS5pc1NlZ3dpdFNwZW5kID0gZmFsc2U7XG4gICAgICAgIHByZUltYWdlVHhIYXNoID0gYml0Y29pbi5zZXJpYWxpemVUeChwcmVTZXJpYWxpemVkRGF0YSk7XG4gICAgICB9ICBcbiAgICAgIGxldCB0eEhhc2ggPSB0aGlzLmNyeXB0by5jcmVhdGVIYXNoKCdzaGEyNTYnKS51cGRhdGUoQnVmZmVyLmZyb20ocHJlSW1hZ2VUeEhhc2gsICdoZXgnKSkuZGlnZXN0KCk7XG4gICAgICB0eEhhc2ggPSB0aGlzLmNyeXB0by5jcmVhdGVIYXNoKCdzaGEyNTYnKS51cGRhdGUodHhIYXNoKS5kaWdlc3QoKS5yZXZlcnNlKCkudG9TdHJpbmcoJ2hleCcpO1xuICAgICAgXG4gICAgICAvLyBBZGQgZXh0cmEgZGF0YSBmb3IgZGVidWdnaW5nL2xvb2t1cCBwdXJwb3Nlc1xuICAgICAgcmV0dXJuRGF0YS5kYXRhID0ge1xuICAgICAgICB0eDogc2VyaWFsaXplZFR4LFxuICAgICAgICB0eEhhc2gsXG4gICAgICAgIGNoYW5nZVJlY2lwaWVudCxcbiAgICAgICAgc2lncyxcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGN1cnJlbmN5VHlwZSA9PT0gJ0VUSCcpIHtcbiAgICAgIGNvbnN0IHNpZyA9IHBhcnNlREVSKHJlcy5zbGljZShvZmYsIChvZmYgKyAyICsgcmVzW29mZiArIDFdKSkpOyBvZmYgKz0gREVSTGVuZ3RoO1xuICAgICAgY29uc3QgZXRoQWRkciA9IHJlcy5zbGljZShvZmYsIG9mZiArIDIwKTtcbiAgICAgIC8vIERldGVybWluZSB0aGUgYHZgIHBhcmFtIGFuZCBhZGQgaXQgdG8gdGhlIHNpZyBiZWZvcmUgcmV0dXJuaW5nXG4gICAgICBjb25zdCByYXdUeCA9IGV0aGVyZXVtLmJ1aWxkRXRoUmF3VHgocmVxLCBzaWcsIGV0aEFkZHIsIHJlcS51c2VFSVAxNTUpO1xuICAgICAgcmV0dXJuRGF0YS5kYXRhID0ge1xuICAgICAgICB0eDogYDB4JHtyYXdUeH1gLFxuICAgICAgICB0eEhhc2g6IGAweCR7ZXRoZXJldW0uaGFzaFRyYW5zYWN0aW9uKHJhd1R4KX1gLFxuICAgICAgICBzaWc6IHtcbiAgICAgICAgICB2OiBzaWcudixcbiAgICAgICAgICByOiBzaWcuci50b1N0cmluZygnaGV4JyksXG4gICAgICAgICAgczogc2lnLnMudG9TdHJpbmcoJ2hleCcpLFxuICAgICAgICB9LFxuICAgICAgICBzaWduZXI6IGV0aEFkZHIsXG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAoY3VycmVuY3lUeXBlID09PSAnRVRIX01TRycpIHtcbiAgICAgIGNvbnN0IHNpZyA9IHBhcnNlREVSKHJlcy5zbGljZShvZmYsIChvZmYgKyAyICsgcmVzW29mZiArIDFdKSkpOyBvZmYgKz0gREVSTGVuZ3RoO1xuICAgICAgY29uc3Qgc2lnbmVyID0gcmVzLnNsaWNlKG9mZiwgb2ZmICsgMjApO1xuICAgICAgY29uc3QgdmFsaWRhdGVkU2lnID0gZXRoZXJldW0udmFsaWRhdGVFdGhlcmV1bU1zZ1Jlc3BvbnNlKHsgc2lnbmVyLCBzaWcgfSwgcmVxKTtcbiAgICAgIHJldHVybkRhdGEuZGF0YSA9IHtcbiAgICAgICAgc2lnOiB7XG4gICAgICAgICAgdjogdmFsaWRhdGVkU2lnLnYsXG4gICAgICAgICAgcjogdmFsaWRhdGVkU2lnLnIudG9TdHJpbmcoJ2hleCcpLFxuICAgICAgICAgIHM6IHZhbGlkYXRlZFNpZy5zLnRvU3RyaW5nKCdoZXgnKSxcbiAgICAgICAgfSxcbiAgICAgICAgc2lnbmVyLFxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXR1cm5EYXRhO1xuICB9XG5cbiAgX3Jlc2V0QWN0aXZlV2FsbGV0cygpIHtcbiAgICB0aGlzLmFjdGl2ZVdhbGxldHMuaW50ZXJuYWwudWlkID0gRU1QVFlfV0FMTEVUX1VJRDtcbiAgICB0aGlzLmFjdGl2ZVdhbGxldHMuaW50ZXJuYWwubmFtZSA9IG51bGw7XG4gICAgdGhpcy5hY3RpdmVXYWxsZXRzLmludGVybmFsLmNhcGFiaWxpdGllcyA9IG51bGw7XG4gICAgdGhpcy5hY3RpdmVXYWxsZXRzLmV4dGVybmFsLnVpZCA9IEVNUFRZX1dBTExFVF9VSUQ7XG4gICAgdGhpcy5hY3RpdmVXYWxsZXRzLmV4dGVybmFsLm5hbWUgPSBudWxsO1xuICAgIHRoaXMuYWN0aXZlV2FsbGV0cy5leHRlcm5hbC5jYXBhYmlsaXRpZXMgPSBudWxsO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGdldEFjdGl2ZVdhbGxldCgpIHtcbiAgICBpZiAoIUVNUFRZX1dBTExFVF9VSUQuZXF1YWxzKHRoaXMuYWN0aXZlV2FsbGV0cy5leHRlcm5hbC51aWQpKSB7XG4gICAgICByZXR1cm4gdGhpcy5hY3RpdmVXYWxsZXRzLmV4dGVybmFsO1xuICAgIH0gZWxzZSBpZiAoIUVNUFRZX1dBTExFVF9VSUQuZXF1YWxzKHRoaXMuYWN0aXZlV2FsbGV0cy5pbnRlcm5hbC51aWQpKSB7XG4gICAgICByZXR1cm4gdGhpcy5hY3RpdmVXYWxsZXRzLmludGVybmFsO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBoYXNBY3RpdmVXYWxsZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QWN0aXZlV2FsbGV0KCkgIT09IG51bGw7XG4gIH1cbiAgXG4gIC8vIEdldCA2NCBieXRlcyByZXByZXNlbnRpbmcgdGhlIHB1YmxpYyBrZXlcbiAgLy8gVGhpcyBpcyB0aGUgdW5jb21wcmVzc2VkIGtleSB3aXRob3V0IHRoZSBsZWFkaW5nIDA0IGJ5dGVcbiAgcHViS2V5Qnl0ZXMoTEU9ZmFsc2UpIHtcbiAgICBjb25zdCBrID0gdGhpcy5rZXkuZ2V0UHVibGljKCk7XG4gICAgY29uc3QgcCA9IGsuZW5jb2RlKCdoZXgnKTtcbiAgICBjb25zdCBwYiA9IEJ1ZmZlci5mcm9tKHAsICdoZXgnKTtcbiAgICBpZiAoTEUgPT09IHRydWUpIHtcbiAgICAgIC8vIE5lZWQgdG8gZmxpcCBYIGFuZCBZIGNvbXBvbmVudHMgdG8gbGl0dGxlIGVuZGlhblxuICAgICAgY29uc3QgeCA9IHBiLnNsaWNlKDEsIDMzKS5yZXZlcnNlKCk7XG4gICAgICBjb25zdCB5ID0gcGIuc2xpY2UoMzMsIDY1KS5yZXZlcnNlKCk7XG4gICAgICByZXR1cm4gQnVmZmVyLmNvbmNhdChbcGJbMF0sIHgsIHldKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHBiO1xuICAgIH1cbiAgfVxuXG4gIC8vIFRPRE86IEZpbmQgYSBiZXR0ZXIgd2F5IHRvIGV4cG9ydCB0aGlzLlxuICBwYXJzZUFiaShzb3VyY2UsIGRhdGEpIHtcbiAgICBzd2l0Y2ggKHNvdXJjZSkge1xuICAgICAgY2FzZSAnZXRoZXJzY2FuJzpcbiAgICAgICAgcmV0dXJuIGFiaVBhcnNlcnNbc291cmNlXShkYXRhKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB7IGVycjogYE5vICR7c291cmNlfSBwYXJzZXIgYXZhaWxhYmxlLmAgfTtcblxuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENsaWVudDtcbiIsIi8vIENvbnNpc3RlbnQgd2l0aCBMYXR0aWNlJ3MgSVZcbmNvbnN0IEFFU19JViA9IFsweDZkLCAweDc5LCAweDczLCAweDY1LCAweDYzLCAweDcyLCAweDY1LCAweDc0LCAweDcwLCAweDYxLCAweDczLCAweDczLCAweDc3LCAweDZmLCAweDcyLCAweDY0XVxuXG5jb25zdCBBRERSX1NUUl9MRU4gPSAxMjk7IC8vIDEyOC1jaGFyIHN0cmluZ3MgKG51bGwgdGVybWluYXRlZClcblxuLy8gRGVjcnlwdGVkIHJlc3BvbnNlIGxlbmd0aHMgd2lsbCBiZSBmaXhlZCBmb3IgYW55IGdpdmVuIG1lc3NhZ2UgdHlwZS5cbi8vIFRoZXNlIGFyZSBkZWZpbmVkIGluIHRoZSBMYXR0aWNlIHNwZWMuXG4vLyBFdmVyeSBkZWNyeXB0ZWQgcmVzcG9uc2Ugc2hvdWxkIGhhdmUgYSA2NS1ieXRlIHB1YmtleSBwcmVmaXhpbmcgaXQgKGFuZCBhIDQtYnl0ZSByZXF1ZXN0IElEKVxuLy8gVGhlc2UgYXJlIE5PVCBjb3VudGVkIGluIGBkZWNSZXNMZW5ndGhzYCwgbWVhbmluZyB0aGVzZSB2YWx1ZXMgYXJlIDY5LWJ5dGVzIHNtYWxsZXIgdGhhbiB0aGVcbi8vIGNvcnJlc3BvbmRpbmcgc3RydWN0cyBpbiBmaXJtd2FyZS5cbmNvbnN0IGRlY1Jlc0xlbmd0aHMgPSB7XG4gICAgZmluYWxpemVQYWlyOiAwLCAgICAgICAgICAgICAgICAgICAgLy8gT25seSBjb250YWlucyB0aGUgcHVia2V5XG4gICAgZ2V0QWRkcmVzc2VzOiAxMCAqIEFERFJfU1RSX0xFTiwgICAgLy8gMTB4IDEyOSBieXRlIHN0cmluZ3MgKDEyOCBieXRlcyArIG51bGwgdGVybWluYXRvcilcbiAgICBzaWduOiAxMDkwLCAgICAgICAgICAgICAgICAgICAgICAgICAvLyAxIERFUiBzaWduYXR1cmUgZm9yIEVUSCwgMTAgZm9yIEJUQyArIGNoYW5nZSBwdWJrZXloYXNoXG4gICAgZ2V0V2FsbGV0czogMTQyLCAgICAgICAgICAgICAgICAgICAgLy8gNzEgYnl0ZXMgcGVyIHdhbGxldCByZWNvcmQgKHJlc3BvbnNlIGNvbnRhaW5zIGludGVybmFsIGFuZCBleHRlcm5hbClcbiAgICBhZGRBYmlEZWZzOiA4LFxuICAgIHRlc3Q6IDE2NDYgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1heCBzaXplIG9mIHRlc3QgcmVzcG9uc2UgcGF5bG9hZFxufVxuXG4vLyBFdmVyeSBjb3JyZXNwb25kaW5nIGRlY3J5cHRlZCByZXNwb25zZSBzdHJ1Y3QgaW4gZmlybXdhcmUgaGFzIGEgcHVia2V5XG4vLyBhbmQgY2hlY2tzdW0gYWRkZWQuIFRoZXNlIGFyZSBub3QgaW5jbHVkZWQgaW4gYGRlY1Jlc0xlbmd0aHNgXG5jb25zdCBERVNfUkVTX0VYVFJBREFUQV9MRU4gPSA2OTsgXG5cbi8vIEVuY3J5cHRlZCByZXNwb25zZXMgYWxzbyBoYXZlIG1ldGFkYXRhXG4vLyBQcmVmaXg6XG4vLyAqIHByb3RvY29sIHZlcnNpb24gKDEgYnl0ZSlcbi8vICogcmVzcG9uc2UgdHlwZSwgcmVzZXJ2ZWQgKDEgYnl0ZSkgLS0gbm90IHVzZWRcbi8vICogcmVzcG9uc2UgaWQgKDQgYnl0ZXMpIC0tIG5vdCB1c2VkXG4vLyAqIHBheWxvYWQgbGVuZ3RoICgyIGJ5dGVzKVxuLy8gKiByZXNwb25zZSBjb2RlICgxIGJ5dGUpXG4vLyBTdWZmaXg6XG4vLyAqIGNoZWNrc3VtICg0IGJ5dGVzKSAtLSBOT1QgdGhlIHNhbWUgY2hlY2tzdW0gYXMgaW5zaWRlIHRoZSBkZWNyeXB0ZWQgbXNnXG5jb25zdCBFTkNfTVNHX01FVEFEQVRBX0xFTiA9IDEzO1xuXG5jb25zdCBFTkNfTVNHX0VYVFJBX0xFTiA9IERFU19SRVNfRVhUUkFEQVRBX0xFTiArIEVOQ19NU0dfTUVUQURBVEFfTEVOO1xuLy8gUGVyIExhdHRpY2Ugc3BlYywgYWxsIGVuY3J5cHRlZCBtZXNzYWdlcyBtdXN0IGZpdCBpbiBhIGJ1ZmZlciBvZiB0aGlzIHNpemUuXG4vLyBUaGUgbGVuZ3RoIGNvbWVzIGZyb20gdGhlIGxhcmdlc3QgcmVxdWVzdC9yZXNwb25zZSBkYXRhIHR5cGUgc2l6ZVxuLy8gV2UgYWxzbyBhZGQgdGhlIHByZWZpeCBsZW5ndGhcbmxldCBFTkNfTVNHX0xFTiA9IDA7XG5PYmplY3Qua2V5cyhkZWNSZXNMZW5ndGhzKS5mb3JFYWNoKChrKSA9PiB7XG4gICAgaWYgKGRlY1Jlc0xlbmd0aHNba10gKyBFTkNfTVNHX0VYVFJBX0xFTiA+IEVOQ19NU0dfTEVOKVxuICAgICAgICBFTkNfTVNHX0xFTiA9IGRlY1Jlc0xlbmd0aHNba10gKyBFTkNfTVNHX0VYVFJBX0xFTjtcbn0pXG4gIFxuY29uc3QgZGV2aWNlQ29kZXMgPSB7XG4gICAgJ0NPTk5FQ1QnOiAxLFxuICAgICdFTkNSWVBURURfUkVRVUVTVCc6IDIsXG59XG5cbmNvbnN0IGVuY1JlcUNvZGVzID0ge1xuICAgICdGSU5BTElaRV9QQUlSSU5HJzogMHgwMCxcbiAgICAnR0VUX0FERFJFU1NFUyc6IDB4MDEsXG4gICAgJ0FERF9QRVJNSVNTSU9OJzogMHgwMixcbiAgICAnU0lHTl9UUkFOU0FDVElPTic6IDB4MDMsXG4gICAgJ0dFVF9XQUxMRVRTJzogMHgwNCxcbiAgICAnQUREX1BFUk1JU1NJT05fVjAnOiAweDA1LFxuICAgICdBRERfQUJJX0RFRlMnOiAweDA2LFxuICAgICdURVNUJzogMHgwNyxcbn1cblxuY29uc3QgbWVzc2FnZUNvbnN0YW50cyA9IHtcbiAgICAnTk9UX1BBSVJFRCc6IDB4MDAsXG4gICAgJ1BBSVJFRCc6IDB4MDEsXG59XG5cbmNvbnN0IGFkZHJlc3NTaXplcyA9IHtcbiAgICAnQlRDJzogMjAsICAvLyAyMCBieXRlIHB1YmtleWhhc2hcbiAgICAnRVRIJzogMjAsICAvLyAyMCBieXRlIGFkZHJlc3Mgbm90IGluY2x1ZGluZyAweCBwcmVmaXhcbn1cbiAgXG5jb25zdCByZXNwb25zZUNvZGVzID0ge1xuICAgIFJFU1BfU1VDQ0VTUzogMHgwMCxcbiAgICBSRVNQX0VSUl9JTlZBTElEX01TRzogMHg4MCxcbiAgICBSRVNQX0VSUl9VTlNVUFBPUlRFRF9WRVI6IDB4ODEsXG4gICAgUkVTUF9FUlJfREVWX0JVU1k6IDB4ODIsXG4gICAgUkVTUF9FUlJfVVNFUl9USU1FT1VUOiAweDgzLFxuICAgIFJFU1BfRVJSX1VTRVJfREVDTElORUQ6IDB4ODQsXG4gICAgUkVTUF9FUlJfUEFJUl9GQUlMOiAweDg1LFxuICAgIFJFU1BfRVJSX1BBSVJfRElTQUJMRUQ6IDB4ODYsXG4gICAgUkVTUF9FUlJfUEVSTUlTU0lPTl9ESVNBQkxFRDogMHg4NyxcbiAgICBSRVNQX0VSUl9JTlRFUk5BTDogMHg4OCxcbiAgICBSRVNQX0VSUl9HQ0VfVElNRU9VVDogMHg4OSxcbiAgICBSRVNQX0VSUl9XQUxMRVRfTk9UX1BSRVNFTlQ6IDB4OGEsXG4gICAgUkVTUF9FUlJfREVWX0xPQ0tFRDogMHg4YixcbiAgICBSRVNQX0VSUl9ESVNBQkxFRDogMHg4YyxcbiAgICBSRVNQX0VSUl9BTFJFQURZOiAweDhkLFxufVxuXG5jb25zdCByZXNwb25zZU1zZ3MgPSB7XG4gICAgW3Jlc3BvbnNlQ29kZXMuUkVTUF9TVUNDRVNTXTogMHgwMCxcbiAgICBbcmVzcG9uc2VDb2Rlcy5SRVNQX0VSUl9JTlZBTElEX01TR106ICdJbnZhbGlkIFJlcXVlc3QnLFxuICAgIFtyZXNwb25zZUNvZGVzLlJFU1BfRVJSX1VOU1VQUE9SVEVEX1ZFUl06ICdVbnN1cHBvcnRlZCBWZXJzaW9uJyxcbiAgICBbcmVzcG9uc2VDb2Rlcy5SRVNQX0VSUl9ERVZfQlVTWV06ICdEZXZpY2UgQnVzeScsXG4gICAgW3Jlc3BvbnNlQ29kZXMuUkVTUF9FUlJfVVNFUl9USU1FT1VUXTogJ1RpbWVvdXQgV2FpdGluZyBmb3IgVXNlcicsXG4gICAgW3Jlc3BvbnNlQ29kZXMuUkVTUF9FUlJfVVNFUl9ERUNMSU5FRF06ICdSZXF1ZXN0IERlY2xpbmVkIGJ5IFVzZXInLFxuICAgIFtyZXNwb25zZUNvZGVzLlJFU1BfRVJSX1BBSVJfRkFJTF06ICdQYWlyaW5nIEZhaWxlZCcsXG4gICAgW3Jlc3BvbnNlQ29kZXMuUkVTUF9FUlJfUEFJUl9ESVNBQkxFRF06ICdQYWlyaW5nIGlzIEN1cnJlbnRseSBEaXNhYmxlZCcsXG4gICAgW3Jlc3BvbnNlQ29kZXMuUkVTUF9FUlJfUEVSTUlTU0lPTl9ESVNBQkxFRF06ICdBdXRvbWF0ZWQgU2lnbmluZyBpcyBDdXJyZW50bHkgRGlzYWJsZWQnLFxuICAgIFtyZXNwb25zZUNvZGVzLlJFU1BfRVJSX0lOVEVSTkFMXTogJ0RldmljZSBFcnJvcicsXG4gICAgW3Jlc3BvbnNlQ29kZXMuUkVTUF9FUlJfR0NFX1RJTUVPVVRdOiAnVGltZW91dCcsXG4gICAgW3Jlc3BvbnNlQ29kZXMuUkVTUF9FUlJfV0FMTEVUX05PVF9QUkVTRU5UXTogJ0luY29ycmVjdCBXYWxsZXQgVUlEIFByb3ZpZGVkJyxcbiAgICBbcmVzcG9uc2VDb2Rlcy5SRVNQX0VSUl9ERVZfTE9DS0VEXTogJ0RldmljZSBMb2NrZWQnLFxuICAgIFtyZXNwb25zZUNvZGVzLlJFU1BfRVJSX0RJU0FCTEVEXTogJ0Rpc2FibGVkJyxcbiAgICBbcmVzcG9uc2VDb2Rlcy5SRVNQX0VSUl9BTFJFQURZXTogJ1JlY29yZCBhbHJlYWR5IGV4aXN0cy4gWW91IG11c3QgZmlyc3QgcmVtb3ZlIGl0IG9uIHlvdXIgZGV2aWNlLidcbn1cbiBcblxuY29uc3Qgc2lnbmluZ1NjaGVtYSA9IHtcbiAgICBCVENfVFJBTlNGRVI6IDAsXG4gICAgRVRIX1RSQU5TRkVSOiAxLFxuICAgIEVSQzIwX1RSQU5TRkVSOiAyLFxuICAgIEVUSF9NU0c6IDMsXG59XG5cbmNvbnN0IGV0aE1zZ1Byb3RvY29sID0ge1xuICAgIFNJR05fUEVSU09OQUw6IDAsXG59XG5cbmNvbnN0IFJFUVVFU1RfVFlQRV9CWVRFID0gMHgwMjsgLy8gRm9yIGFsbCBIU00tYm91bmQgcmVxdWVzdHNcbmNvbnN0IFZFUlNJT05fQllURSA9IDE7XG5jb25zdCBIQVJERU5FRF9PRkZTRVQgPSAweDgwMDAwMDAwOyAvLyBIYXJkZW5lZCBvZmZzZXRcbmNvbnN0IEhBTkRMRV9MQVJHRVJfQ0hBSU5fSUQgPSAyNTU7IC8vIENoYWluSWQgdmFsdWUgdG8gc2lnbmlmeSBsYXJnZXIgY2hhaW5JRCBpcyBpbiBkYXRhIGJ1ZmZlclxuY29uc3QgTUFYX0NIQUlOX0lEX0JZVEVTID0gODsgLy8gTWF4IG51bWJlciBvZiBieXRlcyB0byBjb250YWluIGxhcmdlciBjaGFpbklEIGluIGRhdGEgYnVmZmVyXG5cbmNvbnN0IEJBU0VfVVJMID0gJ2h0dHBzOi8vc2lnbmluZy5ncmlkcGwudXMnO1xuXG5jb25zdCBFVEhfQUJJX0xBVFRJQ0VfRldfVFlQRV9NQVAgPSB7XG4gICAgJ2FkZHJlc3MnOiAxLFxuICAgICdib29sJzogMixcbiAgICAndWludDgnOiAzLFxuICAgICd1aW50MTYnOiA0LFxuICAgICd1aW50MzInOiA1LFxuICAgICd1aW50NjQnOiA2LFxuICAgICd1aW50MTI4JzogNyxcbiAgICAndWludDI1Nic6IDgsXG4gICAgLy8gJ2ludDgnOiA5LCAgICAgIC8vIFdlIGRvIG5vdCBzdXBwb3J0IHNpZ25lZCBpbnRlZ2VyIHR5cGVzIGluIHYxIGJlY2F1c2Ugd2UgY2FuJ3QgZGlzcGxheSB0aGVtXG4gICAgLy8gJ2ludDE2JzogMTAsXG4gICAgLy8gJ2ludDI0JzogMTEsXG4gICAgLy8gJ2ludDY0JzogMTIsXG4gICAgLy8gJ2ludDEyOCc6IDEzLFxuICAgIC8vICdpbnQyNTYnOiAxNCxcbiAgICAndWludCc6IDE1LFxuICAgIC8vICdpbnQnOiAxNixcbiAgICAnYnl0ZXMxJzogMTcsXG4gICAgJ2J5dGVzMic6IDE4LFxuICAgICdieXRlczMnOiAxOSxcbiAgICAnYnl0ZXM0JzogMjAsXG4gICAgJ2J5dGVzNSc6IDIxLFxuICAgICdieXRlczYnOiAyMixcbiAgICAnYnl0ZXM3JzogMjMsXG4gICAgJ2J5dGVzOCc6IDI0LFxuICAgICdieXRlczknOiAyNSxcbiAgICAnYnl0ZXMxMCc6IDI2LFxuICAgICdieXRlczExJzogMjcsXG4gICAgJ2J5dGVzMTInOiAyOCxcbiAgICAnYnl0ZXMxMyc6IDI5LFxuICAgICdieXRlczE0JzogMzAsXG4gICAgJ2J5dGVzMTUnOiAzMSxcbiAgICAnYnl0ZXMxNic6IDMyLFxuICAgICdieXRlczE3JzogMzMsXG4gICAgJ2J5dGVzMTgnOiAzNCxcbiAgICAnYnl0ZXMxOSc6IDM1LFxuICAgICdieXRlczIwJzogMzYsXG4gICAgJ2J5dGVzMjEnOiAzNyxcbiAgICAnYnl0ZXMyMic6IDM4LFxuICAgICdieXRlczIzJzogMzksXG4gICAgJ2J5dGVzMjQnOiA0MCxcbiAgICAnYnl0ZXMyNSc6IDQxLFxuICAgICdieXRlczI2JzogNDIsXG4gICAgJ2J5dGVzMjcnOiA0MyxcbiAgICAnYnl0ZXMyOCc6IDQ0LFxuICAgICdieXRlczI5JzogNDUsXG4gICAgJ2J5dGVzMzAnOiA0NixcbiAgICAnYnl0ZXMzMSc6IDQ3LFxuICAgICdieXRlczMyJzogNDgsXG4gICAgJ2J5dGVzJzogNDksXG4gICAgJ3N0cmluZyc6IDUwLFxufTtcblxuZnVuY3Rpb24gZ2V0RndWZXJzaW9uQ29uc3Qodikge1xuICAgIGNvbnN0IGMgPSB7XG4gICAgICAgIHJlcU1heERhdGFTejogMTE1MixcbiAgICB9O1xuICAgIGlmICh2Lmxlbmd0aCA9PT0gMCB8fCAodlsxXSA8IDEwICYmIHZbMl0gPT09IDApKSB7XG4gICAgICAgIGMuZXRoTWF4RGF0YVN6ID0gYy5yZXFNYXhEYXRhU3ogLSAxMjg7XG4gICAgICAgIGMuZXRoTWF4TXNnU3ogPSBjLmV0aE1heERhdGFTejtcbiAgICAgICAgYy5ldGhNYXhHYXNQcmljZSA9IDUwMDAwMDAwMDAwMDsgLy8gNTAwIGd3ZWlcbiAgICAgICAgYy5hZGRyRmxhZ3NBbGxvd2VkID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmICh2WzFdID49IDEwICYmIHZbMl0gPj0gMCkge1xuICAgICAgICBjLnJlcU1heERhdGFTeiA9IDE2Nzg7XG4gICAgICAgIGMuZXRoTWF4RGF0YVN6ID0gYy5yZXFNYXhEYXRhU3ogLSAxMjg7XG4gICAgICAgIGMuZXRoTWF4TXNnU3ogPSBjLmV0aE1heERhdGFTejtcbiAgICAgICAgYy5ldGhNYXhHYXNQcmljZSA9IDIwMDAwMDAwMDAwMDAwOyAvLyAyMDAwMCBnd2VpXG4gICAgICAgIGMuYWRkckZsYWdzQWxsb3dlZCA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiBjO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBnZXRGd1ZlcnNpb25Db25zdCxcbiAgICBBRERSX1NUUl9MRU4sXG4gICAgQUVTX0lWLFxuICAgIEJBU0VfVVJMLFxuICAgIEVOQ19NU0dfTEVOLFxuICAgIGFkZHJlc3NTaXplcyxcbiAgICBkZWNSZXNMZW5ndGhzLFxuICAgIGRldmljZUNvZGVzLFxuICAgIGVuY1JlcUNvZGVzLFxuICAgIGV0aE1zZ1Byb3RvY29sLFxuICAgIG1lc3NhZ2VDb25zdGFudHMsXG4gICAgcmVzcG9uc2VDb2RlcyxcbiAgICByZXNwb25zZU1zZ3MsXG4gICAgc2lnbmluZ1NjaGVtYSxcbiAgICBSRVFVRVNUX1RZUEVfQllURSxcbiAgICBWRVJTSU9OX0JZVEUsXG4gICAgSEFSREVORURfT0ZGU0VULFxuICAgIEhBTkRMRV9MQVJHRVJfQ0hBSU5fSUQsXG4gICAgTUFYX0NIQUlOX0lEX0JZVEVTLFxuICAgIEVUSF9BQklfTEFUVElDRV9GV19UWVBFX01BUCxcbn0iLCIvLyBVdGlscyBmb3IgRXRoZXJldW0gdHJhbnNhY3Rpb25zLiBUaGlzIGlzIGVmZmVjaXR2ZWx5IGEgc2hpbSBvZiBldGhlcmV1bWpzLXV0aWwsIHdoaWNoXG4vLyBkb2VzIG5vdCBoYXZlIGJyb3dzZXIgKG9yLCBieSBwcm94eSwgUmVhY3QtTmF0aXZlKSBzdXBwb3J0LlxuY29uc3QgQk4gPSByZXF1aXJlKCdiaWdudW1iZXIuanMnKTtcbmNvbnN0IEJ1ZmZlciA9IHJlcXVpcmUoJ2J1ZmZlci8nKS5CdWZmZXJcbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJyk7XG5jb25zdCBrZWNjYWsyNTYgPSByZXF1aXJlKCdqcy1zaGEzJykua2VjY2FrMjU2O1xuY29uc3QgcmxwID0gcmVxdWlyZSgncmxwLWJyb3dzZXInKTtcbmNvbnN0IHNlY3AyNTZrMSA9IHJlcXVpcmUoJ3NlY3AyNTZrMScpO1xuXG5leHBvcnRzLmJ1aWxkRXRoZXJldW1Nc2dSZXF1ZXN0ID0gZnVuY3Rpb24oaW5wdXQpIHtcbiAgaWYgKCFpbnB1dC5wYXlsb2FkIHx8ICFpbnB1dC5wcm90b2NvbCB8fCAhaW5wdXQuc2lnbmVyUGF0aClcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBtdXN0IHByb3ZpZGUgYHBheWxvYWRgLCBgc2lnbmVyUGF0aGAsIGFuZCBgcHJvdG9jb2xgIGFyZ3VtZW50cyBpbiB0aGUgbWVzc3NhZ2UgcmVxdWVzdCcpO1xuICBjb25zdCByZXEgPSB7XG4gICAgc2NoZW1hOiBjb25zdGFudHMuc2lnbmluZ1NjaGVtYS5FVEhfTVNHLFxuICAgIHBheWxvYWQ6IG51bGwsXG4gICAgaW5wdXQsIC8vIFNhdmUgdGhlIGlucHV0IGZvciBsYXRlclxuICAgIG1zZzogbnVsbCwgLy8gU2F2ZSB0aGUgYnVmZmVyZWQgbWVzc2FnZSBmb3IgbGF0ZXJcbiAgfVxuICBpZiAoaW5wdXQucHJvdG9jb2wgPT09ICdzaWduUGVyc29uYWwnKSB7XG4gICAgY29uc3QgTCA9ICgoaW5wdXQuc2lnbmVyUGF0aC5sZW5ndGggKyAxKSAqIDQpICsgaW5wdXQuZXRoTWF4TXNnU3ogKyA0O1xuICAgIGxldCBvZmYgPSAwO1xuICAgIHJlcS5wYXlsb2FkID0gQnVmZmVyLmFsbG9jKEwpO1xuICAgIHJlcS5wYXlsb2FkLndyaXRlVUludDgoY29uc3RhbnRzLmV0aE1zZ1Byb3RvY29sLlNJR05fUEVSU09OQUwsIDApOyBvZmYgKz0gMTtcbiAgICByZXEucGF5bG9hZC53cml0ZVVJbnQzMkxFKGlucHV0LnNpZ25lclBhdGgubGVuZ3RoLCBvZmYpOyBvZmYgKz0gNDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0LnNpZ25lclBhdGgubGVuZ3RoOyBpKyspIHtcbiAgICAgIHJlcS5wYXlsb2FkLndyaXRlVUludDMyTEUoaW5wdXQuc2lnbmVyUGF0aFtpXSwgb2ZmKTsgb2ZmICs9IDQ7XG4gICAgfVxuICAgIC8vIFdyaXRlIHRoZSBwYXlsb2FkIGJ1ZmZlci4gVGhlIHBheWxvYWQgY2FuIGNvbWUgaW4gZWl0aGVyIGFzIGEgYnVmZmVyIG9yIGFzIGEgc3RyaW5nXG4gICAgbGV0IHBheWxvYWQgPSBpbnB1dC5wYXlsb2FkO1xuICAgIC8vIERldGVybWluZSBpZiB0aGlzIGlzIGEgaGV4IHN0cmluZ1xuICAgIGxldCBkaXNwbGF5SGV4ID0gZmFsc2U7XG4gICAgaWYgKHR5cGVvZiBpbnB1dC5wYXlsb2FkID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKGlucHV0LnBheWxvYWQuc2xpY2UoMCwgMikgPT09ICcweCcpIHtcbiAgICAgICAgcGF5bG9hZCA9IGVuc3VyZUhleEJ1ZmZlcihpbnB1dC5wYXlsb2FkKVxuICAgICAgICBkaXNwbGF5SGV4ID0gdHJ1ZSA9PT0gaXNIZXhTdHIoaW5wdXQucGF5bG9hZC5zbGljZSgyKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZmFsc2UgPT09IGxhdHRpY2VDYW5EaXNwbGF5U3RyKGlucHV0LnBheWxvYWQpKVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ3VycmVudGx5LCB0aGUgTGF0dGljZSBjYW4gb25seSBkaXNwbGF5IEFTQ0lJIHN0cmluZ3MuJyk7XG4gICAgICAgIHBheWxvYWQgPSBCdWZmZXIuZnJvbShpbnB1dC5wYXlsb2FkKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGlucHV0LmRpc3BsYXlIZXggPT09ICdib29sZWFuJykge1xuICAgICAgLy8gSWYgdGhpcyBpcyBhIGJ1ZmZlciBhbmQgdGhlIHVzZXIgaGFzIHNwZWNpZmllZCB3aGV0aGVyIG9yIG5vdCB0aGlzXG4gICAgICAvLyBpcyBhIGhleCBidWZmZXIgd2l0aCB0aGUgb3B0aW9uYWwgYXJndW1lbnQsIHdyaXRlIHRoYXRcbiAgICAgIGRpc3BsYXlIZXggPSBpbnB1dC5kaXNwbGF5SGV4XG4gICAgfVxuICAgIC8vIFdyaXRlIHRoZSBwYXlsb2FkIGFuZCBtZXRhZGF0YSBpbnRvIG91ciBidWZmZXJcbiAgICByZXEubXNnID0gcGF5bG9hZDtcbiAgICByZXEucGF5bG9hZC53cml0ZVVJbnQ4KGRpc3BsYXlIZXgsIG9mZik7IG9mZiArPSAxO1xuICAgIHJlcS5wYXlsb2FkLndyaXRlVUludDE2TEUocGF5bG9hZC5sZW5ndGgsIG9mZik7IG9mZiArPSAyO1xuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkaWRuJ3QgcnVuIHBhc3QgdGhlIG1heCBzaXplXG4gICAgaWYgKHBheWxvYWQubGVuZ3RoID4gaW5wdXQuZXRoTWF4TXNnU3opXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFlvdXIgbWVzc2FnZSBpcyAke3BheWxvYWQubGVuZ3RofSBieXRlcywgYnV0IGNhbiBvbmx5IGJlIGEgbWF4aW11bSBvZiAke2lucHV0LmV0aE1heE1zZ1N6fWApO1xuICAgIHBheWxvYWQuY29weShyZXEucGF5bG9hZCwgb2ZmKTtcbiAgICByZXR1cm4gcmVxO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcignVW5zdXBwb3J0ZWQgcHJvdG9jb2wnKTtcbiAgfVxufVxuXG5leHBvcnRzLnZhbGlkYXRlRXRoZXJldW1Nc2dSZXNwb25zZSA9IGZ1bmN0aW9uKHJlcywgcmVxKSB7XG4gIGNvbnN0IHsgc2lnbmVyLCBzaWcgfSA9IHJlcztcbiAgY29uc3QgeyBpbnB1dCwgbXNnIH0gPSByZXE7XG4gIGlmIChpbnB1dC5wcm90b2NvbCA9PT0gJ3NpZ25QZXJzb25hbCcpIHtcbiAgICBjb25zdCBwcmVmaXggPSBCdWZmZXIuZnJvbShcbiAgICAgIGBcXHUwMDE5RXRoZXJldW0gU2lnbmVkIE1lc3NhZ2U6XFxuJHttc2cubGVuZ3RoLnRvU3RyaW5nKCl9YCxcbiAgICAgICd1dGYtOCcsXG4gICAgKTtcbiAgICByZXR1cm4gYWRkUmVjb3ZlcnlQYXJhbShCdWZmZXIuY29uY2F0KFtwcmVmaXgsIG1zZ10pLCBzaWcsIHNpZ25lcilcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vuc3VwcG9ydGVkIHByb3RvY29sJyk7XG4gIH1cbn1cblxuZXhwb3J0cy5idWlsZEV0aGVyZXVtVHhSZXF1ZXN0ID0gZnVuY3Rpb24oZGF0YSkge1xuICB0cnkge1xuICAgIGxldCB7IGNoYWluSWQ9MSB9ID0gZGF0YTtcbiAgICBjb25zdCB7IHNpZ25lclBhdGgsIGVpcDE1NT1udWxsLCBldGhNYXhEYXRhU3ogfSA9IGRhdGE7XG4gICAgLy8gU2FuaXR5IGNoZWNrczpcbiAgICAvLyBUaGVyZSBhcmUgYSBoYW5kZnVsIG9mIG5hbWVkIGNoYWlucyB3ZSBhbGxvdyB0aGUgdXNlciB0byByZWZlcmVuY2UgKGBjaGFpbklkc2ApXG4gICAgLy8gQ3VzdG9tIGNoYWluSURzIHNob3VsZCBiZSBlaXRoZXIgbnVtZXJpY2FsIG9yIGhleCBzdHJpbmdzXG4gICAgaWYgKHR5cGVvZiBjaGFpbklkICE9PSAnbnVtYmVyJyAmJiBpc1ZhbGlkQ2hhaW5JZEhleE51bVN0cihjaGFpbklkKSA9PT0gZmFsc2UpIFxuICAgICAgY2hhaW5JZCA9IGNoYWluSWRzW2NoYWluSWRdO1xuICAgIC8vIElmIHRoaXMgd2FzIG5vdCBhIGN1c3RvbSBjaGFpbklEIGFuZCB3ZSBjYW5ub3QgZmluZCB0aGUgbmFtZSBvZiBpdCwgZXhpdFxuICAgIGlmICghY2hhaW5JZCkgXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vuc3VwcG9ydGVkIGNoYWluIElEIG9yIG5hbWUnKTtcbiAgICAvLyBTYW5pdHkgY2hlY2sgb24gc2lnbmVQYXRoXG4gICAgaWYgKCFzaWduZXJQYXRoIHx8IHNpZ25lclBhdGgubGVuZ3RoICE9PSA1KSBcbiAgICAgIHRocm93IG5ldyBFcnJvcignUGxlYXNlIHByb3ZpZGVyIGZ1bGwgc2lnbmVyIHBhdGggKGBzaWduZXJQYXRoYCknKVxuXG4gICAgLy8gRGV0ZXJtaW5lIGlmIHdlIHNob3VsZCB1c2UgRUlQMTU1IGdpdmVuIHRoZSBjaGFpbklELlxuICAgIC8vIElmIHdlIGFyZSBleHBsaWNpdGx5IHRvbGQgdG8gdXNlIGVpcDE1NSwgd2Ugd2lsbCB1c2UgaXQuIE90aGVyd2lzZSxcbiAgICAvLyB3ZSB3aWxsIGxvb2sgdXAgaWYgdGhlIHNwZWNpZmllZCBjaGFpbklkIGlzIGFzc29jaWF0ZWQgd2l0aCBhIGNoYWluXG4gICAgLy8gdGhhdCBkb2VzIG5vdCB1c2UgRUlQMTU1IGJ5IGRlZmF1bHQuIE5vdGUgdGhhdCBtb3N0IGRvIHVzZSBFSVAxNTUuXG4gICAgbGV0IHVzZUVJUDE1NSA9IGNoYWluVXNlc0VJUDE1NShjaGFpbklkKTtcbiAgICBpZiAoZWlwMTU1ICE9PSBudWxsICYmIHR5cGVvZiBlaXAxNTUgPT09ICdib29sZWFuJylcbiAgICAgIHVzZUVJUDE1NSA9IGVpcDE1NTtcblxuICAgIC8vIEhhY2sgZm9yIG1ldGFtYXNrLCB3aGljaCBzZW5kcyB2YWx1ZT1udWxsIGZvciAwIEVUSCB0cmFuc2FjdGlvbnNcbiAgICBpZiAoIWRhdGEudmFsdWUpXG4gICAgICBkYXRhLnZhbHVlID0gMDtcbiAgICAgIFxuICAgIC8vLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAxLiBCVUlMRCBUSEUgUkFXIFRYIEZPUiBGVVRVUkUgUkxQIEVOQ09ESU5HXG4gICAgLy8tLS0tLS0tLS0tLS0tLVxuXG4gICAgLy8gRW5zdXJlIGFsbCBmaWVsZHMgYXJlIDB4LXByZWZpeGVkIGhleCBzdHJpbmdzXG4gICAgY29uc3QgcmF3VHggPSBbXTtcbiAgICAvLyBCdWlsZCB0aGUgdHJhbnNhY3Rpb24gYnVmZmVyIGFycmF5XG4gICAgY29uc3Qgbm9uY2VCeXRlcyA9IGVuc3VyZUhleEJ1ZmZlcihkYXRhLm5vbmNlKTtcbiAgICBjb25zdCBnYXNQcmljZUJ5dGVzID0gZW5zdXJlSGV4QnVmZmVyKGRhdGEuZ2FzUHJpY2UpO1xuICAgIGNvbnN0IGdhc0xpbWl0Qnl0ZXMgPSBlbnN1cmVIZXhCdWZmZXIoZGF0YS5nYXNMaW1pdCk7XG4gICAgY29uc3QgdG9CeXRlcyA9IGVuc3VyZUhleEJ1ZmZlcihkYXRhLnRvKTtcbiAgICBjb25zdCB2YWx1ZUJ5dGVzID0gZW5zdXJlSGV4QnVmZmVyKGRhdGEudmFsdWUpO1xuICAgIGNvbnN0IGRhdGFCeXRlcyA9IGVuc3VyZUhleEJ1ZmZlcihkYXRhLmRhdGEpO1xuXG4gICAgcmF3VHgucHVzaChub25jZUJ5dGVzKTtcbiAgICByYXdUeC5wdXNoKGdhc1ByaWNlQnl0ZXMpO1xuICAgIHJhd1R4LnB1c2goZ2FzTGltaXRCeXRlcyk7XG4gICAgcmF3VHgucHVzaCh0b0J5dGVzKTtcbiAgICByYXdUeC5wdXNoKHZhbHVlQnl0ZXMpO1xuICAgIHJhd1R4LnB1c2goZGF0YUJ5dGVzKTtcbiAgICAvLyBBZGQgZW1wdHkgdixyLHMgdmFsdWVzXG4gICAgaWYgKHVzZUVJUDE1NSA9PT0gdHJ1ZSkge1xuICAgICAgcmF3VHgucHVzaChlbnN1cmVIZXhCdWZmZXIoY2hhaW5JZCkpOyAvLyB2XG4gICAgICByYXdUeC5wdXNoKGVuc3VyZUhleEJ1ZmZlcihudWxsKSk7ICAgIC8vIHJcbiAgICAgIHJhd1R4LnB1c2goZW5zdXJlSGV4QnVmZmVyKG51bGwpKTsgICAgLy8gc1xuICAgIH1cblxuICAgIC8vLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAyLiBCVUlMRCBUSEUgTEFUVElDRSBSRVFVRVNUIFBBWUxPQURcbiAgICAvLy0tLS0tLS0tLS0tLS0tXG4gICAgY29uc3QgRVRIX1RYX05PTl9EQVRBX1NaID0gMTIyOyAvLyBBY2NvdW50cyBmb3IgbWV0YWRhdGEgYW5kIG5vbi1kYXRhIHBhcmFtc1xuICAgIGNvbnN0IHR4UmVxUGF5bG9hZCA9IEJ1ZmZlci5hbGxvYyhldGhNYXhEYXRhU3ogKyBFVEhfVFhfTk9OX0RBVEFfU1opO1xuICAgIGxldCBvZmYgPSAwO1xuICAgIC8vIDEuIEVJUDE1NSBzd2l0Y2ggYW5kIGNoYWluSURcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHR4UmVxUGF5bG9hZC53cml0ZVVJbnQ4KE51bWJlcih1c2VFSVAxNTUpLCBvZmYpOyBvZmYrKztcbiAgICAvLyBOT1RFOiBPcmlnaW5hbGx5IHdlIGRlc2lnbmVkIGZvciBhIDEtYnl0ZSBjaGFpbklELCBidXQgbW9kZXJuIHJvbGx1cCBjaGFpbnMgdXNlIG11Y2ggbGFyZ2VyXG4gICAgLy8gY2hhaW5JRCB2YWx1ZXMuIFRvIGFjY291bnQgZm9yIHRoZXNlLCB3ZSB3aWxsIHB1dCB0aGUgY2hhaW5JRCBpbnRvIHRoZSBgZGF0YWAgYnVmZmVyIGlmIGl0XG4gICAgLy8gaXMgPj0yNTUuIFZhbHVlcyB1cCB0byBVSU5UNjRfTUFYIHdpbGwgYmUgYWxsb3dlZC5cbiAgICBsZXQgY2hhaW5JZEJ1ZjsgXG4gICAgbGV0IGNoYWluSWRCdWZTeiA9IDA7XG4gICAgaWYgKHVzZUNoYWluSWRCdWZmZXIoY2hhaW5JZCkgPT09IHRydWUpIHtcbiAgICAgIGNoYWluSWRCdWYgPSBnZXRDaGFpbklkQnVmKGNoYWluSWQpO1xuICAgICAgY2hhaW5JZEJ1ZlN6ID0gY2hhaW5JZEJ1Zi5sZW5ndGg7XG4gICAgICBpZiAoY2hhaW5JZEJ1ZlN6ID4gY29uc3RhbnRzLk1BWF9DSEFJTl9JRF9CWVRFUylcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDaGFpbklEIHByb3ZpZGVkIGlzIHRvbyBsYXJnZS4nKTtcbiAgICAgIC8vIFNpZ25hbCB0byBMYXR0aWNlIGZpcm13YXJlIHRoYXQgaXQgbmVlZHMgdG8gcmVhZCB0aGUgY2hhaW5JZCBmcm9tIHRoZSB0eC5kYXRhIGJ1ZmZlclxuICAgICAgdHhSZXFQYXlsb2FkLndyaXRlVUludDgoY29uc3RhbnRzLkhBTkRMRV9MQVJHRVJfQ0hBSU5fSUQsIG9mZik7IG9mZisrO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBGb3IgY2hhaW5JRHMgPDI1NSwgd3JpdGUgaXQgdG8gdGhlIGNoYWluSWQgdTggc2xvdCBpbiB0aGUgbWFpbiB0eCBidWZmZXJcbiAgICAgIGNoYWluSWRCdWYgPSBlbnN1cmVIZXhCdWZmZXIoY2hhaW5JZCk7XG4gICAgICBpZiAoY2hhaW5JZEJ1Zi5sZW5ndGggIT09IDEpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRXJyb3IgcGFyc2luZyBjaGFpbklEJyk7XG4gICAgICBjaGFpbklkQnVmLmNvcHkodHhSZXFQYXlsb2FkLCBvZmYpOyBvZmYgKz0gY2hhaW5JZEJ1Zi5sZW5ndGg7XG4gICAgfVxuXG4gICAgLy8gMi4gQklQNDQgUGF0aFxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gRmlyc3Qgd3JpdGUgdGhlIG51bWJlciBvZiBpbmRpY2VzIGluIHRoaXMgcGF0aCAod2lsbCBwcm9iYWJseSBhbHdheXMgYmUgNSwgYnV0XG4gICAgLy8gd2Ugd2FudCB0byBrZWVwIHRoaXMgZXh0ZW5zaWJsZSlcbiAgICB0eFJlcVBheWxvYWQud3JpdGVVSW50MzJMRShzaWduZXJQYXRoLmxlbmd0aCwgb2ZmKTsgb2ZmICs9IDQ7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaWduZXJQYXRoLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0eFJlcVBheWxvYWQud3JpdGVVSW50MzJMRShzaWduZXJQYXRoW2ldLCBvZmYpOyBvZmYgKz0gNDtcbiAgICB9XG5cbiAgICAvLyAzLiBFVEggVFggcmVxdWVzdCBkYXRhXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0eFJlcVBheWxvYWQud3JpdGVVSW50MzJCRShkYXRhLm5vbmNlLCBvZmYpOyBvZmYgKz0gNDtcbiAgICB3cml0ZVVJbnQ2NEJFKGRhdGEuZ2FzUHJpY2UsIHR4UmVxUGF5bG9hZCwgb2ZmKTsgb2ZmICs9IDg7XG4gICAgdHhSZXFQYXlsb2FkLndyaXRlVUludDMyQkUoZGF0YS5nYXNMaW1pdCwgb2ZmKTsgb2ZmICs9IDQ7XG4gICAgdG9CeXRlcy5jb3B5KHR4UmVxUGF5bG9hZCwgb2ZmKTsgb2ZmICs9IDIwO1xuICAgIC8vIFBsYWNlIHRoZSB2YWx1ZSAoYSBCRSBudW1iZXIpIGluIGFuIG9mZnNldCBzdWNoIHRoYXQgaXRcbiAgICAvLyBjYW4gYmUgaW50ZXJwcmV0ZWQgYXMgYSBudW1iZXJcbiAgICBjb25zdCB2YWx1ZU9mZiA9IG9mZiArIDMyIC0gdmFsdWVCeXRlcy5sZW5ndGg7XG4gICAgdmFsdWVCeXRlcy5jb3B5KHR4UmVxUGF5bG9hZCwgdmFsdWVPZmYpOyBvZmYgKz0gMzI7XG4gICAgLy8gRW5zdXJlIGRhdGEgZmllbGQgaXNuJ3QgdG9vIGxvbmdcbiAgICBpZiAoZGF0YUJ5dGVzICYmIGRhdGFCeXRlcy5sZW5ndGggPiBldGhNYXhEYXRhU3opIHtcbiAgICAgIHJldHVybiB7IGVycjogYERhdGEgZmllbGQgdG9vIGxhcmdlIChtdXN0IGJlIDw9JHtldGhNYXhEYXRhU3p9IGJ5dGVzKWAgfVxuICAgIH1cbiAgICAvLyBXcml0ZSB0aGUgZGF0YSBzaXplIChkb2VzICpOT1QqIGluY2x1ZGUgdGhlIGNoYWluSWQgYnVmZmVyLCBpZiB0aGF0IGV4aXN0cylcbiAgICB0eFJlcVBheWxvYWQud3JpdGVVSW50MTZCRShkYXRhQnl0ZXMubGVuZ3RoLCBvZmYpOyBvZmYgKz0gMjtcbiAgICBpZiAoZGF0YUJ5dGVzLmxlbmd0aCArIGNoYWluSWRCdWZTeiA+IGV0aE1heERhdGFTeilcbiAgICAgIHRocm93IG5ldyBFcnJvcignUGF5bG9hZCB0b28gbGFyZ2UuJyk7XG4gICAgLy8gQ29weSBpbiB0aGUgY2hhaW5JZCBidWZmZXIgaWYgbmVlZGVkXG4gICAgaWYgKGNoYWluSWRCdWZTeiA+IDApIHtcbiAgICAgIHR4UmVxUGF5bG9hZC53cml0ZVVJbnQ4KGNoYWluSWRCdWZTeiwgb2ZmKTsgb2ZmKys7XG4gICAgICBjaGFpbklkQnVmLmNvcHkodHhSZXFQYXlsb2FkLCBvZmYpOyBvZmYgKz0gY2hhaW5JZEJ1ZlN6O1xuICAgIH1cbiAgICAvLyBDb3B5IHRoZSBkYXRhIGl0c2VsZlxuICAgIGRhdGFCeXRlcy5jb3B5KHR4UmVxUGF5bG9hZCwgb2ZmKTsgb2ZmICs9IGV0aE1heERhdGFTejtcbiAgICByZXR1cm4geyBcbiAgICAgIHJhd1R4LFxuICAgICAgcGF5bG9hZDogdHhSZXFQYXlsb2FkLFxuICAgICAgc2NoZW1hOiBjb25zdGFudHMuc2lnbmluZ1NjaGVtYS5FVEhfVFJBTlNGRVIsICAvLyBXZSB3aWxsIHVzZSBldGggdHJhbnNmZXIgZm9yIGFsbCBFVEggdHhzIGZvciB2MSBcbiAgICAgIGNoYWluSWQsXG4gICAgICB1c2VFSVAxNTUsXG4gICAgICBzaWduZXJQYXRoLFxuICAgIH07XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiB7IGVycjogZXJyLm1lc3NhZ2UgfTtcbiAgfVxufVxuXG4vLyBGcm9tIGV0aGVyZXVtanMtdXRpbFxuZnVuY3Rpb24gc3RyaXBaZXJvcyhhKSB7XG4gIGxldCBmaXJzdCA9IGFbMF1cbiAgd2hpbGUgKGEubGVuZ3RoID4gMCAmJiBmaXJzdC50b1N0cmluZygpID09PSAnMCcpIHtcbiAgICBhID0gYS5zbGljZSgxKVxuICAgIGZpcnN0ID0gYVswXVxuICB9XG4gIHJldHVybiBhXG59XG5cbi8vIEdpdmVuIGEgNjQtYnl0ZSBzaWduYXR1cmUgW3Isc10gd2UgbmVlZCB0byBmaWd1cmUgb3V0IHRoZSB2IHZhbHVlXG4vLyBhbmQgYXR0YWggdGhlIGZ1bGwgc2lnbmF0dXJlIHRvIHRoZSBlbmQgb2YgdGhlIHRyYW5zYWN0aW9uIHBheWxvYWRcbmV4cG9ydHMuYnVpbGRFdGhSYXdUeCA9IGZ1bmN0aW9uKHR4LCBzaWcsIGFkZHJlc3MsIHVzZUVJUDE1NT10cnVlKSB7XG4gIC8vIFJMUC1lbmNvZGUgdGhlIGRhdGEgd2Ugc2VudCB0byB0aGUgbGF0dGljZVxuICBjb25zdCBybHBFbmNvZGVkID0gcmxwLmVuY29kZSh0eC5yYXdUeCk7XG4gIGNvbnN0IG5ld1NpZyA9IGFkZFJlY292ZXJ5UGFyYW0ocmxwRW5jb2RlZCwgc2lnLCBhZGRyZXNzLCB0eC5jaGFpbklkLCB1c2VFSVAxNTUpO1xuICAvLyBVc2UgdGhlIHNpZ25hdHVyZSB0byBnZW5lcmF0ZSBhIG5ldyByYXcgdHJhbnNhY3Rpb24gcGF5bG9hZFxuICBjb25zdCBuZXdSYXdUeCA9IHR4LnJhd1R4LnNsaWNlKDAsIDYpO1xuICBuZXdSYXdUeC5wdXNoKG5ld1NpZy52KTtcbiAgLy8gUGVyIGBldGhlcmV1bWpzLXR4YCwgUkxQIGVuY29kaW5nIHNob3VsZCBpbmNsdWRlIHNpZ25hdHVyZSBjb21wb25lbnRzIHcvIHN0cmlwcGVkIHplcm9zXG4gIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2V0aGVyZXVtanMvZXRoZXJldW1qcy10eC9ibG9iL21hc3Rlci9zcmMvdHJhbnNhY3Rpb24udHMjTDE4N1xuICBuZXdSYXdUeC5wdXNoKHN0cmlwWmVyb3MobmV3U2lnLnIpKTtcbiAgbmV3UmF3VHgucHVzaChzdHJpcFplcm9zKG5ld1NpZy5zKSk7XG4gIHJldHVybiBybHAuZW5jb2RlKG5ld1Jhd1R4KS50b1N0cmluZygnaGV4Jyk7XG59XG5cbi8vIEF0dGFjaCBhIHJlY292ZXJ5IHBhcmFtZXRlciB0byBhIHNpZ25hdHVyZSBieSBicnV0ZS1mb3JjaW5nIEVDUmVjb3ZlclxuZnVuY3Rpb24gYWRkUmVjb3ZlcnlQYXJhbShwYXlsb2FkLCBzaWcsIGFkZHJlc3MsIGNoYWluSWQsIHVzZUVJUDE1NSkge1xuICB0cnkge1xuICAgIC8vIFJlYnVpbGQgdGhlIGtlY2NhazI1NiBoYXNoIGhlcmUgc28gd2UgY2FuIGBlY3JlY292ZXJgXG4gICAgY29uc3QgaGFzaCA9IG5ldyBVaW50OEFycmF5KEJ1ZmZlci5mcm9tKGtlY2NhazI1NihwYXlsb2FkKSwgJ2hleCcpKTtcbiAgICBsZXQgdiA9IDA7XG4gICAgLy8gRml4IHNpZ25hdHVyZSBjb21wb25lbmV0IGxlbmd0aHMgdG8gMzIgYnl0ZXMgZWFjaFxuICAgIGNvbnN0IHIgPSBmaXhMZW4oc2lnLnIsIDMyKTsgc2lnLnIgPSByO1xuICAgIGNvbnN0IHMgPSBmaXhMZW4oc2lnLnMsIDMyKTsgc2lnLnMgPSBzO1xuICAgIC8vIENhbGN1bGF0ZSB0aGUgcmVjb3ZlcnkgcGFyYW1cbiAgICBjb25zdCBycyA9IG5ldyBVaW50OEFycmF5KEJ1ZmZlci5jb25jYXQoW3IsIHNdKSk7XG4gICAgbGV0IHB1YmtleSA9IHNlY3AyNTZrMS5lY2RzYVJlY292ZXIocnMsIHYsIGhhc2gsIGZhbHNlKS5zbGljZSgxKVxuICAgIC8vIElmIHRoZSBmaXJzdCBgdmAgdmFsdWUgaXMgYSBtYXRjaCwgcmV0dXJuIHRoZSBzaWchXG4gICAgaWYgKHB1YlRvQWRkclN0cihwdWJrZXkpID09PSBhZGRyZXNzLnRvU3RyaW5nKCdoZXgnKSkge1xuICAgICAgc2lnLnYgID0gZ2V0UmVjb3ZlcnlQYXJhbSh2LCB1c2VFSVAxNTUsIGNoYWluSWQpO1xuICAgICAgcmV0dXJuIHNpZztcbiAgICB9XG4gICAgLy8gT3RoZXJ3aXNlLCB0cnkgdGhlIG90aGVyIGB2YCB2YWx1ZVxuICAgIHYgPSAxO1xuICAgIHB1YmtleSA9IHNlY3AyNTZrMS5lY2RzYVJlY292ZXIocnMsIHYsIGhhc2gsIGZhbHNlKS5zbGljZSgxKVxuICAgIGlmIChwdWJUb0FkZHJTdHIocHVia2V5KSA9PT0gYWRkcmVzcy50b1N0cmluZygnaGV4JykpIHtcbiAgICAgIHNpZy52ICA9IGdldFJlY292ZXJ5UGFyYW0odiwgdXNlRUlQMTU1LCBjaGFpbklkKTtcbiAgICAgIHJldHVybiBzaWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIElmIG5laXRoZXIgaXMgYSBtYXRjaCwgd2Ugc2hvdWxkIHJldHVybiBhbiBlcnJvclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIEV0aGVyZXVtIHNpZ25hdHVyZSByZXR1cm5lZC4nKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICB9XG59XG5leHBvcnRzLmFkZFJlY292ZXJ5UGFyYW0gPSBhZGRSZWNvdmVyeVBhcmFtO1xuXG4vLyBDb252ZXJ0IGFuIFJMUC1zZXJpYWxpemVkIHRyYW5zYWN0aW9uIChwbHVzIHNpZ25hdHVyZSkgaW50byBhIHRyYW5zYWN0aW9uIGhhc2hcbmV4cG9ydHMuaGFzaFRyYW5zYWN0aW9uID0gZnVuY3Rpb24oc2VyaWFsaXplZFR4KSB7XG4gIHJldHVybiBrZWNjYWsyNTYoQnVmZmVyLmZyb20oc2VyaWFsaXplZFR4LCAnaGV4JykpOyBcbn1cblxuLy8gUmV0dXJucyBhZGRyZXNzIHN0cmluZyBnaXZlbiBwdWJsaWMga2V5IGJ1ZmZlclxuZnVuY3Rpb24gcHViVG9BZGRyU3RyKHB1Yikge1xuICByZXR1cm4ga2VjY2FrMjU2KHB1Yikuc2xpY2UoLTQwKTtcbn1cblxuZnVuY3Rpb24gZml4TGVuKG1zZywgbGVuZ3RoKSB7XG4gIGNvbnN0IGJ1ZiA9IEJ1ZmZlci5hbGxvYyhsZW5ndGgpXG4gIGlmIChtc2cubGVuZ3RoIDwgbGVuZ3RoKSB7XG4gICAgbXNnLmNvcHkoYnVmLCBsZW5ndGggLSBtc2cubGVuZ3RoKVxuICAgIHJldHVybiBidWZcbiAgfVxuICByZXR1cm4gbXNnLnNsaWNlKC1sZW5ndGgpXG59XG5cbi8vIENvbnZlcnQgYSAwLzEgYHZgIGludG8gYSByZWNvdmVyeSBwYXJhbTpcbi8vICogRm9yIG5vbi1FSVAxNTUgdHJhbnNhY3Rpb25zLCByZXR1cm4gYDI3ICsgdmBcbi8vICogRm9yIEVJUDE1NSB0cmFuc2FjdGlvbnMsIHJldHVybiBgKENIQUlOX0lEKjIpICsgMzUgKyB2YFxuZnVuY3Rpb24gZ2V0UmVjb3ZlcnlQYXJhbSh2LCB1c2VFSVAxNTUsIGNoYWluSWQpIHtcbiAgLy8gSWYgd2UgYXJlIG5vdCB1c2luZyBFSVAxNTUsIGNvbnZlcnQgdiBkaXJlY3RseSB0byBhIGJ1ZmZlciBhbmQgcmV0dXJuIGl0XG4gIGlmIChmYWxzZSA9PT0gdXNlRUlQMTU1KVxuICAgIHJldHVybiBCdWZmZXIuZnJvbShuZXcgQk4odikucGx1cygyNykudG9TdHJpbmcoMTYpLCAnaGV4Jyk7XG4gIC8vIFdlIHdpbGwgdXNlIEVJUDE1NSBpbiBtb3N0IGNhc2VzLiBDb252ZXJ0IHYgdG8gYSBiaWdudW0gYW5kIG9wZXJhdGUgb24gaXQuXG4gIC8vIE5vdGUgdGhhdCB0aGUgcHJvdG9jb2wgY2FsbHMgZm9yIHYgPSAoQ0hBSU5fSUQqMikgKyAzNS8zNiwgd2hlcmUgMzUgb3IgMzZcbiAgLy8gaXMgZGVjaWRlZCBvbiBiYXNlZCBvbiB0aGUgZWNyZWNvdmVyIHJlc3VsdC4gYHZgIGlzIHBhc3NlZCBpbiBhcyBlaXRoZXIgMCBvciAxXG4gIC8vIHNvIHdlIGFkZCAzNSB0byB0aGF0LlxuICBjb25zdCBjaGFpbklkQnVmID0gZ2V0Q2hhaW5JZEJ1ZihjaGFpbklkKTtcbiAgY29uc3QgY2hhaW5JZEJOID0gbmV3IEJOKGNoYWluSWRCdWYudG9TdHJpbmcoJ2hleCcpLCAxNik7XG4gIHJldHVybiBlbnN1cmVIZXhCdWZmZXIoY2hhaW5JZEJOLnRpbWVzKDIpLnBsdXMoMzUpLnBsdXModikudG9TdHJpbmcoMTYpKTtcbn1cblxuZnVuY3Rpb24gd3JpdGVVSW50NjRCRShuLCBidWYsIG9mZikge1xuICBpZiAodHlwZW9mIG4gPT09ICdudW1iZXInKSBuID0gbi50b1N0cmluZygxNik7XG4gIGNvbnN0IHByZUJ1ZiA9IEJ1ZmZlci5hbGxvYyg4KTtcbiAgY29uc3QgblN0ciA9IG4ubGVuZ3RoICUgMiA9PT0gMCA/IG4udG9TdHJpbmcoMTYpIDogYDAke24udG9TdHJpbmcoMTYpfWA7XG4gIGNvbnN0IG5CdWYgPSBCdWZmZXIuZnJvbShuU3RyLCAnaGV4Jyk7XG4gIG5CdWYuY29weShwcmVCdWYsIHByZUJ1Zi5sZW5ndGggLSBuQnVmLmxlbmd0aCk7XG4gIHByZUJ1Zi5jb3B5KGJ1Ziwgb2ZmKTtcbiAgcmV0dXJuIHByZUJ1Zjtcbn1cblxuZnVuY3Rpb24gaXNIZXhTdHIoc3RyKSB7XG4gIHJldHVybiAoL15bMC05YS1mQS1GXSskLykudGVzdChzdHIpXG59XG5cbi8vIERldGVybWluZSBpZiB0aGUgTGF0dGljZSBjYW4gZGlzcGxheSBhIHN0cmluZyB3ZSBnaXZlIGl0LiBDdXJyZW50bHksIHRoZSBMYXR0aWNlIGNhbiBvbmx5XG4vLyBkaXNwbGF5IEFTQ0lJIHN0cmluZ3MsIHNvIHdlIHdpbGwgcmVqZWN0IG90aGVyIFVURjggY29kZXMuXG4vLyBJbiB0aGUgZnV0dXJlIHdlIG1heSBhZGQgYSBtZWNoYW5pc20gdG8gZGlzcGxheSBjZXJ0YWluIFVURjggY29kZXMgc3VjaCBhcyBwb3B1bGFyIGVtb2ppcy5cbmZ1bmN0aW9uIGxhdHRpY2VDYW5EaXNwbGF5U3RyKHN0cikge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKylcbiAgICBpZiAoc3RyLmNoYXJDb2RlQXQoaSkgPCAweDAwMjAgfHwgc3RyLmNoYXJDb2RlQXQoaSkgPiAweDAwN2YpXG4gICAgICByZXR1cm4gZmFsc2U7XG4gIHJldHVybiB0cnVlO1xufVxuXG5jb25zdCBjaGFpbklkcyA9IHtcbiAgbWFpbm5ldDogMSxcbiAgcm9wdHN0ZW46IDMsXG4gIHJpbmtlYnk6IDQsXG4gIGtvdmFuOiA0MixcbiAgZ29lcmxpOiA1XG59XG5cbi8vIEdldCBhIGJ1ZmZlciBjb250YWluaW5nIHRoZSBjaGFpbklkIHZhbHVlLlxuLy8gUmV0dXJucyBhIDEsIDIsIDQsIG9yIDggYnl0ZSBidWZmZXIgd2l0aCB0aGUgY2hhaW5JZCBlbmNvZGVkIGluIGJpZyBlbmRpYW5cbmZ1bmN0aW9uIGdldENoYWluSWRCdWYoY2hhaW5JZCkge1xuICBsZXQgYjtcbiAgLy8gSWYgb3VyIGNoYWluSUQgaXMgYSBoZXggc3RyaW5nLCB3ZSBjYW4gY29udmVydCBpdCB0byBhIGhleFxuICAvLyBidWZmZXIgZGlyZWN0bHlcbiAgaWYgKHRydWUgPT09IGlzVmFsaWRDaGFpbklkSGV4TnVtU3RyKGNoYWluSWQpKVxuICAgIGIgPSBlbnN1cmVIZXhCdWZmZXIoY2hhaW5JZCk7XG4gIC8vIElmIG91ciBjaGFpbklEIGlzIGEgYmFzZS0xMCBudW1iZXIsIHBhcnNlIHdpdGggYmlnbnVtYmVyLmpzIGFuZCBjb252ZXJ0IHRvIGhleCBidWZmZXJcbiAgZWxzZVxuICAgIGIgPSBlbnN1cmVIZXhCdWZmZXIobmV3IEJOKGNoYWluSWQpLnRvU3RyaW5nKDE2KSk7XG4gIC8vIE1ha2Ugc3VyZSB0aGUgYnVmZmVyIGlzIGFuIGFsbG93ZWQgc2l6ZVxuICBpZiAoYi5sZW5ndGggPiA4KVxuICAgIHRocm93IG5ldyBFcnJvcignQ2hhaW5JRCBwcm92aWRlZCBpcyB0b28gbGFyZ2UuJyk7XG4gIC8vIElmIHRoaXMgbWF0Y2hlcyBhIHUxNiwgdTMyLCBvciB1NjQgc2l6ZSwgcmV0dXJuIGl0IG5vd1xuICBpZiAoYi5sZW5ndGggPD0gMiB8fCBiLmxlbmd0aCA9PT0gNCB8fCBiLmxlbmd0aCA9PT0gOClcbiAgICByZXR1cm4gYjtcbiAgLy8gRm9yIG90aGVyIHNpemUgYnVmZmVycywgd2UgbmVlZCB0byBwYWNrIGludG8gdTMyIG9yIHU2NCBiZWZvcmUgcmV0dXJuaW5nO1xuICBsZXQgYnVmO1xuICBpZiAoYi5sZW5ndGggPT09IDMpIHtcbiAgICBidWYgPSBCdWZmZXIuYWxsb2MoNCk7XG4gICAgYnVmLndyaXRlVUludDMyQkUoY2hhaW5JZCk7XG4gIH0gZWxzZSBpZiAoYi5sZW5ndGggPD0gOCkge1xuICAgIGJ1ZiA9IEJ1ZmZlci5hbGxvYyg4KTtcbiAgICBiLmNvcHkoYnVmLCA4IC0gYi5sZW5ndGgpXG4gIH1cbiAgcmV0dXJuIGJ1Zjtcbn1cblxuLy8gRGV0ZXJtaW5lIGlmIHRoZSBjaGFpbiB1c2VzIEVJUDE1NSBieSBkZWZhdWx0LCBiYXNlZCBvbiB0aGUgY2hhaW5JRFxuZnVuY3Rpb24gY2hhaW5Vc2VzRUlQMTU1KGNoYWluSUQpIHtcbiAgc3dpdGNoIChjaGFpbklEKSB7XG4gICAgY2FzZSAzOiAvLyByb3BzdGVuXG4gICAgY2FzZSA0OiAvLyByaW5rZWJ5XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgY2FzZSAxOiAvLyBtYWlubmV0XG4gICAgY2FzZSA0MjogLy8ga292YW5cbiAgICBjYXNlIDU6IC8vIGdvZXJsaVxuICAgIGRlZmF1bHQ6IC8vIGFsbCBvdGhlcnMgc2hvdWxkIHVzZSBlaXAxNTVcbiAgICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbi8vIERldGVybWluZSBpZiBhIHZhbGlkIG51bWJlciB3YXMgcGFzc2VkIGluIGFzIGEgaGV4IHN0cmluZ1xuZnVuY3Rpb24gaXNWYWxpZENoYWluSWRIZXhOdW1TdHIocykge1xuICByZXR1cm4gbmV3IEJOKHMsIDE2KS5pc05hTigpID09PSBmYWxzZTtcbn1cblxuLy8gSWYgdGhpcyBpcyBhIG51Ym1lciB0aGF0IGZpdHMgaW4gb25lIGJ5dGUsIHdlIGRvbid0IG5lZWQgdG8gYWRkIGl0XG4vLyB0byB0aGUgYGRhdGFgIGJ1ZmZlciBvZiB0aGUgbWFpbiB0cmFuc2FjdGlvbi4gXG4vLyBOb3RlIHRoZSBvbmUgZWRnZSBjYXNlOiB3ZSBzdGlsbCBuZWVkIHRvIHVzZSB0aGUgYGRhdGFgIGZpZWxkIGZvciBjaGFpbklEPTI1NS5cbmZ1bmN0aW9uIHVzZUNoYWluSWRCdWZmZXIoaWQpIHtcbiAgY29uc3QgYnVmID0gZ2V0Q2hhaW5JZEJ1ZihpZCk7XG4gIGlmIChidWYubGVuZ3RoID09PSAxKVxuICAgIHJldHVybiBidWYucmVhZFVJbnQ4KDApID09PSAyNTU7XG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnRzLmNoYWluSWRzID0gY2hhaW5JZHM7XG5cbi8vIEVuc3VyZSBhIHBhcmFtIGlzIHJlcHJlc2VudGVkIGJ5IGEgYnVmZmVyXG4vLyBUT0RPOiBSZW1vdmUgY2lyY3VsYXIgZGVwZW5kZW5jeSBpbiB1dGlsLmpzIHNvIHRoYXQgd2UgY2FuIHB1dCB0aGlzIGZ1bmN0aW9uIHRoZXJlXG5mdW5jdGlvbiBlbnN1cmVIZXhCdWZmZXIoeCkge1xuICBpZiAoeCA9PT0gbnVsbCB8fCB4ID09PSAwKSByZXR1cm4gQnVmZmVyLmFsbG9jKDApO1xuICBlbHNlIGlmIChCdWZmZXIuaXNCdWZmZXIoeCkpIHggPSB4LnRvU3RyaW5nKCdoZXgnKTtcbiAgaWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJykgeCA9IGAke3gudG9TdHJpbmcoMTYpfWA7XG4gIGVsc2UgaWYgKHR5cGVvZiB4ID09PSAnc3RyaW5nJyAmJiB4LnNsaWNlKDAsIDIpID09PSAnMHgnKSB4ID0geC5zbGljZSgyKTtcbiAgaWYgKHgubGVuZ3RoICUgMiA+IDApIHggPSBgMCR7eH1gO1xuICByZXR1cm4gQnVmZmVyLmZyb20oeCwgJ2hleCcpO1xufVxuZXhwb3J0cy5lbnN1cmVIZXhCdWZmZXIgPSBlbnN1cmVIZXhCdWZmZXI7IiwiY29uc3QgQnVmZmVyID0gcmVxdWlyZSgnYnVmZmVyLycpLkJ1ZmZlclxuY29uc3Qga2VjY2FrMjU2ID0gcmVxdWlyZSgnanMtc2hhMycpLmtlY2NhazI1NjtcbmNvbnN0IHsgRVRIX0FCSV9MQVRUSUNFX0ZXX1RZUEVfTUFQIH0gPSByZXF1aXJlKCcuL2NvbnN0YW50cycpO1xuY29uc3QgTkFNRV9NQVhfU1ogPSAxMDA7XG5jb25zdCBIRUFERVJfU1ogPSA1ICsgTkFNRV9NQVhfU1o7IC8vIDQgYnl0ZSBzaWcgKyBuYW1lICsgMSBieXRlIHBhcmFtIGNvdW50XG5jb25zdCBQQVJBTV9TWiA9IDI2OyAvLyAyMCBieXRlIG5hbWUgKyA2IGJ5dGUgZGVmXG5jb25zdCBNQVhfUEFSQU1TID0gMTg7XG5jb25zdCBNQVhfQUJJX0RFRlMgPSAyO1xuZXhwb3J0cy5NQVhfQUJJX0RFRlMgPSBNQVhfQUJJX0RFRlM7XG5cbi8vIEJ1aWxkIGEgcmVxdWVzdCB0byBhZGQgQUJJIGRhdGFcbmV4cG9ydHMuYnVpbGRBZGRBYmlQYXlsb2FkID0gZnVuY3Rpb24oZGVmcykge1xuICBpZiAoIWRlZnMgfHwgIUFycmF5LmlzQXJyYXkoZGVmcykpXG4gICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGRlZmluaXRpb25zLicpO1xuICBpZiAoZGVmcy5sZW5ndGggPiBleHBvcnRzLk1BWF9BQklfREVGUylcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFlvdSBtYXkgb25seSBhZGQgJHtNQVhfQUJJX0RFRlN9IEFCSSBkZWZpbml0aW9ucyBwZXIgcmVxdWVzdC5gKTtcbiAgY29uc3QgYiA9IEJ1ZmZlci5hbGxvYygxICsgKE1BWF9BQklfREVGUyAqIChIRUFERVJfU1ogKyAoUEFSQU1fU1ogKiBNQVhfUEFSQU1TKSkpKTtcbiAgbGV0IG9mZiA9IDA7XG4gIGIud3JpdGVVSW50OChkZWZzLmxlbmd0aCwgb2ZmKTsgb2ZmKys7XG4gIGRlZnMuZm9yRWFjaCgoZGVmKSA9PiB7XG4gICAgaWYgKCFkZWYuc2lnIHx8ICFkZWYubmFtZSB8fCAhZGVmLnBhcmFtcylcbiAgICAgIHRocm93IG5ldyBFcnJvcignbmFtZSwgc2lnLCBhbmQgcGFyYW1zIG11c3QgYmUgcHJlc2VudCBmb3IgZXZlcnkgQUJJIGRlZmluaXRpb24uJylcbiAgICAvLyBIZWFkZXIgZGF0YVxuICAgIGNvbnN0IHNpZyA9IEJ1ZmZlci5mcm9tKGRlZi5zaWcsICdoZXgnKTtcbiAgICBpZiAoc2lnLmxlbmd0aCAhPT0gNClcbiAgICAgIHRocm93IG5ldyBFcnJvcignRnVuY3Rpb24gc2lnbmF0dXJlcyBtdXN0IGFsd2F5cyBiZSBmb3VyIGJ5dGVzLicpO1xuICAgIHNpZy5jb3B5KGIsIG9mZik7IG9mZiArPSBzaWcubGVuZ3RoO1xuICAgIGNvbnN0IG5hbWUgPSBCdWZmZXIuZnJvbShkZWYubmFtZSk7XG4gICAgaWYgKG5hbWUubGVuZ3RoID4gTkFNRV9NQVhfU1ogLSAxKSAvLyBUaGUgLTEgYWNjb3VudHMgZm9yIHRoZSBudWxsIHRlcm1pbmF0b3JcbiAgICAgIHRocm93IG5ldyBFcnJvcihgT25seSBmdW5jdGlvbiBuYW1lcyBzaG9ydGVyIHRoYW4gJHtOQU1FX01BWF9TWn0gY2hhcmFjdGVycyBhcmUgc3VwcG9ydGVkLmApO1xuICAgIEJ1ZmZlci5mcm9tKGRlZi5uYW1lKS5zbGljZSgwLCBOQU1FX01BWF9TWikuY29weShiLCBvZmYpOyBvZmYgKz0gTkFNRV9NQVhfU1o7XG4gICAgLy8gTnVtYmVyIG9mIHBhcmFtZXRlcnNcbiAgICBjb25zdCBudW1QYXJhbXMgPSBBcnJheS5pc0FycmF5KGRlZi5wYXJhbXMpID8gZGVmLnBhcmFtcy5sZW5ndGggOiAwO1xuICAgIGIud3JpdGVVSW50OChudW1QYXJhbXMsIG9mZik7IG9mZisrO1xuICAgIC8vIERvbid0IG92ZXJmbG93IHRoZSBidWZmZXJcbiAgICBpZiAobnVtUGFyYW1zID4gTUFYX1BBUkFNUylcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ3VycmVudGx5IG9ubHkgQUJJIGRlZmludGlvbnMgd2l0aCA8PTEwIHBhcmFtZXRlcnMgYXJlIHN1cHBvcnRlZC4nKTtcbiAgICAvLyBDb3B5IHRoZSBwYXJhbXMgaWYgbmVlZGVkXG4gICAgaWYgKG51bVBhcmFtcyA+IDApIHtcbiAgICAgIC8vIEZpcnN0IGNvcHkgcGFyYW0gbmFtZXMgKGZpcnN0IDIwIGJ5dGVzKVxuICAgICAgZGVmLnBhcmFtcy5mb3JFYWNoKChwYXJhbSkgPT4ge1xuICAgICAgICBpZiAoIXBhcmFtLm5hbWUgfHwgIXBhcmFtLmxhdHRpY2VUeXBlSWR4IHx8IHBhcmFtLmlzQXJyYXkgPT09IHVuZGVmaW5lZCB8fCBwYXJhbS5hcnJheVN6ID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCduYW1lLCBsYXR0aWNlVHlwZUlkeCwgaXNBcnJheSwgYW5kIGFycmF5U3ogbXVzdCBiZSBkZWZpbmVkIGZvciBhbGwgQUJJIHBhcmFtcy4nKTtcbiAgICAgICAgQnVmZmVyLmZyb20ocGFyYW0ubmFtZSkuc2xpY2UoMCwgMjApLmNvcHkoYiwgb2ZmKTsgb2ZmICs9IDIwO1xuICAgICAgfSlcbiAgICAgIC8vIEJ1bXAgb2Zmc2V0IHRvIGFjY291bnQgZm9yIGJsYW5rIHBhcmFtIHNsb3RzXG4gICAgICBvZmYgKz0gMjAgKiAoTUFYX1BBUkFNUyAtIG51bVBhcmFtcyk7XG4gICAgICAvLyBOZXh0IGNvcHkgdGhlIGRlZmluaXRpb25zXG4gICAgICBkZWYucGFyYW1zLmZvckVhY2goKHBhcmFtKSA9PiB7XG4gICAgICAgIGIud3JpdGVVSW50OChwYXJhbS5sYXR0aWNlVHlwZUlkeCwgb2ZmKTsgb2ZmKys7XG4gICAgICAgIGIud3JpdGVVSW50OChwYXJhbS5pc0FycmF5ID09PSB0cnVlLCBvZmYpOyBvZmYrKztcbiAgICAgICAgYi53cml0ZVVJbnQzMkxFKHBhcmFtLmFycmF5U3osIG9mZik7IG9mZiArPSA0O1xuICAgICAgfSlcbiAgICAgIC8vIEJ1bXAgb2Zmc2V0IGFnYWluXG4gICAgICBvZmYgKz0gNiAqIChNQVhfUEFSQU1TIC0gbnVtUGFyYW1zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSWYgdGhlcmUgYXJlIG5vIHBhcmFtcywganVzdCBidW1wIHRoZSBvZmZzZXRcbiAgICAgIG9mZiArPSBQQVJBTV9TWiAqIE1BWF9QQVJBTVM7XG4gICAgfVxuICB9KVxuICByZXR1cm4gYjtcbn1cblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gUEFSU0VSU1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZnVuY3Rpb24gcGFyc2VFdGhlcnNjYW5BYmlEZWZzKF9kZWZzKSB7IC8vIGBfZGVmc2AgYXJlIGByZXN1bHRgIG9mIHRoZSBwYXJzZWQgcmVzcG9uc2VcbiAgY29uc3QgZGVmcyA9IFtdO1xuICBfZGVmcy5mb3JFYWNoKChkKSA9PiB7XG4gICAgaWYgKGQubmFtZSAmJiBkLmlucHV0cyAmJiBkLnR5cGUgPT09ICdmdW5jdGlvbicgJiYgZC5zdGF0ZU11dGFiaWxpdHkgIT09ICd2aWV3Jykge1xuICAgICAgY29uc3Qgc2lnID0gZ2V0RnVuY1NpZyhkKTtcbiAgICAgIGNvbnN0IHBhcmFtcyA9IHBhcnNlRXRoZXJzY2FuQWJpSW5wdXRzKGQuaW5wdXRzKTtcbiAgICAgIGRlZnMucHVzaCh7XG4gICAgICAgIG5hbWU6IGQubmFtZSxcbiAgICAgICAgc2lnLFxuICAgICAgICBwYXJhbXMsXG4gICAgICB9KVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGRlZnM7XG59XG5cbmV4cG9ydHMuYWJpUGFyc2VycyA9IHtcbiAgZXRoZXJzY2FuOiBwYXJzZUV0aGVyc2NhbkFiaURlZnMsXG59XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEhFTFBFUlNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEdldCB0aGUgNC1ieXRlIGZ1bmN0aW9uIGlkZW50aWZpZXIgYmFzZWQgb24gdGhlIGNhbm9uaWNhbCBuYW1lXG5mdW5jdGlvbiBnZXRGdW5jU2lnKGYpIHtcbiAgLy8gQ2Fub25pY2FsIG5hbWUgaXM6XG4gIC8vIGZ1bmNOYW1lKHBhcmFtVHlwZTAsIC4uLiwgcGFyYW1UeXBlTilcbiAgbGV0IGNhbm9uaWNhbE5hbWUgPSBgJHtmLm5hbWV9KGA7XG4gIGYuaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgY2Fub25pY2FsTmFtZSArPSBgJHtpbnB1dC50eXBlfSxgXG4gIH0pXG4gIGlmIChmLmlucHV0cy5sZW5ndGggPiAwKVxuICAgIGNhbm9uaWNhbE5hbWUgPSBjYW5vbmljYWxOYW1lLnNsaWNlKDAsIGNhbm9uaWNhbE5hbWUubGVuZ3RoIC0gMSlcbiAgY2Fub25pY2FsTmFtZSArPSAnKSdcbiAgcmV0dXJuIGtlY2NhazI1NihjYW5vbmljYWxOYW1lKS5zbGljZSgwLCA4KTtcbn1cblxuLy8gUGFyc2UgdGhlIEFCSSBwYXJhbSBkYXRhIGludG8gc3RydWN0cyBMYXR0aWNlIGZpcm13YXJlIHdpbGwgcmVjb2duaXplLlxuZnVuY3Rpb24gcGFyc2VFdGhlcnNjYW5BYmlJbnB1dHMoaW5wdXRzKSB7XG4gIGNvbnN0IGRhdGEgPSBbXTtcbiAgaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgY29uc3QgdHlwZU5hbWUgPSBpbnB1dC50eXBlO1xuICAgIGNvbnN0IGQgPSB7IGlzQXJyYXk6IGZhbHNlLCBhcnJheVN6OiAwLCBuYW1lOiBpbnB1dC5uYW1lLCB9O1xuICAgIGNvbnN0IG9wZW5CcmFja2V0SWR4ID0gdHlwZU5hbWUuaW5kZXhPZignWycpO1xuICAgIGNvbnN0IGNsb3NlQnJhY2tldElkeCA9IHR5cGVOYW1lLmluZGV4T2YoJ10nKTtcbiAgICBpZiAob3BlbkJyYWNrZXRJZHggPiAtMSAmJiBjbG9zZUJyYWNrZXRJZHggPiAtMSkge1xuICAgICAgaWYgKG9wZW5CcmFja2V0SWR4ID49IGNsb3NlQnJhY2tldElkeCkge1xuICAgICAgICA7IC8vIG5vdCBhIHZhbGlkIHBhcmFtIC0tIHNraXAgaXRcbiAgICAgIH0gZWxzZSBpZiAoKG9wZW5CcmFja2V0SWR4ICsgMSkgPT09IGNsb3NlQnJhY2tldElkeCkge1xuICAgICAgICBkLmlzQXJyYXkgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gUGFyc2UgdGhlIGFycmF5IHNpemUgaWYgYXBwbGljYWJsZVxuICAgICAgICBjb25zdCBudW1iZXIgPSBwYXJzZUludCh0eXBlTmFtZS5zbGljZShvcGVuQnJhY2tldElkeCwgY2xvc2VCcmFja2V0SWR4KSlcbiAgICAgICAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICAgICAgICByZXR1cm4gZDtcbiAgICAgICAgfVxuICAgICAgICBkLmlzQXJyYXkgPSB0cnVlO1xuICAgICAgICBkLmFycmF5U3ogPSBudW1iZXI7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHNpbmd1bGFyVHlwZU5hbWUgPSBvcGVuQnJhY2tldElkeCA+IC0xID8gdHlwZU5hbWUuc2xpY2UoMCwgb3BlbkJyYWNrZXRJZHgpIDogdHlwZU5hbWU7XG4gICAgZC5sYXR0aWNlVHlwZUlkeCA9IGdldFR5cGVJZHhMYXR0aWNlRncoc2luZ3VsYXJUeXBlTmFtZSlcbiAgICBpZiAoIWQubGF0dGljZVR5cGVJZHgpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuc3VwcG9ydGVkIHR5cGU6ICR7dHlwZU5hbWV9YClcbiAgICBkYXRhLnB1c2goZClcbiAgfSlcbiAgcmV0dXJuIGRhdGE7XG59XG5cbi8vIEVudW0gdmFsdWVzIGZyb20gaW5zaWRlIExhdHRpY2UgZmlybXdhcmVcbmZ1bmN0aW9uIGdldFR5cGVJZHhMYXR0aWNlRncodHlwZSkge1xuICByZXR1cm4gRVRIX0FCSV9MQVRUSUNFX0ZXX1RZUEVfTUFQW3R5cGVdO1xufVxuIiwiLy8gU3RhdGljIHV0aWxpdHkgZnVuY3Rpb25zXG5jb25zdCB7IGJ1aWxkQml0Y29pblR4UmVxdWVzdCB9ID0gcmVxdWlyZSgnLi9iaXRjb2luJyk7XG5jb25zdCB7IGJ1aWxkRXRoZXJldW1UeFJlcXVlc3QsIGJ1aWxkRXRoZXJldW1Nc2dSZXF1ZXN0LCBlbnN1cmVIZXhCdWZmZXIgfSA9IHJlcXVpcmUoJy4vZXRoZXJldW0nKTtcbmNvbnN0IEJ1ZmZlciA9IHJlcXVpcmUoJ2J1ZmZlci8nKS5CdWZmZXJcbmNvbnN0IGFlcyA9IHJlcXVpcmUoJ2Flcy1qcycpO1xuY29uc3QgY3JjMzIgPSByZXF1aXJlKCdjcmMtMzInKTtcbmNvbnN0IGVsbGlwdGljID0gcmVxdWlyZSgnZWxsaXB0aWMnKTtcbmNvbnN0IHsgQUVTX0lWLCByZXNwb25zZUNvZGVzLCByZXNwb25zZU1zZ3MsIFZFUlNJT05fQllURSB9ID0gcmVxdWlyZSgnLi9jb25zdGFudHMnKTtcbmNvbnN0IEVDID0gZWxsaXB0aWMuZWM7XG5jb25zdCBlYyA9IG5ldyBFQygncDI1NicpO1xuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBMQVRUSUNFIFVUSUxTXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIFBhcnNlIGEgcmVzcG9uc2UgZnJvbSB0aGUgTGF0dGljZTFcbmZ1bmN0aW9uIHBhcnNlTGF0dGljZTFSZXNwb25zZShyKSB7XG4gIGNvbnN0IHBhcnNlZCA9IHtcbiAgICBlcnI6IG51bGwsXG4gICAgZGF0YTogbnVsbCxcbiAgfVxuICBjb25zdCBiID0gQnVmZmVyLmZyb20ociwgJ2hleCcpO1xuICBsZXQgb2ZmID0gMDtcbiAgXG4gIC8vIEdldCBwcm90b2NvbCB2ZXJzaW9uXG4gIGNvbnN0IHByb3RvVmVyID0gYi5yZWFkVUludDgob2ZmKTsgb2ZmKys7XG4gIGlmIChwcm90b1ZlciAhPT0gVkVSU0lPTl9CWVRFKSB7XG4gICAgcGFyc2VkLmVyciA9ICdJbmNvcnJlY3QgcHJvdG9jb2wgdmVyc2lvbi4gUGxlYXNlIHVwZGF0ZSB5b3VyIFNESyc7XG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIC8vIEdldCB0aGUgdHlwZSBvZiByZXNwb25zZVxuICAvLyBTaG91bGQgYWx3YXlzIGJlIDB4MDBcbiAgY29uc3QgbXNnVHlwZSA9IGIucmVhZFVJbnQ4KG9mZik7IG9mZisrO1xuICBpZiAobXNnVHlwZSAhPT0gMHgwMCkge1xuICAgIHBhcnNlZC5lcnIgPSAnSW5jb3JyZWN0IHJlc3BvbnNlIGZyb20gTGF0dGljZTEnO1xuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICAvLyBHZXQgdGhlIHBheWxvYWRcbiAgYi5yZWFkVUludDMyQkUob2ZmKTsgb2ZmKz00OyAvLyBGaXJzdCA0IGJ5dGVzIGlzIHRoZSBpZCwgYnV0IHdlIGRvbid0IG5lZWQgdGhhdCBhbnltb3JlXG4gIGNvbnN0IGxlbiA9IGIucmVhZFVJbnQxNkJFKG9mZik7IG9mZis9MjtcbiAgY29uc3QgcGF5bG9hZCA9IGIuc2xpY2Uob2ZmLCBvZmYrbGVuKTsgb2ZmKz1sZW47XG5cbiAgLy8gR2V0IHJlc3BvbnNlIGNvZGVcbiAgY29uc3QgcmVzcG9uc2VDb2RlID0gcGF5bG9hZC5yZWFkVUludDgoMCk7XG4gIGlmIChyZXNwb25zZUNvZGUgIT09IHJlc3BvbnNlQ29kZXMuUkVTUF9TVUNDRVNTKSB7XG4gICAgcGFyc2VkLmVyciA9IGBFcnJvciBmcm9tIGRldmljZTogJHtyZXNwb25zZU1zZ3NbcmVzcG9uc2VDb2RlXSA/IHJlc3BvbnNlTXNnc1tyZXNwb25zZUNvZGVdIDogJ1Vua25vd24gRXJyb3InfWA7XG4gICAgcGFyc2VkLnJlc3BvbnNlQ29kZSA9IHJlc3BvbnNlQ29kZTtcbiAgICByZXR1cm4gcGFyc2VkO1xuICB9IGVsc2Uge1xuICAgIHBhcnNlZC5kYXRhID0gcGF5bG9hZC5zbGljZSgxLCBwYXlsb2FkLmxlbmd0aCk7XG4gIH1cblxuICAvLyBWZXJpZnkgY2hlY2tzdW1cbiAgY29uc3QgY3MgPSBiLnJlYWRVSW50MzJCRShvZmYpO1xuICBjb25zdCBleHBlY3RlZENzID0gY2hlY2tzdW0oYi5zbGljZSgwLCBiLmxlbmd0aCAtIDQpKTtcbiAgaWYgKGNzICE9PSBleHBlY3RlZENzKSB7XG4gICAgcGFyc2VkLmVyciA9ICdJbnZhbGlkIGNoZWNrc3VtIGZyb20gZGV2aWNlIHJlc3BvbnNlJ1xuICAgIHBhcnNlZC5kYXRhID0gbnVsbDtcbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG4gIFxuICByZXR1cm4gcGFyc2VkO1xufVxuXG5mdW5jdGlvbiBjaGVja3N1bSh4KSB7XG4gIC8vIGNyYzMyIHJldHVybnMgYSBzaWduZWQgaW50ZWdlciAtIG5lZWQgdG8gY2FzdCBpdCB0byB1bnNpZ25lZFxuICAvLyBOb3RlIHRoYXQgdGhpcyB1c2VzIHRoZSBkZWZhdWx0IDB4ZWRiODgzMjAgcG9seW5vbWlhbFxuICByZXR1cm4gY3JjMzIuYnVmKHgpID4+PiAwOyAvLyBOZWVkIHRoaXMgdG8gYmUgYSB1aW50LCBoZW5jZSB0aGUgYml0IHNoaWZ0XG59XG5cbi8vIEdldCBhIDc0LWJ5dGUgcGFkZGVkIERFUi1lbmNvZGVkIHNpZ25hdHVyZSBidWZmZXJcbi8vIGBzaWdgIG11c3QgYmUgdGhlIHNpZ25hdHVyZSBvdXRwdXQgZnJvbSBlbGxpcHRpYy5qc1xuZnVuY3Rpb24gdG9QYWRkZWRERVIoc2lnKSB7XG4gIC8vIFdlIHVzZSA3NCBhcyB0aGUgbWF4aW11bSBsZW5ndGggb2YgYSBERVIgc2lnbmF0dXJlLiBBbGwgc2lncyBtdXN0XG4gIC8vIGJlIHJpZ2h0LXBhZGRlZCB3aXRoIHplcm9zIHNvIHRoYXQgdGhpcyBjYW4gYmUgYSBmaXhlZCBzaXplIGZpZWxkXG4gIGNvbnN0IGIgPSBCdWZmZXIuYWxsb2MoNzQpO1xuICBjb25zdCBkcyA9IEJ1ZmZlci5mcm9tKHNpZy50b0RFUigpKTtcbiAgZHMuY29weShiKTtcbiAgcmV0dXJuIGI7XG59XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFRSQU5TQUNUSU9OIFVUSUxTXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5jb25zdCBzaWduUmVxUmVzb2x2ZXIgPSB7XG4gICdCVEMnOiBidWlsZEJpdGNvaW5UeFJlcXVlc3QsXG4gICdFVEgnOiBidWlsZEV0aGVyZXVtVHhSZXF1ZXN0LFxuICAnRVRIX01TRyc6IGJ1aWxkRXRoZXJldW1Nc2dSZXF1ZXN0LFxufVxuXG4vLyBUZW1wb3JhcnkgaGVscGVyIHRvIGRldGVybWluZSBpZiB0aGlzIGlzIGEgc3VwcG9ydGVkIEJJUDQ0IHBhcmVudCBwYXRoXG5mdW5jdGlvbiBpc1ZhbGlkQXNzZXRQYXRoKHBhdGgpIHtcbiAgY29uc3QgSEFSREVORURfT0ZGU0VUID0gMHg4MDAwMDAwMDtcbiAgY29uc3QgYWxsb3dlZFB1cnBvc2VzID0gW0hBUkRFTkVEX09GRlNFVCs0OSwgSEFSREVORURfT0ZGU0VUKzQ0XTtcbiAgY29uc3QgYWxsb3dlZENvaW5zID0gW0hBUkRFTkVEX09GRlNFVCwgSEFSREVORURfT0ZGU0VUKzEsIEhBUkRFTkVEX09GRlNFVCs2MF07XG4gIGNvbnN0IGFsbG93ZWRBY2NvdW50cyA9IFtIQVJERU5FRF9PRkZTRVRdO1xuICBjb25zdCBhbGxvd2VkQ2hhbmdlID0gWzAsIDFdXG4gIHJldHVybiAoXG4gICAgKGFsbG93ZWRQdXJwb3Nlcy5pbmRleE9mKHBhdGhbMF0pID49IDApICYmXG4gICAgKGFsbG93ZWRDb2lucy5pbmRleE9mKHBhdGhbMV0pID49IDApICYmXG4gICAgKGFsbG93ZWRBY2NvdW50cy5pbmRleE9mKHBhdGhbMl0pID49IDApICYmXG4gICAgKGFsbG93ZWRDaGFuZ2UuaW5kZXhPZihwYXRoWzNdKSA+PSAwKVxuICApO1xufVxuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBDUllQVE8gVVRJTFNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmZ1bmN0aW9uIGFlczI1Nl9lbmNyeXB0KGRhdGEsIGtleSkge1xuICBjb25zdCBpdiA9IEJ1ZmZlci5mcm9tKEFFU19JVik7XG4gIGNvbnN0IGFlc0NiYyA9IG5ldyBhZXMuTW9kZU9mT3BlcmF0aW9uLmNiYyhrZXksIGl2KTtcbiAgY29uc3QgcGFkZGVkRGF0YSA9IChkYXRhLmxlbmd0aCkgJSAxNiA9PT0gMCA/IGRhdGEgOiBhZXMucGFkZGluZy5wa2NzNy5wYWQoZGF0YSk7XG4gIHJldHVybiBCdWZmZXIuZnJvbShhZXNDYmMuZW5jcnlwdChwYWRkZWREYXRhKSk7XG59XG5cbmZ1bmN0aW9uIGFlczI1Nl9kZWNyeXB0KGRhdGEsIGtleSkge1xuICBjb25zdCBpdiA9IEJ1ZmZlci5mcm9tKEFFU19JVik7XG4gIGNvbnN0IGFlc0NiYyA9IG5ldyBhZXMuTW9kZU9mT3BlcmF0aW9uLmNiYyhrZXksIGl2KTtcbiAgcmV0dXJuIEJ1ZmZlci5mcm9tKGFlc0NiYy5kZWNyeXB0KGRhdGEpKTtcbn1cblxuLy8gRGVjb2RlIGEgREVSIHNpZ25hdHVyZS4gUmV0dXJucyBzaWduYXR1cmUgb2JqZWN0IHtyLCBzIH0gb3IgbnVsbCBpZiB0aGVyZSBpcyBhbiBlcnJvclxuZnVuY3Rpb24gcGFyc2VERVIoc2lnQnVmKSB7XG4gIGlmIChzaWdCdWZbMF0gIT09IDB4MzAgfHwgc2lnQnVmWzJdICE9PSAweDAyKSByZXR1cm4gbnVsbDtcbiAgbGV0IG9mZiA9IDM7XG4gIGNvbnN0IHNpZyA9IHsgcjogbnVsbCwgczogbnVsbCB9XG4gIGNvbnN0IHJMZW4gPSBzaWdCdWZbb2ZmXTsgb2ZmKys7XG4gIHNpZy5yID0gc2lnQnVmLnNsaWNlKG9mZiwgb2ZmICsgckxlbik7IG9mZiArPSByTGVuXG4gIGlmIChzaWdCdWZbb2ZmXSAhPT0gMHgwMikgcmV0dXJuIG51bGw7XG4gIG9mZisrO1xuICBjb25zdCBzTGVuID0gc2lnQnVmW29mZl07IG9mZisrO1xuICBzaWcucyA9IHNpZ0J1Zi5zbGljZShvZmYsIG9mZiArIHNMZW4pO1xuICByZXR1cm4gc2lnO1xufVxuXG5mdW5jdGlvbiBnZXRQMjU2S2V5UGFpciAocHJpdikge1xuICByZXR1cm4gZWMua2V5RnJvbVByaXZhdGUocHJpdiwgJ2hleCcpO1xufVxuXG5mdW5jdGlvbiBnZXRQMjU2S2V5UGFpckZyb21QdWIocHViKSB7XG4gIHJldHVybiBlYy5rZXlGcm9tUHVibGljKHB1YiwgJ2hleCcpO1xufVxuXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc1ZhbGlkQXNzZXRQYXRoLFxuICBlbnN1cmVIZXhCdWZmZXIsXG4gIHNpZ25SZXFSZXNvbHZlcixcbiAgYWVzMjU2X2RlY3J5cHQsXG4gIGFlczI1Nl9lbmNyeXB0LFxuICBwYXJzZURFUixcbiAgY2hlY2tzdW0sXG4gIHBhcnNlTGF0dGljZTFSZXNwb25zZSxcbiAgZ2V0UDI1NktleVBhaXIsXG4gIGdldFAyNTZLZXlQYWlyRnJvbVB1YixcbiAgdG9QYWRkZWRERVIsXG59IiwiY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSgnYXNzZXJ0JylcbmNvbnN0IEJ1ZmZlciA9IHJlcXVpcmUoJ2J1ZmZlci8nKS5CdWZmZXJcbi8qKlxuICogUkxQIEVuY29kaW5nIGJhc2VkIG9uOiBodHRwczovL2dpdGh1Yi5jb20vZXRoZXJldW0vd2lraS93aWtpLyU1QkVuZ2xpc2glNUQtUkxQXG4gKiBUaGlzIGZ1bmN0aW9uIHRha2VzIGluIGEgZGF0YSwgY29udmVydCBpdCB0byBidWZmZXIgaWYgbm90LCBhbmQgYSBsZW5ndGggZm9yIHJlY3Vyc2lvblxuICpcbiAqIEBwYXJhbSB7QnVmZmVyLFN0cmluZyxJbnRlZ2VyLEFycmF5fSBkYXRhIC0gd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYnVmZmVyXG4gKiBAcmV0dXJucyB7QnVmZmVyfSAtIHJldHVybnMgYnVmZmVyIG9mIGVuY29kZWQgZGF0YVxuICoqL1xuZXhwb3J0cy5lbmNvZGUgPSBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgaWYgKGlucHV0IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICB2YXIgb3V0cHV0ID0gW11cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGlucHV0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBvdXRwdXQucHVzaChleHBvcnRzLmVuY29kZShpbnB1dFtpXSkpXG4gICAgfVxuICAgIHZhciBidWYgPSBCdWZmZXIuY29uY2F0KG91dHB1dClcbiAgICByZXR1cm4gQnVmZmVyLmNvbmNhdChbZW5jb2RlTGVuZ3RoKGJ1Zi5sZW5ndGgsIDE5MiksIGJ1Zl0pXG4gIH0gZWxzZSB7XG4gICAgaW5wdXQgPSB0b0J1ZmZlcihpbnB1dClcbiAgICBpZiAoaW5wdXQubGVuZ3RoID09PSAxICYmIGlucHV0WzBdIDwgMTI4KSB7XG4gICAgICByZXR1cm4gaW5wdXRcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIEJ1ZmZlci5jb25jYXQoW2VuY29kZUxlbmd0aChpbnB1dC5sZW5ndGgsIDEyOCksIGlucHV0XSlcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc2FmZVBhcnNlSW50ICh2LCBiYXNlKSB7XG4gIGlmICh2LnNsaWNlKDAsIDIpID09PSAnMDAnKSB7XG4gICAgdGhyb3cgKG5ldyBFcnJvcignaW52YWxpZCBSTFA6IGV4dHJhIHplcm9zJykpXG4gIH1cblxuICByZXR1cm4gcGFyc2VJbnQodiwgYmFzZSlcbn1cblxuZnVuY3Rpb24gZW5jb2RlTGVuZ3RoIChsZW4sIG9mZnNldCkge1xuICBpZiAobGVuIDwgNTYpIHtcbiAgICByZXR1cm4gbmV3IEJ1ZmZlcihbbGVuICsgb2Zmc2V0XSlcbiAgfSBlbHNlIHtcbiAgICB2YXIgaGV4TGVuZ3RoID0gaW50VG9IZXgobGVuKVxuICAgIHZhciBsTGVuZ3RoID0gaGV4TGVuZ3RoLmxlbmd0aCAvIDJcbiAgICB2YXIgZmlyc3RCeXRlID0gaW50VG9IZXgob2Zmc2V0ICsgNTUgKyBsTGVuZ3RoKVxuICAgIHJldHVybiBuZXcgQnVmZmVyKGZpcnN0Qnl0ZSArIGhleExlbmd0aCwgJ2hleCcpXG4gIH1cbn1cblxuLyoqXG4gKiBSTFAgRGVjb2RpbmcgYmFzZWQgb246IHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vZXRoZXJldW0vd2lraS93aWtpLyU1QkVuZ2xpc2glNUQtUkxQfFJMUH1cbiAqIEBwYXJhbSB7QnVmZmVyLFN0cmluZyxJbnRlZ2VyLEFycmF5fSBkYXRhIC0gd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYnVmZmVyXG4gKiBAcmV0dXJucyB7QXJyYXl9IC0gcmV0dXJucyBkZWNvZGUgQXJyYXkgb2YgQnVmZmVycyBjb250YWluZyB0aGUgb3JpZ2luYWwgbWVzc2FnZVxuICoqL1xuZXhwb3J0cy5kZWNvZGUgPSBmdW5jdGlvbiAoaW5wdXQsIHN0cmVhbSkge1xuICBpZiAoIWlucHV0IHx8IGlucHV0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBuZXcgQnVmZmVyKFtdKVxuICB9XG5cbiAgaW5wdXQgPSB0b0J1ZmZlcihpbnB1dClcbiAgdmFyIGRlY29kZWQgPSBfZGVjb2RlKGlucHV0KVxuXG4gIGlmIChzdHJlYW0pIHtcbiAgICByZXR1cm4gZGVjb2RlZFxuICB9XG5cbiAgYXNzZXJ0LmVxdWFsKGRlY29kZWQucmVtYWluZGVyLmxlbmd0aCwgMCwgJ2ludmFsaWQgcmVtYWluZGVyJylcbiAgcmV0dXJuIGRlY29kZWQuZGF0YVxufVxuXG5leHBvcnRzLmdldExlbmd0aCA9IGZ1bmN0aW9uIChpbnB1dCkge1xuICBpZiAoIWlucHV0IHx8IGlucHV0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBuZXcgQnVmZmVyKFtdKVxuICB9XG5cbiAgaW5wdXQgPSB0b0J1ZmZlcihpbnB1dClcbiAgdmFyIGZpcnN0Qnl0ZSA9IGlucHV0WzBdXG4gIGlmIChmaXJzdEJ5dGUgPD0gMHg3Zikge1xuICAgIHJldHVybiBpbnB1dC5sZW5ndGhcbiAgfSBlbHNlIGlmIChmaXJzdEJ5dGUgPD0gMHhiNykge1xuICAgIHJldHVybiBmaXJzdEJ5dGUgLSAweDdmXG4gIH0gZWxzZSBpZiAoZmlyc3RCeXRlIDw9IDB4YmYpIHtcbiAgICByZXR1cm4gZmlyc3RCeXRlIC0gMHhiNlxuICB9IGVsc2UgaWYgKGZpcnN0Qnl0ZSA8PSAweGY3KSB7XG4gICAgLy8gYSBsaXN0IGJldHdlZW4gIDAtNTUgYnl0ZXMgbG9uZ1xuICAgIHJldHVybiBmaXJzdEJ5dGUgLSAweGJmXG4gIH0gZWxzZSB7XG4gICAgLy8gYSBsaXN0ICBvdmVyIDU1IGJ5dGVzIGxvbmdcbiAgICB2YXIgbGxlbmd0aCA9IGZpcnN0Qnl0ZSAtIDB4ZjZcbiAgICB2YXIgbGVuZ3RoID0gc2FmZVBhcnNlSW50KGlucHV0LnNsaWNlKDEsIGxsZW5ndGgpLnRvU3RyaW5nKCdoZXgnKSwgMTYpXG4gICAgcmV0dXJuIGxsZW5ndGggKyBsZW5ndGhcbiAgfVxufVxuXG5mdW5jdGlvbiBfZGVjb2RlIChpbnB1dCkge1xuICB2YXIgbGVuZ3RoLCBsbGVuZ3RoLCBkYXRhLCBpbm5lclJlbWFpbmRlciwgZFxuICB2YXIgZGVjb2RlZCA9IFtdXG4gIHZhciBmaXJzdEJ5dGUgPSBpbnB1dFswXVxuXG4gIGlmIChmaXJzdEJ5dGUgPD0gMHg3Zikge1xuICAgIC8vIGEgc2luZ2xlIGJ5dGUgd2hvc2UgdmFsdWUgaXMgaW4gdGhlIFsweDAwLCAweDdmXSByYW5nZSwgdGhhdCBieXRlIGlzIGl0cyBvd24gUkxQIGVuY29kaW5nLlxuICAgIHJldHVybiB7XG4gICAgICBkYXRhOiBpbnB1dC5zbGljZSgwLCAxKSxcbiAgICAgIHJlbWFpbmRlcjogaW5wdXQuc2xpY2UoMSlcbiAgICB9XG4gIH0gZWxzZSBpZiAoZmlyc3RCeXRlIDw9IDB4YjcpIHtcbiAgICAvLyBzdHJpbmcgaXMgMC01NSBieXRlcyBsb25nLiBBIHNpbmdsZSBieXRlIHdpdGggdmFsdWUgMHg4MCBwbHVzIHRoZSBsZW5ndGggb2YgdGhlIHN0cmluZyBmb2xsb3dlZCBieSB0aGUgc3RyaW5nXG4gICAgLy8gVGhlIHJhbmdlIG9mIHRoZSBmaXJzdCBieXRlIGlzIFsweDgwLCAweGI3XVxuICAgIGxlbmd0aCA9IGZpcnN0Qnl0ZSAtIDB4N2ZcblxuICAgIC8vIHNldCAweDgwIG51bGwgdG8gMFxuICAgIGlmIChmaXJzdEJ5dGUgPT09IDB4ODApIHtcbiAgICAgIGRhdGEgPSBuZXcgQnVmZmVyKFtdKVxuICAgIH0gZWxzZSB7XG4gICAgICBkYXRhID0gaW5wdXQuc2xpY2UoMSwgbGVuZ3RoKVxuICAgIH1cblxuICAgIGlmIChsZW5ndGggPT09IDIgJiYgZGF0YVswXSA8IDB4ODApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YWxpZCBybHAgZW5jb2Rpbmc6IGJ5dGUgbXVzdCBiZSBsZXNzIDB4ODAnKVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBkYXRhOiBkYXRhLFxuICAgICAgcmVtYWluZGVyOiBpbnB1dC5zbGljZShsZW5ndGgpXG4gICAgfVxuICB9IGVsc2UgaWYgKGZpcnN0Qnl0ZSA8PSAweGJmKSB7XG4gICAgbGxlbmd0aCA9IGZpcnN0Qnl0ZSAtIDB4YjZcbiAgICBsZW5ndGggPSBzYWZlUGFyc2VJbnQoaW5wdXQuc2xpY2UoMSwgbGxlbmd0aCkudG9TdHJpbmcoJ2hleCcpLCAxNilcbiAgICBkYXRhID0gaW5wdXQuc2xpY2UobGxlbmd0aCwgbGVuZ3RoICsgbGxlbmd0aClcbiAgICBpZiAoZGF0YS5sZW5ndGggPCBsZW5ndGgpIHtcbiAgICAgIHRocm93IChuZXcgRXJyb3IoJ2ludmFsaWQgUkxQJykpXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGE6IGRhdGEsXG4gICAgICByZW1haW5kZXI6IGlucHV0LnNsaWNlKGxlbmd0aCArIGxsZW5ndGgpXG4gICAgfVxuICB9IGVsc2UgaWYgKGZpcnN0Qnl0ZSA8PSAweGY3KSB7XG4gICAgLy8gYSBsaXN0IGJldHdlZW4gIDAtNTUgYnl0ZXMgbG9uZ1xuICAgIGxlbmd0aCA9IGZpcnN0Qnl0ZSAtIDB4YmZcbiAgICBpbm5lclJlbWFpbmRlciA9IGlucHV0LnNsaWNlKDEsIGxlbmd0aClcbiAgICB3aGlsZSAoaW5uZXJSZW1haW5kZXIubGVuZ3RoKSB7XG4gICAgICBkID0gX2RlY29kZShpbm5lclJlbWFpbmRlcilcbiAgICAgIGRlY29kZWQucHVzaChkLmRhdGEpXG4gICAgICBpbm5lclJlbWFpbmRlciA9IGQucmVtYWluZGVyXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGE6IGRlY29kZWQsXG4gICAgICByZW1haW5kZXI6IGlucHV0LnNsaWNlKGxlbmd0aClcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gYSBsaXN0ICBvdmVyIDU1IGJ5dGVzIGxvbmdcbiAgICBsbGVuZ3RoID0gZmlyc3RCeXRlIC0gMHhmNlxuICAgIGxlbmd0aCA9IHNhZmVQYXJzZUludChpbnB1dC5zbGljZSgxLCBsbGVuZ3RoKS50b1N0cmluZygnaGV4JyksIDE2KVxuICAgIHZhciB0b3RhbExlbmd0aCA9IGxsZW5ndGggKyBsZW5ndGhcbiAgICBpZiAodG90YWxMZW5ndGggPiBpbnB1dC5sZW5ndGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YWxpZCBybHA6IHRvdGFsIGxlbmd0aCBpcyBsYXJnZXIgdGhhbiB0aGUgZGF0YScpXG4gICAgfVxuXG4gICAgaW5uZXJSZW1haW5kZXIgPSBpbnB1dC5zbGljZShsbGVuZ3RoLCB0b3RhbExlbmd0aClcbiAgICBpZiAoaW5uZXJSZW1haW5kZXIubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgcmxwLCBMaXN0IGhhcyBhIGludmFsaWQgbGVuZ3RoJylcbiAgICB9XG5cbiAgICB3aGlsZSAoaW5uZXJSZW1haW5kZXIubGVuZ3RoKSB7XG4gICAgICBkID0gX2RlY29kZShpbm5lclJlbWFpbmRlcilcbiAgICAgIGRlY29kZWQucHVzaChkLmRhdGEpXG4gICAgICBpbm5lclJlbWFpbmRlciA9IGQucmVtYWluZGVyXG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBkYXRhOiBkZWNvZGVkLFxuICAgICAgcmVtYWluZGVyOiBpbnB1dC5zbGljZSh0b3RhbExlbmd0aClcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNIZXhQcmVmaXhlZCAoc3RyKSB7XG4gIHJldHVybiBzdHIuc2xpY2UoMCwgMikgPT09ICcweCdcbn1cblxuLy8gUmVtb3ZlcyAweCBmcm9tIGEgZ2l2ZW4gU3RyaW5nXG5mdW5jdGlvbiBzdHJpcEhleFByZWZpeCAoc3RyKSB7XG4gIGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBzdHJcbiAgfVxuICByZXR1cm4gaXNIZXhQcmVmaXhlZChzdHIpID8gc3RyLnNsaWNlKDIpIDogc3RyXG59XG5cbmZ1bmN0aW9uIGludFRvSGV4IChpKSB7XG4gIHZhciBoZXggPSBpLnRvU3RyaW5nKDE2KVxuICBpZiAoaGV4Lmxlbmd0aCAlIDIpIHtcbiAgICBoZXggPSAnMCcgKyBoZXhcbiAgfVxuXG4gIHJldHVybiBoZXhcbn1cblxuZnVuY3Rpb24gcGFkVG9FdmVuIChhKSB7XG4gIGlmIChhLmxlbmd0aCAlIDIpIGEgPSAnMCcgKyBhXG4gIHJldHVybiBhXG59XG5cbmZ1bmN0aW9uIGludFRvQnVmZmVyIChpKSB7XG4gIHZhciBoZXggPSBpbnRUb0hleChpKVxuICByZXR1cm4gbmV3IEJ1ZmZlcihoZXgsICdoZXgnKVxufVxuXG5mdW5jdGlvbiB0b0J1ZmZlciAodikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcih2KSkge1xuICAgIGlmICh0eXBlb2YgdiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmIChpc0hleFByZWZpeGVkKHYpKSB7XG4gICAgICAgIHYgPSBuZXcgQnVmZmVyKHBhZFRvRXZlbihzdHJpcEhleFByZWZpeCh2KSksICdoZXgnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdiA9IG5ldyBCdWZmZXIodilcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2ID09PSAnbnVtYmVyJykge1xuICAgICAgaWYgKCF2KSB7XG4gICAgICAgIHYgPSBuZXcgQnVmZmVyKFtdKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdiA9IGludFRvQnVmZmVyKHYpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh2ID09PSBudWxsIHx8IHYgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdiA9IG5ldyBCdWZmZXIoW10pXG4gICAgfSBlbHNlIGlmICh2LnRvQXJyYXkpIHtcbiAgICAgIC8vIGNvbnZlcnRzIGEgQk4gdG8gYSBCdWZmZXJcbiAgICAgIHYgPSBuZXcgQnVmZmVyKHYudG9BcnJheSgpKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgdHlwZScpXG4gICAgfVxuICB9XG4gIHJldHVybiB2XG59XG4iLCJmdW5jdGlvbiBBZ2VudCgpIHtcbiAgdGhpcy5fZGVmYXVsdHMgPSBbXTtcbn1cblxuW1widXNlXCIsIFwib25cIiwgXCJvbmNlXCIsIFwic2V0XCIsIFwicXVlcnlcIiwgXCJ0eXBlXCIsIFwiYWNjZXB0XCIsIFwiYXV0aFwiLCBcIndpdGhDcmVkZW50aWFsc1wiLCBcInNvcnRRdWVyeVwiLCBcInJldHJ5XCIsIFwib2tcIiwgXCJyZWRpcmVjdHNcIixcbiBcInRpbWVvdXRcIiwgXCJidWZmZXJcIiwgXCJzZXJpYWxpemVcIiwgXCJwYXJzZVwiLCBcImNhXCIsIFwia2V5XCIsIFwicGZ4XCIsIFwiY2VydFwiXS5mb3JFYWNoKGZ1bmN0aW9uKGZuKSB7XG4gIC8qKiBEZWZhdWx0IHNldHRpbmcgZm9yIGFsbCByZXF1ZXN0cyBmcm9tIHRoaXMgYWdlbnQgKi9cbiAgQWdlbnQucHJvdG90eXBlW2ZuXSA9IGZ1bmN0aW9uKC8qdmFyYXJncyovKSB7XG4gICAgdGhpcy5fZGVmYXVsdHMucHVzaCh7Zm46Zm4sIGFyZ3VtZW50czphcmd1bWVudHN9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufSk7XG5cbkFnZW50LnByb3RvdHlwZS5fc2V0RGVmYXVsdHMgPSBmdW5jdGlvbihyZXEpIHtcbiAgICB0aGlzLl9kZWZhdWx0cy5mb3JFYWNoKGZ1bmN0aW9uKGRlZikge1xuICAgICAgcmVxW2RlZi5mbl0uYXBwbHkocmVxLCBkZWYuYXJndW1lbnRzKTtcbiAgICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQWdlbnQ7XG4iLCIvKipcbiAqIFJvb3QgcmVmZXJlbmNlIGZvciBpZnJhbWVzLlxuICovXG5cbnZhciByb290O1xuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7IC8vIEJyb3dzZXIgd2luZG93XG4gIHJvb3QgPSB3aW5kb3c7XG59IGVsc2UgaWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJykgeyAvLyBXZWIgV29ya2VyXG4gIHJvb3QgPSBzZWxmO1xufSBlbHNlIHsgLy8gT3RoZXIgZW52aXJvbm1lbnRzXG4gIGNvbnNvbGUud2FybihcIlVzaW5nIGJyb3dzZXItb25seSB2ZXJzaW9uIG9mIHN1cGVyYWdlbnQgaW4gbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG4gIHJvb3QgPSB0aGlzO1xufVxuXG52YXIgRW1pdHRlciA9IHJlcXVpcmUoJ2NvbXBvbmVudC1lbWl0dGVyJyk7XG52YXIgUmVxdWVzdEJhc2UgPSByZXF1aXJlKCcuL3JlcXVlc3QtYmFzZScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pcy1vYmplY3QnKTtcbnZhciBSZXNwb25zZUJhc2UgPSByZXF1aXJlKCcuL3Jlc3BvbnNlLWJhc2UnKTtcbnZhciBBZ2VudCA9IHJlcXVpcmUoJy4vYWdlbnQtYmFzZScpO1xuXG4vKipcbiAqIE5vb3AuXG4gKi9cblxuZnVuY3Rpb24gbm9vcCgpe307XG5cbi8qKlxuICogRXhwb3NlIGByZXF1ZXN0YC5cbiAqL1xuXG52YXIgcmVxdWVzdCA9IGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1ldGhvZCwgdXJsKSB7XG4gIC8vIGNhbGxiYWNrXG4gIGlmICgnZnVuY3Rpb24nID09IHR5cGVvZiB1cmwpIHtcbiAgICByZXR1cm4gbmV3IGV4cG9ydHMuUmVxdWVzdCgnR0VUJywgbWV0aG9kKS5lbmQodXJsKTtcbiAgfVxuXG4gIC8vIHVybCBmaXJzdFxuICBpZiAoMSA9PSBhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIG5ldyBleHBvcnRzLlJlcXVlc3QoJ0dFVCcsIG1ldGhvZCk7XG4gIH1cblxuICByZXR1cm4gbmV3IGV4cG9ydHMuUmVxdWVzdChtZXRob2QsIHVybCk7XG59XG5cbmV4cG9ydHMuUmVxdWVzdCA9IFJlcXVlc3Q7XG5cbi8qKlxuICogRGV0ZXJtaW5lIFhIUi5cbiAqL1xuXG5yZXF1ZXN0LmdldFhIUiA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHJvb3QuWE1MSHR0cFJlcXVlc3RcbiAgICAgICYmICghcm9vdC5sb2NhdGlvbiB8fCAnZmlsZTonICE9IHJvb3QubG9jYXRpb24ucHJvdG9jb2xcbiAgICAgICAgICB8fCAhcm9vdC5BY3RpdmVYT2JqZWN0KSkge1xuICAgIHJldHVybiBuZXcgWE1MSHR0cFJlcXVlc3Q7XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHsgcmV0dXJuIG5ldyBBY3RpdmVYT2JqZWN0KCdNaWNyb3NvZnQuWE1MSFRUUCcpOyB9IGNhdGNoKGUpIHt9XG4gICAgdHJ5IHsgcmV0dXJuIG5ldyBBY3RpdmVYT2JqZWN0KCdNc3htbDIuWE1MSFRUUC42LjAnKTsgfSBjYXRjaChlKSB7fVxuICAgIHRyeSB7IHJldHVybiBuZXcgQWN0aXZlWE9iamVjdCgnTXN4bWwyLlhNTEhUVFAuMy4wJyk7IH0gY2F0Y2goZSkge31cbiAgICB0cnkgeyByZXR1cm4gbmV3IEFjdGl2ZVhPYmplY3QoJ01zeG1sMi5YTUxIVFRQJyk7IH0gY2F0Y2goZSkge31cbiAgfVxuICB0aHJvdyBFcnJvcihcIkJyb3dzZXItb25seSB2ZXJzaW9uIG9mIHN1cGVyYWdlbnQgY291bGQgbm90IGZpbmQgWEhSXCIpO1xufTtcblxuLyoqXG4gKiBSZW1vdmVzIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHdoaXRlc3BhY2UsIGFkZGVkIHRvIHN1cHBvcnQgSUUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbnZhciB0cmltID0gJycudHJpbVxuICA/IGZ1bmN0aW9uKHMpIHsgcmV0dXJuIHMudHJpbSgpOyB9XG4gIDogZnVuY3Rpb24ocykgeyByZXR1cm4gcy5yZXBsYWNlKC8oXlxccyp8XFxzKiQpL2csICcnKTsgfTtcblxuLyoqXG4gKiBTZXJpYWxpemUgdGhlIGdpdmVuIGBvYmpgLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZShvYmopIHtcbiAgaWYgKCFpc09iamVjdChvYmopKSByZXR1cm4gb2JqO1xuICB2YXIgcGFpcnMgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIHB1c2hFbmNvZGVkS2V5VmFsdWVQYWlyKHBhaXJzLCBrZXksIG9ialtrZXldKTtcbiAgfVxuICByZXR1cm4gcGFpcnMuam9pbignJicpO1xufVxuXG4vKipcbiAqIEhlbHBzICdzZXJpYWxpemUnIHdpdGggc2VyaWFsaXppbmcgYXJyYXlzLlxuICogTXV0YXRlcyB0aGUgcGFpcnMgYXJyYXkuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gcGFpcnNcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbFxuICovXG5cbmZ1bmN0aW9uIHB1c2hFbmNvZGVkS2V5VmFsdWVQYWlyKHBhaXJzLCBrZXksIHZhbCkge1xuICBpZiAodmFsICE9IG51bGwpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgICB2YWwuZm9yRWFjaChmdW5jdGlvbih2KSB7XG4gICAgICAgIHB1c2hFbmNvZGVkS2V5VmFsdWVQYWlyKHBhaXJzLCBrZXksIHYpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChpc09iamVjdCh2YWwpKSB7XG4gICAgICBmb3IodmFyIHN1YmtleSBpbiB2YWwpIHtcbiAgICAgICAgcHVzaEVuY29kZWRLZXlWYWx1ZVBhaXIocGFpcnMsIGtleSArICdbJyArIHN1YmtleSArICddJywgdmFsW3N1YmtleV0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwYWlycy5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChrZXkpXG4gICAgICAgICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbCkpO1xuICAgIH1cbiAgfSBlbHNlIGlmICh2YWwgPT09IG51bGwpIHtcbiAgICBwYWlycy5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChrZXkpKTtcbiAgfVxufVxuXG4vKipcbiAqIEV4cG9zZSBzZXJpYWxpemF0aW9uIG1ldGhvZC5cbiAqL1xuXG5yZXF1ZXN0LnNlcmlhbGl6ZU9iamVjdCA9IHNlcmlhbGl6ZTtcblxuLyoqXG4gICogUGFyc2UgdGhlIGdpdmVuIHgtd3d3LWZvcm0tdXJsZW5jb2RlZCBgc3RyYC5cbiAgKlxuICAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICogQGFwaSBwcml2YXRlXG4gICovXG5cbmZ1bmN0aW9uIHBhcnNlU3RyaW5nKHN0cikge1xuICB2YXIgb2JqID0ge307XG4gIHZhciBwYWlycyA9IHN0ci5zcGxpdCgnJicpO1xuICB2YXIgcGFpcjtcbiAgdmFyIHBvcztcblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gcGFpcnMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICBwYWlyID0gcGFpcnNbaV07XG4gICAgcG9zID0gcGFpci5pbmRleE9mKCc9Jyk7XG4gICAgaWYgKHBvcyA9PSAtMSkge1xuICAgICAgb2JqW2RlY29kZVVSSUNvbXBvbmVudChwYWlyKV0gPSAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqW2RlY29kZVVSSUNvbXBvbmVudChwYWlyLnNsaWNlKDAsIHBvcykpXSA9XG4gICAgICAgIGRlY29kZVVSSUNvbXBvbmVudChwYWlyLnNsaWNlKHBvcyArIDEpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG4vKipcbiAqIEV4cG9zZSBwYXJzZXIuXG4gKi9cblxucmVxdWVzdC5wYXJzZVN0cmluZyA9IHBhcnNlU3RyaW5nO1xuXG4vKipcbiAqIERlZmF1bHQgTUlNRSB0eXBlIG1hcC5cbiAqXG4gKiAgICAgc3VwZXJhZ2VudC50eXBlcy54bWwgPSAnYXBwbGljYXRpb24veG1sJztcbiAqXG4gKi9cblxucmVxdWVzdC50eXBlcyA9IHtcbiAgaHRtbDogJ3RleHQvaHRtbCcsXG4gIGpzb246ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgeG1sOiAndGV4dC94bWwnLFxuICB1cmxlbmNvZGVkOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgJ2Zvcm0nOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgJ2Zvcm0tZGF0YSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG59O1xuXG4vKipcbiAqIERlZmF1bHQgc2VyaWFsaXphdGlvbiBtYXAuXG4gKlxuICogICAgIHN1cGVyYWdlbnQuc2VyaWFsaXplWydhcHBsaWNhdGlvbi94bWwnXSA9IGZ1bmN0aW9uKG9iail7XG4gKiAgICAgICByZXR1cm4gJ2dlbmVyYXRlZCB4bWwgaGVyZSc7XG4gKiAgICAgfTtcbiAqXG4gKi9cblxucmVxdWVzdC5zZXJpYWxpemUgPSB7XG4gICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnOiBzZXJpYWxpemUsXG4gICdhcHBsaWNhdGlvbi9qc29uJzogSlNPTi5zdHJpbmdpZnlcbn07XG5cbi8qKlxuICAqIERlZmF1bHQgcGFyc2Vycy5cbiAgKlxuICAqICAgICBzdXBlcmFnZW50LnBhcnNlWydhcHBsaWNhdGlvbi94bWwnXSA9IGZ1bmN0aW9uKHN0cil7XG4gICogICAgICAgcmV0dXJuIHsgb2JqZWN0IHBhcnNlZCBmcm9tIHN0ciB9O1xuICAqICAgICB9O1xuICAqXG4gICovXG5cbnJlcXVlc3QucGFyc2UgPSB7XG4gICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnOiBwYXJzZVN0cmluZyxcbiAgJ2FwcGxpY2F0aW9uL2pzb24nOiBKU09OLnBhcnNlXG59O1xuXG4vKipcbiAqIFBhcnNlIHRoZSBnaXZlbiBoZWFkZXIgYHN0cmAgaW50b1xuICogYW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIG1hcHBlZCBmaWVsZHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7T2JqZWN0fVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gcGFyc2VIZWFkZXIoc3RyKSB7XG4gIHZhciBsaW5lcyA9IHN0ci5zcGxpdCgvXFxyP1xcbi8pO1xuICB2YXIgZmllbGRzID0ge307XG4gIHZhciBpbmRleDtcbiAgdmFyIGxpbmU7XG4gIHZhciBmaWVsZDtcbiAgdmFyIHZhbDtcblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gbGluZXMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICBsaW5lID0gbGluZXNbaV07XG4gICAgaW5kZXggPSBsaW5lLmluZGV4T2YoJzonKTtcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7IC8vIGNvdWxkIGJlIGVtcHR5IGxpbmUsIGp1c3Qgc2tpcCBpdFxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGZpZWxkID0gbGluZS5zbGljZSgwLCBpbmRleCkudG9Mb3dlckNhc2UoKTtcbiAgICB2YWwgPSB0cmltKGxpbmUuc2xpY2UoaW5kZXggKyAxKSk7XG4gICAgZmllbGRzW2ZpZWxkXSA9IHZhbDtcbiAgfVxuXG4gIHJldHVybiBmaWVsZHM7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYG1pbWVgIGlzIGpzb24gb3IgaGFzICtqc29uIHN0cnVjdHVyZWQgc3ludGF4IHN1ZmZpeC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbWltZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGlzSlNPTihtaW1lKSB7XG4gIC8vIHNob3VsZCBtYXRjaCAvanNvbiBvciAranNvblxuICAvLyBidXQgbm90IC9qc29uLXNlcVxuICByZXR1cm4gL1tcXC8rXWpzb24oJHxbXi1cXHddKS8udGVzdChtaW1lKTtcbn1cblxuLyoqXG4gKiBJbml0aWFsaXplIGEgbmV3IGBSZXNwb25zZWAgd2l0aCB0aGUgZ2l2ZW4gYHhocmAuXG4gKlxuICogIC0gc2V0IGZsYWdzICgub2ssIC5lcnJvciwgZXRjKVxuICogIC0gcGFyc2UgaGVhZGVyXG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogIEFsaWFzaW5nIGBzdXBlcmFnZW50YCBhcyBgcmVxdWVzdGAgaXMgbmljZTpcbiAqXG4gKiAgICAgIHJlcXVlc3QgPSBzdXBlcmFnZW50O1xuICpcbiAqICBXZSBjYW4gdXNlIHRoZSBwcm9taXNlLWxpa2UgQVBJLCBvciBwYXNzIGNhbGxiYWNrczpcbiAqXG4gKiAgICAgIHJlcXVlc3QuZ2V0KCcvJykuZW5kKGZ1bmN0aW9uKHJlcyl7fSk7XG4gKiAgICAgIHJlcXVlc3QuZ2V0KCcvJywgZnVuY3Rpb24ocmVzKXt9KTtcbiAqXG4gKiAgU2VuZGluZyBkYXRhIGNhbiBiZSBjaGFpbmVkOlxuICpcbiAqICAgICAgcmVxdWVzdFxuICogICAgICAgIC5wb3N0KCcvdXNlcicpXG4gKiAgICAgICAgLnNlbmQoeyBuYW1lOiAndGonIH0pXG4gKiAgICAgICAgLmVuZChmdW5jdGlvbihyZXMpe30pO1xuICpcbiAqICBPciBwYXNzZWQgdG8gYC5zZW5kKClgOlxuICpcbiAqICAgICAgcmVxdWVzdFxuICogICAgICAgIC5wb3N0KCcvdXNlcicpXG4gKiAgICAgICAgLnNlbmQoeyBuYW1lOiAndGonIH0sIGZ1bmN0aW9uKHJlcyl7fSk7XG4gKlxuICogIE9yIHBhc3NlZCB0byBgLnBvc3QoKWA6XG4gKlxuICogICAgICByZXF1ZXN0XG4gKiAgICAgICAgLnBvc3QoJy91c2VyJywgeyBuYW1lOiAndGonIH0pXG4gKiAgICAgICAgLmVuZChmdW5jdGlvbihyZXMpe30pO1xuICpcbiAqIE9yIGZ1cnRoZXIgcmVkdWNlZCB0byBhIHNpbmdsZSBjYWxsIGZvciBzaW1wbGUgY2FzZXM6XG4gKlxuICogICAgICByZXF1ZXN0XG4gKiAgICAgICAgLnBvc3QoJy91c2VyJywgeyBuYW1lOiAndGonIH0sIGZ1bmN0aW9uKHJlcyl7fSk7XG4gKlxuICogQHBhcmFtIHtYTUxIVFRQUmVxdWVzdH0geGhyXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gUmVzcG9uc2UocmVxKSB7XG4gIHRoaXMucmVxID0gcmVxO1xuICB0aGlzLnhociA9IHRoaXMucmVxLnhocjtcbiAgLy8gcmVzcG9uc2VUZXh0IGlzIGFjY2Vzc2libGUgb25seSBpZiByZXNwb25zZVR5cGUgaXMgJycgb3IgJ3RleHQnIGFuZCBvbiBvbGRlciBicm93c2Vyc1xuICB0aGlzLnRleHQgPSAoKHRoaXMucmVxLm1ldGhvZCAhPSdIRUFEJyAmJiAodGhpcy54aHIucmVzcG9uc2VUeXBlID09PSAnJyB8fCB0aGlzLnhoci5yZXNwb25zZVR5cGUgPT09ICd0ZXh0JykpIHx8IHR5cGVvZiB0aGlzLnhoci5yZXNwb25zZVR5cGUgPT09ICd1bmRlZmluZWQnKVxuICAgICA/IHRoaXMueGhyLnJlc3BvbnNlVGV4dFxuICAgICA6IG51bGw7XG4gIHRoaXMuc3RhdHVzVGV4dCA9IHRoaXMucmVxLnhoci5zdGF0dXNUZXh0O1xuICB2YXIgc3RhdHVzID0gdGhpcy54aHIuc3RhdHVzO1xuICAvLyBoYW5kbGUgSUU5IGJ1ZzogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMDA0Njk3Mi9tc2llLXJldHVybnMtc3RhdHVzLWNvZGUtb2YtMTIyMy1mb3ItYWpheC1yZXF1ZXN0XG4gIGlmIChzdGF0dXMgPT09IDEyMjMpIHtcbiAgICBzdGF0dXMgPSAyMDQ7XG4gIH1cbiAgdGhpcy5fc2V0U3RhdHVzUHJvcGVydGllcyhzdGF0dXMpO1xuICB0aGlzLmhlYWRlciA9IHRoaXMuaGVhZGVycyA9IHBhcnNlSGVhZGVyKHRoaXMueGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpKTtcbiAgLy8gZ2V0QWxsUmVzcG9uc2VIZWFkZXJzIHNvbWV0aW1lcyBmYWxzZWx5IHJldHVybnMgXCJcIiBmb3IgQ09SUyByZXF1ZXN0cywgYnV0XG4gIC8vIGdldFJlc3BvbnNlSGVhZGVyIHN0aWxsIHdvcmtzLiBzbyB3ZSBnZXQgY29udGVudC10eXBlIGV2ZW4gaWYgZ2V0dGluZ1xuICAvLyBvdGhlciBoZWFkZXJzIGZhaWxzLlxuICB0aGlzLmhlYWRlclsnY29udGVudC10eXBlJ10gPSB0aGlzLnhoci5nZXRSZXNwb25zZUhlYWRlcignY29udGVudC10eXBlJyk7XG4gIHRoaXMuX3NldEhlYWRlclByb3BlcnRpZXModGhpcy5oZWFkZXIpO1xuXG4gIGlmIChudWxsID09PSB0aGlzLnRleHQgJiYgcmVxLl9yZXNwb25zZVR5cGUpIHtcbiAgICB0aGlzLmJvZHkgPSB0aGlzLnhoci5yZXNwb25zZTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmJvZHkgPSB0aGlzLnJlcS5tZXRob2QgIT0gJ0hFQUQnXG4gICAgICA/IHRoaXMuX3BhcnNlQm9keSh0aGlzLnRleHQgPyB0aGlzLnRleHQgOiB0aGlzLnhoci5yZXNwb25zZSlcbiAgICAgIDogbnVsbDtcbiAgfVxufVxuXG5SZXNwb25zZUJhc2UoUmVzcG9uc2UucHJvdG90eXBlKTtcblxuLyoqXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gYm9keSBgc3RyYC5cbiAqXG4gKiBVc2VkIGZvciBhdXRvLXBhcnNpbmcgb2YgYm9kaWVzLiBQYXJzZXJzXG4gKiBhcmUgZGVmaW5lZCBvbiB0aGUgYHN1cGVyYWdlbnQucGFyc2VgIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtNaXhlZH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlc3BvbnNlLnByb3RvdHlwZS5fcGFyc2VCb2R5ID0gZnVuY3Rpb24oc3RyKSB7XG4gIHZhciBwYXJzZSA9IHJlcXVlc3QucGFyc2VbdGhpcy50eXBlXTtcbiAgaWYgKHRoaXMucmVxLl9wYXJzZXIpIHtcbiAgICByZXR1cm4gdGhpcy5yZXEuX3BhcnNlcih0aGlzLCBzdHIpO1xuICB9XG4gIGlmICghcGFyc2UgJiYgaXNKU09OKHRoaXMudHlwZSkpIHtcbiAgICBwYXJzZSA9IHJlcXVlc3QucGFyc2VbJ2FwcGxpY2F0aW9uL2pzb24nXTtcbiAgfVxuICByZXR1cm4gcGFyc2UgJiYgc3RyICYmIChzdHIubGVuZ3RoIHx8IHN0ciBpbnN0YW5jZW9mIE9iamVjdClcbiAgICA/IHBhcnNlKHN0cilcbiAgICA6IG51bGw7XG59O1xuXG4vKipcbiAqIFJldHVybiBhbiBgRXJyb3JgIHJlcHJlc2VudGF0aXZlIG9mIHRoaXMgcmVzcG9uc2UuXG4gKlxuICogQHJldHVybiB7RXJyb3J9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlc3BvbnNlLnByb3RvdHlwZS50b0Vycm9yID0gZnVuY3Rpb24oKXtcbiAgdmFyIHJlcSA9IHRoaXMucmVxO1xuICB2YXIgbWV0aG9kID0gcmVxLm1ldGhvZDtcbiAgdmFyIHVybCA9IHJlcS51cmw7XG5cbiAgdmFyIG1zZyA9ICdjYW5ub3QgJyArIG1ldGhvZCArICcgJyArIHVybCArICcgKCcgKyB0aGlzLnN0YXR1cyArICcpJztcbiAgdmFyIGVyciA9IG5ldyBFcnJvcihtc2cpO1xuICBlcnIuc3RhdHVzID0gdGhpcy5zdGF0dXM7XG4gIGVyci5tZXRob2QgPSBtZXRob2Q7XG4gIGVyci51cmwgPSB1cmw7XG5cbiAgcmV0dXJuIGVycjtcbn07XG5cbi8qKlxuICogRXhwb3NlIGBSZXNwb25zZWAuXG4gKi9cblxucmVxdWVzdC5SZXNwb25zZSA9IFJlc3BvbnNlO1xuXG4vKipcbiAqIEluaXRpYWxpemUgYSBuZXcgYFJlcXVlc3RgIHdpdGggdGhlIGdpdmVuIGBtZXRob2RgIGFuZCBgdXJsYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIFJlcXVlc3QobWV0aG9kLCB1cmwpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB0aGlzLl9xdWVyeSA9IHRoaXMuX3F1ZXJ5IHx8IFtdO1xuICB0aGlzLm1ldGhvZCA9IG1ldGhvZDtcbiAgdGhpcy51cmwgPSB1cmw7XG4gIHRoaXMuaGVhZGVyID0ge307IC8vIHByZXNlcnZlcyBoZWFkZXIgbmFtZSBjYXNlXG4gIHRoaXMuX2hlYWRlciA9IHt9OyAvLyBjb2VyY2VzIGhlYWRlciBuYW1lcyB0byBsb3dlcmNhc2VcbiAgdGhpcy5vbignZW5kJywgZnVuY3Rpb24oKXtcbiAgICB2YXIgZXJyID0gbnVsbDtcbiAgICB2YXIgcmVzID0gbnVsbDtcblxuICAgIHRyeSB7XG4gICAgICByZXMgPSBuZXcgUmVzcG9uc2Uoc2VsZik7XG4gICAgfSBjYXRjaChlKSB7XG4gICAgICBlcnIgPSBuZXcgRXJyb3IoJ1BhcnNlciBpcyB1bmFibGUgdG8gcGFyc2UgdGhlIHJlc3BvbnNlJyk7XG4gICAgICBlcnIucGFyc2UgPSB0cnVlO1xuICAgICAgZXJyLm9yaWdpbmFsID0gZTtcbiAgICAgIC8vIGlzc3VlICM2NzU6IHJldHVybiB0aGUgcmF3IHJlc3BvbnNlIGlmIHRoZSByZXNwb25zZSBwYXJzaW5nIGZhaWxzXG4gICAgICBpZiAoc2VsZi54aHIpIHtcbiAgICAgICAgLy8gaWU5IGRvZXNuJ3QgaGF2ZSAncmVzcG9uc2UnIHByb3BlcnR5XG4gICAgICAgIGVyci5yYXdSZXNwb25zZSA9IHR5cGVvZiBzZWxmLnhoci5yZXNwb25zZVR5cGUgPT0gJ3VuZGVmaW5lZCcgPyBzZWxmLnhoci5yZXNwb25zZVRleHQgOiBzZWxmLnhoci5yZXNwb25zZTtcbiAgICAgICAgLy8gaXNzdWUgIzg3NjogcmV0dXJuIHRoZSBodHRwIHN0YXR1cyBjb2RlIGlmIHRoZSByZXNwb25zZSBwYXJzaW5nIGZhaWxzXG4gICAgICAgIGVyci5zdGF0dXMgPSBzZWxmLnhoci5zdGF0dXMgPyBzZWxmLnhoci5zdGF0dXMgOiBudWxsO1xuICAgICAgICBlcnIuc3RhdHVzQ29kZSA9IGVyci5zdGF0dXM7IC8vIGJhY2t3YXJkcy1jb21wYXQgb25seVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXJyLnJhd1Jlc3BvbnNlID0gbnVsbDtcbiAgICAgICAgZXJyLnN0YXR1cyA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZWxmLmNhbGxiYWNrKGVycik7XG4gICAgfVxuXG4gICAgc2VsZi5lbWl0KCdyZXNwb25zZScsIHJlcyk7XG5cbiAgICB2YXIgbmV3X2VycjtcbiAgICB0cnkge1xuICAgICAgaWYgKCFzZWxmLl9pc1Jlc3BvbnNlT0socmVzKSkge1xuICAgICAgICBuZXdfZXJyID0gbmV3IEVycm9yKHJlcy5zdGF0dXNUZXh0IHx8ICdVbnN1Y2Nlc3NmdWwgSFRUUCByZXNwb25zZScpO1xuICAgICAgfVxuICAgIH0gY2F0Y2goY3VzdG9tX2Vycikge1xuICAgICAgbmV3X2VyciA9IGN1c3RvbV9lcnI7IC8vIG9rKCkgY2FsbGJhY2sgY2FuIHRocm93XG4gICAgfVxuXG4gICAgLy8gIzEwMDAgZG9uJ3QgY2F0Y2ggZXJyb3JzIGZyb20gdGhlIGNhbGxiYWNrIHRvIGF2b2lkIGRvdWJsZSBjYWxsaW5nIGl0XG4gICAgaWYgKG5ld19lcnIpIHtcbiAgICAgIG5ld19lcnIub3JpZ2luYWwgPSBlcnI7XG4gICAgICBuZXdfZXJyLnJlc3BvbnNlID0gcmVzO1xuICAgICAgbmV3X2Vyci5zdGF0dXMgPSByZXMuc3RhdHVzO1xuICAgICAgc2VsZi5jYWxsYmFjayhuZXdfZXJyLCByZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWxmLmNhbGxiYWNrKG51bGwsIHJlcyk7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBNaXhpbiBgRW1pdHRlcmAgYW5kIGBSZXF1ZXN0QmFzZWAuXG4gKi9cblxuRW1pdHRlcihSZXF1ZXN0LnByb3RvdHlwZSk7XG5SZXF1ZXN0QmFzZShSZXF1ZXN0LnByb3RvdHlwZSk7XG5cbi8qKlxuICogU2V0IENvbnRlbnQtVHlwZSB0byBgdHlwZWAsIG1hcHBpbmcgdmFsdWVzIGZyb20gYHJlcXVlc3QudHlwZXNgLlxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICAgICAgc3VwZXJhZ2VudC50eXBlcy54bWwgPSAnYXBwbGljYXRpb24veG1sJztcbiAqXG4gKiAgICAgIHJlcXVlc3QucG9zdCgnLycpXG4gKiAgICAgICAgLnR5cGUoJ3htbCcpXG4gKiAgICAgICAgLnNlbmQoeG1sc3RyaW5nKVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqICAgICAgcmVxdWVzdC5wb3N0KCcvJylcbiAqICAgICAgICAudHlwZSgnYXBwbGljYXRpb24veG1sJylcbiAqICAgICAgICAuc2VuZCh4bWxzdHJpbmcpXG4gKiAgICAgICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS50eXBlID0gZnVuY3Rpb24odHlwZSl7XG4gIHRoaXMuc2V0KCdDb250ZW50LVR5cGUnLCByZXF1ZXN0LnR5cGVzW3R5cGVdIHx8IHR5cGUpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0IEFjY2VwdCB0byBgdHlwZWAsIG1hcHBpbmcgdmFsdWVzIGZyb20gYHJlcXVlc3QudHlwZXNgLlxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICAgICAgc3VwZXJhZ2VudC50eXBlcy5qc29uID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICpcbiAqICAgICAgcmVxdWVzdC5nZXQoJy9hZ2VudCcpXG4gKiAgICAgICAgLmFjY2VwdCgnanNvbicpXG4gKiAgICAgICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogICAgICByZXF1ZXN0LmdldCgnL2FnZW50JylcbiAqICAgICAgICAuYWNjZXB0KCdhcHBsaWNhdGlvbi9qc29uJylcbiAqICAgICAgICAuZW5kKGNhbGxiYWNrKTtcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gYWNjZXB0XG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuYWNjZXB0ID0gZnVuY3Rpb24odHlwZSl7XG4gIHRoaXMuc2V0KCdBY2NlcHQnLCByZXF1ZXN0LnR5cGVzW3R5cGVdIHx8IHR5cGUpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0IEF1dGhvcml6YXRpb24gZmllbGQgdmFsdWUgd2l0aCBgdXNlcmAgYW5kIGBwYXNzYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXNlclxuICogQHBhcmFtIHtTdHJpbmd9IFtwYXNzXSBvcHRpb25hbCBpbiBjYXNlIG9mIHVzaW5nICdiZWFyZXInIGFzIHR5cGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIHdpdGggJ3R5cGUnIHByb3BlcnR5ICdhdXRvJywgJ2Jhc2ljJyBvciAnYmVhcmVyJyAoZGVmYXVsdCAnYmFzaWMnKVxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmF1dGggPSBmdW5jdGlvbih1c2VyLCBwYXNzLCBvcHRpb25zKXtcbiAgaWYgKDEgPT09IGFyZ3VtZW50cy5sZW5ndGgpIHBhc3MgPSAnJztcbiAgaWYgKHR5cGVvZiBwYXNzID09PSAnb2JqZWN0JyAmJiBwYXNzICE9PSBudWxsKSB7IC8vIHBhc3MgaXMgb3B0aW9uYWwgYW5kIGNhbiBiZSByZXBsYWNlZCB3aXRoIG9wdGlvbnNcbiAgICBvcHRpb25zID0gcGFzcztcbiAgICBwYXNzID0gJyc7XG4gIH1cbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHtcbiAgICAgIHR5cGU6ICdmdW5jdGlvbicgPT09IHR5cGVvZiBidG9hID8gJ2Jhc2ljJyA6ICdhdXRvJyxcbiAgICB9O1xuICB9XG5cbiAgdmFyIGVuY29kZXIgPSBmdW5jdGlvbihzdHJpbmcpIHtcbiAgICBpZiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGJ0b2EpIHtcbiAgICAgIHJldHVybiBidG9hKHN0cmluZyk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IHVzZSBiYXNpYyBhdXRoLCBidG9hIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG4gIH07XG5cbiAgcmV0dXJuIHRoaXMuX2F1dGgodXNlciwgcGFzcywgb3B0aW9ucywgZW5jb2Rlcik7XG59O1xuXG4vKipcbiAqIEFkZCBxdWVyeS1zdHJpbmcgYHZhbGAuXG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogICByZXF1ZXN0LmdldCgnL3Nob2VzJylcbiAqICAgICAucXVlcnkoJ3NpemU9MTAnKVxuICogICAgIC5xdWVyeSh7IGNvbG9yOiAnYmx1ZScgfSlcbiAqXG4gKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IHZhbFxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLnF1ZXJ5ID0gZnVuY3Rpb24odmFsKXtcbiAgaWYgKCdzdHJpbmcnICE9IHR5cGVvZiB2YWwpIHZhbCA9IHNlcmlhbGl6ZSh2YWwpO1xuICBpZiAodmFsKSB0aGlzLl9xdWVyeS5wdXNoKHZhbCk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBRdWV1ZSB0aGUgZ2l2ZW4gYGZpbGVgIGFzIGFuIGF0dGFjaG1lbnQgdG8gdGhlIHNwZWNpZmllZCBgZmllbGRgLFxuICogd2l0aCBvcHRpb25hbCBgb3B0aW9uc2AgKG9yIGZpbGVuYW1lKS5cbiAqXG4gKiBgYGAganNcbiAqIHJlcXVlc3QucG9zdCgnL3VwbG9hZCcpXG4gKiAgIC5hdHRhY2goJ2NvbnRlbnQnLCBuZXcgQmxvYihbJzxhIGlkPVwiYVwiPjxiIGlkPVwiYlwiPmhleSE8L2I+PC9hPiddLCB7IHR5cGU6IFwidGV4dC9odG1sXCJ9KSlcbiAqICAgLmVuZChjYWxsYmFjayk7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZmllbGRcbiAqIEBwYXJhbSB7QmxvYnxGaWxlfSBmaWxlXG4gKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5hdHRhY2ggPSBmdW5jdGlvbihmaWVsZCwgZmlsZSwgb3B0aW9ucyl7XG4gIGlmIChmaWxlKSB7XG4gICAgaWYgKHRoaXMuX2RhdGEpIHtcbiAgICAgIHRocm93IEVycm9yKFwic3VwZXJhZ2VudCBjYW4ndCBtaXggLnNlbmQoKSBhbmQgLmF0dGFjaCgpXCIpO1xuICAgIH1cblxuICAgIHRoaXMuX2dldEZvcm1EYXRhKCkuYXBwZW5kKGZpZWxkLCBmaWxlLCBvcHRpb25zIHx8IGZpbGUubmFtZSk7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5fZ2V0Rm9ybURhdGEgPSBmdW5jdGlvbigpe1xuICBpZiAoIXRoaXMuX2Zvcm1EYXRhKSB7XG4gICAgdGhpcy5fZm9ybURhdGEgPSBuZXcgcm9vdC5Gb3JtRGF0YSgpO1xuICB9XG4gIHJldHVybiB0aGlzLl9mb3JtRGF0YTtcbn07XG5cbi8qKlxuICogSW52b2tlIHRoZSBjYWxsYmFjayB3aXRoIGBlcnJgIGFuZCBgcmVzYFxuICogYW5kIGhhbmRsZSBhcml0eSBjaGVjay5cbiAqXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnJcbiAqIEBwYXJhbSB7UmVzcG9uc2V9IHJlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuY2FsbGJhY2sgPSBmdW5jdGlvbihlcnIsIHJlcyl7XG4gIGlmICh0aGlzLl9zaG91bGRSZXRyeShlcnIsIHJlcykpIHtcbiAgICByZXR1cm4gdGhpcy5fcmV0cnkoKTtcbiAgfVxuXG4gIHZhciBmbiA9IHRoaXMuX2NhbGxiYWNrO1xuICB0aGlzLmNsZWFyVGltZW91dCgpO1xuXG4gIGlmIChlcnIpIHtcbiAgICBpZiAodGhpcy5fbWF4UmV0cmllcykgZXJyLnJldHJpZXMgPSB0aGlzLl9yZXRyaWVzIC0gMTtcbiAgICB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyKTtcbiAgfVxuXG4gIGZuKGVyciwgcmVzKTtcbn07XG5cbi8qKlxuICogSW52b2tlIGNhbGxiYWNrIHdpdGggeC1kb21haW4gZXJyb3IuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuY3Jvc3NEb21haW5FcnJvciA9IGZ1bmN0aW9uKCl7XG4gIHZhciBlcnIgPSBuZXcgRXJyb3IoJ1JlcXVlc3QgaGFzIGJlZW4gdGVybWluYXRlZFxcblBvc3NpYmxlIGNhdXNlczogdGhlIG5ldHdvcmsgaXMgb2ZmbGluZSwgT3JpZ2luIGlzIG5vdCBhbGxvd2VkIGJ5IEFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbiwgdGhlIHBhZ2UgaXMgYmVpbmcgdW5sb2FkZWQsIGV0Yy4nKTtcbiAgZXJyLmNyb3NzRG9tYWluID0gdHJ1ZTtcblxuICBlcnIuc3RhdHVzID0gdGhpcy5zdGF0dXM7XG4gIGVyci5tZXRob2QgPSB0aGlzLm1ldGhvZDtcbiAgZXJyLnVybCA9IHRoaXMudXJsO1xuXG4gIHRoaXMuY2FsbGJhY2soZXJyKTtcbn07XG5cbi8vIFRoaXMgb25seSB3YXJucywgYmVjYXVzZSB0aGUgcmVxdWVzdCBpcyBzdGlsbCBsaWtlbHkgdG8gd29ya1xuUmVxdWVzdC5wcm90b3R5cGUuYnVmZmVyID0gUmVxdWVzdC5wcm90b3R5cGUuY2EgPSBSZXF1ZXN0LnByb3RvdHlwZS5hZ2VudCA9IGZ1bmN0aW9uKCl7XG4gIGNvbnNvbGUud2FybihcIlRoaXMgaXMgbm90IHN1cHBvcnRlZCBpbiBicm93c2VyIHZlcnNpb24gb2Ygc3VwZXJhZ2VudFwiKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vLyBUaGlzIHRocm93cywgYmVjYXVzZSBpdCBjYW4ndCBzZW5kL3JlY2VpdmUgZGF0YSBhcyBleHBlY3RlZFxuUmVxdWVzdC5wcm90b3R5cGUucGlwZSA9IFJlcXVlc3QucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24oKXtcbiAgdGhyb3cgRXJyb3IoXCJTdHJlYW1pbmcgaXMgbm90IHN1cHBvcnRlZCBpbiBicm93c2VyIHZlcnNpb24gb2Ygc3VwZXJhZ2VudFwiKTtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgYG9iamAgaXMgYSBob3N0IG9iamVjdCxcbiAqIHdlIGRvbid0IHdhbnQgdG8gc2VyaWFsaXplIHRoZXNlIDopXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5SZXF1ZXN0LnByb3RvdHlwZS5faXNIb3N0ID0gZnVuY3Rpb24gX2lzSG9zdChvYmopIHtcbiAgLy8gTmF0aXZlIG9iamVjdHMgc3RyaW5naWZ5IHRvIFtvYmplY3QgRmlsZV0sIFtvYmplY3QgQmxvYl0sIFtvYmplY3QgRm9ybURhdGFdLCBldGMuXG4gIHJldHVybiBvYmogJiYgJ29iamVjdCcgPT09IHR5cGVvZiBvYmogJiYgIUFycmF5LmlzQXJyYXkob2JqKSAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSAhPT0gJ1tvYmplY3QgT2JqZWN0XSc7XG59XG5cbi8qKlxuICogSW5pdGlhdGUgcmVxdWVzdCwgaW52b2tpbmcgY2FsbGJhY2sgYGZuKHJlcylgXG4gKiB3aXRoIGFuIGluc3RhbmNlb2YgYFJlc3BvbnNlYC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmVuZCA9IGZ1bmN0aW9uKGZuKXtcbiAgaWYgKHRoaXMuX2VuZENhbGxlZCkge1xuICAgIGNvbnNvbGUud2FybihcIldhcm5pbmc6IC5lbmQoKSB3YXMgY2FsbGVkIHR3aWNlLiBUaGlzIGlzIG5vdCBzdXBwb3J0ZWQgaW4gc3VwZXJhZ2VudFwiKTtcbiAgfVxuICB0aGlzLl9lbmRDYWxsZWQgPSB0cnVlO1xuXG4gIC8vIHN0b3JlIGNhbGxiYWNrXG4gIHRoaXMuX2NhbGxiYWNrID0gZm4gfHwgbm9vcDtcblxuICAvLyBxdWVyeXN0cmluZ1xuICB0aGlzLl9maW5hbGl6ZVF1ZXJ5U3RyaW5nKCk7XG5cbiAgcmV0dXJuIHRoaXMuX2VuZCgpO1xufTtcblxuUmVxdWVzdC5wcm90b3R5cGUuX2VuZCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHZhciB4aHIgPSAodGhpcy54aHIgPSByZXF1ZXN0LmdldFhIUigpKTtcbiAgdmFyIGRhdGEgPSB0aGlzLl9mb3JtRGF0YSB8fCB0aGlzLl9kYXRhO1xuXG4gIHRoaXMuX3NldFRpbWVvdXRzKCk7XG5cbiAgLy8gc3RhdGUgY2hhbmdlXG4gIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpe1xuICAgIHZhciByZWFkeVN0YXRlID0geGhyLnJlYWR5U3RhdGU7XG4gICAgaWYgKHJlYWR5U3RhdGUgPj0gMiAmJiBzZWxmLl9yZXNwb25zZVRpbWVvdXRUaW1lcikge1xuICAgICAgY2xlYXJUaW1lb3V0KHNlbGYuX3Jlc3BvbnNlVGltZW91dFRpbWVyKTtcbiAgICB9XG4gICAgaWYgKDQgIT0gcmVhZHlTdGF0ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEluIElFOSwgcmVhZHMgdG8gYW55IHByb3BlcnR5IChlLmcuIHN0YXR1cykgb2ZmIG9mIGFuIGFib3J0ZWQgWEhSIHdpbGxcbiAgICAvLyByZXN1bHQgaW4gdGhlIGVycm9yIFwiQ291bGQgbm90IGNvbXBsZXRlIHRoZSBvcGVyYXRpb24gZHVlIHRvIGVycm9yIGMwMGMwMjNmXCJcbiAgICB2YXIgc3RhdHVzO1xuICAgIHRyeSB7IHN0YXR1cyA9IHhoci5zdGF0dXMgfSBjYXRjaChlKSB7IHN0YXR1cyA9IDA7IH1cblxuICAgIGlmICghc3RhdHVzKSB7XG4gICAgICBpZiAoc2VsZi50aW1lZG91dCB8fCBzZWxmLl9hYm9ydGVkKSByZXR1cm47XG4gICAgICByZXR1cm4gc2VsZi5jcm9zc0RvbWFpbkVycm9yKCk7XG4gICAgfVxuICAgIHNlbGYuZW1pdCgnZW5kJyk7XG4gIH07XG5cbiAgLy8gcHJvZ3Jlc3NcbiAgdmFyIGhhbmRsZVByb2dyZXNzID0gZnVuY3Rpb24oZGlyZWN0aW9uLCBlKSB7XG4gICAgaWYgKGUudG90YWwgPiAwKSB7XG4gICAgICBlLnBlcmNlbnQgPSBlLmxvYWRlZCAvIGUudG90YWwgKiAxMDA7XG4gICAgfVxuICAgIGUuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICAgIHNlbGYuZW1pdCgncHJvZ3Jlc3MnLCBlKTtcbiAgfTtcbiAgaWYgKHRoaXMuaGFzTGlzdGVuZXJzKCdwcm9ncmVzcycpKSB7XG4gICAgdHJ5IHtcbiAgICAgIHhoci5vbnByb2dyZXNzID0gaGFuZGxlUHJvZ3Jlc3MuYmluZChudWxsLCAnZG93bmxvYWQnKTtcbiAgICAgIGlmICh4aHIudXBsb2FkKSB7XG4gICAgICAgIHhoci51cGxvYWQub25wcm9ncmVzcyA9IGhhbmRsZVByb2dyZXNzLmJpbmQobnVsbCwgJ3VwbG9hZCcpO1xuICAgICAgfVxuICAgIH0gY2F0Y2goZSkge1xuICAgICAgLy8gQWNjZXNzaW5nIHhoci51cGxvYWQgZmFpbHMgaW4gSUUgZnJvbSBhIHdlYiB3b3JrZXIsIHNvIGp1c3QgcHJldGVuZCBpdCBkb2Vzbid0IGV4aXN0LlxuICAgICAgLy8gUmVwb3J0ZWQgaGVyZTpcbiAgICAgIC8vIGh0dHBzOi8vY29ubmVjdC5taWNyb3NvZnQuY29tL0lFL2ZlZWRiYWNrL2RldGFpbHMvODM3MjQ1L3htbGh0dHByZXF1ZXN0LXVwbG9hZC10aHJvd3MtaW52YWxpZC1hcmd1bWVudC13aGVuLXVzZWQtZnJvbS13ZWItd29ya2VyLWNvbnRleHRcbiAgICB9XG4gIH1cblxuICAvLyBpbml0aWF0ZSByZXF1ZXN0XG4gIHRyeSB7XG4gICAgaWYgKHRoaXMudXNlcm5hbWUgJiYgdGhpcy5wYXNzd29yZCkge1xuICAgICAgeGhyLm9wZW4odGhpcy5tZXRob2QsIHRoaXMudXJsLCB0cnVlLCB0aGlzLnVzZXJuYW1lLCB0aGlzLnBhc3N3b3JkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgeGhyLm9wZW4odGhpcy5tZXRob2QsIHRoaXMudXJsLCB0cnVlKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIC8vIHNlZSAjMTE0OVxuICAgIHJldHVybiB0aGlzLmNhbGxiYWNrKGVycik7XG4gIH1cblxuICAvLyBDT1JTXG4gIGlmICh0aGlzLl93aXRoQ3JlZGVudGlhbHMpIHhoci53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuXG4gIC8vIGJvZHlcbiAgaWYgKCF0aGlzLl9mb3JtRGF0YSAmJiAnR0VUJyAhPSB0aGlzLm1ldGhvZCAmJiAnSEVBRCcgIT0gdGhpcy5tZXRob2QgJiYgJ3N0cmluZycgIT0gdHlwZW9mIGRhdGEgJiYgIXRoaXMuX2lzSG9zdChkYXRhKSkge1xuICAgIC8vIHNlcmlhbGl6ZSBzdHVmZlxuICAgIHZhciBjb250ZW50VHlwZSA9IHRoaXMuX2hlYWRlclsnY29udGVudC10eXBlJ107XG4gICAgdmFyIHNlcmlhbGl6ZSA9IHRoaXMuX3NlcmlhbGl6ZXIgfHwgcmVxdWVzdC5zZXJpYWxpemVbY29udGVudFR5cGUgPyBjb250ZW50VHlwZS5zcGxpdCgnOycpWzBdIDogJyddO1xuICAgIGlmICghc2VyaWFsaXplICYmIGlzSlNPTihjb250ZW50VHlwZSkpIHtcbiAgICAgIHNlcmlhbGl6ZSA9IHJlcXVlc3Quc2VyaWFsaXplWydhcHBsaWNhdGlvbi9qc29uJ107XG4gICAgfVxuICAgIGlmIChzZXJpYWxpemUpIGRhdGEgPSBzZXJpYWxpemUoZGF0YSk7XG4gIH1cblxuICAvLyBzZXQgaGVhZGVyIGZpZWxkc1xuICBmb3IgKHZhciBmaWVsZCBpbiB0aGlzLmhlYWRlcikge1xuICAgIGlmIChudWxsID09IHRoaXMuaGVhZGVyW2ZpZWxkXSkgY29udGludWU7XG5cbiAgICBpZiAodGhpcy5oZWFkZXIuaGFzT3duUHJvcGVydHkoZmllbGQpKVxuICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoZmllbGQsIHRoaXMuaGVhZGVyW2ZpZWxkXSk7XG4gIH1cblxuICBpZiAodGhpcy5fcmVzcG9uc2VUeXBlKSB7XG4gICAgeGhyLnJlc3BvbnNlVHlwZSA9IHRoaXMuX3Jlc3BvbnNlVHlwZTtcbiAgfVxuXG4gIC8vIHNlbmQgc3R1ZmZcbiAgdGhpcy5lbWl0KCdyZXF1ZXN0JywgdGhpcyk7XG5cbiAgLy8gSUUxMSB4aHIuc2VuZCh1bmRlZmluZWQpIHNlbmRzICd1bmRlZmluZWQnIHN0cmluZyBhcyBQT1NUIHBheWxvYWQgKGluc3RlYWQgb2Ygbm90aGluZylcbiAgLy8gV2UgbmVlZCBudWxsIGhlcmUgaWYgZGF0YSBpcyB1bmRlZmluZWRcbiAgeGhyLnNlbmQodHlwZW9mIGRhdGEgIT09ICd1bmRlZmluZWQnID8gZGF0YSA6IG51bGwpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbnJlcXVlc3QuYWdlbnQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBBZ2VudCgpO1xufTtcblxuW1wiR0VUXCIsIFwiUE9TVFwiLCBcIk9QVElPTlNcIiwgXCJQQVRDSFwiLCBcIlBVVFwiLCBcIkRFTEVURVwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICBBZ2VudC5wcm90b3R5cGVbbWV0aG9kLnRvTG93ZXJDYXNlKCldID0gZnVuY3Rpb24odXJsLCBmbikge1xuICAgIHZhciByZXEgPSBuZXcgcmVxdWVzdC5SZXF1ZXN0KG1ldGhvZCwgdXJsKTtcbiAgICB0aGlzLl9zZXREZWZhdWx0cyhyZXEpO1xuICAgIGlmIChmbikge1xuICAgICAgcmVxLmVuZChmbik7XG4gICAgfVxuICAgIHJldHVybiByZXE7XG4gIH07XG59KTtcblxuQWdlbnQucHJvdG90eXBlLmRlbCA9IEFnZW50LnByb3RvdHlwZVsnZGVsZXRlJ107XG5cbi8qKlxuICogR0VUIGB1cmxgIHdpdGggb3B0aW9uYWwgY2FsbGJhY2sgYGZuKHJlcylgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7TWl4ZWR8RnVuY3Rpb259IFtkYXRhXSBvciBmblxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2ZuXVxuICogQHJldHVybiB7UmVxdWVzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxucmVxdWVzdC5nZXQgPSBmdW5jdGlvbih1cmwsIGRhdGEsIGZuKSB7XG4gIHZhciByZXEgPSByZXF1ZXN0KCdHRVQnLCB1cmwpO1xuICBpZiAoJ2Z1bmN0aW9uJyA9PSB0eXBlb2YgZGF0YSkgKGZuID0gZGF0YSksIChkYXRhID0gbnVsbCk7XG4gIGlmIChkYXRhKSByZXEucXVlcnkoZGF0YSk7XG4gIGlmIChmbikgcmVxLmVuZChmbik7XG4gIHJldHVybiByZXE7XG59O1xuXG4vKipcbiAqIEhFQUQgYHVybGAgd2l0aCBvcHRpb25hbCBjYWxsYmFjayBgZm4ocmVzKWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICogQHBhcmFtIHtNaXhlZHxGdW5jdGlvbn0gW2RhdGFdIG9yIGZuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbZm5dXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5yZXF1ZXN0LmhlYWQgPSBmdW5jdGlvbih1cmwsIGRhdGEsIGZuKSB7XG4gIHZhciByZXEgPSByZXF1ZXN0KCdIRUFEJywgdXJsKTtcbiAgaWYgKCdmdW5jdGlvbicgPT0gdHlwZW9mIGRhdGEpIChmbiA9IGRhdGEpLCAoZGF0YSA9IG51bGwpO1xuICBpZiAoZGF0YSkgcmVxLnF1ZXJ5KGRhdGEpO1xuICBpZiAoZm4pIHJlcS5lbmQoZm4pO1xuICByZXR1cm4gcmVxO1xufTtcblxuLyoqXG4gKiBPUFRJT05TIHF1ZXJ5IHRvIGB1cmxgIHdpdGggb3B0aW9uYWwgY2FsbGJhY2sgYGZuKHJlcylgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7TWl4ZWR8RnVuY3Rpb259IFtkYXRhXSBvciBmblxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2ZuXVxuICogQHJldHVybiB7UmVxdWVzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxucmVxdWVzdC5vcHRpb25zID0gZnVuY3Rpb24odXJsLCBkYXRhLCBmbikge1xuICB2YXIgcmVxID0gcmVxdWVzdCgnT1BUSU9OUycsIHVybCk7XG4gIGlmICgnZnVuY3Rpb24nID09IHR5cGVvZiBkYXRhKSAoZm4gPSBkYXRhKSwgKGRhdGEgPSBudWxsKTtcbiAgaWYgKGRhdGEpIHJlcS5zZW5kKGRhdGEpO1xuICBpZiAoZm4pIHJlcS5lbmQoZm4pO1xuICByZXR1cm4gcmVxO1xufTtcblxuLyoqXG4gKiBERUxFVEUgYHVybGAgd2l0aCBvcHRpb25hbCBgZGF0YWAgYW5kIGNhbGxiYWNrIGBmbihyZXMpYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge01peGVkfSBbZGF0YV1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtmbl1cbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGRlbCh1cmwsIGRhdGEsIGZuKSB7XG4gIHZhciByZXEgPSByZXF1ZXN0KCdERUxFVEUnLCB1cmwpO1xuICBpZiAoJ2Z1bmN0aW9uJyA9PSB0eXBlb2YgZGF0YSkgKGZuID0gZGF0YSksIChkYXRhID0gbnVsbCk7XG4gIGlmIChkYXRhKSByZXEuc2VuZChkYXRhKTtcbiAgaWYgKGZuKSByZXEuZW5kKGZuKTtcbiAgcmV0dXJuIHJlcTtcbn1cblxucmVxdWVzdFsnZGVsJ10gPSBkZWw7XG5yZXF1ZXN0WydkZWxldGUnXSA9IGRlbDtcblxuLyoqXG4gKiBQQVRDSCBgdXJsYCB3aXRoIG9wdGlvbmFsIGBkYXRhYCBhbmQgY2FsbGJhY2sgYGZuKHJlcylgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7TWl4ZWR9IFtkYXRhXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2ZuXVxuICogQHJldHVybiB7UmVxdWVzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxucmVxdWVzdC5wYXRjaCA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgZm4pIHtcbiAgdmFyIHJlcSA9IHJlcXVlc3QoJ1BBVENIJywgdXJsKTtcbiAgaWYgKCdmdW5jdGlvbicgPT0gdHlwZW9mIGRhdGEpIChmbiA9IGRhdGEpLCAoZGF0YSA9IG51bGwpO1xuICBpZiAoZGF0YSkgcmVxLnNlbmQoZGF0YSk7XG4gIGlmIChmbikgcmVxLmVuZChmbik7XG4gIHJldHVybiByZXE7XG59O1xuXG4vKipcbiAqIFBPU1QgYHVybGAgd2l0aCBvcHRpb25hbCBgZGF0YWAgYW5kIGNhbGxiYWNrIGBmbihyZXMpYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge01peGVkfSBbZGF0YV1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtmbl1cbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbnJlcXVlc3QucG9zdCA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgZm4pIHtcbiAgdmFyIHJlcSA9IHJlcXVlc3QoJ1BPU1QnLCB1cmwpO1xuICBpZiAoJ2Z1bmN0aW9uJyA9PSB0eXBlb2YgZGF0YSkgKGZuID0gZGF0YSksIChkYXRhID0gbnVsbCk7XG4gIGlmIChkYXRhKSByZXEuc2VuZChkYXRhKTtcbiAgaWYgKGZuKSByZXEuZW5kKGZuKTtcbiAgcmV0dXJuIHJlcTtcbn07XG5cbi8qKlxuICogUFVUIGB1cmxgIHdpdGggb3B0aW9uYWwgYGRhdGFgIGFuZCBjYWxsYmFjayBgZm4ocmVzKWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICogQHBhcmFtIHtNaXhlZHxGdW5jdGlvbn0gW2RhdGFdIG9yIGZuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbZm5dXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5yZXF1ZXN0LnB1dCA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgZm4pIHtcbiAgdmFyIHJlcSA9IHJlcXVlc3QoJ1BVVCcsIHVybCk7XG4gIGlmICgnZnVuY3Rpb24nID09IHR5cGVvZiBkYXRhKSAoZm4gPSBkYXRhKSwgKGRhdGEgPSBudWxsKTtcbiAgaWYgKGRhdGEpIHJlcS5zZW5kKGRhdGEpO1xuICBpZiAoZm4pIHJlcS5lbmQoZm4pO1xuICByZXR1cm4gcmVxO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDaGVjayBpZiBgb2JqYCBpcyBhbiBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGlzT2JqZWN0KG9iaikge1xuICByZXR1cm4gbnVsbCAhPT0gb2JqICYmICdvYmplY3QnID09PSB0eXBlb2Ygb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIE1vZHVsZSBvZiBtaXhlZC1pbiBmdW5jdGlvbnMgc2hhcmVkIGJldHdlZW4gbm9kZSBhbmQgY2xpZW50IGNvZGVcbiAqL1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pcy1vYmplY3QnKTtcblxuLyoqXG4gKiBFeHBvc2UgYFJlcXVlc3RCYXNlYC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlcXVlc3RCYXNlO1xuXG4vKipcbiAqIEluaXRpYWxpemUgYSBuZXcgYFJlcXVlc3RCYXNlYC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIFJlcXVlc3RCYXNlKG9iaikge1xuICBpZiAob2JqKSByZXR1cm4gbWl4aW4ob2JqKTtcbn1cblxuLyoqXG4gKiBNaXhpbiB0aGUgcHJvdG90eXBlIHByb3BlcnRpZXMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHJldHVybiB7T2JqZWN0fVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gbWl4aW4ob2JqKSB7XG4gIGZvciAodmFyIGtleSBpbiBSZXF1ZXN0QmFzZS5wcm90b3R5cGUpIHtcbiAgICBvYmpba2V5XSA9IFJlcXVlc3RCYXNlLnByb3RvdHlwZVtrZXldO1xuICB9XG4gIHJldHVybiBvYmo7XG59XG5cbi8qKlxuICogQ2xlYXIgcHJldmlvdXMgdGltZW91dC5cbiAqXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdEJhc2UucHJvdG90eXBlLmNsZWFyVGltZW91dCA9IGZ1bmN0aW9uIF9jbGVhclRpbWVvdXQoKXtcbiAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVyKTtcbiAgY2xlYXJUaW1lb3V0KHRoaXMuX3Jlc3BvbnNlVGltZW91dFRpbWVyKTtcbiAgZGVsZXRlIHRoaXMuX3RpbWVyO1xuICBkZWxldGUgdGhpcy5fcmVzcG9uc2VUaW1lb3V0VGltZXI7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBPdmVycmlkZSBkZWZhdWx0IHJlc3BvbnNlIGJvZHkgcGFyc2VyXG4gKlxuICogVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCB0byBjb252ZXJ0IGluY29taW5nIGRhdGEgaW50byByZXF1ZXN0LmJvZHlcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbiBwYXJzZShmbil7XG4gIHRoaXMuX3BhcnNlciA9IGZuO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0IGZvcm1hdCBvZiBiaW5hcnkgcmVzcG9uc2UgYm9keS5cbiAqIEluIGJyb3dzZXIgdmFsaWQgZm9ybWF0cyBhcmUgJ2Jsb2InIGFuZCAnYXJyYXlidWZmZXInLFxuICogd2hpY2ggcmV0dXJuIEJsb2IgYW5kIEFycmF5QnVmZmVyLCByZXNwZWN0aXZlbHkuXG4gKlxuICogSW4gTm9kZSBhbGwgdmFsdWVzIHJlc3VsdCBpbiBCdWZmZXIuXG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogICAgICByZXEuZ2V0KCcvJylcbiAqICAgICAgICAucmVzcG9uc2VUeXBlKCdibG9iJylcbiAqICAgICAgICAuZW5kKGNhbGxiYWNrKTtcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdEJhc2UucHJvdG90eXBlLnJlc3BvbnNlVHlwZSA9IGZ1bmN0aW9uKHZhbCl7XG4gIHRoaXMuX3Jlc3BvbnNlVHlwZSA9IHZhbDtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIE92ZXJyaWRlIGRlZmF1bHQgcmVxdWVzdCBib2R5IHNlcmlhbGl6ZXJcbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIHRvIGNvbnZlcnQgZGF0YSBzZXQgdmlhIC5zZW5kIG9yIC5hdHRhY2ggaW50byBwYXlsb2FkIHRvIHNlbmRcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUuc2VyaWFsaXplID0gZnVuY3Rpb24gc2VyaWFsaXplKGZuKXtcbiAgdGhpcy5fc2VyaWFsaXplciA9IGZuO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0IHRpbWVvdXRzLlxuICpcbiAqIC0gcmVzcG9uc2UgdGltZW91dCBpcyB0aW1lIGJldHdlZW4gc2VuZGluZyByZXF1ZXN0IGFuZCByZWNlaXZpbmcgdGhlIGZpcnN0IGJ5dGUgb2YgdGhlIHJlc3BvbnNlLiBJbmNsdWRlcyBETlMgYW5kIGNvbm5lY3Rpb24gdGltZS5cbiAqIC0gZGVhZGxpbmUgaXMgdGhlIHRpbWUgZnJvbSBzdGFydCBvZiB0aGUgcmVxdWVzdCB0byByZWNlaXZpbmcgcmVzcG9uc2UgYm9keSBpbiBmdWxsLiBJZiB0aGUgZGVhZGxpbmUgaXMgdG9vIHNob3J0IGxhcmdlIGZpbGVzIG1heSBub3QgbG9hZCBhdCBhbGwgb24gc2xvdyBjb25uZWN0aW9ucy5cbiAqXG4gKiBWYWx1ZSBvZiAwIG9yIGZhbHNlIG1lYW5zIG5vIHRpbWVvdXQuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ8T2JqZWN0fSBtcyBvciB7cmVzcG9uc2UsIGRlYWRsaW5lfVxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3RCYXNlLnByb3RvdHlwZS50aW1lb3V0ID0gZnVuY3Rpb24gdGltZW91dChvcHRpb25zKXtcbiAgaWYgKCFvcHRpb25zIHx8ICdvYmplY3QnICE9PSB0eXBlb2Ygb3B0aW9ucykge1xuICAgIHRoaXMuX3RpbWVvdXQgPSBvcHRpb25zO1xuICAgIHRoaXMuX3Jlc3BvbnNlVGltZW91dCA9IDA7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBmb3IodmFyIG9wdGlvbiBpbiBvcHRpb25zKSB7XG4gICAgc3dpdGNoKG9wdGlvbikge1xuICAgICAgY2FzZSAnZGVhZGxpbmUnOlxuICAgICAgICB0aGlzLl90aW1lb3V0ID0gb3B0aW9ucy5kZWFkbGluZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdyZXNwb25zZSc6XG4gICAgICAgIHRoaXMuX3Jlc3BvbnNlVGltZW91dCA9IG9wdGlvbnMucmVzcG9uc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgY29uc29sZS53YXJuKFwiVW5rbm93biB0aW1lb3V0IG9wdGlvblwiLCBvcHRpb24pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0IG51bWJlciBvZiByZXRyeSBhdHRlbXB0cyBvbiBlcnJvci5cbiAqXG4gKiBGYWlsZWQgcmVxdWVzdHMgd2lsbCBiZSByZXRyaWVkICdjb3VudCcgdGltZXMgaWYgdGltZW91dCBvciBlcnIuY29kZSA+PSA1MDAuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGNvdW50XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbZm5dXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdEJhc2UucHJvdG90eXBlLnJldHJ5ID0gZnVuY3Rpb24gcmV0cnkoY291bnQsIGZuKXtcbiAgLy8gRGVmYXVsdCB0byAxIGlmIG5vIGNvdW50IHBhc3NlZCBvciB0cnVlXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwIHx8IGNvdW50ID09PSB0cnVlKSBjb3VudCA9IDE7XG4gIGlmIChjb3VudCA8PSAwKSBjb3VudCA9IDA7XG4gIHRoaXMuX21heFJldHJpZXMgPSBjb3VudDtcbiAgdGhpcy5fcmV0cmllcyA9IDA7XG4gIHRoaXMuX3JldHJ5Q2FsbGJhY2sgPSBmbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG52YXIgRVJST1JfQ09ERVMgPSBbXG4gICdFQ09OTlJFU0VUJyxcbiAgJ0VUSU1FRE9VVCcsXG4gICdFQUREUklORk8nLFxuICAnRVNPQ0tFVFRJTUVET1VUJ1xuXTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSByZXF1ZXN0IHNob3VsZCBiZSByZXRyaWVkLlxuICogKEJvcnJvd2VkIGZyb20gc2VnbWVudGlvL3N1cGVyYWdlbnQtcmV0cnkpXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyXG4gKiBAcGFyYW0ge1Jlc3BvbnNlfSBbcmVzXVxuICogQHJldHVybnMge0Jvb2xlYW59XG4gKi9cblJlcXVlc3RCYXNlLnByb3RvdHlwZS5fc2hvdWxkUmV0cnkgPSBmdW5jdGlvbihlcnIsIHJlcykge1xuICBpZiAoIXRoaXMuX21heFJldHJpZXMgfHwgdGhpcy5fcmV0cmllcysrID49IHRoaXMuX21heFJldHJpZXMpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKHRoaXMuX3JldHJ5Q2FsbGJhY2spIHtcbiAgICB0cnkge1xuICAgICAgdmFyIG92ZXJyaWRlID0gdGhpcy5fcmV0cnlDYWxsYmFjayhlcnIsIHJlcyk7XG4gICAgICBpZiAob3ZlcnJpZGUgPT09IHRydWUpIHJldHVybiB0cnVlO1xuICAgICAgaWYgKG92ZXJyaWRlID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgLy8gdW5kZWZpbmVkIGZhbGxzIGJhY2sgdG8gZGVmYXVsdHNcbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgfVxuICB9XG4gIGlmIChyZXMgJiYgcmVzLnN0YXR1cyAmJiByZXMuc3RhdHVzID49IDUwMCAmJiByZXMuc3RhdHVzICE9IDUwMSkgcmV0dXJuIHRydWU7XG4gIGlmIChlcnIpIHtcbiAgICBpZiAoZXJyLmNvZGUgJiYgfkVSUk9SX0NPREVTLmluZGV4T2YoZXJyLmNvZGUpKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBTdXBlcmFnZW50IHRpbWVvdXRcbiAgICBpZiAoZXJyLnRpbWVvdXQgJiYgZXJyLmNvZGUgPT0gJ0VDT05OQUJPUlRFRCcpIHJldHVybiB0cnVlO1xuICAgIGlmIChlcnIuY3Jvc3NEb21haW4pIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8qKlxuICogUmV0cnkgcmVxdWVzdFxuICpcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVxdWVzdEJhc2UucHJvdG90eXBlLl9yZXRyeSA9IGZ1bmN0aW9uKCkge1xuXG4gIHRoaXMuY2xlYXJUaW1lb3V0KCk7XG5cbiAgLy8gbm9kZVxuICBpZiAodGhpcy5yZXEpIHtcbiAgICB0aGlzLnJlcSA9IG51bGw7XG4gICAgdGhpcy5yZXEgPSB0aGlzLnJlcXVlc3QoKTtcbiAgfVxuXG4gIHRoaXMuX2Fib3J0ZWQgPSBmYWxzZTtcbiAgdGhpcy50aW1lZG91dCA9IGZhbHNlO1xuXG4gIHJldHVybiB0aGlzLl9lbmQoKTtcbn07XG5cbi8qKlxuICogUHJvbWlzZSBzdXBwb3J0XG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVzb2x2ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gW3JlamVjdF1cbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKi9cblxuUmVxdWVzdEJhc2UucHJvdG90eXBlLnRoZW4gPSBmdW5jdGlvbiB0aGVuKHJlc29sdmUsIHJlamVjdCkge1xuICBpZiAoIXRoaXMuX2Z1bGxmaWxsZWRQcm9taXNlKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGlmICh0aGlzLl9lbmRDYWxsZWQpIHtcbiAgICAgIGNvbnNvbGUud2FybihcIldhcm5pbmc6IHN1cGVyYWdlbnQgcmVxdWVzdCB3YXMgc2VudCB0d2ljZSwgYmVjYXVzZSBib3RoIC5lbmQoKSBhbmQgLnRoZW4oKSB3ZXJlIGNhbGxlZC4gTmV2ZXIgY2FsbCAuZW5kKCkgaWYgeW91IHVzZSBwcm9taXNlc1wiKTtcbiAgICB9XG4gICAgdGhpcy5fZnVsbGZpbGxlZFByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihpbm5lclJlc29sdmUsIGlubmVyUmVqZWN0KSB7XG4gICAgICBzZWxmLmVuZChmdW5jdGlvbihlcnIsIHJlcykge1xuICAgICAgICBpZiAoZXJyKSBpbm5lclJlamVjdChlcnIpO1xuICAgICAgICBlbHNlIGlubmVyUmVzb2x2ZShyZXMpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHRoaXMuX2Z1bGxmaWxsZWRQcm9taXNlLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbn07XG5cblJlcXVlc3RCYXNlLnByb3RvdHlwZVsnY2F0Y2gnXSA9IGZ1bmN0aW9uKGNiKSB7XG4gIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBjYik7XG59O1xuXG4vKipcbiAqIEFsbG93IGZvciBleHRlbnNpb25cbiAqL1xuXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUudXNlID0gZnVuY3Rpb24gdXNlKGZuKSB7XG4gIGZuKHRoaXMpO1xuICByZXR1cm4gdGhpcztcbn07XG5cblJlcXVlc3RCYXNlLnByb3RvdHlwZS5vayA9IGZ1bmN0aW9uKGNiKSB7XG4gIGlmICgnZnVuY3Rpb24nICE9PSB0eXBlb2YgY2IpIHRocm93IEVycm9yKFwiQ2FsbGJhY2sgcmVxdWlyZWRcIik7XG4gIHRoaXMuX29rQ2FsbGJhY2sgPSBjYjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUuX2lzUmVzcG9uc2VPSyA9IGZ1bmN0aW9uKHJlcykge1xuICBpZiAoIXJlcykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICh0aGlzLl9va0NhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRoaXMuX29rQ2FsbGJhY2socmVzKTtcbiAgfVxuXG4gIHJldHVybiByZXMuc3RhdHVzID49IDIwMCAmJiByZXMuc3RhdHVzIDwgMzAwO1xufTtcblxuLyoqXG4gKiBHZXQgcmVxdWVzdCBoZWFkZXIgYGZpZWxkYC5cbiAqIENhc2UtaW5zZW5zaXRpdmUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3RCYXNlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihmaWVsZCl7XG4gIHJldHVybiB0aGlzLl9oZWFkZXJbZmllbGQudG9Mb3dlckNhc2UoKV07XG59O1xuXG4vKipcbiAqIEdldCBjYXNlLWluc2Vuc2l0aXZlIGhlYWRlciBgZmllbGRgIHZhbHVlLlxuICogVGhpcyBpcyBhIGRlcHJlY2F0ZWQgaW50ZXJuYWwgQVBJLiBVc2UgYC5nZXQoZmllbGQpYCBpbnN0ZWFkLlxuICpcbiAqIChnZXRIZWFkZXIgaXMgbm8gbG9uZ2VyIHVzZWQgaW50ZXJuYWxseSBieSB0aGUgc3VwZXJhZ2VudCBjb2RlIGJhc2UpXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqIEBkZXByZWNhdGVkXG4gKi9cblxuUmVxdWVzdEJhc2UucHJvdG90eXBlLmdldEhlYWRlciA9IFJlcXVlc3RCYXNlLnByb3RvdHlwZS5nZXQ7XG5cbi8qKlxuICogU2V0IGhlYWRlciBgZmllbGRgIHRvIGB2YWxgLCBvciBtdWx0aXBsZSBmaWVsZHMgd2l0aCBvbmUgb2JqZWN0LlxuICogQ2FzZS1pbnNlbnNpdGl2ZS5cbiAqXG4gKiBFeGFtcGxlczpcbiAqXG4gKiAgICAgIHJlcS5nZXQoJy8nKVxuICogICAgICAgIC5zZXQoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9qc29uJylcbiAqICAgICAgICAuc2V0KCdYLUFQSS1LZXknLCAnZm9vYmFyJylcbiAqICAgICAgICAuZW5kKGNhbGxiYWNrKTtcbiAqXG4gKiAgICAgIHJlcS5nZXQoJy8nKVxuICogICAgICAgIC5zZXQoeyBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJywgJ1gtQVBJLUtleSc6ICdmb29iYXInIH0pXG4gKiAgICAgICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fSBmaWVsZFxuICogQHBhcmFtIHtTdHJpbmd9IHZhbFxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3RCYXNlLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbihmaWVsZCwgdmFsKXtcbiAgaWYgKGlzT2JqZWN0KGZpZWxkKSkge1xuICAgIGZvciAodmFyIGtleSBpbiBmaWVsZCkge1xuICAgICAgdGhpcy5zZXQoa2V5LCBmaWVsZFtrZXldKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgdGhpcy5faGVhZGVyW2ZpZWxkLnRvTG93ZXJDYXNlKCldID0gdmFsO1xuICB0aGlzLmhlYWRlcltmaWVsZF0gPSB2YWw7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgaGVhZGVyIGBmaWVsZGAuXG4gKiBDYXNlLWluc2Vuc2l0aXZlLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogICAgICByZXEuZ2V0KCcvJylcbiAqICAgICAgICAudW5zZXQoJ1VzZXItQWdlbnQnKVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZFxuICovXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUudW5zZXQgPSBmdW5jdGlvbihmaWVsZCl7XG4gIGRlbGV0ZSB0aGlzLl9oZWFkZXJbZmllbGQudG9Mb3dlckNhc2UoKV07XG4gIGRlbGV0ZSB0aGlzLmhlYWRlcltmaWVsZF07XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBXcml0ZSB0aGUgZmllbGQgYG5hbWVgIGFuZCBgdmFsYCwgb3IgbXVsdGlwbGUgZmllbGRzIHdpdGggb25lIG9iamVjdFxuICogZm9yIFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIHJlcXVlc3QgYm9kaWVzLlxuICpcbiAqIGBgYCBqc1xuICogcmVxdWVzdC5wb3N0KCcvdXBsb2FkJylcbiAqICAgLmZpZWxkKCdmb28nLCAnYmFyJylcbiAqICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogcmVxdWVzdC5wb3N0KCcvdXBsb2FkJylcbiAqICAgLmZpZWxkKHsgZm9vOiAnYmFyJywgYmF6OiAncXV4JyB9KVxuICogICAuZW5kKGNhbGxiYWNrKTtcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gbmFtZVxuICogQHBhcmFtIHtTdHJpbmd8QmxvYnxGaWxlfEJ1ZmZlcnxmcy5SZWFkU3RyZWFtfSB2YWxcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuUmVxdWVzdEJhc2UucHJvdG90eXBlLmZpZWxkID0gZnVuY3Rpb24obmFtZSwgdmFsKSB7XG4gIC8vIG5hbWUgc2hvdWxkIGJlIGVpdGhlciBhIHN0cmluZyBvciBhbiBvYmplY3QuXG4gIGlmIChudWxsID09PSBuYW1lIHx8IHVuZGVmaW5lZCA9PT0gbmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignLmZpZWxkKG5hbWUsIHZhbCkgbmFtZSBjYW4gbm90IGJlIGVtcHR5Jyk7XG4gIH1cblxuICBpZiAodGhpcy5fZGF0YSkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCIuZmllbGQoKSBjYW4ndCBiZSB1c2VkIGlmIC5zZW5kKCkgaXMgdXNlZC4gUGxlYXNlIHVzZSBvbmx5IC5zZW5kKCkgb3Igb25seSAuZmllbGQoKSAmIC5hdHRhY2goKVwiKTtcbiAgfVxuXG4gIGlmIChpc09iamVjdChuYW1lKSkge1xuICAgIGZvciAodmFyIGtleSBpbiBuYW1lKSB7XG4gICAgICB0aGlzLmZpZWxkKGtleSwgbmFtZVtrZXldKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgZm9yICh2YXIgaSBpbiB2YWwpIHtcbiAgICAgIHRoaXMuZmllbGQobmFtZSwgdmFsW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyB2YWwgc2hvdWxkIGJlIGRlZmluZWQgbm93XG4gIGlmIChudWxsID09PSB2YWwgfHwgdW5kZWZpbmVkID09PSB2YWwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJy5maWVsZChuYW1lLCB2YWwpIHZhbCBjYW4gbm90IGJlIGVtcHR5Jyk7XG4gIH1cbiAgaWYgKCdib29sZWFuJyA9PT0gdHlwZW9mIHZhbCkge1xuICAgIHZhbCA9ICcnICsgdmFsO1xuICB9XG4gIHRoaXMuX2dldEZvcm1EYXRhKCkuYXBwZW5kKG5hbWUsIHZhbCk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBBYm9ydCB0aGUgcmVxdWVzdCwgYW5kIGNsZWFyIHBvdGVudGlhbCB0aW1lb3V0LlxuICpcbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUuYWJvcnQgPSBmdW5jdGlvbigpe1xuICBpZiAodGhpcy5fYWJvcnRlZCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHRoaXMuX2Fib3J0ZWQgPSB0cnVlO1xuICB0aGlzLnhociAmJiB0aGlzLnhoci5hYm9ydCgpOyAvLyBicm93c2VyXG4gIHRoaXMucmVxICYmIHRoaXMucmVxLmFib3J0KCk7IC8vIG5vZGVcbiAgdGhpcy5jbGVhclRpbWVvdXQoKTtcbiAgdGhpcy5lbWl0KCdhYm9ydCcpO1xuICByZXR1cm4gdGhpcztcbn07XG5cblJlcXVlc3RCYXNlLnByb3RvdHlwZS5fYXV0aCA9IGZ1bmN0aW9uKHVzZXIsIHBhc3MsIG9wdGlvbnMsIGJhc2U2NEVuY29kZXIpIHtcbiAgc3dpdGNoIChvcHRpb25zLnR5cGUpIHtcbiAgICBjYXNlICdiYXNpYyc6XG4gICAgICB0aGlzLnNldCgnQXV0aG9yaXphdGlvbicsICdCYXNpYyAnICsgYmFzZTY0RW5jb2Rlcih1c2VyICsgJzonICsgcGFzcykpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdhdXRvJzpcbiAgICAgIHRoaXMudXNlcm5hbWUgPSB1c2VyO1xuICAgICAgdGhpcy5wYXNzd29yZCA9IHBhc3M7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ2JlYXJlcic6IC8vIHVzYWdlIHdvdWxkIGJlIC5hdXRoKGFjY2Vzc1Rva2VuLCB7IHR5cGU6ICdiZWFyZXInIH0pXG4gICAgICB0aGlzLnNldCgnQXV0aG9yaXphdGlvbicsICdCZWFyZXIgJyArIHVzZXIpO1xuICAgICAgYnJlYWs7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEVuYWJsZSB0cmFuc21pc3Npb24gb2YgY29va2llcyB3aXRoIHgtZG9tYWluIHJlcXVlc3RzLlxuICpcbiAqIE5vdGUgdGhhdCBmb3IgdGhpcyB0byB3b3JrIHRoZSBvcmlnaW4gbXVzdCBub3QgYmVcbiAqIHVzaW5nIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCIgd2l0aCBhIHdpbGRjYXJkLFxuICogYW5kIGFsc28gbXVzdCBzZXQgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1DcmVkZW50aWFsc1wiXG4gKiB0byBcInRydWVcIi5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3RCYXNlLnByb3RvdHlwZS53aXRoQ3JlZGVudGlhbHMgPSBmdW5jdGlvbihvbikge1xuICAvLyBUaGlzIGlzIGJyb3dzZXItb25seSBmdW5jdGlvbmFsaXR5LiBOb2RlIHNpZGUgaXMgbm8tb3AuXG4gIGlmIChvbiA9PSB1bmRlZmluZWQpIG9uID0gdHJ1ZTtcbiAgdGhpcy5fd2l0aENyZWRlbnRpYWxzID0gb247XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZXQgdGhlIG1heCByZWRpcmVjdHMgdG8gYG5gLiBEb2VzIG5vdGluZyBpbiBicm93c2VyIFhIUiBpbXBsZW1lbnRhdGlvbi5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gblxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3RCYXNlLnByb3RvdHlwZS5yZWRpcmVjdHMgPSBmdW5jdGlvbihuKXtcbiAgdGhpcy5fbWF4UmVkaXJlY3RzID0gbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIE1heGltdW0gc2l6ZSBvZiBidWZmZXJlZCByZXNwb25zZSBib2R5LCBpbiBieXRlcy4gQ291bnRzIHVuY29tcHJlc3NlZCBzaXplLlxuICogRGVmYXVsdCAyMDBNQi5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gblxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKi9cblJlcXVlc3RCYXNlLnByb3RvdHlwZS5tYXhSZXNwb25zZVNpemUgPSBmdW5jdGlvbihuKXtcbiAgaWYgKCdudW1iZXInICE9PSB0eXBlb2Ygbikge1xuICAgIHRocm93IFR5cGVFcnJvcihcIkludmFsaWQgYXJndW1lbnRcIik7XG4gIH1cbiAgdGhpcy5fbWF4UmVzcG9uc2VTaXplID0gbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIENvbnZlcnQgdG8gYSBwbGFpbiBqYXZhc2NyaXB0IG9iamVjdCAobm90IEpTT04gc3RyaW5nKSBvZiBzY2FsYXIgcHJvcGVydGllcy5cbiAqIE5vdGUgYXMgdGhpcyBtZXRob2QgaXMgZGVzaWduZWQgdG8gcmV0dXJuIGEgdXNlZnVsIG5vbi10aGlzIHZhbHVlLFxuICogaXQgY2Fubm90IGJlIGNoYWluZWQuXG4gKlxuICogQHJldHVybiB7T2JqZWN0fSBkZXNjcmliaW5nIG1ldGhvZCwgdXJsLCBhbmQgZGF0YSBvZiB0aGlzIHJlcXVlc3RcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdEJhc2UucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4ge1xuICAgIG1ldGhvZDogdGhpcy5tZXRob2QsXG4gICAgdXJsOiB0aGlzLnVybCxcbiAgICBkYXRhOiB0aGlzLl9kYXRhLFxuICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcixcbiAgfTtcbn07XG5cbi8qKlxuICogU2VuZCBgZGF0YWAgYXMgdGhlIHJlcXVlc3QgYm9keSwgZGVmYXVsdGluZyB0aGUgYC50eXBlKClgIHRvIFwianNvblwiIHdoZW5cbiAqIGFuIG9iamVjdCBpcyBnaXZlbi5cbiAqXG4gKiBFeGFtcGxlczpcbiAqXG4gKiAgICAgICAvLyBtYW51YWwganNvblxuICogICAgICAgcmVxdWVzdC5wb3N0KCcvdXNlcicpXG4gKiAgICAgICAgIC50eXBlKCdqc29uJylcbiAqICAgICAgICAgLnNlbmQoJ3tcIm5hbWVcIjpcInRqXCJ9JylcbiAqICAgICAgICAgLmVuZChjYWxsYmFjaylcbiAqXG4gKiAgICAgICAvLyBhdXRvIGpzb25cbiAqICAgICAgIHJlcXVlc3QucG9zdCgnL3VzZXInKVxuICogICAgICAgICAuc2VuZCh7IG5hbWU6ICd0aicgfSlcbiAqICAgICAgICAgLmVuZChjYWxsYmFjaylcbiAqXG4gKiAgICAgICAvLyBtYW51YWwgeC13d3ctZm9ybS11cmxlbmNvZGVkXG4gKiAgICAgICByZXF1ZXN0LnBvc3QoJy91c2VyJylcbiAqICAgICAgICAgLnR5cGUoJ2Zvcm0nKVxuICogICAgICAgICAuc2VuZCgnbmFtZT10aicpXG4gKiAgICAgICAgIC5lbmQoY2FsbGJhY2spXG4gKlxuICogICAgICAgLy8gYXV0byB4LXd3dy1mb3JtLXVybGVuY29kZWRcbiAqICAgICAgIHJlcXVlc3QucG9zdCgnL3VzZXInKVxuICogICAgICAgICAudHlwZSgnZm9ybScpXG4gKiAgICAgICAgIC5zZW5kKHsgbmFtZTogJ3RqJyB9KVxuICogICAgICAgICAuZW5kKGNhbGxiYWNrKVxuICpcbiAqICAgICAgIC8vIGRlZmF1bHRzIHRvIHgtd3d3LWZvcm0tdXJsZW5jb2RlZFxuICogICAgICByZXF1ZXN0LnBvc3QoJy91c2VyJylcbiAqICAgICAgICAuc2VuZCgnbmFtZT10b2JpJylcbiAqICAgICAgICAuc2VuZCgnc3BlY2llcz1mZXJyZXQnKVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fSBkYXRhXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdEJhc2UucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbihkYXRhKXtcbiAgdmFyIGlzT2JqID0gaXNPYmplY3QoZGF0YSk7XG4gIHZhciB0eXBlID0gdGhpcy5faGVhZGVyWydjb250ZW50LXR5cGUnXTtcblxuICBpZiAodGhpcy5fZm9ybURhdGEpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiLnNlbmQoKSBjYW4ndCBiZSB1c2VkIGlmIC5hdHRhY2goKSBvciAuZmllbGQoKSBpcyB1c2VkLiBQbGVhc2UgdXNlIG9ubHkgLnNlbmQoKSBvciBvbmx5IC5maWVsZCgpICYgLmF0dGFjaCgpXCIpO1xuICB9XG5cbiAgaWYgKGlzT2JqICYmICF0aGlzLl9kYXRhKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgIHRoaXMuX2RhdGEgPSBbXTtcbiAgICB9IGVsc2UgaWYgKCF0aGlzLl9pc0hvc3QoZGF0YSkpIHtcbiAgICAgIHRoaXMuX2RhdGEgPSB7fTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoZGF0YSAmJiB0aGlzLl9kYXRhICYmIHRoaXMuX2lzSG9zdCh0aGlzLl9kYXRhKSkge1xuICAgIHRocm93IEVycm9yKFwiQ2FuJ3QgbWVyZ2UgdGhlc2Ugc2VuZCBjYWxsc1wiKTtcbiAgfVxuXG4gIC8vIG1lcmdlXG4gIGlmIChpc09iaiAmJiBpc09iamVjdCh0aGlzLl9kYXRhKSkge1xuICAgIGZvciAodmFyIGtleSBpbiBkYXRhKSB7XG4gICAgICB0aGlzLl9kYXRhW2tleV0gPSBkYXRhW2tleV07XG4gICAgfVxuICB9IGVsc2UgaWYgKCdzdHJpbmcnID09IHR5cGVvZiBkYXRhKSB7XG4gICAgLy8gZGVmYXVsdCB0byB4LXd3dy1mb3JtLXVybGVuY29kZWRcbiAgICBpZiAoIXR5cGUpIHRoaXMudHlwZSgnZm9ybScpO1xuICAgIHR5cGUgPSB0aGlzLl9oZWFkZXJbJ2NvbnRlbnQtdHlwZSddO1xuICAgIGlmICgnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyA9PSB0eXBlKSB7XG4gICAgICB0aGlzLl9kYXRhID0gdGhpcy5fZGF0YVxuICAgICAgICA/IHRoaXMuX2RhdGEgKyAnJicgKyBkYXRhXG4gICAgICAgIDogZGF0YTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZGF0YSA9ICh0aGlzLl9kYXRhIHx8ICcnKSArIGRhdGE7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICB9XG5cbiAgaWYgKCFpc09iaiB8fCB0aGlzLl9pc0hvc3QoZGF0YSkpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIGRlZmF1bHQgdG8ganNvblxuICBpZiAoIXR5cGUpIHRoaXMudHlwZSgnanNvbicpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU29ydCBgcXVlcnlzdHJpbmdgIGJ5IHRoZSBzb3J0IGZ1bmN0aW9uXG4gKlxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICAgICAgIC8vIGRlZmF1bHQgb3JkZXJcbiAqICAgICAgIHJlcXVlc3QuZ2V0KCcvdXNlcicpXG4gKiAgICAgICAgIC5xdWVyeSgnbmFtZT1OaWNrJylcbiAqICAgICAgICAgLnF1ZXJ5KCdzZWFyY2g9TWFubnknKVxuICogICAgICAgICAuc29ydFF1ZXJ5KClcbiAqICAgICAgICAgLmVuZChjYWxsYmFjaylcbiAqXG4gKiAgICAgICAvLyBjdXN0b21pemVkIHNvcnQgZnVuY3Rpb25cbiAqICAgICAgIHJlcXVlc3QuZ2V0KCcvdXNlcicpXG4gKiAgICAgICAgIC5xdWVyeSgnbmFtZT1OaWNrJylcbiAqICAgICAgICAgLnF1ZXJ5KCdzZWFyY2g9TWFubnknKVxuICogICAgICAgICAuc29ydFF1ZXJ5KGZ1bmN0aW9uKGEsIGIpe1xuICogICAgICAgICAgIHJldHVybiBhLmxlbmd0aCAtIGIubGVuZ3RoO1xuICogICAgICAgICB9KVxuICogICAgICAgICAuZW5kKGNhbGxiYWNrKVxuICpcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzb3J0XG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdEJhc2UucHJvdG90eXBlLnNvcnRRdWVyeSA9IGZ1bmN0aW9uKHNvcnQpIHtcbiAgLy8gX3NvcnQgZGVmYXVsdCB0byB0cnVlIGJ1dCBvdGhlcndpc2UgY2FuIGJlIGEgZnVuY3Rpb24gb3IgYm9vbGVhblxuICB0aGlzLl9zb3J0ID0gdHlwZW9mIHNvcnQgPT09ICd1bmRlZmluZWQnID8gdHJ1ZSA6IHNvcnQ7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBDb21wb3NlIHF1ZXJ5c3RyaW5nIHRvIGFwcGVuZCB0byByZXEudXJsXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblJlcXVlc3RCYXNlLnByb3RvdHlwZS5fZmluYWxpemVRdWVyeVN0cmluZyA9IGZ1bmN0aW9uKCl7XG4gIHZhciBxdWVyeSA9IHRoaXMuX3F1ZXJ5LmpvaW4oJyYnKTtcbiAgaWYgKHF1ZXJ5KSB7XG4gICAgdGhpcy51cmwgKz0gKHRoaXMudXJsLmluZGV4T2YoJz8nKSA+PSAwID8gJyYnIDogJz8nKSArIHF1ZXJ5O1xuICB9XG4gIHRoaXMuX3F1ZXJ5Lmxlbmd0aCA9IDA7IC8vIE1ha2VzIHRoZSBjYWxsIGlkZW1wb3RlbnRcblxuICBpZiAodGhpcy5fc29ydCkge1xuICAgIHZhciBpbmRleCA9IHRoaXMudXJsLmluZGV4T2YoJz8nKTtcbiAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgdmFyIHF1ZXJ5QXJyID0gdGhpcy51cmwuc3Vic3RyaW5nKGluZGV4ICsgMSkuc3BsaXQoJyYnKTtcbiAgICAgIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgdGhpcy5fc29ydCkge1xuICAgICAgICBxdWVyeUFyci5zb3J0KHRoaXMuX3NvcnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcXVlcnlBcnIuc29ydCgpO1xuICAgICAgfVxuICAgICAgdGhpcy51cmwgPSB0aGlzLnVybC5zdWJzdHJpbmcoMCwgaW5kZXgpICsgJz8nICsgcXVlcnlBcnIuam9pbignJicpO1xuICAgIH1cbiAgfVxufTtcblxuLy8gRm9yIGJhY2t3YXJkcyBjb21wYXQgb25seVxuUmVxdWVzdEJhc2UucHJvdG90eXBlLl9hcHBlbmRRdWVyeVN0cmluZyA9IGZ1bmN0aW9uKCkge2NvbnNvbGUudHJhY2UoXCJVbnN1cHBvcnRlZFwiKTt9XG5cbi8qKlxuICogSW52b2tlIGNhbGxiYWNrIHdpdGggdGltZW91dCBlcnJvci5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUuX3RpbWVvdXRFcnJvciA9IGZ1bmN0aW9uKHJlYXNvbiwgdGltZW91dCwgZXJybm8pe1xuICBpZiAodGhpcy5fYWJvcnRlZCkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgZXJyID0gbmV3IEVycm9yKHJlYXNvbiArIHRpbWVvdXQgKyAnbXMgZXhjZWVkZWQnKTtcbiAgZXJyLnRpbWVvdXQgPSB0aW1lb3V0O1xuICBlcnIuY29kZSA9ICdFQ09OTkFCT1JURUQnO1xuICBlcnIuZXJybm8gPSBlcnJubztcbiAgdGhpcy50aW1lZG91dCA9IHRydWU7XG4gIHRoaXMuYWJvcnQoKTtcbiAgdGhpcy5jYWxsYmFjayhlcnIpO1xufTtcblxuUmVxdWVzdEJhc2UucHJvdG90eXBlLl9zZXRUaW1lb3V0cyA9IGZ1bmN0aW9uKCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgLy8gZGVhZGxpbmVcbiAgaWYgKHRoaXMuX3RpbWVvdXQgJiYgIXRoaXMuX3RpbWVyKSB7XG4gICAgdGhpcy5fdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICBzZWxmLl90aW1lb3V0RXJyb3IoJ1RpbWVvdXQgb2YgJywgc2VsZi5fdGltZW91dCwgJ0VUSU1FJyk7XG4gICAgfSwgdGhpcy5fdGltZW91dCk7XG4gIH1cbiAgLy8gcmVzcG9uc2UgdGltZW91dFxuICBpZiAodGhpcy5fcmVzcG9uc2VUaW1lb3V0ICYmICF0aGlzLl9yZXNwb25zZVRpbWVvdXRUaW1lcikge1xuICAgIHRoaXMuX3Jlc3BvbnNlVGltZW91dFRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgc2VsZi5fdGltZW91dEVycm9yKCdSZXNwb25zZSB0aW1lb3V0IG9mICcsIHNlbGYuX3Jlc3BvbnNlVGltZW91dCwgJ0VUSU1FRE9VVCcpO1xuICAgIH0sIHRoaXMuX3Jlc3BvbnNlVGltZW91dCk7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbi8qKlxuICogRXhwb3NlIGBSZXNwb25zZUJhc2VgLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gUmVzcG9uc2VCYXNlO1xuXG4vKipcbiAqIEluaXRpYWxpemUgYSBuZXcgYFJlc3BvbnNlQmFzZWAuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBSZXNwb25zZUJhc2Uob2JqKSB7XG4gIGlmIChvYmopIHJldHVybiBtaXhpbihvYmopO1xufVxuXG4vKipcbiAqIE1peGluIHRoZSBwcm90b3R5cGUgcHJvcGVydGllcy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBtaXhpbihvYmopIHtcbiAgZm9yICh2YXIga2V5IGluIFJlc3BvbnNlQmFzZS5wcm90b3R5cGUpIHtcbiAgICBvYmpba2V5XSA9IFJlc3BvbnNlQmFzZS5wcm90b3R5cGVba2V5XTtcbiAgfVxuICByZXR1cm4gb2JqO1xufVxuXG4vKipcbiAqIEdldCBjYXNlLWluc2Vuc2l0aXZlIGBmaWVsZGAgdmFsdWUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlc3BvbnNlQmFzZS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24oZmllbGQpIHtcbiAgcmV0dXJuIHRoaXMuaGVhZGVyW2ZpZWxkLnRvTG93ZXJDYXNlKCldO1xufTtcblxuLyoqXG4gKiBTZXQgaGVhZGVyIHJlbGF0ZWQgcHJvcGVydGllczpcbiAqXG4gKiAgIC0gYC50eXBlYCB0aGUgY29udGVudCB0eXBlIHdpdGhvdXQgcGFyYW1zXG4gKlxuICogQSByZXNwb25zZSBvZiBcIkNvbnRlbnQtVHlwZTogdGV4dC9wbGFpbjsgY2hhcnNldD11dGYtOFwiXG4gKiB3aWxsIHByb3ZpZGUgeW91IHdpdGggYSBgLnR5cGVgIG9mIFwidGV4dC9wbGFpblwiLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBoZWFkZXJcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlc3BvbnNlQmFzZS5wcm90b3R5cGUuX3NldEhlYWRlclByb3BlcnRpZXMgPSBmdW5jdGlvbihoZWFkZXIpe1xuICAgIC8vIFRPRE86IG1vYXIhXG4gICAgLy8gVE9ETzogbWFrZSB0aGlzIGEgdXRpbFxuXG4gICAgLy8gY29udGVudC10eXBlXG4gICAgdmFyIGN0ID0gaGVhZGVyWydjb250ZW50LXR5cGUnXSB8fCAnJztcbiAgICB0aGlzLnR5cGUgPSB1dGlscy50eXBlKGN0KTtcblxuICAgIC8vIHBhcmFtc1xuICAgIHZhciBwYXJhbXMgPSB1dGlscy5wYXJhbXMoY3QpO1xuICAgIGZvciAodmFyIGtleSBpbiBwYXJhbXMpIHRoaXNba2V5XSA9IHBhcmFtc1trZXldO1xuXG4gICAgdGhpcy5saW5rcyA9IHt9O1xuXG4gICAgLy8gbGlua3NcbiAgICB0cnkge1xuICAgICAgICBpZiAoaGVhZGVyLmxpbmspIHtcbiAgICAgICAgICAgIHRoaXMubGlua3MgPSB1dGlscy5wYXJzZUxpbmtzKGhlYWRlci5saW5rKTtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAvLyBpZ25vcmVcbiAgICB9XG59O1xuXG4vKipcbiAqIFNldCBmbGFncyBzdWNoIGFzIGAub2tgIGJhc2VkIG9uIGBzdGF0dXNgLlxuICpcbiAqIEZvciBleGFtcGxlIGEgMnh4IHJlc3BvbnNlIHdpbGwgZ2l2ZSB5b3UgYSBgLm9rYCBvZiBfX3RydWVfX1xuICogd2hlcmVhcyA1eHggd2lsbCBiZSBfX2ZhbHNlX18gYW5kIGAuZXJyb3JgIHdpbGwgYmUgX190cnVlX18uIFRoZVxuICogYC5jbGllbnRFcnJvcmAgYW5kIGAuc2VydmVyRXJyb3JgIGFyZSBhbHNvIGF2YWlsYWJsZSB0byBiZSBtb3JlXG4gKiBzcGVjaWZpYywgYW5kIGAuc3RhdHVzVHlwZWAgaXMgdGhlIGNsYXNzIG9mIGVycm9yIHJhbmdpbmcgZnJvbSAxLi41XG4gKiBzb21ldGltZXMgdXNlZnVsIGZvciBtYXBwaW5nIHJlc3BvbmQgY29sb3JzIGV0Yy5cbiAqXG4gKiBcInN1Z2FyXCIgcHJvcGVydGllcyBhcmUgYWxzbyBkZWZpbmVkIGZvciBjb21tb24gY2FzZXMuIEN1cnJlbnRseSBwcm92aWRpbmc6XG4gKlxuICogICAtIC5ub0NvbnRlbnRcbiAqICAgLSAuYmFkUmVxdWVzdFxuICogICAtIC51bmF1dGhvcml6ZWRcbiAqICAgLSAubm90QWNjZXB0YWJsZVxuICogICAtIC5ub3RGb3VuZFxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBzdGF0dXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlc3BvbnNlQmFzZS5wcm90b3R5cGUuX3NldFN0YXR1c1Byb3BlcnRpZXMgPSBmdW5jdGlvbihzdGF0dXMpe1xuICAgIHZhciB0eXBlID0gc3RhdHVzIC8gMTAwIHwgMDtcblxuICAgIC8vIHN0YXR1cyAvIGNsYXNzXG4gICAgdGhpcy5zdGF0dXMgPSB0aGlzLnN0YXR1c0NvZGUgPSBzdGF0dXM7XG4gICAgdGhpcy5zdGF0dXNUeXBlID0gdHlwZTtcblxuICAgIC8vIGJhc2ljc1xuICAgIHRoaXMuaW5mbyA9IDEgPT0gdHlwZTtcbiAgICB0aGlzLm9rID0gMiA9PSB0eXBlO1xuICAgIHRoaXMucmVkaXJlY3QgPSAzID09IHR5cGU7XG4gICAgdGhpcy5jbGllbnRFcnJvciA9IDQgPT0gdHlwZTtcbiAgICB0aGlzLnNlcnZlckVycm9yID0gNSA9PSB0eXBlO1xuICAgIHRoaXMuZXJyb3IgPSAoNCA9PSB0eXBlIHx8IDUgPT0gdHlwZSlcbiAgICAgICAgPyB0aGlzLnRvRXJyb3IoKVxuICAgICAgICA6IGZhbHNlO1xuXG4gICAgLy8gc3VnYXJcbiAgICB0aGlzLmNyZWF0ZWQgPSAyMDEgPT0gc3RhdHVzO1xuICAgIHRoaXMuYWNjZXB0ZWQgPSAyMDIgPT0gc3RhdHVzO1xuICAgIHRoaXMubm9Db250ZW50ID0gMjA0ID09IHN0YXR1cztcbiAgICB0aGlzLmJhZFJlcXVlc3QgPSA0MDAgPT0gc3RhdHVzO1xuICAgIHRoaXMudW5hdXRob3JpemVkID0gNDAxID09IHN0YXR1cztcbiAgICB0aGlzLm5vdEFjY2VwdGFibGUgPSA0MDYgPT0gc3RhdHVzO1xuICAgIHRoaXMuZm9yYmlkZGVuID0gNDAzID09IHN0YXR1cztcbiAgICB0aGlzLm5vdEZvdW5kID0gNDA0ID09IHN0YXR1cztcbiAgICB0aGlzLnVucHJvY2Vzc2FibGVFbnRpdHkgPSA0MjIgPT0gc3RhdHVzO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBSZXR1cm4gdGhlIG1pbWUgdHlwZSBmb3IgdGhlIGdpdmVuIGBzdHJgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMudHlwZSA9IGZ1bmN0aW9uKHN0cil7XG4gIHJldHVybiBzdHIuc3BsaXQoLyAqOyAqLykuc2hpZnQoKTtcbn07XG5cbi8qKlxuICogUmV0dXJuIGhlYWRlciBmaWVsZCBwYXJhbWV0ZXJzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMucGFyYW1zID0gZnVuY3Rpb24oc3RyKXtcbiAgcmV0dXJuIHN0ci5zcGxpdCgvICo7ICovKS5yZWR1Y2UoZnVuY3Rpb24ob2JqLCBzdHIpe1xuICAgIHZhciBwYXJ0cyA9IHN0ci5zcGxpdCgvICo9ICovKTtcbiAgICB2YXIga2V5ID0gcGFydHMuc2hpZnQoKTtcbiAgICB2YXIgdmFsID0gcGFydHMuc2hpZnQoKTtcblxuICAgIGlmIChrZXkgJiYgdmFsKSBvYmpba2V5XSA9IHZhbDtcbiAgICByZXR1cm4gb2JqO1xuICB9LCB7fSk7XG59O1xuXG4vKipcbiAqIFBhcnNlIExpbmsgaGVhZGVyIGZpZWxkcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5leHBvcnRzLnBhcnNlTGlua3MgPSBmdW5jdGlvbihzdHIpe1xuICByZXR1cm4gc3RyLnNwbGl0KC8gKiwgKi8pLnJlZHVjZShmdW5jdGlvbihvYmosIHN0cil7XG4gICAgdmFyIHBhcnRzID0gc3RyLnNwbGl0KC8gKjsgKi8pO1xuICAgIHZhciB1cmwgPSBwYXJ0c1swXS5zbGljZSgxLCAtMSk7XG4gICAgdmFyIHJlbCA9IHBhcnRzWzFdLnNwbGl0KC8gKj0gKi8pWzFdLnNsaWNlKDEsIC0xKTtcbiAgICBvYmpbcmVsXSA9IHVybDtcbiAgICByZXR1cm4gb2JqO1xuICB9LCB7fSk7XG59O1xuXG4vKipcbiAqIFN0cmlwIGNvbnRlbnQgcmVsYXRlZCBmaWVsZHMgZnJvbSBgaGVhZGVyYC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gaGVhZGVyXG4gKiBAcmV0dXJuIHtPYmplY3R9IGhlYWRlclxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZXhwb3J0cy5jbGVhbkhlYWRlciA9IGZ1bmN0aW9uKGhlYWRlciwgY2hhbmdlc09yaWdpbil7XG4gIGRlbGV0ZSBoZWFkZXJbJ2NvbnRlbnQtdHlwZSddO1xuICBkZWxldGUgaGVhZGVyWydjb250ZW50LWxlbmd0aCddO1xuICBkZWxldGUgaGVhZGVyWyd0cmFuc2Zlci1lbmNvZGluZyddO1xuICBkZWxldGUgaGVhZGVyWydob3N0J107XG4gIC8vIHNlY3VpcnR5XG4gIGlmIChjaGFuZ2VzT3JpZ2luKSB7XG4gICAgZGVsZXRlIGhlYWRlclsnYXV0aG9yaXphdGlvbiddO1xuICAgIGRlbGV0ZSBoZWFkZXJbJ2Nvb2tpZSddO1xuICB9XG4gIHJldHVybiBoZWFkZXI7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==