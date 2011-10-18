from setuptools import setup
from remotesupport import __version__

setup(
    name = "openproximity-plugin-remotecontrol",
    version = __version__,
    packages = ['remotesupport',],
    summary = "Remote Control Plugin",
    description = """A plugin that allows customers to get remote support""",
    author = "Naranjo Manuel Francisco",
    author_email = "manuel@aircable.net",
    license = "GPL2",
    url = "https://github.com/OpenProximity/plugins-remotecontrol", 
)
