import faker from "faker";

class UserFactory {
	generateList(count, attrs = {}) {
		let list = [];
		while (count) {
			list.push(this.generate(attrs));
			count--;
		}
		return list;
	}

	generate(attrs) {
		return Object.assign({}, {
			firstname: faker.name.firstName(),
			lastname: faker.name.lastName(),
			username: faker.internet.userName(),
			email: faker.internet.email(),
			password: 'password1',
			photo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAIP0lEQVR4Xu2dfWwb5R3Hv8/5znES253jxomT0tI2bdouKV3pCi1C2tAmGB0MGBrlRZ0EW9EioNCNZYLSSR1Cm7ROVQWoQKPS8jIVqbwOxIRgVBQqSENb0jLWSn1zaAJ5bxw78cvddBfsOHZSP+c453P8u/8c/57n93u+n/vd955HkcxAlykU8FU6VwqCuJWZopoCLuJ8lWORDOtLYFiuykBAcnQz+GYVVzOlpBmAN7EEAmIwEF+5s4ZZpXcALBgvNQExCEh7pXtl1KJsB9gVF0tJQKYYyNeestWKiK1g7EqeVASER6UMYnwVrnpmYXvA2DI9wwmIHrU4Ys9XuWbLEA6BoZwjPCWEgGSi2jhj2mY6FsIq/RuMXTqZKQnIZNQD0OYpWwWRPRnbR0xyOtqHZCqgXrPmzUMdwqvUd3GZmjVvGgLCqdRkzZozDT2y0gmVLbNOlyf2PXXIBEpl26wJCK8CSXFTZda85VCHGGTWBIRTAaPMmrOcwjV1o82agJjMrAmIycyagJjMrAseiNnMumCBmNWsCw5IrnbWvELzxuX9xjDXO2teoXnj8hbIVB+D8wqY7bi8A5KvZs0LLm+A5LtZTxsg08Ws8x7IdDPrvAUyXc0674BMd7POGyCFYtamB1JoZm1aIIVq1qYDUuhmbRogZNa8KEbipmynTmatD0QsOutAyKwzA5F1IGTWkwORNSBk1tkBMWkgZNbZBZExEDLrqQGhGwiZ9dSC4AZCZm0MiLRAyKyNBTEhEDLr3IBIAUJmnVsQcSBk1uYAMQqk2q2Yq6TCroa1ERBT3QEExFQ4AAJCQEymgMnKoQ4hICZTwGTlUIcQEJMpYLJyqEMIiMkUMFk51CEExGQKmKwc6hACYjIFTFYOdQgBMZkCJiuHOoSAmEwBk5VDHUJATKZAUjmWS2Yj6juXsyKpQxKkr/ikBeLsOfDv2on+x/6UEygEJEF271dnINjtCL79JnruvZuA5ESBfAfC7HY4Gzch1NKM4Ov7RpcjCJDq6iHW1EKaNw/M6QQrLtG+V4IByD09iJw+hfCXxxA5eWJc7cW58yHV1UFcUAvB5QKzFXMzUoaHMfDkNsgd7aNjGIO0pA7ikiUQ59ZAcDrAimwTzlly621gkjRuh1hmXQKpfikktTb3TLCSkbXFLiUYRNR3FqHjxxA61AyEhrlrTwzU/ciy39uAGY9tQbS7Cx2XLdLmki77AdxNe2CpHPMbiRMWFD5+DN2/WRc3TxWe+4W9KLr8hxktIjbI/8zT6P/LZu1j0dU/guvv22CpnqV7zsRHllBWhrKde1C0kutH1rRccl+fVkdg78u6c+sG4mh4AM5HNkPu60V73QJAklB10gcmimOTKwrkYED7m3qnM0EY873c24P2FfXA8DAqPjsCsSpVODkYBBQ57aKEklItxv98E/o3NUKsXQzPe/tTciqhEJRIeML51I5mjMU7hDmc8B75L1hRUcoYOTAY/xuTrFpnJV+dN12P0KHP0tY/qQ5JBmK/ez1mbHkCiiyj4/I6yJ3fXrQA6/IVKH/zXS3m259dg3DrF6hu6xq5swYH0b7oUkDR99+t3pM+CMXFcSCeDw9CqlkAJRodqamrk0uUZFN3v/IabKuv1ubpWnsLQgc/TjuPddVVKN/7GiAIkPv70f79+WnHZBWI8+FH4NiwcbRj0qQXyj3wHv5Si+q88VqEPm8ZBdLTjfZliwE5fVckpkkGEgM8+NJu9DX+nluQZCCeDz6GtLAWoeOt6Lz2x9zzfG/rdpTedocW//WsmdzjtKeJ3v/tTe6QbACpOvsNmMWiFR463ILgO//S7molnPB4iUYg+/2InD6N6JlTYxY5ERC9+4kUIN91WqTNhwt/fZxb2NI716Fo1VX5C6T4579A2Y4m7gWHT59Cb8NvEW49qo2ZaiDchY0TmJcdoq5DnF8DxwMbUXzjzeMaZPJalUhE8xtlaMi0QIYO7Ef32l/q4mmKR5aeim3Xr4H72d3akP7H/wz/jqemHEjk3Bl8s3qFnjIzjs07IGAM1b6Rtyb/7ib0P9o4IZDAvlfQu6GBWxzv/85CKC1F4K030Pu7e+B5/wCk2kVQX5fbl9ZC8Q9wz5VpYF4BYaV2FN90C1x/+4e23r5NjRh8vikFSGXzF7B4q7SXAvVMSt0LqPue8V6nmXMGxHnzYb9nPUpuvlWbt/fhBxH454twbXsK6u5dvSLnzqL3DxsQPnIYSsIeJFPhJxqXUyDaWxTHxk8rXhTBhJE3sdh1vnYOlMHBFCDWK1ahfN9bKWtW73RgdI/DrKkbvqEPP0D3Xb8aGWstgrf1hNY1iVesbiUURvevb0fo04Pxr5nNBs9/PoGlogKB119F38b7dTHTDcS+vgEzNm9BtKsTHcsWw3H/Q3A2PopoTw86li5Mm1w9B/Ie/Spt3MUC1HOjrnVr4xu1ytaTsLhcGHh6Oy48sWVEy5VXouyZXbCU8/2KtvqSoD7egm+8OiY1szvg3vVi/DU2ua7ePz6EwMsvxP8sVFTC23JM+6yCOz+X7zgpNoFuIOpAx30PYuij/QgfPazNY79vA4a1z0e4hLZd8xNYly3nio0FqWdnwwcPIHIi9WBSPZS0rbkBg03PageZyZdl9hxNUMHjgcU9E6oPIRTWzuNCzZ9qB6U8l/bIXHODdj6mHrGo+yL/zh0pG1nbT6+DtX4pBp7bAWXgAs/Uox2md2Ooa3YK1q1ARh2iOwsN4FaAgHBLZUwgATFGZ+4sBIRbKmMCCYgxOnNnISDcUhkTSECM0Zk7CwHhlsqYQAJijM7cWQgIt1TGBBIQY3TmzvJ//C3f+ac9BhUAAAAASUVORK5CYII=',
			role: 'user'
		}, attrs);
	}
}

export default new UserFactory();
