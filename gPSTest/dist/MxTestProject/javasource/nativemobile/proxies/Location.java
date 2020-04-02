// This file was generated by Mendix Studio Pro.
//
// WARNING: Code you write here will be lost the next time you deploy the project.

package nativemobile.proxies;

public class Location
{
	private final com.mendix.systemwideinterfaces.core.IMendixObject locationMendixObject;

	private final com.mendix.systemwideinterfaces.core.IContext context;

	/**
	 * Internal name of this entity
	 */
	public static final java.lang.String entityName = "NativeMobile.Location";

	/**
	 * Enum describing members of this entity
	 */
	public enum MemberNames
	{
		longitude("longitude"),
		latitude("latitude");

		private java.lang.String metaName;

		MemberNames(java.lang.String s)
		{
			metaName = s;
		}

		@java.lang.Override
		public java.lang.String toString()
		{
			return metaName;
		}
	}

	public Location(com.mendix.systemwideinterfaces.core.IContext context)
	{
		this(context, com.mendix.core.Core.instantiate(context, "NativeMobile.Location"));
	}

	protected Location(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixObject locationMendixObject)
	{
		if (locationMendixObject == null)
			throw new java.lang.IllegalArgumentException("The given object cannot be null.");
		if (!com.mendix.core.Core.isSubClassOf("NativeMobile.Location", locationMendixObject.getType()))
			throw new java.lang.IllegalArgumentException("The given object is not a NativeMobile.Location");

		this.locationMendixObject = locationMendixObject;
		this.context = context;
	}

	/**
	 * @deprecated Use 'Location.load(IContext, IMendixIdentifier)' instead.
	 */
	@java.lang.Deprecated
	public static nativemobile.proxies.Location initialize(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixIdentifier mendixIdentifier) throws com.mendix.core.CoreException
	{
		return nativemobile.proxies.Location.load(context, mendixIdentifier);
	}

	/**
	 * Initialize a proxy using context (recommended). This context will be used for security checking when the get- and set-methods without context parameters are called.
	 * The get- and set-methods with context parameter should be used when for instance sudo access is necessary (IContext.createSudoClone() can be used to obtain sudo access).
	 */
	public static nativemobile.proxies.Location initialize(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixObject mendixObject)
	{
		return new nativemobile.proxies.Location(context, mendixObject);
	}

	public static nativemobile.proxies.Location load(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixIdentifier mendixIdentifier) throws com.mendix.core.CoreException
	{
		com.mendix.systemwideinterfaces.core.IMendixObject mendixObject = com.mendix.core.Core.retrieveId(context, mendixIdentifier);
		return nativemobile.proxies.Location.initialize(context, mendixObject);
	}

	public static java.util.List<nativemobile.proxies.Location> load(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String xpathConstraint) throws com.mendix.core.CoreException
	{
		java.util.List<nativemobile.proxies.Location> result = new java.util.ArrayList<nativemobile.proxies.Location>();
		for (com.mendix.systemwideinterfaces.core.IMendixObject obj : com.mendix.core.Core.retrieveXPathQuery(context, "//NativeMobile.Location" + xpathConstraint))
			result.add(nativemobile.proxies.Location.initialize(context, obj));
		return result;
	}

	/**
	 * Commit the changes made on this proxy object.
	 */
	public final void commit() throws com.mendix.core.CoreException
	{
		com.mendix.core.Core.commit(context, getMendixObject());
	}

	/**
	 * Commit the changes made on this proxy object using the specified context.
	 */
	public final void commit(com.mendix.systemwideinterfaces.core.IContext context) throws com.mendix.core.CoreException
	{
		com.mendix.core.Core.commit(context, getMendixObject());
	}

	/**
	 * Delete the object.
	 */
	public final void delete()
	{
		com.mendix.core.Core.delete(context, getMendixObject());
	}

	/**
	 * Delete the object using the specified context.
	 */
	public final void delete(com.mendix.systemwideinterfaces.core.IContext context)
	{
		com.mendix.core.Core.delete(context, getMendixObject());
	}
	/**
	 * @return value of longitude
	 */
	public final java.lang.String getlongitude()
	{
		return getlongitude(getContext());
	}

	/**
	 * @param context
	 * @return value of longitude
	 */
	public final java.lang.String getlongitude(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.longitude.toString());
	}

	/**
	 * Set value of longitude
	 * @param longitude
	 */
	public final void setlongitude(java.lang.String longitude)
	{
		setlongitude(getContext(), longitude);
	}

	/**
	 * Set value of longitude
	 * @param context
	 * @param longitude
	 */
	public final void setlongitude(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String longitude)
	{
		getMendixObject().setValue(context, MemberNames.longitude.toString(), longitude);
	}

	/**
	 * @return value of latitude
	 */
	public final java.lang.String getlatitude()
	{
		return getlatitude(getContext());
	}

	/**
	 * @param context
	 * @return value of latitude
	 */
	public final java.lang.String getlatitude(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.latitude.toString());
	}

	/**
	 * Set value of latitude
	 * @param latitude
	 */
	public final void setlatitude(java.lang.String latitude)
	{
		setlatitude(getContext(), latitude);
	}

	/**
	 * Set value of latitude
	 * @param context
	 * @param latitude
	 */
	public final void setlatitude(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String latitude)
	{
		getMendixObject().setValue(context, MemberNames.latitude.toString(), latitude);
	}

	/**
	 * @return the IMendixObject instance of this proxy for use in the Core interface.
	 */
	public final com.mendix.systemwideinterfaces.core.IMendixObject getMendixObject()
	{
		return locationMendixObject;
	}

	/**
	 * @return the IContext instance of this proxy, or null if no IContext instance was specified at initialization.
	 */
	public final com.mendix.systemwideinterfaces.core.IContext getContext()
	{
		return context;
	}

	@java.lang.Override
	public boolean equals(Object obj)
	{
		if (obj == this)
			return true;

		if (obj != null && getClass().equals(obj.getClass()))
		{
			final nativemobile.proxies.Location that = (nativemobile.proxies.Location) obj;
			return getMendixObject().equals(that.getMendixObject());
		}
		return false;
	}

	@java.lang.Override
	public int hashCode()
	{
		return getMendixObject().hashCode();
	}

	/**
	 * @return String name of this class
	 */
	public static java.lang.String getType()
	{
		return "NativeMobile.Location";
	}

	/**
	 * @return String GUID from this object, format: ID_0000000000
	 * @deprecated Use getMendixObject().getId().toLong() to get a unique identifier for this object.
	 */
	@java.lang.Deprecated
	public java.lang.String getGUID()
	{
		return "ID_" + getMendixObject().getId().toLong();
	}
}
