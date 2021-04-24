const menuBorder =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAYAAAA4E5OyAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVFSURBVHgB7ZxLSyNZFMdPyldAxGzELOMDxmUQYYIIBkaYXjm9NxHdzUeYjzHL2TlgPkD3rnuXBtG40SzT+KAabYiKEhQlxleff7gJSVllksq5ZV4/0CpNpSr1zznn3jr3nusjzWxsbAR4E+rv7w++vLxgP2AYhl/tO+Lz+XLPz8953s3xfvbx8THL+9n19fUcacRHGmARIMAM38hMrRtvFAjF5zRZoDSLY5IwYoKwCH4WIcIfOMIf2E8eAHH4J1koFEwpy2lakPcQwgpfO8/XTrPVpJoVpilBEolEhDfR9xLCSsliVlZW0uQSV4IgUPb19X3ki4eoBYEwDw8P/7uxloYFaTWrcAJuxJtkLBZLNfS+Rg7e3Nz8wJsItRfJeDyerPfgugVhMT7yJkztSZpF+VTPgXUJwm7yN7tIkNoY/vzZ1dXV/2odZ9Q6AJbR7mIAjilBZeVv8qYgfIIota+b2BFWcdARR0FKrQl1HhF1b7bYCqIeyKLUuUTVPb7CVpCBgYG1Vu9nNAPuDR1Lu9deCcLKhaWfUFsR9LLtXKdKEJgRW0eUuge4TpUnVAmCp9ZusI4ScB3cc+X/yoLAOtiMOqmJrQukLSqtpNJCQp0cSJ2wWkl/aQexg18knQwPD/vn5uZ+DwQCoaGhocDg4KCtez49PeXv7u6y5+fnmcPDw+8XFxd686hsJbxJFvfxS+VA10gTY2Njgfn5+b9GRkZC5AIWJL23t/dNpzCcbUP+xCxaCIuhLXZEmImJiUVu9127IwsaXlpamjFNM7mzs7NLGkBSnDdmMYboynwtLCxEp6en/2xGjBI4x9TU1IdFhjSAEYLiddC68DhJlISBZUxOTv5BwoyOjoY4FuVPT09/kiz+5eXltMHBTfzRHjEDbkKaCIVCUVyDhOEgHzI4oosLMjs7uyjhJk7g3AjSJAyPFAbZWwxRQfDNIQiSZtBioRknQdBLN6S76hz4Zsgj0KchWQJoZURVHh8f/408Ah08EgSD8OIWwmbsWf4VvV0SpOgyJAxUJo9w6vo3g7gg7U5PEAs9QSz0BLHQE8SCuCCFQkFrMqcSJJJIGAOTS0iQ+/t7zwRBVo0EgRawEFGVLy8vf5BHnJ2dZUgQTAMVt5D9/f2GZuw0w9HR0XeSJWewKqKC3N7e5m9ubkzSDPKs0jlWTBA21AxhUba3tz+rWchawLmRdCZhoAViiEnC4Js7Pj4W/8Al2FV0ZeCzBqYuSscRkGI4Sy4uysnJSXJ3d1c8TkEDaFHsh/Bjr2i0LrG1tZXkgaavEu6DcxwcHHz9xpAGMH8e2+K4DPtOxjroKwUshU08gzyr29Ti9fW1yeMxnzUPVBVnP5dnISYSiX90j+0i34oUI7JqSCQ55U7Q283n87mrq6sfaMbRcpFG4C6xWOxf7JfHdlkM+GWUNIJvmH9wHc/6KvWA+fGl/fKzDCoJ1HTorgL3jPKS0t9lQTjC5pWVdBUoK6ksEqh62u02K0HswD1X/q9KEFgJqXkS3QBih7WE5FU+BOUUpTa5k4F12BUa2SaIOPHyqZNdB/eGAiO712wFUWaUpM4l6VRt5ZhCVJVIndjqvFll9WZONR6Pf+GN64K+FiRdq7qqZpIZlUgovqE2B8mfeqqqeiVmFhotQoxS+5WNpJTr10WvTNX6PnKBqppYa9VCAXQs0ZfypJC5EtTWqCnhLSGMW6uoOgc1CaxFLYYQfufFEFJqMYSmetiSy2UUF07x0mIkhSifkzSgignCmDKuaUGVDPLALb2gihPKcoJqyR1MyHOz5E5ODaiJLZzixC+Pep38tBMCHQAAAABJRU5ErkJggg=='

const shrinkIcon =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCA1NiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMjMiIHk9IjEiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgcng9IjIiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIvPgo8cGF0aCBkPSJNMCA1SDE2VjdIMFY1WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTEyLjUgMS41TDE3IDZMMTQgNkwxMSAzTDEyLjUgMS41WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTEyLjUgMTAuNUwxNyA2TDE0IDZMMTEgOUwxMi41IDEwLjVaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNNTYgNUg0MFY3SDU2VjVaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNNDMuNSAxLjVMMzkgNkw0MiA2TDQ1IDNMNDMuNSAxLjVaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNNDMuNSAxMC41TDM5IDZMNDIgNkw0NSA5TDQzLjUgMTAuNVoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo='

const expandIcon =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCA1NiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMjMiIHk9IjEiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgcng9IjIiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIvPgo8cGF0aCBkPSJNMTcgNUgxVjdIMTdWNVoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik00LjUgMS41TC01LjYxNTMyZS0wNyA2TDMgNkw2IDNMNC41IDEuNVoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik00LjUgMTAuNUwtNS44MDg2ZS0wNyA2TDMgNkw2IDlMNC41IDEwLjVaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMzkgNUg1NVY3SDM5VjVaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNNTEuNSAxLjVMNTYgNkw1MyA2TDUwIDNMNTEuNSAxLjVaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNNTEuNSAxMC41TDU2IDZMNTMgNkw1MCA5TDUxLjUgMTAuNVoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo='

const selectSurface =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABKCAYAAADzEqlPAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE5SURBVHgB7dnbCYNAEIXh0S6SWsTixVqSMkxmIRJE4m0uG/g/EAwBB4/7sB5FAAAAAAAAAAAAgGIYhpse4sT7+kuNONGbaJrmrufTND36vn+KIe/rr2nFSdu284PQm7JcAd9BLWd5ch0yjuP9/dTnkCxWwDKo9/mz67qHBHB/IpaBZQZV5kkAi8CygyozJciVwGoIqsyVQGcCqyWoMluCHQmspqDKfEmwJ7DaglJu+6xf9Kb15j+/1/ZJi31aelDpdIXpcfZ/AECltvqo6L5qS8o+S231URl91ZaUfdaePsqzDzsrfGUd2Zl79GFXhIZ15hWmpsDCwrryrldLYCFhWbwU1xCYe1iW7UF2YK5hedQsmYGFfDcsgwxrlqzAor4bmvZRe/qwv+PdR9F3AQAAAAAAAAAAAIj2AqJiOog1KSJbAAAAAElFTkSuQmCC'

export { menuBorder, shrinkIcon, expandIcon, selectSurface }