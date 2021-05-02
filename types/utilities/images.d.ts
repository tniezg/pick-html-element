declare const menuBorder = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAYAAAA4E5OyAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVFSURBVHgB7ZxLSyNZFMdPyldAxGzELOMDxmUQYYIIBkaYXjm9NxHdzUeYjzHL2TlgPkD3rnuXBtG40SzT+KAabYiKEhQlxleff7gJSVllksq5ZV4/0CpNpSr1zznn3jr3nusjzWxsbAR4E+rv7w++vLxgP2AYhl/tO+Lz+XLPz8953s3xfvbx8THL+9n19fUcacRHGmARIMAM38hMrRtvFAjF5zRZoDSLY5IwYoKwCH4WIcIfOMIf2E8eAHH4J1koFEwpy2lakPcQwgpfO8/XTrPVpJoVpilBEolEhDfR9xLCSsliVlZW0uQSV4IgUPb19X3ki4eoBYEwDw8P/7uxloYFaTWrcAJuxJtkLBZLNfS+Rg7e3Nz8wJsItRfJeDyerPfgugVhMT7yJkztSZpF+VTPgXUJwm7yN7tIkNoY/vzZ1dXV/2odZ9Q6AJbR7mIAjilBZeVv8qYgfIIota+b2BFWcdARR0FKrQl1HhF1b7bYCqIeyKLUuUTVPb7CVpCBgYG1Vu9nNAPuDR1Lu9deCcLKhaWfUFsR9LLtXKdKEJgRW0eUuge4TpUnVAmCp9ZusI4ScB3cc+X/yoLAOtiMOqmJrQukLSqtpNJCQp0cSJ2wWkl/aQexg18knQwPD/vn5uZ+DwQCoaGhocDg4KCtez49PeXv7u6y5+fnmcPDw+8XFxd686hsJbxJFvfxS+VA10gTY2Njgfn5+b9GRkZC5AIWJL23t/dNpzCcbUP+xCxaCIuhLXZEmImJiUVu9127IwsaXlpamjFNM7mzs7NLGkBSnDdmMYboynwtLCxEp6en/2xGjBI4x9TU1IdFhjSAEYLiddC68DhJlISBZUxOTv5BwoyOjoY4FuVPT09/kiz+5eXltMHBTfzRHjEDbkKaCIVCUVyDhOEgHzI4oosLMjs7uyjhJk7g3AjSJAyPFAbZWwxRQfDNIQiSZtBioRknQdBLN6S76hz4Zsgj0KchWQJoZURVHh8f/408Ah08EgSD8OIWwmbsWf4VvV0SpOgyJAxUJo9w6vo3g7gg7U5PEAs9QSz0BLHQE8SCuCCFQkFrMqcSJJJIGAOTS0iQ+/t7zwRBVo0EgRawEFGVLy8vf5BHnJ2dZUgQTAMVt5D9/f2GZuw0w9HR0XeSJWewKqKC3N7e5m9ubkzSDPKs0jlWTBA21AxhUba3tz+rWchawLmRdCZhoAViiEnC4Js7Pj4W/8Al2FV0ZeCzBqYuSscRkGI4Sy4uysnJSXJ3d1c8TkEDaFHsh/Bjr2i0LrG1tZXkgaavEu6DcxwcHHz9xpAGMH8e2+K4DPtOxjroKwUshU08gzyr29Ti9fW1yeMxnzUPVBVnP5dnISYSiX90j+0i34oUI7JqSCQ55U7Q283n87mrq6sfaMbRcpFG4C6xWOxf7JfHdlkM+GWUNIJvmH9wHc/6KvWA+fGl/fKzDCoJ1HTorgL3jPKS0t9lQTjC5pWVdBUoK6ksEqh62u02K0HswD1X/q9KEFgJqXkS3QBih7WE5FU+BOUUpTa5k4F12BUa2SaIOPHyqZNdB/eGAiO712wFUWaUpM4l6VRt5ZhCVJVIndjqvFll9WZONR6Pf+GN64K+FiRdq7qqZpIZlUgovqE2B8mfeqqqeiVmFhotQoxS+5WNpJTr10WvTNX6PnKBqppYa9VCAXQs0ZfypJC5EtTWqCnhLSGMW6uoOgc1CaxFLYYQfufFEFJqMYSmetiSy2UUF07x0mIkhSifkzSgignCmDKuaUGVDPLALb2gihPKcoJqyR1MyHOz5E5ODaiJLZzixC+Pep38tBMCHQAAAABJRU5ErkJggg==";
declare const shrinkIcon = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCA1NiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMjMiIHk9IjEiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgcng9IjIiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIvPgo8cGF0aCBkPSJNMCA1SDE2VjdIMFY1WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTEyLjUgMS41TDE3IDZMMTQgNkwxMSAzTDEyLjUgMS41WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTEyLjUgMTAuNUwxNyA2TDE0IDZMMTEgOUwxMi41IDEwLjVaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNNTYgNUg0MFY3SDU2VjVaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNNDMuNSAxLjVMMzkgNkw0MiA2TDQ1IDNMNDMuNSAxLjVaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNNDMuNSAxMC41TDM5IDZMNDIgNkw0NSA5TDQzLjUgMTAuNVoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=";
declare const expandIcon = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCA1NiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMjMiIHk9IjEiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgcng9IjIiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIvPgo8cGF0aCBkPSJNMTcgNUgxVjdIMTdWNVoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik00LjUgMS41TC01LjYxNTMyZS0wNyA2TDMgNkw2IDNMNC41IDEuNVoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik00LjUgMTAuNUwtNS44MDg2ZS0wNyA2TDMgNkw2IDlMNC41IDEwLjVaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMzkgNUg1NVY3SDM5VjVaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNNTEuNSAxLjVMNTYgNkw1MyA2TDUwIDNMNTEuNSAxLjVaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNNTEuNSAxMC41TDU2IDZMNTMgNkw1MCA5TDUxLjUgMTAuNVoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=";
declare const selectSurface = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABKCAYAAAAc0MJxAAAACXBIWXMAABYlAAAWJQFJUiTwAAAFGmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDYgNzkuMTY0NjQ4LCAyMDIxLzAxLzEyLTE1OjUyOjI5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjIuMiAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMDQtMjRUMTE6Mzg6MjErMDI6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTA0LTMwVDE5OjE0OjE0KzAyOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTA0LTMwVDE5OjE0OjE0KzAyOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjc1MTFiY2ZlLWExNmMtNDM3My04NzA5LThhYzgwMTNkOTg1YyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3NTExYmNmZS1hMTZjLTQzNzMtODcwOS04YWM4MDEzZDk4NWMiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3NTExYmNmZS1hMTZjLTQzNzMtODcwOS04YWM4MDEzZDk4NWMiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjc1MTFiY2ZlLWExNmMtNDM3My04NzA5LThhYzgwMTNkOTg1YyIgc3RFdnQ6d2hlbj0iMjAyMS0wNC0yNFQxMTozODoyMSswMjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjIgKE1hY2ludG9zaCkiLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+wLz7MAAAActJREFUeJzt2VFugzAQhOFZ1EvAWUgObzhLcgz3oSKiqCqD4/VCNP9TpUpO+0Vp14vlnKH266J/gKskKDJBkQmKTFBkgiITFJmgyARFJigyQZEJikxQZIIiExSZoMgERSYoMkGRCYpMUGSCIvvyPNzMkFLqAeB+vz89XmN9vuejN/M8fJqm3swGAMg5P2pjpZR+nX+73VzeDMD5o9d1nS1fm9mwvPs1WiNtX8sjV6hxHB9m9nqXa2FtkczsOY7j491z/8v9j3ltrAgkoNF/vVpYUUhAw/HgXaxIJKDxHFWKFY0EBAycR7HOgAQETeYs1lmQgMArzBbrrzloM4eFIQHOk7nZ/gw4z/MA/MCVfH/dZa8wDFTNPH8XbQ/IBEUmKLJwqJRSvzdH1dw6lBYKtcxJe3NU7RVNSWFQzD7Jc591tBAoduL22meV1Bzq6LXkLFhNoUrvbmfAagb17gU3GqsJVK0tQCSWO1TtVUkUVrPnekDdVck8z0PO+QX0Sc/1qu6TmH1WzdzXLEf2SSWtz7/sPuqTCr8UXyVBkQmKTFBkgiITFJmgyARFJigyQZEJikxQZIIiExSZoMgERSYoMkGRCYpMUGSCIhMU2TdKNAMuZ0mDzAAAAABJRU5ErkJggg==";
declare const brushMagnifyingGlass = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDciIGhlaWdodD0iNDciIHZpZXdCb3g9IjAgMCA0NyA0NyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMC41IDMzQzEzLjU5NjQgMzMgOCAyNy40MDM2IDggMjAuNUM4IDEzLjU5NjQgMTMuNTk2NCA4IDIwLjUgOEMyNy40MDM2IDggMzMgMTMuNTk2NCAzMyAyMC41QzMzIDI3LjQwMzYgMjcuNDAzNiAzMyAyMC41IDMzWk0wIDIwLjVDMCA5LjE3ODE2IDkuMTc4MTYgMCAyMC41IDBDMzEuODIxOCAwIDQxIDkuMTc4MTYgNDEgMjAuNUM0MSAyNC4zNjY0IDM5LjkyOTYgMjcuOTgyOCAzOC4wNjkgMzEuMDY5TDQ3IDQwTDQwIDQ3TDMxLjA2OSAzOC4wNjlDMjcuOTgyOCAzOS45Mjk2IDI0LjM2NjQgNDEgMjAuNSA0MUM5LjE3ODE2IDQxIDAgMzEuODIxOCAwIDIwLjVaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K";
declare const selectPreview = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABKCAYAAAAc0MJxAAAACXBIWXMAABYlAAAWJQFJUiTwAAAFGmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDYgNzkuMTY0NjQ4LCAyMDIxLzAxLzEyLTE1OjUyOjI5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjIuMiAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMDQtMzBUMTg6MzI6MDkrMDI6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTA0LTMwVDE5OjEyOjA2KzAyOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTA0LTMwVDE5OjEyOjA2KzAyOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmRkYzdhNDU4LWJjNmItNGE3YS1hNDBiLTc5ZmJlZTg0ODBlYSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpkZGM3YTQ1OC1iYzZiLTRhN2EtYTQwYi03OWZiZWU4NDgwZWEiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkZGM3YTQ1OC1iYzZiLTRhN2EtYTQwYi03OWZiZWU4NDgwZWEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmRkYzdhNDU4LWJjNmItNGE3YS1hNDBiLTc5ZmJlZTg0ODBlYSIgc3RFdnQ6d2hlbj0iMjAyMS0wNC0zMFQxODozMjowOSswMjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjIgKE1hY2ludG9zaCkiLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+PGgifwAAAa1JREFUeJzt2VFuwjAQRdHnKttibcDasi2k9KOp5FapfBM8nqR69wuBlJATaO2hLMsi1+4j+w1cJUPBDAUzFMxQMEPBDAUzFMxQMEPBDAUzFMxQMEPBDAUzFMxQMEPBDAUzFMxQMEPBpsiDl1I0zbpL0uumZ8Q56uNH/vQWCrVexGN93B3r9/GlmJshxX/1SvX48X33e1QjbZyre6FQr5se+nmXu2BtID3Xc4UV/se8N1YGkjTov14vrCwkaeDy4F2sTCRp8DrqKFY2kpSw4NyLdQYkKWllTrHOgiQlbmE2sLbWQfVzaUiSVCKX/aW014DT/HXxfyG0Xq8LvZZsqJ5FXounBzBDwQwFS4eaZt1b66ieU4ejhc6jmidvzKui51l7SvtEwXlS2DxrbylQdMUdNc860nCovduSs2ANhTq6dzsD1jCodze42VhDoHpNATKxwqF6j0qysEKhouZJGVgjf9frOk+C86xuhY9Z9syTjlQf/7LzqP9U+qb4KhkKZiiYoWCGghkKZiiYoWCGghkKZiiYoWCGghkKZiiYoWCGghkKZiiYoWCGghkK9gnBxcKKKCEXuwAAAABJRU5ErkJggg==";
declare const selectPreviewBorder = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHLSURBVHgB7ZjBTcNAEEX/2o6UYzrAdABHDkBSQVICqYB0kKQDUgGUABUkAiGOUII7IEckHC8zUTgAUmbW3kVytO9iy/re/R7vjGdtsidYtIAELSEa9U006pto1DcZGmAt1sZgQaerLEPxcYbih2CJHl0/obMRaYekzVETU6fg06QFTTouz7FyuS99xBUdpnUM13n1i80Gp64mmc0F7vheHgOOuEZ0TgZn8ADNO6PDVKt3iejCl0lmN5Y6siqjvCbL0p/Jb3hMHluj1UZ0jgHW8M1gWzXGGqm4RvmJKQmOERDy8E6H3j6NGFFj8YDQVPJalV99gnuEJpFLnWiUFvwbAkNzFJJGjmiIJPo7RyFJYvfkm8Mx2n3GEUKz3F9DGTnrq7DFntn1rHuRX32FPkJTYSRJNAX/GoGxKYaSRpNMPfoW9xEI7vrpM51LOl2bZ3CrWfDO8JiJrnlWGeUnzjr6blxLltL+yer2T/o6ajGhJeDN7HYsg4lW774LNbgpPxs00ryFTt1MMu5fJops2sHrbuvrBCcl3+tqkjFNfuRSkhUG1K9Sc71tB39FufuCnK7ndHpJk0wM6idkI6P/SeyefBON+iYa9U1rjH4BSjeBHKcqbqYAAAAASUVORK5CYII=";
declare const selectedIcon = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODYiIGhlaWdodD0iODYiIHZpZXdCb3g9IjAgMCA4NiA4NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExIDQ0TDQyIDc1TDMxIDg2TC0zLjMyNzUxZS0wNyA1NUwxMSA0NFoiIGZpbGw9IiMwNEMzMDAiLz4KPHBhdGggZD0iTTg2IDMxTDMxIDg2TDIwIDc1TDc1IDIwTDg2IDMxWiIgZmlsbD0iIzA0QzMwMCIvPgo8L3N2Zz4K";
export { menuBorder, shrinkIcon, expandIcon, selectSurface, brushMagnifyingGlass, selectPreview, selectPreviewBorder, selectedIcon };
